# inlineScript

## Overview

インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません

### Available Operations

* [createInlineScriptTag](#createinlinescripttag) - インラインスクリプトタグの登録
* [deleteInlineScriptTag](#deleteinlinescripttag) - インラインスクリプトタグの削除
* [getInlineScriptTag](#getinlinescripttag) - インラインスクリプトタグの取得
* [getInlineScriptTags](#getinlinescripttags) - インラインスクリプトタグの取得
* [updateInlineScriptTag](#updateinlinescripttag) - インラインスクリプトタグの更新

## createInlineScriptTag

インラインスクリプトタグの登録

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInlineScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateInlineScriptTagRequestBodyInlineScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInlineScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInlineScriptTagRequestBody();
    $request->inlineScriptTag = new CreateInlineScriptTagRequestBodyInlineScriptTag();
    $request->inlineScriptTag->displayScope = CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum::THANKS_PAGE;
    $request->inlineScriptTag->script = 'console.log("aaaaa")';
    $request->inlineScriptTag->triggerEvent = CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum::OBJECT_BUILDED;

    $requestSecurity = new CreateInlineScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inlineScript->createInlineScriptTag($request, $requestSecurity);

    if ($response->createInlineScriptTag201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInlineScriptTag

インラインスクリプトタグの削除

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInlineScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInlineScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInlineScriptTagRequest();
    $request->inlineScriptTagId = 857946;

    $requestSecurity = new DeleteInlineScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inlineScript->deleteInlineScriptTag($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInlineScriptTag

インラインスクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInlineScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInlineScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInlineScriptTagRequest();
    $request->inlineScriptTagId = 544883;

    $requestSecurity = new GetInlineScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inlineScript->getInlineScriptTag($request, $requestSecurity);

    if ($response->getInlineScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInlineScriptTags

インラインスクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInlineScriptTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetInlineScriptTagsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inlineScript->getInlineScriptTags($requestSecurity);

    if ($response->getInlineScriptTags200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInlineScriptTag

インラインスクリプトタグの更新

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagRequestBodyInlineScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInlineScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInlineScriptTagRequest();
    $request->requestBody = new UpdateInlineScriptTagRequestBody();
    $request->requestBody->inlineScriptTag = new UpdateInlineScriptTagRequestBodyInlineScriptTag();
    $request->requestBody->inlineScriptTag->displayScope = UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum::CART;
    $request->requestBody->inlineScriptTag->script = 'console.log("aaaaa")';
    $request->requestBody->inlineScriptTag->triggerEvent = UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum::OBJECT_BUILDED;
    $request->inlineScriptTagId = 423655;

    $requestSecurity = new UpdateInlineScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inlineScript->updateInlineScriptTag($request, $requestSecurity);

    if ($response->updateInlineScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
