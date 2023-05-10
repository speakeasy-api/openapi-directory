<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsClientEventsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientEvent;
use \OpenAPI\OpenAPI\Models\Shared\JobEvent;
use \OpenAPI\OpenAPI\Models\Shared\JobEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsClientEventsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsClientEventsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsClientEventsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsClientEventsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->clientEvent = new ClientEvent();
    $request->clientEvent->createTime = 'provident';
    $request->clientEvent->eventId = 'distinctio';
    $request->clientEvent->eventNotes = 'quibusdam';
    $request->clientEvent->jobEvent = new JobEvent();
    $request->clientEvent->jobEvent->jobs = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->clientEvent->jobEvent->type = JobEventTypeEnum::APPLICATION_QUICK_SUBMISSION;
    $request->clientEvent->requestId = 'error';
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new JobsProjectsTenantsClientEventsCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsClientEventsCreate($request, $requestSecurity);

    if ($response->clientEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->