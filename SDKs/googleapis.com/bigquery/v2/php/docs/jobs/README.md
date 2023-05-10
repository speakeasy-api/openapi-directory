# jobs

### Available Operations

* [bigqueryJobsCancel](#bigqueryjobscancel) - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* [bigqueryJobsDelete](#bigqueryjobsdelete) - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* [bigqueryJobsGet](#bigqueryjobsget) - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* [bigqueryJobsGetQueryResults](#bigqueryjobsgetqueryresults) - Retrieves the results of a query job.
* [bigqueryJobsInsert](#bigqueryjobsinsert) - Starts a new asynchronous job. Requires the Can View project role.
* [bigqueryJobsList](#bigqueryjobslist) - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* [bigqueryJobsQuery](#bigqueryjobsquery) - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

## bigqueryJobsCancel

Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsCancelRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'necessitatibus';
    $request->jobId = 'sint';
    $request->key = 'officia';
    $request->location = 'dolor';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->projectId = 'a';
    $request->quotaUser = 'dolorum';
    $request->userIp = 'in';

    $requestSecurity = new BigqueryJobsCancelSecurity();
    $requestSecurity->option1 = new BigqueryJobsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsCancel($request, $requestSecurity);

    if ($response->jobCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsDelete

Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'in';
    $request->jobId = 'illum';
    $request->key = 'maiores';
    $request->location = 'rerum';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->projectId = 'magnam';
    $request->quotaUser = 'cumque';
    $request->userIp = 'facere';

    $requestSecurity = new BigqueryJobsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryJobsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsGet

Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ea';
    $request->jobId = 'aliquid';
    $request->key = 'laborum';
    $request->location = 'accusamus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->projectId = 'occaecati';
    $request->quotaUser = 'enim';
    $request->userIp = 'accusamus';

    $requestSecurity = new BigqueryJobsGetSecurity();
    $requestSecurity->option1 = new BigqueryJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsGet($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsGetQueryResults

Retrieves the results of a query job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetQueryResultsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetQueryResultsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetQueryResultsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsGetQueryResultsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsGetQueryResultsRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'delectus';
    $request->jobId = 'quidem';
    $request->key = 'provident';
    $request->location = 'nam';
    $request->maxResults = 659669;
    $request->oauthToken = 'blanditiis';
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->projectId = 'sapiente';
    $request->quotaUser = 'amet';
    $request->startIndex = 'deserunt';
    $request->timeoutMs = 394869;
    $request->userIp = 'vel';

    $requestSecurity = new BigqueryJobsGetQueryResultsSecurity();
    $requestSecurity->option1 = new BigqueryJobsGetQueryResultsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsGetQueryResults($request, $requestSecurity);

    if ($response->getQueryResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsInsert

Starts a new asynchronous job. Requires the Can View project role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsInsertSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsInsertRequest();
    $request->requestBody = 'natus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->projectId = 'nihil';
    $request->quotaUser = 'magnam';
    $request->userIp = 'distinctio';

    $requestSecurity = new BigqueryJobsInsertSecurity();
    $requestSecurity->option1 = new BigqueryJobsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsInsert($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsList

Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListStateFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsListRequest();
    $request->allUsers = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'id';
    $request->key = 'labore';
    $request->maxCreationTime = 'labore';
    $request->maxResults = 383462;
    $request->minCreationTime = 'natus';
    $request->oauthToken = 'nobis';
    $request->pageToken = 'eum';
    $request->parentJobId = 'vero';
    $request->prettyPrint = false;
    $request->projectId = 'aspernatur';
    $request->projection = BigqueryJobsListProjectionEnum::FULL;
    $request->quotaUser = 'magnam';
    $request->stateFilter = [
        BigqueryJobsListStateFilterEnum::PENDING,
    ];
    $request->userIp = 'ullam';

    $requestSecurity = new BigqueryJobsListSecurity();
    $requestSecurity->option1 = new BigqueryJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsList($request, $requestSecurity);

    if ($response->jobList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryJobsQuery

Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionProperty;
use \OpenAPI\OpenAPI\Models\Shared\DatasetReference;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterType;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterTypeStructTypes;
use \OpenAPI\OpenAPI\Models\Shared\QueryParameterValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsQuerySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryJobsQuerySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryJobsQueryRequest();
    $request->queryRequest = new QueryRequest();
    $request->queryRequest->connectionProperties = [
        new ConnectionProperty(),
        new ConnectionProperty(),
        new ConnectionProperty(),
    ];
    $request->queryRequest->continuous = false;
    $request->queryRequest->createSession = false;
    $request->queryRequest->defaultDataset = new DatasetReference();
    $request->queryRequest->defaultDataset->datasetId = 'quos';
    $request->queryRequest->defaultDataset->projectId = 'sint';
    $request->queryRequest->dryRun = false;
    $request->queryRequest->kind = 'accusantium';
    $request->queryRequest->labels = [
        'reiciendis' => 'mollitia',
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
    ];
    $request->queryRequest->location = 'odit';
    $request->queryRequest->maxResults = 367562;
    $request->queryRequest->maximumBytesBilled = 'quasi';
    $request->queryRequest->parameterMode = 'iure';
    $request->queryRequest->preserveNulls = false;
    $request->queryRequest->query = 'doloribus';
    $request->queryRequest->queryParameters = [
        new QueryParameter(),
        new QueryParameter(),
        new QueryParameter(),
        new QueryParameter(),
    ];
    $request->queryRequest->requestId = 'eius';
    $request->queryRequest->timeoutMs = 806194;
    $request->queryRequest->useLegacySql = false;
    $request->queryRequest->useQueryCache = false;
    $request->alt = AltEnum::JSON;
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->projectId = 'architecto';
    $request->quotaUser = 'architecto';
    $request->userIp = 'repudiandae';

    $requestSecurity = new BigqueryJobsQuerySecurity();
    $requestSecurity->option1 = new BigqueryJobsQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->jobs->bigqueryJobsQuery($request, $requestSecurity);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
