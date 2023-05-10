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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->creativeFieldId = 'officia';
    $request->fields = 'cupiditate';
    $request->id = '72e05672-8227-4b2d-b094-70bf7a4fa87c';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->profileId = 'non';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'voluptas';

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
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->creativeFieldId = 'non';
    $request->fields = 'necessitatibus';
    $request->id = 'bf60c321-f023-4b75-9236-7fe1a0cc8df7';
    $request->key = 'provident';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->profileId = 'aperiam';
    $request->quotaUser = 'similique';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'provident';

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
    $request->creativeFieldValue->id = 'repellendus';
    $request->creativeFieldValue->kind = 'unde';
    $request->creativeFieldValue->value = 'alias';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->creativeFieldId = 'labore';
    $request->fields = 'expedita';
    $request->key = 'in';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->profileId = 'sunt';
    $request->quotaUser = 'enim';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'maiores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->creativeFieldId = 'et';
    $request->fields = 'quas';
    $request->ids = [
        'cum',
        'dicta',
        'impedit',
    ];
    $request->key = 'tempora';
    $request->maxResults = 908249;
    $request->oauthToken = 'repudiandae';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'impedit';
    $request->quotaUser = 'quas';
    $request->searchString = 'impedit';
    $request->sortField = DfareportingCreativeFieldValuesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'ex';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeFieldValue = new CreativeFieldValue();
    $request->creativeFieldValue->id = 'veritatis';
    $request->creativeFieldValue->kind = 'maiores';
    $request->creativeFieldValue->value = 'itaque';
    $request->accessToken = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illo';
    $request->creativeFieldId = 'quo';
    $request->fields = 'dignissimos';
    $request->id = 'cbdb6eec-7437-48ba-a531-7747dc915ad2';
    $request->key = 'maxime';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->profileId = 'repellat';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeFieldValue = new CreativeFieldValue();
    $request->creativeFieldValue->id = 'esse';
    $request->creativeFieldValue->kind = 'explicabo';
    $request->creativeFieldValue->value = 'consectetur';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->creativeFieldId = 'maiores';
    $request->fields = 'exercitationem';
    $request->key = 'culpa';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'aspernatur';
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'officia';

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
