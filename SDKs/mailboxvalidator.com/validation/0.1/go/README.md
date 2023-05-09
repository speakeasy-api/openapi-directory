# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mailboxvalidator.com/validation/0.1/go
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
    res, err := s.GetV1ValidationSingle(ctx, operations.GetV1ValidationSingleRequest{
        Email: "Larue_Rau85@yahoo.com",
        Format: operations.GetV1ValidationSingleFormatEnumXML.ToPointer(),
        Key: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetV1ValidationSingle200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetV1ValidationSingle](docs/sdk/README.md#getv1validationsingle) - The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
