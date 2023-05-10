# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createEngagement](#createengagement) - Triggers a new Engagement for the Flow
* [createExecution](#createexecution) - Triggers a new Execution for the Flow
* [deleteEngagement](#deleteengagement) - Delete this Engagement and all Steps relating to it.
* [deleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](#deleteflow) - Delete a specific Flow.
* [fetchEngagement](#fetchengagement) - Retrieve an Engagement
* [fetchEngagementContext](#fetchengagementcontext) - Retrieve the most recent context for an Engagement.
* [fetchExecution](#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](#fetchflow) - Retrieve a specific Flow.
* [fetchStep](#fetchstep) - Retrieve a Step.
* [fetchStepContext](#fetchstepcontext) - Retrieve the context for an Engagement Step.
* [listEngagement](#listengagement) - Retrieve a list of all Engagements for the Flow.
* [listExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](#listflow) - Retrieve a list of all Flows.
* [listStep](#liststep) - Retrieve a list of all Steps for an Engagement.
* [updateExecution](#updateexecution) - Update the status of an Execution to `ended`.

## createEngagement

Triggers a new Engagement for the Flow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementCreateEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEngagementRequest();
    $request->flowSid = 'unde';
    $request->requestBody = new CreateEngagementCreateEngagementRequest();
    $request->requestBody->from = 'nulla';
    $request->requestBody->parameters = 'corrupti';
    $request->requestBody->to = 'illum';

    $requestSecurity = new CreateEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEngagement($request, $requestSecurity);

    if ($response->studioV1FlowEngagement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->flowSid = 'vel';
    $request->requestBody = new CreateExecutionCreateExecutionRequest();
    $request->requestBody->from = 'error';
    $request->requestBody->parameters = 'deserunt';
    $request->requestBody->to = 'suscipit';

    $requestSecurity = new CreateExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createExecution($request, $requestSecurity);

    if ($response->studioV1FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEngagement

Delete this Engagement and all Steps relating to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEngagementRequest();
    $request->flowSid = 'iure';
    $request->sid = 'magnam';

    $requestSecurity = new DeleteEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteEngagement($request, $requestSecurity);

    if ($response->statusCode === 200) {
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
    $request->flowSid = 'debitis';
    $request->sid = 'ipsa';

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
    $request->sid = 'delectus';

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

## fetchEngagement

Retrieve an Engagement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEngagementRequest();
    $request->flowSid = 'tempora';
    $request->sid = 'suscipit';

    $requestSecurity = new FetchEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEngagement($request, $requestSecurity);

    if ($response->studioV1FlowEngagement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEngagementContext

Retrieve the most recent context for an Engagement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEngagementContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEngagementContextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEngagementContextRequest();
    $request->engagementSid = 'molestiae';
    $request->flowSid = 'minus';

    $requestSecurity = new FetchEngagementContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEngagementContext($request, $requestSecurity);

    if ($response->studioV1FlowEngagementEngagementContext !== null) {
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
    $request->flowSid = 'placeat';
    $request->sid = 'voluptatum';

    $requestSecurity = new FetchExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecution($request, $requestSecurity);

    if ($response->studioV1FlowExecution !== null) {
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
    $request->executionSid = 'iusto';
    $request->flowSid = 'excepturi';

    $requestSecurity = new FetchExecutionContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionContext($request, $requestSecurity);

    if ($response->studioV1FlowExecutionExecutionContext !== null) {
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
    $request->executionSid = 'nisi';
    $request->flowSid = 'recusandae';
    $request->sid = 'temporibus';

    $requestSecurity = new FetchExecutionStepSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionStep($request, $requestSecurity);

    if ($response->studioV1FlowExecutionExecutionStep !== null) {
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
    $request->executionSid = 'ab';
    $request->flowSid = 'quis';
    $request->stepSid = 'veritatis';

    $requestSecurity = new FetchExecutionStepContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExecutionStepContext($request, $requestSecurity);

    if ($response->studioV1FlowExecutionExecutionStepExecutionStepContext !== null) {
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
    $request->sid = 'deserunt';

    $requestSecurity = new FetchFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFlow($request, $requestSecurity);

    if ($response->studioV1Flow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchStep

Retrieve a Step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchStepSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchStepRequest();
    $request->engagementSid = 'perferendis';
    $request->flowSid = 'ipsam';
    $request->sid = 'repellendus';

    $requestSecurity = new FetchStepSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchStep($request, $requestSecurity);

    if ($response->studioV1FlowEngagementStep !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchStepContext

Retrieve the context for an Engagement Step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchStepContextRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchStepContextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchStepContextRequest();
    $request->engagementSid = 'sapiente';
    $request->flowSid = 'quo';
    $request->stepSid = 'odit';

    $requestSecurity = new FetchStepContextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchStepContext($request, $requestSecurity);

    if ($response->studioV1FlowEngagementStepStepContext !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEngagement

Retrieve a list of all Engagements for the Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEngagementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEngagementRequest();
    $request->flowSid = 'at';
    $request->page = 870088;
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';

    $requestSecurity = new ListEngagementSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEngagement($request, $requestSecurity);

    if ($response->listEngagementResponse !== null) {
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
    $request->dateCreatedFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->dateCreatedTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T00:37:01.696Z');
    $request->flowSid = 'porro';
    $request->page = 678880;
    $request->pageSize = 118274;
    $request->pageToken = 'nam';

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
    $request->executionSid = 'officia';
    $request->flowSid = 'occaecati';
    $request->page = 143353;
    $request->pageSize = 537373;
    $request->pageToken = 'hic';

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
    $request->page = 758616;
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';

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

## listStep

Retrieve a list of all Steps for an Engagement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStepSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStepRequest();
    $request->engagementSid = 'commodi';
    $request->flowSid = 'molestiae';
    $request->page = 264555;
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';

    $requestSecurity = new ListStepSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listStep($request, $requestSecurity);

    if ($response->listStepResponse !== null) {
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
    $request->flowSid = 'cum';
    $request->requestBody = new UpdateExecutionUpdateExecutionRequest();
    $request->requestBody->status = ExecutionEnumStatusEnum::ACTIVE;
    $request->sid = 'ipsum';

    $requestSecurity = new UpdateExecutionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateExecution($request, $requestSecurity);

    if ($response->studioV1FlowExecution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
