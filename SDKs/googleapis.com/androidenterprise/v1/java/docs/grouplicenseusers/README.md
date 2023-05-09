# grouplicenseusers

### Available Operations

* [androidenterpriseGrouplicenseusersList](#androidenterprisegrouplicenseuserslist) - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseGrouplicenseusersList

Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicenseusersListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicenseusersListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicenseusersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseGrouplicenseusersListRequest req = new AndroidenterpriseGrouplicenseusersListRequest("itaque", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "at";
                key = "et";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "minima";
                uploadProtocol = "veritatis";
            }};            

            AndroidenterpriseGrouplicenseusersListResponse res = sdk.grouplicenseusers.androidenterpriseGrouplicenseusersList(req, new AndroidenterpriseGrouplicenseusersListSecurity("consectetur", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupLicenseUsersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
