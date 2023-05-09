# Requisitions

### Available Operations

* [DeleteRequisitionByIDV2](#deleterequisitionbyidv2) - Delete requisition and its end user agreement
* [RequisitionByID](#requisitionbyid) - Retrieve a requisition by ID
* [RequisitionCreated](#requisitioncreated) - Create a new requisition
* [RetrieveAllRequisitions](#retrieveallrequisitions) - Retrieve all requisitions belonging to the company

## DeleteRequisitionByIDV2

Delete requisition and its end user agreement

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Requisitions.DeleteRequisitionByIDV2(ctx, operations.DeleteRequisitionByIDV2Request{
        ID: "26f8d986-e881-4ead-8f0e-1012563f94e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequisitionByID

Retrieve a requisition by ID

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Requisitions.RequisitionByID(ctx, operations.RequisitionByIDRequest{
        ID: "9e973e92-2a57-4a15-be3e-060807e2b6e3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Requisition != nil {
        // handle response
    }
}
```

## RequisitionCreated

Create a new requisition

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Requisitions.RequisitionCreated(ctx, shared.RequisitionRequest{
        AccountSelection: sdk.Bool(false),
        Agreement: sdk.String("ab8845f0-597a-460f-b2a5-4a31e94764a3"),
        InstitutionID: "debitis",
        Redirect: "https://infamous-fridge.org",
        RedirectImmediate: sdk.Bool(false),
        Reference: sdk.String("esse"),
        Ssn: sdk.String("provident"),
        UserLanguage: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpectacularRequisition != nil {
        // handle response
    }
}
```

## RetrieveAllRequisitions

Retrieve all requisitions belonging to the company

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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Requisitions.RetrieveAllRequisitions(ctx, operations.RetrieveAllRequisitionsRequest{
        Limit: sdk.Int64(431785),
        Offset: sdk.Int64(970494),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedRequisitionList != nil {
        // handle response
    }
}
```
