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
    $request->customBiddingAlgorithmInput->advertiserId = 'esse';
    $request->customBiddingAlgorithmInput->customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum::CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED;
    $request->customBiddingAlgorithmInput->displayName = 'assumenda';
    $request->customBiddingAlgorithmInput->entityStatus = CustomBiddingAlgorithmEntityStatusEnum::ENTITY_STATUS_UNSPECIFIED;
    $request->customBiddingAlgorithmInput->partnerId = 'est';
    $request->customBiddingAlgorithmInput->sharedAdvertiserIds = [
        'corrupti',
        'molestiae',
        'provident',
        'accusamus',
    ];
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'ea';
    $request->key = 'autem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'corporis';

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
    $request->accessToken = 'voluptatibus';
    $request->advertiserId = 'cum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->customBiddingAlgorithmId = 'quia';
    $request->fields = 'quidem';
    $request->key = 'fuga';
    $request->oauthToken = 'repudiandae';
    $request->partnerId = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'eos';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->advertiserId = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'corporis';
    $request->filter = 'error';
    $request->key = 'earum';
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'recusandae';
    $request->pageSize = 630871;
    $request->pageToken = 'ut';
    $request->partnerId = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'unde';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput();
    $request->customBiddingAlgorithmInput->advertiserId = 'delectus';
    $request->customBiddingAlgorithmInput->customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum::ADS_DATA_HUB_BASED;
    $request->customBiddingAlgorithmInput->displayName = 'fugit';
    $request->customBiddingAlgorithmInput->entityStatus = CustomBiddingAlgorithmEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->customBiddingAlgorithmInput->partnerId = 'numquam';
    $request->customBiddingAlgorithmInput->sharedAdvertiserIds = [
        'at',
    ];
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'optio';
    $request->customBiddingAlgorithmId = 'necessitatibus';
    $request->fields = 'corporis';
    $request->key = 'qui';
    $request->oauthToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->updateMask = 'cupiditate';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'placeat';

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
    $request->customBiddingScriptInput->script->resourceName = 'neque';
    $request->accessToken = 'in';
    $request->advertiserId = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->customBiddingAlgorithmId = 'corporis';
    $request->fields = 'magnam';
    $request->key = 'voluptates';
    $request->oauthToken = 'maiores';
    $request->partnerId = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'ratione';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->advertiserId = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->customBiddingAlgorithmId = 'velit';
    $request->customBiddingScriptId = 'minus';
    $request->fields = 'fuga';
    $request->key = 'nostrum';
    $request->oauthToken = 'est';
    $request->partnerId = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'vero';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellat';
    $request->advertiserId = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->customBiddingAlgorithmId = 'aperiam';
    $request->fields = 'odio';
    $request->key = 'minima';
    $request->oauthToken = 'in';
    $request->orderBy = 'ducimus';
    $request->pageSize = 567846;
    $request->pageToken = 'dolores';
    $request->partnerId = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->advertiserId = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->customBiddingAlgorithmId = 'quaerat';
    $request->fields = 'commodi';
    $request->key = 'officiis';
    $request->oauthToken = 'placeat';
    $request->partnerId = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolorem';

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
