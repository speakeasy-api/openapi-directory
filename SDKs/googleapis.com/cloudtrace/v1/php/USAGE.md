<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->traces = new Traces();
    $request->traces->traces = [
        new Trace(),
        new Trace(),
        new Trace(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->projectId = 'vel';
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

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
<!-- End SDK Example Usage -->