# paymentInitiationServicePIS

## Overview

The component for Payment Initiation Service (PIS) offers the following services:
  * Initiation and update of a payment request
  * Status information of a payment


### Available Operations

* [cancelPayment](#cancelpayment) - Payment cancellation request
* [getPaymentCancellationScaStatus](#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [getPaymentInformation](#getpaymentinformation) - Get payment information
* [getPaymentInitiationAuthorisation](#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [getPaymentInitiationCancellationAuthorisationInformation](#getpaymentinitiationcancellationauthorisationinformation) - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* [getPaymentInitiationScaStatus](#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [getPaymentInitiationStatus](#getpaymentinitiationstatus) - Payment initiation status request
* [initiatePaymentJson](#initiatepaymentjson) - Payment initiation request
* [initiatePaymentMultipart](#initiatepaymentmultipart) - Payment initiation request
* [initiatePaymentRaw](#initiatepaymentraw) - Payment initiation request
* [startPaymentAuthorisation](#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [startPaymentInitiationCancellationAuthorisation](#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [updatePaymentCancellationPsuData](#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [updatePaymentPsuData](#updatepaymentpsudata) - Update PSU data for payment initiation

## cancelPayment

This method initiates the cancellation of a payment. 
Depending on the payment-service, the payment-product and the ASPSP's implementation, 
this TPP call might be sufficient to cancel a payment. 
If an authorisation of the payment cancellation is mandated by the ASPSP, 
a corresponding hyperlink will be contained in the response message.

Cancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day). 

The response to this DELETE command will tell the TPP whether the
  * access method was rejected,
  * access method was successful, or
  * access method is generally applicable, but further authorisation processes are needed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelPaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CancelPaymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelPaymentRequest();
    $request->digest = 'et';
    $request->psuAccept = 'esse';
    $request->psuAcceptCharset = 'eveniet';
    $request->psuAcceptEncoding = 'accusamus';
    $request->psuAcceptLanguage = 'veritatis';
    $request->psuDeviceID = 'esse';
    $request->psuGeoLocation = 'quod';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '224.102.23.231';
    $request->psuIPPort = 'vel';
    $request->psuUserAgent = 'harum';
    $request->signature = 'molestiae';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'https://obedient-exterior.net';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://all-partridge.net';
    $request->tppSignatureCertificate = 'adipisci';
    $request->xRequestID = 'cumque';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new CancelPaymentSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->cancelPayment($request, $requestSecurity);

    if ($response->paymentInitiationCancelResponse202 !== null) {
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
    $request->digest = 'minus';
    $request->psuAccept = 'quaerat';
    $request->psuAcceptCharset = 'sapiente';
    $request->psuAcceptEncoding = 'consectetur';
    $request->psuAcceptLanguage = 'esse';
    $request->psuDeviceID = 'blanditiis';
    $request->psuGeoLocation = 'provident';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuIPAddress = '219.142.117.24';
    $request->psuIPPort = 'a';
    $request->psuUserAgent = 'error';
    $request->signature = 'sint';
    $request->tppSignatureCertificate = 'pariatur';
    $request->xRequestID = 'possimus';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentCancellationScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentCancellationScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInformation

Returns the content of a payment object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInformationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInformationRequest();
    $request->digest = 'asperiores';
    $request->psuAccept = 'facere';
    $request->psuAcceptCharset = 'veritatis';
    $request->psuAcceptEncoding = 'consequuntur';
    $request->psuAcceptLanguage = 'quasi';
    $request->psuDeviceID = 'similique';
    $request->psuGeoLocation = 'culpa';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuIPAddress = '243.16.239.108';
    $request->psuIPPort = 'in';
    $request->psuUserAgent = 'eius';
    $request->signature = 'libero';
    $request->tppSignatureCertificate = 'illum';
    $request->xRequestID = 'soluta';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInformationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentInformation($request, $requestSecurity);

    if ($response->getPaymentInformation200ApplicationJSONOneOf !== null) {
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
    $request->digest = 'sapiente';
    $request->psuAccept = 'dicta';
    $request->psuAcceptCharset = 'ullam';
    $request->psuAcceptEncoding = 'reprehenderit';
    $request->psuAcceptLanguage = 'ullam';
    $request->psuDeviceID = 'nisi';
    $request->psuGeoLocation = 'aut';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '47.216.102.137';
    $request->psuIPPort = 'itaque';
    $request->psuUserAgent = 'dolorum';
    $request->signature = 'architecto';
    $request->tppSignatureCertificate = 'omnis';
    $request->xRequestID = 'tenetur';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentInitiationAuthorisation($request, $requestSecurity);

    if ($response->authorisations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInitiationCancellationAuthorisationInformation

Retrieve a list of all created cancellation authorisation sub-resources.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationCancellationAuthorisationInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationCancellationAuthorisationInformationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInitiationCancellationAuthorisationInformationRequest();
    $request->digest = 'et';
    $request->psuAccept = 'voluptate';
    $request->psuAcceptCharset = 'ipsa';
    $request->psuAcceptEncoding = 'minima';
    $request->psuAcceptLanguage = 'veritatis';
    $request->psuDeviceID = 'consectetur';
    $request->psuGeoLocation = 'adipisci';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '214.8.133.3';
    $request->psuIPPort = 'laudantium';
    $request->psuUserAgent = 'eum';
    $request->signature = 'mollitia';
    $request->tppSignatureCertificate = 'ab';
    $request->xRequestID = 'corrupti';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_QR;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationCancellationAuthorisationInformationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentInitiationCancellationAuthorisationInformation($request, $requestSecurity);

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
    $request->digest = 'dolor';
    $request->psuAccept = 'occaecati';
    $request->psuAcceptCharset = 'numquam';
    $request->psuAcceptEncoding = 'impedit';
    $request->psuAcceptLanguage = 'explicabo';
    $request->psuDeviceID = 'voluptas';
    $request->psuGeoLocation = 'aut';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '29.251.158.62';
    $request->psuIPPort = 'voluptatibus';
    $request->psuUserAgent = 'voluptas';
    $request->signature = 'asperiores';
    $request->tppSignatureCertificate = 'aperiam';
    $request->xRequestID = 'ea';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_QR;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentInitiationScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInitiationStatus

Check the transaction status of a payment initiation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInitiationStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInitiationStatusRequest();
    $request->digest = 'repellendus';
    $request->psuAccept = 'officia';
    $request->psuAcceptCharset = 'maxime';
    $request->psuAcceptEncoding = 'dignissimos';
    $request->psuAcceptLanguage = 'officia';
    $request->psuDeviceID = 'asperiores';
    $request->psuGeoLocation = 'nemo';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '80.200.205.73';
    $request->psuIPPort = 'ab';
    $request->psuUserAgent = 'adipisci';
    $request->signature = 'fuga';
    $request->tppSignatureCertificate = 'id';
    $request->xRequestID = 'suscipit';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_QR;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new GetPaymentInitiationStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->getPaymentInitiationStatus($request, $requestSecurity);

    if ($response->paymentInitiationStatusResponse200Json !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiatePaymentJson

This method is used to initiate a payment at the ASPSP.

## Variants of payment initiation requests

This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.

There are the following **payment products**:

  - Payment products with payment information in *JSON* format:
    - ***domestic-swiss-credit-transfers-isr***
    - ***domestic-swiss-credit-transfers***
    - ***domestic-swiss-credit-transfers-qr***
    - ***domestic-swiss-foreign-credit-transfers***
    - ***swiss-sepa-credit-transfers***
    - ***swiss-cross-border-credit-transfers***
  - Payment products with payment information in *SIX pain.001* XML format:
    - ***pain.001-sepa-credit-transfers***
    - ***pain.001-cross-border-credit-transfers***
    - ***pain.001-swiss-six-credit-transfers***

Furthermore the request body depends on the **payment-service**:
  * ***payments***: A single payment initiation request.
  * ***bulk-payments***: A collection of several payment initiation requests.
  
    In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.

    In case of a *JSON* there are several JSON payment blocks contained in a joining list.
  * ***periodic-payments***:
    Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.

This is the first step in the API to initiate the related recurring/periodic payment.

## Single and mulitilevel SCA Processes

The payment initiation requests are independent from the need of one or multilevel 
SCA processing, i.e. independent from the number of authorisations needed for the execution of payments. 

But the response messages are specific to either one SCA processing or multilevel SCA processing. 

For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation, 
i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the 
response message of a Payment Initation Request for a payment, where multiple authorisations are needed. 
Also if any data is needed for the next action, like selecting an SCA method is not supported in the response, 
since all starts of the multiple authorisations are fully equal. 
In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiatePaymentJsonRequest();
    $request->consentID = 'est';
    $request->digest = 'recusandae';
    $request->psuAccept = 'totam';
    $request->psuAcceptCharset = 'fugiat';
    $request->psuAcceptEncoding = 'vel';
    $request->psuAcceptLanguage = 'ducimus';
    $request->psuCorporateID = 'quos';
    $request->psuCorporateIDType = 'vel';
    $request->psuDeviceID = 'labore';
    $request->psuGeoLocation = 'possimus';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'cum';
    $request->psuIDType = 'commodi';
    $request->psuIPAddress = '114.92.248.212';
    $request->psuIPPort = 'nemo';
    $request->psuUserAgent = 'recusandae';
    $request->requestBody = new PeriodicPaymentInitiationJson();
    $request->requestBody->chargeBearer = ChargeBearerEnum::DEBT;
    $request->requestBody->creditorAccount = new AccountReference16CH();
    $request->requestBody->creditorAccount->cashAccountType = 'cum';
    $request->requestBody->creditorAccount->currency = 'EUR';
    $request->requestBody->creditorAccount->iban = 'FR7612345987650123456789014';
    $request->requestBody->creditorAccount->otherAccountIdentification = '90-100100-0';
    $request->requestBody->creditorAddress = new Address();
    $request->requestBody->creditorAddress->buildingNumber = 'consectetur';
    $request->requestBody->creditorAddress->country = 'SE';
    $request->requestBody->creditorAddress->postCode = '39829';
    $request->requestBody->creditorAddress->streetName = 'suscipit';
    $request->requestBody->creditorAddress->townName = 'reiciendis';
    $request->requestBody->creditorAgent = new CreditorAgent7CH();
    $request->requestBody->creditorAgent->address = new PostalAddress6CH();
    $request->requestBody->creditorAgent->address->addressLine1 = 'quidem';
    $request->requestBody->creditorAgent->address->addressLine2 = 'saepe';
    $request->requestBody->creditorAgent->address->buildingNumber = 'necessitatibus';
    $request->requestBody->creditorAgent->address->country = 'SE';
    $request->requestBody->creditorAgent->address->postCode = '19222';
    $request->requestBody->creditorAgent->address->streetName = 'beatae';
    $request->requestBody->creditorAgent->address->townName = 'dignissimos';
    $request->requestBody->creditorAgent->bic = 'AAAADEBBXXX';
    $request->requestBody->creditorAgent->iid = new InstitutionalIdentification2();
    $request->requestBody->creditorAgent->iid->clearingSystemIdCode = 'a';
    $request->requestBody->creditorAgent->iid->clearingSystemMemberId = 'debitis';
    $request->requestBody->creditorAgent->name = 'Stacy Pollich DVM';
    $request->requestBody->creditorAgentName = 'Creditor Id 1234';
    $request->requestBody->creditorId = 'Creditor Id 5678';
    $request->requestBody->creditorName = 'Creditor Name';
    $request->requestBody->creditorNameAndAddress = 'Max Masters, Main Street 1, 12345 City, Example Country';
    $request->requestBody->dayOfExecution = DayOfExecutionEnum::TWENTY_THREE;
    $request->requestBody->debtorAccount = new AccountReference16CH();
    $request->requestBody->debtorAccount->cashAccountType = 'vitae';
    $request->requestBody->debtorAccount->currency = 'EUR';
    $request->requestBody->debtorAccount->iban = 'FR7612345987650123456789014';
    $request->requestBody->debtorAccount->otherAccountIdentification = '90-100100-0';
    $request->requestBody->debtorAgent = new DebtorAgent7CH();
    $request->requestBody->debtorAgent->bic = 'AAAADEBBXXX';
    $request->requestBody->debtorAgent->iid = new InstitutionalIdentification2();
    $request->requestBody->debtorAgent->iid->clearingSystemIdCode = 'accusamus';
    $request->requestBody->debtorAgent->iid->clearingSystemMemberId = 'similique';
    $request->requestBody->debtorId = 'Debtor Id 1234';
    $request->requestBody->debtorName = 'Debtor Name';
    $request->requestBody->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-13');
    $request->requestBody->endToEndIdentification = 'voluptas';
    $request->requestBody->equivalentAmount = new Amount();
    $request->requestBody->equivalentAmount->amount = '5877.78';
    $request->requestBody->equivalentAmount->currency = 'EUR';
    $request->requestBody->exchangeRateInformation = new ExchangeRateInformation1();
    $request->requestBody->exchangeRateInformation->contractIdentification = 'voluptas';
    $request->requestBody->exchangeRateInformation->exchangeRate = 'voluptas';
    $request->requestBody->exchangeRateInformation->rateType = ExchangeRateInformation1RateTypeEnum::SPOT;
    $request->requestBody->executionRule = ExecutionRuleEnum::PRECEDING;
    $request->requestBody->frequency = FrequencyCodeEnum::SEMI_ANNUAL;
    $request->requestBody->instructedAmount = new Amount();
    $request->requestBody->instructedAmount->amount = '5877.78';
    $request->requestBody->instructedAmount->currency = 'EUR';
    $request->requestBody->intermediaryAgent = 'AAAADEBBXXX';
    $request->requestBody->purposeCode = PurposeCodeEnum::SALA;
    $request->requestBody->remittanceInformationStructured = new RemittanceInformationStructured();
    $request->requestBody->remittanceInformationStructured->scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum::SCOR;
    $request->requestBody->remittanceInformationStructured->additionalRemittanceInformation = 'minus';
    $request->requestBody->remittanceInformationStructured->reference = '15 00011 23456 78901 23456 78901';
    $request->requestBody->remittanceInformationStructured->referenceIssuer = 'dolores';
    $request->requestBody->remittanceInformationStructured->referenceType = 'blanditiis';
    $request->requestBody->remittanceInformationUnstructured = 'Ref Number Merchant';
    $request->requestBody->serviceLevel = ExternalServiceLevel1CodeEnum::PRPT;
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-11');
    $request->requestBody->transactionCurrency = 'EUR';
    $request->requestBody->ultimateCreditor = 'Ultimate Creditor';
    $request->requestBody->ultimateDebtor = 'Ultimate Debtor';
    $request->signature = 'officiis';
    $request->tppBrandLoggingInformation = 'temporibus';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'http://enraged-repayment.name';
    $request->tppNotificationContentPreferred = 'quas';
    $request->tppNotificationURI = 'hic';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://polite-maybe.org';
    $request->tppRejectionNoFundsPreferred = false;
    $request->tppSignatureCertificate = 'totam';
    $request->xRequestID = 'hic';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;

    $requestSecurity = new InitiatePaymentJsonSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->initiatePaymentJson($request, $requestSecurity);

    if ($response->paymentInitationRequestResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiatePaymentMultipart

This method is used to initiate a payment at the ASPSP.

## Variants of payment initiation requests

This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.

There are the following **payment products**:

  - Payment products with payment information in *JSON* format:
    - ***domestic-swiss-credit-transfers-isr***
    - ***domestic-swiss-credit-transfers***
    - ***domestic-swiss-credit-transfers-qr***
    - ***domestic-swiss-foreign-credit-transfers***
    - ***swiss-sepa-credit-transfers***
    - ***swiss-cross-border-credit-transfers***
  - Payment products with payment information in *SIX pain.001* XML format:
    - ***pain.001-sepa-credit-transfers***
    - ***pain.001-cross-border-credit-transfers***
    - ***pain.001-swiss-six-credit-transfers***

Furthermore the request body depends on the **payment-service**:
  * ***payments***: A single payment initiation request.
  * ***bulk-payments***: A collection of several payment initiation requests.
  
    In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.

    In case of a *JSON* there are several JSON payment blocks contained in a joining list.
  * ***periodic-payments***:
    Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.

This is the first step in the API to initiate the related recurring/periodic payment.

## Single and mulitilevel SCA Processes

The payment initiation requests are independent from the need of one or multilevel 
SCA processing, i.e. independent from the number of authorisations needed for the execution of payments. 

But the response messages are specific to either one SCA processing or multilevel SCA processing. 

For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation, 
i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the 
response message of a Payment Initation Request for a payment, where multiple authorisations are needed. 
Also if any data is needed for the next action, like selecting an SCA method is not supported in the response, 
since all starts of the multiple authorisations are fully equal. 
In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentInitiationMultipartBody;
use \OpenAPI\OpenAPI\Models\Shared\PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;
use \OpenAPI\OpenAPI\Models\Shared\DayOfExecutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionRuleEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiatePaymentMultipartRequest();
    $request->consentID = 'sit';
    $request->digest = 'rerum';
    $request->psuAccept = 'sed';
    $request->psuAcceptCharset = 'reiciendis';
    $request->psuAcceptEncoding = 'explicabo';
    $request->psuAcceptLanguage = 'asperiores';
    $request->psuCorporateID = 'facilis';
    $request->psuCorporateIDType = 'voluptate';
    $request->psuDeviceID = 'expedita';
    $request->psuGeoLocation = 'ab';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuId = 'dolore';
    $request->psuIDType = 'laborum';
    $request->psuIPAddress = '39.114.106.178';
    $request->psuIPPort = 'explicabo';
    $request->psuUserAgent = 'voluptas';
    $request->signature = 'unde';
    $request->tppBrandLoggingInformation = 'architecto';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'http://well-to-do-tension.com';
    $request->tppNotificationContentPreferred = 'reiciendis';
    $request->tppNotificationURI = 'perferendis';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://wooden-documentary.com';
    $request->tppRejectionNoFundsPreferred = false;
    $request->tppSignatureCertificate = 'provident';
    $request->xRequestID = 'eius';
    $request->paymentProduct = PaymentProductEnum::PAIN001_SWISS_SIX_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->periodicPaymentInitiationMultipartBody = new PeriodicPaymentInitiationMultipartBody();
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType = new PeriodicPaymentInitiationXmlPart2StandingorderTypeJson();
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType->dayOfExecution = DayOfExecutionEnum::THIRTEEN;
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType->endDate = DateTime::createFromFormat('Y-m-d', '2021-11-23');
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType->executionRule = ExecutionRuleEnum::PRECEDING;
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType->frequency = FrequencyCodeEnum::EVERY_TWO_WEEKS;
    $request->periodicPaymentInitiationMultipartBody->jsonStandingorderType->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-18');
    $request->periodicPaymentInitiationMultipartBody->xmlSct = 'ex';

    $requestSecurity = new InitiatePaymentMultipartSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->initiatePaymentMultipart($request, $requestSecurity);

    if ($response->paymentInitationRequestResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiatePaymentRaw

This method is used to initiate a payment at the ASPSP.

## Variants of payment initiation requests

This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.

There are the following **payment products**:

  - Payment products with payment information in *JSON* format:
    - ***domestic-swiss-credit-transfers-isr***
    - ***domestic-swiss-credit-transfers***
    - ***domestic-swiss-credit-transfers-qr***
    - ***domestic-swiss-foreign-credit-transfers***
    - ***swiss-sepa-credit-transfers***
    - ***swiss-cross-border-credit-transfers***
  - Payment products with payment information in *SIX pain.001* XML format:
    - ***pain.001-sepa-credit-transfers***
    - ***pain.001-cross-border-credit-transfers***
    - ***pain.001-swiss-six-credit-transfers***

Furthermore the request body depends on the **payment-service**:
  * ***payments***: A single payment initiation request.
  * ***bulk-payments***: A collection of several payment initiation requests.
  
    In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.

    In case of a *JSON* there are several JSON payment blocks contained in a joining list.
  * ***periodic-payments***:
    Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.

This is the first step in the API to initiate the related recurring/periodic payment.

## Single and mulitilevel SCA Processes

The payment initiation requests are independent from the need of one or multilevel 
SCA processing, i.e. independent from the number of authorisations needed for the execution of payments. 

But the response messages are specific to either one SCA processing or multilevel SCA processing. 

For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation, 
i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the 
response message of a Payment Initation Request for a payment, where multiple authorisations are needed. 
Also if any data is needed for the next action, like selecting an SCA method is not supported in the response, 
since all starts of the multiple authorisations are fully equal. 
In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentProductEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\InitiatePaymentRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiatePaymentRawRequest();
    $request->consentID = 'sit';
    $request->digest = 'non';
    $request->psuAccept = 'officiis';
    $request->psuAcceptCharset = 'praesentium';
    $request->psuAcceptEncoding = 'facilis';
    $request->psuAcceptLanguage = 'quaerat';
    $request->psuCorporateID = 'incidunt';
    $request->psuCorporateIDType = 'ipsam';
    $request->psuDeviceID = 'debitis';
    $request->psuGeoLocation = 'rem';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuId = 'nobis';
    $request->psuIDType = 'error';
    $request->psuIPAddress = '85.84.236.247';
    $request->psuIPPort = 'nulla';
    $request->psuUserAgent = 'magni';
    $request->requestBody = 'aperiam';
    $request->signature = 'saepe';
    $request->tppBrandLoggingInformation = 'numquam';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'http://international-tax.com';
    $request->tppNotificationContentPreferred = 'laudantium';
    $request->tppNotificationURI = 'exercitationem';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://shady-glen.net';
    $request->tppRejectionNoFundsPreferred = false;
    $request->tppSignatureCertificate = 'voluptatum';
    $request->xRequestID = 'error';
    $request->paymentProduct = PaymentProductEnum::PAIN001_SWISS_SIX_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PERIODIC_PAYMENTS;

    $requestSecurity = new InitiatePaymentRawSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->initiatePaymentRaw($request, $requestSecurity);

    if ($response->paymentInitationRequestResponse201 !== null) {
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
    $request->digest = 'debitis';
    $request->psuAccept = 'neque';
    $request->psuAcceptCharset = 'dolorum';
    $request->psuAcceptEncoding = 'nostrum';
    $request->psuAcceptLanguage = 'officia';
    $request->psuCorporateID = 'dolorum';
    $request->psuCorporateIDType = 'corrupti';
    $request->psuDeviceID = 'accusamus';
    $request->psuGeoLocation = 'tempora';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'fugit';
    $request->psuIDType = 'ut';
    $request->psuIPAddress = '219.7.162.181';
    $request->psuIPPort = 'magnam';
    $request->psuUserAgent = 'consequatur';
    $request->requestBody = new UpdatePsuAuthentication();
    $request->requestBody->psuData = new PsuData();
    $request->requestBody->psuData->additionalEncryptedPassword = 'ipsam';
    $request->requestBody->psuData->additionalPassword = 'sit';
    $request->requestBody->psuData->encryptedPassword = 'voluptatum';
    $request->requestBody->psuData->password = 'quas';
    $request->signature = 'repudiandae';
    $request->tppNokRedirectURI = 'http://breakable-lawyer.info';
    $request->tppNotificationContentPreferred = 'sed';
    $request->tppNotificationURI = 'sit';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://gorgeous-tic.name';
    $request->tppSignatureCertificate = 'consequatur';
    $request->xRequestID = 'incidunt';
    $request->paymentProduct = PaymentProductEnum::PAIN001_SWISS_SIX_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new StartPaymentAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->startPaymentAuthorisation($request, $requestSecurity);

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
    $request->digest = 'harum';
    $request->psuAccept = 'dicta';
    $request->psuAcceptCharset = 'architecto';
    $request->psuAcceptEncoding = 'occaecati';
    $request->psuAcceptLanguage = 'labore';
    $request->psuCorporateID = 'quidem';
    $request->psuCorporateIDType = 'atque';
    $request->psuDeviceID = 'laborum';
    $request->psuGeoLocation = 'nam';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'laboriosam';
    $request->psuIDType = 'alias';
    $request->psuIPAddress = '58.165.116.153';
    $request->psuIPPort = 'reiciendis';
    $request->psuUserAgent = 'provident';
    $request->requestBody = new TransactionAuthorisation();
    $request->requestBody->scaAuthenticationData = 'delectus';
    $request->signature = 'voluptates';
    $request->tppNokRedirectURI = 'http://quarrelsome-professional.info';
    $request->tppNotificationContentPreferred = 'facere';
    $request->tppNotificationURI = 'fuga';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://pricey-fang.com';
    $request->tppSignatureCertificate = 'quisquam';
    $request->xRequestID = 'repudiandae';
    $request->paymentProduct = PaymentProductEnum::DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new StartPaymentInitiationCancellationAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->startPaymentInitiationCancellationAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
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
    $request->digest = 'reprehenderit';
    $request->psuAccept = 'asperiores';
    $request->psuAcceptCharset = 'totam';
    $request->psuAcceptEncoding = 'suscipit';
    $request->psuAcceptLanguage = 'quidem';
    $request->psuCorporateID = 'maxime';
    $request->psuCorporateIDType = 'et';
    $request->psuDeviceID = 'esse';
    $request->psuGeoLocation = 'amet';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'ea';
    $request->psuIDType = 'atque';
    $request->psuIPAddress = '159.227.227.225';
    $request->psuIPPort = 'natus';
    $request->psuUserAgent = 'minima';
    $request->requestBody = 'ex';
    $request->signature = 'maiores';
    $request->tppSignatureCertificate = 'corrupti';
    $request->xRequestID = 'at';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::SWISS_CROSS_BORDER_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new UpdatePaymentCancellationPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->updatePaymentCancellationPsuData($request, $requestSecurity);

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
    $request->digest = 'suscipit';
    $request->psuAccept = 'repudiandae';
    $request->psuAcceptCharset = 'atque';
    $request->psuAcceptEncoding = 'atque';
    $request->psuAcceptLanguage = 'sunt';
    $request->psuCorporateID = 'recusandae';
    $request->psuCorporateIDType = 'dolorum';
    $request->psuDeviceID = 'repellendus';
    $request->psuGeoLocation = 'labore';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'doloremque';
    $request->psuIDType = 'repudiandae';
    $request->psuIPAddress = '29.9.27.44';
    $request->psuIPPort = 'enim';
    $request->psuUserAgent = 'laboriosam';
    $request->requestBody = new UpdatePsuAuthentication();
    $request->requestBody->psuData = new PsuData();
    $request->requestBody->psuData->additionalEncryptedPassword = 'a';
    $request->requestBody->psuData->additionalPassword = 'molestias';
    $request->requestBody->psuData->encryptedPassword = 'magnam';
    $request->requestBody->psuData->password = 'saepe';
    $request->signature = 'consequuntur';
    $request->tppSignatureCertificate = 'occaecati';
    $request->xRequestID = 'officiis';
    $request->authorisationId = '123auth456';
    $request->paymentProduct = PaymentProductEnum::SWISS_CROSS_BORDER_CREDIT_TRANSFERS;
    $request->paymentService = PaymentServiceEnum::BULK_PAYMENTS;
    $request->paymentId = '1234-wertiq-983';

    $requestSecurity = new UpdatePaymentPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->paymentInitiationServicePIS->updatePaymentPsuData($request, $requestSecurity);

    if ($response->updatePaymentPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
