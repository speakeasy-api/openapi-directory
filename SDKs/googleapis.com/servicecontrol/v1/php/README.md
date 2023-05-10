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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [services](docs/services/README.md)

* [servicecontrolServicesAllocateQuota](docs/services/README.md#servicecontrolservicesallocatequota) - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* [servicecontrolServicesCheck](docs/services/README.md#servicecontrolservicescheck) - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* [servicecontrolServicesReport](docs/services/README.md#servicecontrolservicesreport) - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
