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

            ComputeZonesGetRequest req = new ComputeZonesGetRequest("at", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "asperiores";
                key = "quae";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "perspiciatis";
                uploadProtocol = "cumque";
                userIp = "alias";
            }};            

            ComputeZonesGetResponse res = sdk.zones.computeZonesGet(req, new ComputeZonesGetSecurity() {{
                option1 = new ComputeZonesGetSecurityOption1("tempora", "labore") {{
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

            ComputeZonesListRequest req = new ComputeZonesListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "consequatur";
                filter = "vitae";
                key = "aperiam";
                maxResults = 290256L;
                oauthToken = "consectetur";
                orderBy = "et";
                pageToken = "unde";
                prettyPrint = false;
                quotaUser = "dignissimos";
                returnPartialSuccess = false;
                uploadType = "dolor";
                uploadProtocol = "porro";
                userIp = "eveniet";
            }};            

            ComputeZonesListResponse res = sdk.zones.computeZonesList(req, new ComputeZonesListSecurity() {{
                option1 = new ComputeZonesListSecurityOption1("expedita", "omnis") {{
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
