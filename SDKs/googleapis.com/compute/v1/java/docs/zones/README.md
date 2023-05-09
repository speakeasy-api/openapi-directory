# zones

### Available Operations

* [computeZonesGet](#computezonesget) - Returns the specified Zone resource.
* [computeZonesList](#computezoneslist) - Retrieves the list of Zone resources available to the specified project.

## computeZonesGet

Returns the specified Zone resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZonesGetRequest;
import org.openapis.openapi.models.operations.ComputeZonesGetResponse;
import org.openapis.openapi.models.operations.ComputeZonesGetSecurity;
import org.openapis.openapi.models.operations.ComputeZonesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZonesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZonesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZonesGetRequest req = new ComputeZonesGetRequest("odio", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "aspernatur";
                key = "iusto";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "et";
                uploadProtocol = "sed";
                userIp = "consectetur";
            }};            

            ComputeZonesGetResponse res = sdk.zones.computeZonesGet(req, new ComputeZonesGetSecurity() {{
                option1 = new ComputeZonesGetSecurityOption1("illo", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.zone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeZonesList

Retrieves the list of Zone resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeZonesListRequest;
import org.openapis.openapi.models.operations.ComputeZonesListResponse;
import org.openapis.openapi.models.operations.ComputeZonesListSecurity;
import org.openapis.openapi.models.operations.ComputeZonesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeZonesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeZonesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeZonesListRequest req = new ComputeZonesListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "quidem";
                filter = "repudiandae";
                key = "incidunt";
                maxResults = 113311L;
                oauthToken = "distinctio";
                orderBy = "ipsa";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                returnPartialSuccess = false;
                uploadType = "ut";
                uploadProtocol = "fugiat";
                userIp = "eveniet";
            }};            

            ComputeZonesListResponse res = sdk.zones.computeZonesList(req, new ComputeZonesListSecurity() {{
                option1 = new ComputeZonesListSecurityOption1("accusantium", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.zoneList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
