# Splunk

### Available Operations

* [SplunkAssetSyncCreatedJSON](#splunkassetsynccreatedjson) - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* [SplunkAssetSyncUpdatedJSON](#splunkassetsyncupdatedjson) - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

## SplunkAssetSyncCreatedJSON

Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.

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
    res, err := s.Splunk.SplunkAssetSyncCreatedJSON(ctx, operations.SplunkAssetSyncCreatedJSONRequest{
        Fields: sdk.String("doloremque"),
        Search: sdk.String("consequatur"),
        Since: sdk.Int64(1576300370),
    }, operations.SplunkAssetSyncCreatedJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetsWithCheckpoint != nil {
        // handle response
    }
}
```

## SplunkAssetSyncUpdatedJSON

Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

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
    res, err := s.Splunk.SplunkAssetSyncUpdatedJSON(ctx, operations.SplunkAssetSyncUpdatedJSONRequest{
        Fields: sdk.String("officia"),
        Search: sdk.String("recusandae"),
        Since: sdk.Int64(1576300370),
    }, operations.SplunkAssetSyncUpdatedJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetsWithCheckpoint != nil {
        // handle response
    }
}
```
