# customBiddingAlgorithms

### Available Operations

* [displayvideoCustomBiddingAlgorithmsCreate](#displayvideocustombiddingalgorithmscreate) - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsGet](#displayvideocustombiddingalgorithmsget) - Gets a custom bidding algorithm.
* [displayvideoCustomBiddingAlgorithmsList](#displayvideocustombiddingalgorithmslist) - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsPatch](#displayvideocustombiddingalgorithmspatch) - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsCreate](#displayvideocustombiddingalgorithmsscriptscreate) - Creates a new custom bidding script. Returns the newly created script if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsGet](#displayvideocustombiddingalgorithmsscriptsget) - Gets a custom bidding script.
* [displayvideoCustomBiddingAlgorithmsScriptsList](#displayvideocustombiddingalgorithmsscriptslist) - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsUploadScript](#displayvideocustombiddingalgorithmsuploadscript) - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

## displayvideoCustomBiddingAlgorithmsCreate

Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput();
    $request->customBiddingAlgorithmInput->advertiserId = 'aperiam';
    $request->customBiddingAlgorithmInput->customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum::SCRIPT_BASED;
    $request->customBiddingAlgorithmInput->displayName = 'repellat';
    $request->customBiddingAlgorithmInput->entityStatus = CustomBiddingAlgorithmEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->customBiddingAlgorithmInput->partnerId = 'porro';
    $request->customBiddingAlgorithmInput->sharedAdvertiserIds = [
        'consectetur',
        'eligendi',
        'dignissimos',
    ];
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'temporibus';
    $request->key = 'officia';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsCreate($request, $requestSecurity);

    if ($response->customBiddingAlgorithm !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsGet

Gets a custom bidding algorithm.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->advertiserId = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->customBiddingAlgorithmId = 'qui';
    $request->fields = 'consectetur';
    $request->key = 'repellat';
    $request->oauthToken = 'explicabo';
    $request->partnerId = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsGet($request, $requestSecurity);

    if ($response->customBiddingAlgorithm !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsList

Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illo';
    $request->advertiserId = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'delectus';
    $request->fields = 'non';
    $request->filter = 'distinctio';
    $request->key = 'in';
    $request->oauthToken = 'exercitationem';
    $request->orderBy = 'labore';
    $request->pageSize = 254382;
    $request->pageToken = 'repudiandae';
    $request->partnerId = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsList($request, $requestSecurity);

    if ($response->listCustomBiddingAlgorithmsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsPatch

Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingAlgorithmEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput();
    $request->customBiddingAlgorithmInput->advertiserId = 'aperiam';
    $request->customBiddingAlgorithmInput->customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum::CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED;
    $request->customBiddingAlgorithmInput->displayName = 'deleniti';
    $request->customBiddingAlgorithmInput->entityStatus = CustomBiddingAlgorithmEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->customBiddingAlgorithmInput->partnerId = 'voluptate';
    $request->customBiddingAlgorithmInput->sharedAdvertiserIds = [
        'minima',
        'libero',
        'magnam',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->customBiddingAlgorithmId = 'nesciunt';
    $request->fields = 'mollitia';
    $request->key = 'dignissimos';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->updateMask = 'molestiae';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsPatch($request, $requestSecurity);

    if ($response->customBiddingAlgorithm !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsScriptsCreate

Creates a new custom bidding script. Returns the newly created script if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingScriptInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomBiddingScriptRef;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customBiddingScriptInput = new CustomBiddingScriptInput();
    $request->customBiddingScriptInput->script = new CustomBiddingScriptRef();
    $request->customBiddingScriptInput->script->resourceName = 'modi';
    $request->accessToken = 'aut';
    $request->advertiserId = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->customBiddingAlgorithmId = 'commodi';
    $request->fields = 'numquam';
    $request->key = 'dolorum';
    $request->oauthToken = 'possimus';
    $request->partnerId = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsScriptsCreate($request, $requestSecurity);

    if ($response->customBiddingScript !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsScriptsGet

Gets a custom bidding script.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minus';
    $request->advertiserId = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->customBiddingAlgorithmId = 'quas';
    $request->customBiddingScriptId = 'et';
    $request->fields = 'facilis';
    $request->key = 'amet';
    $request->oauthToken = 'autem';
    $request->partnerId = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsScriptsGet($request, $requestSecurity);

    if ($response->customBiddingScript !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsScriptsList

Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsScriptsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laudantium';
    $request->advertiserId = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->customBiddingAlgorithmId = 'eaque';
    $request->fields = 'saepe';
    $request->key = 'delectus';
    $request->oauthToken = 'mollitia';
    $request->orderBy = 'nulla';
    $request->pageSize = 640907;
    $request->pageToken = 'sed';
    $request->partnerId = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsScriptsList($request, $requestSecurity);

    if ($response->listCustomBiddingScriptsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoCustomBiddingAlgorithmsUploadScript

Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'incidunt';
    $request->advertiserId = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->customBiddingAlgorithmId = 'harum';
    $request->fields = 'explicabo';
    $request->key = 'beatae';
    $request->oauthToken = 'aliquid';
    $request->partnerId = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customBiddingAlgorithms->displayvideoCustomBiddingAlgorithmsUploadScript($request, $requestSecurity);

    if ($response->customBiddingScriptRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
