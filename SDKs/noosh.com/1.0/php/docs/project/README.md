# project

### Available Operations

* [attachProjectJson](#attachprojectjson) - Attach children projects to specific Project
* [attachProjectRaw](#attachprojectraw) - Attach children projects to specific Project
* [deleteProject](#deleteproject) - Archieve a specific Project
* [getProject](#getproject) - Get a specific Project
* [getProjectList](#getprojectlist) - List the projects
* [patchProjectJson](#patchprojectjson) - Patch a specific Project
* [patchProjectRaw](#patchprojectraw) - Patch a specific Project
* [postProjectJson](#postprojectjson) - Create a Project
* [postProjectRaw](#postprojectraw) - Create a Project
* [putProjectJson](#putprojectjson) - Update a specific Project
* [putProjectRaw](#putprojectraw) - Update a specific Project

## attachProjectJson

Attach children projects to specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AttachProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectIdListVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachProjectJsonRequest();
    $request->projectIdListVO = new ProjectIdListVO();
    $request->projectIdListVO->childProjectIds = [
        1,
        1,
        1,
    ];
    $request->projectId = 'doloribus';
    $request->workgroupId = 'sapiente';

    $response = $sdk->project->attachProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachProjectRaw

Attach children projects to specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AttachProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachProjectRawRequest();
    $request->requestBody = 'architecto';
    $request->projectId = 'mollitia';
    $request->workgroupId = 'dolorem';

    $response = $sdk->project->attachProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Archieve a specific Project

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
    $request->projectId = 'culpa';
    $request->workgroupId = 'consequuntur';

    $response = $sdk->project->deleteProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Get a specific Project

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
    $request->projectId = 'repellat';
    $request->workgroupId = 'mollitia';

    $response = $sdk->project->getProject($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectList

List the projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectListRequest();
    $request->workgroupId = 'occaecati';

    $response = $sdk->project->getProjectList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchProjectJson

Patch a specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectPatchPO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchProjectJsonRequest();
    $request->projectPatchPO = new ProjectPatchPO();
    $request->projectPatchPO->clientUserId = 1;
    $request->projectPatchPO->clientWorkgroupId = 1;
    $request->projectPatchPO->comments = 'sample comments';
    $request->projectPatchPO->completionDate = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->projectPatchPO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->projectPatchPO->deactivationReasonId = 1;
    $request->projectPatchPO->isActive = true;
    $request->projectPatchPO->isHot = true;
    $request->projectPatchPO->projectCategoryId = 1;
    $request->projectPatchPO->projectDescription = 'sample project_description';
    $request->projectPatchPO->projectName = 'sample project_name';
    $request->projectPatchPO->projectNumber = 'sample project_number';
    $request->projectPatchPO->projectStatusId = 1;
    $request->projectId = 'molestiae';
    $request->workgroupId = 'velit';

    $response = $sdk->project->patchProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchProjectRaw

Patch a specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchProjectRawRequest();
    $request->requestBody = 'error';
    $request->projectId = 'quia';
    $request->workgroupId = 'quis';

    $response = $sdk->project->patchProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectJson

Create a Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectJsonRequest();
    $request->projectPersistVO = new ProjectPersistVO();
    $request->projectPersistVO->clientAccount = 'sample client_account';
    $request->projectPersistVO->clientUserId = 1;
    $request->projectPersistVO->clientWorkgroupId = 1;
    $request->projectPersistVO->comments = 'sample comments';
    $request->projectPersistVO->completionDate = DateTime::createFromFormat('Y-m-d', '2022-04-29');
    $request->projectPersistVO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->projectPersistVO->deactivationReasonId = 1;
    $request->projectPersistVO->isActive = true;
    $request->projectPersistVO->isHot = true;
    $request->projectPersistVO->isPaperDirect = true;
    $request->projectPersistVO->projectCategoryId = 1;
    $request->projectPersistVO->projectDescription = 'sample project_description';
    $request->projectPersistVO->projectName = 'sample project_name';
    $request->projectPersistVO->projectNumber = 'sample project_number';
    $request->projectPersistVO->projectOwnerUserId = 1;
    $request->projectPersistVO->projectStatusId = 1;
    $request->workgroupId = 'enim';

    $response = $sdk->project->postProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProjectRaw

Create a Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProjectRawRequest();
    $request->requestBody = 'odit';
    $request->workgroupId = 'quo';

    $response = $sdk->project->postProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProjectJson

Update a specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProjectJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectPersistVO;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldPersistVO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProjectJsonRequest();
    $request->projectPersistVO = new ProjectPersistVO();
    $request->projectPersistVO->clientAccount = 'sample client_account';
    $request->projectPersistVO->clientUserId = 1;
    $request->projectPersistVO->clientWorkgroupId = 1;
    $request->projectPersistVO->comments = 'sample comments';
    $request->projectPersistVO->completionDate = DateTime::createFromFormat('Y-m-d', '2022-01-19');
    $request->projectPersistVO->customFields = [
        new CustomFieldPersistVO(),
        new CustomFieldPersistVO(),
    ];
    $request->projectPersistVO->deactivationReasonId = 1;
    $request->projectPersistVO->isActive = true;
    $request->projectPersistVO->isHot = true;
    $request->projectPersistVO->isPaperDirect = true;
    $request->projectPersistVO->projectCategoryId = 1;
    $request->projectPersistVO->projectDescription = 'sample project_description';
    $request->projectPersistVO->projectName = 'sample project_name';
    $request->projectPersistVO->projectNumber = 'sample project_number';
    $request->projectPersistVO->projectOwnerUserId = 1;
    $request->projectPersistVO->projectStatusId = 1;
    $request->projectId = 'id';
    $request->workgroupId = 'possimus';

    $response = $sdk->project->putProjectJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProjectRaw

Update a specific Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProjectRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProjectRawRequest();
    $request->requestBody = 'aut';
    $request->projectId = 'quasi';
    $request->workgroupId = 'error';

    $response = $sdk->project->putProjectRaw($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
