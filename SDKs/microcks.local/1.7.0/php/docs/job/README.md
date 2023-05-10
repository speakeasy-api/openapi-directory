# job

## Overview

Operations related to Jobs for discovering mocks and tests

### Available Operations

* [activateImportJob](#activateimportjob) - Activate an ImportJob
* [createImportJob](#createimportjob) - Create ImportJob
* [deleteImportJob](#deleteimportjob) - Delete ImportJob
* [getImportJobCounter](#getimportjobcounter) - Get the ImportJobs counter
* [getImportJobs](#getimportjobs) - Get ImportJobs
* [startImportJob](#startimportjob) - Start an ImportJob
* [stopImportJob](#stopimportjob) - Stop an ImportJob
* [getJobsId](#getjobsid) - Get ImportJob
* [postJobsId](#postjobsid) - Update ImportJob
* [uploadArtifact](#uploadartifact) - Upload an artifact

## activateImportJob

Make an ImportJob active, so that it is executed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateImportJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateImportJobRequest();
    $request->id = 'f15471b5-e6e1-43b9-9d48-8e1e91e450ad';

    $requestSecurity = new ActivateImportJobSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->activateImportJob($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createImportJob

Create a new ImportJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ImportJob;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\SecretRef;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRef;
use \OpenAPI\OpenAPI\Models\Operations\CreateImportJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportJob();
    $request->active = false;
    $request->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:45:16.013Z');
    $request->etag = 'distinctio';
    $request->frequency = 'quibusdam';
    $request->id = '44269802-d502-4a94-bb4f-63c969e9a3ef';
    $request->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T14:21:47.573Z');
    $request->lastImportError = 'in';
    $request->mainArtifact = false;
    $request->metadata = new Metadata();
    $request->metadata->annotations = [
        'maiores' => 'rerum',
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->metadata->createdOn = 675439;
    $request->metadata->labels = [
        'non' => 'occaecati',
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
    $request->metadata->lastUpdate = 659669;
    $request->name = 'Jaime Will';
    $request->repositoryDisableSSLValidation = false;
    $request->repositoryUrl = 'nisi';
    $request->secretRef = new SecretRef();
    $request->secretRef->name = 'Ada Moen IV';
    $request->secretRef->secretId = 'magnam';
    $request->serviceRefs = [
        new ServiceRef(),
        new ServiceRef(),
        new ServiceRef(),
    ];

    $requestSecurity = new CreateImportJobSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->createImportJob($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteImportJob

Delete an ImportJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImportJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImportJobRequest();
    $request->id = 'a4469b6e-2141-4959-890a-fa563e2516fe';

    $requestSecurity = new DeleteImportJobSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->deleteImportJob($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportJobCounter

Get the ImportJobs counter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportJobCounterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetImportJobCounterSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->getImportJobCounter($requestSecurity);

    if ($response->counter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportJobs

Retrieve a list of ImportJobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImportJobsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImportJobsRequest();
    $request->name = 'Jasmine Lind';
    $request->page = 100226;
    $request->size = 99569;

    $requestSecurity = new GetImportJobsSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->getImportJobs($request, $requestSecurity);

    if ($response->importJobs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImportJob

Starting an ImportJob forces it to immediatly import mock definitions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportJobRequest();
    $request->id = 'e5b7fd2e-d028-4921-8ddc-692601fb576b';

    $requestSecurity = new StartImportJobSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->startImportJob($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopImportJob

Stopping an ImportJob desactivate it, so that it won't execute at next schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopImportJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopImportJobRequest();
    $request->id = '0d5f0d30-c5fb-4b25-8705-3202c73d5fe9';

    $requestSecurity = new StopImportJobSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->stopImportJob($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobsId

Retrieve an ImportJob using its identifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobsIdRequest();
    $request->id = 'b90c2890-9b3f-4e49-a8d9-cbf48633323f';

    $requestSecurity = new GetJobsIdSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->getJobsId($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJobsId

Update an ImportJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostJobsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportJob;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\SecretRef;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRef;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostJobsIdRequest();
    $request->importJob = new ImportJob();
    $request->importJob->active = false;
    $request->importJob->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T03:04:11.898Z');
    $request->importJob->etag = 'voluptate';
    $request->importJob->frequency = 'dignissimos';
    $request->importJob->id = 'f3a41006-74eb-4f69-a80d-1ba77a89ebf7';
    $request->importJob->lastImportDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T13:18:42.293Z');
    $request->importJob->lastImportError = 'id';
    $request->importJob->mainArtifact = false;
    $request->importJob->metadata = new Metadata();
    $request->importJob->metadata->annotations = [
        'eius' => 'aspernatur',
        'perferendis' => 'amet',
        'optio' => 'accusamus',
        'ad' => 'saepe',
    ];
    $request->importJob->metadata->createdOn = 383464;
    $request->importJob->metadata->labels = [
        'provident' => 'minima',
        'repellendus' => 'totam',
        'similique' => 'alias',
    ];
    $request->importJob->metadata->lastUpdate = 872651;
    $request->importJob->name = 'Rhonda Kautzer';
    $request->importJob->repositoryDisableSSLValidation = false;
    $request->importJob->repositoryUrl = 'qui';
    $request->importJob->secretRef = new SecretRef();
    $request->importJob->secretRef->name = 'Randal Klocko';
    $request->importJob->secretRef->secretId = 'ipsum';
    $request->importJob->serviceRefs = [
        new ServiceRef(),
        new ServiceRef(),
        new ServiceRef(),
        new ServiceRef(),
    ];
    $request->id = 'f3be453f-870b-4326-b5a7-3429cdb1a842';

    $response = $sdk->job->postJobsId($request);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadArtifact

Uploads an artifact to be imported by Microcks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactUpload;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactUploadFile;
use \OpenAPI\OpenAPI\Models\Operations\UploadArtifactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadArtifactRequest();
    $request->artifactUpload = new ArtifactUpload();
    $request->artifactUpload->file = new ArtifactUploadFile();
    $request->artifactUpload->file->content = 'dolores';
    $request->artifactUpload->file->file = 'distinctio';
    $request->mainArtifact = false;

    $requestSecurity = new UploadArtifactSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->job->uploadArtifact($request, $requestSecurity);

    if ($response->uploadArtifact201TextPlainString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
