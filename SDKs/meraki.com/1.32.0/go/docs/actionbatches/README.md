# ActionBatches

### Available Operations

* [CreateOrganizationActionBatch](#createorganizationactionbatch) - Create an action batch
* [DeleteOrganizationActionBatch](#deleteorganizationactionbatch) - Delete an action batch
* [GetOrganizationActionBatch](#getorganizationactionbatch) - Return an action batch
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
                        "accusamus": "commodi",
                        "repudiandae": "quae",
                    },
                    Operation: "ipsum",
                    Resource: "quidem",
                },
                operations.CreateOrganizationActionBatchRequestBodyActions{
                    Body: map[string]interface{}{
                        "excepturi": "pariatur",
                        "modi": "praesentium",
                        "rem": "voluptates",
                    },
                    Operation: "quasi",
                    Resource: "repudiandae",
                },
                operations.CreateOrganizationActionBatchRequestBodyActions{
                    Body: map[string]interface{}{
                        "veritatis": "itaque",
                        "incidunt": "enim",
                        "consequatur": "est",
                    },
                    Operation: "quibusdam",
                    Resource: "explicabo",
                },
            },
            Confirmed: sdk.Bool(false),
            Synchronous: sdk.Bool(false),
        },
        OrganizationID: "deserunt",
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
        ActionBatchID: "distinctio",
        OrganizationID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationActionBatch

Return an action batch

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
    res, err := s.ActionBatches.GetOrganizationActionBatch(ctx, operations.GetOrganizationActionBatchRequest{
        ActionBatchID: "labore",
        OrganizationID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationActionBatch200ApplicationJSONObject != nil {
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
        OrganizationID: "qui",
        Status: operations.GetOrganizationActionBatchesStatusEnumFailed.ToPointer(),
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
        ActionBatchID: "cupiditate",
        OrganizationID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationActionBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
