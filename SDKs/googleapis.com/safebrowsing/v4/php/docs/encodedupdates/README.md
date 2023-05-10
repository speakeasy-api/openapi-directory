# encodedUpdates

### Available Operations

* [safebrowsingEncodedUpdatesGet](#safebrowsingencodedupdatesget)

## safebrowsingEncodedUpdatesGet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingEncodedUpdatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingEncodedUpdatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->clientId = 'veritatis';
    $request->clientVersion = 'deserunt';
    $request->encodedRequest = 'perferendis';
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $response = $sdk->encodedUpdates->safebrowsingEncodedUpdatesGet($request);

    if ($response->googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
