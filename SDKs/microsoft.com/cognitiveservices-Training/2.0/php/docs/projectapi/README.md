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

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->trainingKey = 'soluta';
    $request->description = 'natus';
    $request->domainId = 'da3f2ced-a7e2-43f2-a574-11faf4b7544e';
    $request->name = 'Maureen Champlin';

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
    $request->trainingKey = 'aperiam';
    $request->iterationId = '2857a5b4-0463-4a7d-975f-1400e764ad73';
    $request->projectId = '34ec1b78-1b36-4a08-888d-100efada200e';

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
    $request->trainingKey = 'hic';
    $request->projectId = '0422eb21-64cf-49ab-8366-c723ffda9e06';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportIterationRequest();
    $request->trainingKey = 'rerum';
    $request->flavor = 'recusandae';
    $request->iterationId = 'e4825c1f-c0e1-415c-80bf-f918544ec42d';
    $request->platform = 'vero';
    $request->projectId = 'fcce8f19-7777-43e6-b562-a7b408f05e3d';

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
    $request->trainingKey = 'aliquam';
    $request->iterationId = '8fdaf313-a1f5-4fd9-8259-c0b36f25ea94';
    $request->projectId = '4f3b756c-11f6-4c37-a512-6243835bbc05';

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
    $request->trainingKey = 'culpa';
    $request->iterationId = '23a45cef-c5fd-4e10-a0ce-2169e510019c';
    $request->projectId = '6dc5e347-6279-49bf-bbe6-949fb2bb4eca';
    $request->tagIds = [
        'autem',
        'quo',
        'nesciunt',
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
    $request->trainingKey = 'nemo';
    $request->iterationId = 'db3adebd-5dae-4a4c-906a-8aa94c02644c';
    $request->orderBy = GetImagePerformancesOrderByEnum::OLDEST;
    $request->projectId = '5e9d9a45-78ad-4c1a-8600-dec001ac802e';
    $request->skip = 148379;
    $request->tagIds = [
        'impedit',
        'ipsa',
        'excepturi',
        'a',
    ];
    $request->take = 983000;

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
    $request->trainingKey = 'laudantium';
    $request->iterationId = 'f0f816ff-3477-4c13-a902-c14125b0960a';
    $request->projectId = '668151a4-72af-4923-8594-9f83f350cf87';

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
    $request->trainingKey = 'aliquid';
    $request->iterationId = 'ffb901c6-ecbb-44e2-83cf-789ffafeda53';
    $request->overlapThreshold = 8877.01;
    $request->projectId = '5ae6e0ac-184c-42b9-8247-c88373a40e19';
    $request->threshold = 2921.77;

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
    $request->trainingKey = 'sunt';
    $request->projectId = 'f32e5505-5756-4f5d-96d0-bd0af2dfe13d';

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
    $request->trainingKey = 'harum';
    $request->projectId = '4f62cba3-f894-41ae-bc0b-80a6924d3b2e';

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
    $request->trainingKey = 'optio';

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
    $request->trainingKey = 'delectus';
    $request->projectId = 'cc8f8950-10f5-4dd3-96fa-1804e54c82f1';

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
    $request->iterationInput->name = 'Marsha O'Reilly';
    $request->trainingKey = 'consectetur';
    $request->iterationId = 'c8873e48-4380-4b1f-ab8c-a275a60a04c4';
    $request->projectId = '95cc6991-71b5-41c1-bdb1-cf4b888ebdfc';

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
    $request->iterationInput->name = 'Sadie Schimmel';
    $request->trainingKey = 'excepturi';
    $request->iterationId = '9bc7fc0b-2dce-4108-b3e4-2b006d678878';
    $request->projectId = 'ba8581a5-8208-4c54-befa-9c95f2eac556';

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
    $request->requestBody = 'nemo';
    $request->trainingKey = 'illum';
    $request->iterationId = '307cfee8-1206-4e28-93fa-4a41c480d3f2';
    $request->projectId = '132af031-02d5-414f-8cc6-f18bf9621a6a';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectFormRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'dolore';
    $request->projectInput->name = 'Julio Koch';
    $request->projectInput->settings = new ProjectSettings();
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectJsonRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'porro';
    $request->projectInput->name = 'Robin Spinka III';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->domainId = 'a972e056-7282-427b-ad30-9470bf7a4fa8';
    $request->trainingKey = 'iusto';
    $request->projectId = 'cf535a6f-ae54-4ebf-a0c3-21f023b75d23';

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
    $request->requestBody = 'nisi';
    $request->trainingKey = 'dignissimos';
    $request->projectId = 'fe1a0cc8-df79-4f0a-b96d-90c364b7c15d';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
