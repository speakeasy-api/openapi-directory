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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
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
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINKED;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'odio';
    $request->advertiser->name = 'Fred Champlin';
    $request->advertiser->originalFloodlightConfigurationId = 'earum';
    $request->advertiser->status = AdvertiserStatusEnum::APPROVED;
    $request->advertiser->subaccountId = 'recusandae';
    $request->advertiser->suspended = false;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'quis';
    $request->key = 'beatae';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'numquam';
    $request->advertiserGroupIds = [
        'at',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'optio';
    $request->floodlightConfigurationIds = [
        'corporis',
        'qui',
        'expedita',
        'voluptatum',
    ];
    $request->ids = [
        'minima',
        'placeat',
        'enim',
    ];
    $request->includeAdvertisersWithoutGroupsOnly = false;
    $request->key = 'neque';
    $request->maxResults = 446877;
    $request->oauthToken = 'minus';
    $request->onlyParent = false;
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'corporis';
    $request->searchString = 'magnam';
    $request->sortField = DfareportingAdvertisersListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingAdvertisersListSortOrderEnum::DESCENDING;
    $request->status = DfareportingAdvertisersListStatusEnum::ON_HOLD;
    $request->subaccountId = 'aperiam';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ratione';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiser = new Advertiser();
    $request->advertiser->accountId = 'totam';
    $request->advertiser->advertiserGroupId = 'occaecati';
    $request->advertiser->clickThroughUrlSuffix = 'voluptas';
    $request->advertiser->defaultClickThroughEventTagId = 'quo';
    $request->advertiser->defaultEmail = 'velit';
    $request->advertiser->floodlightConfigurationId = 'minus';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'fuga';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'nostrum';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = 'acfbe2fd-5707-4577-9291-77deac646ecb';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'exercitationem';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'dolorem';
    $request->advertiser->id = 'modi';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'ipsa';
    $request->advertiser->idDimensionValue->etag = 'sint';
    $request->advertiser->idDimensionValue->id = 'e3eb1e5a-2b12-4eb0-bf11-6db99545fc95';
    $request->advertiser->idDimensionValue->kind = 'hic';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->idDimensionValue->value = 'quas';
    $request->advertiser->kind = 'totam';
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_OPT_OUT;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'eaque';
    $request->advertiser->name = 'Jack Luettgen';
    $request->advertiser->originalFloodlightConfigurationId = 'tempore';
    $request->advertiser->status = AdvertiserStatusEnum::ON_HOLD;
    $request->advertiser->subaccountId = 'velit';
    $request->advertiser->suspended = false;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'cum';
    $request->id = '33ea055b-197c-4d44-a2f5-2d82d3513bb6';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->profileId = 'blanditiis';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'quis';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLink;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAdvertisersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAdvertisersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiser = new Advertiser();
    $request->advertiser->accountId = 'libero';
    $request->advertiser->advertiserGroupId = 'minus';
    $request->advertiser->clickThroughUrlSuffix = 'facere';
    $request->advertiser->defaultClickThroughEventTagId = 'facilis';
    $request->advertiser->defaultEmail = 'ipsum';
    $request->advertiser->floodlightConfigurationId = 'ad';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'voluptatibus';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'voluptatibus';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = '2e4b2753-7a8c-4d9e-b319-c177d525f77b';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'illo';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'incidunt';
    $request->advertiser->id = 'accusamus';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'saepe';
    $request->advertiser->idDimensionValue->etag = 'tempore';
    $request->advertiser->idDimensionValue->id = '52ff785f-c378-414d-8c98-e0c2bb89eb75';
    $request->advertiser->idDimensionValue->kind = 'vero';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->idDimensionValue->value = 'repellendus';
    $request->advertiser->kind = 'iure';
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINKED;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'impedit';
    $request->advertiser->name = 'Maria Bartoletti I';
    $request->advertiser->originalFloodlightConfigurationId = 'illum';
    $request->advertiser->status = AdvertiserStatusEnum::ON_HOLD;
    $request->advertiser->subaccountId = 'quidem';
    $request->advertiser->suspended = false;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'dicta';
    $request->key = 'laudantium';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'provident';

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
