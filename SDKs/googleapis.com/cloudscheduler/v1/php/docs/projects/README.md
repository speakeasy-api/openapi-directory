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
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->pageSize = 891555;
    $request->pageToken = 'a';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'illum';

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
    $request->job->appEngineHttpTarget->appEngineRouting->host = 'rerum';
    $request->job->appEngineHttpTarget->appEngineRouting->instance = 'dicta';
    $request->job->appEngineHttpTarget->appEngineRouting->service = 'magnam';
    $request->job->appEngineHttpTarget->appEngineRouting->version = 'cumque';
    $request->job->appEngineHttpTarget->body = 'facere';
    $request->job->appEngineHttpTarget->headers = [
        'aliquid' => 'laborum',
        'accusamus' => 'non',
    ];
    $request->job->appEngineHttpTarget->httpMethod = AppEngineHttpTargetHttpMethodEnum::PUT;
    $request->job->appEngineHttpTarget->relativeUri = 'enim';
    $request->job->attemptDeadline = 'accusamus';
    $request->job->description = 'delectus';
    $request->job->httpTarget = new HttpTarget();
    $request->job->httpTarget->body = 'quidem';
    $request->job->httpTarget->headers = [
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->job->httpTarget->httpMethod = HttpTargetHttpMethodEnum::DELETE;
    $request->job->httpTarget->oauthToken = new OAuthToken();
    $request->job->httpTarget->oauthToken->scope = 'nisi';
    $request->job->httpTarget->oauthToken->serviceAccountEmail = 'vel';
    $request->job->httpTarget->oidcToken = new OidcToken();
    $request->job->httpTarget->oidcToken->audience = 'natus';
    $request->job->httpTarget->oidcToken->serviceAccountEmail = 'omnis';
    $request->job->httpTarget->uri = 'http://aggressive-interject.biz';
    $request->job->lastAttemptTime = 'distinctio';
    $request->job->name = 'Leroy Greenfelder';
    $request->job->pubsubTarget = new PubsubTarget();
    $request->job->pubsubTarget->attributes = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->job->pubsubTarget->data = 'excepturi';
    $request->job->pubsubTarget->topicName = 'ullam';
    $request->job->retryConfig = new RetryConfig();
    $request->job->retryConfig->maxBackoffDuration = 'provident';
    $request->job->retryConfig->maxDoublings = 551816;
    $request->job->retryConfig->maxRetryDuration = 'sint';
    $request->job->retryConfig->minBackoffDuration = 'accusantium';
    $request->job->retryConfig->retryCount = 653201;
    $request->job->schedule = 'reiciendis';
    $request->job->scheduleTime = 'mollitia';
    $request->job->state = JobStateEnum::ENABLED;
    $request->job->status = new Status();
    $request->job->status->code = 431418;
    $request->job->status->details = [
        [
            'odit' => 'nemo',
            'quasi' => 'iure',
            'doloribus' => 'debitis',
            'eius' => 'maxime',
        ],
    ];
    $request->job->status->message = 'deleniti';
    $request->job->timeZone = 'facilis';
    $request->job->userUpdateTime = 'in';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'ullam';
    $request->key = 'expedita';
    $request->name = 'Kristie Spencer';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->updateMask = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quo' => 'illum',
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'excepturi';
    $request->key = 'odit';
    $request->name = 'Donna Bernhard';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'nam';

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
        'nemo' => 'voluptatibus',
        'perferendis' => 'fugiat',
        'amet' => 'aut',
        'cumque' => 'corporis',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->name = 'Lance Becker';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'minus';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudschedulerProjectsLocationsJobsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudschedulerProjectsLocationsJobsRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'vero' => 'nostrum',
    ];
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
