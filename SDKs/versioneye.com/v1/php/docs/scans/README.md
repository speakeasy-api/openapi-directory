# scans

### Available Operations

* [getApiV1Scans](#getapiv1scans) - Retrieves all scans
* [getApiV1ScansId](#getapiv1scansid) - Retrieves a project scan result
* [getApiV1ScansIdFilesFileId](#getapiv1scansidfilesfileid) - Retrieves a file object, containing information about dependencies in the file

## getApiV1Scans

Retrieves all scans

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScansRequest();
    $request->name = 'Dallas Kassulke';
    $request->perPage = 'suscipit';

    $requestSecurity = new GetApiV1ScansSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->scans->getApiV1Scans($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ScansId

Retrieves a project scan result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScansIdRequest();
    $request->id = '74e0f467-cc87-496e-9151-a05dfc2ddf7c';

    $requestSecurity = new GetApiV1ScansIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->scans->getApiV1ScansId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1ScansIdFilesFileId

Retrieves a file object, containing information about dependencies in the file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansIdFilesFileIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1ScansIdFilesFileIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1ScansIdFilesFileIdRequest();
    $request->fileId = 'quod';
    $request->id = '78ca1ba9-28fc-4816-b42c-b73920592939';
    $request->perPage = 'laboriosam';

    $requestSecurity = new GetApiV1ScansIdFilesFileIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->scans->getApiV1ScansIdFilesFileId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
