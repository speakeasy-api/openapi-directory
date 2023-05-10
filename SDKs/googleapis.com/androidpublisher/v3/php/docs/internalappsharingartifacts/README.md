# internalappsharingartifacts

### Available Operations

* [androidpublisherInternalappsharingartifactsUploadapk](#androidpublisherinternalappsharingartifactsuploadapk) - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherInternalappsharingartifactsUploadbundle](#androidpublisherinternalappsharingartifactsuploadbundle) - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

## androidpublisherInternalappsharingartifactsUploadapk

Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInternalappsharingartifactsUploadapkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInternalappsharingartifactsUploadapkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInternalappsharingartifactsUploadapkRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'maxime';
    $request->key = 'dignissimos';
    $request->oauthToken = 'officia';
    $request->packageName = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new AndroidpublisherInternalappsharingartifactsUploadapkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internalappsharingartifacts->androidpublisherInternalappsharingartifactsUploadapk($request, $requestSecurity);

    if ($response->internalAppSharingArtifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInternalappsharingartifactsUploadbundle

Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInternalappsharingartifactsUploadbundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInternalappsharingartifactsUploadbundleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInternalappsharingartifactsUploadbundleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'adipisci';
    $request->key = 'fuga';
    $request->oauthToken = 'id';
    $request->packageName = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'est';

    $requestSecurity = new AndroidpublisherInternalappsharingartifactsUploadbundleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->internalappsharingartifacts->androidpublisherInternalappsharingartifactsUploadbundle($request, $requestSecurity);

    if ($response->internalAppSharingArtifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
