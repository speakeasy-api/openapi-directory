<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactInMailinglistRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactInMailingList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactInMailinglistRequest();
    $request->createContactInMailingList = new CreateContactInMailingList();
    $request->createContactInMailingList->email = 'Larue_Rau85@yahoo.com';
    $request->createContactInMailingList->firstName = 'Karley';
    $request->createContactInMailingList->lastName = 'Stamm';
    $request->createContactInMailingList->unsubscribed = false;
    $request->directoryId = 'vel';
    $request->mailingListId = 'error';

    $response = $sdk->createContactInMailinglist($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->