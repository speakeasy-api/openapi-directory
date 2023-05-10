# commonServices

## Overview

Processes on starting authorisations, update PSU identification or PSU authentication data and explicit 
authorisation of transactions by using SCA are very similar in PIS and AIS and signing baskets services. 
The API calls supporting these processes are described in the following independently from the service/endpoint. 
For reasons of clarity, the endpoints are defined always for the Payment Initiation Service, the payment cancellation, 
the Account Information Service (Consents), and Signing Baskets separately. 
These processes usually are used following a hyperlink of the ASPSP. 


### Available Operations

* [deleteSigningBasket](#deletesigningbasket) - Delete the signing basket
* [getConsentScaStatus](#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getPaymentCancellationScaStatus](#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInitiationAuthorisation](#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationScaStatus](#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getSigningBasketAuthorisation](#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [getSigningBasketScaStatus](#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [getSigningBasketStatus](#getsigningbasketstatus) - Read the status of the signing basket
* [startConsentAuthorisation](#startconsentauthorisation) - Start the authorisation process for a consent
* [startPaymentAuthorisation](#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [startSigningBasketAuthorisation](#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [updateConsentsPsuData](#updateconsentspsudata) - Update PSU Data for consents
* [updatePaymentCancellationPsuData](#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](#updatepaymentpsudata) - Update PSU data for payment initiation
* [updateSigningBasketPsuData](#updatesigningbasketpsudata) - Update PSU data for signing basket

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
    $request->digest = 'libero';
    $request->psuAccept = 'nobis';
    $request->psuAcceptCharset = 'dolores';
    $request->psuAcceptEncoding = 'quis';
    $request->psuAcceptLanguage = 'totam';
    $request->psuDeviceID = 'dignissimos';
    $request->psuGeoLocation = 'eaque';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuIPAddress = '51.45.4.43';
    $request->psuIPPort = 'minus';
    $request->psuUserAgent = 'quam';
    $request->signature = 'dolor';
    $request->tppSignatureCertificate = 'vero';
    $request->xRequestID = 'nostrum';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new DeleteSigningBasketSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->deleteSigningBasket($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentScaStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentScaStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsentScaStatusRequest();
    $request->digest = 'hic';
    $request->psuAccept = 'recusandae';
    $request->psuAcceptCharset = 'omnis';
    $request->psuAcceptEncoding = 'facilis';
    $request->psuAcceptLanguage = 'perspiciatis';
    $request->psuDeviceID = 'voluptatem';
    $request->psuGeoLocation = 'porro';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '128.159.12.147';
    $request->psuIPPort = 'rerum';
    $request->psuUserAgent = 'adipisci';
    $request->signature = 'asperiores';
    $request->tppSignatureCertificate = 'earum';
    $request->xRequestID = 'modi';
    $request->authorisationId = '123auth456';
    $request->consentId = 'iste';

    $requestSecurity = new GetConsentScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getConsentScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentCancellationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentCancellationScaStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentCancellationScaStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentCancellationScaStatusRequest();
    $request->digest = 'dolorum';
    $request->psuAccept = 'deleniti';
    $request->psuAcceptCharset = 'pariatur';
    $request->psuAcceptEncoding = 'provident';
    $request->psuAcceptLanguage = 'nobis';
    $request->psuDeviceID = 'libero';
    $request->psuGeoLocation = 'delectus';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuIPAddress = '141.101.54.53';
    $request->psuIPPort = 'dolor';
    $request->psuUserAgent = 'qui';
    $request->signature = 'ipsum';
    $request->tppSignatureCertificate = 'hic';
    $request->xRequestID = 'excepturi';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::PAIN001_SEPA_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentCancellationScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getPaymentCancellationScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInitiationAuthorisation

Read a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInitiationAuthorisationRequest();
    $request->digest = 'dignissimos';
    $request->psuAccept = 'reiciendis';
    $request->psuAcceptCharset = 'amet';
    $request->psuAcceptEncoding = 'dolorum';
    $request->psuAcceptLanguage = 'numquam';
    $request->psuDeviceID = 'veritatis';
    $request->psuGeoLocation = 'ipsa';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '111.124.79.225';
    $request->psuIPPort = 'quidem';
    $request->psuUserAgent = 'voluptatibus';
    $request->signature = 'voluptas';
    $request->tppSignatureCertificate = 'natus';
    $request->xRequestID = 'eos';
    $request->paymentProduct = PaymentProductEnum::SWISS_SEPA_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getPaymentInitiationAuthorisation($request, $requestSecurity);

    if ($response->authorisations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInitiationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationScaStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationScaStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInitiationScaStatusRequest();
    $request->digest = 'fugiat';
    $request->psuAccept = 'ab';
    $request->psuAcceptCharset = 'soluta';
    $request->psuAcceptEncoding = 'dolorum';
    $request->psuAcceptLanguage = 'iusto';
    $request->psuDeviceID = 'voluptate';
    $request->psuGeoLocation = 'dolorum';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '155.229.182.253';
    $request->psuIPPort = 'nihil';
    $request->psuUserAgent = 'ipsum';
    $request->signature = 'voluptate';
    $request->tppSignatureCertificate = 'id';
    $request->xRequestID = 'saepe';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_QR;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getPaymentInitiationScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
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
    $request->digest = 'perferendis';
    $request->psuAccept = 'amet';
    $request->psuAcceptCharset = 'optio';
    $request->psuAcceptEncoding = 'accusamus';
    $request->psuAcceptLanguage = 'ad';
    $request->psuDeviceID = 'saepe';
    $request->psuGeoLocation = 'suscipit';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '150.83.212.133';
    $request->psuIPPort = 'similique';
    $request->psuUserAgent = 'alias';
    $request->signature = 'at';
    $request->tppSignatureCertificate = 'quaerat';
    $request->xRequestID = 'tempora';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getSigningBasketAuthorisation($request, $requestSecurity);

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
    $request->digest = 'vel';
    $request->psuAccept = 'quod';
    $request->psuAcceptCharset = 'officiis';
    $request->psuAcceptEncoding = 'qui';
    $request->psuAcceptLanguage = 'dolorum';
    $request->psuDeviceID = 'a';
    $request->psuGeoLocation = 'esse';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '123.55.201.242';
    $request->psuIPPort = 'amet';
    $request->psuUserAgent = 'tempore';
    $request->signature = 'accusamus';
    $request->tppSignatureCertificate = 'numquam';
    $request->xRequestID = 'enim';
    $request->authorisationId = '123auth456';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getSigningBasketScaStatus($request, $requestSecurity);

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
    $request->digest = 'dolorem';
    $request->psuAccept = 'sapiente';
    $request->psuAcceptCharset = 'totam';
    $request->psuAcceptEncoding = 'nihil';
    $request->psuAcceptLanguage = 'sit';
    $request->psuCorporateID = 'expedita';
    $request->psuCorporateIDType = 'neque';
    $request->psuDeviceID = 'sed';
    $request->psuGeoLocation = 'vel';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'voluptas';
    $request->psuIDType = 'deserunt';
    $request->psuIPAddress = '118.55.71.47';
    $request->psuIPPort = 'cupiditate';
    $request->psuUserAgent = 'maxime';
    $request->signature = 'pariatur';
    $request->tppSignatureCertificate = 'soluta';
    $request->xRequestID = 'dicta';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new GetSigningBasketStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->getSigningBasketStatus($request, $requestSecurity);

    if ($response->signingBasketStatusResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConsentAuthorisation

Create an authorisation sub-resource and start the authorisation process of a consent.
The message might in addition transmit authentication and authorisation related data.

his method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the consent.

The ASPSP might make the usage of this access method unnecessary,
since the related authorisation resource will be automatically created by
the ASPSP after the submission of the consent data with the first POST consents call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication', 
    * 'startAuthorisationWithPsuAuthentication' 
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
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
use \OpenAPI\OpenAPI\Models\Operations\StartConsentAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartConsentAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConsentAuthorisationRequest();
    $request->digest = 'laborum';
    $request->psuAccept = 'totam';
    $request->psuAcceptCharset = 'incidunt';
    $request->psuAcceptEncoding = 'aspernatur';
    $request->psuAcceptLanguage = 'dolores';
    $request->psuCorporateID = 'distinctio';
    $request->psuCorporateIDType = 'facilis';
    $request->psuDeviceID = 'aliquid';
    $request->psuGeoLocation = 'quam';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'temporibus';
    $request->psuIDType = 'qui';
    $request->psuIPAddress = '52.37.42.124';
    $request->psuIPPort = 'sunt';
    $request->psuUserAgent = 'ullam';
    $request->requestBody = new SelectPsuAuthenticationMethod();
    $request->requestBody->authenticationMethodId = 'myAuthenticationID';
    $request->signature = 'hic';
    $request->tppNokRedirectURI = 'http://slushy-return.net';
    $request->tppNotificationContentPreferred = 'et';
    $request->tppNotificationURI = 'saepe';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://bony-revolution.name';
    $request->tppSignatureCertificate = 'tempore';
    $request->xRequestID = 'cupiditate';
    $request->consentId = 'aperiam';

    $requestSecurity = new StartConsentAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->startConsentAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPaymentAuthorisation

Create an authorisation sub-resource and start the authorisation process.
The message might in addition transmit authentication and authorisation related data.

This method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the transaction.

The ASPSP might make the usage of this access method unnecessary in case
of only one SCA process needed, since the related authorisation resource
might be automatically created by the ASPSP after the submission of the
payment data with the first POST payments/{payment-product} call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication'
    * 'startAuthorisationWithPsuAuthentication'
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding 
    Payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
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
use \OpenAPI\OpenAPI\Models\Operations\StartPaymentAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartPaymentAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPaymentAuthorisationRequest();
    $request->digest = 'delectus';
    $request->psuAccept = 'dolorem';
    $request->psuAcceptCharset = 'dolore';
    $request->psuAcceptEncoding = 'labore';
    $request->psuAcceptLanguage = 'adipisci';
    $request->psuCorporateID = 'dolorum';
    $request->psuCorporateIDType = 'architecto';
    $request->psuDeviceID = 'quae';
    $request->psuGeoLocation = 'aut';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'itaque';
    $request->psuIDType = 'consequatur';
    $request->psuIPAddress = '171.213.200.251';
    $request->psuIPPort = 'ut';
    $request->psuUserAgent = 'facilis';
    $request->requestBody = new SelectPsuAuthenticationMethod();
    $request->requestBody->authenticationMethodId = 'myAuthenticationID';
    $request->signature = 'qui';
    $request->tppNokRedirectURI = 'http://magnificent-kangaroo.name';
    $request->tppNotificationContentPreferred = 'voluptatibus';
    $request->tppNotificationURI = 'quisquam';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://overlooked-feature.biz';
    $request->tppSignatureCertificate = 'delectus';
    $request->xRequestID = 'voluptate';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_QR;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new StartPaymentAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->startPaymentAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPaymentInitiationCancellationAuthorisation

Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.
The message might in addition transmit authentication and authorisation related data.

This method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the cancellation-authorisation.

The ASPSP might make the usage of this access method unnecessary in case
of only one SCA process needed, since the related authorisation resource
might be automatically created by the ASPSP after the submission of the
payment data with the first POST payments/{payment-product} call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication'
    * 'startAuthorisationWithPsuAuthentication'
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
use \OpenAPI\OpenAPI\Models\Operations\StartPaymentInitiationCancellationAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartPaymentInitiationCancellationAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPaymentInitiationCancellationAuthorisationRequest();
    $request->digest = 'tenetur';
    $request->psuAccept = 'dignissimos';
    $request->psuAcceptCharset = 'hic';
    $request->psuAcceptEncoding = 'distinctio';
    $request->psuAcceptLanguage = 'quod';
    $request->psuCorporateID = 'odio';
    $request->psuCorporateIDType = 'similique';
    $request->psuDeviceID = 'facilis';
    $request->psuGeoLocation = 'vero';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'dolore';
    $request->psuIDType = 'quibusdam';
    $request->psuIPAddress = '217.49.158.197';
    $request->psuIPPort = 'aut';
    $request->psuUserAgent = 'voluptatibus';
    $request->requestBody = new UpdatePsuAuthentication();
    $request->requestBody->psuData = new PsuData();
    $request->requestBody->psuData->additionalEncryptedPassword = 'nulla';
    $request->requestBody->psuData->additionalPassword = 'fugit';
    $request->requestBody->psuData->encryptedPassword = 'porro';
    $request->requestBody->psuData->password = 'maiores';
    $request->signature = 'doloribus';
    $request->tppNokRedirectURI = 'http://silver-lanai.com';
    $request->tppNotificationContentPreferred = 'officia';
    $request->tppNotificationURI = 'tempora';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://illustrious-castle.info';
    $request->tppSignatureCertificate = 'possimus';
    $request->xRequestID = 'magnam';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new StartPaymentInitiationCancellationAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->startPaymentInitiationCancellationAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
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
    $request->digest = 'laudantium';
    $request->psuAccept = 'dicta';
    $request->psuAcceptCharset = 'dolor';
    $request->psuAcceptEncoding = 'maiores';
    $request->psuAcceptLanguage = 'quasi';
    $request->psuCorporateID = 'ex';
    $request->psuCorporateIDType = 'nulla';
    $request->psuDeviceID = 'excepturi';
    $request->psuGeoLocation = 'voluptatibus';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuId = 'sapiente';
    $request->psuIDType = 'quisquam';
    $request->psuIPAddress = '232.105.198.91';
    $request->psuIPPort = 'veniam';
    $request->psuUserAgent = 'aliquid';
    $request->requestBody = 'magnam';
    $request->signature = 'ea';
    $request->tppNokRedirectURI = 'https://eminent-treasury.com';
    $request->tppNotificationContentPreferred = 'minima';
    $request->tppNotificationURI = 'eaque';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://scornful-aftermath.com';
    $request->tppSignatureCertificate = 'deleniti';
    $request->xRequestID = 'impedit';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new StartSigningBasketAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->startSigningBasketAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConsentsPsuData

This method update PSU data on the consents  resource if needed.
It may authorise a consent within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a consent request if needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA Approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateConsentsPsuDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConsentsPsuDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConsentsPsuDataRequest();
    $request->digest = 'aliquam';
    $request->psuAccept = 'fugit';
    $request->psuAcceptCharset = 'accusamus';
    $request->psuAcceptEncoding = 'inventore';
    $request->psuAcceptLanguage = 'non';
    $request->psuCorporateID = 'et';
    $request->psuCorporateIDType = 'dolorum';
    $request->psuDeviceID = 'laborum';
    $request->psuGeoLocation = 'placeat';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuId = 'eum';
    $request->psuIDType = 'autem';
    $request->psuIPAddress = '192.142.212.220';
    $request->psuIPPort = 'voluptas';
    $request->psuUserAgent = 'libero';
    $request->requestBody = 'tempora';
    $request->signature = 'numquam';
    $request->tppSignatureCertificate = 'explicabo';
    $request->xRequestID = 'provident';
    $request->authorisationId = '123auth456';
    $request->consentId = 'ipsa';

    $requestSecurity = new UpdateConsentsPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->updateConsentsPsuData($request, $requestSecurity);

    if ($response->updateConsentsPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentCancellationPsuData

This method updates PSU data on the cancellation authorisation resource if needed. 
It may authorise a cancellation of the payment within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific Update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
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
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentCancellationPsuDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentCancellationPsuDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentCancellationPsuDataRequest();
    $request->digest = 'molestiae';
    $request->psuAccept = 'magnam';
    $request->psuAcceptCharset = 'odio';
    $request->psuAcceptEncoding = 'eius';
    $request->psuAcceptLanguage = 'esse';
    $request->psuCorporateID = 'esse';
    $request->psuCorporateIDType = 'rem';
    $request->psuDeviceID = 'fuga';
    $request->psuGeoLocation = 'reprehenderit';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'fugiat';
    $request->psuIDType = 'ut';
    $request->psuIPAddress = '110.97.211.46';
    $request->psuIPPort = 'praesentium';
    $request->psuUserAgent = 'quisquam';
    $request->requestBody = 'ipsa';
    $request->signature = 'id';
    $request->tppSignatureCertificate = 'quidem';
    $request->xRequestID = 'neque';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::PAIN001_CROSS_BORDER_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new UpdatePaymentCancellationPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->updatePaymentCancellationPsuData($request, $requestSecurity);

    if ($response->updatePaymentCancellationPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentPsuData

This methods updates PSU data on the authorisation resource if needed.
It may authorise a payment within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of payment initiation services needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific update PSU data request is only applicable for
  * adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU Data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA Approach might depend on the chosen SCA method. 
For that reason, the following possible Update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.
  * Transaction authorisation
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentPsuDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentPsuDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentPsuDataRequest();
    $request->digest = 'quo';
    $request->psuAccept = 'fuga';
    $request->psuAcceptCharset = 'eius';
    $request->psuAcceptEncoding = 'eos';
    $request->psuAcceptLanguage = 'voluptas';
    $request->psuCorporateID = 'ab';
    $request->psuCorporateIDType = 'cupiditate';
    $request->psuDeviceID = 'consequatur';
    $request->psuGeoLocation = 'tempora';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'ipsam';
    $request->psuIDType = 'aspernatur';
    $request->psuIPAddress = '50.199.117.236';
    $request->psuIPPort = 'aperiam';
    $request->psuUserAgent = 'distinctio';
    $request->requestBody = new TransactionAuthorisation();
    $request->requestBody->scaAuthenticationData = 'dignissimos';
    $request->signature = 'inventore';
    $request->tppSignatureCertificate = 'nihil';
    $request->xRequestID = 'totam';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::PAIN001_CROSS_BORDER_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new UpdatePaymentPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->updatePaymentPsuData($request, $requestSecurity);

    if ($response->updatePaymentPsuData200ApplicationJSONOneOf !== null) {
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
    $request->digest = 'odio';
    $request->psuAccept = 'occaecati';
    $request->psuAcceptCharset = 'commodi';
    $request->psuAcceptEncoding = 'sapiente';
    $request->psuAcceptLanguage = 'dolores';
    $request->psuCorporateID = 'deserunt';
    $request->psuCorporateIDType = 'molestiae';
    $request->psuDeviceID = 'accusantium';
    $request->psuGeoLocation = 'porro';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'quas';
    $request->psuIDType = 'praesentium';
    $request->psuIPAddress = '40.137.36.174';
    $request->psuIPPort = 'mollitia';
    $request->psuUserAgent = 'incidunt';
    $request->requestBody = new SelectPsuAuthenticationMethod();
    $request->requestBody->authenticationMethodId = 'myAuthenticationID';
    $request->signature = 'explicabo';
    $request->tppSignatureCertificate = 'minima';
    $request->xRequestID = 'nisi';
    $request->authorisationId = '123auth456';
    $request->basketId = '1234-basket-567';

    $requestSecurity = new UpdateSigningBasketPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->commonServices->updateSigningBasketPsuData($request, $requestSecurity);

    if ($response->updateSigningBasketPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
