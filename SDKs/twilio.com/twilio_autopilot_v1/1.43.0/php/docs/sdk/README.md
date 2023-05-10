# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAssistant](#createassistant)
* [createField](#createfield)
* [createFieldType](#createfieldtype)
* [createFieldValue](#createfieldvalue)
* [createModelBuild](#createmodelbuild)
* [createQuery](#createquery)
* [createSample](#createsample)
* [createTask](#createtask)
* [createWebhook](#createwebhook)
* [deleteAssistant](#deleteassistant)
* [deleteField](#deletefield)
* [deleteFieldType](#deletefieldtype)
* [deleteFieldValue](#deletefieldvalue)
* [deleteModelBuild](#deletemodelbuild)
* [deleteQuery](#deletequery)
* [deleteSample](#deletesample)
* [deleteTask](#deletetask)
* [deleteWebhook](#deletewebhook)
* [fetchAssistant](#fetchassistant)
* [fetchDefaults](#fetchdefaults)
* [fetchDialogue](#fetchdialogue)
* [fetchField](#fetchfield)
* [fetchFieldType](#fetchfieldtype)
* [fetchFieldValue](#fetchfieldvalue)
* [fetchModelBuild](#fetchmodelbuild)
* [fetchQuery](#fetchquery)
* [fetchSample](#fetchsample)
* [fetchStyleSheet](#fetchstylesheet) - Returns Style sheet JSON object for the Assistant
* [fetchTask](#fetchtask)
* [fetchTaskActions](#fetchtaskactions) - Returns JSON actions for the Task.
* [fetchTaskStatistics](#fetchtaskstatistics)
* [fetchWebhook](#fetchwebhook)
* [listAssistant](#listassistant)
* [listField](#listfield)
* [listFieldType](#listfieldtype)
* [listFieldValue](#listfieldvalue)
* [listModelBuild](#listmodelbuild)
* [listQuery](#listquery)
* [listSample](#listsample)
* [listTask](#listtask)
* [listWebhook](#listwebhook)
* [updateAssistant](#updateassistant)
* [updateDefaults](#updatedefaults)
* [updateFieldType](#updatefieldtype)
* [updateModelBuild](#updatemodelbuild)
* [updateQuery](#updatequery)
* [updateRestoreAssistant](#updaterestoreassistant)
* [updateSample](#updatesample)
* [updateStyleSheet](#updatestylesheet) - Updates the style sheet for an Assistant identified by `assistant_sid`.
* [updateTask](#updatetask)
* [updateTaskActions](#updatetaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWebhook](#updatewebhook)

## createAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantCreateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssistantCreateAssistantRequest();
    $request->callbackEvents = 'error';
    $request->callbackUrl = 'https://high-hound.biz';
    $request->defaults = 'debitis';
    $request->friendlyName = 'ipsa';
    $request->logQueries = false;
    $request->styleSheet = 'delectus';
    $request->uniqueName = 'tempora';

    $requestSecurity = new CreateAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAssistant($request, $requestSecurity);

    if ($response->autopilotV1Assistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldCreateFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFieldRequest();
    $request->assistantSid = 'suscipit';
    $request->requestBody = new CreateFieldCreateFieldRequest();
    $request->requestBody->fieldType = 'molestiae';
    $request->requestBody->uniqueName = 'minus';
    $request->taskSid = 'placeat';

    $requestSecurity = new CreateFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createField($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldTypeCreateFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFieldTypeRequest();
    $request->assistantSid = 'voluptatum';
    $request->requestBody = new CreateFieldTypeCreateFieldTypeRequest();
    $request->requestBody->friendlyName = 'iusto';
    $request->requestBody->uniqueName = 'excepturi';

    $requestSecurity = new CreateFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFieldType($request, $requestSecurity);

    if ($response->autopilotV1AssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldValueCreateFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFieldValueRequest();
    $request->assistantSid = 'nisi';
    $request->fieldTypeSid = 'recusandae';
    $request->requestBody = new CreateFieldValueCreateFieldValueRequest();
    $request->requestBody->language = 'temporibus';
    $request->requestBody->synonymOf = 'ab';
    $request->requestBody->value = 'quis';

    $requestSecurity = new CreateFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFieldValue($request, $requestSecurity);

    if ($response->autopilotV1AssistantFieldTypeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelBuildCreateModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelBuildRequest();
    $request->assistantSid = 'veritatis';
    $request->requestBody = new CreateModelBuildCreateModelBuildRequest();
    $request->requestBody->statusCallback = 'https://agitated-friendship.net';
    $request->requestBody->uniqueName = 'sapiente';

    $requestSecurity = new CreateModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createModelBuild($request, $requestSecurity);

    if ($response->autopilotV1AssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueryCreateQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQueryRequest();
    $request->assistantSid = 'quo';
    $request->requestBody = new CreateQueryCreateQueryRequest();
    $request->requestBody->language = 'odit';
    $request->requestBody->modelBuild = 'at';
    $request->requestBody->query = 'at';
    $request->requestBody->tasks = 'maiores';

    $requestSecurity = new CreateQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createQuery($request, $requestSecurity);

    if ($response->autopilotV1AssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSampleCreateSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSampleRequest();
    $request->assistantSid = 'molestiae';
    $request->requestBody = new CreateSampleCreateSampleRequest();
    $request->requestBody->language = 'quod';
    $request->requestBody->sourceChannel = 'quod';
    $request->requestBody->taggedText = 'esse';
    $request->taskSid = 'totam';

    $requestSecurity = new CreateSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSample($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskCreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->assistantSid = 'porro';
    $request->requestBody = new CreateTaskCreateTaskRequest();
    $request->requestBody->actions = 'dolorum';
    $request->requestBody->actionsUrl = 'http://scaly-pathway.name';
    $request->requestBody->friendlyName = 'fugit';
    $request->requestBody->uniqueName = 'deleniti';

    $requestSecurity = new CreateTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createTask($request, $requestSecurity);

    if ($response->autopilotV1AssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookCreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->assistantSid = 'hic';
    $request->requestBody = new CreateWebhookCreateWebhookRequest();
    $request->requestBody->events = 'optio';
    $request->requestBody->uniqueName = 'totam';
    $request->requestBody->webhookMethod = 'beatae';
    $request->requestBody->webhookUrl = 'http://kosher-dipstick.biz';

    $requestSecurity = new CreateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWebhook($request, $requestSecurity);

    if ($response->autopilotV1AssistantWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssistantRequest();
    $request->sid = 'impedit';

    $requestSecurity = new DeleteAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAssistant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFieldRequest();
    $request->assistantSid = 'cum';
    $request->sid = 'esse';
    $request->taskSid = 'ipsum';

    $requestSecurity = new DeleteFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteField($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFieldTypeRequest();
    $request->assistantSid = 'excepturi';
    $request->sid = 'aspernatur';

    $requestSecurity = new DeleteFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFieldType($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFieldValueRequest();
    $request->assistantSid = 'perferendis';
    $request->fieldTypeSid = 'ad';
    $request->sid = 'natus';

    $requestSecurity = new DeleteFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFieldValue($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelBuildRequest();
    $request->assistantSid = 'sed';
    $request->sid = 'iste';

    $requestSecurity = new DeleteModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteModelBuild($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQueryRequest();
    $request->assistantSid = 'dolor';
    $request->sid = 'natus';

    $requestSecurity = new DeleteQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteQuery($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSampleRequest();
    $request->assistantSid = 'laboriosam';
    $request->sid = 'hic';
    $request->taskSid = 'saepe';

    $requestSecurity = new DeleteSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSample($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskRequest();
    $request->assistantSid = 'fuga';
    $request->sid = 'in';

    $requestSecurity = new DeleteTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->assistantSid = 'corporis';
    $request->sid = 'iste';

    $requestSecurity = new DeleteWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAssistantRequest();
    $request->sid = 'iure';

    $requestSecurity = new FetchAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAssistant($request, $requestSecurity);

    if ($response->autopilotV1Assistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDefaults

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDefaultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDefaultsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDefaultsRequest();
    $request->assistantSid = 'saepe';

    $requestSecurity = new FetchDefaultsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDefaults($request, $requestSecurity);

    if ($response->autopilotV1AssistantDefaults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDialogue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDialogueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDialogueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDialogueRequest();
    $request->assistantSid = 'quidem';
    $request->sid = 'architecto';

    $requestSecurity = new FetchDialogueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDialogue($request, $requestSecurity);

    if ($response->autopilotV1AssistantDialogue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFieldRequest();
    $request->assistantSid = 'ipsa';
    $request->sid = 'reiciendis';
    $request->taskSid = 'est';

    $requestSecurity = new FetchFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchField($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFieldTypeRequest();
    $request->assistantSid = 'mollitia';
    $request->sid = 'laborum';

    $requestSecurity = new FetchFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFieldType($request, $requestSecurity);

    if ($response->autopilotV1AssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFieldValueRequest();
    $request->assistantSid = 'dolores';
    $request->fieldTypeSid = 'dolorem';
    $request->sid = 'corporis';

    $requestSecurity = new FetchFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFieldValue($request, $requestSecurity);

    if ($response->autopilotV1AssistantFieldTypeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchModelBuildRequest();
    $request->assistantSid = 'explicabo';
    $request->sid = 'nobis';

    $requestSecurity = new FetchModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchModelBuild($request, $requestSecurity);

    if ($response->autopilotV1AssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchQueryRequest();
    $request->assistantSid = 'enim';
    $request->sid = 'omnis';

    $requestSecurity = new FetchQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchQuery($request, $requestSecurity);

    if ($response->autopilotV1AssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSampleRequest();
    $request->assistantSid = 'nemo';
    $request->sid = 'minima';
    $request->taskSid = 'excepturi';

    $requestSecurity = new FetchSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSample($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchStyleSheet

Returns Style sheet JSON object for the Assistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchStyleSheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchStyleSheetRequest();
    $request->assistantSid = 'accusantium';

    $requestSecurity = new FetchStyleSheetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchStyleSheet($request, $requestSecurity);

    if ($response->autopilotV1AssistantStyleSheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskRequest();
    $request->assistantSid = 'iure';
    $request->sid = 'culpa';

    $requestSecurity = new FetchTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTask($request, $requestSecurity);

    if ($response->autopilotV1AssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskActions

Returns JSON actions for the Task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskActionsRequest();
    $request->assistantSid = 'doloribus';
    $request->taskSid = 'sapiente';

    $requestSecurity = new FetchTaskActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskActions($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskTaskActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTaskStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTaskStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTaskStatisticsRequest();
    $request->assistantSid = 'architecto';
    $request->taskSid = 'mollitia';

    $requestSecurity = new FetchTaskStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTaskStatistics($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskTaskStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWebhookRequest();
    $request->assistantSid = 'dolorem';
    $request->sid = 'culpa';

    $requestSecurity = new FetchWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWebhook($request, $requestSecurity);

    if ($response->autopilotV1AssistantWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssistantRequest();
    $request->page = 161309;
    $request->pageSize = 995300;
    $request->pageToken = 'mollitia';

    $requestSecurity = new ListAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAssistant($request, $requestSecurity);

    if ($response->listAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFieldRequest();
    $request->assistantSid = 'occaecati';
    $request->page = 253291;
    $request->pageSize = 414369;
    $request->pageToken = 'quam';
    $request->taskSid = 'molestiae';

    $requestSecurity = new ListFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listField($request, $requestSecurity);

    if ($response->listFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFieldTypeRequest();
    $request->assistantSid = 'velit';
    $request->page = 623510;
    $request->pageSize = 158969;
    $request->pageToken = 'quis';

    $requestSecurity = new ListFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFieldType($request, $requestSecurity);

    if ($response->listFieldTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFieldValueRequest();
    $request->assistantSid = 'vitae';
    $request->fieldTypeSid = 'laborum';
    $request->language = 'animi';
    $request->page = 317202;
    $request->pageSize = 138183;
    $request->pageToken = 'quo';

    $requestSecurity = new ListFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFieldValue($request, $requestSecurity);

    if ($response->listFieldValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelBuildRequest();
    $request->assistantSid = 'sequi';
    $request->page = 949572;
    $request->pageSize = 368725;
    $request->pageToken = 'id';

    $requestSecurity = new ListModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listModelBuild($request, $requestSecurity);

    if ($response->listModelBuildResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQueryRequest();
    $request->assistantSid = 'possimus';
    $request->dialogueSid = 'aut';
    $request->language = 'quasi';
    $request->modelBuild = 'error';
    $request->page = 837945;
    $request->pageSize = 673660;
    $request->pageToken = 'quasi';
    $request->status = 'reiciendis';

    $requestSecurity = new ListQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listQuery($request, $requestSecurity);

    if ($response->listQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSampleRequest();
    $request->assistantSid = 'voluptatibus';
    $request->language = 'vero';
    $request->page = 468651;
    $request->pageSize = 509624;
    $request->pageToken = 'voluptatibus';
    $request->taskSid = 'ipsa';

    $requestSecurity = new ListSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSample($request, $requestSecurity);

    if ($response->listSampleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTaskRequest();
    $request->assistantSid = 'omnis';
    $request->page = 451159;
    $request->pageSize = 739264;
    $request->pageToken = 'perferendis';

    $requestSecurity = new ListTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTask($request, $requestSecurity);

    if ($response->listTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebhookRequest();
    $request->assistantSid = 'doloremque';
    $request->page = 441711;
    $request->pageSize = 282807;
    $request->pageToken = 'maiores';

    $requestSecurity = new ListWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWebhook($request, $requestSecurity);

    if ($response->listWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssistantUpdateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssistantRequest();
    $request->requestBody = new UpdateAssistantUpdateAssistantRequest();
    $request->requestBody->callbackEvents = 'dicta';
    $request->requestBody->callbackUrl = 'http://flustered-joey.com';
    $request->requestBody->defaults = 'harum';
    $request->requestBody->developmentStage = 'enim';
    $request->requestBody->friendlyName = 'accusamus';
    $request->requestBody->logQueries = false;
    $request->requestBody->styleSheet = 'commodi';
    $request->requestBody->uniqueName = 'repudiandae';
    $request->sid = 'quae';

    $requestSecurity = new UpdateAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAssistant($request, $requestSecurity);

    if ($response->autopilotV1Assistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDefaults

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultsUpdateDefaultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDefaultsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDefaultsRequest();
    $request->assistantSid = 'ipsum';
    $request->requestBody = new UpdateDefaultsUpdateDefaultsRequest();
    $request->requestBody->defaults = 'quidem';

    $requestSecurity = new UpdateDefaultsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDefaults($request, $requestSecurity);

    if ($response->autopilotV1AssistantDefaults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFieldTypeUpdateFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFieldTypeRequest();
    $request->assistantSid = 'molestias';
    $request->requestBody = new UpdateFieldTypeUpdateFieldTypeRequest();
    $request->requestBody->friendlyName = 'excepturi';
    $request->requestBody->uniqueName = 'pariatur';
    $request->sid = 'modi';

    $requestSecurity = new UpdateFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFieldType($request, $requestSecurity);

    if ($response->autopilotV1AssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelBuildUpdateModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateModelBuildRequest();
    $request->assistantSid = 'praesentium';
    $request->requestBody = new UpdateModelBuildUpdateModelBuildRequest();
    $request->requestBody->uniqueName = 'rem';
    $request->sid = 'voluptates';

    $requestSecurity = new UpdateModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateModelBuild($request, $requestSecurity);

    if ($response->autopilotV1AssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueryUpdateQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQueryRequest();
    $request->assistantSid = 'quasi';
    $request->requestBody = new UpdateQueryUpdateQueryRequest();
    $request->requestBody->sampleSid = 'repudiandae';
    $request->requestBody->status = 'sint';
    $request->sid = 'veritatis';

    $requestSecurity = new UpdateQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateQuery($request, $requestSecurity);

    if ($response->autopilotV1AssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRestoreAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRestoreAssistantUpdateRestoreAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRestoreAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRestoreAssistantUpdateRestoreAssistantRequest();
    $request->assistant = 'itaque';

    $requestSecurity = new UpdateRestoreAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRestoreAssistant($request, $requestSecurity);

    if ($response->autopilotV1RestoreAssistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSampleUpdateSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSampleRequest();
    $request->assistantSid = 'incidunt';
    $request->requestBody = new UpdateSampleUpdateSampleRequest();
    $request->requestBody->language = 'enim';
    $request->requestBody->sourceChannel = 'consequatur';
    $request->requestBody->taggedText = 'est';
    $request->sid = 'quibusdam';
    $request->taskSid = 'explicabo';

    $requestSecurity = new UpdateSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSample($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStyleSheet

Updates the style sheet for an Assistant identified by `assistant_sid`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStyleSheetUpdateStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStyleSheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStyleSheetRequest();
    $request->assistantSid = 'deserunt';
    $request->requestBody = new UpdateStyleSheetUpdateStyleSheetRequest();
    $request->requestBody->styleSheet = 'distinctio';

    $requestSecurity = new UpdateStyleSheetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateStyleSheet($request, $requestSecurity);

    if ($response->autopilotV1AssistantStyleSheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskUpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->assistantSid = 'quibusdam';
    $request->requestBody = new UpdateTaskUpdateTaskRequest();
    $request->requestBody->actions = 'labore';
    $request->requestBody->actionsUrl = 'http://delightful-graph.name';
    $request->requestBody->friendlyName = 'quos';
    $request->requestBody->uniqueName = 'perferendis';
    $request->sid = 'magni';

    $requestSecurity = new UpdateTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTask($request, $requestSecurity);

    if ($response->autopilotV1AssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskActionsUpdateTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskActionsRequest();
    $request->assistantSid = 'assumenda';
    $request->requestBody = new UpdateTaskActionsUpdateTaskActionsRequest();
    $request->requestBody->actions = 'ipsam';
    $request->taskSid = 'alias';

    $requestSecurity = new UpdateTaskActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateTaskActions($request, $requestSecurity);

    if ($response->autopilotV1AssistantTaskTaskActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookUpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->assistantSid = 'fugit';
    $request->requestBody = new UpdateWebhookUpdateWebhookRequest();
    $request->requestBody->events = 'dolorum';
    $request->requestBody->uniqueName = 'excepturi';
    $request->requestBody->webhookMethod = 'tempora';
    $request->requestBody->webhookUrl = 'https://serious-dump.org';
    $request->sid = 'eum';

    $requestSecurity = new UpdateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWebhook($request, $requestSecurity);

    if ($response->autopilotV1AssistantWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
