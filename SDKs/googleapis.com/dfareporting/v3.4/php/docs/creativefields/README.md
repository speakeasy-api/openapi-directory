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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'commodi';
    $request->id = '723dc0f5-ae2f-43a6-b700-878756143f5a';
    $request->key = 'iure';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'nemo';

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
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'perferendis';
    $request->id = '80d40bca-cc6c-4bd6-b5f3-ec909304f926';
    $request->key = 'cum';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->profileId = 'possimus';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'nostrum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeField = new CreativeField();
    $request->creativeField->accountId = 'voluptatum';
    $request->creativeField->advertiserId = 'quasi';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'error';
    $request->creativeField->advertiserIdDimensionValue->etag = 'nobis';
    $request->creativeField->advertiserIdDimensionValue->id = '474b0ed2-0e56-4248-bff6-39a910abdcab';
    $request->creativeField->advertiserIdDimensionValue->kind = 'commodi';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creativeField->advertiserIdDimensionValue->value = 'suscipit';
    $request->creativeField->id = 'voluptate';
    $request->creativeField->kind = 'nisi';
    $request->creativeField->name = 'Daisy Howe DVM';
    $request->creativeField->subaccountId = 'quisquam';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'consequuntur';
    $request->key = 'vitae';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'amet';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'illum';

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
    $request->accessToken = 'unde';
    $request->advertiserIds = [
        'eligendi',
        'tempore',
        'amet',
    ];
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'asperiores';
    $request->ids = [
        'id',
        'atque',
        'quibusdam',
        'sit',
    ];
    $request->key = 'quo';
    $request->maxResults = 329973;
    $request->oauthToken = 'aliquam';
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->profileId = 'vero';
    $request->quotaUser = 'earum';
    $request->searchString = 'doloremque';
    $request->sortField = DfareportingCreativeFieldsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeFieldsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'tempora';

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
    $request->creativeField->accountId = 'quam';
    $request->creativeField->advertiserId = 'atque';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'officia';
    $request->creativeField->advertiserIdDimensionValue->etag = 'ex';
    $request->creativeField->advertiserIdDimensionValue->id = '1fa1cf20-688f-477c-9ffc-71dca163f2a3';
    $request->creativeField->advertiserIdDimensionValue->kind = 'eligendi';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creativeField->advertiserIdDimensionValue->value = 'perferendis';
    $request->creativeField->id = 'laborum';
    $request->creativeField->kind = 'omnis';
    $request->creativeField->name = 'Mindy Williamson';
    $request->creativeField->subaccountId = 'non';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'tenetur';
    $request->id = '857a9e61-876c-46ab-a1d2-9dfc94d6fecd';
    $request->key = 'dignissimos';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aperiam';

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
    $request->creativeField->accountId = 'eum';
    $request->creativeField->advertiserId = 'laboriosam';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'laborum';
    $request->creativeField->advertiserIdDimensionValue->etag = 'autem';
    $request->creativeField->advertiserIdDimensionValue->id = 'd2d00035-5338-4cec-886f-a21e9152cb31';
    $request->creativeField->advertiserIdDimensionValue->kind = 'sunt';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creativeField->advertiserIdDimensionValue->value = 'beatae';
    $request->creativeField->id = 'autem';
    $request->creativeField->kind = 'ducimus';
    $request->creativeField->name = 'Ross Turcotte';
    $request->creativeField->subaccountId = 'quos';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'non';
    $request->key = 'quaerat';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->profileId = 'laudantium';
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quibusdam';

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
