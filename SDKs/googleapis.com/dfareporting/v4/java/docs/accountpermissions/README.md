# accountPermissions

### Available Operations

* [dfareportingAccountPermissionsGet](#dfareportingaccountpermissionsget) - Gets one account permission by ID.
* [dfareportingAccountPermissionsList](#dfareportingaccountpermissionslist) - Retrieves the list of account permissions.

## dfareportingAccountPermissionsGet

Gets one account permission by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsGetRequest;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsGetResponse;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountPermissionsGetRequest req = new DfareportingAccountPermissionsGetRequest("optio", "totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            DfareportingAccountPermissionsGetResponse res = sdk.accountPermissions.dfareportingAccountPermissionsGet(req, new DfareportingAccountPermissionsGetSecurity("aspernatur", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountPermissionsList

Retrieves the list of account permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsListRequest;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsListResponse;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountPermissionsListRequest req = new DfareportingAccountPermissionsListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            DfareportingAccountPermissionsListResponse res = sdk.accountPermissions.dfareportingAccountPermissionsList(req, new DfareportingAccountPermissionsListSecurity("corporis", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountPermissionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
