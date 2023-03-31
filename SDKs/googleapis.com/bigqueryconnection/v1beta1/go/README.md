# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigqueryconnection/v1beta1/go
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

    req := operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest{
        DollarXgafv: "2",
        ConnectionInput: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: "provident",
                    Username: "Micheal_Sporer",
                },
                Database: "corrupti",
                InstanceID: "illum",
                Type: "POSTGRES",
            },
            Description: "error",
            FriendlyName: "deserunt",
            Name: "suscipit",
        },
        AccessToken: "iure",
        Alt: "json",
        Callback: "debitis",
        ConnectionID: "ipsa",
        Fields: "delectus",
        Key: "tempora",
        OauthToken: "suscipit",
        Parent: "molestiae",
        PrettyPrint: false,
        QuotaUser: "minus",
        UploadType: "placeat",
        UploadProtocol: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, req, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BigqueryconnectionProjectsLocationsConnectionsCreate` - Creates a new connection.
* `BigqueryconnectionProjectsLocationsConnectionsDelete` - Deletes connection and associated credential.
* `BigqueryconnectionProjectsLocationsConnectionsGet` - Returns specified connection.
* `BigqueryconnectionProjectsLocationsConnectionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BigqueryconnectionProjectsLocationsConnectionsList` - Returns a list of connections in the given project.
* `BigqueryconnectionProjectsLocationsConnectionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BigqueryconnectionProjectsLocationsConnectionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `BigqueryconnectionProjectsLocationsConnectionsUpdateCredential` - Sets the credential for the specified connection.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
