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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'animi';
    $request->id = 120927;
    $request->key = 'voluptatem';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->profileId = 'ea';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'natus';

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
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'eos';
    $request->key = 'enim';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'veniam';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptatem';

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
