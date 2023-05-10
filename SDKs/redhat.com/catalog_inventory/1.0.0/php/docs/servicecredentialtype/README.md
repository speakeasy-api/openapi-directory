# serviceCredentialType

### Available Operations

* [listServiceCredentialTypes](#listservicecredentialtypes) - List ServiceCredentialTypes
* [showServiceCredentialType](#showservicecredentialtype) - Show an existing ServiceCredentialType

## listServiceCredentialTypes

Returns an array of ServiceCredentialType objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceCredentialTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceCredentialTypesRequest();
    $request->filter = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->limit = 736918;
    $request->offset = 456150;
    $request->sortBy = [
        'excepturi' => 'aspernatur',
    ];

    $response = $sdk->serviceCredentialType->listServiceCredentialTypes($request);

    if ($response->serviceCredentialTypesCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showServiceCredentialType

Returns a ServiceCredentialType object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShowServiceCredentialTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShowServiceCredentialTypeRequest();
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';

    $response = $sdk->serviceCredentialType->showServiceCredentialType($request);

    if ($response->serviceCredentialType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
