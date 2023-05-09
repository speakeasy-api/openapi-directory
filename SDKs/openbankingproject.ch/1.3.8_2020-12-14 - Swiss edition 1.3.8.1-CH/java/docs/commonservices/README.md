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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSigningBasketRequest;
import org.openapis.openapi.models.operations.DeleteSigningBasketResponse;
import org.openapis.openapi.models.operations.DeleteSigningBasketSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSigningBasketRequest req = new DeleteSigningBasketRequest("porro", "1234-basket-567") {{
                digest = "consequuntur";
                psuAccept = "blanditiis";
                psuAcceptCharset = "error";
                psuAcceptEncoding = "eaque";
                psuAcceptLanguage = "occaecati";
                psuDeviceID = "rerum";
                psuGeoLocation = "adipisci";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "239.68.157.173";
                psuIPPort = "deleniti";
                psuUserAgent = "pariatur";
                signature = "provident";
                tppSignatureCertificate = "nobis";
            }};            

            DeleteSigningBasketResponse res = sdk.commonServices.deleteSigningBasket(req, new DeleteSigningBasketSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsentScaStatusRequest;
import org.openapis.openapi.models.operations.GetConsentScaStatusResponse;
import org.openapis.openapi.models.operations.GetConsentScaStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConsentScaStatusRequest req = new GetConsentScaStatusRequest("libero", "123auth456", "delectus") {{
                digest = "quaerat";
                psuAccept = "quos";
                psuAcceptCharset = "aliquid";
                psuAcceptEncoding = "dolorem";
                psuAcceptLanguage = "dolorem";
                psuDeviceID = "dolor";
                psuGeoLocation = "qui";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "241.145.189.115";
                psuIPPort = "dignissimos";
                psuUserAgent = "reiciendis";
                signature = "amet";
                tppSignatureCertificate = "dolorum";
            }};            

            GetConsentScaStatusResponse res = sdk.commonServices.getConsentScaStatus(req, new GetConsentScaStatusSecurity() {{
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

            GetPaymentCancellationScaStatusRequest req = new GetPaymentCancellationScaStatusRequest("numquam", "123auth456", PaymentProductEnum.DOMESTIC_SWISS_CREDIT_TRANSFERS_ISR, PaymentServiceEnum.PAYMENTS, "1234-wertiq-983") {{
                digest = "ipsa";
                psuAccept = "iure";
                psuAcceptCharset = "odio";
                psuAcceptEncoding = "quaerat";
                psuAcceptLanguage = "accusamus";
                psuDeviceID = "quidem";
                psuGeoLocation = "voluptatibus";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "158.45.138.6";
                psuIPPort = "fugiat";
                psuUserAgent = "ab";
                signature = "soluta";
                tppSignatureCertificate = "dolorum";
            }};            

            GetPaymentCancellationScaStatusResponse res = sdk.commonServices.getPaymentCancellationScaStatus(req, new GetPaymentCancellationScaStatusSecurity() {{
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

            GetPaymentInitiationAuthorisationRequest req = new GetPaymentInitiationAuthorisationRequest("iusto", PaymentProductEnum.SWISS_SEPA_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "deleniti";
                psuAccept = "omnis";
                psuAcceptCharset = "necessitatibus";
                psuAcceptEncoding = "distinctio";
                psuAcceptLanguage = "asperiores";
                psuDeviceID = "nihil";
                psuGeoLocation = "ipsum";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "169.232.67.35";
                psuIPPort = "perferendis";
                psuUserAgent = "amet";
                signature = "optio";
                tppSignatureCertificate = "accusamus";
            }};            

            GetPaymentInitiationAuthorisationResponse res = sdk.commonServices.getPaymentInitiationAuthorisation(req, new GetPaymentInitiationAuthorisationSecurity() {{
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

            GetPaymentInitiationScaStatusRequest req = new GetPaymentInitiationScaStatusRequest("ad", "123auth456", PaymentProductEnum.PAIN001_SWISS_SIX_CREDIT_TRANSFERS, PaymentServiceEnum.BULK_PAYMENTS, "1234-wertiq-983") {{
                digest = "deserunt";
                psuAccept = "provident";
                psuAcceptCharset = "minima";
                psuAcceptEncoding = "repellendus";
                psuAcceptLanguage = "totam";
                psuDeviceID = "similique";
                psuGeoLocation = "alias";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "79.70.108.204";
                psuIPPort = "officiis";
                psuUserAgent = "qui";
                signature = "dolorum";
                tppSignatureCertificate = "a";
            }};            

            GetPaymentInitiationScaStatusResponse res = sdk.commonServices.getPaymentInitiationScaStatus(req, new GetPaymentInitiationScaStatusSecurity() {{
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

## getSigningBasketAuthorisation

Read a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningBasketAuthorisationRequest;
import org.openapis.openapi.models.operations.GetSigningBasketAuthorisationResponse;
import org.openapis.openapi.models.operations.GetSigningBasketAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigningBasketAuthorisationRequest req = new GetSigningBasketAuthorisationRequest("esse", "1234-basket-567") {{
                digest = "harum";
                psuAccept = "iusto";
                psuAcceptCharset = "ipsum";
                psuAcceptEncoding = "quisquam";
                psuAcceptLanguage = "tenetur";
                psuDeviceID = "amet";
                psuGeoLocation = "tempore";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "65.80.54.245";
                psuIPPort = "totam";
                psuUserAgent = "nihil";
                signature = "sit";
                tppSignatureCertificate = "expedita";
            }};            

            GetSigningBasketAuthorisationResponse res = sdk.commonServices.getSigningBasketAuthorisation(req, new GetSigningBasketAuthorisationSecurity() {{
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

## getSigningBasketScaStatus

This method returns the SCA status of a signing basket's authorisation sub-resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningBasketScaStatusRequest;
import org.openapis.openapi.models.operations.GetSigningBasketScaStatusResponse;
import org.openapis.openapi.models.operations.GetSigningBasketScaStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigningBasketScaStatusRequest req = new GetSigningBasketScaStatusRequest("neque", "123auth456", "1234-basket-567") {{
                digest = "sed";
                psuAccept = "vel";
                psuAcceptCharset = "libero";
                psuAcceptEncoding = "voluptas";
                psuAcceptLanguage = "deserunt";
                psuDeviceID = "quam";
                psuGeoLocation = "ipsum";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "47.150.206.221";
                psuIPPort = "soluta";
                psuUserAgent = "dicta";
                signature = "laborum";
                tppSignatureCertificate = "totam";
            }};            

            GetSigningBasketScaStatusResponse res = sdk.commonServices.getSigningBasketScaStatus(req, new GetSigningBasketScaStatusSecurity() {{
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

## getSigningBasketStatus

Returns the status of a signing basket object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningBasketStatusRequest;
import org.openapis.openapi.models.operations.GetSigningBasketStatusResponse;
import org.openapis.openapi.models.operations.GetSigningBasketStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigningBasketStatusRequest req = new GetSigningBasketStatusRequest("incidunt", "1234-basket-567") {{
                digest = "aspernatur";
                psuAccept = "dolores";
                psuAcceptCharset = "distinctio";
                psuAcceptEncoding = "facilis";
                psuAcceptLanguage = "aliquid";
                psuCorporateID = "quam";
                psuCorporateIDType = "molestias";
                psuDeviceID = "temporibus";
                psuGeoLocation = "qui";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuId = "fugit";
                psuIDType = "magni";
                psuIPAddress = "124.31.91.184";
                psuIPPort = "hic";
                psuUserAgent = "voluptatem";
                signature = "cumque";
                tppSignatureCertificate = "soluta";
            }};            

            GetSigningBasketStatusResponse res = sdk.commonServices.getSigningBasketStatus(req, new GetSigningBasketStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.signingBasketStatusResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartConsentAuthorisationRequest;
import org.openapis.openapi.models.operations.StartConsentAuthorisationResponse;
import org.openapis.openapi.models.operations.StartConsentAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartConsentAuthorisationRequest req = new StartConsentAuthorisationRequest("nobis", "et") {{
                digest = "saepe";
                psuAccept = "ipsum";
                psuAcceptCharset = "veritatis";
                psuAcceptEncoding = "nobis";
                psuAcceptLanguage = "quos";
                psuCorporateID = "tempore";
                psuCorporateIDType = "cupiditate";
                psuDeviceID = "aperiam";
                psuGeoLocation = "delectus";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuId = "dolore";
                psuIDType = "labore";
                psuIPAddress = "61.173.25.16";
                psuIPPort = "aut";
                psuUserAgent = "quas";
                requestBody = new TransactionAuthorisation("consequatur");;
                signature = "est";
                tppNokRedirectURI = "https://specific-wingman.biz";
                tppNotificationContentPreferred = "facilis";
                tppNotificationURI = "cupiditate";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://beautiful-lifetime.info";
                tppSignatureCertificate = "occaecati";
            }};            

            StartConsentAuthorisationResponse res = sdk.commonServices.startConsentAuthorisation(req, new StartConsentAuthorisationSecurity() {{
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

            StartPaymentAuthorisationRequest req = new StartPaymentAuthorisationRequest("voluptatibus", PaymentProductEnum.PAIN001_CROSS_BORDER_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "omnis";
                psuAccept = "quis";
                psuAcceptCharset = "ipsum";
                psuAcceptEncoding = "delectus";
                psuAcceptLanguage = "voluptate";
                psuCorporateID = "consectetur";
                psuCorporateIDType = "vero";
                psuDeviceID = "tenetur";
                psuGeoLocation = "dignissimos";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "distinctio";
                psuIDType = "quod";
                psuIPAddress = "124.161.181.223";
                psuIPPort = "ducimus";
                psuUserAgent = "dolore";
                requestBody = new TransactionAuthorisation("illum");;
                signature = "sequi";
                tppNokRedirectURI = "https://sociable-affidavit.org";
                tppNotificationContentPreferred = "exercitationem";
                tppNotificationURI = "nulla";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://sorrowful-wild.org";
                tppSignatureCertificate = "iusto";
            }};            

            StartPaymentAuthorisationResponse res = sdk.commonServices.startPaymentAuthorisation(req, new StartPaymentAuthorisationSecurity() {{
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

            StartPaymentInitiationCancellationAuthorisationRequest req = new StartPaymentInitiationCancellationAuthorisationRequest("eligendi", PaymentProductEnum.SWISS_SEPA_CREDIT_TRANSFERS, PaymentServiceEnum.PAYMENTS, "1234-wertiq-983") {{
                digest = "officia";
                psuAccept = "tempora";
                psuAcceptCharset = "ipsam";
                psuAcceptEncoding = "ea";
                psuAcceptLanguage = "aspernatur";
                psuCorporateID = "vel";
                psuCorporateIDType = "possimus";
                psuDeviceID = "magnam";
                psuGeoLocation = "ratione";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "laudantium";
                psuIDType = "dicta";
                psuIPAddress = "57.251.25.103";
                psuIPPort = "nulla";
                psuUserAgent = "excepturi";
                requestBody = new TransactionAuthorisation("nostrum");;
                signature = "sapiente";
                tppNokRedirectURI = "https://untrue-handicap.net";
                tppNotificationContentPreferred = "corporis";
                tppNotificationURI = "veniam";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://bogus-elite.info";
                tppSignatureCertificate = "quo";
            }};            

            StartPaymentInitiationCancellationAuthorisationResponse res = sdk.commonServices.startPaymentInitiationCancellationAuthorisation(req, new StartPaymentInitiationCancellationAuthorisationSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSigningBasketAuthorisationRequest;
import org.openapis.openapi.models.operations.StartSigningBasketAuthorisationResponse;
import org.openapis.openapi.models.operations.StartSigningBasketAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartSigningBasketAuthorisationRequest req = new StartSigningBasketAuthorisationRequest("consectetur", "1234-basket-567") {{
                digest = "recusandae";
                psuAccept = "aspernatur";
                psuAcceptCharset = "minima";
                psuAcceptEncoding = "eaque";
                psuAcceptLanguage = "a";
                psuCorporateID = "libero";
                psuCorporateIDType = "aut";
                psuDeviceID = "aut";
                psuGeoLocation = "deleniti";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "aliquam";
                psuIDType = "fugit";
                psuIPAddress = "226.20.64.22";
                psuIPPort = "dolorum";
                psuUserAgent = "laborum";
                requestBody = new TransactionAuthorisation("velit");;
                signature = "eum";
                tppNokRedirectURI = "http://silky-meteorology.net";
                tppNotificationContentPreferred = "nulla";
                tppNotificationURI = "voluptas";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://bulky-disposer.biz";
                tppSignatureCertificate = "explicabo";
            }};            

            StartSigningBasketAuthorisationResponse res = sdk.commonServices.startSigningBasketAuthorisation(req, new StartSigningBasketAuthorisationSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataRequest;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataResponse;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataSecurity;
import org.openapis.openapi.models.shared.AuthorisationConfirmation;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConsentsPsuDataRequest req = new UpdateConsentsPsuDataRequest("provident", "123auth456", "ipsa") {{
                digest = "molestiae";
                psuAccept = "magnam";
                psuAcceptCharset = "odio";
                psuAcceptEncoding = "eius";
                psuAcceptLanguage = "esse";
                psuCorporateID = "esse";
                psuCorporateIDType = "rem";
                psuDeviceID = "fuga";
                psuGeoLocation = "reprehenderit";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "fugiat";
                psuIDType = "ut";
                psuIPAddress = "110.97.211.46";
                psuIPPort = "praesentium";
                psuUserAgent = "quisquam";
                requestBody = "ipsa";
                signature = "id";
                tppSignatureCertificate = "quidem";
            }};            

            UpdateConsentsPsuDataResponse res = sdk.commonServices.updateConsentsPsuData(req, new UpdateConsentsPsuDataSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.updateConsentsPsuData200ApplicationJSONOneOf != null) {
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

            UpdatePaymentCancellationPsuDataRequest req = new UpdatePaymentCancellationPsuDataRequest("neque", "123auth456", PaymentProductEnum.PAIN001_CROSS_BORDER_CREDIT_TRANSFERS, PaymentServiceEnum.PERIODIC_PAYMENTS, "1234-wertiq-983") {{
                digest = "quo";
                psuAccept = "fuga";
                psuAcceptCharset = "eius";
                psuAcceptEncoding = "eos";
                psuAcceptLanguage = "voluptas";
                psuCorporateID = "ab";
                psuCorporateIDType = "cupiditate";
                psuDeviceID = "consequatur";
                psuGeoLocation = "tempora";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "ipsam";
                psuIDType = "aspernatur";
                psuIPAddress = "50.199.117.236";
                psuIPPort = "aperiam";
                psuUserAgent = "distinctio";
                requestBody = new TransactionAuthorisation("dignissimos");;
                signature = "inventore";
                tppSignatureCertificate = "nihil";
            }};            

            UpdatePaymentCancellationPsuDataResponse res = sdk.commonServices.updatePaymentCancellationPsuData(req, new UpdatePaymentCancellationPsuDataSecurity() {{
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

            UpdatePaymentPsuDataRequest req = new UpdatePaymentPsuDataRequest("totam", "123auth456", PaymentProductEnum.PAIN001_CROSS_BORDER_CREDIT_TRANSFERS, PaymentServiceEnum.PAYMENTS, "1234-wertiq-983") {{
                digest = "odio";
                psuAccept = "occaecati";
                psuAcceptCharset = "commodi";
                psuAcceptEncoding = "sapiente";
                psuAcceptLanguage = "dolores";
                psuCorporateID = "deserunt";
                psuCorporateIDType = "molestiae";
                psuDeviceID = "accusantium";
                psuGeoLocation = "porro";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "quas";
                psuIDType = "praesentium";
                psuIPAddress = "40.137.36.174";
                psuIPPort = "mollitia";
                psuUserAgent = "incidunt";
                requestBody = new SelectPsuAuthenticationMethod("myAuthenticationID");;
                signature = "explicabo";
                tppSignatureCertificate = "minima";
            }};            

            UpdatePaymentPsuDataResponse res = sdk.commonServices.updatePaymentPsuData(req, new UpdatePaymentPsuDataSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSigningBasketPsuDataRequest;
import org.openapis.openapi.models.operations.UpdateSigningBasketPsuDataResponse;
import org.openapis.openapi.models.operations.UpdateSigningBasketPsuDataSecurity;
import org.openapis.openapi.models.shared.AuthorisationConfirmation;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSigningBasketPsuDataRequest req = new UpdateSigningBasketPsuDataRequest("nisi", "123auth456", "1234-basket-567") {{
                digest = "fugit";
                psuAccept = "sapiente";
                psuAcceptCharset = "consequuntur";
                psuAcceptEncoding = "ratione";
                psuAcceptLanguage = "explicabo";
                psuCorporateID = "saepe";
                psuCorporateIDType = "occaecati";
                psuDeviceID = "atque";
                psuGeoLocation = "et";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "eveniet";
                psuIDType = "accusamus";
                psuIPAddress = "21.117.204.185";
                psuIPPort = "vero";
                psuUserAgent = "aliquid";
                requestBody = "saepe";
                signature = "vel";
                tppSignatureCertificate = "harum";
            }};            

            UpdateSigningBasketPsuDataResponse res = sdk.commonServices.updateSigningBasketPsuData(req, new UpdateSigningBasketPsuDataSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.updateSigningBasketPsuData200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
