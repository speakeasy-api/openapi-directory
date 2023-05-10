# customerAdditionalFields

### Available Operations

* [deleteCustomersIdFieldsFieldId](#deletecustomersidfieldsfieldid) - Delete a Customer Additional Field.
* [getCustomersIdFields](#getcustomersidfields) - Retrieves the Customer Additional Field of a Customer.
* [getCustomersIdFieldsFieldId](#getcustomersidfieldsfieldid) - Retrieve a single Customer Additional Field.
* [postCustomersIdFields](#postcustomersidfields) - Adds Customer Additional Fields to a Customer.
* [putCustomersIdFieldsFieldId](#putcustomersidfieldsfieldid) - Update a Customer Additional Field.

## deleteCustomersIdFieldsFieldId

Delete a Customer Additional Field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomersIdFieldsFieldIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomersIdFieldsFieldIdRequest();
    $request->authtoken = 'commodi';
    $request->fieldId = 918236;
    $request->id = 64147;
    $request->login = 'ipsum';

    $response = $sdk->customerAdditionalFields->deleteCustomersIdFieldsFieldId($request);

    if ($response->deleteCustomersIdFieldsFieldId200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersIdFields

Retrieves the Customer Additional Field of a Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersIdFieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersIdFieldsRequest();
    $request->authtoken = 'quidem';
    $request->id = 565189;
    $request->login = 'excepturi';

    $response = $sdk->customerAdditionalFields->getCustomersIdFields($request);

    if ($response->customerAdditionalFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomersIdFieldsFieldId

Retrieve a single Customer Additional Field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomersIdFieldsFieldIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomersIdFieldsFieldIdRequest();
    $request->authtoken = 'pariatur';
    $request->fieldId = 265389;
    $request->id = 508969;
    $request->login = 'rem';

    $response = $sdk->customerAdditionalFields->getCustomersIdFieldsFieldId($request);

    if ($response->customerAdditionalField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomersIdFields

Adds Customer Additional Fields to a Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomersIdFieldsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAdditionalFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAdditionalFieldEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomersIdFieldsRequest();
    $request->customerAdditionalFieldEdit = new CustomerAdditionalFieldEdit();
    $request->customerAdditionalFieldEdit->customerAdditionalField = new CustomerAdditionalFieldEditFields();
    $request->customerAdditionalFieldEdit->customerAdditionalField->checkoutCustomFieldId = 916723;
    $request->customerAdditionalFieldEdit->customerAdditionalField->value = 'quasi';
    $request->authtoken = 'repudiandae';
    $request->id = 575947;
    $request->login = 'veritatis';

    $response = $sdk->customerAdditionalFields->postCustomersIdFields($request);

    if ($response->customerAdditionalField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCustomersIdFieldsFieldId

Update a Customer Additional Field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCustomersIdFieldsFieldIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAdditionalFieldEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomerAdditionalFieldEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCustomersIdFieldsFieldIdRequest();
    $request->customerAdditionalFieldEdit = new CustomerAdditionalFieldEdit();
    $request->customerAdditionalFieldEdit->customerAdditionalField = new CustomerAdditionalFieldEditFields();
    $request->customerAdditionalFieldEdit->customerAdditionalField->checkoutCustomFieldId = 929297;
    $request->customerAdditionalFieldEdit->customerAdditionalField->value = 'incidunt';
    $request->authtoken = 'enim';
    $request->fieldId = 9356;
    $request->id = 667411;
    $request->login = 'quibusdam';

    $response = $sdk->customerAdditionalFields->putCustomersIdFieldsFieldId($request);

    if ($response->customerAdditionalField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
