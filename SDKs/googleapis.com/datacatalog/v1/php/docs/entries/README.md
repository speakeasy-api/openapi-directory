# entries

### Available Operations

* [datacatalogEntriesLookup](#datacatalogentrieslookup) - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

## datacatalogEntriesLookup

Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogEntriesLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogEntriesLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogEntriesLookupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'beatae';
    $request->fullyQualifiedName = 'commodi';
    $request->key = 'molestiae';
    $request->linkedResource = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->sqlResource = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DatacatalogEntriesLookupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entries->datacatalogEntriesLookup($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1Entry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
