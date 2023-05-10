# debug

### Available Operations

* [cloudsearchDebugDatasourcesItemsCheckAccess](#cloudsearchdebugdatasourcesitemscheckaccess) - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugDatasourcesItemsSearchByViewUrl](#cloudsearchdebugdatasourcesitemssearchbyviewurl) - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesItemsListForunmappedidentity](#cloudsearchdebugidentitysourcesitemslistforunmappedidentity) - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesUnmappedidsList](#cloudsearchdebugidentitysourcesunmappedidslist) - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

## cloudsearchDebugDatasourcesItemsCheckAccess

Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\GSuitePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchDebugDatasourcesItemsCheckAccessRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->principal = new Principal();
    $request->principal->groupResourceName = 'minus';
    $request->principal->gsuitePrincipal = new GSuitePrincipal();
    $request->principal->gsuitePrincipal->gsuiteDomain = false;
    $request->principal->gsuitePrincipal->gsuiteGroupEmail = 'placeat';
    $request->principal->gsuitePrincipal->gsuiteUserEmail = 'voluptatum';
    $request->principal->userResourceName = 'iusto';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->name = 'Mrs. Marie O'Connell';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new CloudsearchDebugDatasourcesItemsCheckAccessSecurity();
    $requestSecurity->option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debug->cloudsearchDebugDatasourcesItemsCheckAccess($request, $requestSecurity);

    if ($response->checkAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchDebugDatasourcesItemsSearchByViewUrl

Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchItemsByViewUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchItemsByViewUrlRequest = new SearchItemsByViewUrlRequest();
    $request->searchItemsByViewUrlRequest->debugOptions = new DebugOptions();
    $request->searchItemsByViewUrlRequest->debugOptions->enableDebugging = false;
    $request->searchItemsByViewUrlRequest->pageToken = 'maiores';
    $request->searchItemsByViewUrlRequest->viewUrl = 'molestiae';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->name = 'Samuel Reichel';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity();
    $requestSecurity->option1 = new CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debug->cloudsearchDebugDatasourcesItemsSearchByViewUrl($request, $requestSecurity);

    if ($response->searchItemsByViewUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchDebugIdentitysourcesItemsListForunmappedidentity

Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'modi';
    $request->groupResourceName = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->pageSize = 456150;
    $request->pageToken = 'ipsum';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';
    $request->userResourceName = 'natus';

    $requestSecurity = new CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity();
    $requestSecurity->option1 = new CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debug->cloudsearchDebugIdentitysourcesItemsListForunmappedidentity($request, $requestSecurity);

    if ($response->listItemNamesForUnmappedIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchDebugIdentitysourcesUnmappedidsList

Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesUnmappedidsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchDebugIdentitysourcesUnmappedidsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->pageSize = 681820;
    $request->pageToken = 'in';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->resolutionStatusCode = CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum::IDENTITY_SOURCE_NOT_FOUND;
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new CloudsearchDebugIdentitysourcesUnmappedidsListSecurity();
    $requestSecurity->option1 = new CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debug->cloudsearchDebugIdentitysourcesUnmappedidsList($request, $requestSecurity);

    if ($response->listUnmappedIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
