# contacts

## Overview

Create, modify or delete contacts

### Available Operations

* [contactsCreateJson](#contactscreatejson) - Create contact
* [contactsCreateString](#contactscreatestring) - Create contact
* [contactsFetch](#contactsfetch) - Fetch contact by ID
* [contactsFetchAll](#contactsfetchall) - Fetch contacts
* [contactsRemove](#contactsremove) - Deletes a contact
* [contactsUpdate](#contactsupdate) - Updates a contact

## contactsCreateJson

Create contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactRequestMobile;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateJsonMergeStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsCreateJsonRequest();
    $request->contactRequest = new ContactRequest();
    $request->contactRequest->attributes = [
        'quis' => 'veritatis',
    ];
    $request->contactRequest->email = 'chris@sakari.io';
    $request->contactRequest->firstName = 'Chris';
    $request->contactRequest->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';
    $request->contactRequest->lastName = 'Bloggs';
    $request->contactRequest->mobile = new ContactRequestMobile();
    $request->contactRequest->mobile->country = 'Samoa';
    $request->contactRequest->mobile->number = '123-456-7890';
    $request->contactRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->accountId = 'esse';
    $request->mergeStrategy = ContactsCreateJsonMergeStrategyEnum::APPEND;

    $requestSecurity = new ContactsCreateJsonSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsCreateJson($request, $requestSecurity);

    if ($response->contactsCreateJSON201ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsCreateString

Create contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateStringRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateStringMergeStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactsCreateStringSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsCreateStringRequest();
    $request->requestBody = 'country,firstName,lastName,email,mobile,jobTitle,Address,City,State,ZipCode US,Joe,Bloggs,joebloggs@sakari.co,123-456-7890,mover,123 Text Street,San Francisco,CA,12345
    ';
    $request->accountId = 'excepturi';
    $request->mergeStrategy = ContactsCreateStringMergeStrategyEnum::APPEND;

    $requestSecurity = new ContactsCreateStringSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsCreateString($request, $requestSecurity);

    if ($response->contactsCreateString201ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsFetch

Fetch contact by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsFetchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsFetchRequest();
    $request->accountId = 'perferendis';
    $request->contactId = 'ad';

    $requestSecurity = new ContactsFetchSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsFetch($request, $requestSecurity);

    if ($response->contactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsFetchAll

Fetch contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsFetchAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsFetchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsFetchAllRequest();
    $request->accountId = 'natus';
    $request->email = 'Leora.Fadel@gmail.com';
    $request->firstName = 'Tyra';
    $request->lastName = 'Turcotte';
    $request->limit = 681820;
    $request->mobile = '464.960.0966 x612';
    $request->offset = 358152;
    $request->tags = 'explicabo';

    $requestSecurity = new ContactsFetchAllSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsFetchAll($request, $requestSecurity);

    if ($response->contactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsRemove

Deletes a contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsRemoveRequest();
    $request->accountId = 'nobis';
    $request->contactId = 'enim';

    $requestSecurity = new ContactsRemoveSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsRemove($request, $requestSecurity);

    if ($response->contactsRemove200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsUpdate

Updates a contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContactsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsUpdateRequest();
    $request->accountId = 'omnis';
    $request->contactId = 'nemo';

    $requestSecurity = new ContactsUpdateSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contacts->contactsUpdate($request, $requestSecurity);

    if ($response->contactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
