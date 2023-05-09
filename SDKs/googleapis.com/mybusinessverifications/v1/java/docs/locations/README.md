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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FetchVerificationOptionsRequest;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsFetchVerificationOptionsRequest req = new MybusinessverificationsLocationsFetchVerificationOptionsRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("quod"),
                                add("quod"),
                            }};
                            administrativeArea = "esse";
                            languageCode = "totam";
                            locality = "porro";
                            organization = "dolorum";
                            postalCode = "76515";
                            recipients = new String[]{{
                                add("optio"),
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                            }};
                            regionCode = "molestiae";
                            revision = 264555;
                            sortingCode = "qui";
                            sublocality = "impedit";
                        }};;
                    }};;
                    languageCode = "cum";
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            MybusinessverificationsLocationsFetchVerificationOptionsResponse res = sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req);

            if (res.fetchVerificationOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessverificationsLocationsGetVoiceOfMerchantState

Gets the VoiceOfMerchant state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest req = new MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse res = sdk.locations.mybusinessverificationsLocationsGetVoiceOfMerchantState(req);

            if (res.voiceOfMerchantState != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessverificationsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerificationsCompleteRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerificationsCompleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompleteVerificationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsVerificationsCompleteRequest req = new MybusinessverificationsLocationsVerificationsCompleteRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                completeVerificationRequest = new CompleteVerificationRequest() {{
                    pin = "ipsa";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            MybusinessverificationsLocationsVerificationsCompleteResponse res = sdk.locations.mybusinessverificationsLocationsVerificationsComplete(req);

            if (res.completeVerificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessverificationsLocationsVerificationsList

List verifications of a location, ordered by create time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerificationsListRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerificationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsVerificationsListRequest req = new MybusinessverificationsLocationsVerificationsListRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                pageSize = 988374L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            MybusinessverificationsLocationsVerificationsListResponse res = sdk.locations.mybusinessverificationsLocationsVerificationsList(req);

            if (res.listVerificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessverificationsLocationsVerify

Starts the verification process for a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerifyRequest;
import org.openapis.openapi.models.operations.MybusinessverificationsLocationsVerifyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.VerificationToken;
import org.openapis.openapi.models.shared.VerifyLocationRequest;
import org.openapis.openapi.models.shared.VerifyLocationRequestMethodEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessverificationsLocationsVerifyRequest req = new MybusinessverificationsLocationsVerifyRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                verifyLocationRequest = new VerifyLocationRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("mollitia"),
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }};
                            administrativeArea = "quam";
                            languageCode = "molestiae";
                            locality = "velit";
                            organization = "error";
                            postalCode = "31663";
                            recipients = new String[]{{
                                add("quo"),
                            }};
                            regionCode = "sequi";
                            revision = 949572;
                            sortingCode = "ipsam";
                            sublocality = "id";
                        }};;
                    }};;
                    emailAddress = "possimus";
                    languageCode = "aut";
                    mailerContact = "quasi";
                    method = VerifyLocationRequestMethodEnum.SMS;
                    phoneNumber = "temporibus";
                    token = new VerificationToken() {{
                        tokenString = "laborum";
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            MybusinessverificationsLocationsVerifyResponse res = sdk.locations.mybusinessverificationsLocationsVerify(req);

            if (res.verifyLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
