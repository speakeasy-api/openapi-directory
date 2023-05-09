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

            ComputeZonesGetRequest req = new ComputeZonesGetRequest("adipisci", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "accusantium";
                key = "facere";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "molestias";
                uploadProtocol = "dolore";
                userIp = "expedita";
            }};            

            ComputeZonesGetResponse res = sdk.zones.computeZonesGet(req, new ComputeZonesGetSecurity() {{
                option1 = new ComputeZonesGetSecurityOption1("doloribus", "nemo") {{
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

            ComputeZonesListRequest req = new ComputeZonesListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "explicabo";
                filter = "facilis";
                key = "dolores";
                maxResults = 999320L;
                oauthToken = "quasi";
                orderBy = "eius";
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "delectus";
                returnPartialSuccess = false;
                uploadType = "praesentium";
                uploadProtocol = "ut";
                userIp = "tempora";
            }};            

            ComputeZonesListResponse res = sdk.zones.computeZonesList(req, new ComputeZonesListSecurity() {{
                option1 = new ComputeZonesListSecurityOption1("dolorem", "ex") {{
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
