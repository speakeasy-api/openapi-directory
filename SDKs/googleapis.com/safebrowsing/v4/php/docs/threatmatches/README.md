# threatMatches

### Available Operations

* [safebrowsingThreatMatchesFind](#safebrowsingthreatmatchesfind) - Finds the threat entries that match the Safe Browsing lists.

## safebrowsingThreatMatchesFind

Finds the threat entries that match the Safe Browsing lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingThreatMatchesFindRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FindThreatMatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ClientInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatEntry;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SafebrowsingThreatMatchesFindRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest = new GoogleSecuritySafebrowsingV4FindThreatMatchesRequest();
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->client = new GoogleSecuritySafebrowsingV4ClientInfo();
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->client->clientId = 'mollitia';
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->client->clientVersion = 'occaecati';
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->threatInfo = new GoogleSecuritySafebrowsingV4ThreatInfo();
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->threatInfo->platformTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum::ANDROID,
        GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum::OSX,
    ];
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->threatInfo->threatEntries = [
        new GoogleSecuritySafebrowsingV4ThreatEntry(),
        new GoogleSecuritySafebrowsingV4ThreatEntry(),
    ];
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->threatInfo->threatEntryTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum::CHROME_EXTENSION,
    ];
    $request->googleSecuritySafebrowsingV4FindThreatMatchesRequest->threatInfo->threatTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum::API_ABUSE,
    ];
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $response = $sdk->threatMatches->safebrowsingThreatMatchesFind($request);

    if ($response->googleSecuritySafebrowsingV4FindThreatMatchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
