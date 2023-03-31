# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/managedidentities/v1alpha1/go
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

    req := operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        DollarXgafv: "2",
        AttachTrustRequest: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: "provident",
                LastKnownTrustConnectedHeartbeatTime: "distinctio",
                SelectiveAuthentication: false,
                State: "DISCONNECTED",
                StateDescription: "unde",
                TargetDNSIPAddresses: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                TargetDomainName: "deserunt",
                TrustDirection: "INBOUND",
                TrustHandshakeSecret: "iure",
                TrustType: "TRUST_TYPE_UNSPECIFIED",
                UpdateTime: "debitis",
            },
        },
        AccessToken: "ipsa",
        Alt: "proto",
        Callback: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        Name: "minus",
        OauthToken: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, req, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust` - Adds AD trust in a given domain. Operation
* `ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate` - Creates a Backup for a domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList` - Lists Backup in a given project.
* `ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission` - AuditMigration API gets the current state of DomainMigration
* `ManagedidentitiesProjectsLocationsGlobalDomainsCreate` - Creates a Microsoft AD Domain in a given project. Operation
* `ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust` - Removes identified trust. Operation
* `ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration` - Disable Domain Migration
* `ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine` - DomainJoinMachine API joins a Compute Engine VM to the domain
* `ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration` - Enable Domain Migration
* `ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema` - Extend Schema for Domain
* `ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings` - Gets the domain ldaps settings.
* `ManagedidentitiesProjectsLocationsGlobalDomainsList` - Lists Domains in a given project.
* `ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust` - Updates the dns conditional forwarder. Operation
* `ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword` - Resets managed identities admin password identified by managed_identities_admin_name
* `ManagedidentitiesProjectsLocationsGlobalDomainsRestore` - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* `ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList` - Lists SQLIntegrations in a given domain.
* `ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings` - Patches a single ldaps settings.
* `ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust` - Validate the trust state Operation
* `ManagedidentitiesProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ManagedidentitiesProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsCreate` - Creates a Peering for Managed AD instance.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsDelete` - Deletes identified Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsGet` - Gets details of a single Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsList` - Lists Peerings in a given project.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsPatch` - Updates the labels for specified Peering.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `ManagedidentitiesProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
