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

            DfareportingOperatingSystemVersionsGetRequest req = new DfareportingOperatingSystemVersionsGetRequest("molestias", "corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "iusto";
                key = "adipisci";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "quis";
                uploadProtocol = "pariatur";
            }};            

            DfareportingOperatingSystemVersionsGetResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsGet(req, new DfareportingOperatingSystemVersionsGetSecurity("reprehenderit", "odit") {{
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

            DfareportingOperatingSystemVersionsListRequest req = new DfareportingOperatingSystemVersionsListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "in";
                key = "rem";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "vero";
                uploadProtocol = "quis";
            }};            

            DfareportingOperatingSystemVersionsListResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsList(req, new DfareportingOperatingSystemVersionsListSecurity("earum", "esse") {{
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
