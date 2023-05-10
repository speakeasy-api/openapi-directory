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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\Trust;
use \OpenAPI\OpenAPI\Models\Shared\TrustStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attachTrustRequest = new AttachTrustRequest();
    $request->attachTrustRequest->trust = new Trust();
    $request->attachTrustRequest->trust->createTime = 'provident';
    $request->attachTrustRequest->trust->lastKnownTrustConnectedHeartbeatTime = 'distinctio';
    $request->attachTrustRequest->trust->selectiveAuthentication = false;
    $request->attachTrustRequest->trust->state = TrustStateEnum::DISCONNECTED;
    $request->attachTrustRequest->trust->stateDescription = 'unde';
    $request->attachTrustRequest->trust->targetDnsIpAddresses = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->attachTrustRequest->trust->targetDomainName = 'deserunt';
    $request->attachTrustRequest->trust->trustDirection = TrustTrustDirectionEnum::INBOUND;
    $request->attachTrustRequest->trust->trustHandshakeSecret = 'iure';
    $request->attachTrustRequest->trust->trustType = TrustTrustTypeEnum::TRUST_TYPE_UNSPECIFIED;
    $request->attachTrustRequest->trust->updateTime = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->name = 'Irving Lehner';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsAttachTrust($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds AD trust in a given domain. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - AuditMigration API gets the current state of DomainMigration
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD Domain in a given project. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes identified trust. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsDisableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsEnableMigration](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainslist) - Lists Domains in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the dns conditional forwarder. Operation
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets managed identities admin password identified by managed_identities_admin_name
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SQLIntegrations in a given domain.
* [managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsValidateTrust](docs/projects/README.md#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validate the trust state Operation
* [managedidentitiesProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [managedidentitiesProjectsLocationsGlobalOperationsList](docs/projects/README.md#managedidentitiesprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [managedidentitiesProjectsLocationsGlobalPeeringsCreate](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [managedidentitiesProjectsLocationsGlobalPeeringsDelete](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGet](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [managedidentitiesProjectsLocationsGlobalPeeringsList](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [managedidentitiesProjectsLocationsGlobalPeeringsPatch](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](docs/projects/README.md#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [managedidentitiesProjectsLocationsList](docs/projects/README.md#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
