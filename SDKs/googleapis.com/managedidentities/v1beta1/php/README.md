# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `managedidentitiesProjectsLocationsGlobalDomainsAttachTrust` - Adds an AD trust to a domain.
* `managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate` - Creates a Backup for a domain.
* `managedidentitiesProjectsLocationsGlobalDomainsBackupsList` - Lists Backup in a given project.
* `managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission` - CheckMigrationPermission API gets the current state of DomainMigration
* `managedidentitiesProjectsLocationsGlobalDomainsCreate` - Creates a Microsoft AD domain.
* `managedidentitiesProjectsLocationsGlobalDomainsDetachTrust` - Removes an AD trust.
* `managedidentitiesProjectsLocationsGlobalDomainsDisableMigration` - Disable Domain Migration
* `managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine` - DomainJoinMachine API joins a Compute Engine VM to the domain
* `managedidentitiesProjectsLocationsGlobalDomainsEnableMigration` - Enable Domain Migration
* `managedidentitiesProjectsLocationsGlobalDomainsExtendSchema` - Extend Schema for Domain
* `managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings` - Gets the domain ldaps settings.
* `managedidentitiesProjectsLocationsGlobalDomainsList` - Lists domains in a project.
* `managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust` - Updates the DNS conditional forwarder.
* `managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword` - Resets a domain's administrator password.
* `managedidentitiesProjectsLocationsGlobalDomainsRestore` - RestoreBackup restores domain mentioned in the RestoreBackupRequest
* `managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList` - Lists SqlIntegrations in a given domain.
* `managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings` - Patches a single ldaps settings.
* `managedidentitiesProjectsLocationsGlobalDomainsValidateTrust` - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* `managedidentitiesProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `managedidentitiesProjectsLocationsGlobalPeeringsCreate` - Creates a Peering for Managed AD instance.
* `managedidentitiesProjectsLocationsGlobalPeeringsDelete` - Deletes identified Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsGet` - Gets details of a single Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `managedidentitiesProjectsLocationsGlobalPeeringsList` - Lists Peerings in a given project.
* `managedidentitiesProjectsLocationsGlobalPeeringsPatch` - Updates the labels for specified Peering.
* `managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `managedidentitiesProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
