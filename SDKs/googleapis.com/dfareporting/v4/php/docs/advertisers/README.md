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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'placeat';
    $request->id = '9b8f759e-ac55-4a97-81d3-11352965bb8a';
    $request->key = 'odio';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'alias';
    $request->quotaUser = 'magni';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quae';

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
    $request->advertiser->accountId = 'modi';
    $request->advertiser->advertiserGroupId = 'neque';
    $request->advertiser->clickThroughUrlSuffix = 'exercitationem';
    $request->advertiser->defaultClickThroughEventTagId = 'itaque';
    $request->advertiser->defaultEmail = 'et';
    $request->advertiser->floodlightConfigurationId = 'ipsum';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'unde';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'nulla';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = 'bc2259b1-abda-48c0-b0e1-084cb0672d1a';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'facere';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'molestiae';
    $request->advertiser->id = 'provident';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'accusamus';
    $request->advertiser->idDimensionValue->etag = 'necessitatibus';
    $request->advertiser->idDimensionValue->id = 'b9665b85-efbd-402b-ae0b-e2d782259e3e';
    $request->advertiser->idDimensionValue->kind = 'similique';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->advertiser->idDimensionValue->value = 'quidem';
    $request->advertiser->kind = 'quis';
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_UNLINKED;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'molestiae';
    $request->advertiser->name = 'Kent Corkery';
    $request->advertiser->originalFloodlightConfigurationId = 'nesciunt';
    $request->advertiser->status = AdvertiserStatusEnum::ON_HOLD;
    $request->advertiser->subaccountId = 'officia';
    $request->advertiser->suspended = false;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'corporis';
    $request->key = 'qui';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatum';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'placeat';

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
    $request->accessToken = 'neque';
    $request->advertiserGroupIds = [
        'minus',
        'eum',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'magnam';
    $request->floodlightConfigurationIds = [
        'maiores',
        'tempore',
        'aperiam',
        'libero',
    ];
    $request->ids = [
        'labore',
    ];
    $request->includeAdvertisersWithoutGroupsOnly = false;
    $request->key = 'totam';
    $request->maxResults = 577709;
    $request->oauthToken = 'voluptas';
    $request->onlyParent = false;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'minus';
    $request->searchString = 'fuga';
    $request->sortField = DfareportingAdvertisersListSortFieldEnum::ID;
    $request->sortOrder = DfareportingAdvertisersListSortOrderEnum::DESCENDING;
    $request->status = DfareportingAdvertisersListStatusEnum::ON_HOLD;
    $request->subaccountId = 'delectus';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'vero';

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
    $request->advertiser->accountId = 'repellat';
    $request->advertiser->advertiserGroupId = 'pariatur';
    $request->advertiser->clickThroughUrlSuffix = 'nemo';
    $request->advertiser->defaultClickThroughEventTagId = 'reprehenderit';
    $request->advertiser->defaultEmail = 'aperiam';
    $request->advertiser->floodlightConfigurationId = 'odio';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'minima';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'in';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = '7929177d-eac6-446e-8b57-3409e3eb1e5a';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'dolores';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'dicta';
    $request->advertiser->id = 'consequuntur';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'necessitatibus';
    $request->advertiser->idDimensionValue->etag = 'nobis';
    $request->advertiser->idDimensionValue->id = '07f116db-9954-45fc-95fa-88970e189dbb';
    $request->advertiser->idDimensionValue->kind = 'velit';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->advertiser->idDimensionValue->value = 'delectus';
    $request->advertiser->kind = 'impedit';
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::NONE;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'adipisci';
    $request->advertiser->name = 'Doug Baumbach';
    $request->advertiser->originalFloodlightConfigurationId = 'libero';
    $request->advertiser->status = AdvertiserStatusEnum::APPROVED;
    $request->advertiser->subaccountId = 'cupiditate';
    $request->advertiser->suspended = false;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'non';
    $request->id = '4e2f52d8-2d35-413b-b6f4-8b656bcdb35f';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->profileId = 'debitis';
    $request->quotaUser = 'labore';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'eos';

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
    $request->advertiser->accountId = 'nostrum';
    $request->advertiser->advertiserGroupId = 'neque';
    $request->advertiser->clickThroughUrlSuffix = 'iusto';
    $request->advertiser->defaultClickThroughEventTagId = 'est';
    $request->advertiser->defaultEmail = 'rem';
    $request->advertiser->floodlightConfigurationId = 'eligendi';
    $request->advertiser->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->advertiser->floodlightConfigurationIdDimensionValue->dimensionName = 'fugiat';
    $request->advertiser->floodlightConfigurationIdDimensionValue->etag = 'unde';
    $request->advertiser->floodlightConfigurationIdDimensionValue->id = 'e7319c17-7d52-45f7-bb11-4eeb52ff785f';
    $request->advertiser->floodlightConfigurationIdDimensionValue->kind = 'quisquam';
    $request->advertiser->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->advertiser->floodlightConfigurationIdDimensionValue->value = 'nihil';
    $request->advertiser->id = 'deleniti';
    $request->advertiser->idDimensionValue = new DimensionValue();
    $request->advertiser->idDimensionValue->dimensionName = 'illo';
    $request->advertiser->idDimensionValue->etag = 'labore';
    $request->advertiser->idDimensionValue->id = 'd4c98e0c-2bb8-49eb-b5da-d636c600503d';
    $request->advertiser->idDimensionValue->kind = 'praesentium';
    $request->advertiser->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->advertiser->idDimensionValue->value = 'cum';
    $request->advertiser->kind = 'amet';
    $request->advertiser->measurementPartnerLink = new MeasurementPartnerAdvertiserLink();
    $request->advertiser->measurementPartnerLink->linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum::MEASUREMENT_PARTNER_UNLINKED;
    $request->advertiser->measurementPartnerLink->measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum::NONE;
    $request->advertiser->measurementPartnerLink->partnerAdvertiserId = 'laudantium';
    $request->advertiser->name = 'Lana Kris';
    $request->advertiser->originalFloodlightConfigurationId = 'dolorum';
    $request->advertiser->status = AdvertiserStatusEnum::ON_HOLD;
    $request->advertiser->subaccountId = 'provident';
    $request->advertiser->suspended = false;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'molestiae';
    $request->key = 'itaque';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->profileId = 'corrupti';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusamus';

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
