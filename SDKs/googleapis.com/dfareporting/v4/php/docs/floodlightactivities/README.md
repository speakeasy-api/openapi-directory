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
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'velit';
    $request->id = '12e5047b-4c21-4ccb-823a-bcdc91faabdd';
    $request->key = 'totam';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'officiis';
    $request->quotaUser = 'esse';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'delectus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'sed';
    $request->floodlightActivityId = 'veniam';
    $request->key = 'sed';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->profileId = 'reprehenderit';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'et';

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
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'perferendis';
    $request->id = '74009ef8-d29d-4e1d-9709-7b5da08c57fa';
    $request->key = 'eum';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->profileId = 'odio';
    $request->quotaUser = 'atque';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'quia';

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
    $request->floodlightActivity->accountId = 'ea';
    $request->floodlightActivity->advertiserId = 'accusamus';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'illo';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'excepturi';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'bafeca61-9149-4814-8b64-ff8ae170ef03';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'distinctio';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'a';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::ACTIVE_SERVER_PAGE;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::SESSION_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'numquam';
    $request->floodlightActivity->floodlightActivityGroupId = 'mollitia';
    $request->floodlightActivity->floodlightActivityGroupName = 'mollitia';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'blanditiis';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'quas';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'quis';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'enim';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '5966732a-a5dc-4b66-82cb-70f8cfd5fb6e';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'occaecati';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'quidem';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::IMAGE;
    $request->floodlightActivity->id = 'laborum';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'molestias';
    $request->floodlightActivity->idDimensionValue->etag = 'a';
    $request->floodlightActivity->idDimensionValue->id = '74846e2c-3309-4db0-936d-9e75ca006f53';
    $request->floodlightActivity->idDimensionValue->kind = 'omnis';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->idDimensionValue->value = 'quo';
    $request->floodlightActivity->kind = 'et';
    $request->floodlightActivity->name = 'Jodi Crona';
    $request->floodlightActivity->notes = 'rem';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::DISABLED_POLICY;
    $request->floodlightActivity->subaccountId = 'provident';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::HTML;
    $request->floodlightActivity->tagString = 'maiores';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U50,
        FloodlightActivityUserDefinedVariableTypesEnum::U30,
        FloodlightActivityUserDefinedVariableTypesEnum::U14,
    ];
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'unde';
    $request->key = 'laborum';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->profileId = 'hic';
    $request->quotaUser = 'corrupti';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'earum';

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
    $request->accessToken = 'explicabo';
    $request->advertiserId = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'quia';
    $request->floodlightActivityGroupIds = [
        'velit',
        'ullam',
    ];
    $request->floodlightActivityGroupName = 'provident';
    $request->floodlightActivityGroupTagString = 'possimus';
    $request->floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum::SALE;
    $request->floodlightConfigurationId = 'blanditiis';
    $request->ids = [
        'totam',
    ];
    $request->key = 'dignissimos';
    $request->maxResults = 997180;
    $request->oauthToken = 'iusto';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->profileId = 'voluptate';
    $request->quotaUser = 'cupiditate';
    $request->searchString = 'maxime';
    $request->sortField = DfareportingFloodlightActivitiesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum::ASCENDING;
    $request->tagString = 'sed';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'nulla';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'modi';
    $request->floodlightActivity->advertiserId = 'voluptatum';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'dolore';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'possimus';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'a21729f2-ac41-4ef5-b25f-1169ac1e41d8';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'deserunt';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'neque';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::PHP;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::STANDARD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'saepe';
    $request->floodlightActivity->floodlightActivityGroupId = 'amet';
    $request->floodlightActivity->floodlightActivityGroupName = 'labore';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'repellat';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'quibusdam';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'repellat';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'mollitia';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '4a197f6d-e922-4151-be17-12099853e9f5';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'modi';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'pariatur';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::IMAGE;
    $request->floodlightActivity->id = 'nemo';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'dolore';
    $request->floodlightActivity->idDimensionValue->etag = 'numquam';
    $request->floodlightActivity->idDimensionValue->id = '39ee2244-6044-43bc-9541-88c2f56e85da';
    $request->floodlightActivity->idDimensionValue->kind = 'nihil';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivity->idDimensionValue->value = 'dolorem';
    $request->floodlightActivity->kind = 'odit';
    $request->floodlightActivity->name = 'Hubert Rempel';
    $request->floodlightActivity->notes = 'et';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::DISABLED_POLICY;
    $request->floodlightActivity->subaccountId = 'nesciunt';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::XHTML;
    $request->floodlightActivity->tagString = 'aperiam';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U33,
        FloodlightActivityUserDefinedVariableTypesEnum::U11,
        FloodlightActivityUserDefinedVariableTypesEnum::U64,
        FloodlightActivityUserDefinedVariableTypesEnum::U31,
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'sit';
    $request->id = '1bad8706-d460-482b-bbdc-41ff5d4e2ae4';
    $request->key = 'doloribus';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->profileId = 'minima';
    $request->quotaUser = 'impedit';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'amet';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'fugiat';
    $request->floodlightActivity->advertiserId = 'beatae';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'dignissimos';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'nisi';
    $request->floodlightActivity->advertiserIdDimensionValue->id = '38f1edb7-8359-4ecc-9cb8-60f8cd580ba7';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'nesciunt';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'sunt';
    $request->floodlightActivity->attributionEnabled = false;
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::JAVASCRIPT;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::ITEMS_SOLD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'repellat';
    $request->floodlightActivity->floodlightActivityGroupId = 'necessitatibus';
    $request->floodlightActivity->floodlightActivityGroupName = 'tempora';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'quaerat';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'voluptate';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'magni';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'excepturi';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '7cd3b1dd-3bbc-4e24-bb76-84eff50126d7';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'veritatis';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'voluptatibus';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::GLOBAL_SITE_TAG;
    $request->floodlightActivity->id = 'facilis';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'facere';
    $request->floodlightActivity->idDimensionValue->etag = 'aut';
    $request->floodlightActivity->idDimensionValue->id = 'eb74b842-1953-4b44-bd3c-43159d33e595';
    $request->floodlightActivity->idDimensionValue->kind = 'dolor';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->idDimensionValue->value = 'consequatur';
    $request->floodlightActivity->kind = 'accusantium';
    $request->floodlightActivity->name = 'Pamela Feeney';
    $request->floodlightActivity->notes = 'aliquid';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->status = FloodlightActivityStatusEnum::ARCHIVED;
    $request->floodlightActivity->subaccountId = 'fuga';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::HTML;
    $request->floodlightActivity->tagString = 'et';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U40,
        FloodlightActivityUserDefinedVariableTypesEnum::U77,
        FloodlightActivityUserDefinedVariableTypesEnum::U24,
        FloodlightActivityUserDefinedVariableTypesEnum::U7,
    ];
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'reiciendis';
    $request->key = 'dicta';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->profileId = 'porro';
    $request->quotaUser = 'tempore';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'sunt';

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
