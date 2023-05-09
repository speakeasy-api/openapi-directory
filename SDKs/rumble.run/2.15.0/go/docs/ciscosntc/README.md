# CiscoSNTC

### Available Operations

* [ExportAssetsCiscoCSV](#exportassetsciscocsv) - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

## ExportAssetsCiscoCSV

Cisco serial number and model name export for Cisco Smart Net Total Care Service.

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
    res, err := s.CiscoSNTC.ExportAssetsCiscoCSV(ctx, operations.ExportAssetsCiscoCSVRequest{
        Search: sdk.String("quasi"),
    }, operations.ExportAssetsCiscoCSVSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAssetsCiscoCSV200TextCSVBinaryString != nil {
        // handle response
    }
}
```
