# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_notify_v1/1.40.0/go
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

    req := operations.CreateBindingRequest{
        RequestBody: &operations.CreateBindingCreateBindingRequest{
            Address: "5786 Little Streets",
            BindingType: "sms",
            CredentialSid: "error",
            Endpoint: "deserunt",
            Identity: "suscipit",
            NotificationProtocolVersion: "iure",
            Tag: []string{
                "debitis",
                "ipsa",
            },
        },
        ServiceSid: "delectus",
    }

    ctx := context.Background()
    res, err := s.CreateBinding(ctx, req, operations.CreateBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateBinding`
* `CreateCredential`
* `CreateNotification`
* `CreateService`
* `DeleteBinding`
* `DeleteCredential`
* `DeleteService`
* `FetchBinding`
* `FetchCredential`
* `FetchService`
* `ListBinding`
* `ListCredential`
* `ListService`
* `UpdateCredential`
* `UpdateService`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
