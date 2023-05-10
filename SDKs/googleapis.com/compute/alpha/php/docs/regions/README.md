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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'quas';
    $request->key = 'officia';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'eligendi';
    $request->region = 'inventore';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'perferendis';

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
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'deserunt';
    $request->filter = 'non';
    $request->key = 'ullam';
    $request->maxResults = 276720;
    $request->oauthToken = 'soluta';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'commodi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'at';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'facere';

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
