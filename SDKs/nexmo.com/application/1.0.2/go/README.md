# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/application/1.0.2/go
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
    res, err := s.CreateApplication(ctx, operations.CreateApplicationRequestBody{
        AnswerMethod: sdk.String("GET"),
        AnswerURL: sdk.String("https://example.com/webhooks/answer"),
        APIKey: "ap1k3y",
        APISecret: "230e6cf0709417176df1b4fc1e083adc",
        EventMethod: sdk.String("POST"),
        EventURL: sdk.String("https://example.com/webhooks/event"),
        InboundMethod: sdk.String("POST"),
        InboundURL: sdk.String("https://example.com/webhooks/inbound"),
        Name: "My Application",
        StatusMethod: sdk.String("POST"),
        StatusURL: sdk.String("https://example.com/webhooks/status"),
        Type: operations.CreateApplicationRequestBodyTypeEnumVoice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationCreated != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateApplication](docs/sdk/README.md#createapplication) - Create Application
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Destroy Application
* [RetrieveApplication](docs/sdk/README.md#retrieveapplication) - Retrieve Application
* [RetrieveApplications](docs/sdk/README.md#retrieveapplications) - Retrieve all Applications
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
