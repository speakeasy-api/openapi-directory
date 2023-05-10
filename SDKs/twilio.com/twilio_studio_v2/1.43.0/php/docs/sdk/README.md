# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createExecution](#createexecution) - Triggers a new Execution for the Flow
* [createFlow](#createflow) - Create a Flow.
* [deleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](#deleteflow) - Delete a specific Flow.
* [fetchExecution](#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](#fetchflow) - Retrieve a specific Flow.
* [fetchFlowRevision](#fetchflowrevision) - Retrieve a specific Flow revision.
* [fetchTestUser](#fetchtestuser) - Fetch flow test users
* [listExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](#listflow) - Retrieve a list of all Flows.
* [listFlowRevision](#listflowrevision) - Retrieve a list of all Flows revisions.
* [updateExecution](#updateexecution) - Update the status of an Execution to `ended`.
* [updateFlow](#updateflow) - Update a Flow.
* [updateFlowValidate](#updateflowvalidate) - Validate flow JSON definition
* [updateTestUser](#updatetestuser) - Update flow test users

## createExecution

Triggers a new Execution for the Flow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionCreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExecutionRequest();
    $request->flowSid = 'unde';
    $request->requestBody = new CreateExecutionCreateExecutionRequest();
    $request->requestBody->from = 'nulla';
    $request->requestBody->parameters = 'corrupti';
    $request->requestBody->to = 'illum';

    $requestSecurity = new CreateExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createExecution($request, $requestSecurity);

    if ($response->studioV2FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFlow

Create a Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowCreateFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlowEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlowCreateFlowRequest();
    $request->commitMessage = 'vel';
    $request->definition = 'error';
    $request->friendlyName = 'deserunt';
    $request->status = FlowEnumStatusEnum::DRAFT;

    $requestSecurity = new CreateFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFlow($request, $requestSecurity);

    if ($response->studioV2Flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExecution

Delete the Execution and all Steps relating to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExecutionRequest();
    $request->flowSid = 'iure';
    $request->sid = 'magnam';

    $requestSecurity = new DeleteExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteExecution($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFlow

Delete a specific Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlowRequest();
    $request->sid = 'debitis';

    $requestSecurity = new DeleteFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFlow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExecution

Retrieve an Execution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExecutionRequest();
    $request->flowSid = 'ipsa';
    $request->sid = 'delectus';

    $requestSecurity = new FetchExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecution($request, $requestSecurity);

    if ($response->studioV2FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExecutionContext

Retrieve the most recent context for an Execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionContextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExecutionContextRequest();
    $request->executionSid = 'tempora';
    $request->flowSid = 'suscipit';

    $requestSecurity = new FetchExecutionContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionContext($request, $requestSecurity);

    if ($response->studioV2FlowExecutionExecutionContext !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExecutionStep

Retrieve a Step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionStepSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExecutionStepRequest();
    $request->executionSid = 'molestiae';
    $request->flowSid = 'minus';
    $request->sid = 'placeat';

    $requestSecurity = new FetchExecutionStepSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionStep($request, $requestSecurity);

    if ($response->studioV2FlowExecutionExecutionStep !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExecutionStepContext

Retrieve the context for an Execution Step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionStepContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExecutionStepContextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExecutionStepContextRequest();
    $request->executionSid = 'voluptatum';
    $request->flowSid = 'iusto';
    $request->stepSid = 'excepturi';

    $requestSecurity = new FetchExecutionStepContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionStepContext($request, $requestSecurity);

    if ($response->studioV2FlowExecutionExecutionStepExecutionStepContext !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFlow

Retrieve a specific Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFlowRequest();
    $request->sid = 'nisi';

    $requestSecurity = new FetchFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFlow($request, $requestSecurity);

    if ($response->studioV2Flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFlowRevision

Retrieve a specific Flow revision.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlowRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlowRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFlowRevisionRequest();
    $request->revision = 'recusandae';
    $request->sid = 'temporibus';

    $requestSecurity = new FetchFlowRevisionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFlowRevision($request, $requestSecurity);

    if ($response->studioV2FlowFlowRevision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTestUser

Fetch flow test users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTestUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTestUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTestUserRequest();
    $request->sid = 'ab';

    $requestSecurity = new FetchTestUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTestUser($request, $requestSecurity);

    if ($response->studioV2FlowTestUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecution

Retrieve a list of all Executions for the Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutionRequest();
    $request->dateCreatedFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->dateCreatedTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T05:46:24.151Z');
    $request->flowSid = 'ipsam';
    $request->page = 832620;
    $request->pageSize = 957156;
    $request->pageToken = 'quo';

    $requestSecurity = new ListExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listExecution($request, $requestSecurity);

    if ($response->listExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutionStep

Retrieve a list of all Steps for an Execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionStepSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutionStepRequest();
    $request->executionSid = 'odit';
    $request->flowSid = 'at';
    $request->page = 870088;
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';

    $requestSecurity = new ListExecutionStepSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listExecutionStep($request, $requestSecurity);

    if ($response->listExecutionStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlow

Retrieve a list of all Flows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlowRequest();
    $request->page = 799159;
    $request->pageSize = 800911;
    $request->pageToken = 'esse';

    $requestSecurity = new ListFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFlow($request, $requestSecurity);

    if ($response->listFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlowRevision

Retrieve a list of all Flows revisions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFlowRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlowRevisionRequest();
    $request->page = 520478;
    $request->pageSize = 780529;
    $request->pageToken = 'dolorum';
    $request->sid = 'dicta';

    $requestSecurity = new ListFlowRevisionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFlowRevision($request, $requestSecurity);

    if ($response->listFlowRevisionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExecution

Update the status of an Execution to `ended`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExecutionUpdateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExecutionRequest();
    $request->flowSid = 'nam';
    $request->requestBody = new UpdateExecutionUpdateExecutionRequest();
    $request->requestBody->status = ExecutionEnumStatusEnum::ENDED;
    $request->sid = 'occaecati';

    $requestSecurity = new UpdateExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateExecution($request, $requestSecurity);

    if ($response->studioV2FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFlow

Update a Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowUpdateFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlowEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlowRequest();
    $request->requestBody = new UpdateFlowUpdateFlowRequest();
    $request->requestBody->commitMessage = 'fugit';
    $request->requestBody->definition = 'deleniti';
    $request->requestBody->friendlyName = 'hic';
    $request->requestBody->status = FlowEnumStatusEnum::PUBLISHED;
    $request->sid = 'totam';

    $requestSecurity = new UpdateFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFlow($request, $requestSecurity);

    if ($response->studioV2Flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFlowValidate

Validate flow JSON definition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowValidateUpdateFlowValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlowValidateEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlowValidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlowValidateUpdateFlowValidateRequest();
    $request->commitMessage = 'beatae';
    $request->definition = 'commodi';
    $request->friendlyName = 'molestiae';
    $request->status = FlowValidateEnumStatusEnum::DRAFT;

    $requestSecurity = new UpdateFlowValidateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFlowValidate($request, $requestSecurity);

    if ($response->studioV2FlowValidate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTestUser

Update flow test users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestUserUpdateTestUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTestUserRequest();
    $request->requestBody = new UpdateTestUserUpdateTestUserRequest();
    $request->requestBody->testUsers = [
        'impedit',
    ];
    $request->sid = 'cum';

    $requestSecurity = new UpdateTestUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTestUser($request, $requestSecurity);

    if ($response->studioV2FlowTestUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
