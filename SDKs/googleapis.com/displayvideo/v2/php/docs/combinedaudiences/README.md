# combinedAudiences

### Available Operations

* [displayvideoCombinedAudiencesGet](#displayvideocombinedaudiencesget) - Gets a combined audience.
* [displayvideoCombinedAudiencesList](#displayvideocombinedaudienceslist) - Lists combined audiences. The order is defined by the order_by parameter.

## displayvideoCombinedAudiencesGet

Gets a combined audience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCombinedAudiencesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCombinedAudiencesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCombinedAudiencesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->advertiserId = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->combinedAudienceId = 'facilis';
    $request->fields = 'corrupti';
    $request->key = 'aperiam';
    $request->oauthToken = 'sint';
    $request->partnerId = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DisplayvideoCombinedAudiencesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->combinedAudiences->displayvideoCombinedAudiencesGet($request, $requestSecurity);

    if ($response->combinedAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCombinedAudiencesList

Lists combined audiences. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCombinedAudiencesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCombinedAudiencesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCombinedAudiencesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->advertiserId = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'dolor';
    $request->filter = 'occaecati';
    $request->key = 'atque';
    $request->oauthToken = 'beatae';
    $request->orderBy = 'at';
    $request->pageSize = 287544;
    $request->pageToken = 'minus';
    $request->partnerId = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new DisplayvideoCombinedAudiencesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->combinedAudiences->displayvideoCombinedAudiencesList($request, $requestSecurity);

    if ($response->listCombinedAudiencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
