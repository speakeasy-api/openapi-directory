# ServiceNow

### Available Operations

* [SnowExportAssetsCSV](#snowexportassetscsv) - Export an asset inventory as CSV for ServiceNow integration
* [SnowExportAssetsJSON](#snowexportassetsjson) - Exports the asset inventory as JSON
* [SnowExportServicesCSV](#snowexportservicescsv) - Export a service inventory as CSV for ServiceNow integration

## SnowExportAssetsCSV

Export an asset inventory as CSV for ServiceNow integration

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
    res, err := s.ServiceNow.SnowExportAssetsCSV(ctx, operations.SnowExportAssetsCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnowExportAssetsCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```

## SnowExportAssetsJSON

Exports the asset inventory as JSON

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
    res, err := s.ServiceNow.SnowExportAssetsJSON(ctx, operations.SnowExportAssetsJSONSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssetServiceNows != nil {
        // handle response
    }
}
```

## SnowExportServicesCSV

Export a service inventory as CSV for ServiceNow integration

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
    res, err := s.ServiceNow.SnowExportServicesCSV(ctx, operations.SnowExportServicesCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnowExportServicesCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```
