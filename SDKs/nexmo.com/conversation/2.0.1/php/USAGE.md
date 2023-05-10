<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConversationProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationRequestBody();
    $request->displayName = 'Customer Chat';
    $request->imageUrl = 'https://example.com/image.png';
    $request->name = 'customer_chat';
    $request->properties = new ConversationProperties();
    $request->properties->ttl = 60;

    $response = $sdk->conversation->createConversation($request);

    if ($response->createConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->