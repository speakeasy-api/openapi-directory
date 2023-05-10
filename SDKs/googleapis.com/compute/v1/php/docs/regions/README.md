# regions

### Available Operations

* [computeRegionsGet](#computeregionsget) - Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeRegionsList](#computeregionslist) - Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

## computeRegionsGet

Returns the specified Region resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'sunt';
    $request->key = 'quos';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'nam';
    $request->region = 'corporis';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'laborum';

    $requestSecurity = new ComputeRegionsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->computeRegionsGet($request, $requestSecurity);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionsList

Retrieves the list of region resources available to the specified project. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `items.quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'architecto';
    $request->filter = 'tempora';
    $request->key = 'velit';
    $request->maxResults = 67438;
    $request->oauthToken = 'ad';
    $request->orderBy = 'assumenda';
    $request->pageToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'ex';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'sint';

    $requestSecurity = new ComputeRegionsListSecurity();
    $requestSecurity->option1 = new ComputeRegionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->computeRegionsList($request, $requestSecurity);

    if ($response->regionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
