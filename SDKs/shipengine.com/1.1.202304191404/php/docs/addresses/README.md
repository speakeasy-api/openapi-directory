# addresses

## Overview

No matter your shipping volume, failed deliveries and address change surcharges cut into your bottom line and damage perception with customers. Our address validation services ensure your packages make it to the right place the first time. [Learn how to leverage our address validation services here.](https://www.shipengine.com/docs/addresses/validation/)

ShipEngine supports address validation for virtually every country on Earth, including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.

<https://www.shipengine.com/docs/addresses/validation/>
### Available Operations

* [parseAddress](#parseaddress) - Parse an address
* [validateAddress](#validateaddress) - Validate An Address

## parseAddress

The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.

> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ParseAddressRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PartialAddress;
use \OpenAPI\OpenAPI\Models\Shared\PartialAddressAddressResidentialIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ParseAddressRequestBody();
    $request->address = new PartialAddress();
    $request->address->addressLine1 = '1999 Bishop Grandin Blvd.';
    $request->address->addressLine2 = 'Unit 408';
    $request->address->addressLine3 = 'Building #7';
    $request->address->addressResidentialIndicator = PartialAddressAddressResidentialIndicatorEnum::NO;
    $request->address->cityLocality = 'Winnipeg';
    $request->address->companyName = 'The Home Depot';
    $request->address->countryCode = 'CA';
    $request->address->email = 'example@example.com';
    $request->address->name = 'John Doe';
    $request->address->phone = '+1 204-253-9411 ext. 123';
    $request->address->postalCode = '78756-3717';
    $request->address->stateProvince = 'Manitoba';
    $request->text = 'Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.';

    $response = $sdk->addresses->parseAddress($request);

    if ($response->parseAddressResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateAddress

Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AddressToValidate;
use \OpenAPI\OpenAPI\Models\Shared\AddressToValidateAddressResidentialIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new AddressToValidate(),
        new AddressToValidate(),
        new AddressToValidate(),
        new AddressToValidate(),
    ]

    $response = $sdk->addresses->validateAddress($request);

    if ($response->validateAddressResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
