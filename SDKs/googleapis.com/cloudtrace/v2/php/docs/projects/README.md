# projects

### Available Operations

* [cloudtraceProjectsTracesBatchWrite](#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [cloudtraceProjectsTracesSpansCreateSpan](#cloudtraceprojectstracesspanscreatespan) - Creates a new span.

## cloudtraceProjectsTracesBatchWrite

Batch writes new spans to new or existing traces. You cannot update existing spans.

### Example Usage

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
    ];
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

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

## cloudtraceProjectsTracesSpansCreateSpan

Creates a new span.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesSpansCreateSpanRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
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
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesSpansCreateSpanSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesSpansCreateSpanSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTracesSpansCreateSpanSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTracesSpansCreateSpanRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->span = new Span();
    $request->span->attributes = new Attributes();
    $request->span->attributes->attributeMap = [
        'repellendus' => new AttributeValue(),
        'sapiente' => new AttributeValue(),
    ];
    $request->span->attributes->droppedAttributesCount = 778157;
    $request->span->childSpanCount = 140350;
    $request->span->displayName = new TruncatableString();
    $request->span->displayName->truncatedByteCount = 870013;
    $request->span->displayName->value = 'at';
    $request->span->endTime = 'maiores';
    $request->span->links = new Links();
    $request->span->links->droppedLinksCount = 473608;
    $request->span->links->link = [
        new Link(),
        new Link(),
        new Link(),
        new Link(),
    ];
    $request->span->name = 'Erik Lebsack';
    $request->span->parentSpanId = 'dicta';
    $request->span->sameProcessAsParentSpan = false;
    $request->span->spanId = 'nam';
    $request->span->spanKind = SpanSpanKindEnum::CLIENT;
    $request->span->stackTrace = new StackTrace();
    $request->span->stackTrace->stackFrames = new StackFrames();
    $request->span->stackTrace->stackFrames->droppedFramesCount = 582020;
    $request->span->stackTrace->stackFrames->frame = [
        new StackFrame(),
    ];
    $request->span->stackTrace->stackTraceHashId = 'deleniti';
    $request->span->startTime = 'hic';
    $request->span->status = new Status();
    $request->span->status->code = 758616;
    $request->span->status->details = [
        [
            'commodi' => 'molestiae',
        ],
        [
            'qui' => 'impedit',
            'cum' => 'esse',
        ],
        [
            'excepturi' => 'aspernatur',
        ],
    ];
    $request->span->status->message = 'perferendis';
    $request->span->timeEvents = new TimeEvents();
    $request->span->timeEvents->droppedAnnotationsCount = 324141;
    $request->span->timeEvents->droppedMessageEventsCount = 617636;
    $request->span->timeEvents->timeEvent = [
        new TimeEvent(),
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->name = 'Wilbur Kirlin';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudtraceProjectsTracesSpansCreateSpanSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTracesSpansCreateSpanSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTracesSpansCreateSpan($request, $requestSecurity);

    if ($response->span !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
