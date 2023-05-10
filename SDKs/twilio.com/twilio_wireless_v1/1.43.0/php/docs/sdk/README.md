# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCommand](#createcommand) - Send a Command to a Sim.
* [createRatePlan](#createrateplan)
* [deleteCommand](#deletecommand) - Delete a Command instance from your account.
* [deleteRatePlan](#deleterateplan)
* [deleteSim](#deletesim) - Delete a Sim resource on your Account.
* [fetchCommand](#fetchcommand) - Fetch a Command instance from your account.
* [fetchRatePlan](#fetchrateplan)
* [fetchSim](#fetchsim) - Fetch a Sim resource on your Account.
* [listAccountUsageRecord](#listaccountusagerecord)
* [listCommand](#listcommand) - Retrieve a list of Commands from your account.
* [listDataSession](#listdatasession)
* [listRatePlan](#listrateplan)
* [listSim](#listsim) - Retrieve a list of Sim resources on your Account.
* [listUsageRecord](#listusagerecord)
* [updateRatePlan](#updaterateplan)
* [updateSim](#updatesim) - Updates the given properties of a Sim resource on your Account.

## createCommand

Send a Command to a Sim.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandCreateCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandCreateCommandRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandEnumCommandModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCommandCreateCommandRequest();
    $request->callbackMethod = CreateCommandCreateCommandRequestCallbackMethodEnum::PATCH;
    $request->callbackUrl = 'https://high-hound.biz';
    $request->command = 'debitis';
    $request->commandMode = CommandEnumCommandModeEnum::TEXT;
    $request->deliveryReceiptRequested = false;
    $request->includeSid = 'delectus';
    $request->sim = 'tempora';

    $requestSecurity = new CreateCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCommand($request, $requestSecurity);

    if ($response->wirelessV1Command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRatePlanCreateRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRatePlanCreateRatePlanRequest();
    $request->dataEnabled = false;
    $request->dataLimit = 383441;
    $request->dataMetering = 'molestiae';
    $request->friendlyName = 'minus';
    $request->internationalRoaming = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->internationalRoamingDataLimit = 925597;
    $request->messagingEnabled = false;
    $request->nationalRoamingDataLimit = 836079;
    $request->nationalRoamingEnabled = false;
    $request->uniqueName = 'ab';
    $request->voiceEnabled = false;

    $requestSecurity = new CreateRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRatePlan($request, $requestSecurity);

    if ($response->wirelessV1RatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCommand

Delete a Command instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCommandRequest();
    $request->sid = 'quis';

    $requestSecurity = new DeleteCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCommand($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRatePlanRequest();
    $request->sid = 'veritatis';

    $requestSecurity = new DeleteRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRatePlan($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSim

Delete a Sim resource on your Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSimRequest();
    $request->sid = 'deserunt';

    $requestSecurity = new DeleteSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSim($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCommand

Fetch a Command instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCommandRequest();
    $request->sid = 'perferendis';

    $requestSecurity = new FetchCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCommand($request, $requestSecurity);

    if ($response->wirelessV1Command !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRatePlanRequest();
    $request->sid = 'ipsam';

    $requestSecurity = new FetchRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRatePlan($request, $requestSecurity);

    if ($response->wirelessV1RatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSim

Fetch a Sim resource on your Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSimRequest();
    $request->sid = 'repellendus';

    $requestSecurity = new FetchSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSim($request, $requestSecurity);

    if ($response->wirelessV1Sim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountUsageRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountUsageRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountUsageRecordEnumGranularityEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountUsageRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountUsageRecordRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-31T22:02:25.322Z');
    $request->granularity = AccountUsageRecordEnumGranularityEnum::HOURLY;
    $request->page = 870013;
    $request->pageSize = 870088;
    $request->pageToken = 'maiores';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T07:22:15.330Z');

    $requestSecurity = new ListAccountUsageRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAccountUsageRecord($request, $requestSecurity);

    if ($response->listAccountUsageRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCommand

Retrieve a list of Commands from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommandEnumDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandEnumTransportEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCommandRequest();
    $request->direction = CommandEnumDirectionEnum::TO_SIM;
    $request->page = 461479;
    $request->pageSize = 520478;
    $request->pageToken = 'porro';
    $request->sim = 'dolorum';
    $request->status = CommandEnumStatusEnum::QUEUED;
    $request->transport = CommandEnumTransportEnum::IP;

    $requestSecurity = new ListCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCommand($request, $requestSecurity);

    if ($response->listCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataSession

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDataSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataSessionRequest();
    $request->page = 639921;
    $request->pageSize = 582020;
    $request->pageToken = 'fugit';
    $request->simSid = 'deleniti';

    $requestSecurity = new ListDataSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDataSession($request, $requestSecurity);

    if ($response->listDataSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRatePlanRequest();
    $request->page = 944669;
    $request->pageSize = 758616;
    $request->pageToken = 'totam';

    $requestSecurity = new ListRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRatePlan($request, $requestSecurity);

    if ($response->listRatePlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSim

Retrieve a list of Sim resources on your Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSimRequest;
use \OpenAPI\OpenAPI\Models\Shared\SimEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimRequest();
    $request->eId = 'beatae';
    $request->iccid = 'commodi';
    $request->page = 473600;
    $request->pageSize = 264555;
    $request->pageToken = 'qui';
    $request->ratePlan = 'impedit';
    $request->simRegistrationCode = 'cum';
    $request->status = SimEnumStatusEnum::SUSPENDED;

    $requestSecurity = new ListSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSim($request, $requestSecurity);

    if ($response->listSimResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordEnumGranularityEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordRequest();
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-07T12:31:06.574Z');
    $request->granularity = UsageRecordEnumGranularityEnum::HOURLY;
    $request->page = 18789;
    $request->pageSize = 324141;
    $request->pageToken = 'natus';
    $request->simSid = 'sed';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T16:55:44.795Z');

    $requestSecurity = new ListUsageRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecord($request, $requestSecurity);

    if ($response->listUsageRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRatePlanUpdateRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRatePlanRequest();
    $request->requestBody = new UpdateRatePlanUpdateRatePlanRequest();
    $request->requestBody->friendlyName = 'natus';
    $request->requestBody->uniqueName = 'laboriosam';
    $request->sid = 'hic';

    $requestSecurity = new UpdateRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRatePlan($request, $requestSecurity);

    if ($response->wirelessV1RatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSim

Updates the given properties of a Sim resource on your Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimEnumResetStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSimRequest();
    $request->requestBody = new UpdateSimUpdateSimRequest();
    $request->requestBody->accountSid = 'saepe';
    $request->requestBody->callbackMethod = UpdateSimUpdateSimRequestCallbackMethodEnum::PUT;
    $request->requestBody->callbackUrl = 'http://grown-opposite.info';
    $request->requestBody->commandsCallbackMethod = UpdateSimUpdateSimRequestCommandsCallbackMethodEnum::DELETE;
    $request->requestBody->commandsCallbackUrl = 'https://burdensome-bail.org';
    $request->requestBody->friendlyName = 'est';
    $request->requestBody->ratePlan = 'mollitia';
    $request->requestBody->resetStatus = SimEnumResetStatusEnum::RESETTING;
    $request->requestBody->smsFallbackMethod = UpdateSimUpdateSimRequestSmsFallbackMethodEnum::PUT;
    $request->requestBody->smsFallbackUrl = 'http://doting-footage.com';
    $request->requestBody->smsMethod = UpdateSimUpdateSimRequestSmsMethodEnum::PUT;
    $request->requestBody->smsUrl = 'http://palatable-forum.biz';
    $request->requestBody->status = SimEnumStatusEnum::DEACTIVATED;
    $request->requestBody->uniqueName = 'accusantium';
    $request->requestBody->voiceFallbackMethod = UpdateSimUpdateSimRequestVoiceFallbackMethodEnum::POST;
    $request->requestBody->voiceFallbackUrl = 'https://wrathful-violet.com';
    $request->requestBody->voiceMethod = UpdateSimUpdateSimRequestVoiceMethodEnum::PATCH;
    $request->requestBody->voiceUrl = 'http://pointed-cicada.org';
    $request->sid = 'mollitia';

    $requestSecurity = new UpdateSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSim($request, $requestSecurity);

    if ($response->wirelessV1Sim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
