# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createMessageInteraction](#createmessageinteraction) - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* [createParticipant](#createparticipant) - Add a new Participant to the Session
* [createPhoneNumber](#createphonenumber) - Add a Phone Number to a Service's Proxy Number Pool.
* [createService](#createservice) - Create a new Service for Twilio Proxy
* [createSession](#createsession) - Create a new Session
* [createShortCode](#createshortcode) - Add a Short Code to the Proxy Number Pool for the Service.
* [deleteInteraction](#deleteinteraction) - Delete a specific Interaction.
* [deleteParticipant](#deleteparticipant) - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* [deletePhoneNumber](#deletephonenumber) - Delete a specific Phone Number from a Service.
* [deleteService](#deleteservice) - Delete a specific Service.
* [deleteSession](#deletesession) - Delete a specific Session.
* [deleteShortCode](#deleteshortcode) - Delete a specific Short Code from a Service.
* [fetchInteraction](#fetchinteraction) - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* [fetchMessageInteraction](#fetchmessageinteraction)
* [fetchParticipant](#fetchparticipant) - Fetch a specific Participant.
* [fetchPhoneNumber](#fetchphonenumber) - Fetch a specific Phone Number.
* [fetchService](#fetchservice) - Fetch a specific Service.
* [fetchSession](#fetchsession) - Fetch a specific Session.
* [fetchShortCode](#fetchshortcode) - Fetch a specific Short Code.
* [listInteraction](#listinteraction) - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* [listMessageInteraction](#listmessageinteraction)
* [listParticipant](#listparticipant) - Retrieve a list of all Participants in a Session.
* [listPhoneNumber](#listphonenumber) - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* [listService](#listservice) - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* [listSession](#listsession) - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* [listShortCode](#listshortcode) - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* [updatePhoneNumber](#updatephonenumber) - Update a specific Proxy Number.
* [updateService](#updateservice) - Update a specific Service.
* [updateSession](#updatesession) - Update a specific Session.
* [updateShortCode](#updateshortcode) - Update a specific Short Code.

## createMessageInteraction

Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionCreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageInteractionRequest();
    $request->participantSid = 'tempora';
    $request->requestBody = new CreateMessageInteractionCreateMessageInteractionRequest();
    $request->requestBody->body = 'suscipit';
    $request->requestBody->mediaUrl = [
        'https://studious-lynx.info',
        'https://hospitable-travel.org',
    ];
    $request->serviceSid = 'ab';
    $request->sessionSid = 'quis';

    $requestSecurity = new CreateMessageInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessageInteraction($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipantMessageInteraction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createParticipant

Add a new Participant to the Session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantRequest();
    $request->requestBody = new CreateParticipantCreateParticipantRequest();
    $request->requestBody->friendlyName = 'veritatis';
    $request->requestBody->identifier = 'deserunt';
    $request->requestBody->proxyIdentifier = 'perferendis';
    $request->requestBody->proxyIdentifierSid = 'ipsam';
    $request->serviceSid = 'repellendus';
    $request->sessionSid = 'sapiente';

    $requestSecurity = new CreateParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createParticipant($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPhoneNumber

Add a Phone Number to a Service's Proxy Number Pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberCreatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePhoneNumberRequest();
    $request->requestBody = new CreatePhoneNumberCreatePhoneNumberRequest();
    $request->requestBody->isReserved = false;
    $request->requestBody->phoneNumber = 'quo';
    $request->requestBody->sid = 'odit';
    $request->serviceSid = 'at';

    $requestSecurity = new CreatePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPhoneNumber($request, $requestSecurity);

    if ($response->proxyV1ServicePhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create a new Service for Twilio Proxy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumGeoMatchLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumNumberSelectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->callbackUrl = 'https://wonderful-investor.net';
    $request->chatInstanceSid = 'quod';
    $request->defaultTtl = 461479;
    $request->geoMatchLevel = ServiceEnumGeoMatchLevelEnum::RADIUS;
    $request->interceptCallbackUrl = 'https://rash-butcher.net';
    $request->numberSelectionBehavior = ServiceEnumNumberSelectionBehaviorEnum::PREFER_STICKY;
    $request->outOfSessionCallbackUrl = 'https://cool-mandarin.org';
    $request->uniqueName = 'optio';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->proxyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSession

Create a new Session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionCreateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionEnumModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionRequest();
    $request->requestBody = new CreateSessionCreateSessionRequest();
    $request->requestBody->dateExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');
    $request->requestBody->mode = SessionEnumModeEnum::VOICE_ONLY;
    $request->requestBody->participants = [
        'modi',
        'qui',
    ];
    $request->requestBody->status = SessionEnumStatusEnum::FAILED;
    $request->requestBody->ttl = 736918;
    $request->requestBody->uniqueName = 'esse';
    $request->serviceSid = 'ipsum';

    $requestSecurity = new CreateSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSession($request, $requestSecurity);

    if ($response->proxyV1ServiceSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createShortCode

Add a Short Code to the Proxy Number Pool for the Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeCreateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShortCodeRequest();
    $request->requestBody = new CreateShortCodeCreateShortCodeRequest();
    $request->requestBody->sid = 'excepturi';
    $request->serviceSid = 'aspernatur';

    $requestSecurity = new CreateShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createShortCode($request, $requestSecurity);

    if ($response->proxyV1ServiceShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInteraction

Delete a specific Interaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInteractionRequest();
    $request->serviceSid = 'perferendis';
    $request->sessionSid = 'ad';
    $request->sid = 'natus';

    $requestSecurity = new DeleteInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteInteraction($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParticipant

Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParticipantRequest();
    $request->serviceSid = 'sed';
    $request->sessionSid = 'iste';
    $request->sid = 'dolor';

    $requestSecurity = new DeleteParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteParticipant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePhoneNumber

Delete a specific Phone Number from a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePhoneNumberRequest();
    $request->serviceSid = 'natus';
    $request->sid = 'laboriosam';

    $requestSecurity = new DeletePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deletePhoneNumber($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Delete a specific Service.

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
    $request->sid = 'hic';

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

## deleteSession

Delete a specific Session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionRequest();
    $request->serviceSid = 'saepe';
    $request->sid = 'fuga';

    $requestSecurity = new DeleteSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSession($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteShortCode

Delete a specific Short Code from a Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteShortCodeRequest();
    $request->serviceSid = 'in';
    $request->sid = 'corporis';

    $requestSecurity = new DeleteShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteShortCode($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInteraction

Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInteractionRequest();
    $request->serviceSid = 'iste';
    $request->sessionSid = 'iure';
    $request->sid = 'saepe';

    $requestSecurity = new FetchInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInteraction($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionInteraction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMessageInteraction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessageInteractionRequest();
    $request->participantSid = 'quidem';
    $request->serviceSid = 'architecto';
    $request->sessionSid = 'ipsa';
    $request->sid = 'reiciendis';

    $requestSecurity = new FetchMessageInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessageInteraction($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipantMessageInteraction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchParticipant

Fetch a specific Participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchParticipantRequest();
    $request->serviceSid = 'est';
    $request->sessionSid = 'mollitia';
    $request->sid = 'laborum';

    $requestSecurity = new FetchParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchParticipant($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPhoneNumber

Fetch a specific Phone Number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPhoneNumberRequest();
    $request->serviceSid = 'dolores';
    $request->sid = 'dolorem';

    $requestSecurity = new FetchPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchPhoneNumber($request, $requestSecurity);

    if ($response->proxyV1ServicePhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

Fetch a specific Service.

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
    $request->sid = 'corporis';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->proxyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSession

Fetch a specific Session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSessionRequest();
    $request->serviceSid = 'explicabo';
    $request->sid = 'nobis';

    $requestSecurity = new FetchSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSession($request, $requestSecurity);

    if ($response->proxyV1ServiceSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchShortCode

Fetch a specific Short Code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchShortCodeRequest();
    $request->serviceSid = 'enim';
    $request->sid = 'omnis';

    $requestSecurity = new FetchShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchShortCode($request, $requestSecurity);

    if ($response->proxyV1ServiceShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInteraction

Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInteractionRequest();
    $request->page = 363711;
    $request->pageSize = 325047;
    $request->pageToken = 'excepturi';
    $request->serviceSid = 'accusantium';
    $request->sessionSid = 'iure';

    $requestSecurity = new ListInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInteraction($request, $requestSecurity);

    if ($response->listInteractionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMessageInteraction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMessageInteractionRequest();
    $request->page = 634274;
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->participantSid = 'architecto';
    $request->serviceSid = 'mollitia';
    $request->sessionSid = 'dolorem';

    $requestSecurity = new ListMessageInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMessageInteraction($request, $requestSecurity);

    if ($response->listMessageInteractionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listParticipant

Retrieve a list of all Participants in a Session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListParticipantRequest();
    $request->page = 635059;
    $request->pageSize = 161309;
    $request->pageToken = 'repellat';
    $request->serviceSid = 'mollitia';
    $request->sessionSid = 'occaecati';

    $requestSecurity = new ListParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listParticipant($request, $requestSecurity);

    if ($response->listParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPhoneNumber

Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPhoneNumberRequest();
    $request->page = 253291;
    $request->pageSize = 414369;
    $request->pageToken = 'quam';
    $request->serviceSid = 'molestiae';

    $requestSecurity = new ListPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listPhoneNumber($request, $requestSecurity);

    if ($response->listPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.

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
    $request->page = 244425;
    $request->pageSize = 623510;
    $request->pageToken = 'quia';

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

## listSession

Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionRequest();
    $request->page = 338007;
    $request->pageSize = 110375;
    $request->pageToken = 'laborum';
    $request->serviceSid = 'animi';

    $requestSecurity = new ListSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSession($request, $requestSecurity);

    if ($response->listSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShortCode

Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShortCodeRequest();
    $request->page = 317202;
    $request->pageSize = 138183;
    $request->pageToken = 'quo';
    $request->serviceSid = 'sequi';

    $requestSecurity = new ListShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listShortCode($request, $requestSecurity);

    if ($response->listShortCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePhoneNumber

Update a specific Proxy Number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberUpdatePhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePhoneNumberRequest();
    $request->requestBody = new UpdatePhoneNumberUpdatePhoneNumberRequest();
    $request->requestBody->isReserved = false;
    $request->serviceSid = 'tenetur';
    $request->sid = 'ipsam';

    $requestSecurity = new UpdatePhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updatePhoneNumber($request, $requestSecurity);

    if ($response->proxyV1ServicePhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

Update a specific Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumGeoMatchLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceEnumNumberSelectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->callbackUrl = 'https://sugary-afoul.com';
    $request->requestBody->chatInstanceSid = 'error';
    $request->requestBody->defaultTtl = 837945;
    $request->requestBody->geoMatchLevel = ServiceEnumGeoMatchLevelEnum::RADIUS;
    $request->requestBody->interceptCallbackUrl = 'http://wilted-weight.org';
    $request->requestBody->numberSelectionBehavior = ServiceEnumNumberSelectionBehaviorEnum::AVOID_STICKY;
    $request->requestBody->outOfSessionCallbackUrl = 'https://witty-avocado.name';
    $request->requestBody->uniqueName = 'voluptate';
    $request->sid = 'cum';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->proxyV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSession

Update a specific Session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSessionUpdateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSessionRequest();
    $request->requestBody = new UpdateSessionUpdateSessionRequest();
    $request->requestBody->dateExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T16:42:52.927Z');
    $request->requestBody->status = SessionEnumStatusEnum::CLOSED;
    $request->requestBody->ttl = 282807;
    $request->serviceSid = 'maiores';
    $request->sid = 'dicta';

    $requestSecurity = new UpdateSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSession($request, $requestSecurity);

    if ($response->proxyV1ServiceSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShortCode

Update a specific Short Code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeUpdateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShortCodeRequest();
    $request->requestBody = new UpdateShortCodeUpdateShortCodeRequest();
    $request->requestBody->isReserved = false;
    $request->serviceSid = 'corporis';
    $request->sid = 'dolore';

    $requestSecurity = new UpdateShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateShortCode($request, $requestSecurity);

    if ($response->proxyV1ServiceShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
