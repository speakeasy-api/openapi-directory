# threatLists

### Available Operations

* [safebrowsingThreatListsList](#safebrowsingthreatlistslist) - Lists the Safe Browsing threat lists available for download.

## safebrowsingThreatListsList

Lists the Safe Browsing threat lists available for download.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingThreatListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingThreatListsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $response = $sdk->threatLists->safebrowsingThreatListsList($request);

    if ($response->googleSecuritySafebrowsingV4ListThreatListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
