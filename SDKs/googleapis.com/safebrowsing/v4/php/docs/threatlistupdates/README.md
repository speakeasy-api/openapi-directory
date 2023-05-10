# threatListUpdates

### Available Operations

* [safebrowsingThreatListUpdatesFetch](#safebrowsingthreatlistupdatesfetch) - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

## safebrowsingThreatListUpdatesFetch

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingThreatListUpdatesFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingThreatListUpdatesFetchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest = new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest();
    $request->googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest->client = new GoogleSecuritySafebrowsingV4ClientInfo();
    $request->googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest->client->clientId = 'mollitia';
    $request->googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest->client->clientVersion = 'laborum';
    $request->googleSecuritySafebrowsingV4FetchThreatListUpdatesRequest->listUpdateRequests = [
        new GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest(),
    ];
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $response = $sdk->threatListUpdates->safebrowsingThreatListUpdatesFetch($request);

    if ($response->googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
