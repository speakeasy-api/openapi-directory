# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/scideas.net/regression/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.RegressionAPIBody{
        ConvertDateTo: "month",
        Data: []map[string]interface{}{
            map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            map[string]interface{}{
                "error": "deserunt",
                "suscipit": "iure",
            },
            map[string]interface{}{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
        },
        IgnoreVariables: []map[string]interface{}{
            map[string]interface{}{
                "minus": "placeat",
                "voluptatum": "iusto",
            },
            map[string]interface{}{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
        },
        Key: "abc123",
        OutcomeVariable: "sales",
    }

    ctx := context.Background()
    res, err := s.PostRegressionAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `PostRegressionAPI` - Returns regression analysis.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
