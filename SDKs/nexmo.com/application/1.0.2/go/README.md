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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateApplicationRequestBody{
        AnswerMethod: "GET",
        AnswerURL: "https://example.com/webhooks/answer",
        APIKey: "ap1k3y",
        APISecret: "230e6cf0709417176df1b4fc1e083adc",
        EventMethod: "POST",
        EventURL: "https://example.com/webhooks/event",
        InboundMethod: "POST",
        InboundURL: "https://example.com/webhooks/inbound",
        Name: "My Application",
        StatusMethod: "POST",
        StatusURL: "https://example.com/webhooks/status",
        Type: "voice",
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
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

### SDK SDK

* `CreateApplication` - Create Application
* `DeleteApplication` - Destroy Application
* `RetrieveApplication` - Retrieve Application
* `RetrieveApplications` - Retrieve all Applications
* `UpdateApplication` - Update Application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
