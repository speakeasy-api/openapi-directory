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