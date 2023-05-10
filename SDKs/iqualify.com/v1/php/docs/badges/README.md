# badges

### Available Operations

* [getOfferingsOfferingIdBadges](#getofferingsofferingidbadges) - Find offering badges
* [getUsersUserEmailBadges](#getusersuseremailbadges) - Find user's badges
* [postOfferingsOfferingIdUsersUserEmailBadgesAward](#postofferingsofferingidusersuseremailbadgesaward) - Award badge

## getOfferingsOfferingIdBadges

Responds with the badge for an offering matching the offeringId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdBadgesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdBadgesRequest();
    $request->offeringId = 'sed';

    $response = $sdk->badges->getOfferingsOfferingIdBadges($request);

    if ($response->badge !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersUserEmailBadges

Responds with all badges that the specified user has been awarded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserEmailBadgesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersUserEmailBadgesRequest();
    $request->userEmail = 'Dameon_Morissette@yahoo.com';

    $response = $sdk->badges->getUsersUserEmailBadges($request);

    if ($response->userBadges !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdUsersUserEmailBadgesAward

Awards a badge to a user in the offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest();
    $request->offeringId = 'saepe';
    $request->userEmail = 'Issac.Hessel@hotmail.com';

    $response = $sdk->badges->postOfferingsOfferingIdUsersUserEmailBadgesAward($request);

    if ($response->awardedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
