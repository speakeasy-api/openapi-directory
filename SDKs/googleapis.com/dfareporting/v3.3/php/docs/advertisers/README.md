# advertisers

### Available Operations

* [dfareportingAdvertisersGet](#dfareportingadvertisersget) - Gets one advertiser by ID.
* [dfareportingAdvertisersInsert](#dfareportingadvertisersinsert) - Inserts a new advertiser.
* [dfareportingAdvertisersList](#dfareportingadvertiserslist) - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* [dfareportingAdvertisersPatch](#dfareportingadvertiserspatch) - Updates an existing advertiser. This method supports patch semantics.
* [dfareportingAdvertisersUpdate](#dfareportingadvertisersupdate) - Updates an existing advertiser.

## dfareportingAdvertisersGet

Gets one advertiser by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->fields = 'itaque';
    $request->id = '3a437000-ae6b-46bc-9b8f-759eac55a974';
    $request->key = 'veritatis';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'consectetur';
    $request->quotaUser = 'vitae';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new DfareportingAdvertisersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->dfareportingAdvertisersGet($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertisersInsert

Inserts a new advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Advertiser;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiser = new Advertiser();
    $request->advertiser->accountId = 'qui';
    $request->advertiser->advertiserGroupId = 'iste';
    $request->advertiser->clickThroughUrlSuffix = 'ex';
    $request->advertiser->defaultClickThroughEventTagId = 'nemo';
    $request->advertiser->defaultEmail = 'soluta';
    $request->advertiser->floodlightConfigurationId = 'libero';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'rem';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'dolorum';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = '72026114-35e1-439d-bc22-59b1abda8c07';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'ipsa';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'inventore';
    $request->advertiser->id = 'aperiam';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'totam';
    $request->advertiser->idDimensionValue->etag = 'dolore';
    $request->advertiser->idDimensionValue->id = 'cb0672d1-ad87-49ee-b966-5b85efbd02ba';
    $request->advertiser->idDimensionValue->kind = 'repudiandae';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->advertiser->idDimensionValue->value = 'expedita';
    $request->advertiser->kind = 'officiis';
    $request->advertiser->name = 'Rosemarie Kub';
    $request->advertiser->originalFloodlightConfigurationId = 'explicabo';
    $request->advertiser->status = AdvertiserStatusEnum::APPROVED;
    $request->advertiser->subaccountId = 'error';
    $request->advertiser->suspended = false;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'similique';
    $request->key = 'ut';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->profileId = 'quis';
    $request->quotaUser = 'beatae';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DfareportingAdvertisersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->dfareportingAdvertisersInsert($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertisersList

Retrieves a list of advertisers, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->advertiserGroupIds = [
        'numquam',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'at';
    $request->floodlightConfigurationIds = [
        'dignissimos',
        'optio',
        'necessitatibus',
    ];
    $request->ids = [
        'qui',
        'expedita',
    ];
    $request->includeAdvertisersWithoutGroupsOnly = false;
    $request->key = 'voluptatum';
    $request->maxResults = 587375;
    $request->oauthToken = 'minima';
    $request->onlyParent = false;
    $request->pageToken = 'placeat';
    $request->prettyPrint = false;
    $request->profileId = 'enim';
    $request->quotaUser = 'neque';
    $request->searchString = 'in';
    $request->sortField = DfareportingAdvertisersListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingAdvertisersListSortOrderEnum::ASCENDING;
    $request->status = DfareportingAdvertisersListStatusEnum::APPROVED;
    $request->subaccountId = 'corporis';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new DfareportingAdvertisersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->dfareportingAdvertisersList($request, $requestSecurity);

    if ($response->advertisersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertisersPatch

Updates an existing advertiser. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Advertiser;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->advertiser = new Advertiser();
    $request->advertiser->accountId = 'tempore';
    $request->advertiser->advertiserGroupId = 'aperiam';
    $request->advertiser->clickThroughUrlSuffix = 'libero';
    $request->advertiser->defaultClickThroughEventTagId = 'ratione';
    $request->advertiser->defaultEmail = 'labore';
    $request->advertiser->floodlightConfigurationId = 'totam';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'occaecati';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'voluptas';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = 'c3ca5acf-be2f-4d57-8757-7929177deac6';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'quaerat';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'officiis';
    $request->advertiser->id = 'placeat';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'quidem';
    $request->advertiser->idDimensionValue->etag = 'exercitationem';
    $request->advertiser->idDimensionValue->id = '73409e3e-b1e5-4a2b-92eb-07f116db9954';
    $request->advertiser->idDimensionValue->kind = 'nostrum';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->advertiser->idDimensionValue->value = 'eligendi';
    $request->advertiser->kind = 'sint';
    $request->advertiser->name = 'Mindy O'Kon';
    $request->advertiser->originalFloodlightConfigurationId = 'molestias';
    $request->advertiser->status = AdvertiserStatusEnum::APPROVED;
    $request->advertiser->subaccountId = 'eaque';
    $request->advertiser->suspended = false;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'iste';
    $request->id = 'dbb30fcb-33ea-4055-b197-cd44e2f52d82';
    $request->key = 'pariatur';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->profileId = 'exercitationem';
    $request->quotaUser = 'ab';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new DfareportingAdvertisersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->dfareportingAdvertisersPatch($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingAdvertisersUpdate

Updates an existing advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Advertiser;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->advertiser = new Advertiser();
    $request->advertiser->accountId = 'nisi';
    $request->advertiser->advertiserGroupId = 'voluptatibus';
    $request->advertiser->clickThroughUrlSuffix = 'quaerat';
    $request->advertiser->defaultClickThroughEventTagId = 'blanditiis';
    $request->advertiser->defaultEmail = 'distinctio';
    $request->advertiser->floodlightConfigurationId = 'nisi';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'quis';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'nisi';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = 'bcdb35ff-2e4b-4275-b7a8-cd9e7319c177';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'fugiat';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'aspernatur';
    $request->advertiser->id = 'enim';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'delectus';
    $request->advertiser->idDimensionValue->etag = 'iusto';
    $request->advertiser->idDimensionValue->id = '7b114eeb-52ff-4785-bc37-814d4c98e0c2';
    $request->advertiser->idDimensionValue->kind = 'nam';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->idDimensionValue->value = 'quas';
    $request->advertiser->kind = 'provident';
    $request->advertiser->name = 'Ira Kulas';
    $request->advertiser->originalFloodlightConfigurationId = 'similique';
    $request->advertiser->status = AdvertiserStatusEnum::ON_HOLD;
    $request->advertiser->subaccountId = 'iure';
    $request->advertiser->suspended = false;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'commodi';
    $request->key = 'aut';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->profileId = 'ad';
    $request->quotaUser = 'quae';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new DfareportingAdvertisersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->dfareportingAdvertisersUpdate($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
