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

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest() {{
                security = new WebmastersSearchanalyticsQuerySecurity() {{
                    option1 = new WebmastersSearchanalyticsQuerySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new WebmastersSearchanalyticsQueryPathParams() {{
                    siteUrl = "aut";
                }};
                queryParams = new WebmastersSearchanalyticsQueryQueryParams() {{
                    alt = "json";
                    fields = "accusamus";
                    key = "quae";
                    oauthToken = "ullam";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "non";
                }};
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "beatae";
                    dataState = "laboriosam";
                    dimensionFilterGroups = new openapisdk.models.shared.ApiDimensionFilterGroup[]() {{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "nostrum";
                                    expression = "maxime";
                                    operator = "vitae";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "reprehenderit";
                                    expression = "et";
                                    operator = "deserunt";
                                }}),
                            }};
                            groupType = "pariatur";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "tempore";
                                    expression = "et";
                                    operator = "aut";
                                }}),
                            }};
                            groupType = "perferendis";
                        }}),
                    }};
                    dimensions = new String[]() {{
                        add("perferendis"),
                    }};
                    endDate = "est";
                    rowLimit = 2796827738156649858;
                    searchType = "tempora";
                    startDate = "nobis";
                    startRow = 2245268790520191191;
                }};
            }};

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req);

            if (res.searchAnalyticsQueryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->