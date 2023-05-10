# domains

## Overview

Operations for fetching domains

### Available Operations

* [getCmsV3DomainsGetPage](#getcmsv3domainsgetpage) - Get current domains
* [getCmsV3DomainsDomainIdGetById](#getcmsv3domainsdomainidgetbyid) - Get a single domain

## getCmsV3DomainsGetPage

Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.

### Example Usage

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
    $request->after = 'tempora';
    $request->archived = false;
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-10T15:39:12.517Z');
    $request->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T14:47:59.325Z');
    $request->limit = 568045;
    $request->sort = [
        'recusandae',
        'temporibus',
    ];
    $request->updatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T20:24:33.984Z');
    $request->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->updatedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T14:12:14.246Z');

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

## getCmsV3DomainsDomainIdGetById

Returns a single domains with the id specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCmsV3DomainsDomainIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCmsV3DomainsDomainIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCmsV3DomainsDomainIdGetByIdRequest();
    $request->domainId = 'repellendus';

    $requestSecurity = new GetCmsV3DomainsDomainIdGetByIdSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->domains->getCmsV3DomainsDomainIdGetById($request, $requestSecurity);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
