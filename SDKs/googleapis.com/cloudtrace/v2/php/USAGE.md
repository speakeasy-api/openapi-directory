<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesBatchWriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchWriteSpansRequest;
use \OpenAPI\OpenAPI\Models\Shared\Span;
use \OpenAPI\OpenAPI\Models\Shared\Attributes;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\TruncatableString;
use \OpenAPI\OpenAPI\Models\Shared\Links;
use \OpenAPI\OpenAPI\Models\Shared\Link;
use \OpenAPI\OpenAPI\Models\Shared\LinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpanSpanKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackTrace;
use \OpenAPI\OpenAPI\Models\Shared\StackFrames;
use \OpenAPI\OpenAPI\Models\Shared\StackFrame;
use \OpenAPI\OpenAPI\Models\Shared\Module;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\TimeEvents;
use \OpenAPI\OpenAPI\Models\Shared\TimeEvent;
use \OpenAPI\OpenAPI\Models\Shared\Annotation;
use \OpenAPI\OpenAPI\Models\Shared\MessageEvent;
use \OpenAPI\OpenAPI\Models\Shared\MessageEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesBatchWriteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesBatchWriteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesBatchWriteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTracesBatchWriteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchWriteSpansRequest = new BatchWriteSpansRequest();
    $request->batchWriteSpansRequest->spans = [
        new Span(),
        new Span(),
        new Span(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->name = 'Ben Mueller';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new CloudtraceProjectsTracesBatchWriteSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTracesBatchWriteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTracesBatchWrite($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->