# CommonServices

## Overview

Processes on starting authorisations, update PSU identification or PSU authentication data and explicit 
authorisation of transactions by using SCA are very similar in PIS and AIS and signing baskets services. 
The API calls supporting these processes are described in the following independently from the service/endpoint. 
For reasons of clarity, the endpoints are defined always for the Payment Initiation Service, the payment cancellation, 
the Account Information Service (Consents), and Signing Baskets separately. 
These processes usually are used following a hyperlink of the ASPSP. 


### Available Operations

* [DeleteSigningBasket](#deletesigningbasket) - Delete the signing basket
* [GetConsentScaStatus](#getconsentscastatus) - Read the SCA status of the consent authorisation
* [GetPaymentCancellationScaStatus](#getpaymentcancellationscastatus) - Read the SCA status of the payment cancellation's authorisation
* [GetPaymentInitiationAuthorisation](#getpaymentinitiationauthorisation) - Get payment initiation authorisation sub-resources request
* [GetPaymentInitiationScaStatus](#getpaymentinitiationscastatus) - Read the SCA status of the payment authorisation
* [GetSigningBasketAuthorisation](#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [GetSigningBasketScaStatus](#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [GetSigningBasketStatus](#getsigningbasketstatus) - Read the status of the signing basket
* [StartConsentAuthorisation](#startconsentauthorisation) - Start the authorisation process for a consent
* [StartPaymentAuthorisation](#startpaymentauthorisation) - Start the authorisation process for a payment initiation
* [StartPaymentInitiationCancellationAuthorisation](#startpaymentinitiationcancellationauthorisation) - Start the authorisation process for the cancellation of the addressed payment
* [StartSigningBasketAuthorisation](#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [UpdateConsentsPsuData](#updateconsentspsudata) - Update PSU Data for consents
* [UpdatePaymentCancellationPsuData](#updatepaymentcancellationpsudata) - Update PSU data for payment initiation cancellation
* [UpdatePaymentPsuData](#updatepaymentpsudata) - Update PSU data for payment initiation
* [UpdateSigningBasketPsuData](#updatesigningbasketpsudata) - Update PSU data for signing basket

## DeleteSigningBasket

Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
The undlerying transactions are not affected by this deletion.

Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.


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
    res, err := s.CommonServices.DeleteSigningBasket(ctx, operations.DeleteSigningBasketRequest{
        Digest: sdk.String("nostrum"),
        PSUAccept: sdk.String("hic"),
        PSUAcceptCharset: sdk.String("recusandae"),
        PSUAcceptEncoding: sdk.String("omnis"),
        PSUAcceptLanguage: sdk.String("facilis"),
        PSUDeviceID: sdk.String("perspiciatis"),
        PSUGeoLocation: sdk.String("voluptatem"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("42.128.159.12"),
        PSUIPPort: sdk.String("occaecati"),
        PSUUserAgent: sdk.String("rerum"),
        Signature: sdk.String("adipisci"),
        TPPSignatureCertificate: sdk.String("asperiores"),
        XRequestID: "earum",
        BasketID: "1234-basket-567",
    }, operations.DeleteSigningBasketSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


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
    res, err := s.CommonServices.GetConsentScaStatus(ctx, operations.GetConsentScaStatusRequest{
        Digest: sdk.String("modi"),
        PSUAccept: sdk.String("iste"),
        PSUAcceptCharset: sdk.String("dolorum"),
        PSUAcceptEncoding: sdk.String("deleniti"),
        PSUAcceptLanguage: sdk.String("pariatur"),
        PSUDeviceID: sdk.String("provident"),
        PSUGeoLocation: sdk.String("nobis"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PSUIPAddress: sdk.String("246.79.141.101"),
        PSUIPPort: sdk.String("dolorem"),
        PSUUserAgent: sdk.String("dolorem"),
        Signature: sdk.String("dolor"),
        TPPSignatureCertificate: sdk.String("qui"),
        XRequestID: "ipsum",
        AuthorisationID: "123auth456",
        ConsentID: "hic",
    }, operations.GetConsentScaStatusSecurity{
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
    res, err := s.CommonServices.GetPaymentCancellationScaStatus(ctx, operations.GetPaymentCancellationScaStatusRequest{
        Digest: sdk.String("excepturi"),
        PSUAccept: sdk.String("cum"),
        PSUAcceptCharset: sdk.String("voluptate"),
        PSUAcceptEncoding: sdk.String("dignissimos"),
        PSUAcceptLanguage: sdk.String("reiciendis"),
        PSUDeviceID: sdk.String("amet"),
        PSUGeoLocation: sdk.String("dolorum"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("21.14.14.111"),
        PSUIPPort: sdk.String("odio"),
        PSUUserAgent: sdk.String("quaerat"),
        Signature: sdk.String("accusamus"),
        TPPSignatureCertificate: sdk.String("quidem"),
        XRequestID: "voluptatibus",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissForeignCreditTransfers,
        PaymentService: shared.PaymentServiceEnumBulkPayments,
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
    res, err := s.CommonServices.GetPaymentInitiationAuthorisation(ctx, operations.GetPaymentInitiationAuthorisationRequest{
        Digest: sdk.String("eos"),
        PSUAccept: sdk.String("atque"),
        PSUAcceptCharset: sdk.String("sit"),
        PSUAcceptEncoding: sdk.String("fugiat"),
        PSUAcceptLanguage: sdk.String("ab"),
        PSUDeviceID: sdk.String("soluta"),
        PSUGeoLocation: sdk.String("dolorum"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PSUIPAddress: sdk.String("116.173.137.155"),
        PSUIPPort: sdk.String("necessitatibus"),
        PSUUserAgent: sdk.String("distinctio"),
        Signature: sdk.String("asperiores"),
        TPPSignatureCertificate: sdk.String("nihil"),
        XRequestID: "ipsum",
        PaymentProduct: shared.PaymentProductEnumSwissSepaCreditTransfers,
        PaymentService: shared.PaymentServiceEnumBulkPayments,
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
    res, err := s.CommonServices.GetPaymentInitiationScaStatus(ctx, operations.GetPaymentInitiationScaStatusRequest{
        Digest: sdk.String("saepe"),
        PSUAccept: sdk.String("eius"),
        PSUAcceptCharset: sdk.String("aspernatur"),
        PSUAcceptEncoding: sdk.String("perferendis"),
        PSUAcceptLanguage: sdk.String("amet"),
        PSUDeviceID: sdk.String("optio"),
        PSUGeoLocation: sdk.String("accusamus"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("231.98.165.150"),
        PSUIPPort: sdk.String("minima"),
        PSUUserAgent: sdk.String("repellendus"),
        Signature: sdk.String("totam"),
        TPPSignatureCertificate: sdk.String("similique"),
        XRequestID: "alias",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumPain001CrossBorderCreditTransfers,
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

## GetSigningBasketAuthorisation

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
    res, err := s.CommonServices.GetSigningBasketAuthorisation(ctx, operations.GetSigningBasketAuthorisationRequest{
        Digest: sdk.String("tempora"),
        PSUAccept: sdk.String("vel"),
        PSUAcceptCharset: sdk.String("quod"),
        PSUAcceptEncoding: sdk.String("officiis"),
        PSUAcceptLanguage: sdk.String("qui"),
        PSUDeviceID: sdk.String("dolorum"),
        PSUGeoLocation: sdk.String("a"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PSUIPAddress: sdk.String("175.123.55.201"),
        PSUIPPort: sdk.String("tenetur"),
        PSUUserAgent: sdk.String("amet"),
        Signature: sdk.String("tempore"),
        TPPSignatureCertificate: sdk.String("accusamus"),
        XRequestID: "numquam",
        BasketID: "1234-basket-567",
    }, operations.GetSigningBasketAuthorisationSecurity{
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

## GetSigningBasketScaStatus

This method returns the SCA status of a signing basket's authorisation sub-resource.


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
    res, err := s.CommonServices.GetSigningBasketScaStatus(ctx, operations.GetSigningBasketScaStatusRequest{
        Digest: sdk.String("enim"),
        PSUAccept: sdk.String("dolorem"),
        PSUAcceptCharset: sdk.String("sapiente"),
        PSUAcceptEncoding: sdk.String("totam"),
        PSUAcceptLanguage: sdk.String("nihil"),
        PSUDeviceID: sdk.String("sit"),
        PSUGeoLocation: sdk.String("expedita"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("39.108.186.95"),
        PSUIPPort: sdk.String("deserunt"),
        PSUUserAgent: sdk.String("quam"),
        Signature: sdk.String("ipsum"),
        TPPSignatureCertificate: sdk.String("incidunt"),
        XRequestID: "qui",
        AuthorisationID: "123auth456",
        BasketID: "1234-basket-567",
    }, operations.GetSigningBasketScaStatusSecurity{
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

## GetSigningBasketStatus

Returns the status of a signing basket object.


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
    res, err := s.CommonServices.GetSigningBasketStatus(ctx, operations.GetSigningBasketStatusRequest{
        Digest: sdk.String("cupiditate"),
        PSUAccept: sdk.String("maxime"),
        PSUAcceptCharset: sdk.String("pariatur"),
        PSUAcceptEncoding: sdk.String("soluta"),
        PSUAcceptLanguage: sdk.String("dicta"),
        PSUCorporateID: sdk.String("laborum"),
        PSUCorporateIDType: sdk.String("totam"),
        PSUDeviceID: sdk.String("incidunt"),
        PSUGeoLocation: sdk.String("aspernatur"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("distinctio"),
        PSUIDType: sdk.String("facilis"),
        PSUIPAddress: sdk.String("101.118.144.215"),
        PSUIPPort: sdk.String("qui"),
        PSUUserAgent: sdk.String("neque"),
        Signature: sdk.String("fugit"),
        TPPSignatureCertificate: sdk.String("magni"),
        XRequestID: "odio",
        BasketID: "1234-basket-567",
    }, operations.GetSigningBasketStatusSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SigningBasketStatusResponse200 != nil {
        // handle response
    }
}
```

## StartConsentAuthorisation

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
    res, err := s.CommonServices.StartConsentAuthorisation(ctx, operations.StartConsentAuthorisationRequest{
        Digest: sdk.String("sunt"),
        PSUAccept: sdk.String("ullam"),
        PSUAcceptCharset: sdk.String("nam"),
        PSUAcceptEncoding: sdk.String("hic"),
        PSUAcceptLanguage: sdk.String("voluptatem"),
        PSUCorporateID: sdk.String("cumque"),
        PSUCorporateIDType: sdk.String("soluta"),
        PSUDeviceID: sdk.String("nobis"),
        PSUGeoLocation: sdk.String("et"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PsuID: sdk.String("ipsum"),
        PSUIDType: sdk.String("veritatis"),
        PSUIPAddress: sdk.String("191.141.187.149"),
        PSUIPPort: sdk.String("aperiam"),
        PSUUserAgent: sdk.String("delectus"),
        RequestBody: &operations.StartConsentAuthorisationRequestBody{},
        Signature: sdk.String("dolorem"),
        TPPNokRedirectURI: sdk.String("http://flaky-day.net"),
        TPPNotificationContentPreferred: sdk.String("architecto"),
        TPPNotificationURI: sdk.String("quae"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://narrow-tritone.com"),
        TPPSignatureCertificate: sdk.String("est"),
        XRequestID: "repellendus",
        ConsentID: "porro",
    }, operations.StartConsentAuthorisationSecurity{
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
    res, err := s.CommonServices.StartPaymentAuthorisation(ctx, operations.StartPaymentAuthorisationRequest{
        Digest: sdk.String("doloribus"),
        PSUAccept: sdk.String("ut"),
        PSUAcceptCharset: sdk.String("facilis"),
        PSUAcceptEncoding: sdk.String("cupiditate"),
        PSUAcceptLanguage: sdk.String("qui"),
        PSUCorporateID: sdk.String("quae"),
        PSUCorporateIDType: sdk.String("laudantium"),
        PSUDeviceID: sdk.String("odio"),
        PSUGeoLocation: sdk.String("occaecati"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PsuID: sdk.String("quisquam"),
        PSUIDType: sdk.String("vero"),
        PSUIPAddress: sdk.String("155.86.55.246"),
        PSUIPPort: sdk.String("voluptate"),
        PSUUserAgent: sdk.String("consectetur"),
        RequestBody: &operations.StartPaymentAuthorisationRequestBody{},
        Signature: sdk.String("vero"),
        TPPNokRedirectURI: sdk.String("https://liquid-underweight.net"),
        TPPNotificationContentPreferred: sdk.String("quod"),
        TPPNotificationURI: sdk.String("odio"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://rubbery-surname.info"),
        TPPSignatureCertificate: sdk.String("dolore"),
        XRequestID: "quibusdam",
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
    res, err := s.CommonServices.StartPaymentInitiationCancellationAuthorisation(ctx, operations.StartPaymentInitiationCancellationAuthorisationRequest{
        Digest: sdk.String("natus"),
        PSUAccept: sdk.String("impedit"),
        PSUAcceptCharset: sdk.String("aut"),
        PSUAcceptEncoding: sdk.String("voluptatibus"),
        PSUAcceptLanguage: sdk.String("exercitationem"),
        PSUCorporateID: sdk.String("nulla"),
        PSUCorporateIDType: sdk.String("fugit"),
        PSUDeviceID: sdk.String("porro"),
        PSUGeoLocation: sdk.String("maiores"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PsuID: sdk.String("iusto"),
        PSUIDType: sdk.String("eligendi"),
        PSUIPAddress: sdk.String("127.1.163.68"),
        PSUIPPort: sdk.String("ipsam"),
        PSUUserAgent: sdk.String("ea"),
        RequestBody: &operations.StartPaymentInitiationCancellationAuthorisationRequestBody{},
        Signature: sdk.String("aspernatur"),
        TPPNokRedirectURI: sdk.String("http://sunny-effectiveness.biz"),
        TPPNotificationContentPreferred: sdk.String("ex"),
        TPPNotificationURI: sdk.String("laudantium"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://elaborate-wholesaler.com"),
        TPPSignatureCertificate: sdk.String("ex"),
        XRequestID: "nulla",
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

## StartSigningBasketAuthorisation

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
    res, err := s.CommonServices.StartSigningBasketAuthorisation(ctx, operations.StartSigningBasketAuthorisationRequest{
        Digest: sdk.String("nostrum"),
        PSUAccept: sdk.String("sapiente"),
        PSUAcceptCharset: sdk.String("quisquam"),
        PSUAcceptEncoding: sdk.String("saepe"),
        PSUAcceptLanguage: sdk.String("ea"),
        PSUCorporateID: sdk.String("impedit"),
        PSUCorporateIDType: sdk.String("corporis"),
        PSUDeviceID: sdk.String("veniam"),
        PSUGeoLocation: sdk.String("aliquid"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("magnam"),
        PSUIDType: sdk.String("ea"),
        PSUIPAddress: sdk.String("198.59.237.33"),
        PSUIPPort: sdk.String("minima"),
        PSUUserAgent: sdk.String("eaque"),
        RequestBody: &operations.StartSigningBasketAuthorisationRequestBody{},
        Signature: sdk.String("a"),
        TPPNokRedirectURI: sdk.String("https://adolescent-advancement.name"),
        TPPNotificationContentPreferred: sdk.String("impedit"),
        TPPNotificationURI: sdk.String("aliquam"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("http://unconscious-benefit.biz"),
        TPPSignatureCertificate: sdk.String("et"),
        XRequestID: "dolorum",
        BasketID: "1234-basket-567",
    }, operations.StartSigningBasketAuthorisationSecurity{
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

## UpdateConsentsPsuData

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
    res, err := s.CommonServices.UpdateConsentsPsuData(ctx, operations.UpdateConsentsPsuDataRequest{
        Digest: sdk.String("laborum"),
        PSUAccept: sdk.String("placeat"),
        PSUAcceptCharset: sdk.String("velit"),
        PSUAcceptEncoding: sdk.String("eum"),
        PSUAcceptLanguage: sdk.String("autem"),
        PSUCorporateID: sdk.String("nobis"),
        PSUCorporateIDType: sdk.String("quas"),
        PSUDeviceID: sdk.String("assumenda"),
        PSUGeoLocation: sdk.String("nulla"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PsuID: sdk.String("libero"),
        PSUIDType: sdk.String("quasi"),
        PSUIPAddress: sdk.String("69.65.33.151"),
        PSUIPPort: sdk.String("ipsa"),
        PSUUserAgent: sdk.String("molestiae"),
        RequestBody: &operations.UpdateConsentsPsuDataRequestBody{},
        Signature: sdk.String("magnam"),
        TPPSignatureCertificate: sdk.String("odio"),
        XRequestID: "eius",
        AuthorisationID: "123auth456",
        ConsentID: "esse",
    }, operations.UpdateConsentsPsuDataSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConsentsPsuData200ApplicationJSONOneOf != nil {
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
    res, err := s.CommonServices.UpdatePaymentCancellationPsuData(ctx, operations.UpdatePaymentCancellationPsuDataRequest{
        Digest: sdk.String("esse"),
        PSUAccept: sdk.String("rem"),
        PSUAcceptCharset: sdk.String("fuga"),
        PSUAcceptEncoding: sdk.String("reprehenderit"),
        PSUAcceptLanguage: sdk.String("quidem"),
        PSUCorporateID: sdk.String("fugiat"),
        PSUCorporateIDType: sdk.String("ut"),
        PSUDeviceID: sdk.String("eum"),
        PSUGeoLocation: sdk.String("suscipit"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PsuID: sdk.String("eos"),
        PSUIDType: sdk.String("praesentium"),
        PSUIPAddress: sdk.String("201.22.14.168"),
        PSUIPPort: sdk.String("quidem"),
        PSUUserAgent: sdk.String("neque"),
        RequestBody: &operations.UpdatePaymentCancellationPsuDataRequestBody{},
        Signature: sdk.String("quo"),
        TPPSignatureCertificate: sdk.String("illum"),
        XRequestID: "quo",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumPain001SepaCreditTransfers,
        PaymentService: shared.PaymentServiceEnumPayments,
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
    res, err := s.CommonServices.UpdatePaymentPsuData(ctx, operations.UpdatePaymentPsuDataRequest{
        Digest: sdk.String("eos"),
        PSUAccept: sdk.String("voluptas"),
        PSUAcceptCharset: sdk.String("ab"),
        PSUAcceptEncoding: sdk.String("cupiditate"),
        PSUAcceptLanguage: sdk.String("consequatur"),
        PSUCorporateID: sdk.String("tempora"),
        PSUCorporateIDType: sdk.String("debitis"),
        PSUDeviceID: sdk.String("ipsam"),
        PSUGeoLocation: sdk.String("aspernatur"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("quo"),
        PSUIDType: sdk.String("esse"),
        PSUIPAddress: sdk.String("236.11.183.204"),
        PSUIPPort: sdk.String("dignissimos"),
        PSUUserAgent: sdk.String("inventore"),
        RequestBody: &operations.UpdatePaymentPsuDataRequestBody{},
        Signature: sdk.String("nihil"),
        TPPSignatureCertificate: sdk.String("totam"),
        XRequestID: "accusamus",
        AuthorisationID: "123auth456",
        PaymentProduct: shared.PaymentProductEnumDomesticSwissCreditTransfersQr,
        PaymentService: shared.PaymentServiceEnumBulkPayments,
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

## UpdateSigningBasketPsuData

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
    res, err := s.CommonServices.UpdateSigningBasketPsuData(ctx, operations.UpdateSigningBasketPsuDataRequest{
        Digest: sdk.String("occaecati"),
        PSUAccept: sdk.String("commodi"),
        PSUAcceptCharset: sdk.String("sapiente"),
        PSUAcceptEncoding: sdk.String("dolores"),
        PSUAcceptLanguage: sdk.String("deserunt"),
        PSUCorporateID: sdk.String("molestiae"),
        PSUCorporateIDType: sdk.String("accusantium"),
        PSUDeviceID: sdk.String("porro"),
        PSUGeoLocation: sdk.String("eum"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PsuID: sdk.String("praesentium"),
        PSUIDType: sdk.String("consequuntur"),
        PSUIPAddress: sdk.String("137.36.174.166"),
        PSUIPPort: sdk.String("incidunt"),
        PSUUserAgent: sdk.String("atque"),
        RequestBody: &operations.UpdateSigningBasketPsuDataRequestBody{},
        Signature: sdk.String("explicabo"),
        TPPSignatureCertificate: sdk.String("minima"),
        XRequestID: "nisi",
        AuthorisationID: "123auth456",
        BasketID: "1234-basket-567",
    }, operations.UpdateSigningBasketPsuDataSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSigningBasketPsuData200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
