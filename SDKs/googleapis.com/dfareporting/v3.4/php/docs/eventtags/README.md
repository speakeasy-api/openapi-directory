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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'reiciendis';
    $request->id = '7b79dfeb-77a5-4c38-94ba-f91e506ef890';
    $request->key = 'dolorum';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->profileId = 'tempora';
    $request->quotaUser = 'nam';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'odio';

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
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'earum';
    $request->id = '56d385a3-c4ac-4631-b99e-26ced8f9fdb9';
    $request->key = 'dolore';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->profileId = 'accusantium';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'velit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'expedita';
    $request->eventTag->advertiserId = 'hic';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'blanditiis';
    $request->eventTag->advertiserIdDimensionValue->etag = 'vitae';
    $request->eventTag->advertiserIdDimensionValue->id = '7837b01a-fdd7-4886-a418-9eb44873f503';
    $request->eventTag->advertiserIdDimensionValue->kind = 'consectetur';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->advertiserIdDimensionValue->value = 'architecto';
    $request->eventTag->campaignId = 'sint';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'possimus';
    $request->eventTag->campaignIdDimensionValue->etag = 'tempore';
    $request->eventTag->campaignIdDimensionValue->id = 'f125ce41-52ea-4b9c-97e5-224a6a0e123b';
    $request->eventTag->campaignIdDimensionValue->kind = 'iusto';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->eventTag->campaignIdDimensionValue->value = 'non';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'esse';
    $request->eventTag->kind = 'vero';
    $request->eventTag->name = 'Derek Mohr DVM';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::WHITELIST;
    $request->eventTag->siteIds = [
        'repellat',
        'amet',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'dolore';
    $request->eventTag->type = EventTagTypeEnum::CLICK_THROUGH_EVENT_TAG;
    $request->eventTag->url = 'quo';
    $request->eventTag->urlEscapeLevels = 922207;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'illum';
    $request->key = 'iusto';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'sint';
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'sapiente';

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
    $request->accessToken = 'eligendi';
    $request->adId = 'ullam';
    $request->advertiserId = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dignissimos';
    $request->campaignId = 'corporis';
    $request->definitionsOnly = false;
    $request->enabled = false;
    $request->eventTagTypes = [
        DfareportingEventTagsListEventTagTypesEnum::IMPRESSION_IMAGE_EVENT_TAG,
    ];
    $request->fields = 'amet';
    $request->ids = [
        'nihil',
        'officiis',
    ];
    $request->key = 'dolore';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'ipsam';
    $request->searchString = 'dicta';
    $request->sortField = DfareportingEventTagsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingEventTagsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'consequatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'tempora';
    $request->eventTag->advertiserId = 'quo';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'dolor';
    $request->eventTag->advertiserIdDimensionValue->etag = 'sunt';
    $request->eventTag->advertiserIdDimensionValue->id = '97e193a2-4546-47f9-8874-c2d5cc497223';
    $request->eventTag->advertiserIdDimensionValue->kind = 'ratione';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->advertiserIdDimensionValue->value = 'iure';
    $request->eventTag->campaignId = 'aliquid';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'cum';
    $request->eventTag->campaignIdDimensionValue->etag = 'fugiat';
    $request->eventTag->campaignIdDimensionValue->id = '8fe5d00b-979e-4f20-b873-20590ccc1096';
    $request->eventTag->campaignIdDimensionValue->kind = 'eius';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->eventTag->campaignIdDimensionValue->value = 'voluptatem';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'non';
    $request->eventTag->kind = 'beatae';
    $request->eventTag->name = 'Luz Emard';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::WHITELIST;
    $request->eventTag->siteIds = [
        'ut',
        'delectus',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::ENABLED;
    $request->eventTag->subaccountId = 'ullam';
    $request->eventTag->type = EventTagTypeEnum::CLICK_THROUGH_EVENT_TAG;
    $request->eventTag->url = 'debitis';
    $request->eventTag->urlEscapeLevels = 442668;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cumque';
    $request->fields = 'ut';
    $request->id = '077d0cc3-f408-4efc-95ce-b4d6e1eae0f7';
    $request->key = 'veniam';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->profileId = 'itaque';
    $request->quotaUser = 'possimus';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'sed';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->eventTag = new EventTag();
    $request->eventTag->accountId = 'eligendi';
    $request->eventTag->advertiserId = 'id';
    $request->eventTag->advertiserIdDimensionValue = new DimensionValue();
    $request->eventTag->advertiserIdDimensionValue->dimensionName = 'distinctio';
    $request->eventTag->advertiserIdDimensionValue->etag = 'corporis';
    $request->eventTag->advertiserIdDimensionValue->id = '8b991c92-6ddb-4589-861e-7421cbe6d950';
    $request->eventTag->advertiserIdDimensionValue->kind = 'fugit';
    $request->eventTag->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->eventTag->advertiserIdDimensionValue->value = 'consequatur';
    $request->eventTag->campaignId = 'vero';
    $request->eventTag->campaignIdDimensionValue = new DimensionValue();
    $request->eventTag->campaignIdDimensionValue->dimensionName = 'id';
    $request->eventTag->campaignIdDimensionValue->etag = 'error';
    $request->eventTag->campaignIdDimensionValue->id = '30b69f7a-c2f7-42f8-8500-904911608207';
    $request->eventTag->campaignIdDimensionValue->kind = 'quas';
    $request->eventTag->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->eventTag->campaignIdDimensionValue->value = 'laudantium';
    $request->eventTag->enabledByDefault = false;
    $request->eventTag->excludeFromAdxRequests = false;
    $request->eventTag->id = 'voluptates';
    $request->eventTag->kind = 'minus';
    $request->eventTag->name = 'Wilma Breitenberg';
    $request->eventTag->siteFilterType = EventTagSiteFilterTypeEnum::BLACKLIST;
    $request->eventTag->siteIds = [
        'necessitatibus',
        'perspiciatis',
        'suscipit',
        'ullam',
    ];
    $request->eventTag->sslCompliant = false;
    $request->eventTag->status = EventTagStatusEnum::DISABLED;
    $request->eventTag->subaccountId = 'debitis';
    $request->eventTag->type = EventTagTypeEnum::CLICK_THROUGH_EVENT_TAG;
    $request->eventTag->url = 'magnam';
    $request->eventTag->urlEscapeLevels = 43270;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'voluptas';
    $request->key = 'earum';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'rerum';

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
