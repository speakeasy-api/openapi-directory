# uninstallation

## Overview

アプリをアンインストールするAPIです。

### Available Operations

* [deleteInstallation](#deleteinstallation) - アプリストアアプリのアンインストール

## deleteInstallation

このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。

アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstallationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteInstallationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->uninstallation->deleteInstallation($requestSecurity);

    if ($response->deleteInstallation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
