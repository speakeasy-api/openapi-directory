# creativeFieldValues

### Available Operations

* [dfareportingCreativeFieldValuesDelete](#dfareportingcreativefieldvaluesdelete) - Deletes an existing creative field value.
* [dfareportingCreativeFieldValuesGet](#dfareportingcreativefieldvaluesget) - Gets one creative field value by ID.
* [dfareportingCreativeFieldValuesInsert](#dfareportingcreativefieldvaluesinsert) - Inserts a new creative field value.
* [dfareportingCreativeFieldValuesList](#dfareportingcreativefieldvalueslist) - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldValuesPatch](#dfareportingcreativefieldvaluespatch) - Updates an existing creative field value. This method supports patch semantics.
* [dfareportingCreativeFieldValuesUpdate](#dfareportingcreativefieldvaluesupdate) - Updates an existing creative field value.

## dfareportingCreativeFieldValuesDelete

Deletes an existing creative field value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->creativeFieldId = 'esse';
    $request->fields = 'magnam';
    $request->id = '7dc915ad-2caf-45dd-a723-dc0f5ae2f3a6';
    $request->key = 'harum';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->profileId = 'doloremque';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DfareportingCreativeFieldValuesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldValuesGet

Gets one creative field value by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->creativeFieldId = 'ab';
    $request->fields = 'quaerat';
    $request->id = '3f5a6c98-b555-4540-80d4-0bcacc6cbd6b';
    $request->key = 'enim';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->profileId = 'consectetur';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DfareportingCreativeFieldValuesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesGet($request, $requestSecurity);

    if ($response->creativeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldValuesInsert

Inserts a new creative field value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeFieldValue = new CreativeFieldValue();
    $request->creativeFieldValue->id = 'provident';
    $request->creativeFieldValue->kind = 'adipisci';
    $request->creativeFieldValue->value = 'accusantium';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->creativeFieldId = 'explicabo';
    $request->fields = 'vel';
    $request->key = 'cum';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->profileId = 'possimus';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new DfareportingCreativeFieldValuesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesInsert($request, $requestSecurity);

    if ($response->creativeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldValuesList

Retrieves a list of creative field values, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->creativeFieldId = 'nobis';
    $request->fields = 'tempora';
    $request->ids = [
        'eius',
        'expedita',
    ];
    $request->key = 'aperiam';
    $request->maxResults = 915408;
    $request->oauthToken = 'possimus';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'repudiandae';
    $request->searchString = 'corporis';
    $request->sortField = DfareportingCreativeFieldValuesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new DfareportingCreativeFieldValuesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesList($request, $requestSecurity);

    if ($response->creativeFieldValuesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldValuesPatch

Updates an existing creative field value. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeFieldValue = new CreativeFieldValue();
    $request->creativeFieldValue->id = 'maiores';
    $request->creativeFieldValue->kind = 'asperiores';
    $request->creativeFieldValue->value = 'autem';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->creativeFieldId = 'provident';
    $request->fields = 'beatae';
    $request->id = '0abdcab6-2676-4696-a1ec-00221b335d89';
    $request->key = 'similique';
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->profileId = 'tempore';
    $request->quotaUser = 'amet';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DfareportingCreativeFieldValuesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesPatch($request, $requestSecurity);

    if ($response->creativeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativeFieldValuesUpdate

Updates an existing creative field value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldValue;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeFieldValuesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeFieldValuesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeFieldValue = new CreativeFieldValue();
    $request->creativeFieldValue->id = 'temporibus';
    $request->creativeFieldValue->kind = 'id';
    $request->creativeFieldValue->value = 'atque';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->creativeFieldId = 'veniam';
    $request->fields = 'aliquam';
    $request->key = 'provident';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DfareportingCreativeFieldValuesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeFieldValues->dfareportingCreativeFieldValuesUpdate($request, $requestSecurity);

    if ($response->creativeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
