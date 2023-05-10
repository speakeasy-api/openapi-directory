# services

### Available Operations

* [servicecontrolServicesAllocateQuota](#servicecontrolservicesallocatequota) - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* [servicecontrolServicesCheck](#servicecontrolservicescheck) - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* [servicecontrolServicesReport](#servicecontrolservicesreport) - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

## servicecontrolServicesAllocateQuota

Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.

### Example Usage

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
    $request->allocateQuotaRequest->allocateOperation->consumerId = 'nisi';
    $request->allocateQuotaRequest->allocateOperation->labels = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->allocateQuotaRequest->allocateOperation->methodName = 'sapiente';
    $request->allocateQuotaRequest->allocateOperation->operationId = 'quo';
    $request->allocateQuotaRequest->allocateOperation->quotaMetrics = [
        new MetricValueSet(),
    ];
    $request->allocateQuotaRequest->allocateOperation->quotaMode = QuotaOperationQuotaModeEnum::ADJUST_ONLY;
    $request->allocateQuotaRequest->serviceConfigId = 'at';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->serviceName = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

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

## servicecontrolServicesCheck

Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogEntry;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogEntryOperation;
use \OpenAPI\OpenAPI\Models\Shared\LogEntrySeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogEntrySourceLocation;
use \OpenAPI\OpenAPI\Models\Shared\MetricValueSet;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\ExplicitBuckets;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialBuckets;
use \OpenAPI\OpenAPI\Models\Shared\LinearBuckets;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\QuotaProperties;
use \OpenAPI\OpenAPI\Models\Shared\QuotaPropertiesQuotaModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpan;
use \OpenAPI\OpenAPI\Models\Shared\Attributes;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\TruncatableString;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpanSpanKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesCheckSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicecontrolServicesCheckRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->checkRequest = new CheckRequest();
    $request->checkRequest->operation = new Operation();
    $request->checkRequest->operation->consumerId = 'occaecati';
    $request->checkRequest->operation->endTime = 'fugit';
    $request->checkRequest->operation->importance = OperationImportanceEnum::DEBUG;
    $request->checkRequest->operation->labels = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->checkRequest->operation->logEntries = [
        new LogEntry(),
        new LogEntry(),
        new LogEntry(),
    ];
    $request->checkRequest->operation->metricValueSets = [
        new MetricValueSet(),
        new MetricValueSet(),
    ];
    $request->checkRequest->operation->operationId = 'ipsum';
    $request->checkRequest->operation->operationName = 'excepturi';
    $request->checkRequest->operation->quotaProperties = new QuotaProperties();
    $request->checkRequest->operation->quotaProperties->quotaMode = QuotaPropertiesQuotaModeEnum::ACQUIRE;
    $request->checkRequest->operation->resources = [
        new ResourceInfo(),
    ];
    $request->checkRequest->operation->startTime = 'ad';
    $request->checkRequest->operation->traceSpans = [
        new TraceSpan(),
        new TraceSpan(),
        new TraceSpan(),
    ];
    $request->checkRequest->operation->userLabels = [
        'iste' => 'dolor',
    ];
    $request->checkRequest->requestProjectSettings = false;
    $request->checkRequest->serviceConfigId = 'natus';
    $request->checkRequest->skipActivationCheck = false;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->serviceName = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ServicecontrolServicesCheckSecurity();
    $requestSecurity->option1 = new ServicecontrolServicesCheckSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicecontrolServicesCheck($request, $requestSecurity);

    if ($response->checkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicecontrolServicesReport

Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OperationImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogEntry;
use \OpenAPI\OpenAPI\Models\Shared\HttpRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogEntryOperation;
use \OpenAPI\OpenAPI\Models\Shared\LogEntrySeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogEntrySourceLocation;
use \OpenAPI\OpenAPI\Models\Shared\MetricValueSet;
use \OpenAPI\OpenAPI\Models\Shared\MetricValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\ExplicitBuckets;
use \OpenAPI\OpenAPI\Models\Shared\ExponentialBuckets;
use \OpenAPI\OpenAPI\Models\Shared\LinearBuckets;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\QuotaProperties;
use \OpenAPI\OpenAPI\Models\Shared\QuotaPropertiesQuotaModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpan;
use \OpenAPI\OpenAPI\Models\Shared\Attributes;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\TruncatableString;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpanSpanKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicecontrolServicesReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicecontrolServicesReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->reportRequest = new ReportRequest();
    $request->reportRequest->operations = [
        new Operation(),
    ];
    $request->reportRequest->serviceConfigId = 'reiciendis';
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->serviceName = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ServicecontrolServicesReportSecurity();
    $requestSecurity->option1 = new ServicecontrolServicesReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicecontrolServicesReport($request, $requestSecurity);

    if ($response->reportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
