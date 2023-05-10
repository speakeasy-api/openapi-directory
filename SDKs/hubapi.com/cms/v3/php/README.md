# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [domains](docs/domains/README.md)

* [getCmsV3DomainsGetPage](docs/domains/README.md#getcmsv3domainsgetpage) - Get current domains
* [getCmsV3DomainsDomainIdGetById](docs/domains/README.md#getcmsv3domainsdomainidgetbyid) - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
