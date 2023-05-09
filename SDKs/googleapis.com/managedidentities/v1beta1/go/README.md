# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/managedidentities/v1beta1/go
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
        AttachTrustRequestInput: &shared.AttachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                TargetDomainName: sdk.String("nulla"),
                TrustDirection: shared.TrustTrustDirectionEnumOutbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("illum"),
                TrustType: shared.TrustTrustTypeEnumForest.ToPointer(),
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        Name: "Larry Windler",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
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

* [ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - CheckMigrationPermission API gets the current state of DomainMigration
* [ManagedidentitiesProjectsLocationsGlobalDomainsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [ManagedidentitiesProjectsLocationsGlobalDomainsRestore](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreBackup restores domain mentioned in the RestoreBackupRequest
* [ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SqlIntegrations in a given domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* [ManagedidentitiesProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
