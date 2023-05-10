# publications

### Available Operations

* [readerrevenuesubscriptionlinkingPublicationsReadersDelete](#readerrevenuesubscriptionlinkingpublicationsreadersdelete) - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* [readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersgetentitlements) - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* [readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersupdateentitlements) - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

## readerrevenuesubscriptionlinkingPublicationsReadersDelete

Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->force = false;
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->publications->readerrevenuesubscriptionlinkingPublicationsReadersDelete($request);

    if ($response->deleteReaderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements

Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $response = $sdk->publications->readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements($request);

    if ($response->readerEntitlements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements

Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReaderEntitlementsInput;
use \OpenAPI\OpenAPI\Models\Shared\Entitlement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->readerEntitlementsInput = new ReaderEntitlementsInput();
    $request->readerEntitlementsInput->entitlements = [
        new Entitlement(),
        new Entitlement(),
        new Entitlement(),
        new Entitlement(),
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->key = 'occaecati';
    $request->name = 'Cassandra Welch';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->updateMask = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $response = $sdk->publications->readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements($request);

    if ($response->readerEntitlements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
