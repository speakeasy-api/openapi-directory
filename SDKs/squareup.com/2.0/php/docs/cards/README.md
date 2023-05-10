# cards

### Available Operations

* [createCard](#createcard) - CreateCard
* [disableCard](#disablecard) - DisableCard
* [listCards](#listcards) - ListCards
* [retrieveCard](#retrievecard) - RetrieveCard

## createCard

Adds a card on file to an existing merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\CreateCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCardRequest();
    $request->card = new Card();
    $request->card->billingAddress = new Address();
    $request->card->billingAddress->addressLine1 = 'sapiente';
    $request->card->billingAddress->addressLine2 = 'architecto';
    $request->card->billingAddress->addressLine3 = 'mollitia';
    $request->card->billingAddress->administrativeDistrictLevel1 = 'dolorem';
    $request->card->billingAddress->administrativeDistrictLevel2 = 'culpa';
    $request->card->billingAddress->administrativeDistrictLevel3 = 'consequuntur';
    $request->card->billingAddress->country = 'Zambia';
    $request->card->billingAddress->firstName = 'Madaline';
    $request->card->billingAddress->lastName = 'McCullough';
    $request->card->billingAddress->locality = 'numquam';
    $request->card->billingAddress->organization = 'commodi';
    $request->card->billingAddress->postalCode = '42613';
    $request->card->billingAddress->sublocality = 'vitae';
    $request->card->billingAddress->sublocality2 = 'laborum';
    $request->card->billingAddress->sublocality3 = 'animi';
    $request->card->bin = 'enim';
    $request->card->cardBrand = 'odit';
    $request->card->cardType = 'quo';
    $request->card->cardholderName = 'sequi';
    $request->card->customerId = 'tenetur';
    $request->card->enabled = false;
    $request->card->expMonth = 368725;
    $request->card->expYear = 662527;
    $request->card->fingerprint = 'possimus';
    $request->card->id = '019da1ff-e78f-4097-b007-4f15471b5e6e';
    $request->card->last4 = 'quae';
    $request->card->prepaidType = 'ipsum';
    $request->card->referenceId = 'quidem';
    $request->card->version = 565189;
    $request->idempotencyKey = 'excepturi';
    $request->sourceId = 'pariatur';
    $request->verificationToken = 'modi';

    $requestSecurity = new CreateCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cards->createCard($request, $requestSecurity);

    if ($response->createCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableCard

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableCardRequest();
    $request->cardId = 'praesentium';

    $requestSecurity = new DisableCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cards->disableCard($request, $requestSecurity);

    if ($response->disableCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCards

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCardsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCardsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCardsRequest();
    $request->cursor = 'rem';
    $request->customerId = 'voluptates';
    $request->includeDisabled = false;
    $request->referenceId = 'quasi';
    $request->sortOrder = 'repudiandae';

    $requestSecurity = new ListCardsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cards->listCards($request, $requestSecurity);

    if ($response->listCardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveCard

Retrieves details for a specific Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveCardRequest();
    $request->cardId = 'sint';

    $requestSecurity = new RetrieveCardSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cards->retrieveCard($request, $requestSecurity);

    if ($response->retrieveCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
