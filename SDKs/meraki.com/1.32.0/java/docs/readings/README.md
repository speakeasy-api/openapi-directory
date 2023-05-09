# readings

### Available Operations

* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsHistoryRequest req = new GetOrganizationSensorReadingsHistoryRequest("iste") {{
                endingBefore = "unde";
                metrics = new String[]{{
                    add("laborum"),
                    add("possimus"),
                    add("architecto"),
                    add("commodi"),
                }};
                networkIds = new String[]{{
                    add("voluptates"),
                    add("autem"),
                    add("dolore"),
                }};
                perPage = 56144L;
                serials = new String[]{{
                    add("earum"),
                    add("possimus"),
                }};
                startingAfter = "recusandae";
                t0 = "iste";
                t1 = "laudantium";
                timespan = 3311.9;
            }};            

            GetOrganizationSensorReadingsHistoryResponse res = sdk.readings.getOrganizationSensorReadingsHistory(req);

            if (res.getOrganizationSensorReadingsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsLatestRequest req = new GetOrganizationSensorReadingsLatestRequest("debitis") {{
                endingBefore = "dignissimos";
                metrics = new String[]{{
                    add("doloribus"),
                }};
                networkIds = new String[]{{
                    add("dicta"),
                    add("non"),
                    add("dolorum"),
                    add("doloribus"),
                }};
                perPage = 875981L;
                serials = new String[]{{
                    add("nulla"),
                }};
                startingAfter = "fugit";
            }};            

            GetOrganizationSensorReadingsLatestResponse res = sdk.readings.getOrganizationSensorReadingsLatest(req);

            if (res.getOrganizationSensorReadingsLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
