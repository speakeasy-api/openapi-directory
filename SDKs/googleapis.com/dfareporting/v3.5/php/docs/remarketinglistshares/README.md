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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'hic';
    $request->key = 'occaecati';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->quotaUser = 'cum';
    $request->remarketingListId = 'eaque';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'vel';

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
    $request->remarketingListShare->kind = 'recusandae';
    $request->remarketingListShare->remarketingListId = 'adipisci';
    $request->remarketingListShare->sharedAccountIds = [
        'fugit',
        'facere',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'vitae',
        'non',
        'labore',
    ];
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->fields = 'error';
    $request->id = 'f78a5c0e-d7aa-4b62-a972-61fb0c58d27b';
    $request->key = 'exercitationem';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->profileId = 'cupiditate';
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'tempore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->remarketingListShare = new RemarketingListShare();
    $request->remarketingListShare->kind = 'expedita';
    $request->remarketingListShare->remarketingListId = 'modi';
    $request->remarketingListShare->sharedAccountIds = [
        'quaerat',
        'accusantium',
        'recusandae',
    ];
    $request->remarketingListShare->sharedAdvertiserIds = [
        'sapiente',
        'iusto',
        'quasi',
        'odit',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'animi';
    $request->fields = 'ducimus';
    $request->key = 'similique';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->profileId = 'voluptatem';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'modi';

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
