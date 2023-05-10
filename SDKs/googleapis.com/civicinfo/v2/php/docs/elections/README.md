# elections

### Available Operations

* [civicinfoElectionsElectionQuery](#civicinfoelectionselectionquery) - List of available elections to query.
* [civicinfoElectionsVoterInfoQuery](#civicinfoelectionsvoterinfoquery) - Looks up information relevant to a voter based on the voter's registered address.

## civicinfoElectionsElectionQuery

List of available elections to query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoElectionsElectionQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoElectionsElectionQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->elections->civicinfoElectionsElectionQuery($request);

    if ($response->electionsQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## civicinfoElectionsVoterInfoQuery

Looks up information relevant to a voter based on the voter's registered address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoElectionsVoterInfoQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoElectionsVoterInfoQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->address = '971 Strosin Wall';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->electionId = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->officialOnly = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->returnAllAvailableData = false;
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $response = $sdk->elections->civicinfoElectionsVoterInfoQuery($request);

    if ($response->voterInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
