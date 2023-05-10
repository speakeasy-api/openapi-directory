# jobs

### Available Operations

* [youtubereportingJobsCreate](#youtubereportingjobscreate) - Creates a job and returns it.
* [youtubereportingJobsDelete](#youtubereportingjobsdelete) - Deletes a job.
* [youtubereportingJobsGet](#youtubereportingjobsget) - Gets a job.
* [youtubereportingJobsList](#youtubereportingjobslist) - Lists jobs.
* [youtubereportingJobsReportsGet](#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [youtubereportingJobsReportsList](#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

## youtubereportingJobsCreate

Creates a job and returns it.

### Example Usage

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
    $request->job->createTime = 'occaecati';
    $request->job->expireTime = 'fugit';
    $request->job->id = '8fc81674-2cb7-4392-8592-9396fea7596e';
    $request->job->name = 'Roger Beier';
    $request->job->reportTypeId = 'mollitia';
    $request->job->systemManaged = false;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->onBehalfOfContentOwner = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

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

## youtubereportingJobsDelete

Deletes a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->jobId = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->onBehalfOfContentOwner = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new YoutubereportingJobsDeleteSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubereportingJobsGet

Gets a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->jobId = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->onBehalfOfContentOwner = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new YoutubereportingJobsGetSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubereportingJobsList

Lists jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'sequi';
    $request->includeSystemManaged = false;
    $request->key = 'tenetur';
    $request->oauthToken = 'ipsam';
    $request->onBehalfOfContentOwner = 'id';
    $request->pageSize = 820994;
    $request->pageToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new YoutubereportingJobsListSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubereportingJobsReportsGet

Gets the metadata of a specific report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->jobId = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->onBehalfOfContentOwner = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->reportId = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new YoutubereportingJobsReportsGetSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsReportsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsReportsGet($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## youtubereportingJobsReportsList

Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubereportingJobsReportsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubereportingJobsReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->createdAfter = 'dicta';
    $request->fields = 'corporis';
    $request->jobId = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->onBehalfOfContentOwner = 'harum';
    $request->pageSize = 317983;
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->startTimeAtOrAfter = 'repudiandae';
    $request->startTimeBefore = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new YoutubereportingJobsReportsListSecurity();
    $requestSecurity->option1 = new YoutubereportingJobsReportsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->youtubereportingJobsReportsList($request, $requestSecurity);

    if ($response->listReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
