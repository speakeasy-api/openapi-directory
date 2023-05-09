# Badges

### Available Operations

* [GetOfferingsOfferingIDBadges](#getofferingsofferingidbadges) - Find offering badges
* [GetUsersUserEmailBadges](#getusersuseremailbadges) - Find user's badges
* [PostOfferingsOfferingIDUsersUserEmailBadgesAward](#postofferingsofferingidusersuseremailbadgesaward) - Award badge

## GetOfferingsOfferingIDBadges

Responds with the badge for an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Badges.GetOfferingsOfferingIDBadges(ctx, operations.GetOfferingsOfferingIDBadgesRequest{
        OfferingID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Badge != nil {
        // handle response
    }
}
```

## GetUsersUserEmailBadges

Responds with all badges that the specified user has been awarded.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Badges.GetUsersUserEmailBadges(ctx, operations.GetUsersUserEmailBadgesRequest{
        UserEmail: "Dameon_Morissette@yahoo.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserBadges != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDUsersUserEmailBadgesAward

Awards a badge to a user in the offering.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Badges.PostOfferingsOfferingIDUsersUserEmailBadgesAward(ctx, operations.PostOfferingsOfferingIDUsersUserEmailBadgesAwardRequest{
        OfferingID: "saepe",
        UserEmail: "Issac.Hessel@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AwardedResponse != nil {
        // handle response
    }
}
```
