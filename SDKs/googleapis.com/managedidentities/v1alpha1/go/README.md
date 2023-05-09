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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AttachTrustRequest: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: sdk.String("provident"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("distinctio"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumDisconnected.ToPointer(),
                StateDescription: sdk.String("unde"),
                TargetDNSIPAddresses: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                TargetDomainName: sdk.String("deserunt"),
                TrustDirection: shared.TrustTrustDirectionEnumInbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("iure"),
                TrustType: shared.TrustTrustTypeEnumTrustTypeUnspecified.ToPointer(),
                UpdateTime: sdk.String("debitis"),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        Name: "Irving Lehner",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
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


### [Projects](docs/projects/README.md)

* [ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds AD trust in a given domain. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - AuditMigration API gets the current state of DomainMigration
* [ManagedidentitiesProjectsLocationsGlobalDomainsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD Domain in a given project. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes identified trust. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainslist) - Lists Domains in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the dns conditional forwarder. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets managed identities admin password identified by managed_identities_admin_name
* [ManagedidentitiesProjectsLocationsGlobalDomainsRestore](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SQLIntegrations in a given domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validate the trust state Operation
* [ManagedidentitiesProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ManagedidentitiesProjectsLocationsGlobalOperationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsDelete](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsGet](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsList](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsPatch](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ManagedidentitiesProjectsLocationsList](docs/projects/README.md#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
