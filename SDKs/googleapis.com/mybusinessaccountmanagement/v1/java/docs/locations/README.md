# locations

### Available Operations

* [mybusinessaccountmanagementLocationsAdminsCreate](#mybusinessaccountmanagementlocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [mybusinessaccountmanagementLocationsAdminsDelete](#mybusinessaccountmanagementlocationsadminsdelete) - Removes the specified admin as a manager of the specified location.
* [mybusinessaccountmanagementLocationsAdminsList](#mybusinessaccountmanagementlocationsadminslist) - Lists all of the admins for the specified location.
* [mybusinessaccountmanagementLocationsAdminsPatch](#mybusinessaccountmanagementlocationsadminspatch) - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* [mybusinessaccountmanagementLocationsTransfer](#mybusinessaccountmanagementlocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

## mybusinessaccountmanagementLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsCreateResponse;
import org.openapis.openapi.models.shared.AdminInput;
import org.openapis.openapi.models.shared.AdminRoleEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementLocationsAdminsCreateRequest req = new MybusinessaccountmanagementLocationsAdminsCreateRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                adminInput = new AdminInput() {{
                    account = "iusto";
                    admin = "dicta";
                    name = "Bill Thompson";
                    role = AdminRoleEnum.ADMIN_ROLE_UNSPECIFIED;
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            MybusinessaccountmanagementLocationsAdminsCreateResponse res = sdk.locations.mybusinessaccountmanagementLocationsAdminsCreate(req);

            if (res.admin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementLocationsAdminsDelete

Removes the specified admin as a manager of the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsDeleteRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementLocationsAdminsDeleteRequest req = new MybusinessaccountmanagementLocationsAdminsDeleteRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            MybusinessaccountmanagementLocationsAdminsDeleteResponse res = sdk.locations.mybusinessaccountmanagementLocationsAdminsDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementLocationsAdminsList

Lists all of the admins for the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsListRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementLocationsAdminsListRequest req = new MybusinessaccountmanagementLocationsAdminsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
            }};            

            MybusinessaccountmanagementLocationsAdminsListResponse res = sdk.locations.mybusinessaccountmanagementLocationsAdminsList(req);

            if (res.listLocationAdminsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementLocationsAdminsPatch

Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsPatchRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsAdminsPatchResponse;
import org.openapis.openapi.models.shared.AdminInput;
import org.openapis.openapi.models.shared.AdminRoleEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementLocationsAdminsPatchRequest req = new MybusinessaccountmanagementLocationsAdminsPatchRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                adminInput = new AdminInput() {{
                    account = "alias";
                    admin = "fugit";
                    name = "Marshall Glover";
                    role = AdminRoleEnum.PRIMARY_OWNER;
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                updateMask = "necessitatibus";
                uploadType = "sint";
                uploadProtocol = "officia";
                validateOnly = false;
            }};            

            MybusinessaccountmanagementLocationsAdminsPatchResponse res = sdk.locations.mybusinessaccountmanagementLocationsAdminsPatch(req);

            if (res.admin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsTransferRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementLocationsTransferResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TransferLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementLocationsTransferRequest req = new MybusinessaccountmanagementLocationsTransferRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                transferLocationRequest = new TransferLocationRequest() {{
                    destinationAccount = "a";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            MybusinessaccountmanagementLocationsTransferResponse res = sdk.locations.mybusinessaccountmanagementLocationsTransfer(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
