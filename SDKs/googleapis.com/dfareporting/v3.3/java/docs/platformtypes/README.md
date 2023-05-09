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

            DfareportingPlatformTypesGetRequest req = new DfareportingPlatformTypesGetRequest("fugit", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "recusandae";
                key = "suscipit";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "aspernatur";
                uploadProtocol = "placeat";
            }};            

            DfareportingPlatformTypesGetResponse res = sdk.platformTypes.dfareportingPlatformTypesGet(req, new DfareportingPlatformTypesGetSecurity("voluptatibus", "ipsa") {{
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

            DfareportingPlatformTypesListRequest req = new DfareportingPlatformTypesListRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "eligendi";
                key = "dolor";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "facilis";
                uploadProtocol = "natus";
            }};            

            DfareportingPlatformTypesListResponse res = sdk.platformTypes.dfareportingPlatformTypesList(req, new DfareportingPlatformTypesListSecurity("laborum", "exercitationem") {{
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
