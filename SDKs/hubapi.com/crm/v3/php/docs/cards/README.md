# cards

## Overview

Definitions and configuration for the CRM cards your app can display.

### Available Operations

* [deleteCrmV3ExtensionsCardsAppIdCardIdArchive](#deletecrmv3extensionscardsappidcardidarchive) - Delete a card
* [getCrmV3ExtensionsCardsAppIdCardIdGetById](#getcrmv3extensionscardsappidcardidgetbyid) - Get a card.
* [getCrmV3ExtensionsCardsAppIdGetAll](#getcrmv3extensionscardsappidgetall) - Get all cards
* [patchCrmV3ExtensionsCardsAppIdCardIdUpdate](#patchcrmv3extensionscardsappidcardidupdate) - Update a card
* [postCrmV3ExtensionsCardsAppIdCreate](#postcrmv3extensionscardsappidcreate) - Create a new card

## deleteCrmV3ExtensionsCardsAppIdCardIdArchive

Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest();
    $request->appId = 715190;
    $request->cardId = 'quibusdam';

    $requestSecurity = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->deleteCrmV3ExtensionsCardsAppIdCardIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrmV3ExtensionsCardsAppIdCardIdGetById

Returns the definition for a card with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest();
    $request->appId = 602763;
    $request->cardId = 'nulla';

    $requestSecurity = new GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->getCrmV3ExtensionsCardsAppIdCardIdGetById($request, $requestSecurity);

    if ($response->cardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrmV3ExtensionsCardsAppIdGetAll

Returns a list of cards for a given app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCrmV3ExtensionsCardsAppIdGetAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrmV3ExtensionsCardsAppIdGetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrmV3ExtensionsCardsAppIdGetAllRequest();
    $request->appId = 544883;

    $requestSecurity = new GetCrmV3ExtensionsCardsAppIdGetAllSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->getCrmV3ExtensionsCardsAppIdGetAll($request, $requestSecurity);

    if ($response->cardListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCrmV3ExtensionsCardsAppIdCardIdUpdate

Update a card definition with new details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CardPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CardActions;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayBody;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayProperty;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayPropertyDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisplayOption;
use \OpenAPI\OpenAPI\Models\Shared\DisplayOptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardFetchBodyPatch;
use \OpenAPI\OpenAPI\Models\Shared\CardObjectTypeBody;
use \OpenAPI\OpenAPI\Models\Shared\CardObjectTypeBodyNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest();
    $request->cardPatchRequest = new CardPatchRequest();
    $request->cardPatchRequest->actions = new CardActions();
    $request->cardPatchRequest->actions->baseUrls = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->cardPatchRequest->display = new CardDisplayBody();
    $request->cardPatchRequest->display->properties = [
        new CardDisplayProperty(),
        new CardDisplayProperty(),
    ];
    $request->cardPatchRequest->fetch = new CardFetchBodyPatch();
    $request->cardPatchRequest->fetch->objectTypes = [
        new CardObjectTypeBody(),
        new CardObjectTypeBody(),
    ];
    $request->cardPatchRequest->fetch->targetUrl = 'debitis';
    $request->cardPatchRequest->title = 'Mr.';
    $request->appId = 963663;
    $request->cardId = 'tempora';

    $requestSecurity = new PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->patchCrmV3ExtensionsCardsAppIdCardIdUpdate($request, $requestSecurity);

    if ($response->cardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCrmV3ExtensionsCardsAppIdCreate

Defines a new card that will become active on an account when this app is installed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCrmV3ExtensionsCardsAppIdCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CardCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CardActions;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayBody;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayProperty;
use \OpenAPI\OpenAPI\Models\Shared\CardDisplayPropertyDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisplayOption;
use \OpenAPI\OpenAPI\Models\Shared\DisplayOptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardFetchBody;
use \OpenAPI\OpenAPI\Models\Shared\CardObjectTypeBody;
use \OpenAPI\OpenAPI\Models\Shared\CardObjectTypeBodyNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCrmV3ExtensionsCardsAppIdCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCrmV3ExtensionsCardsAppIdCreateRequest();
    $request->cardCreateRequest = new CardCreateRequest();
    $request->cardCreateRequest->actions = new CardActions();
    $request->cardCreateRequest->actions->baseUrls = [
        'molestiae',
        'minus',
    ];
    $request->cardCreateRequest->display = new CardDisplayBody();
    $request->cardCreateRequest->display->properties = [
        new CardDisplayProperty(),
        new CardDisplayProperty(),
        new CardDisplayProperty(),
        new CardDisplayProperty(),
    ];
    $request->cardCreateRequest->fetch = new CardFetchBody();
    $request->cardCreateRequest->fetch->objectTypes = [
        new CardObjectTypeBody(),
        new CardObjectTypeBody(),
        new CardObjectTypeBody(),
    ];
    $request->cardCreateRequest->fetch->targetUrl = 'iusto';
    $request->cardCreateRequest->title = 'Ms.';
    $request->appId = 392785;

    $requestSecurity = new PostCrmV3ExtensionsCardsAppIdCreateSecurity();
    $requestSecurity->developerHapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->cards->postCrmV3ExtensionsCardsAppIdCreate($request, $requestSecurity);

    if ($response->cardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
