# statsFindMarketplaceStatistics

### Available Operations

* [getStatsSeriesPeriodFields](#getstatsseriesperiodfields) - Return a timeseries for a particular field
* [getStatsTotal](#getstatstotal) - Returns the total number of events for a particular field.
* [postStatsIncrementField](#poststatsincrementfield) - Increments a statistics field

## getStatsSeriesPeriodFields

Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatsSeriesPeriodFieldsPeriodEnum;
import org.openapis.openapi.models.operations.GetStatsSeriesPeriodFieldsRequest;
import org.openapis.openapi.models.operations.GetStatsSeriesPeriodFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "dignissimos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStatsSeriesPeriodFieldsRequest req = new GetStatsSeriesPeriodFieldsRequest("eaque", GetStatsSeriesPeriodFieldsPeriodEnum.DAY) {{
                end = 199996L;
                query = "eos";
                start = 18521L;
            }};            

            GetStatsSeriesPeriodFieldsResponse res = sdk.statsFindMarketplaceStatistics.getStatsSeriesPeriodFields(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatsTotal

Returns the total number of events for a particular field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatsTotalRequest;
import org.openapis.openapi.models.operations.GetStatsTotalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores", "minus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStatsTotalRequest req = new GetStatsTotalRequest("quam") {{
                end = 223924L;
                query = "vero";
                start = 345352L;
            }};            

            GetStatsTotalResponse res = sdk.statsFindMarketplaceStatistics.getStatsTotal(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStatsIncrementField

increment a statistics field

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStatsIncrementFieldRequest;
import org.openapis.openapi.models.operations.PostStatsIncrementFieldResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "recusandae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostStatsIncrementFieldRequest req = new PostStatsIncrementFieldRequest("omnis", "facilis") {{
                date = 596656L;
                userId = "voluptatem";
                value = 783645L;
            }};            

            PostStatsIncrementFieldResponse res = sdk.statsFindMarketplaceStatistics.postStatsIncrementField(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
