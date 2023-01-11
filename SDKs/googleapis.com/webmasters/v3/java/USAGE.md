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
                    siteUrl = "sit";
                }};
                queryParams = new WebmastersSearchanalyticsQueryQueryParams() {{
                    alt = "json";
                    fields = "culpa";
                    key = "expedita";
                    oauthToken = "consequuntur";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    userIp = "voluptas";
                }};
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "fugit";
                    dataState = "et";
                    dimensionFilterGroups = new openapisdk.models.shared.ApiDimensionFilterGroup[]() {{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "dicta";
                                    expression = "debitis";
                                    operator = "voluptatum";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "et";
                                    expression = "ut";
                                    operator = "dolorem";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "et";
                                    expression = "voluptate";
                                    operator = "iste";
                                }}),
                            }};
                            groupType = "vitae";
                        }}),
                    }};
                    dimensions = new String[]() {{
                        add("dolores"),
                        add("illum"),
                        add("debitis"),
                    }};
                    endDate = "vel";
                    rowLimit = 2627038740284806767;
                    searchType = "dolore";
                    startDate = "id";
                    startRow = 959367522974354090;
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