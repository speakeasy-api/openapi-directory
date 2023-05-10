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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->advertiserId = 'unde';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->combinedAudienceId = 'maxime';
    $request->fields = 'quia';
    $request->key = 'quia';
    $request->oauthToken = 'nostrum';
    $request->partnerId = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'id';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugiat';
    $request->advertiserId = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'placeat';
    $request->fields = 'sit';
    $request->filter = 'iusto';
    $request->key = 'ipsa';
    $request->oauthToken = 'voluptates';
    $request->orderBy = 'inventore';
    $request->pageSize = 49348;
    $request->pageToken = 'totam';
    $request->partnerId = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'voluptatem';

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
