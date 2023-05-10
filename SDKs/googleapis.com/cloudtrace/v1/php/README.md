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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudtraceProjectsPatchTraces](docs/projects/README.md#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [cloudtraceProjectsTracesGet](docs/projects/README.md#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [cloudtraceProjectsTracesList](docs/projects/README.md#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
