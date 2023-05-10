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
    $request->trainingKey = 'iure';
    $request->classificationType = CreateProjectClassificationTypeEnum::MULTILABEL;
    $request->description = 'est';
    $request->domainId = '21e9152c-b311-4916-bb8e-3c8db03408d6';
    $request->name = 'Vincent Hodkiewicz';
    $request->targetExportPlatforms = [
        CreateProjectTargetExportPlatformsEnum::VAIDK,
        CreateProjectTargetExportPlatformsEnum::TENSOR_FLOW,
        CreateProjectTargetExportPlatformsEnum::TENSOR_FLOW,
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
use \OpenAPI\OpenAPI\Models\Operations\DeleteIterationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIterationRequest();
    $request->trainingKey = 'perspiciatis';
    $request->iterationId = '06d1263d-48e9-435c-ac9e-81f30be3e432';
    $request->projectId = '02d72165-7650-4664-9870-d9d21f9ad030';

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
    $request->trainingKey = 'optio';
    $request->projectId = '4ecc11a0-8364-4290-a8b8-502a55e7f73b';

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
    $request->trainingKey = 'quisquam';
    $request->flavor = ExportIterationFlavorEnum::ONNX12;
    $request->iterationId = '45e320a3-19f4-4bad-b947-c9a867bc4242';
    $request->platform = ExportIterationPlatformEnum::DOCKER_FILE;
    $request->projectId = '665816dd-ca8e-4f51-bcb4-c593ec12cdaa';

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
    $request->trainingKey = 'quibusdam';
    $request->iterationId = '0ec7afed-bd80-4df4-88a4-7f9390c58880';
    $request->projectId = '983dabf9-ef3f-4fdd-9f7f-079af4d35724';

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
    $request->trainingKey = 'porro';
    $request->iterationId = 'db0f4d28-1187-4d56-844e-ded85a9065e6';
    $request->projectId = '28bdfc20-32b6-4c87-9923-b7e13584f7ae';
    $request->tagIds = [
        '2c6891f8-2ce1-4157-9723-05377dcfa89d',
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
    $request->trainingKey = 'doloribus';
    $request->iterationId = '975e3566-8609-42e9-83dd-c5f111dea102';
    $request->orderBy = GetImagePerformancesOrderByEnum::NEWEST;
    $request->projectId = 'd541a4d1-90fe-4b21-b80b-ccc0dbbddb48';
    $request->skip = 272635;
    $request->tagIds = [
        '08fb4e39-1e6b-4c15-8c4c-4e54599ea342',
        '260e9b20-0ce7-48a1-bd8f-b7a0a116ce72',
    ];
    $request->take = 188782;

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
    $request->trainingKey = 'possimus';
    $request->iterationId = '4097fa30-e9af-4725-b291-22030d83f5ae';
    $request->projectId = 'b7799d22-e8c1-4f84-9382-5fdc42c876c2';

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
    $request->trainingKey = 'minus';
    $request->iterationId = '2dfb4cfc-1c76-4230-b841-fb1bd23fdb14';
    $request->overlapThreshold = 8667.03;
    $request->projectId = 'b6be5a68-5998-4e22-ae20-da16fc2b271a';
    $request->threshold = 1498.15;

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
    $request->trainingKey = 'blanditiis';
    $request->projectId = '9c57e854-e904-439d-a224-656946240708';

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
    $request->trainingKey = 'tempora';
    $request->projectId = 'f7ab37ce-f022-4251-94db-55410adc669a';

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
    $request->trainingKey = 'doloribus';

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
    $request->trainingKey = 'provident';
    $request->iterationId = '0a26c7cd-c981-4f06-8981-d6bb33cfaa34';
    $request->predictionId = 'laudantium';
    $request->projectId = 'c31bf407-ee4f-4cf0-842b-78f15626398a';
    $request->publishName = 'perferendis';

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
    $request->trainingKey = 'quibusdam';
    $request->forceTrain = false;
    $request->notificationEmailAddress = 'impedit';
    $request->projectId = '766324cc-b06c-48ca-92d0-2529270b8d57';
    $request->reservedBudgetInHours = 143253;
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
    $request->trainingKey = 'at';
    $request->iterationId = 'd895b8bc-f24d-4b95-9693-352f74533994';
    $request->projectId = 'd78de3b6-e938-49f5-abb7-f662550a2838';

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
    $request->iterationInput->name = 'Iris Roob';
    $request->trainingKey = 'dolor';
    $request->iterationId = 'afd2315b-ba65-4016-8e06-f5bf6ae591bc';
    $request->projectId = '8bdef361-2b63-4c20-9fda-840774a68a9a';

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
    $request->iterationInput->name = 'Ms. Lauren Stamm';
    $request->trainingKey = 'expedita';
    $request->iterationId = '6f66fef0-20e9-4f44-bb42-57b992c8dbda';
    $request->projectId = '6a61efa2-1982-458f-90a9-eba47f7d3ef0';

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
    $request->requestBody = 'quaerat';
    $request->trainingKey = 'excepturi';
    $request->iterationId = '640d6a18-31c8-47ad-b596-fdf1ad837ae8';
    $request->projectId = '0c1c19c9-5ba9-4986-b8fa-3f696991af38';

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
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageProcessingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectFormRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'molestias';
    $request->projectInput->name = 'Cornelius Beatty';
    $request->projectInput->settings = new ProjectSettingsInput();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTICLASS;
    $request->projectInput->settings->domainId = '4448c797-7a0e-4f2f-9360-28efeef93415';
    $request->projectInput->settings->imageProcessingSettings = new ImageProcessingSettings();
    $request->projectInput->settings->imageProcessingSettings->augmentationMethods = [
        'necessitatibus' => false,
    ];
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::DOCKER_FILE,
        ProjectSettingsTargetExportPlatformsEnum::VAIDK,
        ProjectSettingsTargetExportPlatformsEnum::CORE_ML,
        ProjectSettingsTargetExportPlatformsEnum::TENSOR_FLOW,
    ];
    $request->trainingKey = 'non';
    $request->projectId = 'f4c157de-aa71-470f-845a-ccf667aaf9bb';

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
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageProcessingSettings;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSettingsTargetExportPlatformsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectJsonRequest();
    $request->projectInput = new ProjectInput();
    $request->projectInput->description = 'culpa';
    $request->projectInput->name = 'Dennis Littel';
    $request->projectInput->settings = new ProjectSettingsInput();
    $request->projectInput->settings->classificationType = ProjectSettingsClassificationTypeEnum::MULTILABEL;
    $request->projectInput->settings->domainId = '431d6bf5-c838-4fbb-8c20-cb67fc4b425e';
    $request->projectInput->settings->imageProcessingSettings = new ImageProcessingSettings();
    $request->projectInput->settings->imageProcessingSettings->augmentationMethods = [
        'occaecati' => false,
        'debitis' => false,
        'laboriosam' => false,
    ];
    $request->projectInput->settings->targetExportPlatforms = [
        ProjectSettingsTargetExportPlatformsEnum::TENSOR_FLOW,
    ];
    $request->trainingKey = 'incidunt';
    $request->projectId = 'c9f7b79d-feb7-47a5-838d-4baf91e506ef';

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
    $request->requestBody = 'deleniti';
    $request->trainingKey = 'provident';
    $request->projectId = '0a54b475-f16f-456d-b85a-3c4ac631b99e';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
