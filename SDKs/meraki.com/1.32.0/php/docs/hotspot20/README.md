# hotspot20

### Available Operations

* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidHotspot20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidHotspot20Request();
    $request->networkId = 'dicta';
    $request->number = 'minus';

    $response = $sdk->hotspot20->getNetworkWirelessSsidHotspot20($request);

    if ($response->getNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidHotspot20Request();
    $request->requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody();
    $request->requestBody->domains = [
        'molestiae',
        'iure',
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->mccMncs = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
    ];
    $request->requestBody->naiRealms = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
    ];
    $request->requestBody->networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum::TEST_OR_EXPERIMENTAL;
    $request->requestBody->operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator();
    $request->requestBody->operator->name = 'Clinton Hackett';
    $request->requestBody->roamConsortOis = [
        'excepturi',
    ];
    $request->requestBody->venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue();
    $request->requestBody->venue->name = 'Adam Breitenberg';
    $request->requestBody->venue->type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum::AMUSEMENT_PARK;
    $request->networkId = 'blanditiis';
    $request->number = 'voluptas';

    $response = $sdk->hotspot20->updateNetworkWirelessSsidHotspot20($request);

    if ($response->updateNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
