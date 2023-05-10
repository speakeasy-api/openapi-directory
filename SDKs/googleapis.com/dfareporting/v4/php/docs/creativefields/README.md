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
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'atque';
    $request->id = 'a61fa1cf-2068-48f7-bc1f-fc71dca163f2';
    $request->key = 'animi';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'laborum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'velit';
    $request->id = '34cddf85-7a9e-4618-b6c6-ab21d29dfc94';
    $request->key = 'facere';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->profileId = 'doloribus';
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'facere';

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
    $request->creativeField->accountId = 'iste';
    $request->creativeField->advertiserId = 'provident';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'dolor';
    $request->creativeField->advertiserIdDimensionValue->etag = 'sint';
    $request->creativeField->advertiserIdDimensionValue->id = '0066a6d2-d000-4355-b38c-ec086fa21e91';
    $request->creativeField->advertiserIdDimensionValue->kind = 'ipsam';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creativeField->advertiserIdDimensionValue->value = 'cumque';
    $request->creativeField->id = 'quidem';
    $request->creativeField->kind = 'non';
    $request->creativeField->name = 'Ms. Joan Mann';
    $request->creativeField->subaccountId = 'libero';
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'impedit';
    $request->key = 'quos';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->profileId = 'distinctio';
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'quaerat';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laudantium';
    $request->advertiserIds = [
        'commodi',
        'quibusdam',
        'consectetur',
        'voluptas',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'tenetur';
    $request->ids = [
        'dolore',
        'enim',
        'ullam',
        'perspiciatis',
    ];
    $request->key = 'alias';
    $request->maxResults = 404121;
    $request->oauthToken = 'quibusdam';
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->profileId = 'quia';
    $request->quotaUser = 'commodi';
    $request->searchString = 'neque';
    $request->sortField = DfareportingCreativeFieldsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCreativeFieldsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'officiis';

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
    $request->creativeField->accountId = 'neque';
    $request->creativeField->advertiserId = 'corporis';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'quod';
    $request->creativeField->advertiserIdDimensionValue->etag = 'dolores';
    $request->creativeField->advertiserIdDimensionValue->id = 'c9e81f30-be3e-4432-82d7-216576506641';
    $request->creativeField->advertiserIdDimensionValue->kind = 'rem';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creativeField->advertiserIdDimensionValue->value = 'doloremque';
    $request->creativeField->id = 'assumenda';
    $request->creativeField->kind = 'provident';
    $request->creativeField->name = 'Aaron Bode';
    $request->creativeField->subaccountId = 'deserunt';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'doloremque';
    $request->id = 'c4ecc11a-0836-4429-868b-8502a55e7f73';
    $request->key = 'quidem';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'officiis';

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
    $request->creativeField->accountId = 'magni';
    $request->creativeField->advertiserId = 'voluptatem';
    $request->creativeField->advertiserIdDimensionValue = new DimensionValue();
    $request->creativeField->advertiserIdDimensionValue->dimensionName = 'est';
    $request->creativeField->advertiserIdDimensionValue->etag = 'amet';
    $request->creativeField->advertiserIdDimensionValue->id = '19f4badf-947c-49a8-a7bc-42426665816d';
    $request->creativeField->advertiserIdDimensionValue->kind = 'fugiat';
    $request->creativeField->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creativeField->advertiserIdDimensionValue->value = 'culpa';
    $request->creativeField->id = 'atque';
    $request->creativeField->kind = 'voluptates';
    $request->creativeField->name = 'Maurice Bins';
    $request->creativeField->subaccountId = 'expedita';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'occaecati';
    $request->key = 'ipsum';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'quo';

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
