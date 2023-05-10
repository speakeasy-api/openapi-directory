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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [jobs](docs/jobs/README.md)

* [youtubereportingJobsCreate](docs/jobs/README.md#youtubereportingjobscreate) - Creates a job and returns it.
* [youtubereportingJobsDelete](docs/jobs/README.md#youtubereportingjobsdelete) - Deletes a job.
* [youtubereportingJobsGet](docs/jobs/README.md#youtubereportingjobsget) - Gets a job.
* [youtubereportingJobsList](docs/jobs/README.md#youtubereportingjobslist) - Lists jobs.
* [youtubereportingJobsReportsGet](docs/jobs/README.md#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [youtubereportingJobsReportsList](docs/jobs/README.md#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### [media](docs/media/README.md)

* [youtubereportingMediaDownload](docs/media/README.md#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

### [reportTypes](docs/reporttypes/README.md)

* [youtubereportingReportTypesList](docs/reporttypes/README.md#youtubereportingreporttypeslist) - Lists report types.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
