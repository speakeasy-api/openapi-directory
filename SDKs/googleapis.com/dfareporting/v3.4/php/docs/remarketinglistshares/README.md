# remarketingListShares

### Available Operations

* [dfareportingRemarketingListSharesGet](#dfareportingremarketinglistsharesget) - Gets one remarketing list share by remarketing list ID.
* [dfareportingRemarketingListSharesPatch](#dfareportingremarketinglistsharespatch) - Updates an existing remarketing list share. This method supports patch semantics.
* [dfareportingRemarketingListSharesUpdate](#dfareportingremarketinglistsharesupdate) - Updates an existing remarketing list share.

## dfareportingRemarketingListSharesGet

Gets one remarketing list share by remarketing list ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListSharesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'quas';
    $request->key = 'magnam';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'sapiente';
    $request->remarketingListId = 'deleniti';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new DfareportingRemarketingListSharesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingListShares->dfareportingRemarketingListSharesGet($request, $requestSecurity);

    if ($response->remarketingListShare !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListSharesPatch

Updates an existing remarketing list share. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingListShare;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListSharesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingListShare = new RemarketingListShare();
    $request->remarketingListShare->kind = 'eligendi';
    $request->remarketingListShare->remarketingListId = 'amet';
    $request->remarketingListShare->sharedAccountIds = [
        'nihil',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'occaecati',
        'iure',
        'libero',
        'cum',
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'omnis';
    $request->id = 'e372db13-44ba-49f7-8a5c-0ed7aab62e97';
    $request->key = 'aspernatur';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->profileId = 'architecto';
    $request->quotaUser = 'earum';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DfareportingRemarketingListSharesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingListShares->dfareportingRemarketingListSharesPatch($request, $requestSecurity);

    if ($response->remarketingListShare !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingRemarketingListSharesUpdate

Updates an existing remarketing list share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemarketingListShare;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRemarketingListSharesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRemarketingListSharesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->remarketingListShare = new RemarketingListShare();
    $request->remarketingListShare->kind = 'veniam';
    $request->remarketingListShare->remarketingListId = 'corrupti';
    $request->remarketingListShare->sharedAccountIds = [
        'odit',
        'voluptate',
        'nobis',
        'exercitationem',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'cupiditate',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'minima';
    $request->key = 'expedita';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new DfareportingRemarketingListSharesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->remarketingListShares->dfareportingRemarketingListSharesUpdate($request, $requestSecurity);

    if ($response->remarketingListShare !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
