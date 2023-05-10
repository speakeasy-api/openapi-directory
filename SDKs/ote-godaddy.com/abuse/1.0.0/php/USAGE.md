<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreate;
use \OpenAPI\OpenAPI\Models\Shared\AbuseTicketCreateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AbuseTicketCreate();
    $request->info = 'corrupti';
    $request->infoUrl = 'provident';
    $request->intentional = false;
    $request->proxy = 'distinctio';
    $request->source = 'quibusdam';
    $request->target = 'unde';
    $request->type = AbuseTicketCreateTypeEnum::PHISHING;

    $response = $sdk->v1->createTicket($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->