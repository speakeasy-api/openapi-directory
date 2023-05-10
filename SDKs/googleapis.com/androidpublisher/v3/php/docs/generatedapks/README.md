# generatedapks

### Available Operations

* [androidpublisherGeneratedapksDownload](#androidpublishergeneratedapksdownload) - Downloads a single signed APK generated from an app bundle.
* [androidpublisherGeneratedapksList](#androidpublishergeneratedapkslist) - Returns download metadata for all APKs that were generated from a given app bundle.

## androidpublisherGeneratedapksDownload

Downloads a single signed APK generated from an app bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGeneratedapksDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGeneratedapksDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherGeneratedapksDownloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->downloadId = 'odio';
    $request->fields = 'eius';
    $request->key = 'esse';
    $request->oauthToken = 'esse';
    $request->packageName = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'quidem';
    $request->versionCode = 852635;

    $requestSecurity = new AndroidpublisherGeneratedapksDownloadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->generatedapks->androidpublisherGeneratedapksDownload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherGeneratedapksList

Returns download metadata for all APKs that were generated from a given app bundle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGeneratedapksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGeneratedapksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherGeneratedapksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'assumenda';
    $request->fields = 'eos';
    $request->key = 'praesentium';
    $request->oauthToken = 'quisquam';
    $request->packageName = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'quidem';
    $request->versionCode = 206594;

    $requestSecurity = new AndroidpublisherGeneratedapksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->generatedapks->androidpublisherGeneratedapksList($request, $requestSecurity);

    if ($response->generatedApksListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
