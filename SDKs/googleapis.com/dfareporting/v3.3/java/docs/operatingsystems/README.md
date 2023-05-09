# operatingSystems

### Available Operations

* [dfareportingOperatingSystemsGet](#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [dfareportingOperatingSystemsList](#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

## dfareportingOperatingSystemsGet

Gets one operating system by DART ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemsGetRequest req = new DfareportingOperatingSystemsGetRequest("officiis", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "adipisci";
                key = "autem";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "delectus";
                uploadProtocol = "id";
            }};            

            DfareportingOperatingSystemsGetResponse res = sdk.operatingSystems.dfareportingOperatingSystemsGet(req, new DfareportingOperatingSystemsGetSecurity("inventore", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingOperatingSystemsList

Retrieves a list of operating systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemsListRequest req = new DfareportingOperatingSystemsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "et";
                key = "cum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "porro";
                uploadProtocol = "laudantium";
            }};            

            DfareportingOperatingSystemsListResponse res = sdk.operatingSystems.dfareportingOperatingSystemsList(req, new DfareportingOperatingSystemsListSecurity("tempore", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystemsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
