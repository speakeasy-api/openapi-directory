# data

### Available Operations

* [analyticsDataGaGet](#analyticsdatagaget) - Returns Analytics data for a view (profile).
* [analyticsDataMcfGet](#analyticsdatamcfget) - Returns Analytics Multi-Channel Funnels data for a view (profile).
* [analyticsDataRealtimeGet](#analyticsdatarealtimeget) - Returns real time data for a view (profile).

## analyticsDataGaGet

Returns Analytics data for a view (profile).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetOutputEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSamplingLevelEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGaGetRequest req = new AnalyticsDataGaGetRequest("molestiae", "minus", "placeat", "voluptatum") {{
                alt = AltEnum.JSON;
                dimensions = "iusto";
                fields = "excepturi";
                filters = "nisi";
                includeEmptyRows = false;
                key = "recusandae";
                maxResults = 836079L;
                oauthToken = "ab";
                output = AnalyticsDataGaGetOutputEnum.DATA_TABLE;
                prettyPrint = false;
                quotaUser = "veritatis";
                samplingLevel = AnalyticsDataGaGetSamplingLevelEnum.FASTER;
                segment = "perferendis";
                sort = "ipsam";
                startIndex = 832620L;
                userIp = "sapiente";
            }};            

            AnalyticsDataGaGetResponse res = sdk.data.analyticsDataGaGet(req, new AnalyticsDataGaGetSecurity() {{
                option1 = new AnalyticsDataGaGetSecurityOption1("quo", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.gaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsDataMcfGet

Returns Analytics Multi-Channel Funnels data for a view (profile).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetSamplingLevelEnum;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataMcfGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataMcfGetRequest req = new AnalyticsDataMcfGetRequest("at", "at", "maiores", "molestiae") {{
                alt = AltEnum.JSON;
                dimensions = "quod";
                fields = "quod";
                filters = "esse";
                key = "totam";
                maxResults = 780529L;
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                samplingLevel = AnalyticsDataMcfGetSamplingLevelEnum.HIGHER_PRECISION;
                sort = "officia";
                startIndex = 582020L;
                userIp = "fugit";
            }};            

            AnalyticsDataMcfGetResponse res = sdk.data.analyticsDataMcfGet(req, new AnalyticsDataMcfGetSecurity() {{
                option1 = new AnalyticsDataMcfGetSecurityOption1("deleniti", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.mcfData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsDataRealtimeGet

Returns real time data for a view (profile).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataRealtimeGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataRealtimeGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataRealtimeGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataRealtimeGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataRealtimeGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataRealtimeGetRequest req = new AnalyticsDataRealtimeGetRequest("optio", "totam") {{
                alt = AltEnum.JSON;
                dimensions = "beatae";
                fields = "commodi";
                filters = "molestiae";
                key = "modi";
                maxResults = 186332L;
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                sort = "esse";
                userIp = "ipsum";
            }};            

            AnalyticsDataRealtimeGetResponse res = sdk.data.analyticsDataRealtimeGet(req, new AnalyticsDataRealtimeGetSecurity() {{
                option1 = new AnalyticsDataRealtimeGetSecurityOption1("excepturi", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.realtimeData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
