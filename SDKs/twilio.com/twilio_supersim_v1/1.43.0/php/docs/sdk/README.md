# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createEsimProfile](#createesimprofile) - Order an eSIM Profile.
* [createFleet](#createfleet) - Create a Fleet
* [createIpCommand](#createipcommand) - Send an IP Command to a Super SIM.
* [createNetworkAccessProfile](#createnetworkaccessprofile) - Create a new Network Access Profile
* [createNetworkAccessProfileNetwork](#createnetworkaccessprofilenetwork) - Add a Network resource to the Network Access Profile resource.
* [createSim](#createsim) - Register a Super SIM to your Account
* [createSmsCommand](#createsmscommand) - Send SMS Command to a Sim.
* [deleteNetworkAccessProfileNetwork](#deletenetworkaccessprofilenetwork) - Remove a Network resource from the Network Access Profile resource's.
* [fetchEsimProfile](#fetchesimprofile) - Fetch an eSIM Profile.
* [fetchFleet](#fetchfleet) - Fetch a Fleet instance from your account.
* [fetchIpCommand](#fetchipcommand) - Fetch IP Command instance from your account.
* [fetchNetwork](#fetchnetwork) - Fetch a Network resource.
* [fetchNetworkAccessProfile](#fetchnetworkaccessprofile) - Fetch a Network Access Profile instance from your account.
* [fetchNetworkAccessProfileNetwork](#fetchnetworkaccessprofilenetwork) - Fetch a Network Access Profile resource's Network resource.
* [fetchSim](#fetchsim) - Fetch a Super SIM instance from your account.
* [fetchSmsCommand](#fetchsmscommand) - Fetch SMS Command instance from your account.
* [listBillingPeriod](#listbillingperiod) - Retrieve a list of Billing Periods for a Super SIM.
* [listEsimProfile](#listesimprofile) - Retrieve a list of eSIM Profiles.
* [listFleet](#listfleet) - Retrieve a list of Fleets from your account.
* [listIpCommand](#listipcommand) - Retrieve a list of IP Commands from your account.
* [listNetwork](#listnetwork) - Retrieve a list of Network resources.
* [listNetworkAccessProfile](#listnetworkaccessprofile) - Retrieve a list of Network Access Profiles from your account.
* [listNetworkAccessProfileNetwork](#listnetworkaccessprofilenetwork) - Retrieve a list of Network Access Profile resource's Network resource.
* [listSettingsUpdate](#listsettingsupdate) - Retrieve a list of Settings Updates.
* [listSim](#listsim) - Retrieve a list of Super SIMs from your account.
* [listSimIpAddress](#listsimipaddress) - Retrieve a list of IP Addresses for the given Super SIM.
* [listSmsCommand](#listsmscommand) - Retrieve a list of SMS Commands from your account.
* [listUsageRecord](#listusagerecord) - List UsageRecords
* [updateFleet](#updatefleet) - Updates the given properties of a Super SIM Fleet instance from your account.
* [updateNetworkAccessProfile](#updatenetworkaccessprofile) - Updates the given properties of a Network Access Profile in your account.
* [updateSim](#updatesim) - Updates the given properties of a Super SIM instance from your account.

## createEsimProfile

Order an eSIM Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEsimProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEsimProfileCreateEsimProfileRequest();
    $request->callbackMethod = CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum::DELETE;
    $request->callbackUrl = 'unde';
    $request->eid = 'nulla';
    $request->generateMatchingId = false;

    $requestSecurity = new CreateEsimProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createEsimProfile($request, $requestSecurity);

    if ($response->supersimV1EsimProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFleet

Create a Fleet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetCreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetCreateFleetRequestIpCommandsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetCreateFleetRequest();
    $request->dataEnabled = false;
    $request->dataLimit = 544883;
    $request->ipCommandsMethod = CreateFleetCreateFleetRequestIpCommandsMethodEnum::DELETE;
    $request->ipCommandsUrl = 'http://physical-pegboard.info';
    $request->networkAccessProfile = 'iure';
    $request->smsCommandsEnabled = false;
    $request->smsCommandsMethod = CreateFleetCreateFleetRequestSmsCommandsMethodEnum::GET;
    $request->smsCommandsUrl = 'https://awesome-voter.biz';
    $request->uniqueName = 'suscipit';

    $requestSecurity = new CreateFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFleet($request, $requestSecurity);

    if ($response->supersimV1Fleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIpCommand

Send an IP Command to a Super SIM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpCommandCreateIpCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpCommandEnumPayloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIpCommandCreateIpCommandRequest();
    $request->callbackMethod = CreateIpCommandCreateIpCommandRequestCallbackMethodEnum::POST;
    $request->callbackUrl = 'https://studious-lynx.info';
    $request->devicePort = 568045;
    $request->payload = 'nisi';
    $request->payloadType = IpCommandEnumPayloadTypeEnum::BINARY;
    $request->sim = 'temporibus';

    $requestSecurity = new CreateIpCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIpCommand($request, $requestSecurity);

    if ($response->supersimV1IpCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkAccessProfile

Create a new Network Access Profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAccessProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAccessProfileCreateNetworkAccessProfileRequest();
    $request->networks = [
        'quis',
    ];
    $request->uniqueName = 'veritatis';

    $requestSecurity = new CreateNetworkAccessProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNetworkAccessProfile($request, $requestSecurity);

    if ($response->supersimV1NetworkAccessProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkAccessProfileNetwork

Add a Network resource to the Network Access Profile resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAccessProfileNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkAccessProfileNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkAccessProfileNetworkRequest();
    $request->networkAccessProfileSid = 'deserunt';
    $request->requestBody = new CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest();
    $request->requestBody->network = 'perferendis';

    $requestSecurity = new CreateNetworkAccessProfileNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNetworkAccessProfileNetwork($request, $requestSecurity);

    if ($response->supersimV1NetworkAccessProfileNetworkAccessProfileNetwork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSim

Register a Super SIM to your Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimCreateSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSimCreateSimRequest();
    $request->iccid = 'ipsam';
    $request->registrationCode = 'repellendus';

    $requestSecurity = new CreateSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSim($request, $requestSecurity);

    if ($response->supersimV1Sim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSmsCommand

Send SMS Command to a Sim.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmsCommandCreateSmsCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmsCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSmsCommandCreateSmsCommandRequest();
    $request->callbackMethod = CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum::DELETE;
    $request->callbackUrl = 'https://constant-sundae.org';
    $request->payload = 'maiores';
    $request->sim = 'molestiae';

    $requestSecurity = new CreateSmsCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSmsCommand($request, $requestSecurity);

    if ($response->supersimV1SmsCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkAccessProfileNetwork

Remove a Network resource from the Network Access Profile resource's.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAccessProfileNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkAccessProfileNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkAccessProfileNetworkRequest();
    $request->networkAccessProfileSid = 'quod';
    $request->sid = 'quod';

    $requestSecurity = new DeleteNetworkAccessProfileNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteNetworkAccessProfileNetwork($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEsimProfile

Fetch an eSIM Profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEsimProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEsimProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEsimProfileRequest();
    $request->sid = 'esse';

    $requestSecurity = new FetchEsimProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchEsimProfile($request, $requestSecurity);

    if ($response->supersimV1EsimProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFleet

Fetch a Fleet instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFleetRequest();
    $request->sid = 'totam';

    $requestSecurity = new FetchFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFleet($request, $requestSecurity);

    if ($response->supersimV1Fleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIpCommand

Fetch IP Command instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIpCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIpCommandRequest();
    $request->sid = 'porro';

    $requestSecurity = new FetchIpCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIpCommand($request, $requestSecurity);

    if ($response->supersimV1IpCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchNetwork

Fetch a Network resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchNetworkRequest();
    $request->sid = 'dolorum';

    $requestSecurity = new FetchNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchNetwork($request, $requestSecurity);

    if ($response->supersimV1Network !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchNetworkAccessProfile

Fetch a Network Access Profile instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkAccessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkAccessProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchNetworkAccessProfileRequest();
    $request->sid = 'dicta';

    $requestSecurity = new FetchNetworkAccessProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchNetworkAccessProfile($request, $requestSecurity);

    if ($response->supersimV1NetworkAccessProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchNetworkAccessProfileNetwork

Fetch a Network Access Profile resource's Network resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkAccessProfileNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchNetworkAccessProfileNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchNetworkAccessProfileNetworkRequest();
    $request->networkAccessProfileSid = 'nam';
    $request->sid = 'officia';

    $requestSecurity = new FetchNetworkAccessProfileNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchNetworkAccessProfileNetwork($request, $requestSecurity);

    if ($response->supersimV1NetworkAccessProfileNetworkAccessProfileNetwork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSim

Fetch a Super SIM instance from your account.

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
    $request->sid = 'occaecati';

    $requestSecurity = new FetchSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSim($request, $requestSecurity);

    if ($response->supersimV1Sim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSmsCommand

Fetch SMS Command instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSmsCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSmsCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSmsCommandRequest();
    $request->sid = 'fugit';

    $requestSecurity = new FetchSmsCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSmsCommand($request, $requestSecurity);

    if ($response->supersimV1SmsCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBillingPeriod

Retrieve a list of Billing Periods for a Super SIM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingPeriodRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingPeriodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBillingPeriodRequest();
    $request->page = 537373;
    $request->pageSize = 944669;
    $request->pageToken = 'optio';
    $request->simSid = 'totam';

    $requestSecurity = new ListBillingPeriodSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBillingPeriod($request, $requestSecurity);

    if ($response->listBillingPeriodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEsimProfile

Retrieve a list of eSIM Profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListEsimProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\EsimProfileEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEsimProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEsimProfileRequest();
    $request->eid = 'beatae';
    $request->page = 414662;
    $request->pageSize = 473600;
    $request->pageToken = 'modi';
    $request->simSid = 'qui';
    $request->status = EsimProfileEnumStatusEnum::INSTALLED;

    $requestSecurity = new ListEsimProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listEsimProfile($request, $requestSecurity);

    if ($response->listEsimProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFleet

Retrieve a list of Fleets from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFleetRequest();
    $request->networkAccessProfile = 'cum';
    $request->page = 456150;
    $request->pageSize = 216550;
    $request->pageToken = 'excepturi';

    $requestSecurity = new ListFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFleet($request, $requestSecurity);

    if ($response->listFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIpCommand

Retrieve a list of IP Commands from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIpCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpCommandEnumDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpCommandEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListIpCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIpCommandRequest();
    $request->direction = IpCommandEnumDirectionEnum::TO_SIM;
    $request->page = 18789;
    $request->pageSize = 324141;
    $request->pageToken = 'natus';
    $request->sim = 'sed';
    $request->simIccid = 'iste';
    $request->status = IpCommandEnumStatusEnum::QUEUED;

    $requestSecurity = new ListIpCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIpCommand($request, $requestSecurity);

    if ($response->listIpCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetwork

Retrieve a list of Network resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkRequest();
    $request->isoCountry = 'natus';
    $request->mcc = 'laboriosam';
    $request->mnc = 'hic';
    $request->page = 902599;
    $request->pageSize = 681820;
    $request->pageToken = 'in';

    $requestSecurity = new ListNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listNetwork($request, $requestSecurity);

    if ($response->listNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkAccessProfile

Retrieve a list of Network Access Profiles from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkAccessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkAccessProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkAccessProfileRequest();
    $request->page = 359508;
    $request->pageSize = 613064;
    $request->pageToken = 'iure';

    $requestSecurity = new ListNetworkAccessProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listNetworkAccessProfile($request, $requestSecurity);

    if ($response->listNetworkAccessProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkAccessProfileNetwork

Retrieve a list of Network Access Profile resource's Network resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkAccessProfileNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkAccessProfileNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkAccessProfileNetworkRequest();
    $request->networkAccessProfileSid = 'saepe';
    $request->page = 697631;
    $request->pageSize = 99280;
    $request->pageToken = 'ipsa';

    $requestSecurity = new ListNetworkAccessProfileNetworkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listNetworkAccessProfileNetwork($request, $requestSecurity);

    if ($response->listNetworkAccessProfileNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSettingsUpdate

Retrieve a list of Settings Updates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SettingsUpdateEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSettingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSettingsUpdateRequest();
    $request->page = 969810;
    $request->pageSize = 666767;
    $request->pageToken = 'mollitia';
    $request->sim = 'laborum';
    $request->status = SettingsUpdateEnumStatusEnum::SCHEDULED;

    $requestSecurity = new ListSettingsUpdateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSettingsUpdate($request, $requestSecurity);

    if ($response->listSettingsUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSim

Retrieve a list of Super SIMs from your account.

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
    $request->fleet = 'dolorem';
    $request->iccid = 'corporis';
    $request->page = 128926;
    $request->pageSize = 750686;
    $request->pageToken = 'enim';
    $request->status = SimEnumStatusEnum::INACTIVE;

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

## listSimIpAddress

Retrieve a list of IP Addresses for the given Super SIM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSimIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSimIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSimIpAddressRequest();
    $request->page = 363711;
    $request->pageSize = 325047;
    $request->pageToken = 'excepturi';
    $request->simSid = 'accusantium';

    $requestSecurity = new ListSimIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSimIpAddress($request, $requestSecurity);

    if ($response->listSimIpAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSmsCommand

Retrieve a list of SMS Commands from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSmsCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\SmsCommandEnumDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmsCommandEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSmsCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSmsCommandRequest();
    $request->direction = SmsCommandEnumDirectionEnum::TO_SIM;
    $request->page = 634274;
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->sim = 'architecto';
    $request->status = SmsCommandEnumStatusEnum::RECEIVED;

    $requestSecurity = new ListSmsCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSmsCommand($request, $requestSecurity);

    if ($response->listSmsCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecord

List UsageRecords

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordEnumGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordEnumGroupEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordRequest();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T04:53:02.888Z');
    $request->fleet = 'consequuntur';
    $request->granularity = UsageRecordEnumGranularityEnum::ALL;
    $request->group = UsageRecordEnumGroupEnum::NETWORK;
    $request->isoCountry = 'occaecati';
    $request->network = 'numquam';
    $request->page = 414369;
    $request->pageSize = 466311;
    $request->pageToken = 'molestiae';
    $request->sim = 'velit';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T22:51:09.401Z');

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

## updateFleet

Updates the given properties of a Super SIM Fleet instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetUpdateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetRequest();
    $request->requestBody = new UpdateFleetUpdateFleetRequest();
    $request->requestBody->dataLimit = 338007;
    $request->requestBody->ipCommandsMethod = UpdateFleetUpdateFleetRequestIpCommandsMethodEnum::HEAD;
    $request->requestBody->ipCommandsUrl = 'https://profuse-ethernet.com';
    $request->requestBody->networkAccessProfile = 'quo';
    $request->requestBody->smsCommandsMethod = UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum::GET;
    $request->requestBody->smsCommandsUrl = 'https://happy-pink.net';
    $request->requestBody->uniqueName = 'aut';
    $request->sid = 'quasi';

    $requestSecurity = new UpdateFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFleet($request, $requestSecurity);

    if ($response->supersimV1Fleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAccessProfile

Updates the given properties of a Network Access Profile in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAccessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAccessProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAccessProfileRequest();
    $request->requestBody = new UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest();
    $request->requestBody->uniqueName = 'error';
    $request->sid = 'temporibus';

    $requestSecurity = new UpdateNetworkAccessProfileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateNetworkAccessProfile($request, $requestSecurity);

    if ($response->supersimV1NetworkAccessProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSim

Updates the given properties of a Super SIM instance from your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimUpdateSimRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimEnumStatusUpdateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSimRequest();
    $request->requestBody = new UpdateSimUpdateSimRequest();
    $request->requestBody->accountSid = 'laborum';
    $request->requestBody->callbackMethod = UpdateSimUpdateSimRequestCallbackMethodEnum::HEAD;
    $request->requestBody->callbackUrl = 'https://witty-swim.info';
    $request->requestBody->fleet = 'praesentium';
    $request->requestBody->status = SimEnumStatusUpdateEnum::INACTIVE;
    $request->requestBody->uniqueName = 'ipsa';
    $request->sid = 'omnis';

    $requestSecurity = new UpdateSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSim($request, $requestSecurity);

    if ($response->supersimV1Sim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
