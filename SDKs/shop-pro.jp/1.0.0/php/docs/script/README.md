# script

## Overview

ショップページにスクリプトタグを挿入するAPIです。

スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
- スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
- 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
- 登録するスクリプトのURLスキームは `https` のみになります
- 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
- スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます


### Available Operations

* [createShopScriptTag](#createshopscripttag) - スクリプトタグの作成
* [deleteScriptTag](#deletescripttag) - スクリプトタグの削除
* [getShopScriptTag](#getshopscripttag) - スクリプトタグの取得
* [getShopScriptTags](#getshopscripttags) - スクリプトタグの取得
* [updateShopScriptTag](#updateshopscripttag) - スクリプトタグの更新

## createShopScriptTag

スクリプトタグの作成

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateShopScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateShopScriptTagRequestBodyScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateShopScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShopScriptTagRequestBody();
    $request->scriptTag = new CreateShopScriptTagRequestBodyScriptTag();
    $request->scriptTag->displayScope = CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum::SHOP;
    $request->scriptTag->integrity = 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC';
    $request->scriptTag->src = 'https://example.com/example.js';

    $requestSecurity = new CreateShopScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->script->createShopScriptTag($request, $requestSecurity);

    if ($response->createShopScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScriptTag

スクリプトタグの削除

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScriptTagRequest();
    $request->scriptTagId = 623564;

    $requestSecurity = new DeleteScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->script->deleteScriptTag($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShopScriptTag

スクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShopScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShopScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShopScriptTagRequest();
    $request->scriptTagId = 645894;

    $requestSecurity = new GetShopScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->script->getShopScriptTag($request, $requestSecurity);

    if ($response->getShopScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShopScriptTags

スクリプトタグの取得

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShopScriptTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetShopScriptTagsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->script->getShopScriptTags($requestSecurity);

    if ($response->getShopScriptTags200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShopScriptTag

スクリプトタグの更新

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShopScriptTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShopScriptTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShopScriptTagRequestBodyScriptTag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShopScriptTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShopScriptTagRequest();
    $request->requestBody = new UpdateShopScriptTagRequestBody();
    $request->requestBody->scriptTag = new UpdateShopScriptTagRequestBodyScriptTag();
    $request->requestBody->scriptTag->displayScope = UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum::SHOP;
    $request->requestBody->scriptTag->integrity = 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC';
    $request->requestBody->scriptTag->src = 'https://example.com/example.js';
    $request->scriptTagId = 384382;

    $requestSecurity = new UpdateShopScriptTagSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->script->updateShopScriptTag($request, $requestSecurity);

    if ($response->updateShopScriptTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
