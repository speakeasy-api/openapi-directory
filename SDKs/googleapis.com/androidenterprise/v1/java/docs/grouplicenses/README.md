# grouplicenses

### Available Operations

* [androidenterpriseGrouplicensesGet](#androidenterprisegrouplicensesget) - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseGrouplicensesList](#androidenterprisegrouplicenseslist) - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseGrouplicensesGet

Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseGrouplicensesGetRequest req = new AndroidenterpriseGrouplicensesGetRequest("quasi", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "earum";
                key = "vel";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "libero";
                uploadProtocol = "illum";
            }};            

            AndroidenterpriseGrouplicensesGetResponse res = sdk.grouplicenses.androidenterpriseGrouplicensesGet(req, new AndroidenterpriseGrouplicensesGetSecurity("soluta", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupLicense != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseGrouplicensesList

Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseGrouplicensesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseGrouplicensesListRequest req = new AndroidenterpriseGrouplicensesListRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "ullam";
                key = "nisi";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "qui";
                uploadProtocol = "quibusdam";
            }};            

            AndroidenterpriseGrouplicensesListResponse res = sdk.grouplicenses.androidenterpriseGrouplicensesList(req, new AndroidenterpriseGrouplicensesListSecurity("ex", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupLicensesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
