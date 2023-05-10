# media

### Available Operations

* [cloudsupportMediaDownload](#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [cloudsupportMediaUpload](#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

## cloudsupportMediaDownload

Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportMediaDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportMediaDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportMediaDownloadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->name = 'Elvira Herman';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new CloudsupportMediaDownloadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->cloudsupportMediaDownload($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsupportMediaUpload

Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportMediaUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsupportMediaUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsupportMediaUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'accusantium';
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new CloudsupportMediaUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->cloudsupportMediaUpload($request, $requestSecurity);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
