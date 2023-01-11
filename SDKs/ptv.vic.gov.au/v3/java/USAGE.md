<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DeparturesGetForStopRequest req = new DeparturesGetForStopRequest() {{
                pathParams = new DeparturesGetForStopPathParams() {{
                    routeType = 8717895732742165505;
                    stopId = 2259404117704393152;
                }};
                queryParams = new DeparturesGetForStopQueryParams() {{
                    dateUtc = "1978-05-13T03:50:47Z";
                    devid = "expedita";
                    directionId = 3390393562759376202;
                    expand = new openapisdk.models.operations.DeparturesGetForStopExpandEnum[]() {{
                        add("VehiclePosition"),
                        add("None"),
                    }};
                    gtfs = true;
                    includeCancelled = false;
                    includeGeopath = true;
                    lookBackwards = true;
                    maxResults = 7837839688282259259;
                    platformNumbers = new Integer[]() {{
                        add(5617773211005988520),
                    }};
                    signature = "et";
                    token = "ut";
                }};
            }};

            DeparturesGetForStopResponse res = sdk.departures.departuresGetForStop(req);

            if (res.v3DeparturesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->