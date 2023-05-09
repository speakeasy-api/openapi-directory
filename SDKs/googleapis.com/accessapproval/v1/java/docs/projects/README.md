# projects

### Available Operations

* [accessapprovalProjectsApprovalRequestsApprove](#accessapprovalprojectsapprovalrequestsapprove) - Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [accessapprovalProjectsApprovalRequestsDismiss](#accessapprovalprojectsapprovalrequestsdismiss) - Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
* [accessapprovalProjectsApprovalRequestsGet](#accessapprovalprojectsapprovalrequestsget) - Gets an approval request. Returns NOT_FOUND if the request does not exist.
* [accessapprovalProjectsApprovalRequestsInvalidate](#accessapprovalprojectsapprovalrequestsinvalidate) - Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
* [accessapprovalProjectsApprovalRequestsList](#accessapprovalprojectsapprovalrequestslist) - Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
* [accessapprovalProjectsDeleteAccessApprovalSettings](#accessapprovalprojectsdeleteaccessapprovalsettings) - Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
* [accessapprovalProjectsUpdateAccessApprovalSettings](#accessapprovalprojectsupdateaccessapprovalsettings) - Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

## accessapprovalProjectsApprovalRequestsApprove

Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproveApprovalRequestMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsApproveRequest req = new AccessapprovalProjectsApprovalRequestsApproveRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                approveApprovalRequestMessage = new ApproveApprovalRequestMessage() {{
                    expireTime = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            AccessapprovalProjectsApprovalRequestsApproveResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsApprove(req, new AccessapprovalProjectsApprovalRequestsApproveSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessapprovalProjectsApprovalRequestsDismiss

Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsDismissRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsDismissResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsDismissSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsDismissRequest req = new AccessapprovalProjectsApprovalRequestsDismissRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "perferendis");
                }};
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            AccessapprovalProjectsApprovalRequestsDismissResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsDismiss(req, new AccessapprovalProjectsApprovalRequestsDismissSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessapprovalProjectsApprovalRequestsGet

Gets an approval request. Returns NOT_FOUND if the request does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsGetRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsGetResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsGetRequest req = new AccessapprovalProjectsApprovalRequestsGetRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            AccessapprovalProjectsApprovalRequestsGetResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsGet(req, new AccessapprovalProjectsApprovalRequestsGetSecurity("optio", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessapprovalProjectsApprovalRequestsInvalidate

Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsInvalidateRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsInvalidateResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsInvalidateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsInvalidateRequest req = new AccessapprovalProjectsApprovalRequestsInvalidateRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("modi", "qui");
                    put("impedit", "cum");
                }};
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

            AccessapprovalProjectsApprovalRequestsInvalidateResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsInvalidate(req, new AccessapprovalProjectsApprovalRequestsInvalidateSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approvalRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessapprovalProjectsApprovalRequestsList

Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsListRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsListResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsApprovalRequestsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsApprovalRequestsListRequest req = new AccessapprovalProjectsApprovalRequestsListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                filter = "iste";
                key = "iure";
                oauthToken = "saepe";
                pageSize = 697631L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            AccessapprovalProjectsApprovalRequestsListResponse res = sdk.projects.accessapprovalProjectsApprovalRequestsList(req, new AccessapprovalProjectsApprovalRequestsListSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listApprovalRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessapprovalProjectsDeleteAccessApprovalSettings

Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsDeleteAccessApprovalSettingsRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsDeleteAccessApprovalSettingsResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsDeleteAccessApprovalSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsDeleteAccessApprovalSettingsRequest req = new AccessapprovalProjectsDeleteAccessApprovalSettingsRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            AccessapprovalProjectsDeleteAccessApprovalSettingsResponse res = sdk.projects.accessapprovalProjectsDeleteAccessApprovalSettings(req, new AccessapprovalProjectsDeleteAccessApprovalSettingsSecurity("iure", "culpa") {{
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

## accessapprovalProjectsUpdateAccessApprovalSettings

Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessapprovalProjectsUpdateAccessApprovalSettingsRequest;
import org.openapis.openapi.models.operations.AccessapprovalProjectsUpdateAccessApprovalSettingsResponse;
import org.openapis.openapi.models.operations.AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity;
import org.openapis.openapi.models.shared.AccessApprovalSettingsInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrolledService;
import org.openapis.openapi.models.shared.EnrolledServiceEnrollmentLevelEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccessapprovalProjectsUpdateAccessApprovalSettingsRequest req = new AccessapprovalProjectsUpdateAccessApprovalSettingsRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessApprovalSettingsInput = new AccessApprovalSettingsInput() {{
                    activeKeyVersion = "architecto";
                    enrolledServices = new org.openapis.openapi.models.shared.EnrolledService[]{{
                        add(new EnrolledService() {{
                            cloudProduct = "dolorem";
                            enrollmentLevel = EnrolledServiceEnrollmentLevelEnum.BLOCK_ALL;
                        }}),
                        add(new EnrolledService() {{
                            cloudProduct = "consequuntur";
                            enrollmentLevel = EnrolledServiceEnrollmentLevelEnum.BLOCK_ALL;
                        }}),
                        add(new EnrolledService() {{
                            cloudProduct = "mollitia";
                            enrollmentLevel = EnrolledServiceEnrollmentLevelEnum.BLOCK_ALL;
                        }}),
                    }};
                    name = "Lucy Konopelski";
                    notificationEmails = new String[]{{
                        add("quia"),
                        add("quis"),
                        add("vitae"),
                    }};
                    preferNoBroadApprovalRequests = false;
                    preferredRequestExpirationDays = 674752;
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                updateMask = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            AccessapprovalProjectsUpdateAccessApprovalSettingsResponse res = sdk.projects.accessapprovalProjectsUpdateAccessApprovalSettings(req, new AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity("quasi", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accessApprovalSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
