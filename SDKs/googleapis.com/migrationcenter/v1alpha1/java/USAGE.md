<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;
import org.openapis.openapi.models.shared.AggregateAssetsValuesRequest;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationHistogram;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsAggregateValuesRequest req = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                aggregateAssetsValuesRequest = new AggregateAssetsValuesRequest() {{
                    aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("unde", "nulla");
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                            }};
                            field = "iure";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("debitis", "ipsa");
                                put("delectus", "tempora");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(4776.65),
                                    add(7917.25),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("voluptatum", "iusto");
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("deserunt", "perferendis");
                            }};
                            field = "ipsam";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("sapiente", "quo");
                                put("odit", "at");
                                put("at", "maiores");
                                put("molestiae", "quod");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(4614.79),
                                    add(5204.78),
                                    add(7805.29),
                                    add(6788.8),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("nam", "officia");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("fugit", "deleniti");
                                put("hic", "optio");
                                put("totam", "beatae");
                            }};
                            field = "commodi";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("modi", "qui");
                                put("impedit", "cum");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(2165.5),
                                    add(5684.34),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("perferendis", "ad");
                            }};
                        }}),
                    }};
                    filter = "natus";
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            MigrationcenterProjectsLocationsAssetsAggregateValuesResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req, new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity("corporis", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.aggregateAssetsValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->