# customFields

### Available Operations

* [deleteCustomFieldsIdJson](#deletecustomfieldsidjson) - Delete an existing CustomField.
* [deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#deletecustomfieldsidselectoptionscustomfieldselectoptionidjson) - Delete an existing CustomFieldSelectOption.
* [getCustomFieldsJson](#getcustomfieldsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdJson](#getcustomfieldsidjson) - Retrieve a single CustomField.
* [postCustomFieldsJson](#postcustomfieldsjson) - Create a new Custom Field.
* [putCustomFieldsIdJson](#putcustomfieldsidjson) - Update a CustomField.

## deleteCustomFieldsIdJson

Delete an existing CustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomFieldsIdJsonRequest();
    $request->authtoken = 'quasi';
    $request->id = 622846;
    $request->login = 'temporibus';

    $response = $sdk->customFields->deleteCustomFieldsIdJson($request);

    if ($response->deleteCustomFieldsIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Delete an existing CustomFieldSelectOption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest();
    $request->authtoken = 'laborum';
    $request->customFieldSelectOptionId = 96098;
    $request->id = 971945;
    $request->login = 'voluptatibus';

    $response = $sdk->customFields->deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson($request);

    if ($response->deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFieldsJson

Retrieve all Store's Custom Fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldsJsonRequest();
    $request->authtoken = 'vero';
    $request->login = 'nihil';

    $response = $sdk->customFields->getCustomFieldsJson($request);

    if ($response->customFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFieldsIdJson

Retrieve a single CustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldsIdJsonRequest();
    $request->authtoken = 'praesentium';
    $request->id = 976762;
    $request->login = 'ipsa';

    $response = $sdk->customFields->getCustomFieldsIdJson($request);

    if ($response->customField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomFieldsJson

Create a new Custom Field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomFieldsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEditFieldsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomFieldsJsonRequest();
    $request->customFieldEdit = new CustomFieldEdit();
    $request->customFieldEdit->customField = new CustomFieldEditFields();
    $request->customFieldEdit->customField->label = 'omnis';
    $request->customFieldEdit->customField->type = CustomFieldEditFieldsTypeEnum::SELECTION;
    $request->customFieldEdit->customField->values = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->authtoken = 'ut';
    $request->login = 'maiores';

    $response = $sdk->customFields->postCustomFieldsJson($request);

    if ($response->customField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCustomFieldsIdJson

Update a CustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCustomFieldsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CustomFieldEditFieldsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCustomFieldsIdJsonRequest();
    $request->customFieldEdit = new CustomFieldEdit();
    $request->customFieldEdit->customField = new CustomFieldEditFields();
    $request->customFieldEdit->customField->label = 'dicta';
    $request->customFieldEdit->customField->type = CustomFieldEditFieldsTypeEnum::SELECTION;
    $request->customFieldEdit->customField->values = [
        'iusto',
        'dicta',
    ];
    $request->authtoken = 'harum';
    $request->id = 317983;
    $request->login = 'accusamus';

    $response = $sdk->customFields->putCustomFieldsIdJson($request);

    if ($response->customField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
