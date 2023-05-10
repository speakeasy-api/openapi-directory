# scriptDeprecated

## Overview

スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください

### Available Operations

* [createScriptTag](#createscripttag) - スクリプトタグの作成
* [deleteV1ScriptTagsScriptTagIdJson](#deletev1scripttagsscripttagidjson) - スクリプトタグの削除
* [getScriptTag](#getscripttag) - スクリプトタグの取得
* [getScriptTags](#getscripttags) - スクリプトタグの取得
* [updateScriptTag](#updatescripttag) - スクリプトタグの更新

## createScriptTag

スクリプトタグの作成

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptTagRequestBodyScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScriptTagRequestBody();
    $request->scriptTag = new CreateScriptTagRequestBodyScriptTag();
    $request->scriptTag->displayScope = CreateScriptTagRequestBodyScriptTagDisplayScopeEnum::SHOP;
    $request->scriptTag->src = 'https://example.com/example.js';

    $requestSecurity = new CreateScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scriptDeprecated->createScriptTag($request, $requestSecurity);

    if ($response->createScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteV1ScriptTagsScriptTagIdJson

スクリプトタグの削除

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV1ScriptTagsScriptTagIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV1ScriptTagsScriptTagIdJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV1ScriptTagsScriptTagIdJsonRequest();
    $request->scriptTagId = 437587;

    $requestSecurity = new DeleteV1ScriptTagsScriptTagIdJsonSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scriptDeprecated->deleteV1ScriptTagsScriptTagIdJson($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScriptTag

スクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScriptTagRequest();
    $request->scriptTagId = 297534;

    $requestSecurity = new GetScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scriptDeprecated->getScriptTag($request, $requestSecurity);

    if ($response->getScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScriptTags

スクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScriptTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetScriptTagsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scriptDeprecated->getScriptTags($requestSecurity);

    if ($response->getScriptTags200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScriptTag

スクリプトタグの更新

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptTagRequestBodyScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScriptTagRequest();
    $request->requestBody = new UpdateScriptTagRequestBody();
    $request->requestBody->scriptTag = new UpdateScriptTagRequestBodyScriptTag();
    $request->requestBody->scriptTag->displayScope = UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum::SHOP;
    $request->requestBody->scriptTag->src = 'https://example.com/example.js';
    $request->scriptTagId = 891773;

    $requestSecurity = new UpdateScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scriptDeprecated->updateScriptTag($request, $requestSecurity);

    if ($response->updateScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
