# projects

### Available Operations

* [apikeysProjectsLocationsKeysCreate](#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysDelete](#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGet](#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysGetKeyString](#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysList](#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysPatch](#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [apikeysProjectsLocationsKeysUndelete](#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

## apikeysProjectsLocationsKeysCreate

Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V2KeyInput;
use \OpenAPI\OpenAPI\Models\Shared\V2Restrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2AndroidKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2AndroidApplication;
use \OpenAPI\OpenAPI\Models\Shared\V2ApiTarget;
use \OpenAPI\OpenAPI\Models\Shared\V2BrowserKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2IosKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2ServerKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->v2KeyInput = new V2KeyInput();
    $request->v2KeyInput->annotations = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->v2KeyInput->displayName = 'ab';
    $request->v2KeyInput->restrictions = new V2Restrictions();
    $request->v2KeyInput->restrictions->androidKeyRestrictions = new V2AndroidKeyRestrictions();
    $request->v2KeyInput->restrictions->androidKeyRestrictions->allowedApplications = [
        new V2AndroidApplication(),
        new V2AndroidApplication(),
    ];
    $request->v2KeyInput->restrictions->apiTargets = [
        new V2ApiTarget(),
    ];
    $request->v2KeyInput->restrictions->browserKeyRestrictions = new V2BrowserKeyRestrictions();
    $request->v2KeyInput->restrictions->browserKeyRestrictions->allowedReferrers = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->v2KeyInput->restrictions->iosKeyRestrictions = new V2IosKeyRestrictions();
    $request->v2KeyInput->restrictions->iosKeyRestrictions->allowedBundleIds = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->v2KeyInput->restrictions->serverKeyRestrictions = new V2ServerKeyRestrictions();
    $request->v2KeyInput->restrictions->serverKeyRestrictions->allowedIps = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->keyId = 'officia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new ApikeysProjectsLocationsKeysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysDelete

Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->etag = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->name = 'Cory Emmerich';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new ApikeysProjectsLocationsKeysDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysGet

Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laboriosam';
    $request->fields = 'hic';
    $request->key = 'saepe';
    $request->name = 'Harvey Hessel';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ApikeysProjectsLocationsKeysGetSecurity();
    $requestSecurity->option1 = new ApikeysProjectsLocationsKeysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysGet($request, $requestSecurity);

    if ($response->v2Key !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysGetKeyString

Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetKeyStringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetKeyStringSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysGetKeyStringSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysGetKeyStringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->name = 'Rose Rolfson';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new ApikeysProjectsLocationsKeysGetKeyStringSecurity();
    $requestSecurity->option1 = new ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysGetKeyString($request, $requestSecurity);

    if ($response->v2GetKeyStringResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysList

Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 635059;
    $request->pageToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->showDeleted = false;
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new ApikeysProjectsLocationsKeysListSecurity();
    $requestSecurity->option1 = new ApikeysProjectsLocationsKeysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysList($request, $requestSecurity);

    if ($response->v2ListKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysPatch

Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V2KeyInput;
use \OpenAPI\OpenAPI\Models\Shared\V2Restrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2AndroidKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2AndroidApplication;
use \OpenAPI\OpenAPI\Models\Shared\V2ApiTarget;
use \OpenAPI\OpenAPI\Models\Shared\V2BrowserKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2IosKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\V2ServerKeyRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->v2KeyInput = new V2KeyInput();
    $request->v2KeyInput->annotations = [
        'molestiae' => 'velit',
        'error' => 'quia',
    ];
    $request->v2KeyInput->displayName = 'quis';
    $request->v2KeyInput->restrictions = new V2Restrictions();
    $request->v2KeyInput->restrictions->androidKeyRestrictions = new V2AndroidKeyRestrictions();
    $request->v2KeyInput->restrictions->androidKeyRestrictions->allowedApplications = [
        new V2AndroidApplication(),
    ];
    $request->v2KeyInput->restrictions->apiTargets = [
        new V2ApiTarget(),
        new V2ApiTarget(),
        new V2ApiTarget(),
    ];
    $request->v2KeyInput->restrictions->browserKeyRestrictions = new V2BrowserKeyRestrictions();
    $request->v2KeyInput->restrictions->browserKeyRestrictions->allowedReferrers = [
        'enim',
        'odit',
        'quo',
    ];
    $request->v2KeyInput->restrictions->iosKeyRestrictions = new V2IosKeyRestrictions();
    $request->v2KeyInput->restrictions->iosKeyRestrictions->allowedBundleIds = [
        'tenetur',
    ];
    $request->v2KeyInput->restrictions->serverKeyRestrictions = new V2ServerKeyRestrictions();
    $request->v2KeyInput->restrictions->serverKeyRestrictions->allowedIps = [
        'id',
        'possimus',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->name = 'Johanna Wolf';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->updateMask = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new ApikeysProjectsLocationsKeysPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apikeysProjectsLocationsKeysUndelete

Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApikeysProjectsLocationsKeysUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApikeysProjectsLocationsKeysUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'doloremque' => 'reprehenderit',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new ApikeysProjectsLocationsKeysUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apikeysProjectsLocationsKeysUndelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
