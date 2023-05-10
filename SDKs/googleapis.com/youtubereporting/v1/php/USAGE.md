<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->createTime = 'provident';
    $request->job->expireTime = 'distinctio';
    $request->job->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';
    $request->job->name = 'Timmy Satterfield';
    $request->job->reportTypeId = 'at';
    $request->job->systemManaged = false;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->onBehalfOfContentOwner = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new YoutubereportingJobsCreateSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->