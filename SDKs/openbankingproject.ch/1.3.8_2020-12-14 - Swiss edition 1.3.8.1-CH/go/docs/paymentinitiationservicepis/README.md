# PaymentInitiationServicePIS

## Overview

The component for Payment Initiation Service (PIS) offers the following services:
  * Initiation and update of a payment request
  * Status information of a payment


### Available Operations

* [CancelPayment](#cancelpayment) - Payment cancellation request
* [GetPaymentCancellationScaStatus](#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [GetPaymentInformation](#getpaymentinformation) - Get payment information
* [GetPaymentInitiationAuthorisation](#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [GetPaymentInitiationCancellationAuthorisationInformation](#getpaymentinitiationcancellationauthorisationinformation) - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* [GetPaymentInitiationScaStatus](#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [GetPaymentInitiationStatus](#getpaymentinitiationstatus) - Payment initiation status request
* [InitiatePaymentJSON](#initiatepaymentjson) - Payment initiation request
* [InitiatePaymentMultipart](#initiatepaymentmultipart) - Payment initiation request
* [InitiatePaymentRaw](#initiatepaymentraw) - Payment initiation request
* [StartPaymentAuthorisation](#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [StartPaymentInitiationCancellationAuthorisation](#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [UpdatePaymentCancellationPsuData](#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [UpdatePaymentPsuData](#updatepaymentpsudata) - Update PSU data for payment initiation

## CancelPayment

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.CancelPayment(ctx, operations.CancelPaymentRequest{
        Digest: sdk.String("et"),
        PSUAccept: sdk.String("esse"),
        PSUAcceptCharset: sdk.String("eveniet"),
        PSUAcceptEncoding: sdk.String("accusamus"),
        PSUAcceptLanguage: sdk.String("veritatis"),
        PSUDeviceID: sdk.String("esse"),
        PSUGeoLocation: sdk.String("quod"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("224.102.23.231"),
        PSUIPPort: sdk.String("vel"),
        PSUUserAgent: sdk.String("harum"),
        Signature: sdk.String("molestiae"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://obedient-exterior.net"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://all-partridge.net"),
        TPPSignatureCertificate: sdk.String("adipisci"),
        XRequestID: "cumque",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.CancelPaymentSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationCancelResponse202 != nil {
        // handle response
    }
}
```

## GetPaymentCancellationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentCancellationScaStatus(ctx, operations.GetPaymentCancellationScaStatusRequest{
        Digest: sdk.String("minus"),
        PSUAccept: sdk.String("quaerat"),
        PSUAcceptCharset: sdk.String("sapiente"),
        PSUAcceptEncoding: sdk.String("consectetur"),
        PSUAcceptLanguage: sdk.String("esse"),
        PSUDeviceID: sdk.String("blanditiis"),
        PSUGeoLocation: sdk.String("provident"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PSUIPAddress: sdk.String("219.142.117.24"),
        PSUIPPort: sdk.String("a"),
        PSUUserAgent: sdk.String("error"),
        Signature: sdk.String("sint"),
        TPPSignatureCertificate: sdk.String("pariatur"),
        XRequestID: "possimus",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentCancellationScaStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScaStatusResponse != nil {
        // handle response
    }
}
```

## GetPaymentInformation

Returns the content of a payment object

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentInformation(ctx, operations.GetPaymentInformationRequest{
        Digest: sdk.String("asperiores"),
        PSUAccept: sdk.String("facere"),
        PSUAcceptCharset: sdk.String("veritatis"),
        PSUAcceptEncoding: sdk.String("consequuntur"),
        PSUAcceptLanguage: sdk.String("quasi"),
        PSUDeviceID: sdk.String("similique"),
        PSUGeoLocation: sdk.String("culpa"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("243.16.239.108"),
        PSUIPPort: sdk.String("in"),
        PSUUserAgent: sdk.String("eius"),
        Signature: sdk.String("libero"),
        TPPSignatureCertificate: sdk.String("illum"),
        XRequestID: "soluta",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersIsr,
        PaymentService: shared.PaymentServiceEnumPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentInformationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentInformation200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## GetPaymentInitiationAuthorisation

Read a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentInitiationAuthorisation(ctx, operations.GetPaymentInitiationAuthorisationRequest{
        Digest: sdk.String("sapiente"),
        PSUAccept: sdk.String("dicta"),
        PSUAcceptCharset: sdk.String("ullam"),
        PSUAcceptEncoding: sdk.String("reprehenderit"),
        PSUAcceptLanguage: sdk.String("ullam"),
        PSUDeviceID: sdk.String("nisi"),
        PSUGeoLocation: sdk.String("aut"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PSUIPAddress: sdk.String("47.216.102.137"),
        PSUIPPort: sdk.String("itaque"),
        PSUUserAgent: sdk.String("dolorum"),
        Signature: sdk.String("architecto"),
        TPPSignatureCertificate: sdk.String("omnis"),
        XRequestID: "tenetur",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersIsr,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentInitiationAuthorisationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorisations != nil {
        // handle response
    }
}
```

## GetPaymentInitiationCancellationAuthorisationInformation

Retrieve a list of all created cancellation authorisation sub-resources.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentInitiationCancellationAuthorisationInformation(ctx, operations.GetPaymentInitiationCancellationAuthorisationInformationRequest{
        Digest: sdk.String("et"),
        PSUAccept: sdk.String("voluptate"),
        PSUAcceptCharset: sdk.String("ipsa"),
        PSUAcceptEncoding: sdk.String("minima"),
        PSUAcceptLanguage: sdk.String("veritatis"),
        PSUDeviceID: sdk.String("consectetur"),
        PSUGeoLocation: sdk.String("adipisci"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("214.8.133.3"),
        PSUIPPort: sdk.String("laudantium"),
        PSUUserAgent: sdk.String("eum"),
        Signature: sdk.String("mollitia"),
        TPPSignatureCertificate: sdk.String("ab"),
        XRequestID: "corrupti",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersQr,
        PaymentService: shared.PaymentServiceEnumPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentInitiationCancellationAuthorisationInformationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorisations != nil {
        // handle response
    }
}
```

## GetPaymentInitiationScaStatus

This method returns the SCA status of a payment initiation's authorisation sub-resource.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentInitiationScaStatus(ctx, operations.GetPaymentInitiationScaStatusRequest{
        Digest: sdk.String("dolor"),
        PSUAccept: sdk.String("occaecati"),
        PSUAcceptCharset: sdk.String("numquam"),
        PSUAcceptEncoding: sdk.String("impedit"),
        PSUAcceptLanguage: sdk.String("explicabo"),
        PSUDeviceID: sdk.String("voluptas"),
        PSUGeoLocation: sdk.String("aut"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PSUIPAddress: sdk.String("29.251.158.62"),
        PSUIPPort: sdk.String("voluptatibus"),
        PSUUserAgent: sdk.String("voluptas"),
        Signature: sdk.String("asperiores"),
        TPPSignatureCertificate: sdk.String("aperiam"),
        XRequestID: "ea",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersQr,
        PaymentService: shared.PaymentServiceEnumPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentInitiationScaStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScaStatusResponse != nil {
        // handle response
    }
}
```

## GetPaymentInitiationStatus

Check the transaction status of a payment initiation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.GetPaymentInitiationStatus(ctx, operations.GetPaymentInitiationStatusRequest{
        Digest: sdk.String("repellendus"),
        PSUAccept: sdk.String("officia"),
        PSUAcceptCharset: sdk.String("maxime"),
        PSUAcceptEncoding: sdk.String("dignissimos"),
        PSUAcceptLanguage: sdk.String("officia"),
        PSUDeviceID: sdk.String("asperiores"),
        PSUGeoLocation: sdk.String("nemo"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PSUIPAddress: sdk.String("80.200.205.73"),
        PSUIPPort: sdk.String("ab"),
        PSUUserAgent: sdk.String("adipisci"),
        Signature: sdk.String("fuga"),
        TPPSignatureCertificate: sdk.String("id"),
        XRequestID: "suscipit",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersQr,
        PaymentService: shared.PaymentServiceEnumBulkPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.GetPaymentInitiationStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitiationStatusResponse200JSON != nil {
        // handle response
    }
}
```

## InitiatePaymentJSON

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.InitiatePaymentJSON(ctx, operations.InitiatePaymentJSONRequest{
        ConsentID: sdk.String("est"),
        Digest: sdk.String("recusandae"),
        PSUAccept: sdk.String("totam"),
        PSUAcceptCharset: sdk.String("fugiat"),
        PSUAcceptEncoding: sdk.String("vel"),
        PSUAcceptLanguage: sdk.String("ducimus"),
        PSUCorporateID: sdk.String("quos"),
        PSUCorporateIDType: sdk.String("vel"),
        PSUDeviceID: sdk.String("labore"),
        PSUGeoLocation: sdk.String("possimus"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PsuID: sdk.String("cum"),
        PSUIDType: sdk.String("commodi"),
        PSUIPAddress: "114.92.248.212",
        PSUIPPort: sdk.String("nemo"),
        PSUUserAgent: sdk.String("recusandae"),
        RequestBody: operations.InitiatePaymentApplicationJSON{},
        Signature: sdk.String("aliquid"),
        TPPBrandLoggingInformation: sdk.String("aperiam"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://emotional-ignorant.info"),
        TPPNotificationContentPreferred: sdk.String("earum"),
        TPPNotificationURI: sdk.String("facere"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://worst-genie.org"),
        TPPRejectionNoFundsPreferred: sdk.Bool(false),
        TPPSignatureCertificate: sdk.String("quidem"),
        XRequestID: "saepe",
        PaymentProduct: shared.PaymentProductEnumPain001SwissSixCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPayments,
    }, operations.InitiatePaymentJSONSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitationRequestResponse201 != nil {
        // handle response
    }
}
```

## InitiatePaymentMultipart

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.InitiatePaymentMultipart(ctx, operations.InitiatePaymentMultipartRequest{
        ConsentID: sdk.String("sunt"),
        Digest: sdk.String("asperiores"),
        PSUAccept: sdk.String("adipisci"),
        PSUAcceptCharset: sdk.String("non"),
        PSUAcceptEncoding: sdk.String("amet"),
        PSUAcceptLanguage: sdk.String("beatae"),
        PSUCorporateID: sdk.String("dignissimos"),
        PSUCorporateIDType: sdk.String("a"),
        PSUDeviceID: sdk.String("debitis"),
        PSUGeoLocation: sdk.String("consectetur"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("harum"),
        PSUIDType: sdk.String("laboriosam"),
        PSUIPAddress: "14.234.187.29",
        PSUIPPort: sdk.String("accusamus"),
        PSUUserAgent: sdk.String("similique"),
        Signature: sdk.String("tempora"),
        TPPBrandLoggingInformation: sdk.String("aspernatur"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("http://hasty-gall-bladder.biz"),
        TPPNotificationContentPreferred: sdk.String("nobis"),
        TPPNotificationURI: sdk.String("dolorum"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://stable-closing.name"),
        TPPRejectionNoFundsPreferred: sdk.Bool(false),
        TPPSignatureCertificate: sdk.String("in"),
        XRequestID: "dolore",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersQr,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PeriodicPaymentInitiationMultipartBody: shared.PeriodicPaymentInitiationMultipartBody{
            JSONStandingorderType: &shared.PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON{
                DayOfExecution: shared.DayOfExecutionEnumTwentySeven.ToPointer(),
                EndDate: types.MustDateFromString("2022-10-06"),
                ExecutionRule: shared.ExecutionRuleEnumPreceding.ToPointer(),
                Frequency: shared.FrequencyCodeEnumEveryTwoMonths,
                StartDate: types.MustDateFromString("2021-02-11"),
            },
            XMLSct: sdk.String("culpa"),
        },
    }, operations.InitiatePaymentMultipartSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitationRequestResponse201 != nil {
        // handle response
    }
}
```

## InitiatePaymentRaw

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.InitiatePaymentRaw(ctx, operations.InitiatePaymentRawRequest{
        ConsentID: sdk.String("corrupti"),
        Digest: sdk.String("pariatur"),
        PSUAccept: sdk.String("totam"),
        PSUAcceptCharset: sdk.String("hic"),
        PSUAcceptEncoding: sdk.String("exercitationem"),
        PSUAcceptLanguage: sdk.String("nobis"),
        PSUCorporateID: sdk.String("sit"),
        PSUCorporateIDType: sdk.String("rerum"),
        PSUDeviceID: sdk.String("sed"),
        PSUGeoLocation: sdk.String("reiciendis"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("asperiores"),
        PSUIDType: sdk.String("facilis"),
        PSUIPAddress: "115.181.18.156",
        PSUIPPort: sdk.String("dolore"),
        PSUUserAgent: sdk.String("laborum"),
        RequestBody: []byte("sed"),
        Signature: sdk.String("in"),
        TPPBrandLoggingInformation: sdk.String("commodi"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://common-gather.name"),
        TPPNotificationContentPreferred: sdk.String("architecto"),
        TPPNotificationURI: sdk.String("suscipit"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://unlawful-beach.org"),
        TPPRejectionNoFundsPreferred: sdk.Bool(false),
        TPPSignatureCertificate: sdk.String("perferendis"),
        XRequestID: "corrupti",
        PaymentProduct: shared.PaymentProductEnumPain001SwissSixCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPayments,
    }, operations.InitiatePaymentRawSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentInitationRequestResponse201 != nil {
        // handle response
    }
}
```

## StartPaymentAuthorisation

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.StartPaymentAuthorisation(ctx, operations.StartPaymentAuthorisationRequest{
        Digest: sdk.String("sed"),
        PSUAccept: sdk.String("provident"),
        PSUAcceptCharset: sdk.String("eius"),
        PSUAcceptEncoding: sdk.String("necessitatibus"),
        PSUAcceptLanguage: sdk.String("ipsum"),
        PSUCorporateID: sdk.String("ea"),
        PSUCorporateIDType: sdk.String("occaecati"),
        PSUDeviceID: sdk.String("quos"),
        PSUGeoLocation: sdk.String("voluptatibus"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("tempora"),
        PSUIDType: sdk.String("voluptate"),
        PSUIPAddress: sdk.String("248.102.6.63"),
        PSUIPPort: sdk.String("officiis"),
        PSUUserAgent: sdk.String("praesentium"),
        RequestBody: &operations.StartPaymentAuthorisationRequestBody{},
        Signature: sdk.String("facilis"),
        TPPNokRedirectURI: sdk.String("http://feline-futon.org"),
        TPPNotificationContentPreferred: sdk.String("rem"),
        TPPNotificationURI: sdk.String("sit"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://pitiful-familiarity.biz"),
        TPPSignatureCertificate: sdk.String("recusandae"),
        XRequestID: "reiciendis",
        PaymentProduct: shared.PaymentProductEnumPain001CrossBorderCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.StartPaymentAuthorisationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartScaprocessResponse != nil {
        // handle response
    }
}
```

## StartPaymentInitiationCancellationAuthorisation

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.StartPaymentInitiationCancellationAuthorisation(ctx, operations.StartPaymentInitiationCancellationAuthorisationRequest{
        Digest: sdk.String("aperiam"),
        PSUAccept: sdk.String("saepe"),
        PSUAcceptCharset: sdk.String("numquam"),
        PSUAcceptEncoding: sdk.String("veniam"),
        PSUAcceptLanguage: sdk.String("in"),
        PSUCorporateID: sdk.String("officiis"),
        PSUCorporateIDType: sdk.String("beatae"),
        PSUDeviceID: sdk.String("laudantium"),
        PSUGeoLocation: sdk.String("exercitationem"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PsuID: sdk.String("cum"),
        PSUIDType: sdk.String("laboriosam"),
        PSUIPAddress: sdk.String("174.135.159.241"),
        PSUIPPort: sdk.String("expedita"),
        PSUUserAgent: sdk.String("debitis"),
        RequestBody: &operations.StartPaymentInitiationCancellationAuthorisationRequestBody{},
        Signature: sdk.String("neque"),
        TPPNokRedirectURI: sdk.String("https://good-natured-pate.net"),
        TPPNotificationContentPreferred: sdk.String("corrupti"),
        TPPNotificationURI: sdk.String("accusamus"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://monthly-chapter.biz"),
        TPPSignatureCertificate: sdk.String("fugiat"),
        XRequestID: "voluptatem",
        PaymentProduct: shared.PaymentProductEnumSwissCrossBorderCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.StartPaymentInitiationCancellationAuthorisationSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartScaprocessResponse != nil {
        // handle response
    }
}
```

## UpdatePaymentCancellationPsuData

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.UpdatePaymentCancellationPsuData(ctx, operations.UpdatePaymentCancellationPsuDataRequest{
        Digest: sdk.String("magnam"),
        PSUAccept: sdk.String("consequatur"),
        PSUAcceptCharset: sdk.String("esse"),
        PSUAcceptEncoding: sdk.String("ipsam"),
        PSUAcceptLanguage: sdk.String("sit"),
        PSUCorporateID: sdk.String("voluptatum"),
        PSUCorporateIDType: sdk.String("quas"),
        PSUDeviceID: sdk.String("repudiandae"),
        PSUGeoLocation: sdk.String("corporis"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("blanditiis"),
        PSUIDType: sdk.String("ex"),
        PSUIPAddress: sdk.String("39.6.108.87"),
        PSUIPPort: sdk.String("saepe"),
        PSUUserAgent: sdk.String("error"),
        RequestBody: &operations.UpdatePaymentCancellationPsuDataRequestBody{},
        Signature: sdk.String("consequatur"),
        TPPSignatureCertificate: sdk.String("incidunt"),
        XRequestID: "reiciendis",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.UpdatePaymentCancellationPsuDataSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePaymentCancellationPsuData200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UpdatePaymentPsuData

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PaymentInitiationServicePIS.UpdatePaymentPsuData(ctx, operations.UpdatePaymentPsuDataRequest{
        Digest: sdk.String("dicta"),
        PSUAccept: sdk.String("architecto"),
        PSUAcceptCharset: sdk.String("occaecati"),
        PSUAcceptEncoding: sdk.String("labore"),
        PSUAcceptLanguage: sdk.String("quidem"),
        PSUCorporateID: sdk.String("atque"),
        PSUCorporateIDType: sdk.String("laborum"),
        PSUDeviceID: sdk.String("nam"),
        PSUGeoLocation: sdk.String("tenetur"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("alias"),
        PSUIDType: sdk.String("amet"),
        PSUIPAddress: sdk.String("165.116.153.248"),
        PSUIPPort: sdk.String("provident"),
        PSUUserAgent: sdk.String("repellendus"),
        RequestBody: &operations.UpdatePaymentPsuDataRequestBody{},
        Signature: sdk.String("delectus"),
        TPPSignatureCertificate: sdk.String("voluptates"),
        XRequestID: "perferendis",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumPain001SepaCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPeriodicPayments,
        PaymentID: "1234-wertiq-983",
    }, operations.UpdatePaymentPsuDataSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePaymentPsuData200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
