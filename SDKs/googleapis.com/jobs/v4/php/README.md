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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [jobsProjectsTenantsClientEventsCreate](docs/projects/README.md#jobsprojectstenantsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsTenantsCompaniesCreate](docs/projects/README.md#jobsprojectstenantscompaniescreate) - Creates a new company entity.
* [jobsProjectsTenantsCompaniesList](docs/projects/README.md#jobsprojectstenantscompanieslist) - Lists all companies associated with the project.
* [jobsProjectsTenantsCompleteQuery](docs/projects/README.md#jobsprojectstenantscompletequery) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsTenantsCreate](docs/projects/README.md#jobsprojectstenantscreate) - Creates a new tenant entity.
* [jobsProjectsTenantsJobsBatchCreate](docs/projects/README.md#jobsprojectstenantsjobsbatchcreate) - Begins executing a batch create jobs operation.
* [jobsProjectsTenantsJobsBatchDelete](docs/projects/README.md#jobsprojectstenantsjobsbatchdelete) - Begins executing a batch delete jobs operation.
* [jobsProjectsTenantsJobsBatchUpdate](docs/projects/README.md#jobsprojectstenantsjobsbatchupdate) - Begins executing a batch update jobs operation.
* [jobsProjectsTenantsJobsCreate](docs/projects/README.md#jobsprojectstenantsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsDelete](docs/projects/README.md#jobsprojectstenantsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsGet](docs/projects/README.md#jobsprojectstenantsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsTenantsJobsList](docs/projects/README.md#jobsprojectstenantsjobslist) - Lists jobs by filter.
* [jobsProjectsTenantsJobsPatch](docs/projects/README.md#jobsprojectstenantsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsSearch](docs/projects/README.md#jobsprojectstenantsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsTenantsJobsSearchForAlert](docs/projects/README.md#jobsprojectstenantsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [jobsProjectsTenantsList](docs/projects/README.md#jobsprojectstenantslist) - Lists all tenants associated with the project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
