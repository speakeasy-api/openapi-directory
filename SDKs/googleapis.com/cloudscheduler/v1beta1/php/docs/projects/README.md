# projects

### Available Operations

* [cloudschedulerProjectsLocationsJobsCreate](#cloudschedulerprojectslocationsjobscreate) - Creates a job.
* [cloudschedulerProjectsLocationsJobsDelete](#cloudschedulerprojectslocationsjobsdelete) - Deletes a job.
* [cloudschedulerProjectsLocationsJobsGet](#cloudschedulerprojectslocationsjobsget) - Gets a job.
* [cloudschedulerProjectsLocationsJobsList](#cloudschedulerprojectslocationsjobslist) - Lists jobs.
* [cloudschedulerProjectsLocationsJobsPatch](#cloudschedulerprojectslocationsjobspatch) - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* [cloudschedulerProjectsLocationsJobsPause](#cloudschedulerprojectslocationsjobspause) - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* [cloudschedulerProjectsLocationsJobsResume](#cloudschedulerprojectslocationsjobsresume) - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* [cloudschedulerProjectsLocationsJobsRun](#cloudschedulerprojectslocationsjobsrun) - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* [cloudschedulerProjectsLocationsList](#cloudschedulerprojectslocationslist) - Lists information about the supported locations for this service.

## cloudschedulerProjectsLocationsJobsCreate

Creates a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\HttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\PubsubTarget;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->job = new Job();
    $request->job->appEngineHttpTarget = new AppEngineHttpTarget();
    $request->job->appEngineHttpTarget->appEngineRouting = new AppEngineRouting();
    $request->job->appEngineHttpTarget->appEngineRouting->host = 'saepe';
    $request->job->appEngineHttpTarget->appEngineRouting->instance = 'quidem';
    $request->job->appEngineHttpTarget->appEngineRouting->service = 'architecto';
    $request->job->appEngineHttpTarget->appEngineRouting->version = 'ipsa';
    $request->job->appEngineHttpTarget->body = 'reiciendis';
    $request->job->appEngineHttpTarget->headers = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->job->appEngineHttpTarget->httpMethod = AppEngineHttpTargetHttpMethodEnum::PATCH;
    $request->job->appEngineHttpTarget->relativeUri = 'enim';
    $request->job->attemptDeadline = 'omnis';
    $request->job->description = 'nemo';
    $request->job->httpTarget = new HttpTarget();
    $request->job->httpTarget->body = 'minima';
    $request->job->httpTarget->headers = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->job->httpTarget->httpMethod = HttpTargetHttpMethodEnum::DELETE;
    $request->job->httpTarget->oauthToken = new OAuthToken();
    $request->job->httpTarget->oauthToken->scope = 'dolorem';
    $request->job->httpTarget->oauthToken->serviceAccountEmail = 'culpa';
    $request->job->httpTarget->oidcToken = new OidcToken();
    $request->job->httpTarget->oidcToken->audience = 'consequuntur';
    $request->job->httpTarget->oidcToken->serviceAccountEmail = 'repellat';
    $request->job->httpTarget->uri = 'https://oily-desk.info';
    $request->job->lastAttemptTime = 'quam';
    $request->job->legacyAppEngineCron = false;
    $request->job->name = 'Shannon Mueller';
    $request->job->pubsubTarget = new PubsubTarget();
    $request->job->pubsubTarget->attributes = [
        'laborum' => 'animi',
    ];
    $request->job->pubsubTarget->data = 'enim';
    $request->job->pubsubTarget->topicName = 'odit';
    $request->job->retryConfig = new RetryConfig();
    $request->job->retryConfig->maxBackoffDuration = 'quo';
    $request->job->retryConfig->maxDoublings = 196582;
    $request->job->retryConfig->maxRetryDuration = 'tenetur';
    $request->job->retryConfig->minBackoffDuration = 'ipsam';
    $request->job->retryConfig->retryCount = 662527;
    $request->job->schedule = 'possimus';
    $request->job->scheduleTime = 'aut';
    $request->job->state = JobStateEnum::STATE_UNSPECIFIED;
    $request->job->status = new Status();
    $request->job->status->code = 622846;
    $request->job->status->details = [
        [
            'quasi' => 'reiciendis',
            'voluptatibus' => 'vero',
            'nihil' => 'praesentium',
        ],
        [
            'ipsa' => 'omnis',
            'voluptate' => 'cum',
            'perferendis' => 'doloremque',
            'reprehenderit' => 'ut',
        ],
        [
            'dicta' => 'corporis',
            'dolore' => 'iusto',
            'dicta' => 'harum',
            'enim' => 'accusamus',
        ],
        [
            'repudiandae' => 'quae',
            'ipsum' => 'quidem',
        ],
    ];
    $request->job->status->message = 'molestias';
    $request->job->timeZone = 'excepturi';
    $request->job->userUpdateTime = 'pariatur';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsDelete

Deletes a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->legacyAppEngineCron = false;
    $request->name = 'Marty Green';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsGet

Gets a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->name = 'Eddie Prosacco';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsList

Lists jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->filter = 'officia';
    $request->key = 'dolor';
    $request->legacyAppEngineCron = false;
    $request->oauthToken = 'debitis';
    $request->pageSize = 952749;
    $request->pageToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsPatch

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineRouting;
use \OpenAPI\OpenAPI\Models\Shared\AppEngineHttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpTarget;
use \OpenAPI\OpenAPI\Models\Shared\HttpTargetHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\OidcToken;
use \OpenAPI\OpenAPI\Models\Shared\PubsubTarget;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\JobStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->appEngineHttpTarget = new AppEngineHttpTarget();
    $request->job->appEngineHttpTarget->appEngineRouting = new AppEngineRouting();
    $request->job->appEngineHttpTarget->appEngineRouting->host = 'dicta';
    $request->job->appEngineHttpTarget->appEngineRouting->instance = 'magnam';
    $request->job->appEngineHttpTarget->appEngineRouting->service = 'cumque';
    $request->job->appEngineHttpTarget->appEngineRouting->version = 'facere';
    $request->job->appEngineHttpTarget->body = 'ea';
    $request->job->appEngineHttpTarget->headers = [
        'laborum' => 'accusamus',
        'non' => 'occaecati',
    ];
    $request->job->appEngineHttpTarget->httpMethod = AppEngineHttpTargetHttpMethodEnum::GET;
    $request->job->appEngineHttpTarget->relativeUri = 'accusamus';
    $request->job->attemptDeadline = 'delectus';
    $request->job->description = 'quidem';
    $request->job->httpTarget = new HttpTarget();
    $request->job->httpTarget->body = 'provident';
    $request->job->httpTarget->headers = [
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
        'amet' => 'deserunt',
    ];
    $request->job->httpTarget->httpMethod = HttpTargetHttpMethodEnum::HEAD;
    $request->job->httpTarget->oauthToken = new OAuthToken();
    $request->job->httpTarget->oauthToken->scope = 'vel';
    $request->job->httpTarget->oauthToken->serviceAccountEmail = 'natus';
    $request->job->httpTarget->oidcToken = new OidcToken();
    $request->job->httpTarget->oidcToken->audience = 'omnis';
    $request->job->httpTarget->oidcToken->serviceAccountEmail = 'molestiae';
    $request->job->httpTarget->uri = 'http://knotty-eligibility.net';
    $request->job->lastAttemptTime = 'id';
    $request->job->legacyAppEngineCron = false;
    $request->job->name = 'Jamie Hoppe';
    $request->job->pubsubTarget = new PubsubTarget();
    $request->job->pubsubTarget->attributes = [
        'vero' => 'aspernatur',
        'architecto' => 'magnam',
    ];
    $request->job->pubsubTarget->data = 'et';
    $request->job->pubsubTarget->topicName = 'excepturi';
    $request->job->retryConfig = new RetryConfig();
    $request->job->retryConfig->maxBackoffDuration = 'ullam';
    $request->job->retryConfig->maxDoublings = 590873;
    $request->job->retryConfig->maxRetryDuration = 'quos';
    $request->job->retryConfig->minBackoffDuration = 'sint';
    $request->job->retryConfig->retryCount = 33625;
    $request->job->schedule = 'mollitia';
    $request->job->scheduleTime = 'reiciendis';
    $request->job->state = JobStateEnum::DISABLED;
    $request->job->status = new Status();
    $request->job->status->code = 320997;
    $request->job->status->details = [
        [
            'necessitatibus' => 'odit',
        ],
        [
            'quasi' => 'iure',
            'doloribus' => 'debitis',
        ],
    ];
    $request->job->status->message = 'eius';
    $request->job->timeZone = 'maxime';
    $request->job->userUpdateTime = 'deleniti';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->name = 'Lola Koss';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->updateMask = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsPatch($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsPause

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsPauseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsPauseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsPauseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->name = 'Ebony Predovic';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsPauseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsPause($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsResume

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsResumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsResumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsResumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
        'hic' => 'libero',
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->name = 'Beatrice Dooley Sr.';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsResumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsResume($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsJobsRun

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runJobRequest = new RunJobRequest();
    $request->runJobRequest->legacyAppEngineCron = false;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'facilis';
    $request->key = 'perspiciatis';
    $request->name = 'Robyn Cruickshank';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new CloudschedulerProjectsLocationsJobsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsJobsRun($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudschedulerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->filter = 'deleniti';
    $request->key = 'pariatur';
    $request->name = 'Loren Renner';
    $request->oauthToken = 'quos';
    $request->pageSize = 398221;
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new CloudschedulerProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudschedulerProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
