# managedZones

### Available Operations

* [dnsManagedZonesCreate](#dnsmanagedzonescreate) - Creates a new ManagedZone.
* [dnsManagedZonesDelete](#dnsmanagedzonesdelete) - Deletes a previously created ManagedZone.
* [dnsManagedZonesGet](#dnsmanagedzonesget) - Fetches the representation of an existing ManagedZone.
* [dnsManagedZonesGetIamPolicy](#dnsmanagedzonesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dnsManagedZonesList](#dnsmanagedzoneslist) - Enumerates ManagedZones that have been created but not yet deleted.
* [dnsManagedZonesPatch](#dnsmanagedzonespatch) - Applies a partial update to an existing ManagedZone.
* [dnsManagedZonesSetIamPolicy](#dnsmanagedzonessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dnsManagedZonesTestIamPermissions](#dnsmanagedzonestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dnsManagedZonesUpdate](#dnsmanagedzonesupdate) - Updates an existing ManagedZone.

## dnsManagedZonesCreate

Creates a new ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZone;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneCloudLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpec;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigNonExistenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTarget;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfigTargetNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneReverseLookupConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfigNamespace;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedZone = new ManagedZone();
    $request->managedZone->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone->cloudLoggingConfig->enableLogging = false;
    $request->managedZone->cloudLoggingConfig->kind = 'quibusdam';
    $request->managedZone->creationTime = 'labore';
    $request->managedZone->description = 'modi';
    $request->managedZone->dnsName = 'qui';
    $request->managedZone->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
        new DnsKeySpec(),
    ];
    $request->managedZone->dnssecConfig->kind = 'cupiditate';
    $request->managedZone->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC3;
    $request->managedZone->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::OFF;
    $request->managedZone->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone->forwardingConfig->kind = 'magni';
    $request->managedZone->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone->id = 'ipsam';
    $request->managedZone->kind = 'alias';
    $request->managedZone->labels = [
        'dolorum' => 'excepturi',
    ];
    $request->managedZone->name = 'Olivia Rice';
    $request->managedZone->nameServerSet = 'eum';
    $request->managedZone->nameServers = [
        'eligendi',
    ];
    $request->managedZone->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone->peeringConfig->kind = 'sint';
    $request->managedZone->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone->peeringConfig->targetNetwork->deactivateTime = 'aliquid';
    $request->managedZone->peeringConfig->targetNetwork->kind = 'provident';
    $request->managedZone->peeringConfig->targetNetwork->networkUrl = 'necessitatibus';
    $request->managedZone->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone->privateVisibilityConfig->kind = 'officia';
    $request->managedZone->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone->reverseLookupConfig->kind = 'debitis';
    $request->managedZone->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone->serviceDirectoryConfig->kind = 'a';
    $request->managedZone->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone->serviceDirectoryConfig->namespace->deletionTime = 'dolorum';
    $request->managedZone->serviceDirectoryConfig->namespace->kind = 'in';
    $request->managedZone->serviceDirectoryConfig->namespace->namespaceUrl = 'in';
    $request->managedZone->visibility = ManagedZoneVisibilityEnum::PRIVATE;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->clientOperationId = 'magnam';
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DnsManagedZonesCreateSecurity();
    $requestSecurity->option1 = new DnsManagedZonesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesCreate($request, $requestSecurity);

    if ($response->managedZone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesDelete

Deletes a previously created ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->clientOperationId = 'quidem';
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->managedZone = 'id';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DnsManagedZonesDeleteSecurity();
    $requestSecurity->option1 = new DnsManagedZonesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesGet

Fetches the representation of an existing ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->clientOperationId = 'molestiae';
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->managedZone = 'magnam';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'labore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DnsManagedZonesGetSecurity();
    $requestSecurity->option1 = new DnsManagedZonesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesGet($request, $requestSecurity);

    if ($response->managedZone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesGetIamPolicySecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest();
    $request->googleIamV1GetIamPolicyRequest->options = new GoogleIamV1GetPolicyOptions();
    $request->googleIamV1GetIamPolicyRequest->options->requestedPolicyVersion = 749170;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->resource = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DnsManagedZonesGetIamPolicySecurity();
    $requestSecurity->option1 = new DnsManagedZonesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesGetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesList

Enumerates ManagedZones that have been created but not yet deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->dnsName = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->maxResults = 221262;
    $request->oauthToken = 'necessitatibus';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DnsManagedZonesListSecurity();
    $requestSecurity->option1 = new DnsManagedZonesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesList($request, $requestSecurity);

    if ($response->managedZonesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesPatch

Applies a partial update to an existing ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZone;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneCloudLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpec;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigNonExistenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTarget;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfigTargetNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneReverseLookupConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfigNamespace;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedZone1 = new ManagedZone();
    $request->managedZone1->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone1->cloudLoggingConfig->enableLogging = false;
    $request->managedZone1->cloudLoggingConfig->kind = 'eius';
    $request->managedZone1->creationTime = 'maxime';
    $request->managedZone1->description = 'deleniti';
    $request->managedZone1->dnsName = 'facilis';
    $request->managedZone1->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone1->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
        new DnsKeySpec(),
    ];
    $request->managedZone1->dnssecConfig->kind = 'architecto';
    $request->managedZone1->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC;
    $request->managedZone1->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::TRANSFER;
    $request->managedZone1->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone1->forwardingConfig->kind = 'ullam';
    $request->managedZone1->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone1->id = 'nihil';
    $request->managedZone1->kind = 'repellat';
    $request->managedZone1->labels = [
        'sed' => 'saepe',
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
    ];
    $request->managedZone1->name = 'Angelica Stanton';
    $request->managedZone1->nameServerSet = 'ea';
    $request->managedZone1->nameServers = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->managedZone1->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone1->peeringConfig->kind = 'ab';
    $request->managedZone1->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone1->peeringConfig->targetNetwork->deactivateTime = 'maiores';
    $request->managedZone1->peeringConfig->targetNetwork->kind = 'quidem';
    $request->managedZone1->peeringConfig->targetNetwork->networkUrl = 'ipsam';
    $request->managedZone1->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone1->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone1->privateVisibilityConfig->kind = 'autem';
    $request->managedZone1->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone1->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone1->reverseLookupConfig->kind = 'eaque';
    $request->managedZone1->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone1->serviceDirectoryConfig->kind = 'pariatur';
    $request->managedZone1->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone1->serviceDirectoryConfig->namespace->deletionTime = 'nemo';
    $request->managedZone1->serviceDirectoryConfig->namespace->kind = 'voluptatibus';
    $request->managedZone1->serviceDirectoryConfig->namespace->namespaceUrl = 'perferendis';
    $request->managedZone1->visibility = ManagedZoneVisibilityEnum::PRIVATE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->clientOperationId = 'corporis';
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->managedZonePathParameter = 'nobis';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'totam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new DnsManagedZonesPatchSecurity();
    $requestSecurity->option1 = new DnsManagedZonesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'perferendis';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 170986;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'minus';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'nostrum';
    $request->key = 'hic';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->resource = 'facilis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new DnsManagedZonesSetIamPolicySecurity();
    $requestSecurity->option1 = new DnsManagedZonesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesSetIamPolicy($request, $requestSecurity);

    if ($response->googleIamV1Policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesTestIamPermissionsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'blanditiis',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->resource = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DnsManagedZonesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new DnsManagedZonesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesTestIamPermissions($request, $requestSecurity);

    if ($response->googleIamV1TestIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsManagedZonesUpdate

Updates an existing ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZone;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneCloudLoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfig;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpec;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsKeySpecKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigNonExistenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneDnsSecConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTarget;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePeeringConfigTargetNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigGKECluster;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZonePrivateVisibilityConfigNetwork;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneReverseLookupConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneServiceDirectoryConfigNamespace;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsManagedZonesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsManagedZonesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedZone1 = new ManagedZone();
    $request->managedZone1->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone1->cloudLoggingConfig->enableLogging = false;
    $request->managedZone1->cloudLoggingConfig->kind = 'pariatur';
    $request->managedZone1->creationTime = 'provident';
    $request->managedZone1->description = 'nobis';
    $request->managedZone1->dnsName = 'libero';
    $request->managedZone1->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone1->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
        new DnsKeySpec(),
        new DnsKeySpec(),
        new DnsKeySpec(),
    ];
    $request->managedZone1->dnssecConfig->kind = 'quaerat';
    $request->managedZone1->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC3;
    $request->managedZone1->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::ON;
    $request->managedZone1->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone1->forwardingConfig->kind = 'dolorem';
    $request->managedZone1->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone1->id = 'dolor';
    $request->managedZone1->kind = 'qui';
    $request->managedZone1->labels = [
        'hic' => 'excepturi',
    ];
    $request->managedZone1->name = 'Adrian Kuhn';
    $request->managedZone1->nameServerSet = 'dolorum';
    $request->managedZone1->nameServers = [
        'veritatis',
        'ipsa',
    ];
    $request->managedZone1->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone1->peeringConfig->kind = 'ipsa';
    $request->managedZone1->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone1->peeringConfig->targetNetwork->deactivateTime = 'iure';
    $request->managedZone1->peeringConfig->targetNetwork->kind = 'odio';
    $request->managedZone1->peeringConfig->targetNetwork->networkUrl = 'quaerat';
    $request->managedZone1->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone1->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone1->privateVisibilityConfig->kind = 'quidem';
    $request->managedZone1->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone1->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone1->reverseLookupConfig->kind = 'voluptas';
    $request->managedZone1->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone1->serviceDirectoryConfig->kind = 'natus';
    $request->managedZone1->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone1->serviceDirectoryConfig->namespace->deletionTime = 'eos';
    $request->managedZone1->serviceDirectoryConfig->namespace->kind = 'atque';
    $request->managedZone1->serviceDirectoryConfig->namespace->namespaceUrl = 'sit';
    $request->managedZone1->visibility = ManagedZoneVisibilityEnum::PRIVATE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->clientOperationId = 'iusto';
    $request->fields = 'voluptate';
    $request->key = 'dolorum';
    $request->managedZonePathParameter = 'deleniti';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DnsManagedZonesUpdateSecurity();
    $requestSecurity->option1 = new DnsManagedZonesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedZones->dnsManagedZonesUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
