# commands

## Overview

Sending commands to devices and stored command management

### Available Operations

* [deleteCommandsId](#deletecommandsid) - Delete a Saved Command
* [getCommands](#getcommands) - Fetch a list of Saved Commands
* [getCommandsSend](#getcommandssend) - Fetch a list of Saved Commands supported by Device at the moment
* [getCommandsTypes](#getcommandstypes) - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* [postCommands](#postcommands) - Create a Saved Command
* [postCommandsSend](#postcommandssend) - Dispatch commands to device
* [putCommandsId](#putcommandsid) - Update a Saved Command

## deleteCommandsId

Delete a Saved Command

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommandsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCommandsIdRequest();
    $request->id = 800911;

    $response = $sdk->commands->deleteCommandsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommands

Without params, it returns a list of Saved Commands the user has access to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommandsRequest();
    $request->all = false;
    $request->deviceId = 461479;
    $request->groupId = 520478;
    $request->refresh = false;
    $request->userId = 780529;

    $response = $sdk->commands->getCommands($request);

    if ($response->commands !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommandsSend

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandsSendRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommandsSendRequest();
    $request->deviceId = 678880;

    $response = $sdk->commands->getCommandsSend($request);

    if ($response->commands !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommandsTypes

Fetch a list of available Commands for the Device or all possible Commands if Device ommited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandsTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommandsTypesRequest();
    $request->deviceId = 118274;
    $request->protocol = 'nam';
    $request->textChannel = false;

    $response = $sdk->commands->getCommandsTypes($request);

    if ($response->commandTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommands

Create a Saved Command

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Command;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Command();
    $request->attributes = [
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
        'optio' => 'totam',
    ];
    $request->description = 'beatae';
    $request->deviceId = 414662;
    $request->id = 473600;
    $request->type = 'modi';

    $response = $sdk->commands->postCommands($request);

    if ($response->command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommandsSend

Dispatch a new command or Saved Command if _body.id_ set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Command;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Command();
    $request->attributes = [
        'impedit' => 'cum',
    ];
    $request->description = 'esse';
    $request->deviceId = 216550;
    $request->id = 568434;
    $request->type = 'aspernatur';

    $response = $sdk->commands->postCommandsSend($request);

    if ($response->command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCommandsId

Update a Saved Command

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCommandsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Command;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCommandsIdRequest();
    $request->command = new Command();
    $request->command->attributes = [
        'ad' => 'natus',
    ];
    $request->command->description = 'sed';
    $request->command->deviceId = 612096;
    $request->command->id = 222321;
    $request->command->type = 'natus';
    $request->id = 386489;

    $response = $sdk->commands->putCommandsId($request);

    if ($response->command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
