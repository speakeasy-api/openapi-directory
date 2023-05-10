# projectApi

### Available Operations

* [createProject](#createproject) - Create a project
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [deleteProject](#deleteproject) - Delete a specific project
* [exportIteration](#exportiteration) - Export a trained iteration
* [getExports](#getexports) - Get the list of exports for a specific iteration
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration
* [getIteration](#getiteration) - Get a specific iteration
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration
* [getIterations](#getiterations) - Get iterations for the project
* [getProject](#getproject) - Get a specific project
* [getProjects](#getprojects) - Get your projects
* [trainProject](#trainproject) - Queues project for training
* [updateIterationForm](#updateiterationform) - Update a specific iteration
* [updateIterationJson](#updateiterationjson) - Update a specific iteration
* [updateIterationRaw](#updateiterationraw) - Update a specific iteration
* [updateProjectForm](#updateprojectform) - Update a specific project
* [updateProjectJson](#updateprojectjson) - Update a specific project
* [updateProjectRaw](#updateprojectraw) - Update a specific project

## createProject

Create a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectClassificationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->trainingKey = 'soluta';
    $request->classificationType = CreateProjectClassificationTypeEnum::MULTILABEL;
    $request->description = 'temporibus';
    $request->domainId = 'a3f2ceda-7e23-4f22-9741-1faf4b7544e4';
    $request->name = 'Judith Thompson Sr.';

    $response = $sdk->projectApi->createProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIteration

Delete a specific iteration of a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIterationRequest();
    $request->trainingKey = 'deleniti';
    $request->iterationId = '57a5b404-63a7-4d57-9f14-00e764ad7334';
    $request->projectId = 'ec1b781b-36a0-4808-8d10-0efada200ef0';

    $response = $sdk->projectApi->deleteIteration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Delete a specific project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->trainingKey = 'incidunt';
    $request->projectId = '22eb2164-cf9a-4b83-a6c7-23ffda9e06be';

    $response = $sdk->projectApi->deleteProject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportIteration

Export a trained iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationFlavorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportIterationRequest();
    $request->trainingKey = 'voluptates';
    $request->flavor = ExportIterationFlavorEnum::LINUX;
    $request->iterationId = '825c1fc0-e115-4c80-bff9-18544ec42def';
    $request->platform = ExportIterationPlatformEnum::ONNX;
    $request->projectId = 'ce8f1977-773e-4635-a2a7-b408f05e3d48';

    $response = $sdk->projectApi->exportIteration($request);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExports

Get the list of exports for a specific iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportsRequest();
    $request->trainingKey = 'doloribus';
    $request->iterationId = 'daf313a1-f5fd-4942-99c0-b36f25ea944f';
    $request->projectId = '3b756c11-f6c3-47a5-9262-43835bbc05a2';

    $response = $sdk->projectApi->getExports($request);

    if ($response->exports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagePerformanceCount

The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformanceCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePerformanceCountRequest();
    $request->trainingKey = 'amet';
    $request->iterationId = 'a45cefc5-fde1-40a0-8e21-69e510019c6d';
    $request->projectId = 'c5e34762-799b-4fbb-a694-9fb2bb4ecae6';
    $request->tagIds = [
        'nesciunt',
        'illum',
        'nemo',
        'illum',
    ];

    $response = $sdk->projectApi->getImagePerformanceCount($request);

    if ($response->getImagePerformanceCount200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagePerformances

This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformancesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePerformancesRequest();
    $request->trainingKey = 'facilis';
    $request->iterationId = '3adebd5d-aea4-4c50-aa8a-a94c02644cf5';
    $request->orderBy = GetImagePerformancesOrderByEnum::OLDEST;
    $request->projectId = '9d9a4578-adc1-4ac6-80de-c001ac802e2e';
    $request->skip = 773259;
    $request->tagIds = [
        'excepturi',
    ];
    $request->take = 950956;

    $response = $sdk->projectApi->getImagePerformances($request);

    if ($response->imagePerformances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIteration

Get a specific iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationRequest();
    $request->trainingKey = 'maiores';
    $request->iterationId = '8f0f816f-f347-47c1-be90-2c14125b0960';
    $request->projectId = 'a668151a-472a-4f92-bc59-49f83f350cf8';

    $response = $sdk->projectApi->getIteration($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIterationPerformance

Get detailed performance information about an iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationPerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationPerformanceRequest();
    $request->trainingKey = 'molestiae';
    $request->iterationId = '6ffb901c-6ecb-4b4e-a43c-f789ffafeda5';
    $request->overlapThreshold = 2465.77;
    $request->projectId = 'e5ae6e0a-c184-4c2b-9c24-7c88373a40e1';
    $request->threshold = 5646.27;

    $response = $sdk->projectApi->getIterationPerformance($request);

    if ($response->iterationPerformance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIterations

Get iterations for the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationsRequest();
    $request->trainingKey = 'dolore';
    $request->projectId = '2f32e550-5575-46f5-956d-0bd0af2dfe13';

    $response = $sdk->projectApi->getIterations($request);

    if ($response->iterations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Get a specific project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->trainingKey = 'pariatur';
    $request->projectId = 'b4f62cba-3f89-441a-abc0-b80a6924d3b2';

    $response = $sdk->projectApi->getProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

Get your projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsRequest();
    $request->trainingKey = 'accusamus';

    $response = $sdk->projectApi->getProjects($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trainProject

Queues project for training

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainProjectRequest();
    $request->trainingKey = 'optio';
    $request->projectId = 'fcc8f895-010f-45dd-bd6f-a1804e54c82f';

    $response = $sdk->projectApi->trainProject($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationForm

Update a specific iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\IterationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationFormRequest();
    $request->iterationInput = new IterationInput();
    $request->iterationInput->isDefault = false;
    $request->iterationInput->name = 'Vicki Langworth';
    $request->trainingKey = 'aliquid';
    $request->iterationId = '3c8873e4-8438-40b1-b6b8-ca275a60a04c';
    $request->projectId = '495cc699-171b-451c-9bdb-1cf4b888ebdf';

    $response = $sdk->projectApi->updateIterationForm($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationJson

Update a specific iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\IterationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationJsonRequest();
    $request->iterationInput = new IterationInput();
    $request->iterationInput->isDefault = false;
    $request->iterationInput->name = 'Randall Schmeler';
    $request->trainingKey = 'id';
    $request->iterationId = '99bc7fc0-b2dc-4e10-873e-42b006d67887';
    $request->projectId = '8ba8581a-5820-48c5-8fef-a9c95f2eac55';

    $response = $sdk->projectApi->updateIterationJson($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationRaw

Update a specific iteration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationRawRequest();
    $request->requestBody = 'eum';
    $request->trainingKey = 'nemo';
    $request->iterationId = 'd307cfee-8120-46e2-813f-a4a41c480d3f';
    $request->projectId = '2132af03-102d-4514-b4cc-6f18bf9621a6';

    $response = $sdk->projectApi->updateIterationRaw($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectForm

Update a specific project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectFormRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'animi';
    $request->projectInput->name = 'Mindy Kunde';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = '7ee3e4be-752c-465b-b441-8e3bb91c8d97';
    $request->trainingKey = 'enim';
    $request->projectId = 'e0e8419d-8f84-4f14-8f3e-07edcc4aa5f3';

    $response = $sdk->projectApi->updateProjectForm($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectJson

Update a specific project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectJsonRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'porro';
    $request->projectInput->name = 'Robin Spinka III';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = '972e0567-2822-47b2-9309-470bf7a4fa87';
    $request->trainingKey = 'quod';
    $request->projectId = 'f535a6fa-e54e-4bf6-8c32-1f023b75d236';

    $response = $sdk->projectApi->updateProjectJson($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectRaw

Update a specific project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRawRequest();
    $request->requestBody = 'dignissimos';
    $request->trainingKey = 'reiciendis';
    $request->projectId = 'e1a0cc8d-f79f-40a3-96d9-0c364b7c15df';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
