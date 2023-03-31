# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/secretmanager/v1/go
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

    req := operations.SecretmanagerProjectsLocationsListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        Name: "illum",
        OauthToken: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Projects.SecretmanagerProjectsLocationsList(ctx, req, operations.SecretmanagerProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `SecretmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `SecretmanagerProjectsSecretsAddVersion` - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* `SecretmanagerProjectsSecretsCreate` - Creates a new Secret containing no SecretVersions.
* `SecretmanagerProjectsSecretsDelete` - Deletes a Secret.
* `SecretmanagerProjectsSecretsGetIamPolicy` - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* `SecretmanagerProjectsSecretsList` - Lists Secrets.
* `SecretmanagerProjectsSecretsPatch` - Updates metadata of an existing Secret.
* `SecretmanagerProjectsSecretsSetIamPolicy` - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* `SecretmanagerProjectsSecretsTestIamPermissions` - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `SecretmanagerProjectsSecretsVersionsAccess` - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `SecretmanagerProjectsSecretsVersionsDestroy` - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* `SecretmanagerProjectsSecretsVersionsDisable` - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* `SecretmanagerProjectsSecretsVersionsEnable` - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* `SecretmanagerProjectsSecretsVersionsGet` - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `SecretmanagerProjectsSecretsVersionsList` - Lists SecretVersions. This call does not return secret data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
