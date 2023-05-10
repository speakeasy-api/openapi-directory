# giftCards

### Available Operations

* [createGiftCard](#creategiftcard) - CreateGiftCard
* [linkCustomerToGiftCard](#linkcustomertogiftcard) - LinkCustomerToGiftCard
* [listGiftCards](#listgiftcards) - ListGiftCards
* [retrieveGiftCard](#retrievegiftcard) - RetrieveGiftCard
* [retrieveGiftCardFromGAN](#retrievegiftcardfromgan) - RetrieveGiftCardFromGAN
* [retrieveGiftCardFromNonce](#retrievegiftcardfromnonce) - RetrieveGiftCardFromNonce
* [unlinkCustomerFromGiftCard](#unlinkcustomerfromgiftcard) - UnlinkCustomerFromGiftCard

## createGiftCard

Creates a digital gift card or registers a physical (plastic) gift card. You must activate the gift card before 
it can be used for payment. For more information, see 
[Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-square-gift-cards).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\GiftCard;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\CreateGiftCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGiftCardRequest();
    $request->giftCard = new GiftCard();
    $request->giftCard->balanceMoney = new Money();
    $request->giftCard->balanceMoney->amount = 919532;
    $request->giftCard->balanceMoney->currency = 'quasi';
    $request->giftCard->createdAt = 'atque';
    $request->giftCard->customerIds = [
        'asperiores',
        'totam',
    ];
    $request->giftCard->gan = 'suscipit';
    $request->giftCard->ganSource = 'quidem';
    $request->giftCard->id = 'c173d689-eee9-4526-b8d9-86e881ead4f0';
    $request->giftCard->state = 'repudiandae';
    $request->giftCard->type = 'dicta';
    $request->idempotencyKey = 'accusantium';
    $request->locationId = 'beatae';

    $requestSecurity = new CreateGiftCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->createGiftCard($request, $requestSecurity);

    if ($response->createGiftCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## linkCustomerToGiftCard

Links a customer to a gift card

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LinkCustomerToGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\LinkCustomerToGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\LinkCustomerToGiftCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LinkCustomerToGiftCardRequest();
    $request->linkCustomerToGiftCardRequest = new LinkCustomerToGiftCardRequest();
    $request->linkCustomerToGiftCardRequest->customerId = 'dolores';
    $request->giftCardId = 'enim';

    $requestSecurity = new LinkCustomerToGiftCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->linkCustomerToGiftCard($request, $requestSecurity);

    if ($response->linkCustomerToGiftCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGiftCards

Lists all gift cards. You can specify optional filters to retrieve 
a subset of the gift cards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListGiftCardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGiftCardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGiftCardsRequest();
    $request->cursor = 'laboriosam';
    $request->customerId = 'velit';
    $request->limit = 952143;
    $request->state = 'molestias';
    $request->type = 'magnam';

    $requestSecurity = new ListGiftCardsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->listGiftCards($request, $requestSecurity);

    if ($response->listGiftCardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveGiftCard

Retrieves a gift card using its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveGiftCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveGiftCardRequest();
    $request->id = 'e29e973e-922a-457a-95be-3e060807e2b6';

    $requestSecurity = new RetrieveGiftCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->retrieveGiftCard($request, $requestSecurity);

    if ($response->retrieveGiftCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveGiftCardFromGAN

Retrieves a gift card using the gift card account number (GAN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RetrieveGiftCardFromGANRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveGiftCardFromGANSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveGiftCardFromGANRequest();
    $request->gan = 'necessitatibus';

    $requestSecurity = new RetrieveGiftCardFromGANSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->retrieveGiftCardFromGAN($request, $requestSecurity);

    if ($response->retrieveGiftCardFromGANResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveGiftCardFromNonce

Retrieves a gift card using a nonce (a secure token) that represents the gift card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RetrieveGiftCardFromNonceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveGiftCardFromNonceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveGiftCardFromNonceRequest();
    $request->nonce = 'ratione';

    $requestSecurity = new RetrieveGiftCardFromNonceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->retrieveGiftCardFromNonce($request, $requestSecurity);

    if ($response->retrieveGiftCardFromNonceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlinkCustomerFromGiftCard

Unlinks a customer from a gift card

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkCustomerFromGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnlinkCustomerFromGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkCustomerFromGiftCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlinkCustomerFromGiftCardRequest();
    $request->unlinkCustomerFromGiftCardRequest = new UnlinkCustomerFromGiftCardRequest();
    $request->unlinkCustomerFromGiftCardRequest->customerId = 'laborum';
    $request->giftCardId = 'distinctio';

    $requestSecurity = new UnlinkCustomerFromGiftCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->giftCards->unlinkCustomerFromGiftCard($request, $requestSecurity);

    if ($response->unlinkCustomerFromGiftCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
