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
                    routeType = 2259404117704393152;
                    stopId = 6050128673802995827;
                }};
                queryParams = new DeparturesGetForStopQueryParams() {{
                    dateUtc = "2019-04-21T07:38:14Z";
                    devid = "consequuntur";
                    directionId = 2669985732393126063;
                    expand = new openapisdk.models.operations.DeparturesGetForStopExpandEnum[]() {{
                        add("None"),
                        add("All"),
                    }};
                    gtfs = false;
                    includeCancelled = true;
                    includeGeopath = true;
                    lookBackwards = false;
                    maxResults = 2518412263346885298;
                    platformNumbers = new Integer[]() {{
                        add(2339563716805116249),
                    }};
                    signature = "ut";
                    token = "dolorem";
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