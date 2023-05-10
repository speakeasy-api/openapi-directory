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
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->creativeFieldId = 'consequatur';
    $request->fields = 'esse';
    $request->id = 'edcc4aa5-f3ca-4bd9-85a9-72e056728227';
    $request->key = 'expedita';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->profileId = 'repellendus';
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'sint';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->creativeFieldId = 'sapiente';
    $request->fields = 'quam';
    $request->id = 'a4fa87cf-535a-46fa-a54e-bf60c321f023';
    $request->key = 'rerum';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'nostrum';
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'dolor';

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
    $request->creativeFieldValue->id = 'dignissimos';
    $request->creativeFieldValue->kind = 'reiciendis';
    $request->creativeFieldValue->value = 'itaque';
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->creativeFieldId = 'quod';
    $request->fields = 'minus';
    $request->key = 'quos';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->profileId = 'maiores';
    $request->quotaUser = 'odio';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'sapiente';

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
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->creativeFieldId = 'ex';
    $request->fields = 'repellendus';
    $request->ids = [
        'alias',
        'impedit',
        'sequi',
    ];
    $request->key = 'commodi';
    $request->maxResults = 287141;
    $request->oauthToken = 'expedita';
    $request->pageToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'sunt';
    $request->searchString = 'enim';
    $request->sortField = DfareportingCreativeFieldValuesListSortFieldEnum::VALUE;
    $request->sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'mollitia';

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
    $request->creativeFieldValue->id = 'accusamus';
    $request->creativeFieldValue->kind = 'et';
    $request->creativeFieldValue->value = 'quas';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->creativeFieldId = 'impedit';
    $request->fields = 'tempora';
    $request->id = 'ee2c8c6c-e611-4fee-b1c7-cbdb6eec7437';
    $request->key = 'laudantium';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'deserunt';
    $request->quotaUser = 'odit';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'sequi';

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
    $request->creativeFieldValue->id = 'iusto';
    $request->creativeFieldValue->kind = 'esse';
    $request->creativeFieldValue->value = 'magnam';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->creativeFieldId = 'cupiditate';
    $request->fields = 'illo';
    $request->key = 'exercitationem';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->profileId = 'illum';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'dolorum';

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
