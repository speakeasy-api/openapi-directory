<!-- Start SDK Example Usage -->
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
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource = new V1Beta1OverrideInlineSource();
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource->overrides = [
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

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
<!-- End SDK Example Usage -->