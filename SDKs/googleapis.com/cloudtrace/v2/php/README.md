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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudtraceProjectsTracesBatchWrite](docs/projects/README.md#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [cloudtraceProjectsTracesSpansCreateSpan](docs/projects/README.md#cloudtraceprojectstracesspanscreatespan) - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
