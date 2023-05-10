# parcels

### Available Operations

* [getParcelsPidsSiteIDOutputFormat](#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

## getParcelsPidsSiteIDOutputFormat

Represents all parcel identifiers associated with an individual site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParcelsPidsSiteIDOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetParcelsPidsSiteIDOutputFormatOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParcelsPidsSiteIDOutputFormatRequest();
    $request->outputFormat = GetParcelsPidsSiteIDOutputFormatOutputFormatEnum::JSON;
    $request->siteID = 'error';

    $response = $sdk->parcels->getParcelsPidsSiteIDOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
