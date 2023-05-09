# loyalty

### Available Operations

* [accumulateLoyaltyPoints](#accumulateloyaltypoints) - AccumulateLoyaltyPoints
* [adjustLoyaltyPoints](#adjustloyaltypoints) - AdjustLoyaltyPoints
* [calculateLoyaltyPoints](#calculateloyaltypoints) - CalculateLoyaltyPoints
* [createLoyaltyAccount](#createloyaltyaccount) - CreateLoyaltyAccount
* [createLoyaltyReward](#createloyaltyreward) - CreateLoyaltyReward
* [deleteLoyaltyReward](#deleteloyaltyreward) - DeleteLoyaltyReward
* [listLoyaltyPrograms](#listloyaltyprograms) - ListLoyaltyPrograms
* [redeemLoyaltyReward](#redeemloyaltyreward) - RedeemLoyaltyReward
* [retrieveLoyaltyAccount](#retrieveloyaltyaccount) - RetrieveLoyaltyAccount
* [retrieveLoyaltyProgram](#retrieveloyaltyprogram) - RetrieveLoyaltyProgram
* [retrieveLoyaltyReward](#retrieveloyaltyreward) - RetrieveLoyaltyReward
* [searchLoyaltyAccounts](#searchloyaltyaccounts) - SearchLoyaltyAccounts
* [searchLoyaltyEvents](#searchloyaltyevents) - SearchLoyaltyEvents
* [searchLoyaltyRewards](#searchloyaltyrewards) - SearchLoyaltyRewards

## accumulateLoyaltyPoints

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccumulateLoyaltyPointsRequest;
import org.openapis.openapi.models.operations.AccumulateLoyaltyPointsResponse;
import org.openapis.openapi.models.operations.AccumulateLoyaltyPointsSecurity;
import org.openapis.openapi.models.shared.AccumulateLoyaltyPointsRequest;
import org.openapis.openapi.models.shared.LoyaltyEventAccumulatePoints;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccumulateLoyaltyPointsRequest req = new AccumulateLoyaltyPointsRequest(                new AccumulateLoyaltyPointsRequest(                new LoyaltyEventAccumulatePoints() {{
                                                loyaltyProgramId = "unde";
                                                orderId = "consectetur";
                                                points = 186222L;
                                            }};, "aliquid", "doloremque");, "enim");            

            AccumulateLoyaltyPointsResponse res = sdk.loyalty.accumulateLoyaltyPoints(req, new AccumulateLoyaltyPointsSecurity("explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accumulateLoyaltyPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adjustLoyaltyPoints

Adds points to or subtracts points from a buyer's account. 

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call 
[AccumulateLoyaltyPoints](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/accumulate-loyalty-points) 
to add points when a buyer pays for the purchase.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdjustLoyaltyPointsRequest;
import org.openapis.openapi.models.operations.AdjustLoyaltyPointsResponse;
import org.openapis.openapi.models.operations.AdjustLoyaltyPointsSecurity;
import org.openapis.openapi.models.shared.AdjustLoyaltyPointsRequest;
import org.openapis.openapi.models.shared.LoyaltyEventAdjustPoints;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdjustLoyaltyPointsRequest req = new AdjustLoyaltyPointsRequest(                new AdjustLoyaltyPointsRequest(                new LoyaltyEventAdjustPoints(370794L) {{
                                                loyaltyProgramId = "beatae";
                                                reason = "repudiandae";
                                            }};, "ex");, "ex");            

            AdjustLoyaltyPointsResponse res = sdk.loyalty.adjustLoyaltyPoints(req, new AdjustLoyaltyPointsSecurity("harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adjustLoyaltyPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calculateLoyaltyPoints

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateLoyaltyPointsRequest;
import org.openapis.openapi.models.operations.CalculateLoyaltyPointsResponse;
import org.openapis.openapi.models.operations.CalculateLoyaltyPointsSecurity;
import org.openapis.openapi.models.shared.CalculateLoyaltyPointsRequest;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalculateLoyaltyPointsRequest req = new CalculateLoyaltyPointsRequest(                new CalculateLoyaltyPointsRequest() {{
                                orderId = "cum";
                                transactionAmountMoney = new Money() {{
                                    amount = 250182L;
                                    currency = "quia";
                                }};;
                            }};, "laboriosam");            

            CalculateLoyaltyPointsResponse res = sdk.loyalty.calculateLoyaltyPoints(req, new CalculateLoyaltyPointsSecurity("deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.calculateLoyaltyPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoyaltyAccount

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoyaltyAccountResponse;
import org.openapis.openapi.models.operations.CreateLoyaltyAccountSecurity;
import org.openapis.openapi.models.shared.CreateLoyaltyAccountRequest;
import org.openapis.openapi.models.shared.LoyaltyAccount;
import org.openapis.openapi.models.shared.LoyaltyAccountExpiringPointDeadline;
import org.openapis.openapi.models.shared.LoyaltyAccountMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateLoyaltyAccountRequest req = new CreateLoyaltyAccountRequest("molestias",                 new LoyaltyAccount("dignissimos") {{
                                balance = 813463L;
                                createdAt = "provident";
                                customerId = "omnis";
                                enrolledAt = "dolorum";
                                expiringPointDeadlines = new org.openapis.openapi.models.shared.LoyaltyAccountExpiringPointDeadline[]{{
                                    add(new LoyaltyAccountExpiringPointDeadline("amet", 371409L) {{
                                        expiresAt = "nulla";
                                        points = 244183L;
                                    }}),
                                }};
                                id = "670e93ee-6cf5-49f3-98aa-eacae323a31b";
                                lifetimePoints = 979954L;
                                mapping = new LoyaltyAccountMapping() {{
                                    createdAt = "ducimus";
                                    id = "ba1cc977-16c8-402c-89e0-c7d9d323f1aa";
                                    phoneNumber = "autem";
                                }};;
                                updatedAt = "sequi";
                            }};);            

            CreateLoyaltyAccountResponse res = sdk.loyalty.createLoyaltyAccount(req, new CreateLoyaltyAccountSecurity("officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createLoyaltyAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoyaltyReward

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points 
to lock for this reward. 
- If the request includes `order_id`, it adds the reward and related discount to the order. 

After a reward is created, the points are locked and 
not available for the buyer to redeem another reward.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoyaltyRewardResponse;
import org.openapis.openapi.models.operations.CreateLoyaltyRewardSecurity;
import org.openapis.openapi.models.shared.CreateLoyaltyRewardRequest;
import org.openapis.openapi.models.shared.LoyaltyReward;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateLoyaltyRewardRequest req = new CreateLoyaltyRewardRequest("nulla",                 new LoyaltyReward("occaecati", "optio") {{
                                createdAt = "asperiores";
                                id = "1c856bcb-a51e-4f24-94a4-7facf116cdd5";
                                orderId = "ut";
                                points = 291414L;
                                redeemedAt = "numquam";
                                status = "officia";
                                updatedAt = "reprehenderit";
                            }};);            

            CreateLoyaltyRewardResponse res = sdk.loyalty.createLoyaltyReward(req, new CreateLoyaltyRewardSecurity("nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createLoyaltyRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoyaltyReward

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created 
(see [CreateLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/create-loyalty-reward)), 
it updates the order by removing the reward and related 
discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoyaltyRewardRequest;
import org.openapis.openapi.models.operations.DeleteLoyaltyRewardResponse;
import org.openapis.openapi.models.operations.DeleteLoyaltyRewardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLoyaltyRewardRequest req = new DeleteLoyaltyRewardRequest("nisi");            

            DeleteLoyaltyRewardResponse res = sdk.loyalty.deleteLoyaltyReward(req, new DeleteLoyaltyRewardSecurity("consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteLoyaltyRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLoyaltyPrograms

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).


Replaced with [RetrieveLoyaltyProgram](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-program) when used with the keyword `main`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLoyaltyProgramsResponse;
import org.openapis.openapi.models.operations.ListLoyaltyProgramsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLoyaltyProgramsResponse res = sdk.loyalty.listLoyaltyPrograms(new ListLoyaltyProgramsSecurity("praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLoyaltyProgramsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redeemLoyaltyReward

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state. 

If you are using your own order processing system (not using the 
Orders API), you call this endpoint after the buyer paid for the 
purchase.

After the reward reaches the terminal state, it cannot be deleted. 
In other words, points used for the reward cannot be returned 
to the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedeemLoyaltyRewardRequest;
import org.openapis.openapi.models.operations.RedeemLoyaltyRewardResponse;
import org.openapis.openapi.models.operations.RedeemLoyaltyRewardSecurity;
import org.openapis.openapi.models.shared.RedeemLoyaltyRewardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedeemLoyaltyRewardRequest req = new RedeemLoyaltyRewardRequest(                new RedeemLoyaltyRewardRequest("iusto", "dolorem");, "placeat");            

            RedeemLoyaltyRewardResponse res = sdk.loyalty.redeemLoyaltyReward(req, new RedeemLoyaltyRewardSecurity("dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.redeemLoyaltyRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveLoyaltyAccount

Retrieves a loyalty account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveLoyaltyAccountRequest;
import org.openapis.openapi.models.operations.RetrieveLoyaltyAccountResponse;
import org.openapis.openapi.models.operations.RetrieveLoyaltyAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveLoyaltyAccountRequest req = new RetrieveLoyaltyAccountRequest("quibusdam");            

            RetrieveLoyaltyAccountResponse res = sdk.loyalty.retrieveLoyaltyAccount(req, new RetrieveLoyaltyAccountSecurity("placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveLoyaltyAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveLoyaltyProgram

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`. 

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveLoyaltyProgramRequest;
import org.openapis.openapi.models.operations.RetrieveLoyaltyProgramResponse;
import org.openapis.openapi.models.operations.RetrieveLoyaltyProgramSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveLoyaltyProgramRequest req = new RetrieveLoyaltyProgramRequest("natus");            

            RetrieveLoyaltyProgramResponse res = sdk.loyalty.retrieveLoyaltyProgram(req, new RetrieveLoyaltyProgramSecurity("accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveLoyaltyProgramResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveLoyaltyReward

Retrieves a loyalty reward.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveLoyaltyRewardRequest;
import org.openapis.openapi.models.operations.RetrieveLoyaltyRewardResponse;
import org.openapis.openapi.models.operations.RetrieveLoyaltyRewardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveLoyaltyRewardRequest req = new RetrieveLoyaltyRewardRequest("repellat");            

            RetrieveLoyaltyRewardResponse res = sdk.loyalty.retrieveLoyaltyReward(req, new RetrieveLoyaltyRewardSecurity("est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveLoyaltyRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchLoyaltyAccounts

Searches for loyalty accounts in a loyalty program.  

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.  

Search results are sorted by `created_at` in ascending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLoyaltyAccountsResponse;
import org.openapis.openapi.models.operations.SearchLoyaltyAccountsSecurity;
import org.openapis.openapi.models.shared.LoyaltyAccountMapping;
import org.openapis.openapi.models.shared.SearchLoyaltyAccountsRequest;
import org.openapis.openapi.models.shared.SearchLoyaltyAccountsRequestLoyaltyAccountQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchLoyaltyAccountsRequest req = new SearchLoyaltyAccountsRequest() {{
                cursor = "doloribus";
                limit = 288130L;
                query = new SearchLoyaltyAccountsRequestLoyaltyAccountQuery() {{
                    customerIds = new String[]{{
                        add("at"),
                    }};
                    mappings = new org.openapis.openapi.models.shared.LoyaltyAccountMapping[]{{
                        add(new LoyaltyAccountMapping() {{
                            createdAt = "autem";
                            id = "23620f31-38f3-40df-bdb0-22faa565fb8f";
                            phoneNumber = "suscipit";
                        }}),
                        add(new LoyaltyAccountMapping() {{
                            createdAt = "veniam";
                            id = "2ebb9d38-3838-4790-a43b-293dab30e917";
                            phoneNumber = "doloribus";
                        }}),
                        add(new LoyaltyAccountMapping() {{
                            createdAt = "corporis";
                            id = "0fda04c8-b1bb-455a-a92b-0bc3bb744664";
                            phoneNumber = "accusamus";
                        }}),
                        add(new LoyaltyAccountMapping() {{
                            createdAt = "cum";
                            id = "1d03388b-0d1b-4b17-afee-74b6feb9457c";
                            phoneNumber = "nihil";
                        }}),
                    }};
                }};;
            }};            

            SearchLoyaltyAccountsResponse res = sdk.loyalty.searchLoyaltyAccounts(req, new SearchLoyaltyAccountsSecurity("recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchLoyaltyAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchLoyaltyEvents

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a 
buyer's loyalty account. Each change in the point balance 
(for example, points earned, points redeemed, and points expired) is 
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLoyaltyEventsResponse;
import org.openapis.openapi.models.operations.SearchLoyaltyEventsSecurity;
import org.openapis.openapi.models.shared.LoyaltyEventDateTimeFilter;
import org.openapis.openapi.models.shared.LoyaltyEventFilter;
import org.openapis.openapi.models.shared.LoyaltyEventLocationFilter;
import org.openapis.openapi.models.shared.LoyaltyEventLoyaltyAccountFilter;
import org.openapis.openapi.models.shared.LoyaltyEventOrderFilter;
import org.openapis.openapi.models.shared.LoyaltyEventQuery;
import org.openapis.openapi.models.shared.LoyaltyEventTypeFilter;
import org.openapis.openapi.models.shared.SearchLoyaltyEventsRequest;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchLoyaltyEventsRequest req = new SearchLoyaltyEventsRequest() {{
                cursor = "illum";
                limit = 673493L;
                query = new LoyaltyEventQuery() {{
                    filter = new LoyaltyEventFilter() {{
                        dateTimeFilter = new LoyaltyEventDateTimeFilter(                new TimeRange() {{
                                            endAt = "reiciendis";
                                            startAt = "consectetur";
                                        }};);;
                        locationFilter = new LoyaltyEventLocationFilter(                new String[]{{
                                            add("possimus"),
                                            add("illo"),
                                            add("autem"),
                                        }});;
                        loyaltyAccountFilter = new LoyaltyEventLoyaltyAccountFilter("tenetur");;
                        orderFilter = new LoyaltyEventOrderFilter("rerum");;
                        typeFilter = new LoyaltyEventTypeFilter(                new String[]{{
                                            add("odio"),
                                            add("nisi"),
                                            add("hic"),
                                            add("assumenda"),
                                        }});;
                    }};;
                }};;
            }};            

            SearchLoyaltyEventsResponse res = sdk.loyalty.searchLoyaltyEvents(req, new SearchLoyaltyEventsSecurity("ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchLoyaltyEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchLoyaltyRewards

Searches for loyalty rewards in a loyalty account. 

In the current implementation, the endpoint supports search by the reward `status`.

If you know a reward ID, use the 
[RetrieveLoyaltyReward](https://developer.squareup.com/reference/square_2021-08-18/loyalty-api/retrieve-loyalty-reward) endpoint.

Search results are sorted by `updated_at` in descending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLoyaltyRewardsResponse;
import org.openapis.openapi.models.operations.SearchLoyaltyRewardsSecurity;
import org.openapis.openapi.models.shared.SearchLoyaltyRewardsRequest;
import org.openapis.openapi.models.shared.SearchLoyaltyRewardsRequestLoyaltyRewardQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchLoyaltyRewardsRequest req = new SearchLoyaltyRewardsRequest() {{
                cursor = "eum";
                limit = 155796L;
                query = new SearchLoyaltyRewardsRequestLoyaltyRewardQuery("quidem") {{
                    status = "sequi";
                }};;
            }};            

            SearchLoyaltyRewardsResponse res = sdk.loyalty.searchLoyaltyRewards(req, new SearchLoyaltyRewardsSecurity("doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchLoyaltyRewardsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
