# SigningBasketsServiceSBS

## Overview

Signing basket methods are used for authorising several transactions and resp. or consents with one SCA operation.


### Available Operations

* [CreateSigningBasket](#createsigningbasket) - Create a signing basket resource
* [DeleteSigningBasket](#deletesigningbasket) - Delete the signing basket
* [GetSigningBasket](#getsigningbasket) - Returns the content of an signing basket object
* [GetSigningBasketAuthorisation](#getsigningbasketauthorisation) - Get signing basket authorisation sub-resources request
* [GetSigningBasketScaStatus](#getsigningbasketscastatus) - Read the SCA status of the signing basket authorisation
* [GetSigningBasketStatus](#getsigningbasketstatus) - Read the status of the signing basket
* [StartSigningBasketAuthorisation](#startsigningbasketauthorisation) - Start the authorisation process for a signing basket
* [UpdateSigningBasketPsuData](#updatesigningbasketpsudata) - Update PSU data for signing basket

## CreateSigningBasket

Create a signing basket resource for authorising several transactions with one SCA method. 
The resource identifications of these transactions are contained in the payload of this access method


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
    res, err := s.SigningBasketsServiceSBS.CreateSigningBasket(ctx, operations.CreateSigningBasketRequest{
        ConsentID: sdk.String("reprehenderit"),
        Digest: sdk.String("facere"),
        PSUAccept: sdk.String("fuga"),
        PSUAcceptCharset: sdk.String("praesentium"),
        PSUAcceptEncoding: sdk.String("mollitia"),
        PSUAcceptLanguage: sdk.String("veniam"),
        PSUCorporateID: sdk.String("voluptatem"),
        PSUCorporateIDType: sdk.String("quisquam"),
        PSUDeviceID: sdk.String("repudiandae"),
        PSUGeoLocation: sdk.String("quasi"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPut.ToPointer(),
        PsuID: sdk.String("reprehenderit"),
        PSUIDType: sdk.String("asperiores"),
        PSUIPAddress: "133.98.177.206",
        PSUIPPort: sdk.String("et"),
        PSUUserAgent: sdk.String("esse"),
        Signature: sdk.String("amet"),
        TPPExplicitAuthorisationPreferred: sdk.Bool(false),
        TPPNokRedirectURI: sdk.String("https://illustrious-manner.name"),
        TPPNotificationContentPreferred: sdk.String("officiis"),
        TPPNotificationURI: sdk.String("officiis"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://personal-extremist.com"),
        TPPSignatureCertificate: sdk.String("ex"),
        XRequestID: "maiores",
        SigningBasket: &shared.SigningBasket{
            ConsentIds: []string{
                "at",
                "error",
                "blanditiis",
            },
            PaymentIds: []string{
                "1234-wertiq-983",
                "1234-wertiq-983",
            },
        },
    }, operations.CreateSigningBasketSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SigningBasketResponse201 != nil {
        // handle response
    }
}
```

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
    res, err := s.SigningBasketsServiceSBS.DeleteSigningBasket(ctx, operations.DeleteSigningBasketRequest{
        Digest: sdk.String("repudiandae"),
        PSUAccept: sdk.String("atque"),
        PSUAcceptCharset: sdk.String("atque"),
        PSUAcceptEncoding: sdk.String("sunt"),
        PSUAcceptLanguage: sdk.String("recusandae"),
        PSUDeviceID: sdk.String("dolorum"),
        PSUGeoLocation: sdk.String("repellendus"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("247.11.235.29"),
        PSUIPPort: sdk.String("accusantium"),
        PSUUserAgent: sdk.String("beatae"),
        Signature: sdk.String("dolores"),
        TPPSignatureCertificate: sdk.String("enim"),
        XRequestID: "laboriosam",
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

## GetSigningBasket

Returns the content of a signing basket object.

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
    res, err := s.SigningBasketsServiceSBS.GetSigningBasket(ctx, operations.GetSigningBasketRequest{
        Digest: sdk.String("velit"),
        PSUAccept: sdk.String("a"),
        PSUAcceptCharset: sdk.String("molestias"),
        PSUAcceptEncoding: sdk.String("magnam"),
        PSUAcceptLanguage: sdk.String("saepe"),
        PSUDeviceID: sdk.String("consequuntur"),
        PSUGeoLocation: sdk.String("occaecati"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PSUIPAddress: sdk.String("153.114.60.232"),
        PSUIPPort: sdk.String("occaecati"),
        PSUUserAgent: sdk.String("consequuntur"),
        Signature: sdk.String("fugit"),
        TPPSignatureCertificate: sdk.String("id"),
        XRequestID: "quis",
        BasketID: "1234-basket-567",
    }, operations.GetSigningBasketSecurity{
        BearerAuthOAuth: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SigningBasketResponse200 != nil {
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
    res, err := s.SigningBasketsServiceSBS.GetSigningBasketAuthorisation(ctx, operations.GetSigningBasketAuthorisationRequest{
        Digest: sdk.String("reprehenderit"),
        PSUAccept: sdk.String("error"),
        PSUAcceptCharset: sdk.String("illo"),
        PSUAcceptEncoding: sdk.String("corporis"),
        PSUAcceptLanguage: sdk.String("quidem"),
        PSUDeviceID: sdk.String("eveniet"),
        PSUGeoLocation: sdk.String("non"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PSUIPAddress: sdk.String("10.111.15.132"),
        PSUIPPort: sdk.String("quae"),
        PSUUserAgent: sdk.String("molestiae"),
        Signature: sdk.String("eveniet"),
        TPPSignatureCertificate: sdk.String("qui"),
        XRequestID: "cum",
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
    res, err := s.SigningBasketsServiceSBS.GetSigningBasketScaStatus(ctx, operations.GetSigningBasketScaStatusRequest{
        Digest: sdk.String("iure"),
        PSUAccept: sdk.String("necessitatibus"),
        PSUAcceptCharset: sdk.String("ratione"),
        PSUAcceptEncoding: sdk.String("laborum"),
        PSUAcceptLanguage: sdk.String("distinctio"),
        PSUDeviceID: sdk.String("voluptatum"),
        PSUGeoLocation: sdk.String("rem"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPost.ToPointer(),
        PSUIPAddress: sdk.String("82.255.0.92"),
        PSUIPPort: sdk.String("perspiciatis"),
        PSUUserAgent: sdk.String("nihil"),
        Signature: sdk.String("mollitia"),
        TPPSignatureCertificate: sdk.String("voluptas"),
        XRequestID: "alias",
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
    res, err := s.SigningBasketsServiceSBS.GetSigningBasketStatus(ctx, operations.GetSigningBasketStatusRequest{
        Digest: sdk.String("maiores"),
        PSUAccept: sdk.String("reiciendis"),
        PSUAcceptCharset: sdk.String("dolores"),
        PSUAcceptEncoding: sdk.String("id"),
        PSUAcceptLanguage: sdk.String("minima"),
        PSUCorporateID: sdk.String("dolore"),
        PSUCorporateIDType: sdk.String("dolorum"),
        PSUDeviceID: sdk.String("nesciunt"),
        PSUGeoLocation: sdk.String("quae"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumDelete.ToPointer(),
        PsuID: sdk.String("omnis"),
        PSUIDType: sdk.String("quaerat"),
        PSUIPAddress: sdk.String("122.103.72.162"),
        PSUIPPort: sdk.String("adipisci"),
        PSUUserAgent: sdk.String("debitis"),
        Signature: sdk.String("laudantium"),
        TPPSignatureCertificate: sdk.String("eum"),
        XRequestID: "nemo",
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
    res, err := s.SigningBasketsServiceSBS.StartSigningBasketAuthorisation(ctx, operations.StartSigningBasketAuthorisationRequest{
        Digest: sdk.String("recusandae"),
        PSUAccept: sdk.String("esse"),
        PSUAcceptCharset: sdk.String("provident"),
        PSUAcceptEncoding: sdk.String("quis"),
        PSUAcceptLanguage: sdk.String("eum"),
        PSUCorporateID: sdk.String("reiciendis"),
        PSUCorporateIDType: sdk.String("provident"),
        PSUDeviceID: sdk.String("aspernatur"),
        PSUGeoLocation: sdk.String("ullam"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumGet.ToPointer(),
        PsuID: sdk.String("animi"),
        PSUIDType: sdk.String("nostrum"),
        PSUIPAddress: sdk.String("166.151.210.168"),
        PSUIPPort: sdk.String("ex"),
        PSUUserAgent: sdk.String("aliquid"),
        RequestBody: &operations.StartSigningBasketAuthorisationRequestBody{},
        Signature: sdk.String("accusantium"),
        TPPNokRedirectURI: sdk.String("https://worse-fledgling.info"),
        TPPNotificationContentPreferred: sdk.String("nam"),
        TPPNotificationURI: sdk.String("earum"),
        TPPRedirectPreferred: sdk.Bool(false),
        TPPRedirectURI: sdk.String("https://quick-witted-slate.biz"),
        TPPSignatureCertificate: sdk.String("voluptatibus"),
        XRequestID: "molestias",
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
    res, err := s.SigningBasketsServiceSBS.UpdateSigningBasketPsuData(ctx, operations.UpdateSigningBasketPsuDataRequest{
        Digest: sdk.String("officiis"),
        PSUAccept: sdk.String("sapiente"),
        PSUAcceptCharset: sdk.String("cumque"),
        PSUAcceptEncoding: sdk.String("vitae"),
        PSUAcceptLanguage: sdk.String("rerum"),
        PSUCorporateID: sdk.String("tempora"),
        PSUCorporateIDType: sdk.String("quis"),
        PSUDeviceID: sdk.String("inventore"),
        PSUGeoLocation: sdk.String("fugit"),
        PSUHTTPMethod: shared.PSUHTTPMethodEnumPatch.ToPointer(),
        PsuID: sdk.String("quae"),
        PSUIDType: sdk.String("perferendis"),
        PSUIPAddress: sdk.String("61.35.110.66"),
        PSUIPPort: sdk.String("rem"),
        PSUUserAgent: sdk.String("at"),
        RequestBody: &operations.UpdateSigningBasketPsuDataRequestBody{},
        Signature: sdk.String("impedit"),
        TPPSignatureCertificate: sdk.String("eos"),
        XRequestID: "sapiente",
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
