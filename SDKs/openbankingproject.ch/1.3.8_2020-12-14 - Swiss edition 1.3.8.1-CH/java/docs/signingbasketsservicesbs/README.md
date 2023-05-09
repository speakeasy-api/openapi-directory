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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSigningBasketRequest;
import org.openapis.openapi.models.operations.CreateSigningBasketResponse;
import org.openapis.openapi.models.operations.CreateSigningBasketSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.SigningBasket;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSigningBasketRequest req = new CreateSigningBasketRequest("224.170.176.49", "doloribus") {{
                consentID = "repudiandae";
                digest = "optio";
                psuAccept = "occaecati";
                psuAcceptCharset = "nemo";
                psuAcceptEncoding = "voluptate";
                psuAcceptLanguage = "blanditiis";
                psuCorporateID = "officia";
                psuCorporateIDType = "voluptas";
                psuDeviceID = "numquam";
                psuGeoLocation = "nemo";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "eius";
                psuIDType = "aspernatur";
                psuIPPort = "ducimus";
                psuUserAgent = "nesciunt";
                signature = "fuga";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://feline-boss.name";
                tppNotificationContentPreferred = "fugiat";
                tppNotificationURI = "dicta";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://cumbersome-curtain.com";
                tppSignatureCertificate = "cupiditate";
                signingBasket = new SigningBasket() {{
                    consentIds = new String[]{{
                        add("soluta"),
                        add("alias"),
                        add("omnis"),
                        add("eos"),
                    }};
                    paymentIds = new String[]{{
                        add("1234-wertiq-983"),
                        add("1234-wertiq-983"),
                        add("1234-wertiq-983"),
                    }};
                }};;
            }};            

            CreateSigningBasketResponse res = sdk.signingBasketsServiceSBS.createSigningBasket(req, new CreateSigningBasketSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.signingBasketResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            DeleteSigningBasketRequest req = new DeleteSigningBasketRequest("iste", "1234-basket-567") {{
                digest = "magni";
                psuAccept = "inventore";
                psuAcceptCharset = "fuga";
                psuAcceptEncoding = "accusamus";
                psuAcceptLanguage = "voluptatibus";
                psuDeviceID = "distinctio";
                psuGeoLocation = "omnis";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "84.129.205.76";
                psuIPPort = "temporibus";
                psuUserAgent = "quos";
                signature = "commodi";
                tppSignatureCertificate = "itaque";
            }};            

            DeleteSigningBasketResponse res = sdk.signingBasketsServiceSBS.deleteSigningBasket(req, new DeleteSigningBasketSecurity() {{
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

## getSigningBasket

Returns the content of a signing basket object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningBasketRequest;
import org.openapis.openapi.models.operations.GetSigningBasketResponse;
import org.openapis.openapi.models.operations.GetSigningBasketSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSigningBasketRequest req = new GetSigningBasketRequest("commodi", "1234-basket-567") {{
                digest = "totam";
                psuAccept = "earum";
                psuAcceptCharset = "modi";
                psuAcceptEncoding = "nam";
                psuAcceptLanguage = "vero";
                psuDeviceID = "voluptatem";
                psuGeoLocation = "ipsam";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "0.24.63.250";
                psuIPPort = "enim";
                psuUserAgent = "sint";
                signature = "nulla";
                tppSignatureCertificate = "deserunt";
            }};            

            GetSigningBasketResponse res = sdk.signingBasketsServiceSBS.getSigningBasket(req, new GetSigningBasketSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.signingBasketResponse200 != null) {
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
                digest = "nemo";
                psuAccept = "reprehenderit";
                psuAcceptCharset = "est";
                psuAcceptEncoding = "quis";
                psuAcceptLanguage = "sint";
                psuDeviceID = "accusamus";
                psuGeoLocation = "impedit";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "230.253.103.96";
                psuIPPort = "debitis";
                psuUserAgent = "delectus";
                signature = "quae";
                tppSignatureCertificate = "minus";
            }};            

            GetSigningBasketAuthorisationResponse res = sdk.signingBasketsServiceSBS.getSigningBasketAuthorisation(req, new GetSigningBasketAuthorisationSecurity() {{
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

            GetSigningBasketScaStatusRequest req = new GetSigningBasketScaStatusRequest("fuga", "123auth456", "1234-basket-567") {{
                digest = "laborum";
                psuAccept = "consectetur";
                psuAcceptCharset = "velit";
                psuAcceptEncoding = "atque";
                psuAcceptLanguage = "ipsum";
                psuDeviceID = "impedit";
                psuGeoLocation = "magni";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuIPAddress = "236.184.75.123";
                psuIPPort = "voluptate";
                psuUserAgent = "sequi";
                signature = "dignissimos";
                tppSignatureCertificate = "neque";
            }};            

            GetSigningBasketScaStatusResponse res = sdk.signingBasketsServiceSBS.getSigningBasketScaStatus(req, new GetSigningBasketScaStatusSecurity() {{
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

            GetSigningBasketStatusRequest req = new GetSigningBasketStatusRequest("quo", "1234-basket-567") {{
                digest = "deleniti";
                psuAccept = "quibusdam";
                psuAcceptCharset = "iure";
                psuAcceptEncoding = "odit";
                psuAcceptLanguage = "voluptatibus";
                psuCorporateID = "vel";
                psuCorporateIDType = "magnam";
                psuDeviceID = "quibusdam";
                psuGeoLocation = "inventore";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuId = "libero";
                psuIDType = "architecto";
                psuIPAddress = "249.40.200.77";
                psuIPPort = "velit";
                psuUserAgent = "illo";
                signature = "accusantium";
                tppSignatureCertificate = "vel";
            }};            

            GetSigningBasketStatusResponse res = sdk.signingBasketsServiceSBS.getSigningBasketStatus(req, new GetSigningBasketStatusSecurity() {{
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

            StartSigningBasketAuthorisationRequest req = new StartSigningBasketAuthorisationRequest("ea", "1234-basket-567") {{
                digest = "beatae";
                psuAccept = "vero";
                psuAcceptCharset = "excepturi";
                psuAcceptEncoding = "eum";
                psuAcceptLanguage = "velit";
                psuCorporateID = "ut";
                psuCorporateIDType = "perspiciatis";
                psuDeviceID = "earum";
                psuGeoLocation = "dicta";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "voluptatibus";
                psuIDType = "iste";
                psuIPAddress = "238.0.100.238";
                psuIPPort = "velit";
                psuUserAgent = "laborum";
                requestBody = new UpdatePsuAuthentication(                new PsuData() {{
                                    additionalEncryptedPassword = "dolor";
                                    additionalPassword = "iusto";
                                    encryptedPassword = "sit";
                                    password = "doloremque";
                                }};);;
                signature = "consequatur";
                tppNokRedirectURI = "https://vengeful-hair.net";
                tppNotificationContentPreferred = "voluptas";
                tppNotificationURI = "facilis";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://ornery-purchase.name";
                tppSignatureCertificate = "a";
            }};            

            StartSigningBasketAuthorisationResponse res = sdk.signingBasketsServiceSBS.startSigningBasketAuthorisation(req, new StartSigningBasketAuthorisationSecurity() {{
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

            UpdateSigningBasketPsuDataRequest req = new UpdateSigningBasketPsuDataRequest("voluptate", "123auth456", "1234-basket-567") {{
                digest = "ullam";
                psuAccept = "unde";
                psuAcceptCharset = "necessitatibus";
                psuAcceptEncoding = "animi";
                psuAcceptLanguage = "impedit";
                psuCorporateID = "ipsam";
                psuCorporateIDType = "corporis";
                psuDeviceID = "est";
                psuGeoLocation = "error";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuId = "labore";
                psuIDType = "veritatis";
                psuIPAddress = "223.59.28.20";
                psuIPPort = "dolorem";
                psuUserAgent = "ad";
                requestBody = "iste";
                signature = "ex";
                tppSignatureCertificate = "nemo";
            }};            

            UpdateSigningBasketPsuDataResponse res = sdk.signingBasketsServiceSBS.updateSigningBasketPsuData(req, new UpdateSigningBasketPsuDataSecurity() {{
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
