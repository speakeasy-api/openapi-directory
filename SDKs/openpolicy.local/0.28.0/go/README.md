# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openpolicy.local/0.28.0/go
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

    req := operations.PostCompileRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Explain: "illum",
        Instrument: false,
        Metrics: false,
        Pretty: false,
    }

    ctx := context.Background()
    res, err := s.CompileAPI.PostCompile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCompile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CompileAPI

* `PostCompile` - Compile

### ConfigAPI

* `GetConfig` - Get configurations

### DataAPI

* `DeleteDocument` - Delete a document
* `GetDocument` - Get a document
* `GetDocumentWithPath` - Get a document (with input)
* `GetDocumentWithWebHook` - Get a document (with webhook)
* `PatchDocument` - Update a document
* `PutDocument` - Create or overwrite a document

### HealthAPI

* `GetHealth` - Health

### PolicyAPI

* `DeletePolicyModule` - Delete a policy module
* `GetPolicies` - List policies
* `GetPolicyModule` - Get a policy module
* `PutPolicyModule` - Create or update a policy module

### QueryAPI

* `GetQuery` - Execute an ad-hoc query (simple)
* `PostQuery` - Execute an ad-hoc query (complex)
* `PostSimpleQuery` - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
