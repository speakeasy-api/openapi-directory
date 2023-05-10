# familysharing

### Available Operations

* [booksFamilysharingGetFamilyInfo](#booksfamilysharinggetfamilyinfo) - Gets information regarding the family that the user is part of.
* [booksFamilysharingShare](#booksfamilysharingshare) - Initiates sharing of the content with the user's family. Empty response indicates success.
* [booksFamilysharingUnshare](#booksfamilysharingunshare) - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

## booksFamilysharingGetFamilyInfo

Gets information regarding the family that the user is part of.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingGetFamilyInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingGetFamilyInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksFamilysharingGetFamilyInfoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->source = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new BooksFamilysharingGetFamilyInfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->familysharing->booksFamilysharingGetFamilyInfo($request, $requestSecurity);

    if ($response->familyInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksFamilysharingShare

Initiates sharing of the content with the user's family. Empty response indicates success.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingShareSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksFamilysharingShareRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->docId = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->source = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';
    $request->volumeId = 'ipsam';

    $requestSecurity = new BooksFamilysharingShareSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->familysharing->booksFamilysharingShare($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## booksFamilysharingUnshare

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingUnshareRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksFamilysharingUnshareSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksFamilysharingUnshareRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->docId = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->source = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';
    $request->volumeId = 'praesentium';

    $requestSecurity = new BooksFamilysharingUnshareSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->familysharing->booksFamilysharingUnshare($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
