# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/oslogin/v1/go
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
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, operations.OsloginUsersGetLoginProfileRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Dallas Kassulke",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("iure"),
        QuotaUser: sdk.String("magnam"),
        SystemID: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.OsloginUsersGetLoginProfileSecurity{
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


### [Users](docs/users/README.md)

* [OsloginUsersGetLoginProfile](docs/users/README.md#osloginusersgetloginprofile) - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* [OsloginUsersImportSSHPublicKey](docs/users/README.md#osloginusersimportsshpublickey) - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* [OsloginUsersSSHPublicKeysCreate](docs/users/README.md#osloginuserssshpublickeyscreate) - Create an SSH public key
* [OsloginUsersSSHPublicKeysDelete](docs/users/README.md#osloginuserssshpublickeysdelete) - Deletes an SSH public key.
* [OsloginUsersSSHPublicKeysGet](docs/users/README.md#osloginuserssshpublickeysget) - Retrieves an SSH public key.
* [OsloginUsersSSHPublicKeysPatch](docs/users/README.md#osloginuserssshpublickeyspatch) - Updates an SSH public key and returns the profile information. This method supports patch semantics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
