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
    $request->accessToken = 'ad';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->profileId = 'velit';
    $request->quotaUser = 'ratione';
    $request->remarketingListId = 'fuga';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->remarketingListShare = new RemarketingListShare();
    $request->remarketingListShare->kind = 'laboriosam';
    $request->remarketingListShare->remarketingListId = 'sint';
    $request->remarketingListShare->sharedAccountIds = [
        'totam',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'hic',
    ];
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'accusamus';
    $request->id = 'b9a6658e-69a4-4b84-bd38-2dbec75c68c6';
    $request->key = 'aut';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->profileId = 'veniam';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'suscipit';

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
    $request->remarketingListShare->kind = 'minus';
    $request->remarketingListShare->remarketingListId = 'debitis';
    $request->remarketingListShare->sharedAccountIds = [
        'doloremque',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'quibusdam',
        'deleniti',
    ];
    $request->accessToken = 'quas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'expedita';
    $request->key = 'sapiente';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'explicabo';
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'eligendi';

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
