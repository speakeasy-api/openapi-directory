<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationAddressCreateConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumAutoCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationAddressCreateConfigurationAddressRequest();
    $request->address = '5786 Little Streets';
    $request->autoCreationConversationServiceSid = 'vel';
    $request->autoCreationEnabled = false;
    $request->autoCreationStudioFlowSid = 'error';
    $request->autoCreationStudioRetryCount = 645894;
    $request->autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum::STUDIO;
    $request->autoCreationWebhookFilters = [
        'magnam',
        'debitis',
    ];
    $request->autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum::GET;
    $request->autoCreationWebhookUrl = 'delectus';
    $request->friendlyName = 'tempora';
    $request->type = ConfigurationAddressEnumTypeEnum::WHATSAPP;

    $requestSecurity = new CreateConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createConfigurationAddress($request, $requestSecurity);

    if ($response->conversationsV1ConfigurationAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->