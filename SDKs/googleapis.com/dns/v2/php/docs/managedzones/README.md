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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->managedZone = new ManagedZone();
    $request->managedZone->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone->cloudLoggingConfig->enableLogging = false;
    $request->managedZone->cloudLoggingConfig->kind = 'magni';
    $request->managedZone->creationTime = 'assumenda';
    $request->managedZone->description = 'ipsam';
    $request->managedZone->dnsName = 'alias';
    $request->managedZone->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
    ];
    $request->managedZone->dnssecConfig->kind = 'dolorum';
    $request->managedZone->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC3;
    $request->managedZone->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::OFF;
    $request->managedZone->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone->forwardingConfig->kind = 'facilis';
    $request->managedZone->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone->id = 'labore';
    $request->managedZone->kind = 'delectus';
    $request->managedZone->labels = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->managedZone->name = 'Terence Marquardt';
    $request->managedZone->nameServerSet = 'debitis';
    $request->managedZone->nameServers = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->managedZone->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone->peeringConfig->kind = 'maiores';
    $request->managedZone->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone->peeringConfig->targetNetwork->deactivateTime = 'rerum';
    $request->managedZone->peeringConfig->targetNetwork->kind = 'dicta';
    $request->managedZone->peeringConfig->targetNetwork->networkUrl = 'magnam';
    $request->managedZone->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone->privateVisibilityConfig->kind = 'facere';
    $request->managedZone->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone->reverseLookupConfig->kind = 'aliquid';
    $request->managedZone->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone->serviceDirectoryConfig->kind = 'laborum';
    $request->managedZone->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone->serviceDirectoryConfig->namespace->deletionTime = 'accusamus';
    $request->managedZone->serviceDirectoryConfig->namespace->kind = 'non';
    $request->managedZone->serviceDirectoryConfig->namespace->namespaceUrl = 'occaecati';
    $request->managedZone->visibility = ManagedZoneVisibilityEnum::PUBLIC;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->clientOperationId = 'provident';
    $request->fields = 'nam';
    $request->key = 'id';
    $request->location = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->clientOperationId = 'perferendis';
    $request->fields = 'nihil';
    $request->key = 'magnam';
    $request->location = 'distinctio';
    $request->managedZone = 'id';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

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
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->clientOperationId = 'magnam';
    $request->fields = 'et';
    $request->key = 'excepturi';
    $request->location = 'ullam';
    $request->managedZone = 'provident';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

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
    $request->googleIamV1GetIamPolicyRequest->options->requestedPolicyVersion = 320997;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->resource = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

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
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->dnsName = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->location = 'ullam';
    $request->maxResults = 714242;
    $request->oauthToken = 'nihil';
    $request->pageToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->managedZone1 = new ManagedZone();
    $request->managedZone1->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone1->cloudLoggingConfig->enableLogging = false;
    $request->managedZone1->cloudLoggingConfig->kind = 'consequuntur';
    $request->managedZone1->creationTime = 'praesentium';
    $request->managedZone1->description = 'natus';
    $request->managedZone1->dnsName = 'magni';
    $request->managedZone1->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone1->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
    ];
    $request->managedZone1->dnssecConfig->kind = 'quo';
    $request->managedZone1->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC3;
    $request->managedZone1->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::TRANSFER;
    $request->managedZone1->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone1->forwardingConfig->kind = 'maxime';
    $request->managedZone1->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone1->id = 'excepturi';
    $request->managedZone1->kind = 'odit';
    $request->managedZone1->labels = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->managedZone1->name = 'Colleen Johnston PhD';
    $request->managedZone1->nameServerSet = 'nemo';
    $request->managedZone1->nameServers = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->managedZone1->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone1->peeringConfig->kind = 'cumque';
    $request->managedZone1->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone1->peeringConfig->targetNetwork->deactivateTime = 'corporis';
    $request->managedZone1->peeringConfig->targetNetwork->kind = 'hic';
    $request->managedZone1->peeringConfig->targetNetwork->networkUrl = 'libero';
    $request->managedZone1->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone1->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone1->privateVisibilityConfig->kind = 'dolores';
    $request->managedZone1->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone1->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone1->reverseLookupConfig->kind = 'totam';
    $request->managedZone1->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone1->serviceDirectoryConfig->kind = 'dignissimos';
    $request->managedZone1->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone1->serviceDirectoryConfig->namespace->deletionTime = 'eaque';
    $request->managedZone1->serviceDirectoryConfig->namespace->kind = 'quis';
    $request->managedZone1->serviceDirectoryConfig->namespace->namespaceUrl = 'nesciunt';
    $request->managedZone1->visibility = ManagedZoneVisibilityEnum::PUBLIC;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->clientOperationId = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->location = 'nostrum';
    $request->managedZonePathParameter = 'hic';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'voluptatem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'error';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 50370;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'occaecati';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

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
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'dolor';
    $request->key = 'qui';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resource = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->managedZone1 = new ManagedZone();
    $request->managedZone1->cloudLoggingConfig = new ManagedZoneCloudLoggingConfig();
    $request->managedZone1->cloudLoggingConfig->enableLogging = false;
    $request->managedZone1->cloudLoggingConfig->kind = 'reiciendis';
    $request->managedZone1->creationTime = 'amet';
    $request->managedZone1->description = 'dolorum';
    $request->managedZone1->dnsName = 'numquam';
    $request->managedZone1->dnssecConfig = new ManagedZoneDnsSecConfig();
    $request->managedZone1->dnssecConfig->defaultKeySpecs = [
        new DnsKeySpec(),
    ];
    $request->managedZone1->dnssecConfig->kind = 'ipsa';
    $request->managedZone1->dnssecConfig->nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum::NSEC;
    $request->managedZone1->dnssecConfig->state = ManagedZoneDnsSecConfigStateEnum::ON;
    $request->managedZone1->forwardingConfig = new ManagedZoneForwardingConfig();
    $request->managedZone1->forwardingConfig->kind = 'odio';
    $request->managedZone1->forwardingConfig->targetNameServers = [
        new ManagedZoneForwardingConfigNameServerTarget(),
        new ManagedZoneForwardingConfigNameServerTarget(),
    ];
    $request->managedZone1->id = 'accusamus';
    $request->managedZone1->kind = 'quidem';
    $request->managedZone1->labels = [
        'voluptas' => 'natus',
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->managedZone1->name = 'Ted Kling';
    $request->managedZone1->nameServerSet = 'omnis';
    $request->managedZone1->nameServers = [
        'distinctio',
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->managedZone1->peeringConfig = new ManagedZonePeeringConfig();
    $request->managedZone1->peeringConfig->kind = 'voluptate';
    $request->managedZone1->peeringConfig->targetNetwork = new ManagedZonePeeringConfigTargetNetwork();
    $request->managedZone1->peeringConfig->targetNetwork->deactivateTime = 'id';
    $request->managedZone1->peeringConfig->targetNetwork->kind = 'saepe';
    $request->managedZone1->peeringConfig->targetNetwork->networkUrl = 'eius';
    $request->managedZone1->privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig();
    $request->managedZone1->privateVisibilityConfig->gkeClusters = [
        new ManagedZonePrivateVisibilityConfigGKECluster(),
    ];
    $request->managedZone1->privateVisibilityConfig->kind = 'perferendis';
    $request->managedZone1->privateVisibilityConfig->networks = [
        new ManagedZonePrivateVisibilityConfigNetwork(),
    ];
    $request->managedZone1->reverseLookupConfig = new ManagedZoneReverseLookupConfig();
    $request->managedZone1->reverseLookupConfig->kind = 'optio';
    $request->managedZone1->serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig();
    $request->managedZone1->serviceDirectoryConfig->kind = 'accusamus';
    $request->managedZone1->serviceDirectoryConfig->namespace = new ManagedZoneServiceDirectoryConfigNamespace();
    $request->managedZone1->serviceDirectoryConfig->namespace->deletionTime = 'ad';
    $request->managedZone1->serviceDirectoryConfig->namespace->kind = 'saepe';
    $request->managedZone1->serviceDirectoryConfig->namespace->namespaceUrl = 'suscipit';
    $request->managedZone1->visibility = ManagedZoneVisibilityEnum::PRIVATE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->clientOperationId = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->location = 'at';
    $request->managedZonePathParameter = 'quaerat';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'quod';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'qui';

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
