# institutions

### Available Operations

* [retrieveAllSupportedInstitutionsInAGivenCountry](#retrieveallsupportedinstitutionsinagivencountry) - List all available institutions
* [retrieveInstitution](#retrieveinstitution) - Get details about a specific Institution

## retrieveAllSupportedInstitutionsInAGivenCountry

List all available institutions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAllSupportedInstitutionsInAGivenCountryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAllSupportedInstitutionsInAGivenCountryRequest();
    $request->country = 'Marshall Islands';
    $request->paymentsEnabled = 'sint';

    $response = $sdk->institutions->retrieveAllSupportedInstitutionsInAGivenCountry($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveInstitution

Get details about a specific Institution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveInstitutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveInstitutionRequest();
    $request->id = '0afa563e-2516-4fe4-88b7-11e5b7fd2ed0';

    $response = $sdk->institutions->retrieveInstitution($request);

    if ($response->integrationRetrieve !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
