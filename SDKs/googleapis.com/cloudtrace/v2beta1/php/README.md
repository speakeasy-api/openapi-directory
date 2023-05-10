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
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TraceSinkInput;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->traceSinkInput = new TraceSinkInput();
    $request->traceSinkInput->name = 'Kelvin Sporer';
    $request->traceSinkInput->outputConfig = new OutputConfig();
    $request->traceSinkInput->outputConfig->destination = 'corrupti';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new CloudtraceProjectsTraceSinksCreateSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksCreate($request, $requestSecurity);

    if ($response->traceSink !== null) {
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

* [cloudtraceProjectsTraceSinksCreate](docs/projects/README.md#cloudtraceprojectstracesinkscreate) - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* [cloudtraceProjectsTraceSinksDelete](docs/projects/README.md#cloudtraceprojectstracesinksdelete) - Deletes a sink.
* [cloudtraceProjectsTraceSinksGet](docs/projects/README.md#cloudtraceprojectstracesinksget) - Get a trace sink by name under the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksList](docs/projects/README.md#cloudtraceprojectstracesinkslist) - List all sinks for the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksPatch](docs/projects/README.md#cloudtraceprojectstracesinkspatch) - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
