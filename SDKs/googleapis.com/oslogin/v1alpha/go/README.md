# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/oslogin/v1alpha/go
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

    req := operations.OsloginUsersGetLoginProfileRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        OperatingSystemType: "LINUX",
        PrettyPrint: false,
        ProjectID: "error",
        QuotaUser: "deserunt",
        SystemID: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
        View: "SECURITY_KEY",
    }

    ctx := context.Background()
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, req, operations.OsloginUsersGetLoginProfileSecurity{
        Option1: &operations.OsloginUsersGetLoginProfileSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Users

* `OsloginUsersGetLoginProfile` - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* `OsloginUsersImportSSHPublicKey` - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* `OsloginUsersSSHPublicKeysCreate` - Create an SSH public key
* `OsloginUsersSSHPublicKeysDelete` - Deletes an SSH public key.
* `OsloginUsersSSHPublicKeysGet` - Retrieves an SSH public key.
* `OsloginUsersSSHPublicKeysPatch` - Updates an SSH public key and returns the profile information. This method supports patch semantics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
