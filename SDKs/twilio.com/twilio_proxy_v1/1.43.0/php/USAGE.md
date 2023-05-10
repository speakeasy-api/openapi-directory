<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionCreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageInteractionRequest();
    $request->participantSid = 'corrupti';
    $request->requestBody = new CreateMessageInteractionCreateMessageInteractionRequest();
    $request->requestBody->body = 'provident';
    $request->requestBody->mediaUrl = [
        'https://outstanding-strait.name',
        'https://impressive-ox.name',
        'http://innocent-effect.org',
    ];
    $request->serviceSid = 'ipsa';
    $request->sessionSid = 'delectus';

    $requestSecurity = new CreateMessageInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createMessageInteraction($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipantMessageInteraction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->