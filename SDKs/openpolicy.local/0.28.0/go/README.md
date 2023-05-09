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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompileAPI.PostCompile(ctx, operations.PostCompileRequest{
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Explain: sdk.String("illum"),
        Instrument: sdk.Bool(false),
        Metrics: sdk.Bool(false),
        Pretty: sdk.Bool(false),
    })
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


### [CompileAPI](docs/compileapi/README.md)

* [PostCompile](docs/compileapi/README.md#postcompile) - Compile

### [ConfigAPI](docs/configapi/README.md)

* [GetConfig](docs/configapi/README.md#getconfig) - Get configurations

### [DataAPI](docs/dataapi/README.md)

* [DeleteDocument](docs/dataapi/README.md#deletedocument) - Delete a document
* [GetDocument](docs/dataapi/README.md#getdocument) - Get a document
* [GetDocumentWithPath](docs/dataapi/README.md#getdocumentwithpath) - Get a document (with input)
* [GetDocumentWithWebHook](docs/dataapi/README.md#getdocumentwithwebhook) - Get a document (with webhook)
* [PatchDocument](docs/dataapi/README.md#patchdocument) - Update a document
* [PutDocument](docs/dataapi/README.md#putdocument) - Create or overwrite a document

### [HealthAPI](docs/healthapi/README.md)

* [GetHealth](docs/healthapi/README.md#gethealth) - Health

### [PolicyAPI](docs/policyapi/README.md)

* [DeletePolicyModule](docs/policyapi/README.md#deletepolicymodule) - Delete a policy module
* [GetPolicies](docs/policyapi/README.md#getpolicies) - List policies
* [GetPolicyModule](docs/policyapi/README.md#getpolicymodule) - Get a policy module
* [PutPolicyModule](docs/policyapi/README.md#putpolicymodule) - Create or update a policy module

### [QueryAPI](docs/queryapi/README.md)

* [GetQuery](docs/queryapi/README.md#getquery) - Execute an ad-hoc query (simple)
* [PostQuery](docs/queryapi/README.md#postquery) - Execute an ad-hoc query (complex)
* [PostSimpleQuery](docs/queryapi/README.md#postsimplequery) - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
