# threatLists

### Available Operations

* [webriskThreatListsComputeDiff](#webriskthreatlistscomputediff) - Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

## webriskThreatListsComputeDiff

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebriskThreatListsComputeDiffRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskThreatListsComputeDiffThreatTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebriskThreatListsComputeDiffSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebriskThreatListsComputeDiffRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->constraintsMaxDatabaseEntries = 623510;
    $request->constraintsMaxDiffEntries = 158969;
    $request->constraintsSupportedCompressions = [
        WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum::COMPRESSION_TYPE_UNSPECIFIED,
        WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum::RICE,
    ];
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->threatType = WebriskThreatListsComputeDiffThreatTypeEnum::THREAT_TYPE_UNSPECIFIED;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';
    $request->versionToken = 'id';

    $requestSecurity = new WebriskThreatListsComputeDiffSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->threatLists->webriskThreatListsComputeDiff($request, $requestSecurity);

    if ($response->googleCloudWebriskV1ComputeThreatListDiffResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
