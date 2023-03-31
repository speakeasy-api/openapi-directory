<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesResponse;
import org.openapis.openapi.models.shared.AggregateAssetsValuesRequest;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationHistogram;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsAggregateValuesRequest req = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest() {{
                security = new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AggregateAssetsValuesRequest() {{
                    aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                            field = "tempora";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(5680.45),
                                    add(3927.85),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("quo", "odit");
                                put("at", "at");
                                put("maiores", "molestiae");
                                put("quod", "quod");
                            }};
                            field = "esse";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(5373.73),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("optio", "totam");
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }};
                        }}),
                    }};
                    filter = "cum";
                }};
            }};            

            MigrationcenterProjectsLocationsAssetsAggregateValuesResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req);

            if (res.aggregateAssetsValuesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->