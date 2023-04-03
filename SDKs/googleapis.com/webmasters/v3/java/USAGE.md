<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption2;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurity;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryRequest;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.ApiDimensionFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest() {{
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "corrupti";
                    dataState = "provident";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "unde";
                                    expression = "nulla";
                                    operator = "corrupti";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "illum";
                                    expression = "vel";
                                    operator = "error";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "deserunt";
                                    expression = "suscipit";
                                    operator = "iure";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "magnam";
                                    expression = "debitis";
                                    operator = "ipsa";
                                }}),
                            }};
                            groupType = "delectus";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "suscipit";
                                    expression = "molestiae";
                                    operator = "minus";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "placeat";
                                    expression = "voluptatum";
                                    operator = "iusto";
                                }}),
                            }};
                            groupType = "excepturi";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "recusandae";
                                    expression = "temporibus";
                                    operator = "ab";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "quis";
                                    expression = "veritatis";
                                    operator = "deserunt";
                                }}),
                            }};
                            groupType = "perferendis";
                        }}),
                    }};
                    dimensions = new String[]{{
                        add("repellendus"),
                        add("sapiente"),
                    }};
                    endDate = "quo";
                    rowLimit = 140350;
                    searchType = "at";
                    startDate = "at";
                    startRow = 978619;
                }};
                alt = "json";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "esse";
                siteUrl = "totam";
                userIp = "porro";
            }}            

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req, new WebmastersSearchanalyticsQuerySecurity() {{
                option1 = new WebmastersSearchanalyticsQuerySecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchAnalyticsQueryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->