# projects

### Available Operations

* [jobsProjectsClientEventsCreate](#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsCompaniesCreate](#jobsprojectscompaniescreate) - Creates a new company entity.
* [jobsProjectsCompaniesList](#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [jobsProjectsComplete](#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsJobsBatchDelete](#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [jobsProjectsJobsCreate](#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsDelete](#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsList](#jobsprojectsjobslist) - Lists jobs by filter.
* [jobsProjectsJobsPatch](#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsSearch](#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsJobsSearchForAlert](#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [jobsProjectsOperationsGet](#jobsprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## jobsProjectsClientEventsCreate

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createClientEventRequest = new CreateClientEventRequest();
    $request->createClientEventRequest->clientEvent = new ClientEvent();
    $request->createClientEventRequest->clientEvent->createTime = 'quis';
    $request->createClientEventRequest->clientEvent->eventId = 'veritatis';
    $request->createClientEventRequest->clientEvent->extraInfo = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->createClientEventRequest->clientEvent->jobEvent = new JobEvent();
    $request->createClientEventRequest->clientEvent->jobEvent->jobs = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->createClientEventRequest->clientEvent->jobEvent->type = JobEventTypeEnum::HIRED;
    $request->createClientEventRequest->clientEvent->parentEventId = 'esse';
    $request->createClientEventRequest->clientEvent->requestId = 'totam';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

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

## jobsProjectsCompaniesCreate

Creates a new company entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Company;
use \OpenAPI\OpenAPI\Models\Shared\CompanyDerivedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\CompanySizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsCompaniesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createCompanyRequest = new CreateCompanyRequest();
    $request->createCompanyRequest->company = new Company();
    $request->createCompanyRequest->company->careerSiteUri = 'beatae';
    $request->createCompanyRequest->company->derivedInfo = new CompanyDerivedInfo();
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation = new Location();
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->latLng = new LatLng();
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->latLng->latitude = 4146.62;
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->latLng->longitude = 4736;
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->locationType = LocationLocationTypeEnum::ADMINISTRATIVE_AREA;
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress = new PostalAddress();
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->addressLines = [
        'impedit',
    ];
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->administrativeArea = 'cum';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->languageCode = 'esse';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->locality = 'ipsum';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->organization = 'excepturi';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->postalCode = '03616';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->recipients = [
        'natus',
    ];
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->regionCode = 'laboriosam';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->revision = 943749;
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->sortingCode = 'saepe';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->postalAddress->sublocality = 'fuga';
    $request->createCompanyRequest->company->derivedInfo->headquartersLocation->radiusInMiles = 4499.5;
    $request->createCompanyRequest->company->displayName = 'corporis';
    $request->createCompanyRequest->company->eeoText = 'iste';
    $request->createCompanyRequest->company->externalId = 'iure';
    $request->createCompanyRequest->company->headquartersAddress = 'saepe';
    $request->createCompanyRequest->company->hiringAgency = false;
    $request->createCompanyRequest->company->imageUri = 'quidem';
    $request->createCompanyRequest->company->keywordSearchableJobCustomAttributes = [
        'ipsa',
    ];
    $request->createCompanyRequest->company->name = 'Carlton O'Hara';
    $request->createCompanyRequest->company->size = CompanySizeEnum::MINI;
    $request->createCompanyRequest->company->suspended = false;
    $request->createCompanyRequest->company->websiteUri = 'corporis';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new JobsProjectsCompaniesCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsCompaniesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsCompaniesCreate($request, $requestSecurity);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsCompaniesList

Lists all companies associated with the service account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompaniesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsCompaniesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->pageSize = 995300;
    $request->pageToken = 'mollitia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->requireOpenJobs = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new JobsProjectsCompaniesListSecurity();
    $requestSecurity->option1 = new JobsProjectsCompaniesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsCompaniesList($request, $requestSecurity);

    if ($response->listCompaniesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsComplete

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsCompleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsCompleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->companyName = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->languageCode = 'animi';
    $request->languageCodes = [
        'odit',
        'quo',
    ];
    $request->name = 'Mandy Hills';
    $request->oauthToken = 'aut';
    $request->pageSize = 97101;
    $request->prettyPrint = false;
    $request->query = 'error';
    $request->quotaUser = 'temporibus';
    $request->scope = JobsProjectsCompleteScopeEnum::PUBLIC;
    $request->type = JobsProjectsCompleteTypeEnum::COMPLETION_TYPE_UNSPECIFIED;
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new JobsProjectsCompleteSecurity();
    $requestSecurity->option1 = new JobsProjectsCompleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsComplete($request, $requestSecurity);

    if ($response->completeQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsBatchDelete

Deletes a list of Jobs by filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchDeleteJobsRequest = new BatchDeleteJobsRequest();
    $request->batchDeleteJobsRequest->filter = 'nihil';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new JobsProjectsJobsBatchDeleteSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsBatchDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsCreate

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationInfo;
use \OpenAPI\OpenAPI\Models\Shared\CompensationInfo;
use \OpenAPI\OpenAPI\Models\Shared\CompensationRange;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntry;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntryUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\JobDegreeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobDerivedInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobDerivedInfoJobCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\JobEmploymentTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobJobBenefitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobJobLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobPostingRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOptionsHtmlSanitizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createJobRequest = new CreateJobRequest();
    $request->createJobRequest->job = new Job();
    $request->createJobRequest->job->addresses = [
        'corporis',
    ];
    $request->createJobRequest->job->applicationInfo = new ApplicationInfo();
    $request->createJobRequest->job->applicationInfo->emails = [
        'iusto',
        'dicta',
    ];
    $request->createJobRequest->job->applicationInfo->instruction = 'harum';
    $request->createJobRequest->job->applicationInfo->uris = [
        'accusamus',
        'commodi',
    ];
    $request->createJobRequest->job->companyDisplayName = 'repudiandae';
    $request->createJobRequest->job->companyName = 'quae';
    $request->createJobRequest->job->compensationInfo = new CompensationInfo();
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange = new CompensationRange();
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation = new Money();
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->currencyCode = 'ipsum';
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->nanos = 692472;
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->units = 'molestias';
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation = new Money();
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->currencyCode = 'excepturi';
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->nanos = 865103;
    $request->createJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->units = 'modi';
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange = new CompensationRange();
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation = new Money();
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->currencyCode = 'praesentium';
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->nanos = 523248;
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->units = 'voluptates';
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation = new Money();
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->currencyCode = 'quasi';
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->nanos = 921158;
    $request->createJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->units = 'sint';
    $request->createJobRequest->job->compensationInfo->entries = [
        new CompensationEntry(),
    ];
    $request->createJobRequest->job->customAttributes = [
        'incidunt' => new CustomAttribute(),
        'enim' => new CustomAttribute(),
        'consequatur' => new CustomAttribute(),
        'est' => new CustomAttribute(),
    ];
    $request->createJobRequest->job->degreeTypes = [
        JobDegreeTypesEnum::PRIMARY_EDUCATION,
        JobDegreeTypesEnum::ASSOCIATES_OR_EQUIVALENT,
        JobDegreeTypesEnum::BACHELORS_OR_EQUIVALENT,
        JobDegreeTypesEnum::MASTERS_OR_EQUIVALENT,
    ];
    $request->createJobRequest->job->department = 'labore';
    $request->createJobRequest->job->derivedInfo = new JobDerivedInfo();
    $request->createJobRequest->job->derivedInfo->jobCategories = [
        JobDerivedInfoJobCategoriesEnum::ART_FASHION_AND_DESIGN,
        JobDerivedInfoJobCategoriesEnum::ENTERTAINMENT_AND_TRAVEL,
    ];
    $request->createJobRequest->job->derivedInfo->locations = [
        new Location(),
        new Location(),
        new Location(),
    ];
    $request->createJobRequest->job->description = 'quos';
    $request->createJobRequest->job->employmentTypes = [
        JobEmploymentTypesEnum::FULL_TIME,
    ];
    $request->createJobRequest->job->incentives = 'assumenda';
    $request->createJobRequest->job->jobBenefits = [
        JobJobBenefitsEnum::JOB_BENEFIT_UNSPECIFIED,
        JobJobBenefitsEnum::CHILD_CARE,
    ];
    $request->createJobRequest->job->jobEndTime = 'dolorum';
    $request->createJobRequest->job->jobLevel = JobJobLevelEnum::MANAGER;
    $request->createJobRequest->job->jobStartTime = 'tempora';
    $request->createJobRequest->job->languageCode = 'facilis';
    $request->createJobRequest->job->name = 'Francisco Windler';
    $request->createJobRequest->job->postingCreateTime = 'eligendi';
    $request->createJobRequest->job->postingExpireTime = 'sint';
    $request->createJobRequest->job->postingPublishTime = 'aliquid';
    $request->createJobRequest->job->postingRegion = JobPostingRegionEnum::NATION;
    $request->createJobRequest->job->postingUpdateTime = 'necessitatibus';
    $request->createJobRequest->job->processingOptions = new ProcessingOptions();
    $request->createJobRequest->job->processingOptions->disableStreetAddressResolution = false;
    $request->createJobRequest->job->processingOptions->htmlSanitization = ProcessingOptionsHtmlSanitizationEnum::HTML_SANITIZATION_DISABLED;
    $request->createJobRequest->job->promotionValue = 638921;
    $request->createJobRequest->job->qualifications = 'dolor';
    $request->createJobRequest->job->requisitionId = 'debitis';
    $request->createJobRequest->job->responsibilities = 'a';
    $request->createJobRequest->job->title = 'Miss';
    $request->createJobRequest->job->visibility = JobVisibilityEnum::ACCOUNT_ONLY;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new JobsProjectsJobsCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsDelete

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Abraham McKenzie';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new JobsProjectsJobsDeleteSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsList

Lists jobs by filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsListJobViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'omnis';
    $request->filter = 'molestiae';
    $request->jobView = JobsProjectsJobsListJobViewEnum::JOB_VIEW_UNSPECIFIED;
    $request->key = 'nihil';
    $request->oauthToken = 'magnam';
    $request->pageSize = 716075;
    $request->pageToken = 'id';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new JobsProjectsJobsListSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsPatch

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\Job;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationInfo;
use \OpenAPI\OpenAPI\Models\Shared\CompensationInfo;
use \OpenAPI\OpenAPI\Models\Shared\CompensationRange;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntry;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompensationEntryUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\JobDegreeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobDerivedInfo;
use \OpenAPI\OpenAPI\Models\Shared\JobDerivedInfoJobCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\JobEmploymentTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobJobBenefitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobJobLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobPostingRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOptions;
use \OpenAPI\OpenAPI\Models\Shared\ProcessingOptionsHtmlSanitizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateJobRequest = new UpdateJobRequest();
    $request->updateJobRequest->job = new Job();
    $request->updateJobRequest->job->addresses = [
        'vero',
        'aspernatur',
    ];
    $request->updateJobRequest->job->applicationInfo = new ApplicationInfo();
    $request->updateJobRequest->job->applicationInfo->emails = [
        'magnam',
    ];
    $request->updateJobRequest->job->applicationInfo->instruction = 'et';
    $request->updateJobRequest->job->applicationInfo->uris = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->updateJobRequest->job->companyDisplayName = 'sint';
    $request->updateJobRequest->job->companyName = 'accusantium';
    $request->updateJobRequest->job->compensationInfo = new CompensationInfo();
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange = new CompensationRange();
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation = new Money();
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->currencyCode = 'mollitia';
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->nanos = 968962;
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->maxCompensation->units = 'mollitia';
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation = new Money();
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->currencyCode = 'ad';
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->nanos = 431418;
    $request->updateJobRequest->job->compensationInfo->annualizedBaseCompensationRange->minCompensation->units = 'dolor';
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange = new CompensationRange();
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation = new Money();
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->currencyCode = 'necessitatibus';
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->nanos = 141264;
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->maxCompensation->units = 'nemo';
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation = new Money();
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->currencyCode = 'quasi';
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->nanos = 435865;
    $request->updateJobRequest->job->compensationInfo->annualizedTotalCompensationRange->minCompensation->units = 'doloribus';
    $request->updateJobRequest->job->compensationInfo->entries = [
        new CompensationEntry(),
        new CompensationEntry(),
        new CompensationEntry(),
        new CompensationEntry(),
    ];
    $request->updateJobRequest->job->customAttributes = [
        'maxime' => new CustomAttribute(),
        'deleniti' => new CustomAttribute(),
    ];
    $request->updateJobRequest->job->degreeTypes = [
        JobDegreeTypesEnum::ADULT_REMEDIAL_EDUCATION,
        JobDegreeTypesEnum::DEGREE_TYPE_UNSPECIFIED,
        JobDegreeTypesEnum::DEGREE_TYPE_UNSPECIFIED,
    ];
    $request->updateJobRequest->job->department = 'repudiandae';
    $request->updateJobRequest->job->derivedInfo = new JobDerivedInfo();
    $request->updateJobRequest->job->derivedInfo->jobCategories = [
        JobDerivedInfoJobCategoriesEnum::PERSONAL_CARE_AND_SERVICES,
        JobDerivedInfoJobCategoriesEnum::HEALTHCARE,
    ];
    $request->updateJobRequest->job->derivedInfo->locations = [
        new Location(),
        new Location(),
        new Location(),
        new Location(),
    ];
    $request->updateJobRequest->job->description = 'quibusdam';
    $request->updateJobRequest->job->employmentTypes = [
        JobEmploymentTypesEnum::FLY_IN_FLY_OUT,
    ];
    $request->updateJobRequest->job->incentives = 'pariatur';
    $request->updateJobRequest->job->jobBenefits = [
        JobJobBenefitsEnum::CHILD_CARE,
    ];
    $request->updateJobRequest->job->jobEndTime = 'praesentium';
    $request->updateJobRequest->job->jobLevel = JobJobLevelEnum::MANAGER;
    $request->updateJobRequest->job->jobStartTime = 'magni';
    $request->updateJobRequest->job->languageCode = 'sunt';
    $request->updateJobRequest->job->name = 'Gilberto Streich';
    $request->updateJobRequest->job->postingCreateTime = 'excepturi';
    $request->updateJobRequest->job->postingExpireTime = 'odit';
    $request->updateJobRequest->job->postingPublishTime = 'ea';
    $request->updateJobRequest->job->postingRegion = JobPostingRegionEnum::POSTING_REGION_UNSPECIFIED;
    $request->updateJobRequest->job->postingUpdateTime = 'ab';
    $request->updateJobRequest->job->processingOptions = new ProcessingOptions();
    $request->updateJobRequest->job->processingOptions->disableStreetAddressResolution = false;
    $request->updateJobRequest->job->processingOptions->htmlSanitization = ProcessingOptionsHtmlSanitizationEnum::SIMPLE_FORMATTING_ONLY;
    $request->updateJobRequest->job->promotionValue = 697429;
    $request->updateJobRequest->job->qualifications = 'ipsam';
    $request->updateJobRequest->job->requisitionId = 'voluptate';
    $request->updateJobRequest->job->responsibilities = 'autem';
    $request->updateJobRequest->job->title = 'Miss';
    $request->updateJobRequest->job->visibility = JobVisibilityEnum::VISIBILITY_UNSPECIFIED;
    $request->updateJobRequest->updateMask = 'pariatur';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->name = 'Erma Hessel';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new JobsProjectsJobsPatchSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsPatch($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsSearch

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfo;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfoImportanceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestDiversificationLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramFacets;
use \OpenAPI\OpenAPI\Models\Shared\CompensationHistogramRequest;
use \OpenAPI\OpenAPI\Models\Shared\NumericBucketingOption;
use \OpenAPI\OpenAPI\Models\Shared\CompensationHistogramRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttributeHistogramRequest;
use \OpenAPI\OpenAPI\Models\Shared\HistogramFacetsSimpleHistogramFacetsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramQuery;
use \OpenAPI\OpenAPI\Models\Shared\JobQuery;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilter;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilterCommuteMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilterRoadTrafficEnum;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompensationRange;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilterUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobQueryEmploymentTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobQueryJobCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilterTelecommutePreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimestampRange;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestJobViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfoDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchJobsRequest = new SearchJobsRequest();
    $request->searchJobsRequest->customRankingInfo = new CustomRankingInfo();
    $request->searchJobsRequest->customRankingInfo->importanceLevel = CustomRankingInfoImportanceLevelEnum::IMPORTANCE_LEVEL_UNSPECIFIED;
    $request->searchJobsRequest->customRankingInfo->rankingExpression = 'quis';
    $request->searchJobsRequest->disableKeywordMatch = false;
    $request->searchJobsRequest->diversificationLevel = SearchJobsRequestDiversificationLevelEnum::DIVERSIFICATION_LEVEL_UNSPECIFIED;
    $request->searchJobsRequest->enableBroadening = false;
    $request->searchJobsRequest->histogramFacets = new HistogramFacets();
    $request->searchJobsRequest->histogramFacets->compensationHistogramFacets = [
        new CompensationHistogramRequest(),
    ];
    $request->searchJobsRequest->histogramFacets->customAttributeHistogramFacets = [
        new CustomAttributeHistogramRequest(),
    ];
    $request->searchJobsRequest->histogramFacets->simpleHistogramFacets = [
        HistogramFacetsSimpleHistogramFacetsEnum::CITY_COORDINATE,
    ];
    $request->searchJobsRequest->histogramQueries = [
        new HistogramQuery(),
        new HistogramQuery(),
    ];
    $request->searchJobsRequest->jobQuery = new JobQuery();
    $request->searchJobsRequest->jobQuery->commuteFilter = new CommuteFilter();
    $request->searchJobsRequest->jobQuery->commuteFilter->allowImpreciseAddresses = false;
    $request->searchJobsRequest->jobQuery->commuteFilter->commuteMethod = CommuteFilterCommuteMethodEnum::DRIVING;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime = new TimeOfDay();
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->hours = 874573;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->minutes = 345352;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->nanos = 944120;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->seconds = 928082;
    $request->searchJobsRequest->jobQuery->commuteFilter->roadTraffic = CommuteFilterRoadTrafficEnum::TRAFFIC_FREE;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates = new LatLng();
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->latitude = 7044.15;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->longitude = 5966.56;
    $request->searchJobsRequest->jobQuery->commuteFilter->travelDuration = 'voluptatem';
    $request->searchJobsRequest->jobQuery->companyDisplayNames = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->searchJobsRequest->jobQuery->companyNames = [
        'rerum',
        'adipisci',
        'asperiores',
    ];
    $request->searchJobsRequest->jobQuery->compensationFilter = new CompensationFilter();
    $request->searchJobsRequest->jobQuery->compensationFilter->includeJobsWithUnspecifiedCompensationRange = false;
    $request->searchJobsRequest->jobQuery->compensationFilter->range = new CompensationRange();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->currencyCode = 'earum';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->nanos = 267262;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->units = 'iste';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->currencyCode = 'dolorum';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->nanos = 535633;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->units = 'pariatur';
    $request->searchJobsRequest->jobQuery->compensationFilter->type = CompensationFilterTypeEnum::UNIT_AND_AMOUNT;
    $request->searchJobsRequest->jobQuery->compensationFilter->units = [
        CompensationFilterUnitsEnum::YEARLY,
        CompensationFilterUnitsEnum::OTHER_COMPENSATION_UNIT,
        CompensationFilterUnitsEnum::DAILY,
        CompensationFilterUnitsEnum::MONTHLY,
    ];
    $request->searchJobsRequest->jobQuery->customAttributeFilter = 'aliquid';
    $request->searchJobsRequest->jobQuery->disableSpellCheck = false;
    $request->searchJobsRequest->jobQuery->employmentTypes = [
        JobQueryEmploymentTypesEnum::PART_TIME,
    ];
    $request->searchJobsRequest->jobQuery->excludedJobs = [
        'qui',
    ];
    $request->searchJobsRequest->jobQuery->jobCategories = [
        JobQueryJobCategoriesEnum::SPORTS_FITNESS_AND_RECREATION,
    ];
    $request->searchJobsRequest->jobQuery->languageCodes = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->searchJobsRequest->jobQuery->locationFilters = [
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
    ];
    $request->searchJobsRequest->jobQuery->publishTimeRange = new TimestampRange();
    $request->searchJobsRequest->jobQuery->publishTimeRange->endTime = 'amet';
    $request->searchJobsRequest->jobQuery->publishTimeRange->startTime = 'dolorum';
    $request->searchJobsRequest->jobQuery->query = 'numquam';
    $request->searchJobsRequest->jobQuery->queryLanguageCode = 'veritatis';
    $request->searchJobsRequest->jobView = SearchJobsRequestJobViewEnum::JOB_VIEW_UNSPECIFIED;
    $request->searchJobsRequest->offset = 56418;
    $request->searchJobsRequest->orderBy = 'iure';
    $request->searchJobsRequest->pageSize = 487838;
    $request->searchJobsRequest->pageToken = 'quaerat';
    $request->searchJobsRequest->requestMetadata = new RequestMetadata();
    $request->searchJobsRequest->requestMetadata->deviceInfo = new DeviceInfo();
    $request->searchJobsRequest->requestMetadata->deviceInfo->deviceType = DeviceInfoDeviceTypeEnum::OTHER;
    $request->searchJobsRequest->requestMetadata->deviceInfo->id = 'bf69280d-1ba7-47a8-9ebf-737ae4203ce5';
    $request->searchJobsRequest->requestMetadata->domain = 'saepe';
    $request->searchJobsRequest->requestMetadata->sessionId = 'suscipit';
    $request->searchJobsRequest->requestMetadata->userId = 'deserunt';
    $request->searchJobsRequest->requirePreciseResultSize = false;
    $request->searchJobsRequest->searchMode = SearchJobsRequestSearchModeEnum::JOB_SEARCH;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new JobsProjectsJobsSearchSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsSearch($request, $requestSecurity);

    if ($response->searchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchForAlertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfo;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfoImportanceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestDiversificationLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramFacets;
use \OpenAPI\OpenAPI\Models\Shared\CompensationHistogramRequest;
use \OpenAPI\OpenAPI\Models\Shared\NumericBucketingOption;
use \OpenAPI\OpenAPI\Models\Shared\CompensationHistogramRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttributeHistogramRequest;
use \OpenAPI\OpenAPI\Models\Shared\HistogramFacetsSimpleHistogramFacetsEnum;
use \OpenAPI\OpenAPI\Models\Shared\HistogramQuery;
use \OpenAPI\OpenAPI\Models\Shared\JobQuery;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilter;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilterCommuteMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\CommuteFilterRoadTrafficEnum;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompensationRange;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompensationFilterUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobQueryEmploymentTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobQueryJobCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilter;
use \OpenAPI\OpenAPI\Models\Shared\LocationFilterTelecommutePreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimestampRange;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestJobViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfoDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchForAlertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchForAlertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsJobsSearchForAlertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsJobsSearchForAlertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchJobsRequest = new SearchJobsRequest();
    $request->searchJobsRequest->customRankingInfo = new CustomRankingInfo();
    $request->searchJobsRequest->customRankingInfo->importanceLevel = CustomRankingInfoImportanceLevelEnum::NONE;
    $request->searchJobsRequest->customRankingInfo->rankingExpression = 'dolorum';
    $request->searchJobsRequest->disableKeywordMatch = false;
    $request->searchJobsRequest->diversificationLevel = SearchJobsRequestDiversificationLevelEnum::SIMPLE;
    $request->searchJobsRequest->enableBroadening = false;
    $request->searchJobsRequest->histogramFacets = new HistogramFacets();
    $request->searchJobsRequest->histogramFacets->compensationHistogramFacets = [
        new CompensationHistogramRequest(),
        new CompensationHistogramRequest(),
    ];
    $request->searchJobsRequest->histogramFacets->customAttributeHistogramFacets = [
        new CustomAttributeHistogramRequest(),
        new CustomAttributeHistogramRequest(),
        new CustomAttributeHistogramRequest(),
    ];
    $request->searchJobsRequest->histogramFacets->simpleHistogramFacets = [
        HistogramFacetsSimpleHistogramFacetsEnum::COMPANY_SIZE,
        HistogramFacetsSimpleHistogramFacetsEnum::CITY_COORDINATE,
    ];
    $request->searchJobsRequest->histogramQueries = [
        new HistogramQuery(),
        new HistogramQuery(),
        new HistogramQuery(),
        new HistogramQuery(),
    ];
    $request->searchJobsRequest->jobQuery = new JobQuery();
    $request->searchJobsRequest->jobQuery->commuteFilter = new CommuteFilter();
    $request->searchJobsRequest->jobQuery->commuteFilter->allowImpreciseAddresses = false;
    $request->searchJobsRequest->jobQuery->commuteFilter->commuteMethod = CommuteFilterCommuteMethodEnum::DRIVING;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime = new TimeOfDay();
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->hours = 730856;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->minutes = 880298;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->nanos = 253941;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->seconds = 313692;
    $request->searchJobsRequest->jobQuery->commuteFilter->roadTraffic = CommuteFilterRoadTrafficEnum::ROAD_TRAFFIC_UNSPECIFIED;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates = new LatLng();
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->latitude = 9574.51;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->longitude = 5182.01;
    $request->searchJobsRequest->jobQuery->commuteFilter->travelDuration = 'nihil';
    $request->searchJobsRequest->jobQuery->companyDisplayNames = [
        'expedita',
    ];
    $request->searchJobsRequest->jobQuery->companyNames = [
        'sed',
    ];
    $request->searchJobsRequest->jobQuery->compensationFilter = new CompensationFilter();
    $request->searchJobsRequest->jobQuery->compensationFilter->includeJobsWithUnspecifiedCompensationRange = false;
    $request->searchJobsRequest->jobQuery->compensationFilter->range = new CompensationRange();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->currencyCode = 'vel';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->nanos = 730442;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->units = 'voluptas';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->currencyCode = 'deserunt';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->nanos = 463575;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->units = 'ipsum';
    $request->searchJobsRequest->jobQuery->compensationFilter->type = CompensationFilterTypeEnum::UNIT_ONLY;
    $request->searchJobsRequest->jobQuery->compensationFilter->units = [
        CompensationFilterUnitsEnum::MONTHLY,
    ];
    $request->searchJobsRequest->jobQuery->customAttributeFilter = 'maxime';
    $request->searchJobsRequest->jobQuery->disableSpellCheck = false;
    $request->searchJobsRequest->jobQuery->employmentTypes = [
        JobQueryEmploymentTypesEnum::PER_DIEM,
        JobQueryEmploymentTypesEnum::FULL_TIME,
        JobQueryEmploymentTypesEnum::VOLUNTEER,
        JobQueryEmploymentTypesEnum::TEMPORARY,
    ];
    $request->searchJobsRequest->jobQuery->excludedJobs = [
        'aspernatur',
        'dolores',
    ];
    $request->searchJobsRequest->jobQuery->jobCategories = [
        JobQueryJobCategoriesEnum::OIL_GAS_AND_MINING,
        JobQueryJobCategoriesEnum::ENTERTAINMENT_AND_TRAVEL,
        JobQueryJobCategoriesEnum::HEALTHCARE,
    ];
    $request->searchJobsRequest->jobQuery->languageCodes = [
        'temporibus',
        'qui',
        'neque',
    ];
    $request->searchJobsRequest->jobQuery->locationFilters = [
        new LocationFilter(),
    ];
    $request->searchJobsRequest->jobQuery->publishTimeRange = new TimestampRange();
    $request->searchJobsRequest->jobQuery->publishTimeRange->endTime = 'magni';
    $request->searchJobsRequest->jobQuery->publishTimeRange->startTime = 'odio';
    $request->searchJobsRequest->jobQuery->query = 'sunt';
    $request->searchJobsRequest->jobQuery->queryLanguageCode = 'ullam';
    $request->searchJobsRequest->jobView = SearchJobsRequestJobViewEnum::JOB_VIEW_SMALL;
    $request->searchJobsRequest->offset = 940432;
    $request->searchJobsRequest->orderBy = 'voluptatem';
    $request->searchJobsRequest->pageSize = 765326;
    $request->searchJobsRequest->pageToken = 'soluta';
    $request->searchJobsRequest->requestMetadata = new RequestMetadata();
    $request->searchJobsRequest->requestMetadata->deviceInfo = new DeviceInfo();
    $request->searchJobsRequest->requestMetadata->deviceInfo->deviceType = DeviceInfoDeviceTypeEnum::BOT;
    $request->searchJobsRequest->requestMetadata->deviceInfo->id = '1e31b8b9-0f34-443a-9108-e0adcf4b9218';
    $request->searchJobsRequest->requestMetadata->domain = 'odio';
    $request->searchJobsRequest->requestMetadata->sessionId = 'occaecati';
    $request->searchJobsRequest->requestMetadata->userId = 'voluptatibus';
    $request->searchJobsRequest->requirePreciseResultSize = false;
    $request->searchJobsRequest->searchMode = SearchJobsRequestSearchModeEnum::FEATURED_JOB_SEARCH;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quis';
    $request->fields = 'ipsum';
    $request->key = 'delectus';
    $request->oauthToken = 'voluptate';
    $request->parent = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new JobsProjectsJobsSearchForAlertSecurity();
    $requestSecurity->option1 = new JobsProjectsJobsSearchForAlertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsJobsSearchForAlert($request, $requestSecurity);

    if ($response->searchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'similique';
    $request->key = 'facilis';
    $request->name = 'Allan Greenholt';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new JobsProjectsOperationsGetSecurity();
    $requestSecurity->option1 = new JobsProjectsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
