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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minima';
    $request->advertiserId = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'magni';
    $request->googleAudienceId = 'incidunt';
    $request->key = 'adipisci';
    $request->oauthToken = 'praesentium';
    $request->partnerId = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'facilis';

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
    $request->accessToken = 'sit';
    $request->advertiserId = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'amet';
    $request->filter = 'deserunt';
    $request->key = 'modi';
    $request->oauthToken = 'veniam';
    $request->orderBy = 'quod';
    $request->pageSize = 932250;
    $request->pageToken = 'a';
    $request->partnerId = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'assumenda';

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
