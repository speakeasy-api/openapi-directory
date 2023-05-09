# Loyalty

### Available Operations

* [AccumulateLoyaltyPoints](#accumulateloyaltypoints) - AccumulateLoyaltyPoints
* [AdjustLoyaltyPoints](#adjustloyaltypoints) - AdjustLoyaltyPoints
* [CalculateLoyaltyPoints](#calculateloyaltypoints) - CalculateLoyaltyPoints
* [CreateLoyaltyAccount](#createloyaltyaccount) - CreateLoyaltyAccount
* [CreateLoyaltyReward](#createloyaltyreward) - CreateLoyaltyReward
* [DeleteLoyaltyReward](#deleteloyaltyreward) - DeleteLoyaltyReward
* [ListLoyaltyPrograms](#listloyaltyprograms) - ListLoyaltyPrograms
* [RedeemLoyaltyReward](#redeemloyaltyreward) - RedeemLoyaltyReward
* [RetrieveLoyaltyAccount](#retrieveloyaltyaccount) - RetrieveLoyaltyAccount
* [RetrieveLoyaltyProgram](#retrieveloyaltyprogram) - RetrieveLoyaltyProgram
* [RetrieveLoyaltyReward](#retrieveloyaltyreward) - RetrieveLoyaltyReward
* [SearchLoyaltyAccounts](#searchloyaltyaccounts) - SearchLoyaltyAccounts
* [SearchLoyaltyEvents](#searchloyaltyevents) - SearchLoyaltyEvents
* [SearchLoyaltyRewards](#searchloyaltyrewards) - SearchLoyaltyRewards

## AccumulateLoyaltyPoints

Adds points to a loyalty account.

- If you are using the Orders API to manage orders, you only provide the `order_id`. 
The endpoint reads the order to compute points to add to the buyer's account.
- If you are not using the Orders API to manage orders, 
you first perform a client-side computation to compute the points.  
For spend-based and visit-based programs, you can first call 
[CalculateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/calculate-loyalty-points) to compute the points  
that you provide to this endpoint. 

__Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs. 
For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.AccumulateLoyaltyPoints(ctx, operations.AccumulateLoyaltyPointsRequest{
        AccumulateLoyaltyPointsRequest: shared.AccumulateLoyaltyPointsRequest{
            AccumulatePoints: shared.LoyaltyEventAccumulatePoints{
                LoyaltyProgramID: sdk.String("vitae"),
                OrderID: sdk.String("beatae"),
                Points: sdk.Int64(866917),
            },
            IdempotencyKey: "voluptatem",
            LocationID: "blanditiis",
        },
        AccountID: "eligendi",
    }, operations.AccumulateLoyaltyPointsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccumulateLoyaltyPointsResponse != nil {
        // handle response
    }
}
```

## AdjustLoyaltyPoints

Adds points to or subtracts points from a buyer's account. 

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call 
[AccumulateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/accumulate-loyalty-points) 
to add points when a buyer pays for the purchase.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.AdjustLoyaltyPoints(ctx, operations.AdjustLoyaltyPointsRequest{
        AdjustLoyaltyPointsRequest: shared.AdjustLoyaltyPointsRequest{
            AdjustPoints: shared.LoyaltyEventAdjustPoints{
                LoyaltyProgramID: sdk.String("tenetur"),
                Points: 535876,
                Reason: sdk.String("deleniti"),
            },
            IdempotencyKey: "necessitatibus",
        },
        AccountID: "cumque",
    }, operations.AdjustLoyaltyPointsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdjustLoyaltyPointsResponse != nil {
        // handle response
    }
}
```

## CalculateLoyaltyPoints

Calculates the points a purchase earns.

- If you are using the Orders API to manage orders, you provide `order_id` in the request. The 
endpoint calculates the points by reading the order.
- If you are not using the Orders API to manage orders, you provide the purchase amount in 
the request for the endpoint to calculate the points.

An application might call this endpoint to show the points that a buyer can earn with the 
specific purchase.

__Note:__ The country of the seller's Square account determines whether tax is included in the purchase amount when accruing points for spend-based and visit-based programs. 
For more information, see [Availability of Square Loyalty](https://developer.squareup.com/docs/loyalty-api/overview#loyalty-market-availability).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.CalculateLoyaltyPoints(ctx, operations.CalculateLoyaltyPointsRequest{
        CalculateLoyaltyPointsRequest: shared.CalculateLoyaltyPointsRequest{
            OrderID: sdk.String("iste"),
            TransactionAmountMoney: &shared.Money{
                Amount: sdk.Int64(972114),
                Currency: sdk.String("nihil"),
            },
        },
        ProgramID: "libero",
    }, operations.CalculateLoyaltyPointsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateLoyaltyPointsResponse != nil {
        // handle response
    }
}
```

## CreateLoyaltyAccount

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.CreateLoyaltyAccount(ctx, shared.CreateLoyaltyAccountRequest{
        IdempotencyKey: "perspiciatis",
        LoyaltyAccount: shared.LoyaltyAccount{
            Balance: sdk.Int64(577273),
            CreatedAt: sdk.String("officia"),
            CustomerID: sdk.String("nemo"),
            EnrolledAt: sdk.String("quis"),
            ExpiringPointDeadlines: []shared.LoyaltyAccountExpiringPointDeadline{
                shared.LoyaltyAccountExpiringPointDeadline{
                    ExpiresAt: "similique",
                    Points: 432546,
                },
            },
            ID: sdk.String("56ed333b-b0ce-48aa-a543-2a986eb7e14c"),
            LifetimePoints: sdk.Int64(649901),
            Mapping: &shared.LoyaltyAccountMapping{
                CreatedAt: sdk.String("ipsam"),
                ID: sdk.String("64089150-0970-419a-88f8-8ece7bf904e0"),
                PhoneNumber: sdk.String("architecto"),
            },
            ProgramID: "dicta",
            UpdatedAt: sdk.String("sit"),
        },
    }, operations.CreateLoyaltyAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoyaltyAccountResponse != nil {
        // handle response
    }
}
```

## CreateLoyaltyReward

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points 
to lock for this reward. 
- If the request includes `order_id`, it adds the reward and related discount to the order. 

After a reward is created, the points are locked and 
not available for the buyer to redeem another reward.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.CreateLoyaltyReward(ctx, shared.CreateLoyaltyRewardRequest{
        IdempotencyKey: "ad",
        Reward: shared.LoyaltyReward{
            CreatedAt: sdk.String("temporibus"),
            ID: sdk.String("38908162-c6be-4b68-a0f6-57b7d03a1480"),
            LoyaltyAccountID: "hic",
            OrderID: sdk.String("blanditiis"),
            Points: sdk.Int64(870212),
            RedeemedAt: sdk.String("repudiandae"),
            RewardTierID: "ipsum",
            Status: sdk.String("voluptatem"),
            UpdatedAt: sdk.String("tenetur"),
        },
    }, operations.CreateLoyaltyRewardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoyaltyRewardResponse != nil {
        // handle response
    }
}
```

## DeleteLoyaltyReward

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created 
(see [CreateLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/create-loyalty-reward)), 
it updates the order by removing the reward and related 
discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.DeleteLoyaltyReward(ctx, operations.DeleteLoyaltyRewardRequest{
        RewardID: "aut",
    }, operations.DeleteLoyaltyRewardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLoyaltyRewardResponse != nil {
        // handle response
    }
}
```

## ListLoyaltyPrograms

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).


Replaced with [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-program) when used with the keyword `main`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.ListLoyaltyPrograms(ctx, operations.ListLoyaltyProgramsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLoyaltyProgramsResponse != nil {
        // handle response
    }
}
```

## RedeemLoyaltyReward

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state. 

If you are using your own order processing system (not using the 
Orders API), you call this endpoint after the buyer paid for the 
purchase.

After the reward reaches the terminal state, it cannot be deleted. 
In other words, points used for the reward cannot be returned 
to the account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.RedeemLoyaltyReward(ctx, operations.RedeemLoyaltyRewardRequest{
        RedeemLoyaltyRewardRequest: shared.RedeemLoyaltyRewardRequest{
            IdempotencyKey: "ex",
            LocationID: "cupiditate",
        },
        RewardID: "fugiat",
    }, operations.RedeemLoyaltyRewardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RedeemLoyaltyRewardResponse != nil {
        // handle response
    }
}
```

## RetrieveLoyaltyAccount

Retrieves a loyalty account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.RetrieveLoyaltyAccount(ctx, operations.RetrieveLoyaltyAccountRequest{
        AccountID: "atque",
    }, operations.RetrieveLoyaltyAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveLoyaltyAccountResponse != nil {
        // handle response
    }
}
```

## RetrieveLoyaltyProgram

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`. 

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.RetrieveLoyaltyProgram(ctx, operations.RetrieveLoyaltyProgramRequest{
        ProgramID: "beatae",
    }, operations.RetrieveLoyaltyProgramSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveLoyaltyProgramResponse != nil {
        // handle response
    }
}
```

## RetrieveLoyaltyReward

Retrieves a loyalty reward.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.RetrieveLoyaltyReward(ctx, operations.RetrieveLoyaltyRewardRequest{
        RewardID: "aut",
    }, operations.RetrieveLoyaltyRewardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveLoyaltyRewardResponse != nil {
        // handle response
    }
}
```

## SearchLoyaltyAccounts

Searches for loyalty accounts in a loyalty program.  

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.  

Search results are sorted by `created_at` in ascending order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.SearchLoyaltyAccounts(ctx, shared.SearchLoyaltyAccountsRequest{
        Cursor: sdk.String("commodi"),
        Limit: sdk.Int64(103068),
        Query: &shared.SearchLoyaltyAccountsRequestLoyaltyAccountQuery{
            CustomerIds: []string{
                "temporibus",
                "unde",
                "voluptate",
            },
            Mappings: []shared.LoyaltyAccountMapping{
                shared.LoyaltyAccountMapping{
                    CreatedAt: sdk.String("sunt"),
                    ID: sdk.String("52297510-da80-4312-a92c-c61c2a702bb9"),
                    PhoneNumber: sdk.String("odio"),
                },
                shared.LoyaltyAccountMapping{
                    CreatedAt: sdk.String("repudiandae"),
                    ID: sdk.String("e102da2d-e35f-48e0-9bf3-3eaab45402ac"),
                    PhoneNumber: sdk.String("sunt"),
                },
                shared.LoyaltyAccountMapping{
                    CreatedAt: sdk.String("iure"),
                    ID: sdk.String("04bf1cc9-fc61-4aae-9eb5-f0c492b5744d"),
                    PhoneNumber: sdk.String("doloremque"),
                },
                shared.LoyaltyAccountMapping{
                    CreatedAt: sdk.String("rem"),
                    ID: sdk.String("a2267aae-e79e-43c7-9ad3-1becb83d2378"),
                    PhoneNumber: sdk.String("mollitia"),
                },
            },
        },
    }, operations.SearchLoyaltyAccountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchLoyaltyAccountsResponse != nil {
        // handle response
    }
}
```

## SearchLoyaltyEvents

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a 
buyer's loyalty account. Each change in the point balance 
(for example, points earned, points redeemed, and points expired) is 
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.SearchLoyaltyEvents(ctx, shared.SearchLoyaltyEventsRequest{
        Cursor: sdk.String("debitis"),
        Limit: sdk.Int64(203585),
        Query: &shared.LoyaltyEventQuery{
            Filter: &shared.LoyaltyEventFilter{
                DateTimeFilter: &shared.LoyaltyEventDateTimeFilter{
                    CreatedAt: shared.TimeRange{
                        EndAt: sdk.String("facilis"),
                        StartAt: sdk.String("sapiente"),
                    },
                },
                LocationFilter: &shared.LoyaltyEventLocationFilter{
                    LocationIds: []string{
                        "sed",
                        "dolor",
                        "nulla",
                        "sint",
                    },
                },
                LoyaltyAccountFilter: &shared.LoyaltyEventLoyaltyAccountFilter{
                    LoyaltyAccountID: "eius",
                },
                OrderFilter: &shared.LoyaltyEventOrderFilter{
                    OrderID: "ad",
                },
                TypeFilter: &shared.LoyaltyEventTypeFilter{
                    Types: []string{
                        "animi",
                    },
                },
            },
        },
    }, operations.SearchLoyaltyEventsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchLoyaltyEventsResponse != nil {
        // handle response
    }
}
```

## SearchLoyaltyRewards

Searches for loyalty rewards in a loyalty account. 

In the current implementation, the endpoint supports search by the reward `status`.

If you know a reward ID, use the 
[RetrieveLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-reward) endpoint.

Search results are sorted by `updated_at` in descending order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Loyalty.SearchLoyaltyRewards(ctx, shared.SearchLoyaltyRewardsRequest{
        Cursor: sdk.String("unde"),
        Limit: sdk.Int64(522610),
        Query: &shared.SearchLoyaltyRewardsRequestLoyaltyRewardQuery{
            LoyaltyAccountID: "iure",
            Status: sdk.String("error"),
        },
    }, operations.SearchLoyaltyRewardsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchLoyaltyRewardsResponse != nil {
        // handle response
    }
}
```
