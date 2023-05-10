# creativeFields

### Available Operations

* [dfareportingCreativeFieldsDelete](#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [dfareportingCreativeFieldsGet](#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [dfareportingCreativeFieldsInsert](#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [dfareportingCreativeFieldsList](#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldsPatch](#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [dfareportingCreativeFieldsUpdate](#dfareportingcreativefieldsupdate) - Updates an existing creative field.

## dfareportingCreativeFieldsDelete

Deletes an existing creative field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloremque';
    $request->fields = 'perferendis';
    $request->id = '87875614-3f5a-46c9-8b55-554080d40bca';
    $request->key = 'porro';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->profileId = 'nisi';
    $request->quotaUser = 'cumque';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new DfareportingCreativeFieldsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldsGet

Gets one creative field by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'consectetur';
    $request->id = 'ec909304-f926-4bad-a553-819b474b0ed2';
    $request->key = 'voluptatem';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'corporis';
    $request->quotaUser = 'ea';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new DfareportingCreativeFieldsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsGet($request, $requestSecurity);

    if ($response->creativeField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldsInsert

Inserts a new creative field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeField;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeField = new CreativeField();
    $request->creativeField->accountId = 'hic';
    $request->creativeField->advertiserId = 'maiores';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'asperiores';
    $request->creativeField->advertiserIdDimensionValue->etag = 'autem';
    $request->creativeField->advertiserIdDimensionValue->id = '39a910ab-dcab-4626-b669-6e1ec00221b3';
    $request->creativeField->advertiserIdDimensionValue->kind = 'amet';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creativeField->advertiserIdDimensionValue->value = 'illum';
    $request->creativeField->id = 'praesentium';
    $request->creativeField->kind = 'unde';
    $request->creativeField->name = 'Delbert Reynolds';
    $request->creativeField->subaccountId = 'nobis';
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'atque';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->profileId = 'quo';
    $request->quotaUser = 'veniam';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new DfareportingCreativeFieldsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsInsert($request, $requestSecurity);

    if ($response->creativeField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldsList

Retrieves a list of creative fields, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->advertiserIds = [
        'ipsum',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'tempora';
    $request->ids = [
        'quam',
        'atque',
        'officia',
    ];
    $request->key = 'ex';
    $request->maxResults = 101770;
    $request->oauthToken = 'a';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->profileId = 'veritatis';
    $request->quotaUser = 'quod';
    $request->searchString = 'a';
    $request->sortField = DfareportingCreativeFieldsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeFieldsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DfareportingCreativeFieldsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsList($request, $requestSecurity);

    if ($response->creativeFieldsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldsPatch

Updates an existing creative field. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeField;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeField = new CreativeField();
    $request->creativeField->accountId = 'tenetur';
    $request->creativeField->advertiserId = 'voluptate';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'quam';
    $request->creativeField->advertiserIdDimensionValue->etag = 'quod';
    $request->creativeField->advertiserIdDimensionValue->id = '1ffc71dc-a163-4f2a-bc80-a97ff334cddf';
    $request->creativeField->advertiserIdDimensionValue->kind = 'molestias';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creativeField->advertiserIdDimensionValue->value = 'esse';
    $request->creativeField->id = 'laborum';
    $request->creativeField->kind = 'perspiciatis';
    $request->creativeField->name = 'Duane Botsford';
    $request->creativeField->subaccountId = 'commodi';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'quidem';
    $request->id = '21d29dfc-94d6-4fec-9799-390066a6d2d0';
    $request->key = 'voluptatem';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DfareportingCreativeFieldsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsPatch($request, $requestSecurity);

    if ($response->creativeField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldsUpdate

Updates an existing creative field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeField;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeField = new CreativeField();
    $request->creativeField->accountId = 'quas';
    $request->creativeField->advertiserId = 'maxime';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'recusandae';
    $request->creativeField->advertiserIdDimensionValue->etag = 'cumque';
    $request->creativeField->advertiserIdDimensionValue->id = '086fa21e-9152-4cb3-9191-67b8e3c8db03';
    $request->creativeField->advertiserIdDimensionValue->kind = 'quaerat';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creativeField->advertiserIdDimensionValue->value = 'laudantium';
    $request->creativeField->id = 'repellendus';
    $request->creativeField->kind = 'commodi';
    $request->creativeField->name = 'Vincent Hodkiewicz';
    $request->creativeField->subaccountId = 'tenetur';
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'ullam';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'ex';
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new DfareportingCreativeFieldsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFields->dfareportingCreativeFieldsUpdate($request, $requestSecurity);

    if ($response->creativeField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
