# projectApi

### Available Operations

* [createProject](#createproject) - Create a project
* [deleteIteration](#deleteiteration) - Delete a specific iteration of a project
* [deleteProject](#deleteproject) - Delete a specific project
* [exportIteration](#exportiteration) - Export a trained iteration
* [getExports](#getexports) - Get the list of exports for a specific iteration
* [getIteration](#getiteration) - Get a specific iteration
* [getIterationPerformance](#getiterationperformance) - Get detailed performance information about a trained iteration
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
    $request->trainingKey = 'quis';
    $request->description = 'sint';
    $request->domainId = 'ecfef66e-f1ca-4a33-83c2-beb477373c8d';
    $request->name = 'Christina Wolf';

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
    $request->trainingKey = 'quibusdam';
    $request->iterationId = '1db1f2c4-3106-461e-9634-9e1cf9e06e3a';
    $request->projectId = '437000ae-6b6b-4c9b-8f75-9eac55a9741d';

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
    $request->trainingKey = 'consectetur';
    $request->projectId = '11352965-bb8a-4720-a611-435e139dbc22';

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
    $request->trainingKey = 'nostrum';
    $request->iterationId = '9b1abda8-c070-4e10-84cb-0672d1ad879e';
    $request->platform = 'necessitatibus';
    $request->projectId = 'b9665b85-efbd-402b-ae0b-e2d782259e3e';

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
    $request->trainingKey = 'similique';
    $request->iterationId = '4b5197f9-2443-4da7-8e52-b895c537c645';
    $request->projectId = '4efb0b34-896c-43ca-9acf-be2fd5707577';

    $response = $sdk->projectApi->getExports($request);

    if ($response->exports !== null) {
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
    $request->trainingKey = 'excepturi';
    $request->iterationId = '29177dea-c646-4ecb-9734-09e3eb1e5a2b';
    $request->projectId = '12eb07f1-16db-4995-85fc-95fa88970e18';

    $response = $sdk->projectApi->getIteration($request);

    if ($response->iteration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIterationPerformance

Get detailed performance information about a trained iteration

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
    $request->trainingKey = 'iste';
    $request->iterationId = 'dbb30fcb-33ea-4055-b197-cd44e2f52d82';
    $request->projectId = 'd3513bb6-f48b-4656-bcdb-35ff2e4b2753';
    $request->threshold = 4800.61;

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
    $request->trainingKey = 'est';
    $request->projectId = '8cd9e731-9c17-47d5-a5f7-7b114eeb52ff';

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
    $request->trainingKey = 'reprehenderit';
    $request->projectId = '85fc3781-4d4c-498e-8c2b-b89eb75dad63';

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
    $request->trainingKey = 'commodi';

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
    $request->trainingKey = 'impedit';
    $request->projectId = '600503d8-bb31-4180-b739-ae9e057eb809';

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
    $request->iterationInput->name = 'Mr. Craig Leannon';
    $request->trainingKey = 'dolor';
    $request->iterationId = '1f3981d4-c700-4b60-bf3c-93c73b9da3f2';
    $request->projectId = 'ceda7e23-f225-4741-9faf-4b7544e472e8';

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
    $request->iterationInput->name = 'Kathy Leuschke';
    $request->trainingKey = 'similique';
    $request->iterationId = '5b40463a-7d57-45f1-800e-764ad7334ec1';
    $request->projectId = 'b781b36a-0808-48d1-80ef-ada200ef0422';

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
    $request->requestBody = 'necessitatibus';
    $request->trainingKey = 'harum';
    $request->iterationId = '2164cf9a-b836-46c7-a3ff-da9e06bee482';
    $request->projectId = '5c1fc0e1-15c8-40bf-b918-544ec42defcc';

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
    $request->projectInput->description = 'accusamus';
    $request->projectInput->name = 'Abel Bergstrom';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->domainId = '7773e635-62a7-4b40-8f05-e3d48fdaf313';
    $request->trainingKey = 'similique';
    $request->projectId = '1f5fd942-59c0-4b36-b25e-a944f3b756c1';

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
    $request->projectInput->description = 'beatae';
    $request->projectInput->name = 'Charlie Schaefer';
    $request->projectInput->settings = new ProjectSettings();
    $request->projectInput->settings->domainId = 'a5126243-835b-4bc0-9a23-a45cefc5fde1';
    $request->trainingKey = 'alias';
    $request->projectId = 'a0ce2169-e510-4019-86dc-5e34762799bf';

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
    $request->requestBody = 'facilis';
    $request->trainingKey = 'quidem';
    $request->projectId = 'e6949fb2-bb4e-4cae-ac3d-5db3adebd5da';

    $response = $sdk->projectApi->updateProjectRaw($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
