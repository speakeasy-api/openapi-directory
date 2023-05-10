# forms

### Available Operations

* [findFormByFormName](#findformbyformname) - Find form by form name
* [findForms](#findforms) - Returns all VA Forms and their last revision date

## findFormByFormName

Returns a single form and the full revision history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindFormByFormNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindFormByFormNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindFormByFormNameRequest();
    $request->formName = 'provident';

    $requestSecurity = new FindFormByFormNameSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->forms->findFormByFormName($request, $requestSecurity);

    if ($response->findFormByFormName200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findForms

Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindFormsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindFormsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindFormsRequest();
    $request->query = 'distinctio';

    $requestSecurity = new FindFormsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->forms->findForms($request, $requestSecurity);

    if ($response->findForms200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
