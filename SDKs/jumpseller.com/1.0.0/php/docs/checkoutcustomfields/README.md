# checkoutCustomFields

### Available Operations

* [deleteCheckoutCustomFieldsIdJson](#deletecheckoutcustomfieldsidjson) - Delete an existing CheckoutCustomField.
* [getCheckoutCustomFieldsJson](#getcheckoutcustomfieldsjson) - Retrieve all Checkout Custom Fields.
* [getCheckoutCustomFieldsIdJson](#getcheckoutcustomfieldsidjson) - Retrieve a single CheckoutCustomField.
* [postCheckoutCustomFieldsJson](#postcheckoutcustomfieldsjson) - Create a new CheckoutCustomField.
* [putCheckoutCustomFieldsIdJson](#putcheckoutcustomfieldsidjson) - Update a CheckoutCustomField.

## deleteCheckoutCustomFieldsIdJson

Delete an existing CheckoutCustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCheckoutCustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCheckoutCustomFieldsIdJsonRequest();
    $request->authtoken = 'esse';
    $request->id = 520478;
    $request->login = 'porro';

    $response = $sdk->checkoutCustomFields->deleteCheckoutCustomFieldsIdJson($request);

    if ($response->deleteCheckoutCustomFieldsIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCheckoutCustomFieldsJson

Retrieve all Checkout Custom Fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckoutCustomFieldsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckoutCustomFieldsJsonRequest();
    $request->authtoken = 'dolorum';
    $request->limit = 118274;
    $request->login = 'nam';
    $request->page = 639921;

    $response = $sdk->checkoutCustomFields->getCheckoutCustomFieldsJson($request);

    if ($response->checkoutCustomFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCheckoutCustomFieldsIdJson

Retrieve a single CheckoutCustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckoutCustomFieldsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckoutCustomFieldsIdJsonRequest();
    $request->authtoken = 'occaecati';
    $request->id = 143353;
    $request->login = 'deleniti';

    $response = $sdk->checkoutCustomFields->getCheckoutCustomFieldsIdJson($request);

    if ($response->checkoutCustomField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCheckoutCustomFieldsJson

Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCheckoutCustomFieldsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsAreaEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCheckoutCustomFieldsJsonRequest();
    $request->checkoutCustomFieldEdit = new CheckoutCustomFieldEdit();
    $request->checkoutCustomFieldEdit->checkoutCustomField = new CheckoutCustomFieldEditFields();
    $request->checkoutCustomFieldEdit->checkoutCustomField->area = CheckoutCustomFieldEditFieldsAreaEnum::OTHER;
    $request->checkoutCustomFieldEdit->checkoutCustomField->customFieldSelectOptions = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->checkoutCustomFieldEdit->checkoutCustomField->deletable = false;
    $request->checkoutCustomFieldEdit->checkoutCustomField->label = 'modi';
    $request->checkoutCustomFieldEdit->checkoutCustomField->position = 186332;
    $request->checkoutCustomFieldEdit->checkoutCustomField->required = false;
    $request->checkoutCustomFieldEdit->checkoutCustomField->type = CheckoutCustomFieldEditFieldsTypeEnum::CHECKBOX;
    $request->authtoken = 'cum';
    $request->login = 'esse';

    $response = $sdk->checkoutCustomFields->postCheckoutCustomFieldsJson($request);

    if ($response->checkoutCustomField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCheckoutCustomFieldsIdJson

Update a CheckoutCustomField.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCheckoutCustomFieldsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsAreaEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutCustomFieldEditFieldsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCheckoutCustomFieldsIdJsonRequest();
    $request->checkoutCustomFieldEdit = new CheckoutCustomFieldEdit();
    $request->checkoutCustomFieldEdit->checkoutCustomField = new CheckoutCustomFieldEditFields();
    $request->checkoutCustomFieldEdit->checkoutCustomField->area = CheckoutCustomFieldEditFieldsAreaEnum::CONTACT;
    $request->checkoutCustomFieldEdit->checkoutCustomField->customFieldSelectOptions = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->checkoutCustomFieldEdit->checkoutCustomField->deletable = false;
    $request->checkoutCustomFieldEdit->checkoutCustomField->label = 'natus';
    $request->checkoutCustomFieldEdit->checkoutCustomField->position = 149675;
    $request->checkoutCustomFieldEdit->checkoutCustomField->required = false;
    $request->checkoutCustomFieldEdit->checkoutCustomField->type = CheckoutCustomFieldEditFieldsTypeEnum::CHECKBOX;
    $request->authtoken = 'dolor';
    $request->id = 616934;
    $request->login = 'laboriosam';

    $response = $sdk->checkoutCustomFields->putCheckoutCustomFieldsIdJson($request);

    if ($response->checkoutCustomField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
