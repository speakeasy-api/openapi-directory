# users

### Available Operations

* [getAccessToken](#getaccesstoken) - Get access token details
* [getUser](#getuser) - Get user details
* [getUserSubscriptionList](#getusersubscriptionlist) - List user subscriptions

## getAccessToken

Get access token details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccessTokenSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->getAccessToken($requestSecurity);

    if ($response->accessTokenDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Get user details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->getUser($requestSecurity);

    if ($response->userDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserSubscriptionList

List user subscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSubscriptionListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetUserSubscriptionListSecurity();
    $requestSecurity->customerAccessCode = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->getUserSubscriptionList($requestSecurity);

    if ($response->subscriptionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
