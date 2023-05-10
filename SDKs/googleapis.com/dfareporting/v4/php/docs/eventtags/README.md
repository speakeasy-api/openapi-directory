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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corrupti';
    $request->fields = 'non';
    $request->id = '7ec59e1f-67f3-4c4c-8e4b-6d7696ff3c57';
    $request->key = 'eius';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->profileId = 'corporis';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'amet';

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
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'magnam';
    $request->id = 'f51f8b08-4c31-497e-993a-245467f94874';
    $request->key = 'placeat';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'facere';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'porro';

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
    $request->eventTag->accountId = 'perspiciatis';
    $request->eventTag->advertiserId = 'ducimus';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'qui';
    $request->eventTag->advertiserIdDimensionValue->etag = 'qui';
    $request->eventTag->advertiserIdDimensionValue->id = '33e66bd8-fe5d-400b-979e-f20387320590';
    $request->eventTag->advertiserIdDimensionValue->kind = 'impedit';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->advertiserIdDimensionValue->value = 'quo';
    $request->eventTag->campaignId = 'architecto';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'voluptatem';
    $request->eventTag->campaignIdDimensionValue->etag = 'perspiciatis';
    $request->eventTag->campaignIdDimensionValue->id = '6400313b-3e50-444f-a5fe-72dc4077d0cc';
    $request->eventTag->campaignIdDimensionValue->kind = 'adipisci';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->campaignIdDimensionValue->value = 'non';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'accusantium';
    $request->eventTag->kind = 'corrupti';
    $request->eventTag->name = 'Mrs. Amos Ryan';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::BLOCKLIST;
    $request->eventTag->siteIds = [
        'dolore',
        'illum',
        'ea',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'quasi';
    $request->eventTag->type = EventTagTypeEnum::CLICK_THROUGH_EVENT_TAG;
    $request->eventTag->url = 'animi';
    $request->eventTag->urlEscapeLevels = 900916;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'veniam';
    $request->key = 'fuga';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->profileId = 'possimus';
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'deserunt';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->adId = 'distinctio';
    $request->advertiserId = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'soluta';
    $request->campaignId = 'cupiditate';
    $request->definitionsOnly = false;
    $request->enabled = false;
    $request->eventTagTypes = [
        DfareportingEventTagsListEventTagTypesEnum::IMPRESSION_IMAGE_EVENT_TAG,
        DfareportingEventTagsListEventTagTypesEnum::CLICK_THROUGH_EVENT_TAG,
        DfareportingEventTagsListEventTagTypesEnum::IMPRESSION_JAVASCRIPT_EVENT_TAG,
    ];
    $request->fields = 'sed';
    $request->ids = [
        'facere',
        'pariatur',
    ];
    $request->key = 'nam';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->profileId = 'corrupti';
    $request->quotaUser = 'sint';
    $request->searchString = 'eius';
    $request->sortField = DfareportingEventTagsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingEventTagsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'odio';

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
    $request->eventTag->accountId = 'fugit';
    $request->eventTag->advertiserId = 'inventore';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'optio';
    $request->eventTag->advertiserIdDimensionValue->etag = 'nobis';
    $request->eventTag->advertiserIdDimensionValue->id = 'e6d9502f-0ea9-430b-a9f7-ac2f72f88500';
    $request->eventTag->advertiserIdDimensionValue->kind = 'natus';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->advertiserIdDimensionValue->value = 'tempora';
    $request->eventTag->campaignId = 'occaecati';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'quasi';
    $request->eventTag->campaignIdDimensionValue->etag = 'veritatis';
    $request->eventTag->campaignIdDimensionValue->id = '60820788-8ec6-4618-bbfe-9659eb40ec16';
    $request->eventTag->campaignIdDimensionValue->kind = 'earum';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->eventTag->campaignIdDimensionValue->value = 'earum';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'nihil';
    $request->eventTag->kind = 'nostrum';
    $request->eventTag->name = 'Joseph Reilly';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::ALLOWLIST;
    $request->eventTag->siteIds = [
        'modi',
        'illum',
        'error',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::ENABLED;
    $request->eventTag->subaccountId = 'reprehenderit';
    $request->eventTag->type = EventTagTypeEnum::CLICK_THROUGH_EVENT_TAG;
    $request->eventTag->url = 'cum';
    $request->eventTag->urlEscapeLevels = 633825;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'eius';
    $request->id = '52c4842c-9b2a-4d32-9afe-81a88f444457';
    $request->key = 'ratione';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->profileId = 'saepe';
    $request->quotaUser = 'quod';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'tempora';

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
    $request->eventTag->accountId = 'consectetur';
    $request->eventTag->advertiserId = 'nemo';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'nesciunt';
    $request->eventTag->advertiserIdDimensionValue->etag = 'earum';
    $request->eventTag->advertiserIdDimensionValue->id = '63c82093-79aa-469c-95fb-cf79da18a782';
    $request->eventTag->advertiserIdDimensionValue->kind = 'eos';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->eventTag->advertiserIdDimensionValue->value = 'voluptatibus';
    $request->eventTag->campaignId = 'omnis';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'quis';
    $request->eventTag->campaignIdDimensionValue->etag = 'quos';
    $request->eventTag->campaignIdDimensionValue->id = '94e6861a-db55-4f9e-9d75-1c9fe8f7502b';
    $request->eventTag->campaignIdDimensionValue->kind = 'voluptatibus';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->campaignIdDimensionValue->value = 'quod';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'non';
    $request->eventTag->kind = 'dolore';
    $request->eventTag->name = 'Linda Kutch DVM';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::ALLOWLIST;
    $request->eventTag->siteIds = [
        'autem',
        'dolore',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::ENABLED;
    $request->eventTag->subaccountId = 'nostrum';
    $request->eventTag->type = EventTagTypeEnum::IMPRESSION_JAVASCRIPT_EVENT_TAG;
    $request->eventTag->url = 'amet';
    $request->eventTag->urlEscapeLevels = 454386;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'hic';
    $request->key = 'quidem';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'inventore';

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
