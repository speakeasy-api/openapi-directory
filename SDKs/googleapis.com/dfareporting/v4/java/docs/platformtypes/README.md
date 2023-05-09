# platformTypes

### Available Operations

* [dfareportingPlatformTypesGet](#dfareportingplatformtypesget) - Gets one platform type by ID.
* [dfareportingPlatformTypesList](#dfareportingplatformtypeslist) - Retrieves a list of platform types.

## dfareportingPlatformTypesGet

Gets one platform type by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesGetRequest;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesGetResponse;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlatformTypesGetRequest req = new DfareportingPlatformTypesGetRequest("perferendis", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "voluptatibus";
                key = "nemo";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "incidunt";
                uploadProtocol = "consectetur";
            }};            

            DfareportingPlatformTypesGetResponse res = sdk.platformTypes.dfareportingPlatformTypesGet(req, new DfareportingPlatformTypesGetSecurity("eveniet", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.platformType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlatformTypesList

Retrieves a list of platform types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesListRequest;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesListResponse;
import org.openapis.openapi.models.operations.DfareportingPlatformTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlatformTypesListRequest req = new DfareportingPlatformTypesListRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "praesentium";
                key = "quia";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "repellat";
                uploadProtocol = "iste";
            }};            

            DfareportingPlatformTypesListResponse res = sdk.platformTypes.dfareportingPlatformTypesList(req, new DfareportingPlatformTypesListSecurity("libero", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.platformTypesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
