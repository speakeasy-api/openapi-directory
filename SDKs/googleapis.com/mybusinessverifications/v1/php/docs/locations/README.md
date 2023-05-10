# locations

### Available Operations

* [mybusinessverificationsLocationsFetchVerificationOptions](#mybusinessverificationslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [mybusinessverificationsLocationsGetVoiceOfMerchantState](#mybusinessverificationslocationsgetvoiceofmerchantstate) - Gets the VoiceOfMerchant state.
* [mybusinessverificationsLocationsVerificationsComplete](#mybusinessverificationslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [mybusinessverificationsLocationsVerificationsList](#mybusinessverificationslocationsverificationslist) - List verifications of a location, ordered by create time.
* [mybusinessverificationsLocationsVerify](#mybusinessverificationslocationsverify) - Starts the verification process for a location.

## mybusinessverificationsLocationsFetchVerificationOptions

Reports all eligible verification options for a location in a specific language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsFetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsFetchVerificationOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest();
    $request->fetchVerificationOptionsRequest->context = new ServiceBusinessContext();
    $request->fetchVerificationOptionsRequest->context->address = new PostalAddress();
    $request->fetchVerificationOptionsRequest->context->address->addressLines = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->fetchVerificationOptionsRequest->context->address->administrativeArea = 'quod';
    $request->fetchVerificationOptionsRequest->context->address->languageCode = 'esse';
    $request->fetchVerificationOptionsRequest->context->address->locality = 'totam';
    $request->fetchVerificationOptionsRequest->context->address->organization = 'porro';
    $request->fetchVerificationOptionsRequest->context->address->postalCode = '17651-5975';
    $request->fetchVerificationOptionsRequest->context->address->recipients = [
        'commodi',
    ];
    $request->fetchVerificationOptionsRequest->context->address->regionCode = 'molestiae';
    $request->fetchVerificationOptionsRequest->context->address->revision = 264555;
    $request->fetchVerificationOptionsRequest->context->address->sortingCode = 'qui';
    $request->fetchVerificationOptionsRequest->context->address->sublocality = 'impedit';
    $request->fetchVerificationOptionsRequest->languageCode = 'cum';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->location = 'ad';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $response = $sdk->locations->mybusinessverificationsLocationsFetchVerificationOptions($request);

    if ($response->fetchVerificationOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessverificationsLocationsGetVoiceOfMerchantState

Gets the VoiceOfMerchant state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'fuga';
    $request->key = 'in';
    $request->name = 'Sheryl Kertzmann';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $response = $sdk->locations->mybusinessverificationsLocationsGetVoiceOfMerchantState($request);

    if ($response->voiceOfMerchantState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessverificationsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsVerificationsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompleteVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsVerificationsCompleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->completeVerificationRequest = new CompleteVerificationRequest();
    $request->completeVerificationRequest->pin = 'laborum';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->name = 'Guadalupe Hickle';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $response = $sdk->locations->mybusinessverificationsLocationsVerificationsComplete($request);

    if ($response->completeVerificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessverificationsLocationsVerificationsList

List verifications of a location, ordered by create time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsVerificationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsVerificationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->pageSize = 653108;
    $request->pageToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->locations->mybusinessverificationsLocationsVerificationsList($request);

    if ($response->listVerificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessverificationsLocationsVerify

Starts the verification process for a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessverificationsLocationsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\VerifyLocationRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerificationToken;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessverificationsLocationsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->verifyLocationRequest = new VerifyLocationRequest();
    $request->verifyLocationRequest->context = new ServiceBusinessContext();
    $request->verifyLocationRequest->context->address = new PostalAddress();
    $request->verifyLocationRequest->context->address->addressLines = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->verifyLocationRequest->context->address->administrativeArea = 'laborum';
    $request->verifyLocationRequest->context->address->languageCode = 'animi';
    $request->verifyLocationRequest->context->address->locality = 'enim';
    $request->verifyLocationRequest->context->address->organization = 'odit';
    $request->verifyLocationRequest->context->address->postalCode = '19368-0068';
    $request->verifyLocationRequest->context->address->recipients = [
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->verifyLocationRequest->context->address->regionCode = 'vero';
    $request->verifyLocationRequest->context->address->revision = 468651;
    $request->verifyLocationRequest->context->address->sortingCode = 'praesentium';
    $request->verifyLocationRequest->context->address->sublocality = 'voluptatibus';
    $request->verifyLocationRequest->emailAddress = 'ipsa';
    $request->verifyLocationRequest->languageCode = 'omnis';
    $request->verifyLocationRequest->mailerContact = 'voluptate';
    $request->verifyLocationRequest->method = VerifyLocationRequestMethodEnum::AUTO;
    $request->verifyLocationRequest->phoneNumber = 'perferendis';
    $request->verifyLocationRequest->token = new VerificationToken();
    $request->verifyLocationRequest->token->tokenString = 'doloremque';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->name = 'Heidi Carter';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $response = $sdk->locations->mybusinessverificationsLocationsVerify($request);

    if ($response->verifyLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
