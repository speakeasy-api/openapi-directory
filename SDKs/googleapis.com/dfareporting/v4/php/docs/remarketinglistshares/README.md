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
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'sed';
    $request->key = 'hic';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->profileId = 'sint';
    $request->quotaUser = 'eveniet';
    $request->remarketingListId = 'veniam';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'consequuntur';

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
    $request->remarketingListShare->kind = 'iusto';
    $request->remarketingListShare->remarketingListId = 'quisquam';
    $request->remarketingListShare->sharedAccountIds = [
        'ab',
        'quo',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'voluptatum',
        'pariatur',
        'sequi',
        'quo',
    ];
    $request->accessToken = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'quis';
    $request->id = '8d0358a8-2c80-48fe-a751-a2047c0449e1';
    $request->key = 'quaerat';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->profileId = 'hic';
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'quasi';

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
    $request->remarketingListShare->kind = 'distinctio';
    $request->remarketingListShare->remarketingListId = 'cum';
    $request->remarketingListShare->sharedAccountIds = [
        'repellendus',
        'incidunt',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'vero',
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'quae';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'repudiandae';

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
