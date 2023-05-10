# switchProfiles

### Available Operations

* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilesRequest();
    $request->configTemplateId = 'provident';
    $request->organizationId = 'possimus';

    $response = $sdk->switchProfiles->getOrganizationConfigTemplateSwitchProfiles($request);

    if ($response->getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
