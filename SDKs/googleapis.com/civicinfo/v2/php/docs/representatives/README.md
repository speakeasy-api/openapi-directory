# representatives

### Available Operations

* [civicinfoRepresentativesRepresentativeInfoByAddress](#civicinforepresentativesrepresentativeinfobyaddress) - Looks up political geography and representative information for a single address.
* [civicinfoRepresentativesRepresentativeInfoByDivision](#civicinforepresentativesrepresentativeinfobydivision) - Looks up representative information for a single geographic division.

## civicinfoRepresentativesRepresentativeInfoByAddress

Looks up political geography and representative information for a single address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoRepresentativesRepresentativeInfoByAddressRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->address = '59751 Jaren Ford';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->includeOffices = false;
    $request->key = 'esse';
    $request->levels = [
        CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum::LOCALITY,
    ];
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->roles = [
        CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum::HIGHEST_COURT_JUDGE,
        CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum::HEAD_OF_GOVERNMENT,
    ];
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $response = $sdk->representatives->civicinfoRepresentativesRepresentativeInfoByAddress($request);

    if ($response->representativeInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## civicinfoRepresentativesRepresentativeInfoByDivision

Looks up representative information for a single geographic division.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByDivisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoRepresentativesRepresentativeInfoByDivisionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->levels = [
        CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum::LOCALITY,
        CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum::REGIONAL,
    ];
    $request->oauthToken = 'saepe';
    $request->ocdId = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->recursive = false;
    $request->roles = [
        CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum::OTHER_ROLE,
    ];
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $response = $sdk->representatives->civicinfoRepresentativesRepresentativeInfoByDivision($request);

    if ($response->representativeInfoData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
