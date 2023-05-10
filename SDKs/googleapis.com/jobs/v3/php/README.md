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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [jobsProjectsClientEventsCreate](docs/projects/README.md#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsCompaniesCreate](docs/projects/README.md#jobsprojectscompaniescreate) - Creates a new company entity.
* [jobsProjectsCompaniesList](docs/projects/README.md#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [jobsProjectsComplete](docs/projects/README.md#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsJobsBatchDelete](docs/projects/README.md#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [jobsProjectsJobsCreate](docs/projects/README.md#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsDelete](docs/projects/README.md#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsGet](docs/projects/README.md#jobsprojectsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsJobsList](docs/projects/README.md#jobsprojectsjobslist) - Lists jobs by filter.
* [jobsProjectsJobsPatch](docs/projects/README.md#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsSearch](docs/projects/README.md#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsJobsSearchForAlert](docs/projects/README.md#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
