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

            DfareportingPlatformTypesGetRequest req = new DfareportingPlatformTypesGetRequest("explicabo", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "doloremque";
                key = "magni";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "officiis";
                uploadProtocol = "eius";
            }};            

            DfareportingPlatformTypesGetResponse res = sdk.platformTypes.dfareportingPlatformTypesGet(req, new DfareportingPlatformTypesGetSecurity("delectus", "similique") {{
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

            DfareportingPlatformTypesListRequest req = new DfareportingPlatformTypesListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "facere";
                key = "esse";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "cum";
                uploadProtocol = "minus";
            }};            

            DfareportingPlatformTypesListResponse res = sdk.platformTypes.dfareportingPlatformTypesList(req, new DfareportingPlatformTypesListSecurity("ratione", "placeat") {{
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
