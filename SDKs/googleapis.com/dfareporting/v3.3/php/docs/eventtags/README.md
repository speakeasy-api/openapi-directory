# eventTags

### Available Operations

* [dfareportingEventTagsDelete](#dfareportingeventtagsdelete) - Deletes an existing event tag.
* [dfareportingEventTagsGet](#dfareportingeventtagsget) - Gets one event tag by ID.
* [dfareportingEventTagsInsert](#dfareportingeventtagsinsert) - Inserts a new event tag.
* [dfareportingEventTagsList](#dfareportingeventtagslist) - Retrieves a list of event tags, possibly filtered.
* [dfareportingEventTagsPatch](#dfareportingeventtagspatch) - Updates an existing event tag. This method supports patch semantics.
* [dfareportingEventTagsUpdate](#dfareportingeventtagsupdate) - Updates an existing event tag.

## dfareportingEventTagsDelete

Deletes an existing event tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'ad';
    $request->id = 'fe431d6b-f5c8-438f-bb8c-20cb67fc4b42';
    $request->key = 'veniam';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'sint';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new DfareportingEventTagsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingEventTagsGet

Gets one event tag by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'occaecati';
    $request->id = 'f7b79dfe-b77a-45c3-8d4b-af91e506ef89';
    $request->key = 'aut';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->profileId = 'nostrum';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DfareportingEventTagsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsGet($request, $requestSecurity);

    if ($response->eventTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingEventTagsInsert

Inserts a new event tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTag;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagSiteFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'nostrum';
    $request->eventTag->advertiserId = 'maiores';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'veritatis';
    $request->eventTag->advertiserIdDimensionValue->etag = 'autem';
    $request->eventTag->advertiserIdDimensionValue->id = 'f56d385a-3c4a-4c63-9b99-e26ced8f9fdb';
    $request->eventTag->advertiserIdDimensionValue->kind = 'molestias';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->eventTag->advertiserIdDimensionValue->value = 'et';
    $request->eventTag->campaignId = 'accusantium';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'maiores';
    $request->eventTag->campaignIdDimensionValue->etag = 'nisi';
    $request->eventTag->campaignIdDimensionValue->id = '3bbf8178-37b0-41af-9d78-8624189eb448';
    $request->eventTag->campaignIdDimensionValue->kind = 'ducimus';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->campaignIdDimensionValue->value = 'sapiente';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'quis';
    $request->eventTag->kind = 'accusantium';
    $request->eventTag->name = 'Ms. Kim Zboncak';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::BLACKLIST;
    $request->eventTag->siteIds = [
        'quasi',
        'consequuntur',
        'nemo',
        'nobis',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'labore';
    $request->eventTag->type = EventTagTypeEnum::IMPRESSION_IMAGE_EVENT_TAG;
    $request->eventTag->url = 'minima';
    $request->eventTag->urlEscapeLevels = 165483;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'error';
    $request->key = 'placeat';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->profileId = 'voluptate';
    $request->quotaUser = 'earum';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DfareportingEventTagsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsInsert($request, $requestSecurity);

    if ($response->eventTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingEventTagsList

Retrieves a list of event tags, possibly filtered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsListEventTagTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->adId = 'error';
    $request->advertiserId = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->campaignId = 'itaque';
    $request->definitionsOnly = false;
    $request->enabled = false;
    $request->eventTagTypes = [
        DfareportingEventTagsListEventTagTypesEnum::IMPRESSION_IMAGE_EVENT_TAG,
    ];
    $request->fields = 'amet';
    $request->ids = [
        'iusto',
        'corrupti',
        'non',
    ];
    $request->key = 'esse';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'minima';
    $request->searchString = 'omnis';
    $request->sortField = DfareportingEventTagsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingEventTagsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DfareportingEventTagsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsList($request, $requestSecurity);

    if ($response->eventTagsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingEventTagsPatch

Updates an existing event tag. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTag;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagSiteFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'repellat';
    $request->eventTag->advertiserId = 'amet';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'cumque';
    $request->eventTag->advertiserIdDimensionValue->etag = 'dolore';
    $request->eventTag->advertiserIdDimensionValue->id = 'cce4b6d7-696f-4f3c-9747-501357e44f51';
    $request->eventTag->advertiserIdDimensionValue->kind = 'hic';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->eventTag->advertiserIdDimensionValue->value = 'libero';
    $request->eventTag->campaignId = 'consequatur';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'totam';
    $request->eventTag->campaignIdDimensionValue->etag = 'tempora';
    $request->eventTag->campaignIdDimensionValue->id = 'c3197e19-3a24-4546-bf94-874c2d5cc497';
    $request->eventTag->campaignIdDimensionValue->kind = 'qui';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->campaignIdDimensionValue->value = 'consectetur';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'ratione';
    $request->eventTag->kind = 'saepe';
    $request->eventTag->name = 'Beth Ritchie';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::BLACKLIST;
    $request->eventTag->siteIds = [
        'corporis',
        'repellendus',
        'aut',
        'voluptatem',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'excepturi';
    $request->eventTag->type = EventTagTypeEnum::IMPRESSION_JAVASCRIPT_EVENT_TAG;
    $request->eventTag->url = 'omnis';
    $request->eventTag->urlEscapeLevels = 887422;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'velit';
    $request->id = '87320590-ccc1-4096-8003-13b3e5044f65';
    $request->key = 'maiores';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->profileId = 'reprehenderit';
    $request->quotaUser = 'eos';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new DfareportingEventTagsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsPatch($request, $requestSecurity);

    if ($response->eventTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingEventTagsUpdate

Updates an existing event tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTag;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagSiteFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingEventTagsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingEventTagsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'quae';
    $request->eventTag->advertiserId = 'nihil';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'quam';
    $request->eventTag->advertiserIdDimensionValue->etag = 'assumenda';
    $request->eventTag->advertiserIdDimensionValue->id = '0cc3f408-efc1-45ce-b4d6-e1eae0f75aed';
    $request->eventTag->advertiserIdDimensionValue->kind = 'tenetur';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->advertiserIdDimensionValue->value = 'deserunt';
    $request->eventTag->campaignId = 'eligendi';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'id';
    $request->eventTag->campaignIdDimensionValue->etag = 'distinctio';
    $request->eventTag->campaignIdDimensionValue->id = '58b991c9-26dd-4b58-9461-e7421cbe6d95';
    $request->eventTag->campaignIdDimensionValue->kind = 'sit';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->campaignIdDimensionValue->value = 'a';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'consequatur';
    $request->eventTag->kind = 'vero';
    $request->eventTag->name = 'Miss Evan Dibbert';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::BLACKLIST;
    $request->eventTag->siteIds = [
        'nihil',
        'fuga',
        'cumque',
        'consequuntur',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'esse';
    $request->eventTag->type = EventTagTypeEnum::IMPRESSION_IMAGE_EVENT_TAG;
    $request->eventTag->url = 'delectus';
    $request->eventTag->urlEscapeLevels = 550519;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'voluptatem';
    $request->key = 'natus';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->profileId = 'tempora';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new DfareportingEventTagsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->eventTags->dfareportingEventTagsUpdate($request, $requestSecurity);

    if ($response->eventTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
