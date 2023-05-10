<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCmsV3DomainsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCmsV3DomainsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCmsV3DomainsGetPageRequest();
    $request->after = 'corrupti';
    $request->archived = false;
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-14T08:28:11.899Z');
    $request->limit = 847252;
    $request->sort = [
        'error',
        'deserunt',
    ];
    $request->updatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-25T06:44:09.184Z');
    $request->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T12:04:06.508Z');
    $request->updatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');

    $requestSecurity = new GetCmsV3DomainsGetPageSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->domains->getCmsV3DomainsGetPage($request, $requestSecurity);

    if ($response->collectionResponseWithTotalDomainForwardPaging !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->