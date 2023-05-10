# carrierAccounts

## Overview

carrier accounts


### Available Operations

* [connectCarrier](#connectcarrier) - Connect a carrier account
* [disconnectCarrier](#disconnectcarrier) - Disconnect a carrier
* [getCarrierSettings](#getcarriersettings) - Get carrier settings
* [updateCarrierSettings](#updatecarriersettings) - Update carrier settings

## connectCarrier

Connect a carrier account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectCarrierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CarrierNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectCarrierRequest();
    $request->requestBody = new ConnectFedexRequestBody();
    $request->requestBody->accountNumber = 'iusto';
    $request->requestBody->address1 = 'excepturi';
    $request->requestBody->address2 = 'nisi';
    $request->requestBody->agreeToEula = false;
    $request->requestBody->city = 'South Jordan';
    $request->requestBody->company = 'Hauck Inc';
    $request->requestBody->countryCode = 'NE';
    $request->requestBody->email = 'john.doe@example.com';
    $request->requestBody->firstName = 'Aiyana';
    $request->requestBody->lastName = 'Hills';
    $request->requestBody->meterNumber = 'repellendus';
    $request->requestBody->nickname = 'sapiente';
    $request->requestBody->phone = '388-947-8457 x61765';
    $request->requestBody->postalCode = '59751';
    $request->requestBody->state = 'commodi';
    $request->carrierName = CarrierNameEnum::DPD;

    $response = $sdk->carrierAccounts->connectCarrier($request);

    if ($response->connectCarrierResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectCarrier

Disconnect a carrier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectCarrierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CarrierNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectCarrierRequest();
    $request->carrierId = 'se-28529731';
    $request->carrierName = CarrierNameEnum::DHL_ECOMMERCE;

    $response = $sdk->carrierAccounts->disconnectCarrier($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCarrierSettings

Get carrier settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCarrierSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CarrierNameWithSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCarrierSettingsRequest();
    $request->carrierId = 'se-28529731';
    $request->carrierName = CarrierNameWithSettingsEnum::DHL_EXPRESS;

    $response = $sdk->carrierAccounts->getCarrierSettings($request);

    if ($response->getCarrierSettingsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCarrierSettings

Update carrier settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCarrierSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CarrierNameWithSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCarrierSettingsRequest();
    $request->requestBody = new UpdateUpsSettingsRequestBody();
    $request->requestBody->accountPostalCode = 'cum';
    $request->requestBody->invoice = new UpsInvoice();
    $request->requestBody->invoice->controlId = 'se-28529731';
    $request->requestBody->invoice->invoiceAmount = 4561.5;
    $request->requestBody->invoice->invoiceCurrencyCode = 'ipsum';
    $request->requestBody->invoice->invoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T06:58:38.511Z');
    $request->requestBody->invoice->invoiceNumber = 'perferendis';
    $request->requestBody->isPrimaryAccount = false;
    $request->requestBody->mailInnovationsCostCenter = 'ad';
    $request->requestBody->mailInnovationsEndorsement = AncillaryServiceEndorsementEnum::ADDRESS_SERVICE_REQUESTED;
    $request->requestBody->nickname = 'sed';
    $request->requestBody->pickupType = UpsPickupTypeEnum::OCCASIONAL_PICKUP;
    $request->requestBody->useCarbonNeutralShippingProgram = false;
    $request->requestBody->useConsolidationServices = false;
    $request->requestBody->useGroundFreightPricing = false;
    $request->requestBody->useNegotiatedRates = false;
    $request->requestBody->useOrderNumberOnMailInnovationsLabels = false;
    $request->carrierId = 'se-28529731';
    $request->carrierName = CarrierNameWithSettingsEnum::DHL_EXPRESS;

    $response = $sdk->carrierAccounts->updateCarrierSettings($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
