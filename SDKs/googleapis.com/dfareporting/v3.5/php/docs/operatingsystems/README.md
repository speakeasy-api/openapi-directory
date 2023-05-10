# operatingSystems

### Available Operations

* [dfareportingOperatingSystemsGet](#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [dfareportingOperatingSystemsList](#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

## dfareportingOperatingSystemsGet

Gets one operating system by DART ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOperatingSystemsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->dartId = 'architecto';
    $request->fields = 'asperiores';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->profileId = 'dolor';
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DfareportingOperatingSystemsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operatingSystems->dfareportingOperatingSystemsGet($request, $requestSecurity);

    if ($response->operatingSystem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingOperatingSystemsList

Retrieves a list of operating systems.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingOperatingSystemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingOperatingSystemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'nulla';
    $request->key = 'dolore';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->profileId = 'enim';
    $request->quotaUser = 'nam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new DfareportingOperatingSystemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operatingSystems->dfareportingOperatingSystemsList($request, $requestSecurity);

    if ($response->operatingSystemsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
