# interconnectLocations

### Available Operations

* [computeInterconnectLocationsGet](#computeinterconnectlocationsget) - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* [computeInterconnectLocationsList](#computeinterconnectlocationslist) - Retrieves the list of interconnect locations available to the specified project.

## computeInterconnectLocationsGet

Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectLocationsGetRequest req = new ComputeInterconnectLocationsGetRequest("asperiores", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "odit";
                key = "omnis";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "officia";
                uploadProtocol = "occaecati";
                userIp = "nemo";
            }};            

            ComputeInterconnectLocationsGetResponse res = sdk.interconnectLocations.computeInterconnectLocationsGet(req, new ComputeInterconnectLocationsGetSecurity() {{
                option1 = new ComputeInterconnectLocationsGetSecurityOption1("laboriosam", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInterconnectLocationsList

Retrieves the list of interconnect locations available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListRequest;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListResponse;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurity;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInterconnectLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInterconnectLocationsListRequest req = new ComputeInterconnectLocationsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "excepturi";
                filter = "illo";
                key = "quas";
                maxResults = 816230L;
                oauthToken = "fuga";
                orderBy = "ab";
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "magnam";
                returnPartialSuccess = false;
                uploadType = "atque";
                uploadProtocol = "recusandae";
                userIp = "nihil";
            }};            

            ComputeInterconnectLocationsListResponse res = sdk.interconnectLocations.computeInterconnectLocationsList(req, new ComputeInterconnectLocationsListSecurity() {{
                option1 = new ComputeInterconnectLocationsListSecurityOption1("quas", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.interconnectLocationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
