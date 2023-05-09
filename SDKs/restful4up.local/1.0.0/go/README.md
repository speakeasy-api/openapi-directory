# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/restful4up.local/1.0.0/go
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
    res, err := s.ApplyYaraRules(ctx, operations.ApplyYaraRulesRequestBody{
        File: operations.ApplyYaraRulesRequestBodyFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
        IsUnpackingRequired: operations.ApplyYaraRulesRequestBodyIsUnpackingRequiredEnumFalse.ToPointer(),
        Rules: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ApplyYaraRules](docs/sdk/README.md#applyyararules) - apply given YARA rules to the given executable. (upto 10 rules)
* [Clean](docs/sdk/README.md#clean) - clean up the uploaded files
* [EmulationOutput](docs/sdk/README.md#emulationoutput) - try to get the emulation output after unpacking the file
* [GeneratePartialYaraRule](docs/sdk/README.md#generatepartialyararule) - generate partial YARA rules for give executable. (Rule without the condition section)
* [Unpack](docs/sdk/README.md#unpack) - try to unpack the given file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
