<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsClientEventsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateClientEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientEvent;
use \OpenAPI\OpenAPI\Models\Shared\JobEvent;
use \OpenAPI\OpenAPI\Models\Shared\JobEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsClientEventsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsClientEventsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsClientEventsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsClientEventsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createClientEventRequest = new CreateClientEventRequest();
    $request->createClientEventRequest->clientEvent = new ClientEvent();
    $request->createClientEventRequest->clientEvent->createTime = 'provident';
    $request->createClientEventRequest->clientEvent->eventId = 'distinctio';
    $request->createClientEventRequest->clientEvent->extraInfo = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->createClientEventRequest->clientEvent->jobEvent = new JobEvent();
    $request->createClientEventRequest->clientEvent->jobEvent->jobs = [
        'magnam',
        'debitis',
    ];
    $request->createClientEventRequest->clientEvent->jobEvent->type = JobEventTypeEnum::JOB_EVENT_TYPE_UNSPECIFIED;
    $request->createClientEventRequest->clientEvent->parentEventId = 'delectus';
    $request->createClientEventRequest->clientEvent->requestId = 'tempora';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new JobsProjectsClientEventsCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsClientEventsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsClientEventsCreate($request, $requestSecurity);

    if ($response->clientEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->