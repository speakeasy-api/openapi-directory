# media

### Available Operations

* [chromepolicyMediaUpload](#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

## chromepolicyMediaUpload

Creates an enterprise file from the content provided by user. Returns a public download url for end user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyMediaUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyMediaUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyMediaUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'officia';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->customer = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ChromepolicyMediaUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->chromepolicyMediaUpload($request, $requestSecurity);

    if ($response->googleChromePolicyVersionsV1UploadPolicyFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
