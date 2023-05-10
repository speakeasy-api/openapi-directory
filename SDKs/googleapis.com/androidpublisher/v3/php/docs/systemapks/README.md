# systemapks

### Available Operations

* [androidpublisherSystemapksVariantsCreate](#androidpublishersystemapksvariantscreate) - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* [androidpublisherSystemapksVariantsDownload](#androidpublishersystemapksvariantsdownload) - Downloads a previously created system APK which is suitable for inclusion in a system image.
* [androidpublisherSystemapksVariantsGet](#androidpublishersystemapksvariantsget) - Returns a previously created system APK variant.
* [androidpublisherSystemapksVariantsList](#androidpublishersystemapksvariantslist) - Returns the list of previously created system APK variants.

## androidpublisherSystemapksVariantsCreate

Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariantInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherSystemapksVariantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->variantInput = new VariantInput();
    $request->variantInput->deviceSpec = new DeviceSpec();
    $request->variantInput->deviceSpec->screenDensity = 1207;
    $request->variantInput->deviceSpec->supportedAbis = [
        'earum',
        'ex',
        'sapiente',
    ];
    $request->variantInput->deviceSpec->supportedLocales = [
        'minus',
        'nemo',
        'asperiores',
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'illum';
    $request->key = 'totam';
    $request->oauthToken = 'impedit';
    $request->packageName = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'culpa';
    $request->versionCode = 'dolor';

    $requestSecurity = new AndroidpublisherSystemapksVariantsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->systemapks->androidpublisherSystemapksVariantsCreate($request, $requestSecurity);

    if ($response->variant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherSystemapksVariantsDownload

Downloads a previously created system APK which is suitable for inclusion in a system image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherSystemapksVariantsDownloadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'tempora';
    $request->key = 'dolor';
    $request->oauthToken = 'consequatur';
    $request->packageName = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'fugit';
    $request->variantId = 66149;
    $request->versionCode = 'laudantium';

    $requestSecurity = new AndroidpublisherSystemapksVariantsDownloadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->systemapks->androidpublisherSystemapksVariantsDownload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherSystemapksVariantsGet

Returns a previously created system APK variant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherSystemapksVariantsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'consequuntur';
    $request->key = 'ipsa';
    $request->oauthToken = 'quas';
    $request->packageName = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'esse';
    $request->variantId = 897277;
    $request->versionCode = 'sed';

    $requestSecurity = new AndroidpublisherSystemapksVariantsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->systemapks->androidpublisherSystemapksVariantsGet($request, $requestSecurity);

    if ($response->variant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherSystemapksVariantsList

Returns the list of previously created system APK variants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherSystemapksVariantsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherSystemapksVariantsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vel';
    $request->key = 'voluptatum';
    $request->oauthToken = 'magnam';
    $request->packageName = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'autem';
    $request->versionCode = 'nobis';

    $requestSecurity = new AndroidpublisherSystemapksVariantsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->systemapks->androidpublisherSystemapksVariantsList($request, $requestSecurity);

    if ($response->systemApksListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
