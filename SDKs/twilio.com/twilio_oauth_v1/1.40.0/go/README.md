# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_oauth_v1/1.40.0/go
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

    req := operations.CreateDeviceCodeCreateDeviceCodeRequest{
        Audiences: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        ClientSid: "unde",
        Scopes: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
    }

    ctx := context.Background()
    res, err := s.CreateDeviceCode(ctx, req, operations.CreateDeviceCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1DeviceCode != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateDeviceCode` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `CreateToken` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `FetchCerts` - Fetches public JWKs
* `FetchOpenidDiscovery` - Fetch configuration details about the OpenID Connect Authorization Server
* `FetchUserInfo` - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
