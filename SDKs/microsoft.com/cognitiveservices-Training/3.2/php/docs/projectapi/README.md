# projectApi

### Available Operations

* [createProject](#createproject) - Create a project.
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project.
* [deleteProject](#deleteproject) - Delete a specific project.
* [exportIteration](#exportiteration) - Export a trained iteration.
* [exportProject](#exportproject) - Exports a project.
* [getExports](#getexports) - Get the list of exports for a specific iteration.
* [getImagePerformanceCount](#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [getImagePerformances](#getimageperformances) - Get image with its prediction for a given project iteration.
* [getIteration](#getiteration) - Get a specific iteration.
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about an iteration.
* [getIterations](#getiterations) - Get iterations for the project.
* [getProject](#getproject) - Get a specific project.
* [getProjects](#getprojects) - Get your projects.
* [importProject](#importproject) - Imports a project.
* [publishIteration](#publishiteration) - Publish a specific iteration.
* [trainProjectForm](#trainprojectform) - Queues project for training.
* [trainProjectJson](#trainprojectjson) - Queues project for training.
* [trainProjectRaw](#trainprojectraw) - Queues project for training.
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->classificationType = CreateProjectClassificationTypeEnum::MULTILABEL;
    $request->description = 'perferendis';
    $request->domainId = 'a97ff334-cddf-4857-a9e6-1876c6ab21d2';
    $request->name = 'Clint Wiegand';
    $request->targetExportPlatforms = [
        CreateProjectTargetExportPlatformsEnum::VAIDK,
        CreateProjectTargetExportPlatformsEnum::TENSOR_FLOW,
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIterationRequest();
    $request->iterationId = 'fecd7993-9006-46a6-92d0-00355338cec0';
    $request->projectId = '86fa21e9-152c-4b31-9916-7b8e3c8db034';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->projectId = '08d6d364-ffd4-4559-86d1-263d48e935c2';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationFlavorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportIterationPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportIterationRequest();
    $request->flavor = ExportIterationFlavorEnum::TENSOR_FLOW_NORMAL;
    $request->iterationId = '9e81f30b-e3e4-4320-ad72-165765066418';
    $request->platform = ExportIterationPlatformEnum::DOCKER_FILE;
    $request->projectId = '0d9d21f9-ad03-40c4-acc1-1a0836429068';

    $response = $sdk->projectApi->exportIteration($request);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportProject

Exports a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportProjectRequest();
    $request->projectId = 'b8502a55-e7f7-43bc-845e-320a319f4bad';

    $response = $sdk->projectApi->exportProject($request);

    if ($response->projectExport !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportsRequest();
    $request->iterationId = 'f947c9a8-67bc-4424-a666-5816ddca8ef5';
    $request->projectId = '1fcb4c59-3ec1-42cd-aad0-ec7afedbd80d';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformanceCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePerformanceCountRequest();
    $request->iterationId = 'f448a47f-9390-4c58-8809-83dabf9ef3ff';
    $request->projectId = 'dd9f7f07-9af4-4d35-b24c-db0f4d281187';
    $request->tagIds = [
        '56844ede-d85a-4906-9e62-8bdfc2032b6c',
        '879923b7-e135-484f-bae1-2c6891f82ce1',
        '15717230-5377-4dcf-a89d-f975e3566860',
        '92e9c3dd-c5f1-411d-aa10-26d541a4d190',
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImagePerformancesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagePerformancesRequest();
    $request->iterationId = 'feb21780-bccc-40db-bddb-484708fb4e39';
    $request->orderBy = GetImagePerformancesOrderByEnum::NEWEST;
    $request->projectId = 'e6bc158c-4c4e-4545-99ea-342260e9b200';
    $request->skip = 773262;
    $request->tagIds = [
        '78a1bd8f-b7a0-4a11-ace7-23d4097fa30e',
        '9af725b2-9122-4030-983f-5aeb7799d22e',
        '8c1f8493-825f-4dc4-ac87-6c2c2dfb4cfc',
        '1c76230f-841f-4b1b-923f-db14db6be5a6',
    ];
    $request->take = 516363;

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationRequest();
    $request->iterationId = '5998e22a-e20d-4a16-bc2b-271a289c57e8';
    $request->projectId = '54e90439-d222-4465-a946-2407084f7ab3';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationPerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationPerformanceRequest();
    $request->iterationId = '7cef0222-5194-4db5-9410-adc669af90a2';
    $request->overlapThreshold = 4218.82;
    $request->projectId = 'c7cdc981-f068-4981-96bb-33cfaa348c31';
    $request->threshold = 7217.23;

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIterationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIterationsRequest();
    $request->projectId = 'f407ee4f-cf0c-442b-b8f1-5626398a0dc7';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->projectId = '66324ccb-06c8-4ca1-ad02-529270b8d572';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->projectApi->getProjects();

    if ($response->projects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importProject

Imports a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportProjectRequest();
    $request->token = 'aspernatur';

    $response = $sdk->projectApi->importProject($request);

    if ($response->project !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishIterationRequest();
    $request->iterationId = 'dd895b8b-cf24-4db9-9969-3352f7453399';
    $request->predictionId = 'numquam';
    $request->projectId = 'd78de3b6-e938-49f5-abb7-f662550a2838';
    $request->publishName = 'qui';

    $response = $sdk->projectApi->publishIteration($request);

    if ($response->publishIteration200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trainProjectForm

Queues project for training.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrainingParameters;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectFormTrainingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainProjectFormRequest();
    $request->trainingParameters = new TrainingParameters();
    $request->trainingParameters->selectedTags = [
        'c483afd2-315b-4ba6-9016-4e06f5bf6ae5',
        '91bc8bde-f361-42b6-bc20-5fda840774a6',
        '8a9a35d0-86b6-4f66-bef0-20e9f443b425',
    ];
    $request->forceTrain = false;
    $request->notificationEmailAddress = 'nihil';
    $request->projectId = 'b992c8db-da6a-461e-ba21-98258fd0a9eb';
    $request->reservedBudgetInHours = 658544;
    $request->trainingType = TrainProjectFormTrainingTypeEnum::REGULAR;

    $response = $sdk->projectApi->trainProjectForm($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trainProjectJson

Queues project for training.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TrainingParameters;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectJsonTrainingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainProjectJsonRequest();
    $request->trainingParameters = new TrainingParameters();
    $request->trainingParameters->selectedTags = [
        'f7d3ef04-9640-4d6a-9831-c87adf596fdf',
        '1ad837ae-80c1-4c19-895b-a998678fa3f6',
    ];
    $request->forceTrain = false;
    $request->notificationEmailAddress = 'sint';
    $request->projectId = '6991af38-8ce0-4361-8448-c7977a0ef2f5';
    $request->reservedBudgetInHours = 217552;
    $request->trainingType = TrainProjectJsonTrainingTypeEnum::REGULAR;

    $response = $sdk->projectApi->trainProjectJson($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trainProjectRaw

Queues project for training.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\TrainProjectRawTrainingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainProjectRawRequest();
    $request->requestBody = 'doloremque';
    $request->forceTrain = false;
    $request->notificationEmailAddress = 'sed';
    $request->projectId = '8efeef93-4152-4ed7-a253-f4c157deaa71';
    $request->reservedBudgetInHours = 451926;
    $request->trainingType = TrainProjectRawTrainingTypeEnum::REGULAR;

    $response = $sdk->projectApi->trainProjectRaw($request);

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishIterationRequest();
    $request->iterationId = 'f445accf-667a-4af9-bbad-185fe431d6bf';
    $request->projectId = '5c838fbb-8c20-4cb6-bfc4-b425e99e6234';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\IterationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationFormRequest();
    $request->iterationInput = new IterationInput();
    $request->iterationInput->name = 'Tracy Witting';
    $request->iterationId = '79dfeb77-a5c3-48d4-baf9-1e506ef890a5';
    $request->projectId = '4b475f16-f56d-4385-a3c4-ac631b99e26c';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\IterationInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationJsonRequest();
    $request->iterationInput = new IterationInput();
    $request->iterationInput->name = 'Nicolas Labadie';
    $request->iterationId = 'fdb9410f-63bb-4f81-b837-b01afdd78862';
    $request->projectId = '4189eb44-873f-4503-bf19-dbf125ce4152';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIterationRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIterationRawRequest();
    $request->requestBody = 'itaque';
    $request->iterationId = 'ab9cd7e5-224a-46a0-a123-b7847ec59e1f';
    $request->projectId = '67f3c4cc-e4b6-4d76-96ff-3c5747501357';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageProcessingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectFormRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'officiis';
    $request->projectInput->name = 'Danielle Wunsch DVM';
    $request->projectInput->settings = new ProjectSettingsInput();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = 'b084c319-7e19-43a2-8546-7f94874c2d5c';
    $request->projectInput->settings->imageProcessingSettings = new ImageProcessingSettings();
    $request->projectInput->settings->imageProcessingSettings->augmentationMethods = [
        'labore' => false,
        'perspiciatis' => false,
        'ducimus' => false,
        'qui' => false,
    ];
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::TENSOR_FLOW,
    ];
    $request->projectInput->status = ProjectStatusEnum::SUCCEEDED;
    $request->projectId = 'e66bd8fe-5d00-4b97-9ef2-0387320590cc';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageProcessingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectJsonRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'quo';
    $request->projectInput->name = 'Sandra Mertz';
    $request->projectInput->settings = new ProjectSettingsInput();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTICLASS;
    $request->projectInput->settings->domainId = '0313b3e5-044f-465f-a72d-c4077d0cc3f4';
    $request->projectInput->settings->imageProcessingSettings = new ImageProcessingSettings();
    $request->projectInput->settings->imageProcessingSettings->augmentationMethods = [
        'corrupti' => false,
    ];
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::VAIDK,
        ProjectSettingsTargetExportPlatformsEnum::ONNX,
        ProjectSettingsTargetExportPlatformsEnum::CORE_ML,
        ProjectSettingsTargetExportPlatformsEnum::TENSOR_FLOW,
    ];
    $request->projectInput->status = ProjectStatusEnum::FAILED;
    $request->projectId = 'eb4d6e1e-ae0f-475a-adf2-acab58b991c9';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRawRequest();
    $request->requestBody = 'sed';
    $request->projectId = '6ddb5894-61e7-4421-8be6-d9502f0ea930';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
