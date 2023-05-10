# projects

### Available Operations

* [managedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [managedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [managedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [managedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [managedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [managedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList](#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SqlIntegrations in a given domain.
* [managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [managedidentitiesProjectsLocationsGlobalDomainsValidateTrust](#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* [managedidentitiesProjectsLocationsGlobalOperationsCancel](#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [managedidentitiesProjectsLocationsGlobalPeeringsCreate](#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [managedidentitiesProjectsLocationsGlobalPeeringsDelete](#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGet](#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [managedidentitiesProjectsLocationsGlobalPeeringsList](#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [managedidentitiesProjectsLocationsGlobalPeeringsPatch](#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [managedidentitiesProjectsLocationsList](#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.

## managedidentitiesProjectsLocationsGlobalDomainsAttachTrust

Adds an AD trust to a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachTrustRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->attachTrustRequestInput = new AttachTrustRequestInput();
    $request->attachTrustRequestInput->trust = new TrustInput();
    $request->attachTrustRequestInput->trust->selectiveAuthentication = false;
    $request->attachTrustRequestInput->trust->targetDnsIpAddresses = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->attachTrustRequestInput->trust->targetDomainName = 'ab';
    $request->attachTrustRequestInput->trust->trustDirection = TrustTrustDirectionEnum::INBOUND;
    $request->attachTrustRequestInput->trust->trustHandshakeSecret = 'veritatis';
    $request->attachTrustRequestInput->trust->trustType = TrustTrustTypeEnum::FOREST;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->name = 'Teri Strosin';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

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

## managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate

Creates a Backup for a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backupInput = new BackupInput();
    $request->backupInput->labels = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->backupId = 'totam';
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsBackupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsBackupsList

Lists Backup in a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->filter = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->orderBy = 'dolor';
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsBackupsList($request, $requestSecurity);

    if ($response->listBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsCreate

Creates a Microsoft AD domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->domainInput = new DomainInput();
    $request->domainInput->admin = 'iste';
    $request->domainInput->auditLogsEnabled = false;
    $request->domainInput->authorizedNetworks = [
        'saepe',
        'quidem',
    ];
    $request->domainInput->labels = [
        'ipsa' => 'reiciendis',
    ];
    $request->domainInput->locations = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->domainInput->name = 'Stacy Champlin';
    $request->domainInput->reservedIpRange = 'omnis';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->domainName = 'accusantium';
    $request->fields = 'iure';
    $request->key = 'culpa';
    $request->oauthToken = 'doloribus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsDetachTrust

Removes an AD trust.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DetachTrustRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->detachTrustRequestInput = new DetachTrustRequestInput();
    $request->detachTrustRequestInput->trust = new TrustInput();
    $request->detachTrustRequestInput->trust->selectiveAuthentication = false;
    $request->detachTrustRequestInput->trust->targetDnsIpAddresses = [
        'repellat',
    ];
    $request->detachTrustRequestInput->trust->targetDomainName = 'mollitia';
    $request->detachTrustRequestInput->trust->trustDirection = TrustTrustDirectionEnum::OUTBOUND;
    $request->detachTrustRequestInput->trust->trustHandshakeSecret = 'numquam';
    $request->detachTrustRequestInput->trust->trustType = TrustTrustTypeEnum::FOREST;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->name = 'Gloria Padberg';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsDetachTrust($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine

DomainJoinMachine API joins a Compute Engine VM to the domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainJoinMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->domainJoinMachineRequest = new DomainJoinMachineRequest();
    $request->domainJoinMachineRequest->force = false;
    $request->domainJoinMachineRequest->ouName = 'id';
    $request->domainJoinMachineRequest->vmIdToken = 'possimus';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->domain = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine($request, $requestSecurity);

    if ($response->domainJoinMachineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsExtendSchema

Extend Schema for Domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtendSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->extendSchemaRequest = new ExtendSchemaRequest();
    $request->extendSchemaRequest->description = 'voluptatibus';
    $request->extendSchemaRequest->fileContents = 'ipsa';
    $request->extendSchemaRequest->gcsPath = 'omnis';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->domain = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsExtendSchema($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings

Gets the domain ldaps settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->name = 'Eric Emmerich';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings($request, $requestSecurity);

    if ($response->ldapsSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsList

Lists domains in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->filter = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->orderBy = 'enim';
    $request->pageSize = 9356;
    $request->pageToken = 'est';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsList($request, $requestSecurity);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust

Updates the DNS conditional forwarder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReconfigureTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reconfigureTrustRequest = new ReconfigureTrustRequest();
    $request->reconfigureTrustRequest->targetDnsIpAddresses = [
        'modi',
        'qui',
    ];
    $request->reconfigureTrustRequest->targetDomainName = 'aliquid';
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword

Resets a domain's administrator password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword($request, $requestSecurity);

    if ($response->resetAdminPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsRestore

RestoreDomain restores domain backup mentioned in the RestoreDomainRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RestoreDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->restoreDomainRequest = new RestoreDomainRequest();
    $request->restoreDomainRequest->backupId = 'cumque';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->name = 'Toni Haley';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsRestore($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList

Lists SqlIntegrations in a given domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->filter = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->orderBy = 'omnis';
    $request->pageSize = 474867;
    $request->pageToken = 'perferendis';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsSqlIntegrationsList($request, $requestSecurity);

    if ($response->listSqlIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings

Patches a single ldaps settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LDAPSSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\Certificate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ldapsSettingsInput = new LDAPSSettingsInput();
    $request->ldapsSettingsInput->certificate = new Certificate();
    $request->ldapsSettingsInput->certificate->expireTime = 'labore';
    $request->ldapsSettingsInput->certificate->issuingCertificate = new Certificate();
    $request->ldapsSettingsInput->certificate->subject = 'suscipit';
    $request->ldapsSettingsInput->certificate->subjectAlternativeName = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->ldapsSettingsInput->certificate->thumbprint = 'aspernatur';
    $request->ldapsSettingsInput->certificatePassword = 'architecto';
    $request->ldapsSettingsInput->certificatePfx = 'magnam';
    $request->ldapsSettingsInput->name = 'Miriam Hermann';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->name = 'Natalie Ernser';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->updateMask = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalDomainsValidateTrust

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateTrustRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustInput;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->validateTrustRequestInput = new ValidateTrustRequestInput();
    $request->validateTrustRequestInput->trust = new TrustInput();
    $request->validateTrustRequestInput->trust->selectiveAuthentication = false;
    $request->validateTrustRequestInput->trust->targetDnsIpAddresses = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->validateTrustRequestInput->trust->targetDomainName = 'architecto';
    $request->validateTrustRequestInput->trust->trustDirection = TrustTrustDirectionEnum::BIDIRECTIONAL;
    $request->validateTrustRequestInput->trust->trustHandshakeSecret = 'ullam';
    $request->validateTrustRequestInput->trust->trustType = TrustTrustTypeEnum::EXTERNAL;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'sed';
    $request->key = 'saepe';
    $request->name = 'Edward Crooks';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalDomainsValidateTrust($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->name = 'Dr. Herman Wolf';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsCreate

Creates a Peering for Managed AD instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeeringInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->peeringInput = new PeeringInput();
    $request->peeringInput->authorizedNetwork = 'nobis';
    $request->peeringInput->domainResource = 'dolores';
    $request->peeringInput->labels = [
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->parent = 'dolor';
    $request->peeringId = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsDelete

Deletes identified Peering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->name = 'Jeremiah Beatty';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsGet

Gets details of a single Peering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->filter = 'nobis';
    $request->key = 'libero';
    $request->name = 'Alex Luettgen';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 222443;
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsGet($request, $requestSecurity);

    if ($response->peering !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'amet';
    $request->key = 'dolorum';
    $request->oauthToken = 'numquam';
    $request->optionsRequestedPolicyVersion = 85295;
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->resource = 'ipsa';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsList

Lists Peerings in a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->filter = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->orderBy = 'sit';
    $request->pageSize = 854614;
    $request->pageToken = 'ab';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsList($request, $requestSecurity);

    if ($response->listPeeringsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsPatch

Updates the labels for specified Peering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeeringInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->peeringInput = new PeeringInput();
    $request->peeringInput->authorizedNetwork = 'deleniti';
    $request->peeringInput->domainResource = 'omnis';
    $request->peeringInput->labels = [
        'distinctio' => 'asperiores',
        'nihil' => 'ipsum',
        'voluptate' => 'id',
        'saepe' => 'eius',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'optio';
    $request->key = 'accusamus';
    $request->name = 'Jenna Hoppe';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->updateMask = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'tempora';
    $request->setIamPolicyRequest->policy->version = 425451;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->resource = 'iusto';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'tempore',
    ];
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorem';
    $request->key = 'sapiente';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->resource = 'sit';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## managedidentitiesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManagedidentitiesProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManagedidentitiesProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'deserunt';
    $request->filter = 'quam';
    $request->key = 'ipsum';
    $request->name = 'Norma McGlynn';
    $request->oauthToken = 'soluta';
    $request->pageSize = 117531;
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new ManagedidentitiesProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->managedidentitiesProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
