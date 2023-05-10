# users

### Available Operations

* [drivelabelsUsersGetCapabilities](#drivelabelsusersgetcapabilities) - Gets the user capabilities.

## drivelabelsUsersGetCapabilities

Gets the user capabilities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsUsersGetCapabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrivelabelsUsersGetCapabilitiesViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrivelabelsUsersGetCapabilitiesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->customer = 'debitis';
    $request->fields = 'eius';
    $request->key = 'maxime';
    $request->name = 'Mr. Andres King';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';
    $request->useAdminAccess = false;
    $request->view = DrivelabelsUsersGetCapabilitiesViewEnum::LABEL_VIEW_FULL;

    $response = $sdk->users->drivelabelsUsersGetCapabilities($request);

    if ($response->googleAppsDriveLabelsV2UserCapabilities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
