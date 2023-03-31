# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClearUserSessionsPathParams;
import org.openapis.openapi.models.operations.ClearUserSessionsRequest;
import org.openapis.openapi.models.operations.ClearUserSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearUserSessionsRequest req = new ClearUserSessionsRequest() {{
                pathParams = new ClearUserSessionsPathParams() {{
                    userId = "corrupti";
                }};
                request = "provident".getBytes();
            }};            

            ClearUserSessionsResponse res = sdk.clearUserSessions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `clearUserSessions` - Clear User Sessions
* `findUser` - Find User
* `getAssignedAppLinks` - Get Assigned App Links
* `getCurrentUser` - Get Current User
* `getGroupsForUser` - Get Groups for User
* `getUser` - Get User
* `resetFactors` - Reset Factors

### createUser

* `createUserInGroup` - Create User in Group

### credentialOperations

* `changePassword` - Change Password
* `changeRecoveryQuestion` - Change Recovery Question
* `forgotPasswordOneTimeCode` - Forgot Password (One Time Code)
* `setRecoveryCredential` - Set Recovery Credential

### lifecycleOperations

* `activateUser` - Activate User
* `deactivateUser` - Deactivate User
* `resetPassword` - Reset Password
* `setTempPassword` - Set Temp Password
* `suspendUser` - Suspend User
* `unlockUser` - Unlock User
* `unsuspendUser` - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
