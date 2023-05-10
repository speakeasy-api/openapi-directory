# notification

### Available Operations

* [booksNotificationGet](#booksnotificationget) - Returns notification details for a given notification id.

## booksNotificationGet

Returns notification details for a given notification id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksNotificationGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksNotificationGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksNotificationGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'commodi';
    $request->key = 'sapiente';
    $request->locale = 'dolores';
    $request->notificationId = 'deserunt';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->source = 'porro';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new BooksNotificationGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->notification->booksNotificationGet($request, $requestSecurity);

    if ($response->notification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
