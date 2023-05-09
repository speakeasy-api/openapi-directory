# enterprises

### Available Operations

* [androidenterpriseEnterprisesAcknowledgeNotificationSet](#androidenterpriseenterprisesacknowledgenotificationset) - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
* [androidenterpriseEnterprisesCompleteSignup](#androidenterpriseenterprisescompletesignup) - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
* [androidenterpriseEnterprisesCreateEnrollmentToken](#androidenterpriseenterprisescreateenrollmenttoken) - Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
* [androidenterpriseEnterprisesCreateWebToken](#androidenterpriseenterprisescreatewebtoken) - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
* [androidenterpriseEnterprisesEnroll](#androidenterpriseenterprisesenroll) - Enrolls an enterprise with the calling EMM.
* [androidenterpriseEnterprisesGenerateSignupUrl](#androidenterpriseenterprisesgeneratesignupurl) - Generates a sign-up URL.
* [androidenterpriseEnterprisesGet](#androidenterpriseenterprisesget) - Retrieves the name and domain of an enterprise.
* [androidenterpriseEnterprisesGetServiceAccount](#androidenterpriseenterprisesgetserviceaccount) - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
* [androidenterpriseEnterprisesGetStoreLayout](#androidenterpriseenterprisesgetstorelayout) - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
* [androidenterpriseEnterprisesList](#androidenterpriseenterpriseslist) - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
* [androidenterpriseEnterprisesPullNotificationSet](#androidenterpriseenterprisespullnotificationset) - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
* [androidenterpriseEnterprisesSendTestPushNotification](#androidenterpriseenterprisessendtestpushnotification) - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
* [androidenterpriseEnterprisesSetAccount](#androidenterpriseenterprisessetaccount) - Sets the account that will be used to authenticate to the API as the enterprise.
* [androidenterpriseEnterprisesSetStoreLayout](#androidenterpriseenterprisessetstorelayout) - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
* [androidenterpriseEnterprisesUnenroll](#androidenterpriseenterprisesunenroll) - Unenrolls an enterprise from the calling EMM.

## androidenterpriseEnterprisesAcknowledgeNotificationSet

Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest req = new AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "sapiente";
                key = "totam";
                notificationSetId = "nihil";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "neque";
                uploadProtocol = "sed";
            }};            

            AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse res = sdk.enterprises.androidenterpriseEnterprisesAcknowledgeNotificationSet(req, new AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity("vel", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## androidenterpriseEnterprisesCompleteSignup

Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCompleteSignupRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCompleteSignupResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCompleteSignupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesCompleteSignupRequest req = new AndroidenterpriseEnterprisesCompleteSignupRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                completionToken = "incidunt";
                enterpriseToken = "qui";
                fields = "cupiditate";
                key = "maxime";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "dicta";
                uploadProtocol = "laborum";
            }};            

            AndroidenterpriseEnterprisesCompleteSignupResponse res = sdk.enterprises.androidenterpriseEnterprisesCompleteSignup(req, new AndroidenterpriseEnterprisesCompleteSignupSecurity("totam", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprise != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesCreateEnrollmentToken

Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest req = new AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                deviceType = AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum.DEDICATED_DEVICE;
                fields = "molestias";
                key = "temporibus";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "fugit";
                uploadProtocol = "magni";
            }};            

            AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse res = sdk.enterprises.androidenterpriseEnterprisesCreateEnrollmentToken(req, new AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity("odio", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createEnrollmentTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesCreateWebToken

Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateWebTokenRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateWebTokenResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesCreateWebTokenSecurity;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpec;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecManagedConfigurations;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecPermissionEnum;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecPlaySearch;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecPrivateApps;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecStoreBuilder;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecWebApps;
import org.openapis.openapi.models.shared.AdministratorWebTokenSpecZeroTouch;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesCreateWebTokenRequest req = new AndroidenterpriseEnterprisesCreateWebTokenRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                administratorWebTokenSpec = new AdministratorWebTokenSpec() {{
                    managedConfigurations = new AdministratorWebTokenSpecManagedConfigurations() {{
                        enabled = false;
                    }};;
                    parent = "hic";
                    permission = new org.openapis.openapi.models.shared.AdministratorWebTokenSpecPermissionEnum[]{{
                        add(AdministratorWebTokenSpecPermissionEnum.MANAGE_MCM),
                    }};
                    playSearch = new AdministratorWebTokenSpecPlaySearch() {{
                        approveApps = false;
                        enabled = false;
                    }};;
                    privateApps = new AdministratorWebTokenSpecPrivateApps() {{
                        enabled = false;
                    }};;
                    storeBuilder = new AdministratorWebTokenSpecStoreBuilder() {{
                        enabled = false;
                    }};;
                    webApps = new AdministratorWebTokenSpecWebApps() {{
                        enabled = false;
                    }};;
                    zeroTouch = new AdministratorWebTokenSpecZeroTouch() {{
                        enabled = false;
                    }};;
                }};;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "saepe";
                key = "ipsum";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "quos";
                uploadProtocol = "tempore";
            }};            

            AndroidenterpriseEnterprisesCreateWebTokenResponse res = sdk.enterprises.androidenterpriseEnterprisesCreateWebToken(req, new AndroidenterpriseEnterprisesCreateWebTokenSecurity("cupiditate", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.administratorWebToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesEnroll

Enrolls an enterprise with the calling EMM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesEnrollRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesEnrollResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesEnrollSecurity;
import org.openapis.openapi.models.shared.Administrator;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Enterprise;
import org.openapis.openapi.models.shared.GoogleAuthenticationSettings;
import org.openapis.openapi.models.shared.GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum;
import org.openapis.openapi.models.shared.GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesEnrollRequest req = new AndroidenterpriseEnterprisesEnrollRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                enterprise = new Enterprise() {{
                    administrator = new org.openapis.openapi.models.shared.Administrator[]{{
                        add(new Administrator() {{
                            email = "Dayna6@gmail.com";
                        }}),
                        add(new Administrator() {{
                            email = "Kayleigh66@gmail.com";
                        }}),
                    }};
                    googleAuthenticationSettings = new GoogleAuthenticationSettings() {{
                        dedicatedDevicesAllowed = GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum.ALLOWED;
                        googleAuthenticationRequired = GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum.REQUIRED;
                    }};;
                    id = "f4b92187-9fce-4953-b73e-f7fbc7abd74d";
                    name = "Earl Mosciski DVM";
                    primaryDomain = "exercitationem";
                }};;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "maiores";
                key = "doloribus";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "ducimus";
                uploadProtocol = "alias";
            }};            

            AndroidenterpriseEnterprisesEnrollResponse res = sdk.enterprises.androidenterpriseEnterprisesEnroll(req, new AndroidenterpriseEnterprisesEnrollSecurity("officia", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprise != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesGenerateSignupUrl

Generates a sign-up URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGenerateSignupUrlRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGenerateSignupUrlResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGenerateSignupUrlSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesGenerateSignupUrlRequest req = new AndroidenterpriseEnterprisesGenerateSignupUrlRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "vel";
                callbackUrl = "possimus";
                fields = "magnam";
                key = "ratione";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "dicta";
                uploadProtocol = "dolor";
            }};            

            AndroidenterpriseEnterprisesGenerateSignupUrlResponse res = sdk.enterprises.androidenterpriseEnterprisesGenerateSignupUrl(req, new AndroidenterpriseEnterprisesGenerateSignupUrlSecurity("maiores", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.signupInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesGet

Retrieves the name and domain of an enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesGetRequest req = new AndroidenterpriseEnterprisesGetRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "sapiente";
                key = "quisquam";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "impedit";
                uploadProtocol = "corporis";
            }};            

            AndroidenterpriseEnterprisesGetResponse res = sdk.enterprises.androidenterpriseEnterprisesGet(req, new AndroidenterpriseEnterprisesGetSecurity("veniam", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprise != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesGetServiceAccount

Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetServiceAccountRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetServiceAccountResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetServiceAccountSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesGetServiceAccountRequest req = new AndroidenterpriseEnterprisesGetServiceAccountRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "recusandae";
                key = "aspernatur";
                keyType = AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum.GOOGLE_CREDENTIALS;
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "libero";
                uploadProtocol = "aut";
            }};            

            AndroidenterpriseEnterprisesGetServiceAccountResponse res = sdk.enterprises.androidenterpriseEnterprisesGetServiceAccount(req, new AndroidenterpriseEnterprisesGetServiceAccountSecurity("aut", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.serviceAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesGetStoreLayout

Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetStoreLayoutRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetStoreLayoutResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesGetStoreLayoutSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesGetStoreLayoutRequest req = new AndroidenterpriseEnterprisesGetStoreLayoutRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "non";
                key = "et";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "placeat";
                uploadProtocol = "velit";
            }};            

            AndroidenterpriseEnterprisesGetStoreLayoutResponse res = sdk.enterprises.androidenterpriseEnterprisesGetStoreLayout(req, new AndroidenterpriseEnterprisesGetStoreLayoutSecurity("eum", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeLayout != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesList

Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesListRequest req = new AndroidenterpriseEnterprisesListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "libero";
                key = "quasi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            AndroidenterpriseEnterprisesListResponse res = sdk.enterprises.androidenterpriseEnterprisesList(req, new AndroidenterpriseEnterprisesListSecurity("ipsa", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprisesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesPullNotificationSet

Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesPullNotificationSetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesPullNotificationSetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesPullNotificationSetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesPullNotificationSetRequest req = new AndroidenterpriseEnterprisesPullNotificationSetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "esse";
                key = "rem";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestMode = AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum.RETURN_IMMEDIATELY;
                uploadType = "fugiat";
                uploadProtocol = "ut";
            }};            

            AndroidenterpriseEnterprisesPullNotificationSetResponse res = sdk.enterprises.androidenterpriseEnterprisesPullNotificationSet(req, new AndroidenterpriseEnterprisesPullNotificationSetSecurity("eum", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.notificationSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesSendTestPushNotification

Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSendTestPushNotificationRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSendTestPushNotificationResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSendTestPushNotificationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesSendTestPushNotificationRequest req = new AndroidenterpriseEnterprisesSendTestPushNotificationRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "ipsa";
                key = "id";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            AndroidenterpriseEnterprisesSendTestPushNotificationResponse res = sdk.enterprises.androidenterpriseEnterprisesSendTestPushNotification(req, new AndroidenterpriseEnterprisesSendTestPushNotificationSecurity("quo", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterprisesSendTestPushNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesSetAccount

Sets the account that will be used to authenticate to the API as the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetAccountRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetAccountResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetAccountSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnterpriseAccount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesSetAccountRequest req = new AndroidenterpriseEnterprisesSetAccountRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                enterpriseAccount = new EnterpriseAccount() {{
                    accountEmail = "voluptas";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "tempora";
                key = "debitis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "sequi";
                uploadProtocol = "quo";
            }};            

            AndroidenterpriseEnterprisesSetAccountResponse res = sdk.enterprises.androidenterpriseEnterprisesSetAccount(req, new AndroidenterpriseEnterprisesSetAccountSecurity("esse", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enterpriseAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesSetStoreLayout

Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetStoreLayoutRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetStoreLayoutResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesSetStoreLayoutSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StoreLayout;
import org.openapis.openapi.models.shared.StoreLayoutStoreLayoutTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesSetStoreLayoutRequest req = new AndroidenterpriseEnterprisesSetStoreLayoutRequest("aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                storeLayout = new StoreLayout() {{
                    homepageId = "quod";
                    storeLayoutType = StoreLayoutStoreLayoutTypeEnum.BASIC;
                }};;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "accusamus";
                key = "aliquam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "commodi";
                uploadProtocol = "sapiente";
            }};            

            AndroidenterpriseEnterprisesSetStoreLayoutResponse res = sdk.enterprises.androidenterpriseEnterprisesSetStoreLayout(req, new AndroidenterpriseEnterprisesSetStoreLayoutSecurity("dolores", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeLayout != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseEnterprisesUnenroll

Unenrolls an enterprise from the calling EMM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesUnenrollRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesUnenrollResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseEnterprisesUnenrollSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseEnterprisesUnenrollRequest req = new AndroidenterpriseEnterprisesUnenrollRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "praesentium";
                key = "consequuntur";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "fuga";
                uploadProtocol = "mollitia";
            }};            

            AndroidenterpriseEnterprisesUnenrollResponse res = sdk.enterprises.androidenterpriseEnterprisesUnenroll(req, new AndroidenterpriseEnterprisesUnenrollSecurity("incidunt", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
