# kKid

## Overview

KKid API Functions

<https://github.com/kumpeapps/kkid>
### Available Operations

* [kkidAllowanceGet](#kkidallowanceget) - returns allowance balance and allowance transactions
* [kkidAllowancePost](#kkidallowancepost) - adds new allowance transaction to kidUserID
* [kkidApnsPost](#kkidapnspost) - subscribes/unsubscribes/registers for apns push notifications
* [kkidChorelistDelete](#kkidchorelistdelete) - deletes chore for given chore id
* [kkidChorelistGet](#kkidchorelistget) - returns list of chores for given user
* [kkidChorelistPost](#kkidchorelistpost) - adds chore for given user
* [kkidChorelistPut](#kkidchorelistput) - updates chore for given chore id
* [kkidMasteruserPost](#kkidmasteruserpost) - adds new master user account
* [kkidShareGet](#kkidshareget) - Create Share Link
* [kkidUserGet](#kkiduserget) - Gets user info
* [kkidUserlistDelete](#kkiduserlistdelete) - deletes user
* [kkidUserlistGet](#kkiduserlistget) - returns list of users
* [kkidUserlistPost](#kkiduserlistpost) - adds new child user
* [kkidUserlistPut](#kkiduserlistput) - updates user
* [kkidWishlistDelete](#kkidwishlistdelete) - Delete item from wishlist
* [kkidWishlistGet](#kkidwishlistget) - Get list of wishlist items
* [kkidWishlistPost](#kkidwishlistpost) - Add item to kid's wishlist
* [kkidWishlistPut](#kkidwishlistput) - Update item on kid's wishlist

## kkidAllowanceGet

By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidAllowanceGetRequest();
    $request->kidUserId = 715190;
    $request->transactionDays = 844266;

    $requestSecurity = new KkidAllowanceGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidAllowanceGet($request, $requestSecurity);

    if ($response->allowance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidAllowancePost

By passing in the appropriate options, you can add an allowance transaction to a given user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowancePostRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowancePostTransactionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowancePostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidAllowancePostRequest();
    $request->amount = 6027.63;
    $request->description = 'nulla';
    $request->kidUserId = 544883;
    $request->transactionType = KkidAllowancePostTransactionTypeEnum::SUBTRACT;

    $requestSecurity = new KkidAllowancePostSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidAllowancePost($request, $requestSecurity);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidApnsPost

subscribes/unsubscribes/registers for apns push notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidApnsPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidApnsPostPriorityEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidApnsPostSectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidApnsPostToolEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidApnsPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidApnsPostRequest();
    $request->badge = 423655;
    $request->devicename = 'error';
    $request->kidUserId = 645894;
    $request->message = 'suscipit';
    $request->priority = KkidApnsPostPriorityEnum::ACTIVE;
    $request->section = KkidApnsPostSectionEnum::CHORES_NEW;
    $request->sound = 'debitis';
    $request->title = 'Mr.';
    $request->token = 'delectus';
    $request->tool = KkidApnsPostToolEnum::SUBSCRIBE;

    $requestSecurity = new KkidApnsPostSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidApnsPost($request, $requestSecurity);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidChorelistDelete

By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidChorelistDeleteRequest();
    $request->idChoreList = 383441;

    $requestSecurity = new KkidChorelistDeleteSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidChorelistDelete($request, $requestSecurity);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidChorelistGet

By passing in the appropriate options, you can search for
chores assigned to a given user within the authenticated user's master account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistGetDayEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidChorelistGetRequest();
    $request->blockDash = false;
    $request->canSteal = false;
    $request->day = KkidChorelistGetDayEnum::WEDNESDAY;
    $request->includeCalendar = false;
    $request->kidUsername = 'minus';
    $request->optional = false;
    $request->status = 'placeat';

    $requestSecurity = new KkidChorelistGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidChorelistGet($request, $requestSecurity);

    if ($response->chorelist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidChorelistPost

By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPostDayEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidChorelistPostRequest();
    $request->aiIcon = 'voluptatum';
    $request->blockDash = false;
    $request->canSteal = false;
    $request->choreDescription = 'iusto';
    $request->choreName = 'excepturi';
    $request->choreNumber = 392785;
    $request->day = KkidChorelistPostDayEnum::TODAY;
    $request->extraAllowance = 836079;
    $request->isCalendar = false;
    $request->kidUsername = 'ab';
    $request->nfcTag = 'quis';
    $request->notes = 'veritatis';
    $request->objectDetectionTag = 'deserunt';
    $request->oneTime = false;
    $request->optional = false;
    $request->reassignable = false;
    $request->requireObjectDetection = false;
    $request->startDate = 'perferendis';
    $request->status = 'ipsam';
    $request->updatedByAutomation = false;

    $requestSecurity = new KkidChorelistPostSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidChorelistPost($request, $requestSecurity);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidChorelistPut

By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPutRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPutWhereDayEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidChorelistPutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidChorelistPutRequest();
    $request->altitude = 832620;
    $request->idChoreList = 957156;
    $request->latitude = 778157;
    $request->longitude = 140350;
    $request->nfcTag = 'at';
    $request->notes = 'at';
    $request->status = 'maiores';
    $request->stolen = false;
    $request->stolenBy = 'molestiae';
    $request->updatedByAutomation = false;
    $request->whereDay = KkidChorelistPutWhereDayEnum::WEEKLY;
    $request->whereName = 'quod';
    $request->whereStatus = 'esse';

    $requestSecurity = new KkidChorelistPutSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidChorelistPut($request, $requestSecurity);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidMasteruserPost

By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidMasteruserPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidMasteruserPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidMasteruserPostRequest();
    $request->email = 'Osborne72@yahoo.com';
    $request->firstName = 'Lucie';
    $request->lastName = 'McCullough';
    $request->password = 'fugit';
    $request->username = 'Kale_Welch10';

    $requestSecurity = new KkidMasteruserPostSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidMasteruserPost($request, $requestSecurity);

    if ($response->addUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidShareGet

Create share link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetLinkEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetScope2Enum;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetScope3Enum;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetScope4Enum;
use \OpenAPI\OpenAPI\Models\Operations\KkidShareGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidShareGetRequest();
    $request->link = KkidShareGetLinkEnum::HTTPS_KHOME_KUMPEAPPS_COM_PORTAL_WISH_LIST_PHP;
    $request->linkUserId = 'molestiae';
    $request->scope = KkidShareGetScopeEnum::WISH_LIST_ADMIN;
    $request->scope2 = KkidShareGetScope2Enum::WISH_LIST;
    $request->scope3 = KkidShareGetScope3Enum::CHORES_ADMIN;
    $request->scope4 = KkidShareGetScope4Enum::CHORES;

    $requestSecurity = new KkidShareGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidShareGet($request, $requestSecurity);

    if ($response->twoHundredAndOneShare !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidUserGet

Gets user info for authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidUserGetRequest();
    $request->enableBool = false;

    $response = $sdk->kKid->kkidUserGet($request);

    if ($response->userlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidUserlistDelete

By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidUserlistDeleteRequest();
    $request->userID = 456150;

    $requestSecurity = new KkidUserlistDeleteSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidUserlistDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidUserlistGet

By passing in the appropriate options, you can search for
users within the authenticated user's master account


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidUserlistGetRequest();
    $request->email = 'Keshaun32@gmail.com';
    $request->enableAllowance = false;
    $request->enableChores = false;
    $request->isActive = false;
    $request->isAdmin = false;
    $request->isChild = false;
    $request->userID = 617636;
    $request->username = 'Camden61';

    $response = $sdk->kKid->kkidUserlistGet($request);

    if ($response->userlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidUserlistPost

By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidUserlistPostRequest();
    $request->email = 'Tyra.Turcotte35@yahoo.com';
    $request->firstName = 'Leslie';
    $request->lastName = 'Kertzmann';
    $request->password = 'saepe';
    $request->username = 'Maxie96';

    $requestSecurity = new KkidUserlistPostSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidUserlistPost($request, $requestSecurity);

    if ($response->addUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidUserlistPut

By passing in the appropriate variables this method updates the user's profile


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidUserlistPutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidUserlistPutRequest();
    $request->email = 'Madaline21@hotmail.com';
    $request->emoji = 'corporis';
    $request->enableAdmin = false;
    $request->enableAllowance = false;
    $request->enableChores = false;
    $request->enableObjectDetection = false;
    $request->enableTmdb = false;
    $request->enableWishList = false;
    $request->firstName = 'Braulio';
    $request->lastName = 'Rolfson';
    $request->tmdbKey = 'enim';
    $request->userID = 607831;
    $request->username = 'Franco.Hane';

    $response = $sdk->kKid->kkidUserlistPut($request);

    if ($response->addUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidWishlistDelete

Delete item from wishlist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidWishlistDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidWishlistDeleteRequest();
    $request->wishId = 438601;

    $response = $sdk->kKid->kkidWishlistDelete($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidWishlistGet

Get list of wishlist items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidWishlistGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidWishlistGetRequest();
    $request->kidUserId = 634274;

    $response = $sdk->kKid->kkidWishlistGet($request);

    if ($response->wishlist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidWishlistPost

Add item to kid's wishlist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidWishlistPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidWishlistPostRequest();
    $request->description = 'doloribus';
    $request->kidUserId = 958950;
    $request->link = 'architecto';
    $request->priority = 652790;
    $request->title = 'Mrs.';

    $response = $sdk->kKid->kkidWishlistPost($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## kkidWishlistPut

Update item on kid's wishlist

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidWishlistPutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidWishlistPutRequest();
    $request->description = 'culpa';
    $request->link = 'consequuntur';
    $request->priority = 995300;
    $request->title = 'Miss';
    $request->wishId = 581850;

    $response = $sdk->kKid->kkidWishlistPut($request);

    if ($response->success !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
