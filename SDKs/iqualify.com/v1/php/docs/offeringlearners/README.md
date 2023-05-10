# offeringLearners

### Available Operations

* [deleteOfferingsOfferingIdUsersMarkerEmailMarks](#deleteofferingsofferingidusersmarkeremailmarks) - Remove learners from coach's marking list
* [deleteOfferingsOfferingIdUsersUserEmail](#deleteofferingsofferingidusersuseremail) - Removes user from the offering
* [getOfferingsOfferingIdUsers](#getofferingsofferingidusers) - Find offering's users
* [getOfferingsOfferingIdUsersMarkerEmailMarks](#getofferingsofferingidusersmarkeremailmarks) - Find Learners marked by a coach
* [patchUsersUserEmailTransfer](#patchusersuseremailtransfer) - Transfer a user between offerings
* [postOfferingsOfferingIdUsers](#postofferingsofferingidusers) - Adds user to the offering
* [postOfferingsOfferingIdUsersMarkerEmailMarks](#postofferingsofferingidusersmarkeremailmarks) - Add learners to be marked by a coach

## deleteOfferingsOfferingIdUsersMarkerEmailMarks

Removes an array of learners from coach's marking list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest();
    $request->requestBody = [
        'cum',
        'perferendis',
    ];
    $request->markerEmail = 'doloremque';
    $request->offeringId = 'reprehenderit';

    $response = $sdk->offeringLearners->deleteOfferingsOfferingIdUsersMarkerEmailMarks($request);

    if ($response->offeringUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOfferingsOfferingIdUsersUserEmail

Removes a user from the offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOfferingsOfferingIdUsersUserEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOfferingsOfferingIdUsersUserEmailRequest();
    $request->offeringId = 'ut';
    $request->userEmail = 'Blanche48@hotmail.com';

    $response = $sdk->offeringLearners->deleteOfferingsOfferingIdUsersUserEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdUsers

Responds with a list of users in the offering (facilitators, learners and markers.).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersFacilitatorsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersLearnersEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersMarkersEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdUsersRequest();
    $request->facilitators = GetOfferingsOfferingIdUsersFacilitatorsEnum::TRUE;
    $request->learners = GetOfferingsOfferingIdUsersLearnersEnum::FALSE;
    $request->markers = GetOfferingsOfferingIdUsersMarkersEnum::TRUE;
    $request->offeringId = 'accusamus';

    $response = $sdk->offeringLearners->getOfferingsOfferingIdUsers($request);

    if ($response->offeringUserResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingsOfferingIdUsersMarkerEmailMarks

Responds with all learners marked by the specified coach.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingsOfferingIdUsersMarkerEmailMarksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingsOfferingIdUsersMarkerEmailMarksRequest();
    $request->markerEmail = 'commodi';
    $request->offeringId = 'repudiandae';

    $response = $sdk->offeringLearners->getOfferingsOfferingIdUsersMarkerEmailMarks($request);

    if ($response->offeringUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUsersUserEmailTransfer

Moves the user's access and progress from one offering to another.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchUsersUserEmailTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUsersUserEmailTransferRequest();
    $request->transferRequest = new TransferRequest();
    $request->transferRequest->fromOfferingId = 'quae';
    $request->transferRequest->sendInvite = false;
    $request->transferRequest->toOfferingId = 'ipsum';
    $request->userEmail = 'Kennedi.Mante50@hotmail.com';

    $response = $sdk->offeringLearners->patchUsersUserEmailTransfer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdUsers

Adds one or more users to the offering.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OfferingUser;
use \OpenAPI\OpenAPI\Models\Shared\UserMetadata;
use \OpenAPI\OpenAPI\Models\Shared\UserProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdUsersRequest();
    $request->requestBody = [
        new OfferingUser(),
        new OfferingUser(),
        new OfferingUser(),
    ];
    $request->offeringId = 'voluptates';

    $response = $sdk->offeringLearners->postOfferingsOfferingIdUsers($request);

    if ($response->offeringUserAddResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOfferingsOfferingIdUsersMarkerEmailMarks

Adds an array of learners to be marked by the specified coach.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostOfferingsOfferingIdUsersMarkerEmailMarksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOfferingsOfferingIdUsersMarkerEmailMarksRequest();
    $request->requestBody = [
        'repudiandae',
    ];
    $request->markerEmail = 'sint';
    $request->offeringId = 'veritatis';

    $response = $sdk->offeringLearners->postOfferingsOfferingIdUsersMarkerEmailMarks($request);

    if ($response->offeringUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
