# interconnectLocations

### Available Operations

* [computeInterconnectLocationsGet](#computeinterconnectlocationsget) - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* [computeInterconnectLocationsList](#computeinterconnectlocationslist) - Retrieves the list of interconnect locations available to the specified project.

## computeInterconnectLocationsGet

Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'quod';
    $request->interconnectLocation = 'nemo';
    $request->key = 'architecto';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'amet';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'deserunt';

    $requestSecurity = new ComputeInterconnectLocationsGetSecurity();
    $requestSecurity->option1 = new ComputeInterconnectLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectLocations->computeInterconnectLocationsGet($request, $requestSecurity);

    if ($response->interconnectLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectLocationsList

Retrieves the list of interconnect locations available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'reprehenderit';
    $request->filter = 'minus';
    $request->key = 'non';
    $request->maxResults = 141414;
    $request->oauthToken = 'maxime';
    $request->orderBy = 'aspernatur';
    $request->pageToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'minima';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'quaerat';

    $requestSecurity = new ComputeInterconnectLocationsListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectLocations->computeInterconnectLocationsList($request, $requestSecurity);

    if ($response->interconnectLocationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
