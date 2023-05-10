# mock

## Overview

Operations related to API and Services mocks

### Available Operations

* [deleteService](#deleteservice) - Delete Service
* [getService](#getservice) - Get Service
* [getServices](#getservices) - Get Services and APIs
* [getServicesCounter](#getservicescounter) - Get the Services counter
* [getServicesLabels](#getserviceslabels) - Get the already used labels for Services
* [overrideServiceOperation](#overrideserviceoperation) - Override Service Operation
* [searchServices](#searchservices) - Search for Services and APIs
* [updateServiceMetadata](#updateservicemetadata) - Update Service Metadata
* [exportSnapshot](#exportsnapshot) - Export a snapshot
* [importSnapshot](#importsnapshot) - Import a snapshot

## deleteService

Delete a Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->id = '715bf0cb-b1e3-41b8-b90f-3443a1108e0a';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getService

Get Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRequest();
    $request->id = 'dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7';
    $request->messages = false;

    $requestSecurity = new GetServiceSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->getService($request, $requestSecurity);

    if ($response->getService200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServices

Get Services and APIs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesRequest();
    $request->page = 293020;
    $request->size = 844550;

    $requestSecurity = new GetServicesSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->getServices($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServicesCounter

Get the Services counter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesCounterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetServicesCounterSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->getServicesCounter($requestSecurity);

    if ($response->counter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServicesLabels

Get the already used labels for Services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesLabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetServicesLabelsSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->getServicesLabels($requestSecurity);

    if ($response->labelsMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## overrideServiceOperation

Override Service Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OverrideServiceOperationRequest;
use \OpenAPI\OpenAPI\Models\Shared\OperationOverrideDTO;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraint;
use \OpenAPI\OpenAPI\Models\Shared\ParameterConstraintInEnum;
use \OpenAPI\OpenAPI\Models\Operations\OverrideServiceOperationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OverrideServiceOperationRequest();
    $request->operationOverrideDTO = new OperationOverrideDTO();
    $request->operationOverrideDTO->defaultDelay = 848944;
    $request->operationOverrideDTO->dispatcher = 'sequi';
    $request->operationOverrideDTO->dispatcherRules = 'natus';
    $request->operationOverrideDTO->parameterConstraints = [
        new ParameterConstraint(),
        new ParameterConstraint(),
        new ParameterConstraint(),
        new ParameterConstraint(),
    ];
    $request->id = '0f5d2cff-7c70-4a45-a26d-436813f16d9f';
    $request->operationName = 'nostrum';

    $requestSecurity = new OverrideServiceOperationSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->overrideServiceOperation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchServices

Search for Services and APIs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchServicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchServicesRequest();
    $request->queryMap = [
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
        'aliquid' => 'inventore',
    ];

    $requestSecurity = new SearchServicesSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->searchServices($request, $requestSecurity);

    if ($response->services !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceMetadata

Update Service Metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceMetadataRequest();
    $request->metadata = new Metadata();
    $request->metadata->annotations = [
        'ea' => 'quo',
        'consectetur' => 'recusandae',
    ];
    $request->metadata->createdOn = 132487;
    $request->metadata->labels = [
        'eaque' => 'a',
        'libero' => 'aut',
    ];
    $request->metadata->lastUpdate = 11427;
    $request->id = '8c42e141-aac3-466c-8dd6-b14429074747';

    $requestSecurity = new UpdateServiceMetadataSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->updateServiceMetadata($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSnapshot

Export a repostiory snapshot with requested services

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSnapshotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSnapshotRequest();
    $request->serviceIds = [
        'rem',
        'fuga',
    ];

    $requestSecurity = new ExportSnapshotSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->exportSnapshot($request, $requestSecurity);

    if ($response->exportSnapshot200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importSnapshot

Import a repository snapshot previsouly exported into Microcks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotUpload;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotUploadFile;
use \OpenAPI\OpenAPI\Models\Operations\ImportSnapshotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SnapshotUpload();
    $request->file = new SnapshotUploadFile();
    $request->file->content = 'reprehenderit';
    $request->file->file = 'quidem';

    $requestSecurity = new ImportSnapshotSecurity();
    $requestSecurity->jwtBearer = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->mock->importSnapshot($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
