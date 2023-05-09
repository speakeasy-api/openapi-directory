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

            DfareportingOperatingSystemVersionsGetRequest req = new DfareportingOperatingSystemVersionsGetRequest("error", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "aspernatur";
                key = "consequatur";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "doloribus";
                uploadProtocol = "quo";
            }};            

            DfareportingOperatingSystemVersionsGetResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsGet(req, new DfareportingOperatingSystemVersionsGetSecurity("quasi", "ullam") {{
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

            DfareportingOperatingSystemVersionsListRequest req = new DfareportingOperatingSystemVersionsListRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "accusamus";
                key = "dicta";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "vitae";
                uploadProtocol = "eligendi";
            }};            

            DfareportingOperatingSystemVersionsListResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsList(req, new DfareportingOperatingSystemVersionsListSecurity("accusamus", "perspiciatis") {{
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
