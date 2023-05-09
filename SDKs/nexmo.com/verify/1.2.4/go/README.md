# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/verify/1.2.4/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VerifyCheck(ctx, operations.VerifyCheckRequest{
        CheckRequest: shared.CheckRequest{
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            Code: "1234",
            IPAddress: sdk.String("123.0.0.255"),
            RequestID: "abcdef0123456789abcdef0123456789",
        },
        Format: shared.FormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyCheck200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [VerifyCheck](docs/sdk/README.md#verifycheck) - Verify Check
* [VerifyControl](docs/sdk/README.md#verifycontrol) - Verify Control
* [VerifyRequestWithPsd2](docs/sdk/README.md#verifyrequestwithpsd2) - PSD2 (Payment Services Directive 2) Request
* [VerifySearch](docs/sdk/README.md#verifysearch) - Verify Search

### [FraudManagement](docs/fraudmanagement/README.md)

* [NetworkUnblock](docs/fraudmanagement/README.md#networkunblock) - Request a network unblock

### [Requests](docs/requests/README.md)

* [VerifyRequest](docs/requests/README.md#verifyrequest) - Request a Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
