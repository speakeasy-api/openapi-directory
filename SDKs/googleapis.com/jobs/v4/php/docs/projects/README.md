# projects

### Available Operations

* [jobsProjectsTenantsClientEventsCreate](#jobsprojectstenantsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsTenantsCompaniesCreate](#jobsprojectstenantscompaniescreate) - Creates a new company entity.
* [jobsProjectsTenantsCompaniesList](#jobsprojectstenantscompanieslist) - Lists all companies associated with the project.
* [jobsProjectsTenantsCompleteQuery](#jobsprojectstenantscompletequery) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsTenantsCreate](#jobsprojectstenantscreate) - Creates a new tenant entity.
* [jobsProjectsTenantsJobsBatchCreate](#jobsprojectstenantsjobsbatchcreate) - Begins executing a batch create jobs operation.
* [jobsProjectsTenantsJobsBatchDelete](#jobsprojectstenantsjobsbatchdelete) - Begins executing a batch delete jobs operation.
* [jobsProjectsTenantsJobsBatchUpdate](#jobsprojectstenantsjobsbatchupdate) - Begins executing a batch update jobs operation.
* [jobsProjectsTenantsJobsCreate](#jobsprojectstenantsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsDelete](#jobsprojectstenantsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsGet](#jobsprojectstenantsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsTenantsJobsList](#jobsprojectstenantsjobslist) - Lists jobs by filter.
* [jobsProjectsTenantsJobsPatch](#jobsprojectstenantsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsSearch](#jobsprojectstenantsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsTenantsJobsSearchForAlert](#jobsprojectstenantsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [jobsProjectsTenantsList](#jobsprojectstenantslist) - Lists all tenants associated with the project.

## jobsProjectsTenantsClientEventsCreate

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

### Example Usage

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
    $request->clientEvent->createTime = 'placeat';
    $request->clientEvent->eventId = 'voluptatum';
    $request->clientEvent->eventNotes = 'iusto';
    $request->clientEvent->jobEvent = new JobEvent();
    $request->clientEvent->jobEvent->jobs = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->clientEvent->jobEvent->type = JobEventTypeEnum::IMPRESSION;
    $request->clientEvent->requestId = 'quis';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

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

## jobsProjectsTenantsCompaniesCreate

Creates a new company entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\CompanyDerivedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\CompanySizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsCompaniesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->companyInput = new CompanyInput();
    $request->companyInput->careerSiteUri = 'molestiae';
    $request->companyInput->derivedInfo = new CompanyDerivedInfo();
    $request->companyInput->derivedInfo->headquartersLocation = new Location();
    $request->companyInput->derivedInfo->headquartersLocation->latLng = new LatLng();
    $request->companyInput->derivedInfo->headquartersLocation->latLng->latitude = 7991.59;
    $request->companyInput->derivedInfo->headquartersLocation->latLng->longitude = 8009.11;
    $request->companyInput->derivedInfo->headquartersLocation->locationType = LocationLocationTypeEnum::POSTAL_CODE;
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress = new PostalAddress();
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->addressLines = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->administrativeArea = 'nam';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->languageCode = 'officia';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->locality = 'occaecati';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->organization = 'fugit';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->postalCode = '97514-4217';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->recipients = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->regionCode = 'aspernatur';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->revision = 18789;
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->sortingCode = 'ad';
    $request->companyInput->derivedInfo->headquartersLocation->postalAddress->sublocality = 'natus';
    $request->companyInput->derivedInfo->headquartersLocation->radiusMiles = 1496.75;
    $request->companyInput->displayName = 'iste';
    $request->companyInput->eeoText = 'dolor';
    $request->companyInput->externalId = 'natus';
    $request->companyInput->headquartersAddress = 'laboriosam';
    $request->companyInput->hiringAgency = false;
    $request->companyInput->imageUri = 'hic';
    $request->companyInput->keywordSearchableJobCustomAttributes = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->companyInput->name = 'Mr. Kerry Predovic';
    $request->companyInput->size = CompanySizeEnum::BIG;
    $request->companyInput->websiteUri = 'mollitia';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new JobsProjectsTenantsCompaniesCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsCompaniesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsCompaniesCreate($request, $requestSecurity);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsCompaniesList

Lists all companies associated with the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompaniesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsCompaniesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->pageSize = 652790;
    $request->pageToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->requireOpenJobs = false;
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new JobsProjectsTenantsCompaniesListSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsCompaniesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsCompaniesList($request, $requestSecurity);

    if ($response->listCompaniesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsCompleteQuery

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQueryScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQueryTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCompleteQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsCompleteQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->company = 'Frami - Mueller';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->languageCodes = [
        'laborum',
    ];
    $request->oauthToken = 'animi';
    $request->pageSize = 317202;
    $request->prettyPrint = false;
    $request->query = 'odit';
    $request->quotaUser = 'quo';
    $request->scope = JobsProjectsTenantsCompleteQueryScopeEnum::COMPLETION_SCOPE_UNSPECIFIED;
    $request->tenant = 'tenetur';
    $request->type = JobsProjectsTenantsCompleteQueryTypeEnum::JOB_TITLE;
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new JobsProjectsTenantsCompleteQuerySecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsCompleteQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsCompleteQuery($request, $requestSecurity);

    if ($response->completeQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsCreate

Creates a new tenant entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tenant;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tenant = new Tenant();
    $request->tenant->externalId = 'quasi';
    $request->tenant->name = 'Dr. Jake Pacocha';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new JobsProjectsTenantsCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsCreate($request, $requestSecurity);

    if ($response->tenant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsBatchCreate

Begins executing a batch create jobs operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateJobsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
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
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchCreateJobsRequestInput = new BatchCreateJobsRequestInput();
    $request->batchCreateJobsRequestInput->jobs = [
        new JobInput(),
        new JobInput(),
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new JobsProjectsTenantsJobsBatchCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsBatchCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsBatchCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsBatchDelete

Begins executing a batch delete jobs operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchDeleteJobsRequest = new BatchDeleteJobsRequest();
    $request->batchDeleteJobsRequest->names = [
        'ipsum',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->oauthToken = 'praesentium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new JobsProjectsTenantsJobsBatchDeleteSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsBatchDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsBatchUpdate

Begins executing a batch update jobs operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateJobsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
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
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateJobsRequestInput = new BatchUpdateJobsRequestInput();
    $request->batchUpdateJobsRequestInput->jobs = [
        new JobInput(),
    ];
    $request->batchUpdateJobsRequestInput->updateMask = 'itaque';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new JobsProjectsTenantsJobsBatchUpdateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsBatchUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsCreate

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
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
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobInput = new JobInput();
    $request->jobInput->addresses = [
        'aliquid',
    ];
    $request->jobInput->applicationInfo = new ApplicationInfo();
    $request->jobInput->applicationInfo->emails = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->jobInput->applicationInfo->instruction = 'assumenda';
    $request->jobInput->applicationInfo->uris = [
        'alias',
        'fugit',
    ];
    $request->jobInput->company = 'Marks, Glover and Prosacco';
    $request->jobInput->compensationInfo = new CompensationInfo();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange = new CompensationRange();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->currencyCode = 'tempore';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->nanos = 288476;
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->units = 'delectus';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->currencyCode = 'eum';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->nanos = 248753;
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->units = 'eligendi';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange = new CompensationRange();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->currencyCode = 'sint';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->nanos = 396098;
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->units = 'provident';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->currencyCode = 'necessitatibus';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->nanos = 572252;
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->units = 'officia';
    $request->jobInput->compensationInfo->entries = [
        new CompensationEntry(),
    ];
    $request->jobInput->customAttributes = [
        'a' => new CustomAttribute(),
        'dolorum' => new CustomAttribute(),
        'in' => new CustomAttribute(),
        'in' => new CustomAttribute(),
    ];
    $request->jobInput->degreeTypes = [
        JobDegreeTypesEnum::DOCTORAL_OR_EQUIVALENT,
        JobDegreeTypesEnum::BACHELORS_OR_EQUIVALENT,
        JobDegreeTypesEnum::PRIMARY_EDUCATION,
        JobDegreeTypesEnum::LOWER_SECONDARY_EDUCATION,
    ];
    $request->jobInput->department = 'cumque';
    $request->jobInput->derivedInfo = new JobDerivedInfo();
    $request->jobInput->derivedInfo->jobCategories = [
        JobDerivedInfoJobCategoriesEnum::ENTERTAINMENT_AND_TRAVEL,
        JobDerivedInfoJobCategoriesEnum::ENTERTAINMENT_AND_TRAVEL,
        JobDerivedInfoJobCategoriesEnum::MEDIA_COMMUNICATIONS_AND_WRITING,
        JobDerivedInfoJobCategoriesEnum::SCIENCE_AND_ENGINEERING,
    ];
    $request->jobInput->derivedInfo->locations = [
        new Location(),
    ];
    $request->jobInput->description = 'occaecati';
    $request->jobInput->employmentTypes = [
        JobEmploymentTypesEnum::FLY_IN_FLY_OUT,
        JobEmploymentTypesEnum::OTHER_EMPLOYMENT_TYPE,
    ];
    $request->jobInput->incentives = 'quidem';
    $request->jobInput->jobBenefits = [
        JobJobBenefitsEnum::RETIREMENT_PLAN,
        JobJobBenefitsEnum::PARENTAL_LEAVE,
        JobJobBenefitsEnum::LIFE_INSURANCE,
    ];
    $request->jobInput->jobEndTime = 'deleniti';
    $request->jobInput->jobLevel = JobJobLevelEnum::EXECUTIVE;
    $request->jobInput->jobStartTime = 'amet';
    $request->jobInput->languageCode = 'deserunt';
    $request->jobInput->name = 'Wilma Mosciski';
    $request->jobInput->postingExpireTime = 'perferendis';
    $request->jobInput->postingPublishTime = 'nihil';
    $request->jobInput->postingRegion = JobPostingRegionEnum::ADMINISTRATIVE_AREA;
    $request->jobInput->processingOptions = new ProcessingOptions();
    $request->jobInput->processingOptions->disableStreetAddressResolution = false;
    $request->jobInput->processingOptions->htmlSanitization = ProcessingOptionsHtmlSanitizationEnum::SIMPLE_FORMATTING_ONLY;
    $request->jobInput->promotionValue = 660174;
    $request->jobInput->qualifications = 'labore';
    $request->jobInput->requisitionId = 'labore';
    $request->jobInput->responsibilities = 'suscipit';
    $request->jobInput->title = 'Miss';
    $request->jobInput->visibility = JobVisibilityEnum::SHARED_WITH_GOOGLE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new JobsProjectsTenantsJobsCreateSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsDelete

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->name = 'Carmen Treutel';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new JobsProjectsTenantsJobsDeleteSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsGet

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->name = 'Elvira Herman';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new JobsProjectsTenantsJobsGetSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsList

Lists jobs by filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsListJobViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->filter = 'magni';
    $request->jobView = JobsProjectsTenantsJobsListJobViewEnum::JOB_VIEW_UNSPECIFIED;
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->pageSize = 864934;
    $request->pageToken = 'maxime';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new JobsProjectsTenantsJobsListSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsPatch

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
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
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobInput = new JobInput();
    $request->jobInput->addresses = [
        'maiores',
    ];
    $request->jobInput->applicationInfo = new ApplicationInfo();
    $request->jobInput->applicationInfo->emails = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->jobInput->applicationInfo->instruction = 'nam';
    $request->jobInput->applicationInfo->uris = [
        'pariatur',
    ];
    $request->jobInput->company = 'Wolf - Armstrong';
    $request->jobInput->compensationInfo = new CompensationInfo();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange = new CompensationRange();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->currencyCode = 'fugiat';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->nanos = 230742;
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->maxCompensation->units = 'aut';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->currencyCode = 'cumque';
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->nanos = 359978;
    $request->jobInput->compensationInfo->annualizedBaseCompensationRange->minCompensation->units = 'hic';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange = new CompensationRange();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->currencyCode = 'libero';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->nanos = 749999;
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->maxCompensation->units = 'dolores';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation = new Money();
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->currencyCode = 'quis';
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->nanos = 521037;
    $request->jobInput->compensationInfo->annualizedTotalCompensationRange->minCompensation->units = 'dignissimos';
    $request->jobInput->compensationInfo->entries = [
        new CompensationEntry(),
    ];
    $request->jobInput->customAttributes = [
        'nesciunt' => new CustomAttribute(),
        'eos' => new CustomAttribute(),
    ];
    $request->jobInput->degreeTypes = [
        JobDegreeTypesEnum::PRIMARY_EDUCATION,
    ];
    $request->jobInput->department = 'minus';
    $request->jobInput->derivedInfo = new JobDerivedInfo();
    $request->jobInput->derivedInfo->jobCategories = [
        JobDerivedInfoJobCategoriesEnum::BUSINESS_OPERATIONS,
        JobDerivedInfoJobCategoriesEnum::SCIENCE_AND_ENGINEERING,
    ];
    $request->jobInput->derivedInfo->locations = [
        new Location(),
        new Location(),
    ];
    $request->jobInput->description = 'hic';
    $request->jobInput->employmentTypes = [
        JobEmploymentTypesEnum::INTERN,
        JobEmploymentTypesEnum::VOLUNTEER,
        JobEmploymentTypesEnum::INTERN,
        JobEmploymentTypesEnum::EMPLOYMENT_TYPE_UNSPECIFIED,
    ];
    $request->jobInput->incentives = 'porro';
    $request->jobInput->jobBenefits = [
        JobJobBenefitsEnum::LIFE_INSURANCE,
    ];
    $request->jobInput->jobEndTime = 'error';
    $request->jobInput->jobLevel = JobJobLevelEnum::JOB_LEVEL_UNSPECIFIED;
    $request->jobInput->jobStartTime = 'occaecati';
    $request->jobInput->languageCode = 'rerum';
    $request->jobInput->name = 'Ollie Watsica';
    $request->jobInput->postingExpireTime = 'dolorum';
    $request->jobInput->postingPublishTime = 'deleniti';
    $request->jobInput->postingRegion = JobPostingRegionEnum::TELECOMMUTE;
    $request->jobInput->processingOptions = new ProcessingOptions();
    $request->jobInput->processingOptions->disableStreetAddressResolution = false;
    $request->jobInput->processingOptions->htmlSanitization = ProcessingOptionsHtmlSanitizationEnum::HTML_SANITIZATION_DISABLED;
    $request->jobInput->promotionValue = 750844;
    $request->jobInput->qualifications = 'libero';
    $request->jobInput->requisitionId = 'delectus';
    $request->jobInput->responsibilities = 'quaerat';
    $request->jobInput->title = 'Ms.';
    $request->jobInput->visibility = JobVisibilityEnum::ACCOUNT_ONLY;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'qui';
    $request->key = 'ipsum';
    $request->name = 'Marshall Ritchie';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new JobsProjectsTenantsJobsPatchSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsPatch($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsSearch

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfo;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfoImportanceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestDiversificationLevelEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestKeywordMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfoDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchJobsRequest = new SearchJobsRequest();
    $request->searchJobsRequest->customRankingInfo = new CustomRankingInfo();
    $request->searchJobsRequest->customRankingInfo->importanceLevel = CustomRankingInfoImportanceLevelEnum::IMPORTANCE_LEVEL_UNSPECIFIED;
    $request->searchJobsRequest->customRankingInfo->rankingExpression = 'iure';
    $request->searchJobsRequest->disableKeywordMatch = false;
    $request->searchJobsRequest->diversificationLevel = SearchJobsRequestDiversificationLevelEnum::SIMPLE;
    $request->searchJobsRequest->enableBroadening = false;
    $request->searchJobsRequest->histogramQueries = [
        new HistogramQuery(),
        new HistogramQuery(),
    ];
    $request->searchJobsRequest->jobQuery = new JobQuery();
    $request->searchJobsRequest->jobQuery->commuteFilter = new CommuteFilter();
    $request->searchJobsRequest->jobQuery->commuteFilter->allowImpreciseAddresses = false;
    $request->searchJobsRequest->jobQuery->commuteFilter->commuteMethod = CommuteFilterCommuteMethodEnum::TRANSIT_ACCESSIBLE;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime = new TimeOfDay();
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->hours = 696344;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->minutes = 976405;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->nanos = 377752;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->seconds = 617658;
    $request->searchJobsRequest->jobQuery->commuteFilter->roadTraffic = CommuteFilterRoadTrafficEnum::ROAD_TRAFFIC_UNSPECIFIED;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates = new LatLng();
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->latitude = 5424.99;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->longitude = 246.78;
    $request->searchJobsRequest->jobQuery->commuteFilter->travelDuration = 'fugiat';
    $request->searchJobsRequest->jobQuery->companies = [
        'soluta',
    ];
    $request->searchJobsRequest->jobQuery->companyDisplayNames = [
        'iusto',
        'voluptate',
        'dolorum',
    ];
    $request->searchJobsRequest->jobQuery->compensationFilter = new CompensationFilter();
    $request->searchJobsRequest->jobQuery->compensationFilter->includeJobsWithUnspecifiedCompensationRange = false;
    $request->searchJobsRequest->jobQuery->compensationFilter->range = new CompensationRange();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->currencyCode = 'deleniti';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->nanos = 607045;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->units = 'necessitatibus';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->currencyCode = 'distinctio';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->nanos = 990339;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->units = 'nihil';
    $request->searchJobsRequest->jobQuery->compensationFilter->type = CompensationFilterTypeEnum::UNIT_ONLY;
    $request->searchJobsRequest->jobQuery->compensationFilter->units = [
        CompensationFilterUnitsEnum::YEARLY,
        CompensationFilterUnitsEnum::OTHER_COMPENSATION_UNIT,
    ];
    $request->searchJobsRequest->jobQuery->customAttributeFilter = 'eius';
    $request->searchJobsRequest->jobQuery->disableSpellCheck = false;
    $request->searchJobsRequest->jobQuery->employmentTypes = [
        JobQueryEmploymentTypesEnum::EMPLOYMENT_TYPE_UNSPECIFIED,
    ];
    $request->searchJobsRequest->jobQuery->excludedJobs = [
        'optio',
    ];
    $request->searchJobsRequest->jobQuery->jobCategories = [
        JobQueryJobCategoriesEnum::CONSTRUCTION,
        JobQueryJobCategoriesEnum::SOCIAL_SERVICES_AND_NON_PROFIT,
        JobQueryJobCategoriesEnum::EDUCATION,
        JobQueryJobCategoriesEnum::MEDIA_COMMUNICATIONS_AND_WRITING,
    ];
    $request->searchJobsRequest->jobQuery->languageCodes = [
        'minima',
        'repellendus',
        'totam',
    ];
    $request->searchJobsRequest->jobQuery->locationFilters = [
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
    ];
    $request->searchJobsRequest->jobQuery->publishTimeRange = new TimestampRange();
    $request->searchJobsRequest->jobQuery->publishTimeRange->endTime = 'alias';
    $request->searchJobsRequest->jobQuery->publishTimeRange->startTime = 'at';
    $request->searchJobsRequest->jobQuery->query = 'quaerat';
    $request->searchJobsRequest->jobQuery->queryLanguageCode = 'tempora';
    $request->searchJobsRequest->jobView = SearchJobsRequestJobViewEnum::JOB_VIEW_MINIMAL;
    $request->searchJobsRequest->keywordMatchMode = SearchJobsRequestKeywordMatchModeEnum::KEYWORD_MATCH_TITLE_ONLY;
    $request->searchJobsRequest->maxPageSize = 885338;
    $request->searchJobsRequest->offset = 185636;
    $request->searchJobsRequest->orderBy = 'dolorum';
    $request->searchJobsRequest->pageToken = 'a';
    $request->searchJobsRequest->requestMetadata = new RequestMetadata();
    $request->searchJobsRequest->requestMetadata->allowMissingIds = false;
    $request->searchJobsRequest->requestMetadata->deviceInfo = new DeviceInfo();
    $request->searchJobsRequest->requestMetadata->deviceInfo->deviceType = DeviceInfoDeviceTypeEnum::ANDROID;
    $request->searchJobsRequest->requestMetadata->deviceInfo->id = 'a73cf3be-453f-4870-b326-b5a73429cdb1';
    $request->searchJobsRequest->requestMetadata->domain = 'laborum';
    $request->searchJobsRequest->requestMetadata->sessionId = 'totam';
    $request->searchJobsRequest->requestMetadata->userId = 'incidunt';
    $request->searchJobsRequest->searchMode = SearchJobsRequestSearchModeEnum::SEARCH_MODE_UNSPECIFIED;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'aliquid';
    $request->key = 'quam';
    $request->oauthToken = 'molestias';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new JobsProjectsTenantsJobsSearchSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsSearch($request, $requestSecurity);

    if ($response->searchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchForAlertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfo;
use \OpenAPI\OpenAPI\Models\Shared\CustomRankingInfoImportanceLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestDiversificationLevelEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestKeywordMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfo;
use \OpenAPI\OpenAPI\Models\Shared\DeviceInfoDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchJobsRequestSearchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchForAlertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchForAlertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsJobsSearchForAlertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsJobsSearchForAlertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchJobsRequest = new SearchJobsRequest();
    $request->searchJobsRequest->customRankingInfo = new CustomRankingInfo();
    $request->searchJobsRequest->customRankingInfo->importanceLevel = CustomRankingInfoImportanceLevelEnum::MILD;
    $request->searchJobsRequest->customRankingInfo->rankingExpression = 'sunt';
    $request->searchJobsRequest->disableKeywordMatch = false;
    $request->searchJobsRequest->diversificationLevel = SearchJobsRequestDiversificationLevelEnum::SIMPLE;
    $request->searchJobsRequest->enableBroadening = false;
    $request->searchJobsRequest->histogramQueries = [
        new HistogramQuery(),
        new HistogramQuery(),
        new HistogramQuery(),
    ];
    $request->searchJobsRequest->jobQuery = new JobQuery();
    $request->searchJobsRequest->jobQuery->commuteFilter = new CommuteFilter();
    $request->searchJobsRequest->jobQuery->commuteFilter->allowImpreciseAddresses = false;
    $request->searchJobsRequest->jobQuery->commuteFilter->commuteMethod = CommuteFilterCommuteMethodEnum::TRANSIT_ACCESSIBLE;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime = new TimeOfDay();
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->hours = 30452;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->minutes = 765326;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->nanos = 746994;
    $request->searchJobsRequest->jobQuery->commuteFilter->departureTime->seconds = 748664;
    $request->searchJobsRequest->jobQuery->commuteFilter->roadTraffic = CommuteFilterRoadTrafficEnum::ROAD_TRAFFIC_UNSPECIFIED;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates = new LatLng();
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->latitude = 9037.2;
    $request->searchJobsRequest->jobQuery->commuteFilter->startCoordinates->longitude = 2174.5;
    $request->searchJobsRequest->jobQuery->commuteFilter->travelDuration = 'veritatis';
    $request->searchJobsRequest->jobQuery->companies = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->searchJobsRequest->jobQuery->companyDisplayNames = [
        'delectus',
    ];
    $request->searchJobsRequest->jobQuery->compensationFilter = new CompensationFilter();
    $request->searchJobsRequest->jobQuery->compensationFilter->includeJobsWithUnspecifiedCompensationRange = false;
    $request->searchJobsRequest->jobQuery->compensationFilter->range = new CompensationRange();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->currencyCode = 'dolorem';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->nanos = 292147;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->maxCompensation->units = 'labore';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation = new Money();
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->currencyCode = 'adipisci';
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->nanos = 677263;
    $request->searchJobsRequest->jobQuery->compensationFilter->range->minCompensation->units = 'architecto';
    $request->searchJobsRequest->jobQuery->compensationFilter->type = CompensationFilterTypeEnum::FILTER_TYPE_UNSPECIFIED;
    $request->searchJobsRequest->jobQuery->compensationFilter->units = [
        CompensationFilterUnitsEnum::MONTHLY,
    ];
    $request->searchJobsRequest->jobQuery->customAttributeFilter = 'itaque';
    $request->searchJobsRequest->jobQuery->disableSpellCheck = false;
    $request->searchJobsRequest->jobQuery->employmentTypes = [
        JobQueryEmploymentTypesEnum::VOLUNTEER,
    ];
    $request->searchJobsRequest->jobQuery->excludedJobs = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->searchJobsRequest->jobQuery->jobCategories = [
        JobQueryJobCategoriesEnum::ART_FASHION_AND_DESIGN,
        JobQueryJobCategoriesEnum::ACCOUNTING_AND_FINANCE,
        JobQueryJobCategoriesEnum::HUMAN_RESOURCES,
    ];
    $request->searchJobsRequest->jobQuery->languageCodes = [
        'occaecati',
        'voluptatibus',
    ];
    $request->searchJobsRequest->jobQuery->locationFilters = [
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
        new LocationFilter(),
    ];
    $request->searchJobsRequest->jobQuery->publishTimeRange = new TimestampRange();
    $request->searchJobsRequest->jobQuery->publishTimeRange->endTime = 'vero';
    $request->searchJobsRequest->jobQuery->publishTimeRange->startTime = 'omnis';
    $request->searchJobsRequest->jobQuery->query = 'quis';
    $request->searchJobsRequest->jobQuery->queryLanguageCode = 'ipsum';
    $request->searchJobsRequest->jobView = SearchJobsRequestJobViewEnum::JOB_VIEW_FULL;
    $request->searchJobsRequest->keywordMatchMode = SearchJobsRequestKeywordMatchModeEnum::KEYWORD_MATCH_DISABLED;
    $request->searchJobsRequest->maxPageSize = 231701;
    $request->searchJobsRequest->offset = 878870;
    $request->searchJobsRequest->orderBy = 'tenetur';
    $request->searchJobsRequest->pageToken = 'dignissimos';
    $request->searchJobsRequest->requestMetadata = new RequestMetadata();
    $request->searchJobsRequest->requestMetadata->allowMissingIds = false;
    $request->searchJobsRequest->requestMetadata->deviceInfo = new DeviceInfo();
    $request->searchJobsRequest->requestMetadata->deviceInfo->deviceType = DeviceInfoDeviceTypeEnum::OTHER;
    $request->searchJobsRequest->requestMetadata->deviceInfo->id = 'bc7abd74-dd39-4c0f-9d2c-ff7c70a45626';
    $request->searchJobsRequest->requestMetadata->domain = 'possimus';
    $request->searchJobsRequest->requestMetadata->sessionId = 'magnam';
    $request->searchJobsRequest->requestMetadata->userId = 'ratione';
    $request->searchJobsRequest->searchMode = SearchJobsRequestSearchModeEnum::JOB_SEARCH;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->oauthToken = 'ex';
    $request->parent = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new JobsProjectsTenantsJobsSearchForAlertSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsJobsSearchForAlertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsJobsSearchForAlert($request, $requestSecurity);

    if ($response->searchJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobsProjectsTenantsList

Lists all tenants associated with the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\JobsProjectsTenantsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobsProjectsTenantsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'impedit';
    $request->key = 'corporis';
    $request->oauthToken = 'veniam';
    $request->pageSize = 399499;
    $request->pageToken = 'inventore';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new JobsProjectsTenantsListSecurity();
    $requestSecurity->option1 = new JobsProjectsTenantsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->jobsProjectsTenantsList($request, $requestSecurity);

    if ($response->listTenantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
