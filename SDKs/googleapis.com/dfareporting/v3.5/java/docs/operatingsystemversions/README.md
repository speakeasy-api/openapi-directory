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

            DfareportingOperatingSystemVersionsGetRequest req = new DfareportingOperatingSystemVersionsGetRequest("magni", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "nihil";
                key = "esse";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "adipisci";
                uploadProtocol = "odit";
            }};            

            DfareportingOperatingSystemVersionsGetResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsGet(req, new DfareportingOperatingSystemVersionsGetSecurity("itaque", "dolorem") {{
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

            DfareportingOperatingSystemVersionsListRequest req = new DfareportingOperatingSystemVersionsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "officiis";
                key = "alias";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "non";
                uploadProtocol = "harum";
            }};            

            DfareportingOperatingSystemVersionsListResponse res = sdk.operatingSystemVersions.dfareportingOperatingSystemVersionsList(req, new DfareportingOperatingSystemVersionsListSecurity("voluptate", "distinctio") {{
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
