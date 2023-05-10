# pam

### Available Operations

* [getClientProfileForPam](#getclientprofileforpam) - Get the Pam profile of a client for this client ID
* [getProjectCompletionReportForPam](#getprojectcompletionreportforpam) - Get completion report data of a project
* [postMessage](#postmessage) - Sends a message to chat

## getClientProfileForPam

Get the Pam  profile of a client for this client ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClientProfileForPamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClientProfileForPamRequest();
    $request->clientId = 679880;

    $response = $sdk->pam->getClientProfileForPam($request);

    if ($response->clientProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectCompletionReportForPam

Get completion report data of a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectCompletionReportForPamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectCompletionReportForPamRequest();
    $request->projectId = 952792;

    $response = $sdk->pam->getProjectCompletionReportForPam($request);

    if ($response->projectCompletionReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMessage

Sends a message to the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PamMessage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PamMessage();
    $request->message = 'esse';
    $request->recipients = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->slots = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->threadId = 'enim';
    $request->threadKey = 'dolorem';

    $response = $sdk->pam->postMessage($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
