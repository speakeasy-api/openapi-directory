# purchases

### Available Operations

* [androidpublisherPurchasesProductsAcknowledge](#androidpublisherpurchasesproductsacknowledge) - Acknowledges a purchase of an inapp item.
* [androidpublisherPurchasesProductsConsume](#androidpublisherpurchasesproductsconsume) - Consumes a purchase for an inapp item.
* [androidpublisherPurchasesProductsGet](#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsAcknowledge](#androidpublisherpurchasessubscriptionsacknowledge) - Acknowledges a subscription purchase.
* [androidpublisherPurchasesSubscriptionsCancel](#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesSubscriptionsv2Get](#androidpublisherpurchasessubscriptionsv2get) - Get metadata about a subscription
* [androidpublisherPurchasesVoidedpurchasesList](#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

## androidpublisherPurchasesProductsAcknowledge

Acknowledges a purchase of an inapp item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductPurchasesAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesProductsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->productPurchasesAcknowledgeRequest = new ProductPurchasesAcknowledgeRequest();
    $request->productPurchasesAcknowledgeRequest->developerPayload = 'corporis';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->fields = 'voluptas';
    $request->key = 'alias';
    $request->oauthToken = 'maiores';
    $request->packageName = 'reiciendis';
    $request->prettyPrint = false;
    $request->productId = 'dolores';
    $request->quotaUser = 'id';
    $request->token = 'minima';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AndroidpublisherPurchasesProductsAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesProductsAcknowledge($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesProductsConsume

Consumes a purchase for an inapp item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsConsumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsConsumeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesProductsConsumeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'quaerat';
    $request->key = 'molestiae';
    $request->oauthToken = 'ex';
    $request->packageName = 'ut';
    $request->prettyPrint = false;
    $request->productId = 'culpa';
    $request->quotaUser = 'adipisci';
    $request->token = 'debitis';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AndroidpublisherPurchasesProductsConsumeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesProductsConsume($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesProductsGet

Checks the purchase and consumption status of an inapp item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesProductsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quis';
    $request->key = 'eum';
    $request->oauthToken = 'reiciendis';
    $request->packageName = 'provident';
    $request->prettyPrint = false;
    $request->productId = 'aspernatur';
    $request->quotaUser = 'ullam';
    $request->token = 'quasi';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new AndroidpublisherPurchasesProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesProductsGet($request, $requestSecurity);

    if ($response->productPurchase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesSubscriptionsAcknowledge

Acknowledges a subscription purchase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPurchasesAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subscriptionPurchasesAcknowledgeRequest = new SubscriptionPurchasesAcknowledgeRequest();
    $request->subscriptionPurchasesAcknowledgeRequest->developerPayload = 'provident';
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'aliquid';
    $request->key = 'accusantium';
    $request->oauthToken = 'repellat';
    $request->packageName = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->subscriptionId = 'in';
    $request->token = 'nam';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsAcknowledge($request, $requestSecurity);

    if ($response->statusCode === 200) {
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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'molestias';
    $request->key = 'officiis';
    $request->oauthToken = 'sapiente';
    $request->packageName = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->subscriptionId = 'rerum';
    $request->token = 'tempora';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'inventore';

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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPurchasesDeferRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionDeferralInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsDeferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsDeferRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subscriptionPurchasesDeferRequest = new SubscriptionPurchasesDeferRequest();
    $request->subscriptionPurchasesDeferRequest->deferralInfo = new SubscriptionDeferralInfo();
    $request->subscriptionPurchasesDeferRequest->deferralInfo->desiredExpiryTimeMillis = 'cumque';
    $request->subscriptionPurchasesDeferRequest->deferralInfo->expectedExpiryTimeMillis = 'quae';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'eum';
    $request->key = 'eius';
    $request->oauthToken = 'rem';
    $request->packageName = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->subscriptionId = 'eos';
    $request->token = 'sapiente';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsDeferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsDefer($request, $requestSecurity);

    if ($response->subscriptionPurchasesDeferResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'earum';
    $request->key = 'soluta';
    $request->oauthToken = 'hic';
    $request->packageName = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->subscriptionId = 'earum';
    $request->token = 'perspiciatis';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsGet($request, $requestSecurity);

    if ($response->subscriptionPurchase !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsRefundRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'fugit';
    $request->key = 'cumque';
    $request->oauthToken = 'fuga';
    $request->packageName = 'ratione';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->subscriptionId = 'necessitatibus';
    $request->token = 'nulla';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'quasi';

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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsRevokeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsRevokeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'suscipit';
    $request->key = 'adipisci';
    $request->oauthToken = 'quasi';
    $request->packageName = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->subscriptionId = 'nulla';
    $request->token = 'necessitatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'tempora';

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

## androidpublisherPurchasesSubscriptionsv2Get

Get metadata about a subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsv2GetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesSubscriptionsv2GetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesSubscriptionsv2GetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'esse';
    $request->key = 'praesentium';
    $request->oauthToken = 'maiores';
    $request->packageName = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->token = 'architecto';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new AndroidpublisherPurchasesSubscriptionsv2GetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesSubscriptionsv2Get($request, $requestSecurity);

    if ($response->subscriptionPurchaseV2 !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesVoidedpurchasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesVoidedpurchasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->endTime = 'ex';
    $request->fields = 'consectetur';
    $request->key = 'aliquid';
    $request->maxResults = 58870;
    $request->oauthToken = 'laborum';
    $request->packageName = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->startIndex = 856756;
    $request->startTime = 'expedita';
    $request->token = 'aliquid';
    $request->type = 639187;
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AndroidpublisherPurchasesVoidedpurchasesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesVoidedpurchasesList($request, $requestSecurity);

    if ($response->voidedPurchasesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
