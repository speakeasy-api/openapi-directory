# services

### Available Operations

* [serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsList](#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

## serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides

Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1ImportProducerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1ImportProducerOverridesRequestForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1OverrideInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->v1Beta1ImportProducerOverridesRequest = new V1Beta1ImportProducerOverridesRequest();
    $request->v1Beta1ImportProducerOverridesRequest->force = false;
    $request->v1Beta1ImportProducerOverridesRequest->forceOnly = [
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource = new V1Beta1OverrideInlineSource();
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource->overrides = [
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet

Retrieves a summary of quota information for a specific quota limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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
    $request->view = ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetViewEnum::FULL;

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet($request, $requestSecurity);

    if ($response->v1Beta1ConsumerQuotaLimit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate

Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->v1Beta1QuotaOverride = new V1Beta1QuotaOverride();
    $request->v1Beta1QuotaOverride->adminOverrideAncestor = 'dicta';
    $request->v1Beta1QuotaOverride->dimensions = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->v1Beta1QuotaOverride->metric = 'totam';
    $request->v1Beta1QuotaOverride->name = 'Lucy Krajcik';
    $request->v1Beta1QuotaOverride->overrideValue = 'impedit';
    $request->v1Beta1QuotaOverride->unit = 'cum';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->force = false;
    $request->forceOnly = [
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
    ];
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete

Deletes a producer override.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->force = false;
    $request->forceOnly = [
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
    ];
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList

Lists all producer overrides on this limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->pageSize = 438601;
    $request->pageToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList($request, $requestSecurity);

    if ($response->v1Beta1ListProducerOverridesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch

Updates a producer override.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->v1Beta1QuotaOverride = new V1Beta1QuotaOverride();
    $request->v1Beta1QuotaOverride->adminOverrideAncestor = 'culpa';
    $request->v1Beta1QuotaOverride->dimensions = [
        'repellat' => 'mollitia',
    ];
    $request->v1Beta1QuotaOverride->metric = 'occaecati';
    $request->v1Beta1QuotaOverride->name = 'Lucy Konopelski';
    $request->v1Beta1QuotaOverride->overrideValue = 'error';
    $request->v1Beta1QuotaOverride->unit = 'quia';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->force = false;
    $request->forceOnly = [
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum::QUOTA_SAFETY_CHECK_UNSPECIFIED,
        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
    ];
    $request->key = 'sequi';
    $request->name = 'Vernon Ondricka Sr.';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->updateMask = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesConsumerQuotaMetricsList

Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->pageSize = 451159;
    $request->pageToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';
    $request->view = ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum::FULL;

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsList($request, $requestSecurity);

    if ($response->v1Beta1ListConsumerQuotaMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
