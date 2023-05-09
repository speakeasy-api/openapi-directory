<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryRequest;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryResponse;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurity;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilter;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest("corrupti") {{
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "provident";
                    dataState = "distinctio";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "nulla";
                                    expression = "corrupti";
                                    operator = "illum";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "vel";
                                    expression = "error";
                                    operator = "deserunt";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "suscipit";
                                    expression = "iure";
                                    operator = "magnam";
                                }}),
                            }};
                            groupType = "debitis";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "delectus";
                                    expression = "tempora";
                                    operator = "suscipit";
                                }}),
                            }};
                            groupType = "molestiae";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "placeat";
                                    expression = "voluptatum";
                                    operator = "iusto";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "excepturi";
                                    expression = "nisi";
                                    operator = "recusandae";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "temporibus";
                                    expression = "ab";
                                    operator = "quis";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "veritatis";
                                    expression = "deserunt";
                                    operator = "perferendis";
                                }}),
                            }};
                            groupType = "ipsam";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "sapiente";
                                    expression = "quo";
                                    operator = "odit";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "at";
                                    expression = "at";
                                    operator = "maiores";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "molestiae";
                                    expression = "quod";
                                    operator = "quod";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "esse";
                                    expression = "totam";
                                    operator = "porro";
                                }}),
                            }};
                            groupType = "dolorum";
                        }}),
                    }};
                    dimensions = new String[]{{
                        add("nam"),
                    }};
                    endDate = "officia";
                    rowLimit = 582020;
                    searchType = "fugit";
                    startDate = "deleniti";
                    startRow = 944669;
                }};;
                alt = AltEnum.JSON;
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                userIp = "molestiae";
            }};            

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req, new WebmastersSearchanalyticsQuerySecurity() {{
                option1 = new WebmastersSearchanalyticsQuerySecurityOption1("modi", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchAnalyticsQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->