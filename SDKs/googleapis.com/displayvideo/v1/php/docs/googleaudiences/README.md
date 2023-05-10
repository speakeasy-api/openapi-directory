# googleAudiences

### Available Operations

* [displayvideoGoogleAudiencesGet](#displayvideogoogleaudiencesget) - Gets a Google audience.
* [displayvideoGoogleAudiencesList](#displayvideogoogleaudienceslist) - Lists Google audiences. The order is defined by the order_by parameter.

## displayvideoGoogleAudiencesGet

Gets a Google audience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGoogleAudiencesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGoogleAudiencesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGoogleAudiencesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->advertiserId = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'veniam';
    $request->googleAudienceId = 'eos';
    $request->key = 'reiciendis';
    $request->oauthToken = 'earum';
    $request->partnerId = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new DisplayvideoGoogleAudiencesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->googleAudiences->displayvideoGoogleAudiencesGet($request, $requestSecurity);

    if ($response->googleAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoGoogleAudiencesList

Lists Google audiences. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGoogleAudiencesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoGoogleAudiencesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoGoogleAudiencesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->advertiserId = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'labore';
    $request->filter = 'assumenda';
    $request->key = 'aliquam';
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'provident';
    $request->pageSize = 514993;
    $request->pageToken = 'repudiandae';
    $request->partnerId = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new DisplayvideoGoogleAudiencesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->googleAudiences->displayvideoGoogleAudiencesList($request, $requestSecurity);

    if ($response->listGoogleAudiencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
