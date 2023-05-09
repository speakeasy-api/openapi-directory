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

            DfareportingOperatingSystemsGetRequest req = new DfareportingOperatingSystemsGetRequest("suscipit", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "assumenda";
                key = "aliquid";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "necessitatibus";
                uploadProtocol = "fugiat";
            }};            

            DfareportingOperatingSystemsGetResponse res = sdk.operatingSystems.dfareportingOperatingSystemsGet(req, new DfareportingOperatingSystemsGetSecurity("eius", "voluptate") {{
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

            DfareportingOperatingSystemsListRequest req = new DfareportingOperatingSystemsListRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "minus";
                key = "iure";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "iure";
                uploadProtocol = "deserunt";
            }};            

            DfareportingOperatingSystemsListResponse res = sdk.operatingSystems.dfareportingOperatingSystemsList(req, new DfareportingOperatingSystemsListSecurity("blanditiis", "dolores") {{
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
