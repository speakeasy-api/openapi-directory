# signingBasketsServiceSBS

## Overview

Signing basket methods are used for authorising several transactions and resp. or consents with one SCA operation.


### Available Operations

* [createSigningBasket](#createsigningbasket) - Create a signing basket resource
* [deleteSigningBasket](#deletesigningbasket) - Delete the signing basket
* [getSigningBasket](#getsigningbasket) - Returns the content of an signing basket object
* [getSigningBasketAuthorisation](#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](#getsigningbasketstatus) - Read the status of the signing basket
* [startSigningBasketAuthorisation](#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateSigningBasketPsuData](#updatesigningbasketpsudata) - Update PSU data for signing basket

## createSigningBasket

Create a signing basket resource for authorising several transactions with one SCA method. 
The resource identifications of these transactions are contained in the payload of this access method


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSigningBasketRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SigningBasket;
use \OpenAPI\OpenAPI\Models\Operations\CreateSigningBasketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSigningBasketRequest();
    $request->consentID = 'adipisci';
    $request->digest = 'eveniet';
    $request->psuAccept = 'occaecati';
    $request->psuAcceptCharset = 'consequuntur';
    $request->psuAcceptEncoding = 'fugit';
    $request->psuAcceptLanguage = 'id';
    $request->psuCorporateID = 'quis';
    $request->psuCorporateIDType = 'reprehenderit';
    $request->psuDeviceID = 'error';
    $request->psuGeoLocation = 'illo';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuId = 'quidem';
    $request->psuIDType = 'eveniet';
    $request->psuIPAddress = '63.224.10.111';
    $request->psuIPPort = 'ipsa';
    $request->psuUserAgent = 'totam';
    $request->signature = 'quae';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'http://unusual-comics.net';
    $request->tppNotificationContentPreferred = 'iure';
    $request->tppNotificationURI = 'necessitatibus';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://quiet-rabbit.name';
    $request->tppSignatureCertificate = 'rem';
    $request->xRequestID = 'aliquam';
    $request->signingBasket = new SigningBasket();
    $request->signingBasket->consentIds = [
        'repellat',
        'alias',
    ];
    $request->signingBasket->paymentIds = [
        '1234-wertiq-983',
        '1234-wertiq-983',
    ];

    $requestSecurity = new CreateSigningBasketSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->createSigningBasket($request, $requestSecurity);

    if ($response->signingBasketResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSigningBasket

Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
The undlerying transactions are not affected by this deletion.

Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigningBasketRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigningBasketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSigningBasketRequest();
    $request->digest = 'perspiciatis';
    $request->psuAccept = 'nihil';
    $request->psuAcceptCharset = 'mollitia';
    $request->psuAcceptEncoding = 'voluptas';
    $request->psuAcceptLanguage = 'alias';
    $request->psuDeviceID = 'maiores';
    $request->psuGeoLocation = 'reiciendis';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '169.83.75.174';
    $request->psuIPPort = 'nesciunt';
    $request->psuUserAgent = 'quae';
    $request->signature = 'recusandae';
    $request->tppSignatureCertificate = 'omnis';
    $request->xRequestID = 'quaerat';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new DeleteSigningBasketSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->deleteSigningBasket($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigningBasket

Returns the content of a signing basket object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigningBasketRequest();
    $request->digest = 'molestiae';
    $request->psuAccept = 'ex';
    $request->psuAcceptCharset = 'ut';
    $request->psuAcceptEncoding = 'culpa';
    $request->psuAcceptLanguage = 'adipisci';
    $request->psuDeviceID = 'debitis';
    $request->psuGeoLocation = 'laudantium';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '94.237.116.151';
    $request->psuIPPort = 'quis';
    $request->psuUserAgent = 'eum';
    $request->signature = 'reiciendis';
    $request->tppSignatureCertificate = 'provident';
    $request->xRequestID = 'aspernatur';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->getSigningBasket($request, $requestSecurity);

    if ($response->signingBasketResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigningBasketAuthorisation

Read a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigningBasketAuthorisationRequest();
    $request->digest = 'ullam';
    $request->psuAccept = 'quasi';
    $request->psuAcceptCharset = 'animi';
    $request->psuAcceptEncoding = 'nostrum';
    $request->psuAcceptLanguage = 'mollitia';
    $request->psuDeviceID = 'provident';
    $request->psuGeoLocation = 'possimus';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '103.101.9.255';
    $request->psuIPPort = 'doloribus';
    $request->psuUserAgent = 'ullam';
    $request->signature = 'in';
    $request->tppSignatureCertificate = 'nam';
    $request->xRequestID = 'earum';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->getSigningBasketAuthorisation($request, $requestSecurity);

    if ($response->authorisations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigningBasketScaStatus

This method returns the SCA status of a signing basket's authorisation sub-resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketScaStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketScaStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigningBasketScaStatusRequest();
    $request->digest = 'officia';
    $request->psuAccept = 'laborum';
    $request->psuAcceptCharset = 'placeat';
    $request->psuAcceptEncoding = 'modi';
    $request->psuAcceptLanguage = 'voluptatibus';
    $request->psuDeviceID = 'molestias';
    $request->psuGeoLocation = 'officiis';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuIPAddress = '195.29.178.69';
    $request->psuIPPort = 'quis';
    $request->psuUserAgent = 'inventore';
    $request->signature = 'fugit';
    $request->tppSignatureCertificate = 'cumque';
    $request->xRequestID = 'quae';
    $request->authorisationId = '123auth456';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->getSigningBasketScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigningBasketStatus

Returns the status of a signing basket object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningBasketStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigningBasketStatusRequest();
    $request->digest = 'perferendis';
    $request->psuAccept = 'velit';
    $request->psuAcceptCharset = 'aspernatur';
    $request->psuAcceptEncoding = 'eum';
    $request->psuAcceptLanguage = 'eius';
    $request->psuCorporateID = 'rem';
    $request->psuCorporateIDType = 'at';
    $request->psuDeviceID = 'impedit';
    $request->psuGeoLocation = 'eos';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'eum';
    $request->psuIDType = 'dicta';
    $request->psuIPAddress = '83.27.149.150';
    $request->psuIPPort = 'earum';
    $request->psuUserAgent = 'soluta';
    $request->signature = 'hic';
    $request->tppSignatureCertificate = 'illum';
    $request->xRequestID = 'eaque';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->getSigningBasketStatus($request, $requestSecurity);

    if ($response->signingBasketStatusResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSigningBasketAuthorisation

Create an authorisation sub-resource and start the authorisation process of a signing basket.
The message might in addition transmit authentication and authorisation related data.

This method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the signing-baskets.

The ASPSP might make the usage of this access method unnecessary in case
of only one SCA process needed, since the related authorisation resource
might be automatically created by the ASPSP after the submission of the
payment data with the first POST signing basket call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication', 
    * 'startAuthorisationWithPsuAuthentication' 
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding 
    payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
    by using the extended forms as indicated above.
  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
    executing the cancellation.
  * The signing basket needs to be authorised yet.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartSigningBasketAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartSigningBasketAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSigningBasketAuthorisationRequest();
    $request->digest = 'earum';
    $request->psuAccept = 'perspiciatis';
    $request->psuAcceptCharset = 'maiores';
    $request->psuAcceptEncoding = 'debitis';
    $request->psuAcceptLanguage = 'aliquid';
    $request->psuCorporateID = 'porro';
    $request->psuCorporateIDType = 'suscipit';
    $request->psuDeviceID = 'dolorem';
    $request->psuGeoLocation = 'fugit';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'fuga';
    $request->psuIDType = 'ratione';
    $request->psuIPAddress = '168.230.220.2';
    $request->psuIPPort = 'quasi';
    $request->psuUserAgent = 'et';
    $request->requestBody = new UpdatePsuAuthentication();
    $request->requestBody->psuData = new PsuData();
    $request->requestBody->psuData->additionalEncryptedPassword = 'natus';
    $request->requestBody->psuData->additionalPassword = 'occaecati';
    $request->requestBody->psuData->encryptedPassword = 'suscipit';
    $request->requestBody->psuData->password = 'adipisci';
    $request->signature = 'quasi';
    $request->tppNokRedirectURI = 'http://worse-strength.org';
    $request->tppNotificationContentPreferred = 'ipsa';
    $request->tppNotificationURI = 'tempora';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://kooky-burial.info';
    $request->tppSignatureCertificate = 'esse';
    $request->xRequestID = 'praesentium';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new StartSigningBasketAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->startSigningBasketAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSigningBasketPsuData

This method update PSU data on the signing basket resource if needed. 
It may authorise a igning basket within the embedded SCA approach where needed.

Independently from the SCA Approach it supports e.g. the selection of 
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a consent request if needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific Update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization Method 
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.
  * Transaction Authorisation
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSigningBasketPsuDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSigningBasketPsuDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSigningBasketPsuDataRequest();
    $request->digest = 'maiores';
    $request->psuAccept = 'reiciendis';
    $request->psuAcceptCharset = 'vel';
    $request->psuAcceptEncoding = 'architecto';
    $request->psuAcceptLanguage = 'fugiat';
    $request->psuCorporateID = 'doloremque';
    $request->psuCorporateIDType = 'dicta';
    $request->psuDeviceID = 'odio';
    $request->psuGeoLocation = 'tempora';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'ex';
    $request->psuIDType = 'consectetur';
    $request->psuIPAddress = '102.15.171.31';
    $request->psuIPPort = 'nostrum';
    $request->psuUserAgent = 'fugiat';
    $request->requestBody = new TransactionAuthorisation();
    $request->requestBody->scaAuthenticationData = 'aliquid';
    $request->signature = 'officia';
    $request->tppSignatureCertificate = 'suscipit';
    $request->xRequestID = 'aliquid';
    $request->authorisationId = '123auth456';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new UpdateSigningBasketPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->signingBasketsServiceSBS->updateSigningBasketPsuData($request, $requestSecurity);

    if ($response->updateSigningBasketPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
