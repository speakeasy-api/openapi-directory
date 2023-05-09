# enterprises

### Available Operations

* [androidmanagementEnterprisesCreate](#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [androidmanagementEnterprisesDevicesIssueCommand](#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [androidmanagementEnterprisesDevicesList](#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [androidmanagementEnterprisesDevicesOperationsCancel](#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [androidmanagementEnterprisesEnrollmentTokensCreate](#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [androidmanagementEnterprisesEnrollmentTokensList](#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [androidmanagementEnterprisesList](#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [androidmanagementEnterprisesPoliciesList](#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [androidmanagementEnterprisesWebAppsCreate](#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [androidmanagementEnterprisesWebAppsDelete](#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [androidmanagementEnterprisesWebAppsGet](#androidmanagemententerpriseswebappsget) - Gets a web app.
* [androidmanagementEnterprisesWebAppsList](#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [androidmanagementEnterprisesWebAppsPatch](#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [androidmanagementEnterprisesWebTokensCreate](#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

## androidmanagementEnterprisesCreate

Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactInfo;
import org.openapis.openapi.models.shared.Enterprise;
import org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum;
import org.openapis.openapi.models.shared.ExternalData;
import org.openapis.openapi.models.shared.SigninDetail;
import org.openapis.openapi.models.shared.SigninDetailAllowPersonalUsageEnum;
import org.openapis.openapi.models.shared.TermsAndConditions;
import org.openapis.openapi.models.shared.UserFacingMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesCreateRequest req = new AndroidmanagementEnterprisesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                enterprise = new Enterprise() {{
                    appAutoApprovalEnabled = false;
                    contactInfo = new ContactInfo() {{
                        contactEmail = "mollitia";
                        dataProtectionOfficerEmail = "occaecati";
                        dataProtectionOfficerName = "numquam";
                        dataProtectionOfficerPhone = "commodi";
                        euRepresentativeEmail = "quam";
                        euRepresentativeName = "molestiae";
                        euRepresentativePhone = "velit";
                    }};;
                    enabledNotificationTypes = new org.openapis.openapi.models.shared.EnterpriseEnabledNotificationTypesEnum[]{{
                        add(EnterpriseEnabledNotificationTypesEnum.NOTIFICATION_TYPE_UNSPECIFIED),
                        add(EnterpriseEnabledNotificationTypesEnum.COMPLIANCE_REPORT),
                        add(EnterpriseEnabledNotificationTypesEnum.NOTIFICATION_TYPE_UNSPECIFIED),
                    }};
                    enterpriseDisplayName = "laborum";
                    logo = new ExternalData() {{
                        sha256Hash = "animi";
                        url = "enim";
                    }};;
                    name = "Angelica Dietrich";
                    primaryColor = 662527;
                    pubsubTopic = "possimus";
                    signinDetails = new org.openapis.openapi.models.shared.SigninDetail[]{{
                        add(new SigninDetail() {{
                            allowPersonalUsage = SigninDetailAllowPersonalUsageEnum.ALLOW_PERSONAL_USAGE_UNSPECIFIED;
                            qrCode = "error";
                            signinEnrollmentToken = "temporibus";
                            signinUrl = "laborum";
                        }}),
                    }};
                    termsAndConditions = new org.openapis.openapi.models.shared.TermsAndConditions[]{{
                        add(new TermsAndConditions() {{
                            content = new UserFacingMessage() {{
                                defaultMessage = "reiciendis";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("vero", "nihil");
                                    put("praesentium", "voluptatibus");
                                    put("ipsa", "omnis");
                                    put("voluptate", "cum");
                                }};
                            }};
                            header = new UserFacingMessage() {{
                                defaultMessage = "perferendis";
                                localizedMessages = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "ut");
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "maiores";
                agreementAccepted = false;
                alt = AltEnum.JSON;
                callback = "corporis";
                enterpriseToken = "dolore";
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                projectId = "enim";
                quotaUser = "accusamus";
                signupUrlName = "commodi";
                uploadType = "repudiandae";
                uploadProtocol = "quae";
            }};            

            AndroidmanagementEnterprisesCreateResponse res = sdk.enterprises.androidmanagementEnterprisesCreate(req, new AndroidmanagementEnterprisesCreateSecurity("ipsum", "quidem") {{
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

## androidmanagementEnterprisesDevicesIssueCommand

Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesIssueCommandRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesIssueCommandResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesIssueCommandSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClearAppsDataParams;
import org.openapis.openapi.models.shared.ClearAppsDataStatus;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.CommandErrorCodeEnum;
import org.openapis.openapi.models.shared.CommandResetPasswordFlagsEnum;
import org.openapis.openapi.models.shared.CommandTypeEnum;
import org.openapis.openapi.models.shared.PerAppResult;
import org.openapis.openapi.models.shared.PerAppResultClearingResultEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesDevicesIssueCommandRequest req = new AndroidmanagementEnterprisesDevicesIssueCommandRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                command = new Command() {{
                    clearAppsDataParams = new ClearAppsDataParams() {{
                        packageNames = new String[]{{
                            add("modi"),
                            add("praesentium"),
                            add("rem"),
                            add("voluptates"),
                        }};
                    }};;
                    clearAppsDataStatus = new ClearAppsDataStatus() {{
                        results = new java.util.HashMap<String, org.openapis.openapi.models.shared.PerAppResult>() {{
                            put("repudiandae", new PerAppResult() {{
                                clearingResult = PerAppResultClearingResultEnum.APP_NOT_FOUND;
                            }});
                        }};
                    }};;
                    createTime = "veritatis";
                    duration = "itaque";
                    errorCode = CommandErrorCodeEnum.UNKNOWN;
                    newPassword = "enim";
                    resetPasswordFlags = new org.openapis.openapi.models.shared.CommandResetPasswordFlagsEnum[]{{
                        add(CommandResetPasswordFlagsEnum.DO_NOT_ASK_CREDENTIALS_ON_BOOT),
                    }};
                    type = CommandTypeEnum.CLEAR_APP_DATA;
                    userName = "Brendon_OConnell28";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }};            

            AndroidmanagementEnterprisesDevicesIssueCommandResponse res = sdk.enterprises.androidmanagementEnterprisesDevicesIssueCommand(req, new AndroidmanagementEnterprisesDevicesIssueCommandSecurity("alias", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesDevicesList

Lists devices for a given enterprise. Deleted devices are not returned in the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesListRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesListResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesDevicesListRequest req = new AndroidmanagementEnterprisesDevicesListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            AndroidmanagementEnterprisesDevicesListResponse res = sdk.enterprises.androidmanagementEnterprisesDevicesList(req, new AndroidmanagementEnterprisesDevicesListSecurity("necessitatibus", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesDevicesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesOperationsCancelRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesOperationsCancelResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesDevicesOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesDevicesOperationsCancelRequest req = new AndroidmanagementEnterprisesDevicesOperationsCancelRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            AndroidmanagementEnterprisesDevicesOperationsCancelResponse res = sdk.enterprises.androidmanagementEnterprisesDevicesOperationsCancel(req, new AndroidmanagementEnterprisesDevicesOperationsCancelSecurity("magnam", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesEnrollmentTokensCreate

Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollmentToken;
import org.openapis.openapi.models.shared.EnrollmentTokenAllowPersonalUsageEnum;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesEnrollmentTokensCreateRequest req = new AndroidmanagementEnterprisesEnrollmentTokensCreateRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                enrollmentToken = new EnrollmentToken() {{
                    additionalData = "aliquid";
                    allowPersonalUsage = EnrollmentTokenAllowPersonalUsageEnum.PERSONAL_USAGE_DISALLOWED;
                    duration = "accusamus";
                    expirationTimestamp = "non";
                    name = "Jon Tillman";
                    oneTimeOnly = false;
                    policyName = "provident";
                    qrCode = "nam";
                    user = new User() {{
                        accountIdentifier = "id";
                    }};;
                    value = "blanditiis";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            AndroidmanagementEnterprisesEnrollmentTokensCreateResponse res = sdk.enterprises.androidmanagementEnterprisesEnrollmentTokensCreate(req, new AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity("perferendis", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.enrollmentToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesEnrollmentTokensList

Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensListRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensListResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesEnrollmentTokensListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesEnrollmentTokensListRequest req = new AndroidmanagementEnterprisesEnrollmentTokensListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                pageSize = 428769L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            AndroidmanagementEnterprisesEnrollmentTokensListResponse res = sdk.enterprises.androidmanagementEnterprisesEnrollmentTokensList(req, new AndroidmanagementEnterprisesEnrollmentTokensListSecurity("et", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEnrollmentTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesList

Lists EMM-managed enterprises. Only BASIC fields are returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesListRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesListResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesListSecurity;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesListRequest req = new AndroidmanagementEnterprisesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                pageSize = 652103L;
                pageToken = "ad";
                prettyPrint = false;
                projectId = "eum";
                quotaUser = "dolor";
                uploadType = "necessitatibus";
                uploadProtocol = "odit";
                view = AndroidmanagementEnterprisesListViewEnum.ENTERPRISE_VIEW_UNSPECIFIED;
            }};            

            AndroidmanagementEnterprisesListResponse res = sdk.enterprises.androidmanagementEnterprisesList(req, new AndroidmanagementEnterprisesListSecurity("quasi", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEnterprisesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesPoliciesList

Lists policies for a given enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesPoliciesListRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesPoliciesListResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesPoliciesListRequest req = new AndroidmanagementEnterprisesPoliciesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "facilis";
                key = "in";
                oauthToken = "architecto";
                pageSize = 99569L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            AndroidmanagementEnterprisesPoliciesListResponse res = sdk.enterprises.androidmanagementEnterprisesPoliciesList(req, new AndroidmanagementEnterprisesPoliciesListSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebAppsCreate

Creates a web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebApp;
import org.openapis.openapi.models.shared.WebAppDisplayModeEnum;
import org.openapis.openapi.models.shared.WebAppIcon;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebAppsCreateRequest req = new AndroidmanagementEnterprisesWebAppsCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                webApp = new WebApp() {{
                    displayMode = WebAppDisplayModeEnum.FULL_SCREEN;
                    icons = new org.openapis.openapi.models.shared.WebAppIcon[]{{
                        add(new WebAppIcon() {{
                            imageData = "consequuntur";
                        }}),
                    }};
                    name = "Miss Nick Cummerata";
                    startUrl = "pariatur";
                    title = "Dr.";
                    versionCode = "ea";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ipsam";
                uploadProtocol = "voluptate";
            }};            

            AndroidmanagementEnterprisesWebAppsCreateResponse res = sdk.enterprises.androidmanagementEnterprisesWebAppsCreate(req, new AndroidmanagementEnterprisesWebAppsCreateSecurity("autem", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebAppsDelete

Deletes a web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsDeleteSecurity;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebAppsDeleteRequest req = new AndroidmanagementEnterprisesWebAppsDeleteRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "fugiat";
                key = "amet";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "corporis";
                uploadProtocol = "hic";
                wipeDataFlags = new org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum[]{{
                    add(AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum.WIPE_EXTERNAL_STORAGE),
                    add(AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum.WIPE_DATA_FLAG_UNSPECIFIED),
                    add(AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum.PRESERVE_RESET_PROTECTION_DATA),
                }};
                wipeReasonMessage = "totam";
            }};            

            AndroidmanagementEnterprisesWebAppsDeleteResponse res = sdk.enterprises.androidmanagementEnterprisesWebAppsDelete(req, new AndroidmanagementEnterprisesWebAppsDeleteSecurity("dignissimos", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebAppsGet

Gets a web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsGetRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsGetResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebAppsGetRequest req = new AndroidmanagementEnterprisesWebAppsGetRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "minus";
                filter = "quam";
                key = "dolor";
                oauthToken = "vero";
                pageSize = 345352L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            AndroidmanagementEnterprisesWebAppsGetResponse res = sdk.enterprises.androidmanagementEnterprisesWebAppsGet(req, new AndroidmanagementEnterprisesWebAppsGetSecurity("perspiciatis", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebAppsList

Lists web apps for a given enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsListRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsListResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebAppsListRequest req = new AndroidmanagementEnterprisesWebAppsListRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                pageSize = 992397L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            AndroidmanagementEnterprisesWebAppsListResponse res = sdk.enterprises.androidmanagementEnterprisesWebAppsList(req, new AndroidmanagementEnterprisesWebAppsListSecurity("deleniti", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWebAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebAppsPatch

Updates a web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsPatchRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsPatchResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebAppsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebApp;
import org.openapis.openapi.models.shared.WebAppDisplayModeEnum;
import org.openapis.openapi.models.shared.WebAppIcon;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebAppsPatchRequest req = new AndroidmanagementEnterprisesWebAppsPatchRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                webApp = new WebApp() {{
                    displayMode = WebAppDisplayModeEnum.STANDALONE;
                    icons = new org.openapis.openapi.models.shared.WebAppIcon[]{{
                        add(new WebAppIcon() {{
                            imageData = "quaerat";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "quos";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "aliquid";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "dolorem";
                        }}),
                    }};
                    name = "Rosa Dibbert";
                    startUrl = "excepturi";
                    title = "Miss";
                    versionCode = "voluptate";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                updateMask = "ipsa";
                uploadType = "iure";
                uploadProtocol = "odio";
            }};            

            AndroidmanagementEnterprisesWebAppsPatchResponse res = sdk.enterprises.androidmanagementEnterprisesWebAppsPatch(req, new AndroidmanagementEnterprisesWebAppsPatchSecurity("quaerat", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidmanagementEnterprisesWebTokensCreate

Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebTokensCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebTokensCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementEnterprisesWebTokensCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebToken;
import org.openapis.openapi.models.shared.WebTokenEnabledFeaturesEnum;
import org.openapis.openapi.models.shared.WebTokenPermissionsEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementEnterprisesWebTokensCreateRequest req = new AndroidmanagementEnterprisesWebTokensCreateRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                webToken = new WebToken() {{
                    enabledFeatures = new org.openapis.openapi.models.shared.WebTokenEnabledFeaturesEnum[]{{
                        add(WebTokenEnabledFeaturesEnum.STORE_BUILDER),
                        add(WebTokenEnabledFeaturesEnum.PLAY_SEARCH),
                    }};
                    name = "Miss Paul Steuber";
                    parentFrameUrl = "iusto";
                    permissions = new org.openapis.openapi.models.shared.WebTokenPermissionsEnum[]{{
                        add(WebTokenPermissionsEnum.APPROVE_APPS),
                        add(WebTokenPermissionsEnum.APPROVE_APPS),
                    }};
                    value = "omnis";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "nihil";
                key = "ipsum";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "saepe";
                uploadProtocol = "eius";
            }};            

            AndroidmanagementEnterprisesWebTokensCreateResponse res = sdk.enterprises.androidmanagementEnterprisesWebTokensCreate(req, new AndroidmanagementEnterprisesWebTokensCreateSecurity("aspernatur", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
