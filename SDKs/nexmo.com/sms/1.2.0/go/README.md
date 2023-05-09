# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/sms/1.2.0/go
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
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SendAnSms(ctx, operations.SendAnSmsRequest{
        NewMessage: shared.NewMessage{
            AccountRef: sdk.String("customer1234"),
            APIKey: "abcd1234",
            APISecret: sdk.String("abcdef0123456789"),
            Body: sdk.String("0011223344556677"),
            Callback: sdk.String("https://example.com/sms-dlr"),
            ClientRef: sdk.String("my-personal-reference"),
            ContentID: sdk.String("1107457532145798767"),
            EntityID: sdk.String("1101456324675322134"),
            From: "AcmeInc",
            MessageClass: shared.NewMessageMessageClassEnumTwo.ToPointer(),
            ProtocolID: sdk.Int64(127),
            Sig: sdk.String("provident"),
            StatusReportReq: sdk.Bool(false),
            Text: sdk.String("Hello World!"),
            To: "447700900000",
            TTL: sdk.Int64(900000),
            Type: shared.NewMessageTypeEnumText.ToPointer(),
            Udh: sdk.String("06050415811581"),
        },
        Format: operations.SendAnSmsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendAnSms200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [SendAnSms](docs/sdk/README.md#sendansms) - Send an SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
