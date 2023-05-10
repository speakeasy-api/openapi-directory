# csses

### Available Operations

* [contentCssesGet](#contentcssesget) - Retrieves a single CSS domain by ID.
* [contentCssesList](#contentcsseslist) - Lists CSS domains affiliated with a CSS group.
* [contentCssesUpdatelabels](#contentcssesupdatelabels) - Updates labels that are assigned to a CSS domain by its CSS group.

## contentCssesGet

Retrieves a single CSS domain by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCssesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->cssDomainId = 'voluptas';
    $request->cssGroupId = 'asperiores';
    $request->fields = 'aperiam';
    $request->key = 'ea';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new ContentCssesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->csses->contentCssesGet($request, $requestSecurity);

    if ($response->css !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCssesList

Lists CSS domains affiliated with a CSS group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCssesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->cssGroupId = 'nemo';
    $request->fields = 'quae';
    $request->key = 'quaerat';
    $request->oauthToken = 'porro';
    $request->pageSize = 801836;
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new ContentCssesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->csses->contentCssesList($request, $requestSecurity);

    if ($response->listCssesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentCssesUpdatelabels

Updates labels that are assigned to a CSS domain by its CSS group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesUpdatelabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelIds;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentCssesUpdatelabelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentCssesUpdatelabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->labelIds = new LabelIds();
    $request->labelIds->labelIds = [
        'velit',
        'culpa',
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->cssDomainId = 'fugiat';
    $request->cssGroupId = 'vel';
    $request->fields = 'ducimus';
    $request->key = 'quos';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new ContentCssesUpdatelabelsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->csses->contentCssesUpdatelabels($request, $requestSecurity);

    if ($response->css !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
