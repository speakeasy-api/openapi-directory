# operatingSystemVersions

### Available Operations

* [dfareportingOperatingSystemVersionsGet](#dfareportingoperatingsystemversionsget) - Gets one operating system version by ID.
* [dfareportingOperatingSystemVersionsList](#dfareportingoperatingsystemversionslist) - Retrieves a list of operating system versions.

## dfareportingOperatingSystemVersionsGet

Gets one operating system version by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsGetRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsGetResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemVersionsGetRequest req = new DfareportingOperatingSystemVersionsGetRequest("culpa", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "earum";
                key = "nulla";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "magni";
                uploadProtocol = "inventore";
            }};            

            DfareportingOperatingSystemVersionsGetResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsGet(req, new DfareportingOperatingSystemVersionsGetSecurity("eligendi", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystemVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingOperatingSystemVersionsList

Retrieves a list of operating system versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsListRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsListResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemVersionsListRequest req = new DfareportingOperatingSystemVersionsListRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "pariatur";
                key = "eum";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "natus";
                uploadProtocol = "dolorem";
            }};            

            DfareportingOperatingSystemVersionsListResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsList(req, new DfareportingOperatingSystemVersionsListSecurity("mollitia", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystemVersionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
