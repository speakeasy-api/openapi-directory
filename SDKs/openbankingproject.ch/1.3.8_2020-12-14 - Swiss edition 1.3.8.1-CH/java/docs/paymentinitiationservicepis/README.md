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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelPaymentRequest;
import org.openapis.openapi.models.operations.CancelPaymentResponse;
import org.openapis.openapi.models.operations.CancelPaymentSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelPaymentRequest req = new CancelPaymentRequest("tempore", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_QR, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "consequuntur";
                psuAccept = "consequatur";
                psuAcceptCharset = "minus";
                psuAcceptEncoding = "quaerat";
                psuAcceptLanguage = "sapiente";
                psuDeviceID = "consectetur";
                psuGeoLocation = "esse";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "151.244.219.142";
                psuIPPort = "esse";
                psuUserAgent = "quasi";
                signature = "a";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://noteworthy-style.net";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://unwelcome-wrench.net";
                tppSignatureCertificate = "veritatis";
            }};            

            CancelPaymentResponse res = sdk.paymentInitiationServicePIS.cancelPayment(req, new CancelPaymentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.paymentInitiationCancelResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentCancellationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentCancellationScaStatusRequest;
import org.openapis.openapi.models.operations.GetPaymentCancellationScaStatusResponse;
import org.openapis.openapi.models.operations.GetPaymentCancellationScaStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentCancellationScaStatusRequest req = new GetPaymentCancellationScaStatusRequest("consequuntur", "123auth456", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "culpa";
                psuAccept = "aliquid";
                psuAcceptCharset = "tenetur";
                psuAcceptEncoding = "quae";
                psuAcceptLanguage = "earum";
                psuDeviceID = "vel";
                psuGeoLocation = "in";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "186.217.190.8";
                psuIPPort = "aliquam";
                psuUserAgent = "sapiente";
                signature = "dicta";
                tppSignatureCertificate = "ullam";
            }};            

            GetPaymentCancellationScaStatusResponse res = sdk.paymentInitiationServicePIS.getPaymentCancellationScaStatus(req, new GetPaymentCancellationScaStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scaStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInformation

Returns the content of a payment object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInformationRequest;
import org.openapis.openapi.models.operations.GetPaymentInformationResponse;
import org.openapis.openapi.models.operations.GetPaymentInformationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInformationRequest req = new GetPaymentInformationRequest("reprehenderit", PaymentProductEnum.DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "aut";
                psuAccept = "voluptatum";
                psuAcceptCharset = "qui";
                psuAcceptEncoding = "quibusdam";
                psuAcceptLanguage = "ex";
                psuDeviceID = "deleniti";
                psuGeoLocation = "itaque";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuIPAddress = "25.155.241.25";
                psuIPPort = "at";
                psuUserAgent = "et";
                signature = "voluptate";
                tppSignatureCertificate = "ipsa";
            }};            

            GetPaymentInformationResponse res = sdk.paymentInitiationServicePIS.getPaymentInformation(req, new GetPaymentInformationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getPaymentInformation200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInitiationAuthorisation

Read a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInitiationAuthorisationRequest;
import org.openapis.openapi.models.operations.GetPaymentInitiationAuthorisationResponse;
import org.openapis.openapi.models.operations.GetPaymentInitiationAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInitiationAuthorisationRequest req = new GetPaymentInitiationAuthorisationRequest("minima", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR, PaymentServiceEnum.PAYMENTS, "1234-wertiq-983") {{
                digest = "adipisci";
                psuAccept = "iste";
                psuAcceptCharset = "temporibus";
                psuAcceptEncoding = "accusantium";
                psuAcceptLanguage = "rem";
                psuDeviceID = "aut";
                psuGeoLocation = "laudantium";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "166.17.139.64";
                psuIPPort = "voluptatem";
                psuUserAgent = "dolor";
                signature = "occaecati";
                tppSignatureCertificate = "numquam";
            }};            

            GetPaymentInitiationAuthorisationResponse res = sdk.paymentInitiationServicePIS.getPaymentInitiationAuthorisation(req, new GetPaymentInitiationAuthorisationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.authorisations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInitiationCancellationAuthorisationInformation

Retrieve a list of all created cancellation authorisation sub-resources.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInitiationCancellationAuthorisationInformationRequest;
import org.openapis.openapi.models.operations.GetPaymentInitiationCancellationAuthorisationInformationResponse;
import org.openapis.openapi.models.operations.GetPaymentInitiationCancellationAuthorisationInformationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInitiationCancellationAuthorisationInformationRequest req = new GetPaymentInitiationCancellationAuthorisationInformationRequest("impedit", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "aut";
                psuAccept = "dignissimos";
                psuAcceptCharset = "dicta";
                psuAcceptEncoding = "maiores";
                psuAcceptLanguage = "natus";
                psuDeviceID = "velit";
                psuGeoLocation = "voluptatibus";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "253.11.104.79";
                psuIPPort = "consequuntur";
                psuUserAgent = "repellendus";
                signature = "officia";
                tppSignatureCertificate = "maxime";
            }};            

            GetPaymentInitiationCancellationAuthorisationInformationResponse res = sdk.paymentInitiationServicePIS.getPaymentInitiationCancellationAuthorisationInformation(req, new GetPaymentInitiationCancellationAuthorisationInformationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.authorisations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInitiationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInitiationScaStatusRequest;
import org.openapis.openapi.models.operations.GetPaymentInitiationScaStatusResponse;
import org.openapis.openapi.models.operations.GetPaymentInitiationScaStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInitiationScaStatusRequest req = new GetPaymentInitiationScaStatusRequest("dignissimos", "123auth456", PaymentProductEnum.SWISS_CROSS_BORDER_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "nemo";
                psuAccept = "quae";
                psuAcceptCharset = "quaerat";
                psuAcceptEncoding = "porro";
                psuAcceptLanguage = "quod";
                psuDeviceID = "labore";
                psuGeoLocation = "ab";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "174.169.97.62";
                psuIPPort = "culpa";
                psuUserAgent = "est";
                signature = "recusandae";
                tppSignatureCertificate = "totam";
            }};            

            GetPaymentInitiationScaStatusResponse res = sdk.paymentInitiationServicePIS.getPaymentInitiationScaStatus(req, new GetPaymentInitiationScaStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scaStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInitiationStatus

Check the transaction status of a payment initiation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInitiationStatusRequest;
import org.openapis.openapi.models.operations.GetPaymentInitiationStatusResponse;
import org.openapis.openapi.models.operations.GetPaymentInitiationStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInitiationStatusRequest req = new GetPaymentInitiationStatusRequest("fugiat", PaymentProductEnum.DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "quos";
                psuAccept = "vel";
                psuAcceptCharset = "labore";
                psuAcceptEncoding = "possimus";
                psuAcceptLanguage = "facilis";
                psuDeviceID = "cum";
                psuGeoLocation = "commodi";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "92.248.212.92";
                psuIPPort = "recusandae";
                psuUserAgent = "aliquid";
                signature = "aperiam";
                tppSignatureCertificate = "cum";
            }};            

            GetPaymentInitiationStatusResponse res = sdk.paymentInitiationServicePIS.getPaymentInitiationStatus(req, new GetPaymentInitiationStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.paymentInitiationStatusResponse200Json != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiatePaymentJsonRequest;
import org.openapis.openapi.models.operations.InitiatePaymentJsonResponse;
import org.openapis.openapi.models.operations.InitiatePaymentJsonSecurity;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.BulkPaymentInitiationJson;
import org.openapis.openapi.models.shared.ChargeBearerEnum;
import org.openapis.openapi.models.shared.CreditorAgent7CH;
import org.openapis.openapi.models.shared.DayOfExecutionEnum;
import org.openapis.openapi.models.shared.DebtorAgent7CH;
import org.openapis.openapi.models.shared.ExchangeRateInformation1;
import org.openapis.openapi.models.shared.ExchangeRateInformation1RateTypeEnum;
import org.openapis.openapi.models.shared.ExecutionRuleEnum;
import org.openapis.openapi.models.shared.ExternalServiceLevel1CodeEnum;
import org.openapis.openapi.models.shared.FrequencyCodeEnum;
import org.openapis.openapi.models.shared.InstitutionalIdentification2;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentInitiationBulkElementJson;
import org.openapis.openapi.models.shared.PaymentInitiationJson;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentInitiationJson;
import org.openapis.openapi.models.shared.PostalAddress6CH;
import org.openapis.openapi.models.shared.PurposeCodeEnum;
import org.openapis.openapi.models.shared.RemittanceInformationStructured;
import org.openapis.openapi.models.shared.RemittanceInformationStructuredSCORorQRRorIPIEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiatePaymentJsonRequest req = new InitiatePaymentJsonRequest("59.114.89.239",                 new BulkPaymentInitiationJson(                new AccountReference16CH() {{
                                                cashAccountType = "delectus";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }};,                 new DebtorAgent7CH() {{
                                                bic = "AAAADEBBXXX";
                                                iid = new InstitutionalIdentification2("voluptates", "perferendis");;
                                            }};,                 new org.openapis.openapi.models.shared.PaymentInitiationBulkElementJson[]{{
                                                add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                                    cashAccountType = "repellendus";
                                                                    currency = "EUR";
                                                                    iban = "FR7612345987650123456789014";
                                                                    otherAccountIdentification = "90-100100-0";
                                                                }};, "Creditor Name", "Debtor Name", "labore") {{
                                                    chargeBearer = ChargeBearerEnum.SHAR;
                                                    creditorAccount = new AccountReference16CH() {{
                                                        cashAccountType = "reprehenderit";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};
                                                    creditorAddress = new Address("SE") {{
                                                        buildingNumber = "facere";
                                                        country = "SE";
                                                        postCode = "56307-9054";
                                                        streetName = "asperiores";
                                                        townName = "totam";
                                                    }};
                                                    creditorAgent = new CreditorAgent7CH() {{
                                                        address = new PostalAddress6CH() {{
                                                            addressLine1 = "suscipit";
                                                            addressLine2 = "quidem";
                                                            buildingNumber = "maxime";
                                                            country = "SE";
                                                            postCode = "42845";
                                                            streetName = "error";
                                                            townName = "officiis";
                                                        }};
                                                        bic = "AAAADEBBXXX";
                                                        iid = new InstitutionalIdentification2("natus", "minima") {{
                                                            clearingSystemIdCode = "officiis";
                                                            clearingSystemMemberId = "accusamus";
                                                        }};
                                                        name = "Tara Wuckert";
                                                    }};
                                                    creditorAgentName = "Creditor Id 1234";
                                                    creditorId = "Creditor Id 5678";
                                                    creditorName = "Creditor Name";
                                                    creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                                    debtorId = "Debtor Id 1234";
                                                    debtorName = "Debtor Name";
                                                    endToEndIdentification = "error";
                                                    equivalentAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    exchangeRateInformation = new ExchangeRateInformation1() {{
                                                        contractIdentification = "blanditiis";
                                                        exchangeRate = "suscipit";
                                                        rateType = ExchangeRateInformation1RateTypeEnum.AGRD;
                                                    }};
                                                    instructedAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    intermediaryAgent = "AAAADEBBXXX";
                                                    purposeCode = PurposeCodeEnum.PENS;
                                                    remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                                        scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                                        additionalRemittanceInformation = "atque";
                                                        reference = "15 00011 23456 78901 23456 78901";
                                                        referenceIssuer = "sunt";
                                                        referenceType = "recusandae";
                                                    }};
                                                    remittanceInformationUnstructured = "Ref Number Merchant";
                                                    serviceLevel = ExternalServiceLevel1CodeEnum.SDVA;
                                                    transactionCurrency = "EUR";
                                                    ultimateCreditor = "Ultimate Creditor";
                                                    ultimateDebtor = "Ultimate Debtor";
                                                }}),
                                                add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                                    cashAccountType = "eveniet";
                                                                    currency = "EUR";
                                                                    iban = "FR7612345987650123456789014";
                                                                    otherAccountIdentification = "90-100100-0";
                                                                }};, "Creditor Name", "Debtor Name", "qui") {{
                                                    chargeBearer = ChargeBearerEnum.SLEV;
                                                    creditorAccount = new AccountReference16CH() {{
                                                        cashAccountType = "doloremque";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};
                                                    creditorAddress = new Address("SE") {{
                                                        buildingNumber = "repudiandae";
                                                        country = "SE";
                                                        postCode = "01133";
                                                        streetName = "velit";
                                                        townName = "a";
                                                    }};
                                                    creditorAgent = new CreditorAgent7CH() {{
                                                        address = new PostalAddress6CH() {{
                                                            addressLine1 = "molestias";
                                                            addressLine2 = "magnam";
                                                            buildingNumber = "saepe";
                                                            country = "SE";
                                                            postCode = "58542";
                                                            streetName = "eveniet";
                                                            townName = "occaecati";
                                                        }};
                                                        bic = "AAAADEBBXXX";
                                                        iid = new InstitutionalIdentification2("id", "quis") {{
                                                            clearingSystemIdCode = "consequuntur";
                                                            clearingSystemMemberId = "fugit";
                                                        }};
                                                        name = "Isabel Blick";
                                                    }};
                                                    creditorAgentName = "Creditor Id 1234";
                                                    creditorId = "Creditor Id 5678";
                                                    creditorName = "Creditor Name";
                                                    creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                                    debtorId = "Debtor Id 1234";
                                                    debtorName = "Debtor Name";
                                                    endToEndIdentification = "eveniet";
                                                    equivalentAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    exchangeRateInformation = new ExchangeRateInformation1() {{
                                                        contractIdentification = "non";
                                                        exchangeRate = "vero";
                                                        rateType = ExchangeRateInformation1RateTypeEnum.SPOT;
                                                    }};
                                                    instructedAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    intermediaryAgent = "AAAADEBBXXX";
                                                    purposeCode = PurposeCodeEnum.SALA;
                                                    remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                                        scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                                        additionalRemittanceInformation = "ipsa";
                                                        reference = "15 00011 23456 78901 23456 78901";
                                                        referenceIssuer = "totam";
                                                        referenceType = "quae";
                                                    }};
                                                    remittanceInformationUnstructured = "Ref Number Merchant";
                                                    serviceLevel = ExternalServiceLevel1CodeEnum.PRPT;
                                                    transactionCurrency = "EUR";
                                                    ultimateCreditor = "Ultimate Creditor";
                                                    ultimateDebtor = "Ultimate Debtor";
                                                }}),
                                                add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                                    cashAccountType = "esse";
                                                                    currency = "EUR";
                                                                    iban = "FR7612345987650123456789014";
                                                                    otherAccountIdentification = "90-100100-0";
                                                                }};, "Creditor Name", "Debtor Name", "provident") {{
                                                    chargeBearer = ChargeBearerEnum.SHAR;
                                                    creditorAccount = new AccountReference16CH() {{
                                                        cashAccountType = "iure";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};
                                                    creditorAddress = new Address("SE") {{
                                                        buildingNumber = "necessitatibus";
                                                        country = "SE";
                                                        postCode = "67553";
                                                        streetName = "ad";
                                                        townName = "repellat";
                                                    }};
                                                    creditorAgent = new CreditorAgent7CH() {{
                                                        address = new PostalAddress6CH() {{
                                                            addressLine1 = "alias";
                                                            addressLine2 = "corporis";
                                                            buildingNumber = "perspiciatis";
                                                            country = "SE";
                                                            postCode = "63099";
                                                            streetName = "dolores";
                                                            townName = "id";
                                                        }};
                                                        bic = "AAAADEBBXXX";
                                                        iid = new InstitutionalIdentification2("dolorum", "nesciunt") {{
                                                            clearingSystemIdCode = "minima";
                                                            clearingSystemMemberId = "dolore";
                                                        }};
                                                        name = "Sophie Mohr";
                                                    }};
                                                    creditorAgentName = "Creditor Id 1234";
                                                    creditorId = "Creditor Id 5678";
                                                    creditorName = "Creditor Name";
                                                    creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                                    debtorId = "Debtor Id 1234";
                                                    debtorName = "Debtor Name";
                                                    endToEndIdentification = "ex";
                                                    equivalentAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    exchangeRateInformation = new ExchangeRateInformation1() {{
                                                        contractIdentification = "ut";
                                                        exchangeRate = "culpa";
                                                        rateType = ExchangeRateInformation1RateTypeEnum.SPOT;
                                                    }};
                                                    instructedAmount = new Amount("5877.78", "EUR") {{
                                                        amount = "5877.78";
                                                        currency = "EUR";
                                                    }};
                                                    intermediaryAgent = "AAAADEBBXXX";
                                                    purposeCode = PurposeCodeEnum.PENS;
                                                    remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                                        scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                                        additionalRemittanceInformation = "laudantium";
                                                        reference = "15 00011 23456 78901 23456 78901";
                                                        referenceIssuer = "eum";
                                                        referenceType = "nemo";
                                                    }};
                                                    remittanceInformationUnstructured = "Ref Number Merchant";
                                                    serviceLevel = ExternalServiceLevel1CodeEnum.URGP;
                                                    transactionCurrency = "EUR";
                                                    ultimateCreditor = "Ultimate Creditor";
                                                    ultimateDebtor = "Ultimate Debtor";
                                                }}),
                                            }}) {{
                                batchBookingPreferred = false;
                                debtorAccount = new AccountReference16CH() {{
                                    cashAccountType = "numquam";
                                    currency = "EUR";
                                    iban = "FR7612345987650123456789014";
                                    otherAccountIdentification = "90-100100-0";
                                }};
                                debtorAgent = new DebtorAgent7CH() {{
                                    bic = "AAAADEBBXXX";
                                    iid = new InstitutionalIdentification2("reiciendis", "quidem") {{
                                        clearingSystemIdCode = "doloribus";
                                        clearingSystemMemberId = "suscipit";
                                    }};
                                }};
                                payments = new org.openapis.openapi.models.shared.PaymentInitiationBulkElementJson[]{{
                                    add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                        cashAccountType = "nesciunt";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};, "Creditor Name", "Debtor Name", "culpa") {{
                                        chargeBearer = ChargeBearerEnum.SLEV;
                                        creditorAccount = new AccountReference16CH() {{
                                            cashAccountType = "dolore";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }};
                                        creditorAddress = new Address("SE") {{
                                            buildingNumber = "sunt";
                                            country = "SE";
                                            postCode = "22214-9823";
                                            streetName = "harum";
                                            townName = "laboriosam";
                                        }};
                                        creditorAgent = new CreditorAgent7CH() {{
                                            address = new PostalAddress6CH() {{
                                                addressLine1 = "ipsa";
                                                addressLine2 = "voluptates";
                                                buildingNumber = "libero";
                                                country = "SE";
                                                postCode = "86213";
                                                streetName = "voluptas";
                                                townName = "voluptas";
                                            }};
                                            bic = "AAAADEBBXXX";
                                            iid = new InstitutionalIdentification2("dolorum", "adipisci") {{
                                                clearingSystemIdCode = "minima";
                                                clearingSystemMemberId = "nobis";
                                            }};
                                            name = "Ernest Labadie";
                                        }};
                                        creditorAgentName = "Creditor Id 1234";
                                        creditorId = "Creditor Id 5678";
                                        creditorName = "Creditor Name";
                                        creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                        debtorId = "Debtor Id 1234";
                                        debtorName = "Debtor Name";
                                        endToEndIdentification = "aliquam";
                                        equivalentAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        exchangeRateInformation = new ExchangeRateInformation1() {{
                                            contractIdentification = "officiis";
                                            exchangeRate = "temporibus";
                                            rateType = ExchangeRateInformation1RateTypeEnum.SALE;
                                        }};
                                        instructedAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        intermediaryAgent = "AAAADEBBXXX";
                                        purposeCode = PurposeCodeEnum.SALA;
                                        remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                            scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                            additionalRemittanceInformation = "cum";
                                            reference = "15 00011 23456 78901 23456 78901";
                                            referenceIssuer = "blanditiis";
                                            referenceType = "quas";
                                        }};
                                        remittanceInformationUnstructured = "Ref Number Merchant";
                                        serviceLevel = ExternalServiceLevel1CodeEnum.URGP;
                                        transactionCurrency = "EUR";
                                        ultimateCreditor = "Ultimate Creditor";
                                        ultimateDebtor = "Ultimate Debtor";
                                    }}),
                                    add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                        cashAccountType = "reiciendis";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};, "Creditor Name", "Debtor Name", "ex") {{
                                        chargeBearer = ChargeBearerEnum.SHAR;
                                        creditorAccount = new AccountReference16CH() {{
                                            cashAccountType = "pariatur";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }};
                                        creditorAddress = new Address("SE") {{
                                            buildingNumber = "totam";
                                            country = "SE";
                                            postCode = "37061-9197";
                                            streetName = "voluptate";
                                            townName = "expedita";
                                        }};
                                        creditorAgent = new CreditorAgent7CH() {{
                                            address = new PostalAddress6CH() {{
                                                addressLine1 = "ab";
                                                addressLine2 = "iste";
                                                buildingNumber = "dolore";
                                                country = "SE";
                                                postCode = "14461-3613";
                                                streetName = "sapiente";
                                                townName = "debitis";
                                            }};
                                            bic = "AAAADEBBXXX";
                                            iid = new InstitutionalIdentification2("perferendis", "corrupti") {{
                                                clearingSystemIdCode = "illo";
                                                clearingSystemMemberId = "reiciendis";
                                            }};
                                            name = "Troy Cormier";
                                        }};
                                        creditorAgentName = "Creditor Id 1234";
                                        creditorId = "Creditor Id 5678";
                                        creditorName = "Creditor Name";
                                        creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                        debtorId = "Debtor Id 1234";
                                        debtorName = "Debtor Name";
                                        endToEndIdentification = "necessitatibus";
                                        equivalentAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        exchangeRateInformation = new ExchangeRateInformation1() {{
                                            contractIdentification = "ipsum";
                                            exchangeRate = "ea";
                                            rateType = ExchangeRateInformation1RateTypeEnum.SALE;
                                        }};
                                        instructedAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        intermediaryAgent = "AAAADEBBXXX";
                                        purposeCode = PurposeCodeEnum.PENS;
                                        remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                            scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                            additionalRemittanceInformation = "voluptatibus";
                                            reference = "15 00011 23456 78901 23456 78901";
                                            referenceIssuer = "tempora";
                                            referenceType = "tempora";
                                        }};
                                        remittanceInformationUnstructured = "Ref Number Merchant";
                                        serviceLevel = ExternalServiceLevel1CodeEnum.PRPT;
                                        transactionCurrency = "EUR";
                                        ultimateCreditor = "Ultimate Creditor";
                                        ultimateDebtor = "Ultimate Debtor";
                                    }}),
                                    add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                        cashAccountType = "tempora";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};, "Creditor Name", "Debtor Name", "atque") {{
                                        chargeBearer = ChargeBearerEnum.DEBT;
                                        creditorAccount = new AccountReference16CH() {{
                                            cashAccountType = "non";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }};
                                        creditorAddress = new Address("SE") {{
                                            buildingNumber = "officiis";
                                            country = "SE";
                                            postCode = "73238-5076";
                                            streetName = "veniam";
                                            townName = "minima";
                                        }};
                                        creditorAgent = new CreditorAgent7CH() {{
                                            address = new PostalAddress6CH() {{
                                                addressLine1 = "recusandae";
                                                addressLine2 = "reiciendis";
                                                buildingNumber = "nulla";
                                                country = "SE";
                                                postCode = "09234";
                                                streetName = "officiis";
                                                townName = "beatae";
                                            }};
                                            bic = "AAAADEBBXXX";
                                            iid = new InstitutionalIdentification2("praesentium", "cum") {{
                                                clearingSystemIdCode = "laudantium";
                                                clearingSystemMemberId = "exercitationem";
                                            }};
                                            name = "Lee Lehner";
                                        }};
                                        creditorAgentName = "Creditor Id 1234";
                                        creditorId = "Creditor Id 5678";
                                        creditorName = "Creditor Name";
                                        creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                        debtorId = "Debtor Id 1234";
                                        debtorName = "Debtor Name";
                                        endToEndIdentification = "expedita";
                                        equivalentAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        exchangeRateInformation = new ExchangeRateInformation1() {{
                                            contractIdentification = "debitis";
                                            exchangeRate = "neque";
                                            rateType = ExchangeRateInformation1RateTypeEnum.AGRD;
                                        }};
                                        instructedAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        intermediaryAgent = "AAAADEBBXXX";
                                        purposeCode = PurposeCodeEnum.SALA;
                                        remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                            scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                            additionalRemittanceInformation = "officia";
                                            reference = "15 00011 23456 78901 23456 78901";
                                            referenceIssuer = "dolorum";
                                            referenceType = "corrupti";
                                        }};
                                        remittanceInformationUnstructured = "Ref Number Merchant";
                                        serviceLevel = ExternalServiceLevel1CodeEnum.URGP;
                                        transactionCurrency = "EUR";
                                        ultimateCreditor = "Ultimate Creditor";
                                        ultimateDebtor = "Ultimate Debtor";
                                    }}),
                                    add(new PaymentInitiationBulkElementJson(                new AccountReference16CH() {{
                                                        cashAccountType = "deserunt";
                                                        currency = "EUR";
                                                        iban = "FR7612345987650123456789014";
                                                        otherAccountIdentification = "90-100100-0";
                                                    }};, "Creditor Name", "Debtor Name", "voluptate") {{
                                        chargeBearer = ChargeBearerEnum.DEBT;
                                        creditorAccount = new AccountReference16CH() {{
                                            cashAccountType = "ut";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }};
                                        creditorAddress = new Address("SE") {{
                                            buildingNumber = "fugiat";
                                            country = "SE";
                                            postCode = "67204";
                                            streetName = "ipsam";
                                            townName = "sit";
                                        }};
                                        creditorAgent = new CreditorAgent7CH() {{
                                            address = new PostalAddress6CH() {{
                                                addressLine1 = "voluptatum";
                                                addressLine2 = "quas";
                                                buildingNumber = "repudiandae";
                                                country = "SE";
                                                postCode = "05410";
                                                streetName = "vel";
                                                townName = "nostrum";
                                            }};
                                            bic = "AAAADEBBXXX";
                                            iid = new InstitutionalIdentification2("consequatur", "incidunt") {{
                                                clearingSystemIdCode = "saepe";
                                                clearingSystemMemberId = "error";
                                            }};
                                            name = "Mr. Mike Pollich";
                                        }};
                                        creditorAgentName = "Creditor Id 1234";
                                        creditorId = "Creditor Id 5678";
                                        creditorName = "Creditor Name";
                                        creditorNameAndAddress = "Max Masters, Main Street 1, 12345 City, Example Country";
                                        debtorId = "Debtor Id 1234";
                                        debtorName = "Debtor Name";
                                        endToEndIdentification = "labore";
                                        equivalentAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        exchangeRateInformation = new ExchangeRateInformation1() {{
                                            contractIdentification = "quidem";
                                            exchangeRate = "atque";
                                            rateType = ExchangeRateInformation1RateTypeEnum.AGRD;
                                        }};
                                        instructedAmount = new Amount("5877.78", "EUR") {{
                                            amount = "5877.78";
                                            currency = "EUR";
                                        }};
                                        intermediaryAgent = "AAAADEBBXXX";
                                        purposeCode = PurposeCodeEnum.PENS;
                                        remittanceInformationStructured = new RemittanceInformationStructured("15 00011 23456 78901 23456 78901") {{
                                            scoRorQRRorIPI = RemittanceInformationStructuredSCORorQRRorIPIEnum.SCOR;
                                            additionalRemittanceInformation = "tenetur";
                                            reference = "15 00011 23456 78901 23456 78901";
                                            referenceIssuer = "laboriosam";
                                            referenceType = "alias";
                                        }};
                                        remittanceInformationUnstructured = "Ref Number Merchant";
                                        serviceLevel = ExternalServiceLevel1CodeEnum.SEPA;
                                        transactionCurrency = "EUR";
                                        ultimateCreditor = "Ultimate Creditor";
                                        ultimateDebtor = "Ultimate Debtor";
                                    }}),
                                }};
                                requestedExecutionDate = LocalDate.parse("2021-01-21");
                                requestedExecutionTime = OffsetDateTime.parse("2021-05-02T07:30:16.176Z");
                            }}, "quis", PaymentProductEnum.DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS) {{
                consentID = "provident";
                digest = "aspernatur";
                psuAccept = "ullam";
                psuAcceptCharset = "quasi";
                psuAcceptEncoding = "animi";
                psuAcceptLanguage = "nostrum";
                psuCorporateID = "mollitia";
                psuCorporateIDType = "provident";
                psuDeviceID = "possimus";
                psuGeoLocation = "animi";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "aliquid";
                psuIDType = "accusantium";
                psuIPPort = "repellat";
                psuUserAgent = "doloribus";
                signature = "ullam";
                tppBrandLoggingInformation = "in";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://vivacious-past.net";
                tppNotificationContentPreferred = "placeat";
                tppNotificationURI = "modi";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://negligible-tea.org";
                tppRejectionNoFundsPreferred = false;
                tppSignatureCertificate = "cumque";
            }};            

            InitiatePaymentJsonResponse res = sdk.paymentInitiationServicePIS.initiatePaymentJson(req, new InitiatePaymentJsonSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.paymentInitationRequestResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiatePaymentMultipartRequest;
import org.openapis.openapi.models.operations.InitiatePaymentMultipartResponse;
import org.openapis.openapi.models.operations.InitiatePaymentMultipartSecurity;
import org.openapis.openapi.models.shared.DayOfExecutionEnum;
import org.openapis.openapi.models.shared.ExecutionRuleEnum;
import org.openapis.openapi.models.shared.FrequencyCodeEnum;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PeriodicPaymentInitiationMultipartBody;
import org.openapis.openapi.models.shared.PeriodicPaymentInitiationXmlPart2StandingorderTypeJson;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiatePaymentMultipartRequest req = new InitiatePaymentMultipartRequest("29.178.69.85", "inventore", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS,                 new PeriodicPaymentInitiationMultipartBody() {{
                                jsonStandingorderType = new PeriodicPaymentInitiationXmlPart2StandingorderTypeJson(FrequencyCodeEnum.DAILY, LocalDate.parse("2022-10-04")) {{
                                    dayOfExecution = DayOfExecutionEnum.FIVE;
                                    endDate = LocalDate.parse("2022-09-27");
                                    executionRule = ExecutionRuleEnum.PRECEDING;
                                }};;
                                xmlSct = "impedit";
                            }};) {{
                consentID = "eos";
                digest = "sapiente";
                psuAccept = "eum";
                psuAcceptCharset = "dicta";
                psuAcceptEncoding = "minima";
                psuAcceptLanguage = "beatae";
                psuCorporateID = "cupiditate";
                psuCorporateIDType = "provident";
                psuDeviceID = "earum";
                psuGeoLocation = "soluta";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "illum";
                psuIDType = "eaque";
                psuIPPort = "earum";
                psuUserAgent = "perspiciatis";
                signature = "maiores";
                tppBrandLoggingInformation = "debitis";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "http://soulful-gelding.biz";
                tppNotificationContentPreferred = "fugit";
                tppNotificationURI = "cumque";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://deserted-piano.org";
                tppRejectionNoFundsPreferred = false;
                tppSignatureCertificate = "nulla";
            }};            

            InitiatePaymentMultipartResponse res = sdk.paymentInitiationServicePIS.initiatePaymentMultipart(req, new InitiatePaymentMultipartSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.paymentInitationRequestResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiatePaymentRawRequest;
import org.openapis.openapi.models.operations.InitiatePaymentRawResponse;
import org.openapis.openapi.models.operations.InitiatePaymentRawSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InitiatePaymentRawRequest req = new InitiatePaymentRawRequest("2.24.23.127", "natus".getBytes(), "occaecati", PaymentProductEnum.DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS, PaymentServiceEnum.PAYMENTS) {{
                consentID = "quasi";
                digest = "magni";
                psuAccept = "doloribus";
                psuAcceptCharset = "nulla";
                psuAcceptEncoding = "necessitatibus";
                psuAcceptLanguage = "ipsa";
                psuCorporateID = "tempora";
                psuCorporateIDType = "nihil";
                psuDeviceID = "molestiae";
                psuGeoLocation = "dicta";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "esse";
                psuIDType = "praesentium";
                psuIPPort = "maiores";
                psuUserAgent = "reiciendis";
                signature = "vel";
                tppBrandLoggingInformation = "architecto";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://any-bush.info";
                tppNotificationContentPreferred = "tempora";
                tppNotificationURI = "esse";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://energetic-great-grandmother.com";
                tppRejectionNoFundsPreferred = false;
                tppSignatureCertificate = "laborum";
            }};            

            InitiatePaymentRawResponse res = sdk.paymentInitiationServicePIS.initiatePaymentRaw(req, new InitiatePaymentRawSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.paymentInitationRequestResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPaymentAuthorisationRequest;
import org.openapis.openapi.models.operations.StartPaymentAuthorisationResponse;
import org.openapis.openapi.models.operations.StartPaymentAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartPaymentAuthorisationRequest req = new StartPaymentAuthorisationRequest("sunt", PaymentProductEnum.DOMESTIC_SWISS_FOREIGN_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "expedita";
                psuAccept = "aliquid";
                psuAcceptCharset = "officia";
                psuAcceptEncoding = "suscipit";
                psuAcceptLanguage = "aliquid";
                psuCorporateID = "perferendis";
                psuCorporateIDType = "eum";
                psuDeviceID = "voluptas";
                psuGeoLocation = "iste";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "ab";
                psuIDType = "error";
                psuIPAddress = "210.233.167.171";
                psuIPPort = "libero";
                psuUserAgent = "ad";
                requestBody = new SelectPsuAuthenticationMethod("myAuthenticationID");;
                signature = "enim";
                tppNokRedirectURI = "http://tall-guilt.net";
                tppNotificationContentPreferred = "ex";
                tppNotificationURI = "ut";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://sad-animal.name";
                tppSignatureCertificate = "cum";
            }};            

            StartPaymentAuthorisationResponse res = sdk.paymentInitiationServicePIS.startPaymentAuthorisation(req, new StartPaymentAuthorisationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.startScaprocessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPaymentInitiationCancellationAuthorisationRequest;
import org.openapis.openapi.models.operations.StartPaymentInitiationCancellationAuthorisationResponse;
import org.openapis.openapi.models.operations.StartPaymentInitiationCancellationAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartPaymentInitiationCancellationAuthorisationRequest req = new StartPaymentInitiationCancellationAuthorisationRequest("aliquid", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "omnis";
                psuAccept = "veritatis";
                psuAcceptCharset = "rerum";
                psuAcceptEncoding = "est";
                psuAcceptLanguage = "culpa";
                psuCorporateID = "voluptatem";
                psuCorporateIDType = "sapiente";
                psuDeviceID = "officiis";
                psuGeoLocation = "architecto";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "pariatur";
                psuIDType = "debitis";
                psuIPAddress = "7.0.136.239";
                psuIPPort = "ex";
                psuUserAgent = "sapiente";
                requestBody = new SelectPsuAuthenticationMethod("myAuthenticationID");;
                signature = "minus";
                tppNokRedirectURI = "http://yawning-composition.info";
                tppNotificationContentPreferred = "perferendis";
                tppNotificationURI = "illum";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://snarling-squeegee.net";
                tppSignatureCertificate = "ipsam";
            }};            

            StartPaymentInitiationCancellationAuthorisationResponse res = sdk.paymentInitiationServicePIS.startPaymentInitiationCancellationAuthorisation(req, new StartPaymentInitiationCancellationAuthorisationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.startScaprocessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentCancellationPsuDataRequest;
import org.openapis.openapi.models.operations.UpdatePaymentCancellationPsuDataResponse;
import org.openapis.openapi.models.operations.UpdatePaymentCancellationPsuDataSecurity;
import org.openapis.openapi.models.shared.AuthorisationConfirmation;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentCancellationPsuDataRequest req = new UpdatePaymentCancellationPsuDataRequest("culpa", "123auth456", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_QR, PaymentServiceEnum.PAYMENTS, "1234-wertiq-983") {{
                digest = "inventore";
                psuAccept = "deleniti";
                psuAcceptCharset = "veritatis";
                psuAcceptEncoding = "tempora";
                psuAcceptLanguage = "dolor";
                psuCorporateID = "consequatur";
                psuCorporateIDType = "architecto";
                psuDeviceID = "sit";
                psuGeoLocation = "modi";
                psuHttpMethod = PSUHttpMethodEnum.GET;
                psuId = "ab";
                psuIDType = "laudantium";
                psuIPAddress = "16.57.219.94";
                psuIPPort = "consequuntur";
                psuUserAgent = "ipsa";
                requestBody = new SelectPsuAuthenticationMethod("myAuthenticationID");;
                signature = "eveniet";
                tppSignatureCertificate = "impedit";
            }};            

            UpdatePaymentCancellationPsuDataResponse res = sdk.paymentInitiationServicePIS.updatePaymentCancellationPsuData(req, new UpdatePaymentCancellationPsuDataSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.updatePaymentCancellationPsuData200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentPsuDataRequest;
import org.openapis.openapi.models.operations.UpdatePaymentPsuDataResponse;
import org.openapis.openapi.models.operations.UpdatePaymentPsuDataSecurity;
import org.openapis.openapi.models.shared.AuthorisationConfirmation;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PaymentProductEnum;
import org.openapis.openapi.models.shared.PaymentServiceEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentPsuDataRequest req = new UpdatePaymentPsuDataRequest("officiis", "123auth456", PaymentProductEnum.SWISS_SEPA_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "sed";
                psuAccept = "veniam";
                psuAcceptCharset = "nesciunt";
                psuAcceptEncoding = "expedita";
                psuAcceptLanguage = "eum";
                psuCorporateID = "vel";
                psuCorporateIDType = "voluptatum";
                psuDeviceID = "magnam";
                psuGeoLocation = "exercitationem";
                psuHttpMethod = PSUHttpMethodEnum.GET;
                psuId = "porro";
                psuIDType = "autem";
                psuIPAddress = "192.99.237.41";
                psuIPPort = "voluptatem";
                psuUserAgent = "exercitationem";
                requestBody = new AuthorisationConfirmation("quasi");;
                signature = "nisi";
                tppSignatureCertificate = "at";
            }};            

            UpdatePaymentPsuDataResponse res = sdk.paymentInitiationServicePIS.updatePaymentPsuData(req, new UpdatePaymentPsuDataSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.updatePaymentPsuData200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
