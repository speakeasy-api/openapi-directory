# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createBinding](#createbinding)
* [createCredential](#createcredential)
* [createNotification](#createnotification)
* [createService](#createservice)
* [deleteBinding](#deletebinding)
* [deleteCredential](#deletecredential)
* [deleteService](#deleteservice)
* [fetchBinding](#fetchbinding)
* [fetchCredential](#fetchcredential)
* [fetchService](#fetchservice)
* [listBinding](#listbinding)
* [listCredential](#listcredential)
* [listService](#listservice)
* [updateCredential](#updatecredential)
* [updateService](#updateservice)

## createBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingCreateBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBindingRequest();
    $request->requestBody = new CreateBindingCreateBindingRequest();
    $request->requestBody->address = '34785 Kenyon Hollow';
    $request->requestBody->bindingType = BindingEnumBindingTypeEnum::ALEXA;
    $request->requestBody->credentialSid = 'temporibus';
    $request->requestBody->endpoint = 'ab';
    $request->requestBody->identity = 'quis';
    $request->requestBody->notificationProtocolVersion = 'veritatis';
    $request->requestBody->tag = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->serviceSid = 'sapiente';

    $requestSecurity = new CreateBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createBinding($request, $requestSecurity);

    if ($response->notifyV1ServiceBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialCreateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\CredentialEnumPushServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialCreateCredentialRequest();
    $request->apiKey = 'quo';
    $request->certificate = 'odit';
    $request->friendlyName = 'at';
    $request->privateKey = 'at';
    $request->sandbox = false;
    $request->secret = 'maiores';
    $request->type = CredentialEnumPushServiceEnum::APN;

    $requestSecurity = new CreateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredential($request, $requestSecurity);

    if ($response->notifyV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationCreateNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationEnumPriorityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationRequest();
    $request->requestBody = new CreateNotificationCreateNotificationRequest();
    $request->requestBody->action = 'quod';
    $request->requestBody->alexa = 'quod';
    $request->requestBody->apn = 'esse';
    $request->requestBody->body = 'totam';
    $request->requestBody->data = 'porro';
    $request->requestBody->deliveryCallbackUrl = 'dolorum';
    $request->requestBody->facebookMessenger = 'dicta';
    $request->requestBody->fcm = 'nam';
    $request->requestBody->gcm = 'officia';
    $request->requestBody->identity = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->requestBody->priority = NotificationEnumPriorityEnum::LOW;
    $request->requestBody->segment = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->requestBody->sms = 'modi';
    $request->requestBody->sound = 'qui';
    $request->requestBody->tag = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->title = 'Mr.';
    $request->requestBody->toBinding = [
        'ad',
    ];
    $request->requestBody->ttl = 617636;
    $request->serviceSid = 'sed';

    $requestSecurity = new CreateNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNotification($request, $requestSecurity);

    if ($response->notifyV1ServiceNotification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->alexaSkillId = 'iste';
    $request->apnCredentialSid = 'dolor';
    $request->defaultAlexaNotificationProtocolVersion = 'natus';
    $request->defaultApnNotificationProtocolVersion = 'laboriosam';
    $request->defaultFcmNotificationProtocolVersion = 'hic';
    $request->defaultGcmNotificationProtocolVersion = 'saepe';
    $request->deliveryCallbackEnabled = false;
    $request->deliveryCallbackUrl = 'fuga';
    $request->facebookMessengerPageId = 'in';
    $request->fcmCredentialSid = 'corporis';
    $request->friendlyName = 'iste';
    $request->gcmCredentialSid = 'iure';
    $request->logEnabled = false;
    $request->messagingServiceSid = 'saepe';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->notifyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBindingRequest();
    $request->serviceSid = 'quidem';
    $request->sid = 'architecto';

    $requestSecurity = new DeleteBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteBinding($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCredentialRequest();
    $request->sid = 'ipsa';

    $requestSecurity = new DeleteCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCredential($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->sid = 'reiciendis';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBindingRequest();
    $request->serviceSid = 'est';
    $request->sid = 'mollitia';

    $requestSecurity = new FetchBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBinding($request, $requestSecurity);

    if ($response->notifyV1ServiceBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCredentialRequest();
    $request->sid = 'laborum';

    $requestSecurity = new FetchCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredential($request, $requestSecurity);

    if ($response->notifyV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRequest();
    $request->sid = 'dolores';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->notifyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBindingRequest();
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-23');
    $request->identity = [
        'nobis',
    ];
    $request->page = 315428;
    $request->pageSize = 607831;
    $request->pageToken = 'nemo';
    $request->serviceSid = 'minima';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-03');
    $request->tag = [
        'culpa',
        'doloribus',
    ];

    $requestSecurity = new ListBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBinding($request, $requestSecurity);

    if ($response->listBindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCredentialRequest();
    $request->page = 958950;
    $request->pageSize = 102044;
    $request->pageToken = 'mollitia';

    $requestSecurity = new ListCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCredential($request, $requestSecurity);

    if ($response->listCredentialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRequest();
    $request->friendlyName = 'dolorem';
    $request->page = 635059;
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';

    $requestSecurity = new ListServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listService($request, $requestSecurity);

    if ($response->listServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialUpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialRequest();
    $request->requestBody = new UpdateCredentialUpdateCredentialRequest();
    $request->requestBody->apiKey = 'mollitia';
    $request->requestBody->certificate = 'occaecati';
    $request->requestBody->friendlyName = 'numquam';
    $request->requestBody->privateKey = 'commodi';
    $request->requestBody->sandbox = false;
    $request->requestBody->secret = 'quam';
    $request->sid = 'molestiae';

    $requestSecurity = new UpdateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredential($request, $requestSecurity);

    if ($response->notifyV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->alexaSkillId = 'velit';
    $request->requestBody->apnCredentialSid = 'error';
    $request->requestBody->defaultAlexaNotificationProtocolVersion = 'quia';
    $request->requestBody->defaultApnNotificationProtocolVersion = 'quis';
    $request->requestBody->defaultFcmNotificationProtocolVersion = 'vitae';
    $request->requestBody->defaultGcmNotificationProtocolVersion = 'laborum';
    $request->requestBody->deliveryCallbackEnabled = false;
    $request->requestBody->deliveryCallbackUrl = 'animi';
    $request->requestBody->facebookMessengerPageId = 'enim';
    $request->requestBody->fcmCredentialSid = 'odit';
    $request->requestBody->friendlyName = 'quo';
    $request->requestBody->gcmCredentialSid = 'sequi';
    $request->requestBody->logEnabled = false;
    $request->requestBody->messagingServiceSid = 'tenetur';
    $request->sid = 'ipsam';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->notifyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
