# tagKeys

### Available Operations

* [cloudresourcemanagerTagKeysCreate](#cloudresourcemanagertagkeyscreate) - Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
* [cloudresourcemanagerTagKeysGetNamespaced](#cloudresourcemanagertagkeysgetnamespaced) - Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagKeysList](#cloudresourcemanagertagkeyslist) - Lists all TagKeys for a parent resource.

## cloudresourcemanagerTagKeysCreate

Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\TagKeyPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tagKeyInput = new TagKeyInput();
    $request->tagKeyInput->description = 'dicta';
    $request->tagKeyInput->etag = 'magnam';
    $request->tagKeyInput->name = 'Irving Jenkins';
    $request->tagKeyInput->parent = 'accusamus';
    $request->tagKeyInput->purpose = TagKeyPurposeEnum::PURPOSE_UNSPECIFIED;
    $request->tagKeyInput->purposeData = [
        'enim' => 'accusamus',
        'delectus' => 'quidem',
        'provident' => 'nam',
    ];
    $request->tagKeyInput->shortName = 'id';
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';
    $request->validateOnly = false;

    $requestSecurity = new CloudresourcemanagerTagKeysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagKeys->cloudresourcemanagerTagKeysCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagKeysGetNamespaced

Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysGetNamespacedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysGetNamespacedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysGetNamespacedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysGetNamespacedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagKeysGetNamespacedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->name = 'Jamie Hoppe';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudresourcemanagerTagKeysGetNamespacedSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagKeysGetNamespacedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagKeys->cloudresourcemanagerTagKeysGetNamespaced($request, $requestSecurity);

    if ($response->tagKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudresourcemanagerTagKeysList

Lists all TagKeys for a parent resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerTagKeysListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerTagKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->oauthToken = 'sint';
    $request->pageSize = 33625;
    $request->pageToken = 'mollitia';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new CloudresourcemanagerTagKeysListSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerTagKeysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tagKeys->cloudresourcemanagerTagKeysList($request, $requestSecurity);

    if ($response->listTagKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
