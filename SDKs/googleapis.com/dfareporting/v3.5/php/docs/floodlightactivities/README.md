# floodlightActivities

### Available Operations

* [dfareportingFloodlightActivitiesDelete](#dfareportingfloodlightactivitiesdelete) - Deletes an existing floodlight activity.
* [dfareportingFloodlightActivitiesGeneratetag](#dfareportingfloodlightactivitiesgeneratetag) - Generates a tag for a floodlight activity.
* [dfareportingFloodlightActivitiesGet](#dfareportingfloodlightactivitiesget) - Gets one floodlight activity by ID.
* [dfareportingFloodlightActivitiesInsert](#dfareportingfloodlightactivitiesinsert) - Inserts a new floodlight activity.
* [dfareportingFloodlightActivitiesList](#dfareportingfloodlightactivitieslist) - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivitiesPatch](#dfareportingfloodlightactivitiespatch) - Updates an existing floodlight activity. This method supports patch semantics.
* [dfareportingFloodlightActivitiesUpdate](#dfareportingfloodlightactivitiesupdate) - Updates an existing floodlight activity.

## dfareportingFloodlightActivitiesDelete

Deletes an existing floodlight activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'explicabo';
    $request->id = 'dafe81a8-8f44-4445-b3fe-cd47353f63c8';
    $request->key = 'sed';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->profileId = 'natus';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'unde';

    $requestSecurity = new DfareportingFloodlightActivitiesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesGeneratetag

Generates a tag for a floodlight activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesGeneratetagRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesGeneratetagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesGeneratetagRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'optio';
    $request->floodlightActivityId = 'at';
    $request->key = 'ad';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->profileId = 'nam';
    $request->quotaUser = 'cumque';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DfareportingFloodlightActivitiesGeneratetagSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesGeneratetag($request, $requestSecurity);

    if ($response->floodlightActivitiesGenerateTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesGet

Gets one floodlight activity by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'rem';
    $request->id = 'a7822bf9-5894-4e68-a1ad-b55f9e5d751c';
    $request->key = 'occaecati';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->profileId = 'necessitatibus';
    $request->quotaUser = 'rem';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DfareportingFloodlightActivitiesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesGet($request, $requestSecurity);

    if ($response->floodlightActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesInsert

Inserts a new floodlight activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCacheBustingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCountingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityPublisherDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityTagFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityUserDefinedVariableTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'aut';
    $request->floodlightActivity->advertiserId = 'magni';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'rerum';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'voluptatibus';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'dc345084-1f17-4644-9637-9f3fb27e21f8';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'aliquid';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'laboriosam';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::ACTIVE_SERVER_PAGE;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::SESSION_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'ipsum';
    $request->floodlightActivity->floodlightActivityGroupId = 'vel';
    $request->floodlightActivity->floodlightActivityGroupName = 'delectus';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'maxime';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'distinctio';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'cupiditate';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'hic';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '587ce525-c676-441a-8312-e5047b4c21cc';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'distinctio';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'fugit';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::IFRAME;
    $request->floodlightActivity->id = 'culpa';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'facilis';
    $request->floodlightActivity->idDimensionValue->etag = 'minus';
    $request->floodlightActivity->idDimensionValue->id = 'dc91faab-dd88-4e71-b6c4-8252d7771e7f';
    $request->floodlightActivity->idDimensionValue->kind = 'at';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->idDimensionValue->value = 'in';
    $request->floodlightActivity->kind = 'eius';
    $request->floodlightActivity->name = 'Elizabeth Moore';
    $request->floodlightActivity->notes = 'voluptatum';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::ACTIVE;
    $request->floodlightActivity->subaccountId = 'natus';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::XHTML;
    $request->floodlightActivity->tagString = 'voluptates';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U82,
    ];
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'provident';
    $request->key = 'voluptate';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'illum';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new DfareportingFloodlightActivitiesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesInsert($request, $requestSecurity);

    if ($response->floodlightActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesList

Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->advertiserId = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'id';
    $request->floodlightActivityGroupIds = [
        'cumque',
        'odio',
    ];
    $request->floodlightActivityGroupName = 'atque';
    $request->floodlightActivityGroupTagString = 'similique';
    $request->floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightConfigurationId = 'architecto';
    $request->ids = [
        'accusamus',
        'illo',
    ];
    $request->key = 'excepturi';
    $request->maxResults = 689301;
    $request->oauthToken = 'laborum';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->profileId = 'repudiandae';
    $request->quotaUser = 'minus';
    $request->searchString = 'officia';
    $request->sortField = DfareportingFloodlightActivitiesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum::ASCENDING;
    $request->tagString = 'cupiditate';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new DfareportingFloodlightActivitiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesList($request, $requestSecurity);

    if ($response->floodlightActivitiesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesPatch

Updates an existing floodlight activity. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCacheBustingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCountingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityPublisherDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityTagFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityUserDefinedVariableTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'atque';
    $request->floodlightActivity->advertiserId = 'dicta';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'magnam';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'doloremque';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'b64ff8ae-170e-4f03-b5f3-7e4aa8685559';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'ea';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'voluptate';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::JAVASCRIPT;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::STANDARD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'dolorum';
    $request->floodlightActivity->floodlightActivityGroupId = 'voluptas';
    $request->floodlightActivity->floodlightActivityGroupName = 'temporibus';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'porro';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::SALE;
    $request->floodlightActivity->floodlightConfigurationId = 'commodi';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'autem';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'praesentium';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '2cb70f8c-fd5f-4b6e-91b9-a9f74846e2c3';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'neque';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'excepturi';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::GLOBAL_SITE_TAG;
    $request->floodlightActivity->id = 'soluta';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'aut';
    $request->floodlightActivity->idDimensionValue->etag = 'ullam';
    $request->floodlightActivity->idDimensionValue->id = '36d9e75c-a006-4f53-92c1-1a25a8bf92f9';
    $request->floodlightActivity->idDimensionValue->kind = 'ducimus';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->idDimensionValue->value = 'aspernatur';
    $request->floodlightActivity->kind = 'molestias';
    $request->floodlightActivity->name = 'Al Mills';
    $request->floodlightActivity->notes = 'hic';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::ARCHIVED;
    $request->floodlightActivity->subaccountId = 'earum';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::XHTML;
    $request->floodlightActivity->tagString = 'explicabo';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U8,
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'velit';
    $request->id = '59d98387-f7a7-49cd-b2cd-2484da21729f';
    $request->key = 'qui';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new DfareportingFloodlightActivitiesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesPatch($request, $requestSecurity);

    if ($response->floodlightActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingFloodlightActivitiesUpdate

Updates an existing floodlight activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivity;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCacheBustingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityCountingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightActivityGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityFloodlightTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityPublisherDynamicTag;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityTagFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityUserDefinedVariableTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'exercitationem';
    $request->floodlightActivity->advertiserId = 'nihil';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'quia';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'quis';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'f1169ac1-e41d-48a2-bc23-e34f2dfa4a19';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'quam';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'iure';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::COLD_FUSION;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::ITEMS_SOLD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'aspernatur';
    $request->floodlightActivity->floodlightActivityGroupId = 'aspernatur';
    $request->floodlightActivity->floodlightActivityGroupName = 'et';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'ipsam';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'delectus';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'saepe';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'sunt';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '71209985-3e9f-4543-9854-439ee2244604';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'aliquam';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'expedita';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::GLOBAL_SITE_TAG;
    $request->floodlightActivity->id = 'architecto';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'minima';
    $request->floodlightActivity->idDimensionValue->etag = 'magnam';
    $request->floodlightActivity->idDimensionValue->id = '188c2f56-e85d-4a78-b2ea-bd617c3b0d51';
    $request->floodlightActivity->idDimensionValue->kind = 'culpa';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->idDimensionValue->value = 'ut';
    $request->floodlightActivity->kind = 'quidem';
    $request->floodlightActivity->name = 'Daniel Bradtke';
    $request->floodlightActivity->notes = 'nulla';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::ARCHIVED_AND_DISABLED;
    $request->floodlightActivity->subaccountId = 'alias';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::HTML;
    $request->floodlightActivity->tagString = 'temporibus';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U41,
        FloodlightActivityUserDefinedVariableTypesEnum::U1,
    ];
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'maiores';
    $request->key = 'nam';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'quod';
    $request->quotaUser = 'modi';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DfareportingFloodlightActivitiesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->floodlightActivities->dfareportingFloodlightActivitiesUpdate($request, $requestSecurity);

    if ($response->floodlightActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
