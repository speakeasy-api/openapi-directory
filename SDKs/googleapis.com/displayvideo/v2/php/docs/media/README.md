# media

### Available Operations

* [displayvideoMediaDownload](#displayvideomediadownload) - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* [displayvideoMediaUpload](#displayvideomediaupload) - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

## displayvideoMediaDownload

Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaDownloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaDownloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaDownloadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoMediaDownloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'quas';
    $request->key = 'consequuntur';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->resourceName = 'aliquid';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'est';

    $requestSecurity = new DisplayvideoMediaDownloadSecurity();
    $requestSecurity->option1 = new DisplayvideoMediaDownloadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->displayvideoMediaDownload($request, $requestSecurity);

    if ($response->googleBytestreamMedia !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoMediaUpload

Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaUploadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaUploadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoMediaUploadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoMediaUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'aliquid';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rem';
    $request->fields = 'voluptatum';
    $request->key = 'ducimus';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->resourceName = 'tempora';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DisplayvideoMediaUploadSecurity();
    $requestSecurity->option1 = new DisplayvideoMediaUploadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->displayvideoMediaUpload($request, $requestSecurity);

    if ($response->googleBytestreamMedia !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
