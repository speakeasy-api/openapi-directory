# ActionBatches

### Available Operations

* [CreateOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [DeleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [GetOrganizationActionBatches](#getorganizationactionbatches) - Return the list of action batches in the organization
* [UpdateOrganizationActionBatch](#updateorganizationactionbatch) - Update an action batch

## CreateOrganizationActionBatch

Create an action batch

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionBatches.CreateOrganizationActionBatch(ctx, operations.CreateOrganizationActionBatchRequest{
        RequestBody: operations.CreateOrganizationActionBatchRequestBody{
            Actions: []CreateOrganizationActionBatchRequestBodyActions{
                operations.CreateOrganizationActionBatchRequestBodyActions{
                    Body: map[string]interface{}{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    Operation: "repellendus",
                    Resource: "sapiente",
                },
            },
            Confirmed: sdk.Bool(false),
            Synchronous: sdk.Bool(false),
        },
        OrganizationID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationActionBatch201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationActionBatch

Delete an action batch

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionBatches.DeleteOrganizationActionBatch(ctx, operations.DeleteOrganizationActionBatchRequest{
        ActionBatchID: "odit",
        OrganizationID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationActionBatches

Return the list of action batches in the organization

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionBatches.GetOrganizationActionBatches(ctx, operations.GetOrganizationActionBatchesRequest{
        OrganizationID: "at",
        Status: operations.GetOrganizationActionBatchesStatusEnumPending.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationActionBatches200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationActionBatch

Update an action batch

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionBatches.UpdateOrganizationActionBatch(ctx, operations.UpdateOrganizationActionBatchRequest{
        RequestBody: &operations.UpdateOrganizationActionBatchRequestBody{
            Confirmed: sdk.Bool(false),
            Synchronous: sdk.Bool(false),
        },
        ActionBatchID: "molestiae",
        OrganizationID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationActionBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
