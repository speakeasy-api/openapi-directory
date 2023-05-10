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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->fields = 'est';
    $request->id = 'f75b0b53-2a4d-4a37-8baa-f4452c4842c9';
    $request->key = 'tempore';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->profileId = 'est';
    $request->quotaUser = 'at';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'explicabo';

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
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'voluptatum';
    $request->floodlightActivityId = 'quasi';
    $request->key = 'mollitia';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->profileId = 'blanditiis';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'incidunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'ratione';
    $request->id = 'fecd4735-3f63-4c82-8937-9aa69cd5fbcf';
    $request->key = 'quam';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->profileId = 'repellendus';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'rem';

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
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityTagFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\FloodlightActivityUserDefinedVariableTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingFloodlightActivitiesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingFloodlightActivitiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->floodlightActivity = new FloodlightActivity();
    $request->floodlightActivity->accountId = 'odio';
    $request->floodlightActivity->advertiserId = 'totam';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'magni';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'eos';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'bf95894e-6861-4adb-95f9-e5d751c9fe8f';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'nihil';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'aut';
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::JAVASCRIPT;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::TRANSACTIONS_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'nulla';
    $request->floodlightActivity->floodlightActivityGroupId = 'quod';
    $request->floodlightActivity->floodlightActivityGroupName = 'non';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'dolore';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightActivity->floodlightConfigurationId = 'alias';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'blanditiis';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'modi';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '1f176445-6379-4f3f-b27e-21f862657b36';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'delectus';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'vel';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::GLOBAL_SITE_TAG;
    $request->floodlightActivity->hidden = false;
    $request->floodlightActivity->id = 'cupiditate';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'hic';
    $request->floodlightActivity->idDimensionValue->etag = 'quis';
    $request->floodlightActivity->idDimensionValue->id = '87ce525c-6764-41a8-b12e-5047b4c21ccb';
    $request->floodlightActivity->idDimensionValue->kind = 'numquam';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->floodlightActivity->idDimensionValue->value = 'amet';
    $request->floodlightActivity->kind = 'culpa';
    $request->floodlightActivity->name = 'Kim Swift';
    $request->floodlightActivity->notes = 'et';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->subaccountId = 'fuga';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::XHTML;
    $request->floodlightActivity->tagString = 'distinctio';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U87,
        FloodlightActivityUserDefinedVariableTypesEnum::U53,
        FloodlightActivityUserDefinedVariableTypesEnum::U51,
        FloodlightActivityUserDefinedVariableTypesEnum::U89,
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'laboriosam';
    $request->key = 'minus';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->profileId = 'quas';
    $request->quotaUser = 'sed';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'sed';

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
    $request->accessToken = 'reprehenderit';
    $request->advertiserId = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'eveniet';
    $request->floodlightActivityGroupIds = [
        'hic',
        'at',
    ];
    $request->floodlightActivityGroupName = 'perferendis';
    $request->floodlightActivityGroupTagString = 'in';
    $request->floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum::COUNTER;
    $request->floodlightConfigurationId = 'aut';
    $request->ids = [
        'iste',
    ];
    $request->key = 'accusamus';
    $request->maxResults = 995830;
    $request->oauthToken = 'voluptatum';
    $request->pageToken = 'facere';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'natus';
    $request->searchString = 'repellendus';
    $request->sortField = DfareportingFloodlightActivitiesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum::ASCENDING;
    $request->tagString = 'facere';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ducimus';

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
    $request->floodlightActivity->accountId = 'provident';
    $request->floodlightActivity->advertiserId = 'voluptate';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'tempore';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'ullam';
    $request->floodlightActivity->advertiserIdDimensionValue->id = 'da08c57f-a6c7-48a2-96e1-9bafeca61914';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'excepturi';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'dicta';
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::ACTIVE_SERVER_PAGE;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::STANDARD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'suscipit';
    $request->floodlightActivity->floodlightActivityGroupId = 'eius';
    $request->floodlightActivity->floodlightActivityGroupName = 'maiores';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'delectus';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::SALE;
    $request->floodlightActivity->floodlightConfigurationId = 'id';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'officiis';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'ab';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = '70ef03b5-f37e-44aa-8685-55966732aa5d';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'porro';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'commodi';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::IMAGE;
    $request->floodlightActivity->hidden = false;
    $request->floodlightActivity->id = 'praesentium';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'magni';
    $request->floodlightActivity->idDimensionValue->etag = 'quisquam';
    $request->floodlightActivity->idDimensionValue->id = 'b70f8cfd-5fb6-4e91-b9a9-f74846e2c330';
    $request->floodlightActivity->idDimensionValue->kind = 'excepturi';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->idDimensionValue->value = 'soluta';
    $request->floodlightActivity->kind = 'aut';
    $request->floodlightActivity->name = 'Grace Kerluke';
    $request->floodlightActivity->notes = 'voluptates';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->subaccountId = 'ad';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::XHTML;
    $request->floodlightActivity->tagString = 'fuga';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U3,
    ];
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quis';
    $request->fields = 'dolorem';
    $request->id = '92c11a25-a8bf-492f-9742-8ad9a9f8bf82';
    $request->key = 'odit';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->profileId = 'architecto';
    $request->quotaUser = 'quia';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'velit';

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
    $request->floodlightActivity->accountId = 'provident';
    $request->floodlightActivity->advertiserId = 'possimus';
    $request->floodlightActivity->advertiserIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->advertiserIdDimensionValue->dimensionName = 'iste';
    $request->floodlightActivity->advertiserIdDimensionValue->etag = 'blanditiis';
    $request->floodlightActivity->advertiserIdDimensionValue->id = '387f7a79-cd72-4cd2-884d-a21729f2ac41';
    $request->floodlightActivity->advertiserIdDimensionValue->kind = 'necessitatibus';
    $request->floodlightActivity->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->floodlightActivity->advertiserIdDimensionValue->value = 'exercitationem';
    $request->floodlightActivity->cacheBustingType = FloodlightActivityCacheBustingTypeEnum::JSP;
    $request->floodlightActivity->countingMethod = FloodlightActivityCountingMethodEnum::STANDARD_COUNTING;
    $request->floodlightActivity->defaultTags = [
        new FloodlightActivityDynamicTag(),
        new FloodlightActivityDynamicTag(),
    ];
    $request->floodlightActivity->expectedUrl = 'maiores';
    $request->floodlightActivity->floodlightActivityGroupId = 'dicta';
    $request->floodlightActivity->floodlightActivityGroupName = 'dicta';
    $request->floodlightActivity->floodlightActivityGroupTagString = 'eum';
    $request->floodlightActivity->floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum::SALE;
    $request->floodlightActivity->floodlightConfigurationId = 'id';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue = new DimensionValue();
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->dimensionName = 'nobis';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->etag = 'quasi';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->id = 'e41d8a23-c23e-434f-adfa-4a197f6de922';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->kind = 'et';
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->floodlightActivity->floodlightConfigurationIdDimensionValue->value = 'et';
    $request->floodlightActivity->floodlightTagType = FloodlightActivityFloodlightTagTypeEnum::GLOBAL_SITE_TAG;
    $request->floodlightActivity->hidden = false;
    $request->floodlightActivity->id = 'saepe';
    $request->floodlightActivity->idDimensionValue = new DimensionValue();
    $request->floodlightActivity->idDimensionValue->dimensionName = 'sunt';
    $request->floodlightActivity->idDimensionValue->etag = 'in';
    $request->floodlightActivity->idDimensionValue->id = '12099853-e9f5-443d-8544-39ee22446044';
    $request->floodlightActivity->idDimensionValue->kind = 'dolorem';
    $request->floodlightActivity->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->floodlightActivity->idDimensionValue->value = 'impedit';
    $request->floodlightActivity->kind = 'architecto';
    $request->floodlightActivity->name = 'Danielle Bruen';
    $request->floodlightActivity->notes = 'quisquam';
    $request->floodlightActivity->publisherTags = [
        new FloodlightActivityPublisherDynamicTag(),
    ];
    $request->floodlightActivity->secure = false;
    $request->floodlightActivity->sslCompliant = false;
    $request->floodlightActivity->sslRequired = false;
    $request->floodlightActivity->subaccountId = 'asperiores';
    $request->floodlightActivity->tagFormat = FloodlightActivityTagFormatEnum::HTML;
    $request->floodlightActivity->tagString = 'vel';
    $request->floodlightActivity->userDefinedVariableTypes = [
        FloodlightActivityUserDefinedVariableTypesEnum::U53,
        FloodlightActivityUserDefinedVariableTypesEnum::U37,
        FloodlightActivityUserDefinedVariableTypesEnum::U88,
        FloodlightActivityUserDefinedVariableTypesEnum::U64,
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'odit';
    $request->key = 'officiis';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'et';

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
