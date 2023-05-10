# videoFormats

### Available Operations

* [dfareportingVideoFormatsGet](#dfareportingvideoformatsget) - Gets one video format by ID.
* [dfareportingVideoFormatsList](#dfareportingvideoformatslist) - Lists available video formats.

## dfareportingVideoFormatsGet

Gets one video format by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingVideoFormatsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingVideoFormatsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingVideoFormatsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'at';
    $request->id = 204852;
    $request->key = 'animi';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->profileId = 'repellendus';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new DfareportingVideoFormatsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videoFormats->dfareportingVideoFormatsGet($request, $requestSecurity);

    if ($response->videoFormat !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingVideoFormatsList

Lists available video formats.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingVideoFormatsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingVideoFormatsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingVideoFormatsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'ullam';
    $request->key = 'rem';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->profileId = 'voluptate';
    $request->quotaUser = 'eveniet';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DfareportingVideoFormatsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videoFormats->dfareportingVideoFormatsList($request, $requestSecurity);

    if ($response->videoFormatsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
