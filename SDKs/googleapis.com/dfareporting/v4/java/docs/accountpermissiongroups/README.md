# accountPermissionGroups

### Available Operations

* [dfareportingAccountPermissionGroupsGet](#dfareportingaccountpermissiongroupsget) - Gets one account permission group by ID.
* [dfareportingAccountPermissionGroupsList](#dfareportingaccountpermissiongroupslist) - Retrieves the list of account permission groups.

## dfareportingAccountPermissionGroupsGet

Gets one account permission group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountPermissionGroupsGetRequest req = new DfareportingAccountPermissionGroupsGetRequest("ab", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            DfareportingAccountPermissionGroupsGetResponse res = sdk.accountPermissionGroups.dfareportingAccountPermissionGroupsGet(req, new DfareportingAccountPermissionGroupsGetSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountPermissionGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAccountPermissionGroupsList

Retrieves the list of account permission groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingAccountPermissionGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAccountPermissionGroupsListRequest req = new DfareportingAccountPermissionGroupsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            DfareportingAccountPermissionGroupsListResponse res = sdk.accountPermissionGroups.dfareportingAccountPermissionGroupsList(req, new DfareportingAccountPermissionGroupsListSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountPermissionGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
