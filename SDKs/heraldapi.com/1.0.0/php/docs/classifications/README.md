# classifications

### Available Operations

* [getClassifications](#getclassifications) - /classifications/naics_index_entries

## getClassifications

### Get a list of [classifications](https://www.heraldapi.com/docs/classifications) to classify an applicant

Returns an array of classifications, specific to the industries defined by NAICS. Can query by classification description or NAICS code to refine the list.

Read more on [getting classifications](https://www.heraldapi.com/docs/getting-classifications).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsRequest();
    $request->limit = 3250.47;
    $request->naics2017 = '?naics_2017=611420';
    $request->page = 5701.97;
    $request->search = 'accusantium';

    $response = $sdk->classifications->getClassifications($request);

    if ($response->getClassifications200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
