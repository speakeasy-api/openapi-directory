# customFieldSelectOptions

### Available Operations

* [getCustomFieldsIdSelectOptionsJson](#getcustomfieldsidselectoptionsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#getcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Retrieve a single SelectOption from a CustomField.
* [postCustomFieldsIdSelectOptionsJson](#postcustomfieldsidselectoptionsjson) - Create a new Custom Field Select Option.
* [putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#putcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Update a SelectOption from a CustomField.

## getCustomFieldsIdSelectOptionsJson

Retrieve all Store's Custom Fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldsIdSelectOptionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldsIdSelectOptionsJsonRequest();
    $request->authtoken = 'est';
    $request->id = 653140;
    $request->login = 'laborum';

    $response = $sdk->customFieldSelectOptions->getCustomFieldsIdSelectOptionsJson($request);

    if ($response->customFieldSelectOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Retrieve a single SelectOption from a CustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest();
    $request->authtoken = 'dolores';
    $request->customFieldSelectOptionId = 210382;
    $request->id = 358152;
    $request->login = 'explicabo';

    $response = $sdk->customFieldSelectOptions->getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson($request);

    if ($response->customFieldSelectOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomFieldsIdSelectOptionsJson

Create a new Custom Field Select Option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomFieldsIdSelectOptionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldSelectOptionEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldSelectOptionEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomFieldsIdSelectOptionsJsonRequest();
    $request->customFieldSelectOptionEdit = new CustomFieldSelectOptionEdit();
    $request->customFieldSelectOptionEdit->customFieldSelectOption = new CustomFieldSelectOptionEditFields();
    $request->customFieldSelectOptionEdit->customFieldSelectOption->value = 'nobis';
    $request->authtoken = 'enim';
    $request->id = '955907af-f1a3-4a2f-a946-7739251aa52c';
    $request->login = 'sequi';

    $response = $sdk->customFieldSelectOptions->postCustomFieldsIdSelectOptionsJson($request);

    if ($response->customFieldSelectOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Update a SelectOption from a CustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldSelectOptionEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldSelectOptionEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest();
    $request->customFieldSelectOptionEdit = new CustomFieldSelectOptionEdit();
    $request->customFieldSelectOptionEdit->customFieldSelectOption = new CustomFieldSelectOptionEditFields();
    $request->customFieldSelectOptionEdit->customFieldSelectOption->value = 'tenetur';
    $request->authtoken = 'ipsam';
    $request->customFieldSelectOptionId = 662527;
    $request->id = 820994;
    $request->login = 'aut';

    $response = $sdk->customFieldSelectOptions->putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson($request);

    if ($response->customFieldSelectOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
