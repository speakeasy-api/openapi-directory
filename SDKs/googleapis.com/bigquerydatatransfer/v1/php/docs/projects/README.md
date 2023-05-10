# projects

### Available Operations

* [bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds](#bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds) - Returns true if valid credentials exist for the given data source and requesting user.
* [bigquerydatatransferProjectsLocationsDataSourcesList](#bigquerydatatransferprojectslocationsdatasourceslist) - Lists supported data sources and returns their settings.
* [bigquerydatatransferProjectsLocationsEnrollDataSources](#bigquerydatatransferprojectslocationsenrolldatasources) - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* [bigquerydatatransferProjectsLocationsList](#bigquerydatatransferprojectslocationslist) - Lists information about the supported locations for this service.
* [bigquerydatatransferProjectsTransferConfigsCreate](#bigquerydatatransferprojectstransferconfigscreate) - Creates a new data transfer configuration.
* [bigquerydatatransferProjectsTransferConfigsList](#bigquerydatatransferprojectstransferconfigslist) - Returns information about all transfer configs owned by a project in the specified location.
* [bigquerydatatransferProjectsTransferConfigsPatch](#bigquerydatatransferprojectstransferconfigspatch) - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* [bigquerydatatransferProjectsTransferConfigsRunsDelete](#bigquerydatatransferprojectstransferconfigsrunsdelete) - Deletes the specified transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsGet](#bigquerydatatransferprojectstransferconfigsrunsget) - Returns information about the particular transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsList](#bigquerydatatransferprojectstransferconfigsrunslist) - Returns information about running and completed transfer runs.
* [bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList](#bigquerydatatransferprojectstransferconfigsrunstransferlogslist) - Returns log messages for the transfer run.
* [bigquerydatatransferProjectsTransferConfigsScheduleRuns](#bigquerydatatransferprojectstransferconfigsscheduleruns) - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* [bigquerydatatransferProjectsTransferConfigsStartManualRuns](#bigquerydatatransferprojectstransferconfigsstartmanualruns) - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

## bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds

Returns true if valid credentials exist for the given data source and requesting user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds($request, $requestSecurity);

    if ($response->checkValidCredsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsLocationsDataSourcesList

Lists supported data sources and returns their settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsLocationsDataSourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new BigquerydatatransferProjectsLocationsDataSourcesListSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsLocationsDataSourcesList($request, $requestSecurity);

    if ($response->listDataSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsLocationsEnrollDataSources

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enrollDataSourcesRequest = new EnrollDataSourcesRequest();
    $request->enrollDataSourcesRequest->dataSourceIds = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->key = 'esse';
    $request->name = 'Mrs. Miriam Collier';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsLocationsEnrollDataSources($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'in';
    $request->filter = 'corporis';
    $request->key = 'iste';
    $request->name = 'Mr. Kerry Predovic';
    $request->oauthToken = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new BigquerydatatransferProjectsLocationsListSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsCreate

Creates a new data transfer configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailPreferences;
use \OpenAPI\OpenAPI\Models\Shared\UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->transferConfigInput = new TransferConfigInput();
    $request->transferConfigInput->dataRefreshWindowDays = 750686;
    $request->transferConfigInput->dataSourceId = 'enim';
    $request->transferConfigInput->destinationDatasetId = 'omnis';
    $request->transferConfigInput->disabled = false;
    $request->transferConfigInput->displayName = 'nemo';
    $request->transferConfigInput->emailPreferences = new EmailPreferences();
    $request->transferConfigInput->emailPreferences->enableFailureEmail = false;
    $request->transferConfigInput->name = 'Velma Batz';
    $request->transferConfigInput->notificationPubsubTopic = 'doloribus';
    $request->transferConfigInput->ownerInfo = new UserInfo();
    $request->transferConfigInput->ownerInfo->email = 'Bart63@hotmail.com';
    $request->transferConfigInput->params = [
        'repellat' => 'mollitia',
    ];
    $request->transferConfigInput->schedule = 'occaecati';
    $request->transferConfigInput->scheduleOptions = new ScheduleOptions();
    $request->transferConfigInput->scheduleOptions->disableAutoScheduling = false;
    $request->transferConfigInput->scheduleOptions->endTime = 'numquam';
    $request->transferConfigInput->scheduleOptions->startTime = 'commodi';
    $request->transferConfigInput->userId = 'quam';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->authorizationCode = 'error';
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->serviceAccountName = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';
    $request->versionInfo = 'tenetur';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsCreate($request, $requestSecurity);

    if ($response->transferConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsList

Returns information about all transfer configs owned by a project in the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->dataSourceIds = [
        'error',
    ];
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsListSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsList($request, $requestSecurity);

    if ($response->listTransferConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsPatch

Updates a data transfer configuration. All fields must be set, even if they are not updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailPreferences;
use \OpenAPI\OpenAPI\Models\Shared\UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->transferConfigInput = new TransferConfigInput();
    $request->transferConfigInput->dataRefreshWindowDays = 604846;
    $request->transferConfigInput->dataSourceId = 'voluptate';
    $request->transferConfigInput->destinationDatasetId = 'cum';
    $request->transferConfigInput->disabled = false;
    $request->transferConfigInput->displayName = 'perferendis';
    $request->transferConfigInput->emailPreferences = new EmailPreferences();
    $request->transferConfigInput->emailPreferences->enableFailureEmail = false;
    $request->transferConfigInput->name = 'Bessie Grady II';
    $request->transferConfigInput->notificationPubsubTopic = 'dolore';
    $request->transferConfigInput->ownerInfo = new UserInfo();
    $request->transferConfigInput->ownerInfo->email = 'Birdie88@yahoo.com';
    $request->transferConfigInput->params = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->transferConfigInput->schedule = 'molestias';
    $request->transferConfigInput->scheduleOptions = new ScheduleOptions();
    $request->transferConfigInput->scheduleOptions->disableAutoScheduling = false;
    $request->transferConfigInput->scheduleOptions->endTime = 'excepturi';
    $request->transferConfigInput->scheduleOptions->startTime = 'pariatur';
    $request->transferConfigInput->userId = 'modi';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->authorizationCode = 'voluptates';
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->name = 'Patti Gottlieb MD';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->serviceAccountName = 'deserunt';
    $request->updateMask = 'distinctio';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'labore';
    $request->versionInfo = 'modi';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsPatch($request, $requestSecurity);

    if ($response->transferConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsRunsDelete

Deletes the specified transfer run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'perferendis';
    $request->key = 'magni';
    $request->name = 'Vernon Abshire';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsRunsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsRunsGet

Returns information about the particular transfer run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsRunsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->name = 'Sherri Tremblay';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsRunsGetSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsRunsGet($request, $requestSecurity);

    if ($response->transferRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsRunsList

Returns information about running and completed transfer runs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsRunsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->pageSize = 767024;
    $request->pageToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->runAttempt = BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum::LATEST;
    $request->states = [
        BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum::PENDING,
        BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum::SUCCEEDED,
        BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum::PENDING,
        BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum::CANCELLED,
    ];
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsRunsListSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsRunsList($request, $requestSecurity);

    if ($response->listTransferRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList

Returns log messages for the transfer run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->messageTypes = [
        BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum::WARNING,
    ];
    $request->oauthToken = 'nisi';
    $request->pageSize = 423855;
    $request->pageToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList($request, $requestSecurity);

    if ($response->listTransferLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsScheduleRuns

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleTransferRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scheduleTransferRunsRequest = new ScheduleTransferRunsRequest();
    $request->scheduleTransferRunsRequest->endTime = 'distinctio';
    $request->scheduleTransferRunsRequest->startTime = 'id';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'natus';
    $request->key = 'nobis';
    $request->oauthToken = 'eum';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsScheduleRuns($request, $requestSecurity);

    if ($response->scheduleTransferRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigquerydatatransferProjectsTransferConfigsStartManualRuns

Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StartManualTransferRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->startManualTransferRunsRequest = new StartManualTransferRunsRequest();
    $request->startManualTransferRunsRequest->requestedRunTime = 'excepturi';
    $request->startManualTransferRunsRequest->requestedTimeRange = new TimeRange();
    $request->startManualTransferRunsRequest->requestedTimeRange->endTime = 'ullam';
    $request->startManualTransferRunsRequest->requestedTimeRange->startTime = 'provident';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity();
    $requestSecurity->option1 = new BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigquerydatatransferProjectsTransferConfigsStartManualRuns($request, $requestSecurity);

    if ($response->startManualTransferRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
