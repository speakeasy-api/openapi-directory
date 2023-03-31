# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trunking_v1/1.40.0/go
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

    req := operations.CreateCredentialListRequest{
        RequestBody: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "corrupti",
        },
        TrunkSid: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateCredentialList(ctx, req, operations.CreateCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateCredentialList`
* `CreateIPAccessControlList` - Associate an IP Access Control List with a Trunk
* `CreateOriginationURL`
* `CreatePhoneNumber`
* `CreateTrunk`
* `DeleteCredentialList`
* `DeleteIPAccessControlList` - Remove an associated IP Access Control List from a Trunk
* `DeleteOriginationURL`
* `DeletePhoneNumber`
* `DeleteTrunk`
* `FetchCredentialList`
* `FetchIPAccessControlList`
* `FetchOriginationURL`
* `FetchPhoneNumber`
* `FetchRecording`
* `FetchTrunk`
* `ListCredentialList`
* `ListIPAccessControlList` - List all IP Access Control Lists for a Trunk
* `ListOriginationURL`
* `ListPhoneNumber`
* `ListTrunk`
* `UpdateOriginationURL`
* `UpdateRecording`
* `UpdateTrunk`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
