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
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->dartId = 'perspiciatis';
    $request->fields = 'quaerat';
    $request->key = 'nesciunt';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->profileId = 'adipisci';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'laboriosam';

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
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'soluta';
    $request->key = 'voluptates';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'cum';
    $request->quotaUser = 'est';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'perferendis';

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
