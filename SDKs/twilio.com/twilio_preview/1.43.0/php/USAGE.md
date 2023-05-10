<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesCertificateRequest();
    $request->fleetSid = 'corrupti';
    $request->requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest();
    $request->requestBody->certificateData = 'provident';
    $request->requestBody->deviceSid = 'distinctio';
    $request->requestBody->friendlyName = 'quibusdam';

    $requestSecurity = new CreateDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->