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
                    siteUrl = "eum";
                }};
                queryParams = new WebmastersSearchanalyticsQueryQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dicta";
                    alt = "media";
                    callback = "omnis";
                    fields = "non";
                    key = "quasi";
                    oauthToken = "at";
                    prettyPrint = true;
                    quotaUser = "tempore";
                    uploadType = "corporis";
                    uploadProtocol = "minima";
                }};
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "BY_PROPERTY";
                    dataState = "ALL";
                    dimensionFilterGroups = new openapisdk.models.shared.ApiDimensionFilterGroup[]() {{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "DEVICE";
                                    expression = "distinctio";
                                    operator = "CONTAINS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "aut";
                                    operator = "EXCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "QUERY";
                                    expression = "eos";
                                    operator = "EQUALS";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "DEVICE";
                                    expression = "voluptatem";
                                    operator = "NOT_CONTAINS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "ea";
                                    operator = "NOT_EQUALS";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "occaecati";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "QUERY";
                                    expression = "earum";
                                    operator = "NOT_CONTAINS";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                    }};
                    dimensions = new openapisdk.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]() {{
                        add("SEARCH_APPEARANCE"),
                        add("COUNTRY"),
                    }};
                    endDate = "sint";
                    rowLimit = 1156090135587436031;
                    searchType = "VIDEO";
                    startDate = "doloribus";
                    startRow = 8555304527772983074;
                    type = "NEWS";
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