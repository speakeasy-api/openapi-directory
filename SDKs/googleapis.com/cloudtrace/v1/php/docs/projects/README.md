# projects

### Available Operations

* [cloudtraceProjectsPatchTraces](#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [cloudtraceProjectsTracesGet](#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [cloudtraceProjectsTracesList](#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.

## cloudtraceProjectsPatchTraces

Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsPatchTracesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Traces;
use \OpenAPI\OpenAPI\Models\Shared\Trace;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpan;
use \OpenAPI\OpenAPI\Models\Shared\TraceSpanKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsPatchTracesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsPatchTracesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsPatchTracesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsPatchTracesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->traces = new Traces();
    $request->traces->traces = [
        new Trace(),
        new Trace(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->projectId = 'minus';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new CloudtraceProjectsPatchTracesSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsPatchTracesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsPatchTraces($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTracesGet

Gets a single trace by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTracesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->projectId = 'deserunt';
    $request->quotaUser = 'perferendis';
    $request->traceId = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new CloudtraceProjectsTracesGetSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTracesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTracesGet($request, $requestSecurity);

    if ($response->trace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTracesList

Returns a list of traces that match the specified filter conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTracesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->endTime = 'maiores';
    $request->fields = 'molestiae';
    $request->filter = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->orderBy = 'totam';
    $request->pageSize = 780529;
    $request->pageToken = 'dolorum';
    $request->prettyPrint = false;
    $request->projectId = 'dicta';
    $request->quotaUser = 'nam';
    $request->startTime = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';
    $request->view = CloudtraceProjectsTracesListViewEnum::ROOTSPAN;

    $requestSecurity = new CloudtraceProjectsTracesListSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTracesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTracesList($request, $requestSecurity);

    if ($response->listTracesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
