# fullHashes

### Available Operations

* [safebrowsingFullHashesFind](#safebrowsingfullhashesfind) - Finds the full hashes that match the requested hash prefixes.

## safebrowsingFullHashesFind

Finds the full hashes that match the requested hash prefixes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SafebrowsingFullHashesFindRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSecuritySafebrowsingV4FindFullHashesRequest;
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
    $request = new SafebrowsingFullHashesFindRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest = new GoogleSecuritySafebrowsingV4FindFullHashesRequest();
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->apiClient = new GoogleSecuritySafebrowsingV4ClientInfo();
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->apiClient->clientId = 'maiores';
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->apiClient->clientVersion = 'molestiae';
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->client = new GoogleSecuritySafebrowsingV4ClientInfo();
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->client->clientId = 'quod';
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->client->clientVersion = 'quod';
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->clientStates = [
        'totam',
        'porro',
    ];
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->threatInfo = new GoogleSecuritySafebrowsingV4ThreatInfo();
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->threatInfo->platformTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum::WINDOWS,
        GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum::ANY_PLATFORM,
        GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum::IOS,
    ];
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->threatInfo->threatEntries = [
        new GoogleSecuritySafebrowsingV4ThreatEntry(),
        new GoogleSecuritySafebrowsingV4ThreatEntry(),
        new GoogleSecuritySafebrowsingV4ThreatEntry(),
    ];
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->threatInfo->threatEntryTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum::IP_RANGE,
    ];
    $request->googleSecuritySafebrowsingV4FindFullHashesRequest->threatInfo->threatTypes = [
        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum::SUBRESOURCE_FILTER,
        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum::CSD_DOWNLOAD_WHITELIST,
        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum::MALWARE,
        GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum::MALICIOUS_BINARY,
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

    $response = $sdk->fullHashes->safebrowsingFullHashesFind($request);

    if ($response->googleSecuritySafebrowsingV4FindFullHashesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
