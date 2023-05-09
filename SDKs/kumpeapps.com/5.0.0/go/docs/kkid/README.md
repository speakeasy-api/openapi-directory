# KKid

## Overview

KKid API Functions

<https://github.com/kumpeapps/kkid>
### Available Operations

* [KkidAllowanceGet](#kkidallowanceget) - returns allowance balance and allowance transactions
* [KkidAllowancePost](#kkidallowancepost) - adds new allowance transaction to kidUserID
* [KkidApnsPost](#kkidapnspost) - subscribes/unsubscribes/registers for apns push notifications
* [KkidChorelistDelete](#kkidchorelistdelete) - deletes chore for given chore id
* [KkidChorelistGet](#kkidchorelistget) - returns list of chores for given user
* [KkidChorelistPost](#kkidchorelistpost) - adds chore for given user
* [KkidChorelistPut](#kkidchorelistput) - updates chore for given chore id
* [KkidMasteruserPost](#kkidmasteruserpost) - adds new master user account
* [KkidShareGet](#kkidshareget) - Create Share Link
* [KkidUserGet](#kkiduserget) - Gets user info
* [KkidUserlistDelete](#kkiduserlistdelete) - deletes user
* [KkidUserlistGet](#kkiduserlistget) - returns list of users
* [KkidUserlistPost](#kkiduserlistpost) - adds new child user
* [KkidUserlistPut](#kkiduserlistput) - updates user
* [KkidWishlistDelete](#kkidwishlistdelete) - Delete item from wishlist
* [KkidWishlistGet](#kkidwishlistget) - Get list of wishlist items
* [KkidWishlistPost](#kkidwishlistpost) - Add item to kid's wishlist
* [KkidWishlistPut](#kkidwishlistput) - Update item on kid's wishlist

## KkidAllowanceGet

By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.


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
    res, err := s.KKid.KkidAllowanceGet(ctx, operations.KkidAllowanceGetRequest{
        KidUserID: 715190,
        TransactionDays: sdk.Int64(844266),
    }, operations.KkidAllowanceGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Allowance != nil {
        // handle response
    }
}
```

## KkidAllowancePost

By passing in the appropriate options, you can add an allowance transaction to a given user.


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
    res, err := s.KKid.KkidAllowancePost(ctx, operations.KkidAllowancePostRequest{
        Amount: 6027.63,
        Description: "nulla",
        KidUserID: 544883,
        TransactionType: operations.KkidAllowancePostTransactionTypeEnumSubtract,
    }, operations.KkidAllowancePostSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidApnsPost

subscribes/unsubscribes/registers for apns push notifications

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
    res, err := s.KKid.KkidApnsPost(ctx, operations.KkidApnsPostRequest{
        Badge: sdk.Int64(423655),
        Devicename: sdk.String("error"),
        KidUserID: 645894,
        Message: sdk.String("suscipit"),
        Priority: operations.KkidApnsPostPriorityEnumActive.ToPointer(),
        Section: operations.KkidApnsPostSectionEnumChoresNew.ToPointer(),
        Sound: sdk.String("debitis"),
        Title: sdk.String("Mr."),
        Token: sdk.String("delectus"),
        Tool: operations.KkidApnsPostToolEnumSubscribe,
    }, operations.KkidApnsPostSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidChorelistDelete

By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account


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
    res, err := s.KKid.KkidChorelistDelete(ctx, operations.KkidChorelistDeleteRequest{
        IDChoreList: 383441,
    }, operations.KkidChorelistDeleteSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidChorelistGet

By passing in the appropriate options, you can search for
chores assigned to a given user within the authenticated user's master account


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
    res, err := s.KKid.KkidChorelistGet(ctx, operations.KkidChorelistGetRequest{
        BlockDash: sdk.Bool(false),
        CanSteal: sdk.Bool(false),
        Day: operations.KkidChorelistGetDayEnumWednesday.ToPointer(),
        IncludeCalendar: sdk.Bool(false),
        KidUsername: sdk.String("minus"),
        Optional: sdk.Bool(false),
        Status: sdk.String("placeat"),
    }, operations.KkidChorelistGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Chorelist != nil {
        // handle response
    }
}
```

## KkidChorelistPost

By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account


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
    res, err := s.KKid.KkidChorelistPost(ctx, operations.KkidChorelistPostRequest{
        AiIcon: sdk.String("voluptatum"),
        BlockDash: sdk.Bool(false),
        CanSteal: sdk.Bool(false),
        ChoreDescription: sdk.String("iusto"),
        ChoreName: "excepturi",
        ChoreNumber: sdk.Int64(392785),
        Day: operations.KkidChorelistPostDayEnumToday.ToPointer(),
        ExtraAllowance: sdk.Int64(836079),
        IsCalendar: sdk.Bool(false),
        KidUsername: "ab",
        NfcTag: sdk.String("quis"),
        Notes: sdk.String("veritatis"),
        ObjectDetectionTag: sdk.String("deserunt"),
        OneTime: sdk.Bool(false),
        Optional: sdk.Bool(false),
        Reassignable: sdk.Bool(false),
        RequireObjectDetection: sdk.Bool(false),
        StartDate: sdk.String("perferendis"),
        Status: sdk.String("ipsam"),
        UpdatedByAutomation: sdk.Bool(false),
    }, operations.KkidChorelistPostSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidChorelistPut

By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account


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
    res, err := s.KKid.KkidChorelistPut(ctx, operations.KkidChorelistPutRequest{
        Altitude: sdk.Int64(832620),
        IDChoreList: 957156,
        Latitude: sdk.Int64(778157),
        Longitude: sdk.Int64(140350),
        NfcTag: sdk.String("at"),
        Notes: sdk.String("at"),
        Status: sdk.String("maiores"),
        Stolen: sdk.Bool(false),
        StolenBy: sdk.String("molestiae"),
        UpdatedByAutomation: sdk.Bool(false),
        WhereDay: operations.KkidChorelistPutWhereDayEnumWeekly.ToPointer(),
        WhereName: sdk.String("quod"),
        WhereStatus: sdk.String("esse"),
    }, operations.KkidChorelistPutSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidMasteruserPost

By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)


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
    res, err := s.KKid.KkidMasteruserPost(ctx, operations.KkidMasteruserPostRequest{
        Email: "Osborne72@yahoo.com",
        FirstName: "Lucie",
        LastName: "McCullough",
        Password: "fugit",
        Username: "Kale_Welch10",
    }, operations.KkidMasteruserPostSecurity{
        AppKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserResponse != nil {
        // handle response
    }
}
```

## KkidShareGet

Create share link

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
    res, err := s.KKid.KkidShareGet(ctx, operations.KkidShareGetRequest{
        Link: operations.KkidShareGetLinkEnumHTTPSKhomeKumpeappsComPortalWishListPhp,
        LinkUserID: "molestiae",
        Scope: operations.KkidShareGetScopeEnumWishListAdmin,
        Scope2: operations.KkidShareGetScope2EnumWishList.ToPointer(),
        Scope3: operations.KkidShareGetScope3EnumChoresAdmin.ToPointer(),
        Scope4: operations.KkidShareGetScope4EnumChores.ToPointer(),
    }, operations.KkidShareGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwoHundredAndOneShare != nil {
        // handle response
    }
}
```

## KkidUserGet

Gets user info for authenticated user

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidUserGet(ctx, operations.KkidUserGetRequest{
        EnableBool: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userlist != nil {
        // handle response
    }
}
```

## KkidUserlistDelete

By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)


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
    res, err := s.KKid.KkidUserlistDelete(ctx, operations.KkidUserlistDeleteRequest{
        UserID: 456150,
    }, operations.KkidUserlistDeleteSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## KkidUserlistGet

By passing in the appropriate options, you can search for
users within the authenticated user's master account


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidUserlistGet(ctx, operations.KkidUserlistGetRequest{
        Email: sdk.String("Keshaun32@gmail.com"),
        EnableAllowance: sdk.Bool(false),
        EnableChores: sdk.Bool(false),
        IsActive: sdk.Bool(false),
        IsAdmin: sdk.Bool(false),
        IsChild: sdk.Bool(false),
        UserID: sdk.Int64(617636),
        Username: sdk.String("Camden61"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Userlist != nil {
        // handle response
    }
}
```

## KkidUserlistPost

By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.


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
    res, err := s.KKid.KkidUserlistPost(ctx, operations.KkidUserlistPostRequest{
        Email: "Tyra.Turcotte35@yahoo.com",
        FirstName: "Leslie",
        LastName: "Kertzmann",
        Password: "saepe",
        Username: "Maxie96",
    }, operations.KkidUserlistPostSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserResponse != nil {
        // handle response
    }
}
```

## KkidUserlistPut

By passing in the appropriate variables this method updates the user's profile


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidUserlistPut(ctx, operations.KkidUserlistPutRequest{
        Email: "Madaline21@hotmail.com",
        Emoji: sdk.String("corporis"),
        EnableAdmin: sdk.Bool(false),
        EnableAllowance: sdk.Bool(false),
        EnableChores: sdk.Bool(false),
        EnableObjectDetection: sdk.Bool(false),
        EnableTmdb: sdk.Bool(false),
        EnableWishList: sdk.Bool(false),
        FirstName: "Braulio",
        LastName: "Rolfson",
        TmdbKey: sdk.String("enim"),
        UserID: 607831,
        Username: "Franco.Hane",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserResponse != nil {
        // handle response
    }
}
```

## KkidWishlistDelete

Delete item from wishlist

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidWishlistDelete(ctx, operations.KkidWishlistDeleteRequest{
        WishID: 438601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidWishlistGet

Get list of wishlist items

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidWishlistGet(ctx, operations.KkidWishlistGetRequest{
        KidUserID: sdk.Int64(634274),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wishlist != nil {
        // handle response
    }
}
```

## KkidWishlistPost

Add item to kid's wishlist

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidWishlistPost(ctx, operations.KkidWishlistPostRequest{
        Description: sdk.String("doloribus"),
        KidUserID: 958950,
        Link: sdk.String("architecto"),
        Priority: sdk.Int64(652790),
        Title: "Mrs.",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```

## KkidWishlistPut

Update item on kid's wishlist

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.KKid.KkidWishlistPut(ctx, operations.KkidWishlistPutRequest{
        Description: sdk.String("culpa"),
        Link: sdk.String("consequuntur"),
        Priority: sdk.Int64(995300),
        Title: sdk.String("Miss"),
        WishID: 581850,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```
