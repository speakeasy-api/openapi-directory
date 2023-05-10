# account

## Overview

For additional information about the ShipEngine account. 


### Available Operations

* [createAccountImage](#createaccountimage) - Create an Account Image
* [deleteAccountImageById](#deleteaccountimagebyid) - Delete Account Image By Id
* [getAccountSettingsImagesById](#getaccountsettingsimagesbyid) - Get Account Image By ID
* [listAccountImages](#listaccountimages) - List Account Images
* [listAccountSettings](#listaccountsettings) - List Account Settings
* [updateAccountSettingsImagesById](#updateaccountsettingsimagesbyid) - Update Account Image By ID

## createAccountImage

Create an Account Image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountSettingsImageRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccountSettingsImageRequestBodyImageContentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountSettingsImageRequestBodyInput();
    $request->imageContentType = CreateAccountSettingsImageRequestBodyImageContentTypeEnum::IMAGE_JPEG;
    $request->imageData = 'iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==';
    $request->isDefault = false;
    $request->name = 'My logo';

    $response = $sdk->account->createAccountImage($request);

    if ($response->getAccountSettingsImagesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountImageById

Delete Account Image By Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountImageByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountImageByIdRequest();
    $request->labelImageId = 'img_DtBXupDBxREpHnwEXhTfgK';

    $response = $sdk->account->deleteAccountImageById($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSettingsImagesById

Retrieve information for an account image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsImagesByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSettingsImagesByIdRequest();
    $request->labelImageId = 'img_DtBXupDBxREpHnwEXhTfgK';

    $response = $sdk->account->getAccountSettingsImagesById($request);

    if ($response->getAccountSettingsImagesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountImages

List all account images for the ShipEngine account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->account->listAccountImages();

    if ($response->listAccountSettingsImagesResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountSettings

List all account settings for the ShipEngine account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->account->listAccountSettings();

    if ($response->getAccountSettingsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountSettingsImagesById

Update information for an account image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSettingsImagesByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountSettingsImageRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccountSettingsImageRequestBodyImageContentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountSettingsImagesByIdRequest();
    $request->labelImageId = 'img_DtBXupDBxREpHnwEXhTfgK';
    $request->updateAccountSettingsImageRequestBodyInput = new UpdateAccountSettingsImageRequestBodyInput();
    $request->updateAccountSettingsImageRequestBodyInput->imageContentType = UpdateAccountSettingsImageRequestBodyImageContentTypeEnum::IMAGE_JPEG;
    $request->updateAccountSettingsImageRequestBodyInput->imageData = 'iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==';
    $request->updateAccountSettingsImageRequestBodyInput->isDefault = false;
    $request->updateAccountSettingsImageRequestBodyInput->name = 'My logo';

    $response = $sdk->account->updateAccountSettingsImagesById($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
