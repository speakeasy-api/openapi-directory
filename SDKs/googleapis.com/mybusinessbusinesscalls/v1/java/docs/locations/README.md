# locations

### Available Operations

* [mybusinessbusinesscallsLocationsBusinesscallsinsightsList](#mybusinessbusinesscallslocationsbusinesscallsinsightslist) - Returns insights for Business calls for a location.
* [mybusinessbusinesscallsLocationsGetBusinesscallssettings](#mybusinessbusinesscallslocationsgetbusinesscallssettings) - Returns the Business calls settings resource for the given location.
* [mybusinessbusinesscallsLocationsUpdateBusinesscallssettings](#mybusinessbusinesscallslocationsupdatebusinesscallssettings) - Updates the Business call settings for the specified location.

## mybusinessbusinesscallsLocationsBusinesscallsinsightsList

Returns insights for Business calls for a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest req = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                filter = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse res = sdk.locations.mybusinessbusinesscallsLocationsBusinesscallsinsightsList(req);

            if (res.listBusinessCallsInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinesscallsLocationsGetBusinesscallssettings

Returns the Business calls settings resource for the given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest req = new MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse res = sdk.locations.mybusinessbusinesscallsLocationsGetBusinesscallssettings(req);

            if (res.businessCallsSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinesscallsLocationsUpdateBusinesscallssettings

Updates the Business call settings for the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BusinessCallsSettings;
import org.openapis.openapi.models.shared.BusinessCallsSettingsCallsStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest req = new MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                businessCallsSettings = new BusinessCallsSettings() {{
                    callsState = BusinessCallsSettingsCallsStateEnum.ENABLED;
                    consentTime = "quod";
                    name = "Erik Lebsack";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "occaecati";
                key = "fugit";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                updateMask = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse res = sdk.locations.mybusinessbusinesscallsLocationsUpdateBusinesscallssettings(req);

            if (res.businessCallsSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
