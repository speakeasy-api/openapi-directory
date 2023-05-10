# projectApi

### Available Operations

* [createProject](#createproject) - Create a project.
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [deleteProject](#deleteproject) - Delete a specific project.
* [exportIteration](#exportiteration) - Export a trained iteration.
* [getExports](#getexports) - Get the list of exports for a specific iteration.
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [getIteration](#getiteration) - Get a specific iteration.
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [getIterations](#getiterations) - Get iterations for the project.
* [getProject](#getproject) - Get a specific project.
* [getProjects](#getprojects) - Get your projects.
* [publishIteration](#publishiteration) - Publish a specific iteration.
* [trainProject](#trainproject) - Queues project for training.
* [unpublishIteration](#unpublishiteration) - Unpublish a specific iteration.
* [updateIterationForm](#updateiterationform) - Update a specific iteration.
* [updateIterationJson](#updateiterationjson) - Update a specific iteration.
* [updateIterationRaw](#updateiterationraw) - Update a specific iteration.
* [updateProjectForm](#updateprojectform) - Update a specific project.
* [updateProjectJson](#updateprojectjson) - Update a specific project.
* [updateProjectRaw](#updateprojectraw) - Update a specific project.

## createProject

Create a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->trainingKey = 'quo';
    $request->classificationType = CreateProjectClassificationTypeEnum::MULTICLASS;
    $request->description = 'quod';
    $request->domainId = 'cca99bc7-fc0b-42dc-a108-73e42b006d67';
    $request->name = 'Guy Kovacek';
    $request->targetExportPlatforms = [
        CreateProjectTargetExportPlatformsEnum::DOCKER_FILE,
        CreateProjectTargetExportPlatformsEnum::TENSOR_FLOW,
        CreateProjectTargetExportPlatformsEnum::DOCKER_FILE,
    ];

    $response = $sdk->projectApi->createProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIteration

Delete a specific iteration of a project.

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
    $request->trainingKey = 'architecto';
    $request->iterationId = 'a58208c5-4fef-4a9c-95f2-eac5565d307c';
    $request->projectId = 'fee81206-e281-43fa-8a41-c480d3f2132a';

    $response = $sdk->projectApi->deleteIteration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Delete a specific project.

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
    $request->projectId = '03102d51-4f4c-4c6f-98bf-9621a6a4f77a';

    $response = $sdk->projectApi->deleteProject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportIteration

Export a trained iteration.

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
    $request->trainingKey = 'laudantium';
    $request->flavor = ExportIterationFlavorEnum::ONNX10;
    $request->iterationId = 'ee3e4be7-52c6-45b3-8418-e3bb91c8d975';
    $request->platform = ExportIterationPlatformEnum::VAIDK;
    $request->projectId = '0e8419d8-f84f-4144-b3e0-7edcc4aa5f3c';

    $response = $sdk->projectApi->exportIteration($request);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExports

Get the list of exports for a specific iteration.

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
    $request->trainingKey = 'laborum';
    $request->iterationId = 'bd905a97-2e05-4672-8227-b2d309470bf7';
    $request->projectId = 'a4fa87cf-535a-46fa-a54e-bf60c321f023';

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
    $request->trainingKey = 'rerum';
    $request->iterationId = '75d2367f-e1a0-4cc8-9f79-f0a396d90c36';
    $request->projectId = '4b7c15df-bace-4188-b1c4-ee2c8c6ce611';
    $request->tagIds = [
        'eeb1c7cb-db6e-4ec7-8378-ba25317747dc',
        '915ad2ca-f5dd-4672-bdc0-f5ae2f3a6b70',
        '08787561-43f5-4a6c-98b5-5554080d40bc',
        'acc6cbd6-b5f3-4ec9-8930-4f926bad2553',
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
    $request->trainingKey = 'voluptatum';
    $request->iterationId = '19b474b0-ed20-4e56-a48f-ff639a910abd';
    $request->orderBy = GetImagePerformancesOrderByEnum::OLDEST;
    $request->projectId = 'ab626766-96e1-4ec0-8221-b335d89acb3e';
    $request->skip = 751381;
    $request->tagIds = [
        'da8d0c54-9ef0-4300-8978-a61fa1cf2068',
        '8f77c1ff-c71d-4ca1-a3f2-a3c80a97ff33',
        '4cddf857-a9e6-4187-ac6a-b21d29dfc94d',
        '6fecd799-3900-466a-ad2d-000355338cec',
    ];
    $request->take = 39047;

    $response = $sdk->projectApi->getImagePerformances($request);

    if ($response->imagePerformances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIteration

Get a specific iteration.

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
    $request->trainingKey = 'totam';
    $request->iterationId = '6fa21e91-52cb-4311-9167-b8e3c8db0340';
    $request->projectId = '8d6d364f-fd45-4590-ad12-63d48e935c2c';

    $response = $sdk->projectApi->getIteration($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIterationPerformance

Get detailed performance information about an iteration.

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
    $request->trainingKey = 'excepturi';
    $request->iterationId = 'e81f30be-3e43-4202-9721-657650664187';
    $request->overlapThreshold = 400.17;
    $request->projectId = 'd9d21f9a-d030-4c4e-8c11-a0836429068b';
    $request->threshold = 5146.09;

    $response = $sdk->projectApi->getIterationPerformance($request);

    if ($response->iterationPerformance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIterations

Get iterations for the project.

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
    $request->trainingKey = 'ullam';
    $request->projectId = '02a55e7f-73bc-4845-a320-a319f4badf94';

    $response = $sdk->projectApi->getIterations($request);

    if ($response->iterations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Get a specific project.

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
    $request->trainingKey = 'molestiae';
    $request->projectId = 'c9a867bc-4242-4666-9816-ddca8ef51fcb';

    $response = $sdk->projectApi->getProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

Get your projects.

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
    $request->trainingKey = 'modi';

    $response = $sdk->projectApi->getProjects($request);

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishIteration

Publish a specific iteration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishIterationRequest();
    $request->trainingKey = 'cumque';
    $request->iterationId = '593ec12c-daad-40ec-bafe-dbd80df448a4';
    $request->predictionId = 'esse';
    $request->projectId = 'f9390c58-8809-483d-abf9-ef3ffdd9f7f0';
    $request->publishName = 'quam';

    $response = $sdk->projectApi->publishIteration($request);

    if ($response->publishIteration200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trainProject

Queues project for training.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectTrainingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainProjectRequest();
    $request->trainingKey = 'omnis';
    $request->forceTrain = false;
    $request->notificationEmailAddress = 'similique';
    $request->projectId = 'f4d35724-cdb0-4f4d-a811-87d56844eded';
    $request->reservedBudgetInHours = 505799;
    $request->trainingType = TrainProjectTrainingTypeEnum::REGULAR;

    $response = $sdk->projectApi->trainProject($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpublishIteration

Unpublish a specific iteration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishIterationRequest();
    $request->trainingKey = 'animi';
    $request->iterationId = '9065e628-bdfc-4203-ab6c-879923b7e135';
    $request->projectId = '84f7ae12-c689-41f8-ace1-157172305377';

    $response = $sdk->projectApi->unpublishIteration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationForm

Update a specific iteration.

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
    $request->iterationInput->name = 'Sylvester Wilkinson';
    $request->trainingKey = 'cupiditate';
    $request->iterationId = 'df975e35-6686-4092-a9c3-ddc5f111dea1';
    $request->projectId = '026d541a-4d19-40fe-b217-80bccc0dbbdd';

    $response = $sdk->projectApi->updateIterationForm($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationJson

Update a specific iteration.

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
    $request->iterationInput->name = 'Clifford Langworth';
    $request->trainingKey = 'doloremque';
    $request->iterationId = '8fb4e391-e6bc-4158-84c4-e54599ea3422';
    $request->projectId = '60e9b200-ce78-4a1b-98fb-7a0a116ce723';

    $response = $sdk->projectApi->updateIterationJson($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIterationRaw

Update a specific iteration.

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
    $request->requestBody = 'possimus';
    $request->trainingKey = 'quaerat';
    $request->iterationId = '097fa30e-9af7-425b-a912-2030d83f5aeb';
    $request->projectId = '7799d22e-8c1f-4849-b825-fdc42c876c2c';

    $response = $sdk->projectApi->updateIterationRaw($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectForm

Update a specific project.

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
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectFormRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'consequuntur';
    $request->projectInput->name = 'Brendan Pollich';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = 'c1c76230-f841-4fb1-bd23-fdb14db6be5a';
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::DOCKER_FILE,
        ProjectSettingsTargetExportPlatformsEnum::TENSOR_FLOW,
    ];
    $request->trainingKey = 'excepturi';
    $request->projectId = '98e22ae2-0da1-46fc-ab27-1a289c57e854';

    $response = $sdk->projectApi->updateProjectForm($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectJson

Update a specific project.

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
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectJsonRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'recusandae';
    $request->projectInput->name = 'Jeffrey Gutmann';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = '22246569-4624-4070-84f7-ab37cef02225';
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::DOCKER_FILE,
    ];
    $request->trainingKey = 'labore';
    $request->projectId = 'db55410a-dc66-49af-90a2-6c7cdc981f06';

    $response = $sdk->projectApi->updateProjectJson($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectRaw

Update a specific project.

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
    $request->requestBody = 'laudantium';
    $request->trainingKey = 'unde';
    $request->projectId = '81d6bb33-cfaa-4348-831b-f407ee4fcf0c';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
