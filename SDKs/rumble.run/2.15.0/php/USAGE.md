<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptions;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CredentialOptions();
    $request->acl = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->cidrs = '10.0.0.17/32, 192.168.1.0/24';
    $request->global = false;
    $request->name = 'credentials_name';
    $request->secret = new SNMPv3CredentialFields();
    $request->secret->authPassphrase = 'authpass';
    $request->secret->authProtocol = 'sha';
    $request->secret->context = 'vlan-32';
    $request->secret->privacyPassphrase = 'privpass';
    $request->secret->privacyProtocol = 'aes';
    $request->secret->username = 'user';
    $request->type = CredentialOptionsTypeEnum::MIRADORE_API_KEY_V1;

    $requestSecurity = new CreateAccountCredentialSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountCredential($request, $requestSecurity);

    if ($response->credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->