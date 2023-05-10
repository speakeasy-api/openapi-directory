# connectorPlatformRegions

### Available Operations

* [integrationsConnectorPlatformRegionsEnumerate](#integrationsconnectorplatformregionsenumerate) - Enumerates the regions for which Connector Platform is provisioned.

## integrationsConnectorPlatformRegionsEnumerate

Enumerates the regions for which Connector Platform is provisioned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsConnectorPlatformRegionsEnumerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsConnectorPlatformRegionsEnumerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsConnectorPlatformRegionsEnumerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new IntegrationsConnectorPlatformRegionsEnumerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->connectorPlatformRegions->integrationsConnectorPlatformRegionsEnumerate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
