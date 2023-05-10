# services

### Available Operations

* [serviceusageServicesBatchEnable](#serviceusageservicesbatchenable) - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesConsumerQuotaMetricsImportAdminOverrides](#serviceusageservicesconsumerquotametricsimportadminoverrides) - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides](#serviceusageservicesconsumerquotametricsimportconsumeroverrides) - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate](#serviceusageservicesconsumerquotametricslimitsadminoverridescreate) - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* [serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList](#serviceusageservicesconsumerquotametricslimitsadminoverrideslist) - Lists all admin overrides on this limit.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate](#serviceusageservicesconsumerquotametricslimitsconsumeroverridescreate) - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete](#serviceusageservicesconsumerquotametricslimitsconsumeroverridesdelete) - Deletes a consumer override.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList](#serviceusageservicesconsumerquotametricslimitsconsumeroverrideslist) - Lists all consumer overrides on this limit.
* [serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch](#serviceusageservicesconsumerquotametricslimitsconsumeroverridespatch) - Updates a consumer override.
* [serviceusageServicesConsumerQuotaMetricsLimitsGet](#serviceusageservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceusageServicesConsumerQuotaMetricsList](#serviceusageservicesconsumerquotametricslist) - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* [serviceusageServicesDisable](#serviceusageservicesdisable) - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesEnable](#serviceusageservicesenable) - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* [serviceusageServicesGenerateServiceIdentity](#serviceusageservicesgenerateserviceidentity) - Generates service identity for service.
* [serviceusageServicesList](#serviceusageserviceslist) - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

## serviceusageServicesBatchEnable

Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchEnableServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesBatchEnableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesBatchEnableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchEnableServicesRequest = new BatchEnableServicesRequest();
    $request->batchEnableServicesRequest->serviceIds = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new ServiceusageServicesBatchEnableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesBatchEnableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesBatchEnable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsImportAdminOverrides

Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportAdminOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportAdminOverridesRequestForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverrideInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->importAdminOverridesRequest = new ImportAdminOverridesRequest();
    $request->importAdminOverridesRequest->force = false;
    $request->importAdminOverridesRequest->forceOnly = [
        ImportAdminOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        ImportAdminOverridesRequestForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
        ImportAdminOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        ImportAdminOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->importAdminOverridesRequest->inlineSource = new OverrideInlineSource();
    $request->importAdminOverridesRequest->inlineSource->overrides = [
        new QuotaOverride(),
        new QuotaOverride(),
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsImportAdminOverrides($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides

Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportConsumerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportConsumerOverridesRequestForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OverrideInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importConsumerOverridesRequest = new ImportConsumerOverridesRequest();
    $request->importConsumerOverridesRequest->force = false;
    $request->importConsumerOverridesRequest->forceOnly = [
        ImportConsumerOverridesRequestForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
        ImportConsumerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        ImportConsumerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->importConsumerOverridesRequest->inlineSource = new OverrideInlineSource();
    $request->importConsumerOverridesRequest->inlineSource->overrides = [
        new QuotaOverride(),
        new QuotaOverride(),
        new QuotaOverride(),
        new QuotaOverride(),
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->oauthToken = 'iure';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate

Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->quotaOverride = new QuotaOverride();
    $request->quotaOverride->adminOverrideAncestor = 'est';
    $request->quotaOverride->dimensions = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->quotaOverride->metric = 'enim';
    $request->quotaOverride->name = 'Corey Hane III';
    $request->quotaOverride->overrideValue = 'culpa';
    $request->quotaOverride->unit = 'doloribus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->force = false;
    $request->forceOnly = [
        ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
        ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList

Lists all admin overrides on this limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->parent = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList($request, $requestSecurity);

    if ($response->listAdminOverridesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate

Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->quotaOverride = new QuotaOverride();
    $request->quotaOverride->adminOverrideAncestor = 'aut';
    $request->quotaOverride->dimensions = [
        'error' => 'temporibus',
    ];
    $request->quotaOverride->metric = 'laborum';
    $request->quotaOverride->name = 'Johanna Wolf';
    $request->quotaOverride->overrideValue = 'praesentium';
    $request->quotaOverride->unit = 'voluptatibus';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'cum';
    $request->force = false;
    $request->forceOnly = [
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
    ];
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete

Deletes a consumer override.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->force = false;
    $request->forceOnly = [
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
    ];
    $request->key = 'ipsum';
    $request->name = 'Virgil Mante';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList

Lists all consumer overrides on this limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'itaque';
    $request->fields = 'incidunt';
    $request->key = 'enim';
    $request->oauthToken = 'consequatur';
    $request->pageSize = 667411;
    $request->pageToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList($request, $requestSecurity);

    if ($response->listConsumerOverridesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch

Updates a consumer override.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->quotaOverride = new QuotaOverride();
    $request->quotaOverride->adminOverrideAncestor = 'modi';
    $request->quotaOverride->dimensions = [
        'aliquid' => 'cupiditate',
    ];
    $request->quotaOverride->metric = 'quos';
    $request->quotaOverride->name = 'Louise Simonis Sr.';
    $request->quotaOverride->overrideValue = 'dolorum';
    $request->quotaOverride->unit = 'excepturi';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->force = false;
    $request->forceOnly = [
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->key = 'aliquid';
    $request->name = 'Terence Marquardt';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsLimitsGet

Retrieves a summary of quota information for a specific quota limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsLimitsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->name = 'Nathaniel Hyatt';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';
    $request->view = ServiceusageServicesConsumerQuotaMetricsLimitsGetViewEnum::FULL;

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsLimitsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsLimitsGet($request, $requestSecurity);

    if ($response->consumerQuotaLimit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesConsumerQuotaMetricsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesConsumerQuotaMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 230533;
    $request->pageToken = 'deserunt';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';
    $request->view = ServiceusageServicesConsumerQuotaMetricsListViewEnum::BASIC;

    $requestSecurity = new ServiceusageServicesConsumerQuotaMetricsListSecurity();
    $requestSecurity->option1 = new ServiceusageServicesConsumerQuotaMetricsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesConsumerQuotaMetricsList($request, $requestSecurity);

    if ($response->listConsumerQuotaMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesDisable

Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesDisableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesDisableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'magnam' => 'distinctio',
        'id' => 'labore',
    ];
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->name = 'Brandon Brakus V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ServiceusageServicesDisableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesDisableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesDisable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesEnable

Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesEnableSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesEnableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->name = 'Frederick Schoen';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ServiceusageServicesEnableSecurity();
    $requestSecurity->option1 = new ServiceusageServicesEnableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesEnable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesGenerateServiceIdentity

Generates service identity for service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGenerateServiceIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGenerateServiceIdentitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGenerateServiceIdentitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesGenerateServiceIdentitySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesGenerateServiceIdentityRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellat';
    $request->fields = 'quibusdam';
    $request->key = 'sed';
    $request->oauthToken = 'saepe';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new ServiceusageServicesGenerateServiceIdentitySecurity();
    $requestSecurity->option1 = new ServiceusageServicesGenerateServiceIdentitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesGenerateServiceIdentity($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceusageServicesList

Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServiceusageServicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceusageServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->filter = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->pageSize = 569101;
    $request->pageToken = 'odit';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new ServiceusageServicesListSecurity();
    $requestSecurity->option1 = new ServiceusageServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceusageServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
