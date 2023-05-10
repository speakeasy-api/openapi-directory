# applicationCharge

### Available Operations

* [createUsageCharge](#createusagecharge) - 従量課金データの作成
* [postApplicationCharge](#postapplicationcharge) - アプリ内課金データの作成

## createUsageCharge

アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
※無料お試し期間中のショップに対しては従量課金データを作成できません。


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeRequestBodyUsageCharge;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageChargeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsageChargeRequest();
    $request->requestBody = new CreateUsageChargeRequestBody();
    $request->requestBody->usageCharge = new CreateUsageChargeRequestBodyUsageCharge();
    $request->requestBody->usageCharge->description = '2019/4 メール送信分';
    $request->requestBody->usageCharge->point = 100;
    $request->xAppstoreUsageChargeToken = 'distinctio';
    $request->recurringApplicationChargeId = 'quibusdam';

    $requestSecurity = new CreateUsageChargeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applicationCharge->createUsageCharge($request, $requestSecurity);

    if ($response->createUsageCharge201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplicationCharge

「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。

この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。

ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApplicationChargeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApplicationChargeRequestBodyApplicationCharge;
use \OpenAPI\OpenAPI\Models\Operations\PostApplicationChargeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApplicationChargeRequestBody();
    $request->applicationCharge = new PostApplicationChargeRequestBodyApplicationCharge();
    $request->applicationCharge->applicationChargeSourceId = '5S1DAG';

    $requestSecurity = new PostApplicationChargeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applicationCharge->postApplicationCharge($request, $requestSecurity);

    if ($response->postApplicationCharge201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
