# welcome

## Overview

Welcome specific methods

### Available Operations

* [addwebhook](#addwebhook) - Links a callback url to a user.

* [dropwebhook](#dropwebhook) - Dissociates a webhook from a user.

* [getcamerapicture](#getcamerapicture) - Returns the snapshot associated to an event.

* [geteventsuntil](#geteventsuntil) - Returns the snapshot associated to an event.

* [gethomedata](#gethomedata) - Returns information about users homes and cameras.

* [getlasteventof](#getlasteventof) - Returns most recent events.

* [getnextevents](#getnextevents) - Returns previous events.

* [setpersonsaway](#setpersonsaway) - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* [setpersonshome](#setpersonshome) - Sets a person as 'At home'.


## addwebhook

Links a callback url to a user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddwebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddwebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddwebhookRequest();
    $request->appType = 'ad';
    $request->url = 'natus';

    $requestSecurity = new AddwebhookSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->addwebhook($request, $requestSecurity);

    if ($response->naWelcomeWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dropwebhook

Dissociates a webhook from a user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DropwebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DropwebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DropwebhookRequest();
    $request->appType = 'sed';

    $requestSecurity = new DropwebhookSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->dropwebhook($request, $requestSecurity);

    if ($response->naWelcomeWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getcamerapicture

Returns the snapshot associated to an event.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcamerapictureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetcamerapictureSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcamerapictureRequest();
    $request->imageId = 'iste';
    $request->key = 'dolor';

    $requestSecurity = new GetcamerapictureSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->getcamerapicture($request, $requestSecurity);

    if ($response->getcamerapicture200ApplicationJSONByteString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## geteventsuntil

Returns the snapshot associated to an event.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeteventsuntilRequest;
use \OpenAPI\OpenAPI\Models\Operations\GeteventsuntilSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeteventsuntilRequest();
    $request->eventId = 'natus';
    $request->homeId = 'laboriosam';

    $requestSecurity = new GeteventsuntilSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->geteventsuntil($request, $requestSecurity);

    if ($response->naWelcomeEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gethomedata

Returns information about users homes and cameras.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GethomedataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GethomedataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GethomedataRequest();
    $request->homeId = 'hic';
    $request->size = 902599;

    $requestSecurity = new GethomedataSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->gethomedata($request, $requestSecurity);

    if ($response->naWelcomeHomeDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getlasteventof

Returns most recent events.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetlasteventofRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetlasteventofSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetlasteventofRequest();
    $request->homeId = 'fuga';
    $request->offset = 449950;
    $request->personId = 'corporis';

    $requestSecurity = new GetlasteventofSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->getlasteventof($request, $requestSecurity);

    if ($response->naWelcomeEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getnextevents

Returns previous events.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetnexteventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetnexteventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetnexteventsRequest();
    $request->eventId = 'iste';
    $request->homeId = 'iure';
    $request->size = 902349;

    $requestSecurity = new GetnexteventsSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->getnextevents($request, $requestSecurity);

    if ($response->naWelcomeEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setpersonsaway

Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetpersonsawayRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetpersonsawaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetpersonsawayRequest();
    $request->homeId = 'quidem';
    $request->personId = 'architecto';

    $requestSecurity = new SetpersonsawaySecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->setpersonsaway($request, $requestSecurity);

    if ($response->naWelcomePersonsAwayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setpersonshome

Sets a person as 'At home'.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetpersonshomeRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetpersonshomeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetpersonshomeRequest();
    $request->homeId = 'ipsa';
    $request->personIds = 'reiciendis';

    $requestSecurity = new SetpersonshomeSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->welcome->setpersonshome($request, $requestSecurity);

    if ($response->naWelcomePersonsHomeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
