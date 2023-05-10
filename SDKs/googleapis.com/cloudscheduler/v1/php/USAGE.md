<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->job = new Job();
    $request->job->appEngineHttpTarget = new AppEngineHttpTarget();
    $request->job->appEngineHttpTarget->appEngineRouting = new AppEngineRouting();
    $request->job->appEngineHttpTarget->appEngineRouting->host = 'provident';
    $request->job->appEngineHttpTarget->appEngineRouting->instance = 'distinctio';
    $request->job->appEngineHttpTarget->appEngineRouting->service = 'quibusdam';
    $request->job->appEngineHttpTarget->appEngineRouting->version = 'unde';
    $request->job->appEngineHttpTarget->body = 'nulla';
    $request->job->appEngineHttpTarget->headers = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->job->appEngineHttpTarget->httpMethod = AppEngineHttpTargetHttpMethodEnum::GET;
    $request->job->appEngineHttpTarget->relativeUri = 'debitis';
    $request->job->attemptDeadline = 'ipsa';
    $request->job->description = 'delectus';
    $request->job->httpTarget = new HttpTarget();
    $request->job->httpTarget->body = 'tempora';
    $request->job->httpTarget->headers = [
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->job->httpTarget->httpMethod = HttpTargetHttpMethodEnum::HEAD;
    $request->job->httpTarget->oauthToken = new OAuthToken();
    $request->job->httpTarget->oauthToken->scope = 'excepturi';
    $request->job->httpTarget->oauthToken->serviceAccountEmail = 'nisi';
    $request->job->httpTarget->oidcToken = new OidcToken();
    $request->job->httpTarget->oidcToken->audience = 'recusandae';
    $request->job->httpTarget->oidcToken->serviceAccountEmail = 'temporibus';
    $request->job->httpTarget->uri = 'http://gloomy-blanket.name';
    $request->job->lastAttemptTime = 'perferendis';
    $request->job->name = 'Estelle Will';
    $request->job->pubsubTarget = new PubsubTarget();
    $request->job->pubsubTarget->attributes = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->job->pubsubTarget->data = 'dolorum';
    $request->job->pubsubTarget->topicName = 'dicta';
    $request->job->retryConfig = new RetryConfig();
    $request->job->retryConfig->maxBackoffDuration = 'nam';
    $request->job->retryConfig->maxDoublings = 639921;
    $request->job->retryConfig->maxRetryDuration = 'occaecati';
    $request->job->retryConfig->minBackoffDuration = 'fugit';
    $request->job->retryConfig->retryCount = 537373;
    $request->job->schedule = 'hic';
    $request->job->scheduleTime = 'optio';
    $request->job->state = JobStateEnum::PAUSED;
    $request->job->status = new Status();
    $request->job->status->code = 105907;
    $request->job->status->details = [
        [
            'modi' => 'qui',
            'impedit' => 'cum',
        ],
        [
            'ipsum' => 'excepturi',
            'aspernatur' => 'perferendis',
        ],
    ];
    $request->job->status->message = 'ad';
    $request->job->timeZone = 'natus';
    $request->job->userUpdateTime = 'sed';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

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
<!-- End SDK Example Usage -->