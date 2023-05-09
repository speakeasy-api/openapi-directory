# AssessmentGroups

### Available Operations

* [DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail](#deleteofferingsofferingidgroupsgroupidlearnersuseremail) - Remove a learner from an assessment group
* [GetOfferingsOfferingIDGroups](#getofferingsofferingidgroups) - Find assessment groups
* [GetOfferingsOfferingIDGroupsGroupIDLearners](#getofferingsofferingidgroupsgroupidlearners) - Find learners in an assessment group
* [PostOfferingsOfferingIDGroups](#postofferingsofferingidgroups) - Add an assessment group
* [PostOfferingsOfferingIDGroupsGroupIDLearners](#postofferingsofferingidgroupsgroupidlearners) - Add a learner to an assessment group

## DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail

Removes a learner from the specified assessment group.

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
    res, err := s.AssessmentGroups.DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail(ctx, operations.DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailRequest{
        GroupID: "magnam",
        OfferingID: "debitis",
        UserEmail: "Vincenzo.Goldner@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOfferingsOfferingIDGroups

Responds with a list of assessment groups in an offering.

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
    res, err := s.AssessmentGroups.GetOfferingsOfferingIDGroups(ctx, operations.GetOfferingsOfferingIDGroupsRequest{
        OfferingID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssessmentGroupResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDGroupsGroupIDLearners

Responds with a list of learners in a specified assessment group.

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
    res, err := s.AssessmentGroups.GetOfferingsOfferingIDGroupsGroupIDLearners(ctx, operations.GetOfferingsOfferingIDGroupsGroupIDLearnersRequest{
        GroupID: "placeat",
        OfferingID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponses != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDGroups

Creates a new assessment group in an offering.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentGroups.PostOfferingsOfferingIDGroups(ctx, operations.PostOfferingsOfferingIDGroupsRequest{
        AssessmentGroupRequired: shared.AssessmentGroupRequired{
            Title: "Ms.",
        },
        OfferingID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssessmentGroupResponse != nil {
        // handle response
    }
}
```

## PostOfferingsOfferingIDGroupsGroupIDLearners

Adds a learner into the specified assessment group.

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
    res, err := s.AssessmentGroups.PostOfferingsOfferingIDGroupsGroupIDLearners(ctx, operations.PostOfferingsOfferingIDGroupsGroupIDLearnersRequest{
        RequestBody: operations.PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody{
            Email: sdk.String("Tianna33@yahoo.com"),
        },
        GroupID: "veritatis",
        OfferingID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```
