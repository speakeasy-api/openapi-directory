# LearnerActivity

### Available Operations

* [GetOfferingsOfferingIDAnalyticsLearnersProgress](#getofferingsofferingidanalyticslearnersprogress) - Find learner progress in a specified offering
* [GetOfferingsOfferingIDAnalyticsSocialNotes](#getofferingsofferingidanalyticssocialnotes) - Find shared social notes in an offering
* [GetOfferingsOfferingIDAnalyticsUnitReactions](#getofferingsofferingidanalyticsunitreactions) - Find unit reactions
* [GetUsersUserEmailOfferingsOfferingIDProgress](#getusersuseremailofferingsofferingidprogress) - Find learner's progress in a specified offering
* [GetUsersUserEmailProgress](#getusersuseremailprogress) - Find learner's progress in offerings

## GetOfferingsOfferingIDAnalyticsLearnersProgress

Responds with all learner progress in the offering.

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
    res, err := s.LearnerActivity.GetOfferingsOfferingIDAnalyticsLearnersProgress(ctx, operations.GetOfferingsOfferingIDAnalyticsLearnersProgressRequest{
        OfferingID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LearnerProgressResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsSocialNotes

Responds with all shared social notes in a specified offering.

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
    res, err := s.LearnerActivity.GetOfferingsOfferingIDAnalyticsSocialNotes(ctx, operations.GetOfferingsOfferingIDAnalyticsSocialNotesRequest{
        OfferingID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SocialNotesResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsUnitReactions

Responds with user reactions to units in a specified offering.

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
    res, err := s.LearnerActivity.GetOfferingsOfferingIDAnalyticsUnitReactions(ctx, operations.GetOfferingsOfferingIDAnalyticsUnitReactionsRequest{
        OfferingID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnitReactionsAnalyticsResponses != nil {
        // handle response
    }
}
```

## GetUsersUserEmailOfferingsOfferingIDProgress

Responds with the learner's progress in a specified offering.

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
    res, err := s.LearnerActivity.GetUsersUserEmailOfferingsOfferingIDProgress(ctx, operations.GetUsersUserEmailOfferingsOfferingIDProgressRequest{
        OfferingID: "error",
        UserEmail: "Margie_Boyer87@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUsersUserEmailProgress

Responds with the specified learner's progress in all offerings.

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
    res, err := s.LearnerActivity.GetUsersUserEmailProgress(ctx, operations.GetUsersUserEmailProgressRequest{
        UserEmail: "John60@yahoo.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LearnerResponse != nil {
        // handle response
    }
}
```
