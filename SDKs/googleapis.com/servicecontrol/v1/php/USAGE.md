<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesAllocateQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocateQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOperation;
use \OpenAPI\OpenAPI\Models\Shared\MetricValueSet;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\ExplicitBuckets;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialBuckets;
use \OpenAPI\OpenAPI\Models\Shared\LinearBuckets;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\QuotaOperationQuotaModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesAllocateQuotaSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesAllocateQuotaSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesAllocateQuotaSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicecontrolServicesAllocateQuotaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->allocateQuotaRequest = new AllocateQuotaRequest();
    $request->allocateQuotaRequest->allocateOperation = new QuotaOperation();
    $request->allocateQuotaRequest->allocateOperation->consumerId = 'provident';
    $request->allocateQuotaRequest->allocateOperation->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->allocateQuotaRequest->allocateOperation->methodName = 'error';
    $request->allocateQuotaRequest->allocateOperation->operationId = 'deserunt';
    $request->allocateQuotaRequest->allocateOperation->quotaMetrics = [
        new MetricValueSet(),
        new MetricValueSet(),
    ];
    $request->allocateQuotaRequest->allocateOperation->quotaMode = QuotaOperationQuotaModeEnum::BEST_EFFORT;
    $request->allocateQuotaRequest->serviceConfigId = 'magnam';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->serviceName = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ServicecontrolServicesAllocateQuotaSecurity();
    $requestSecurity->option1 = new ServicecontrolServicesAllocateQuotaSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicecontrolServicesAllocateQuota($request, $requestSecurity);

    if ($response->allocateQuotaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->