# loginSecurity

### Available Operations

* [getOrganizationLoginSecurity](#getorganizationloginsecurity) - Returns the login security settings for an organization.
* [updateOrganizationLoginSecurity](#updateorganizationloginsecurity) - Update the login security settings for an organization

## getOrganizationLoginSecurity

Returns the login security settings for an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLoginSecurityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLoginSecurityRequest();
    $request->organizationId = 'aut';

    $response = $sdk->loginSecurity->getOrganizationLoginSecurity($request);

    if ($response->getOrganizationLoginSecurity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationLoginSecurity

Update the login security settings for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBodyApiAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationLoginSecurityRequest();
    $request->requestBody = new UpdateOrganizationLoginSecurityRequestBody();
    $request->requestBody->accountLockoutAttempts = 747951;
    $request->requestBody->apiAuthentication = new UpdateOrganizationLoginSecurityRequestBodyApiAuthentication();
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys = new UpdateOrganizationLoginSecurityRequestBodyApiAuthenticationIpRestrictionsForKeys();
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys->enabled = false;
    $request->requestBody->apiAuthentication->ipRestrictionsForKeys->ranges = [
        'maiores',
        'autem',
        'perspiciatis',
        'saepe',
    ];
    $request->requestBody->enforceAccountLockout = false;
    $request->requestBody->enforceDifferentPasswords = false;
    $request->requestBody->enforceIdleTimeout = false;
    $request->requestBody->enforceLoginIpRanges = false;
    $request->requestBody->enforcePasswordExpiration = false;
    $request->requestBody->enforceStrongPasswords = false;
    $request->requestBody->enforceTwoFactorAuth = false;
    $request->requestBody->idleTimeoutMinutes = 72432;
    $request->requestBody->loginIpRanges = [
        'quae',
    ];
    $request->requestBody->numDifferentPasswords = 83554;
    $request->requestBody->passwordExpirationDays = 314547;
    $request->organizationId = 'ducimus';

    $response = $sdk->loginSecurity->updateOrganizationLoginSecurity($request);

    if ($response->updateOrganizationLoginSecurity200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
