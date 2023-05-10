# purchases

### Available Operations

* [androidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

## androidpublisherPurchasesProductsGet

Checks the purchase and consumption status of an inapp item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesProductsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->oauthToken = 'omnis';
    $request->packageName = 'quis';
    $request->prettyPrint = false;
    $request->productId = 'ipsum';
    $request->quotaUser = 'delectus';
    $request->token = 'voluptate';
    $request->userIp = 'consectetur';

    $requestSecurity = new AndroidpublisherPurchasesProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesProductsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsCancelRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vero';
    $request->key = 'tenetur';
    $request->oauthToken = 'dignissimos';
    $request->packageName = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->subscriptionId = 'quod';
    $request->token = 'odio';
    $request->userIp = 'similique';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsCancel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsDefer

Defers a user's subscription purchase until a specified future expiration time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsDeferRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPurchasesDeferRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionDeferralInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsDeferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsDeferRequest();
    $request->subscriptionPurchasesDeferRequest = new SubscriptionPurchasesDeferRequest();
    $request->subscriptionPurchasesDeferRequest->deferralInfo = new SubscriptionDeferralInfo();
    $request->subscriptionPurchasesDeferRequest->deferralInfo->desiredExpiryTimeMillis = 'facilis';
    $request->subscriptionPurchasesDeferRequest->deferralInfo->expectedExpiryTimeMillis = 'vero';
    $request->alt = AltEnum::JSON;
    $request->fields = 'ducimus';
    $request->key = 'dolore';
    $request->oauthToken = 'quibusdam';
    $request->packageName = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->subscriptionId = 'natus';
    $request->token = 'impedit';
    $request->userIp = 'aut';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsDeferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsDefer($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'voluptatibus';
    $request->key = 'exercitationem';
    $request->oauthToken = 'nulla';
    $request->packageName = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->subscriptionId = 'maiores';
    $request->token = 'doloribus';
    $request->userIp = 'iusto';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsRefund

Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsRefundRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'eligendi';
    $request->key = 'ducimus';
    $request->oauthToken = 'alias';
    $request->packageName = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->subscriptionId = 'ipsam';
    $request->token = 'ea';
    $request->userIp = 'aspernatur';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsRefund($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsRevoke

Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRevokeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRevokeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsRevokeRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vel';
    $request->key = 'possimus';
    $request->oauthToken = 'magnam';
    $request->packageName = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->subscriptionId = 'laudantium';
    $request->token = 'dicta';
    $request->userIp = 'dolor';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsRevokeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsRevoke($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesVoidedpurchasesList

Lists the purchases that were canceled, refunded or charged-back.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesVoidedpurchasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesVoidedpurchasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesVoidedpurchasesListRequest();
    $request->alt = AltEnum::JSON;
    $request->endTime = 'maiores';
    $request->fields = 'quasi';
    $request->key = 'ex';
    $request->maxResults = 862192;
    $request->oauthToken = 'excepturi';
    $request->packageName = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->startIndex = 960835;
    $request->startTime = 'quisquam';
    $request->token = 'saepe';
    $request->userIp = 'ea';

    $requestSecurity = new AndroidpublisherPurchasesVoidedpurchasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesVoidedpurchasesList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
