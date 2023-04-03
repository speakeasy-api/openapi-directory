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
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestAggregationTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDataStateEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestSearchTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroupGroupTypeEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.ApiDimensionFilterDimensionEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterOperatorEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest() {{
                dollarXgafv = "2";
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "BY_PROPERTY";
                    dataState = "ALL";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "SEARCH_APPEARANCE";
                                    expression = "corrupti";
                                    operator = "EXCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "error";
                                    operator = "NOT_CONTAINS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "PAGE";
                                    expression = "iure";
                                    operator = "NOT_EQUALS";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "QUERY";
                                    expression = "delectus";
                                    operator = "NOT_EQUALS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "PAGE";
                                    expression = "molestiae";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "SEARCH_APPEARANCE";
                                    expression = "voluptatum";
                                    operator = "CONTAINS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "nisi";
                                    operator = "EXCLUDING_REGEX";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "QUERY";
                                    expression = "quis";
                                    operator = "EQUALS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "DEVICE";
                                    expression = "perferendis";
                                    operator = "CONTAINS";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "SEARCH_APPEARANCE";
                                    expression = "sapiente";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "QUERY";
                                    expression = "at";
                                    operator = "EXCLUDING_REGEX";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "quod";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "COUNTRY";
                                    expression = "totam";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "DEVICE";
                                    expression = "dicta";
                                    operator = "INCLUDING_REGEX";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "DEVICE";
                                    expression = "occaecati";
                                    operator = "EQUALS";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]{{
                        add("SEARCH_APPEARANCE"),
                        add("DEVICE"),
                        add("COUNTRY"),
                    }};
                    endDate = "beatae";
                    rowLimit = 414662;
                    searchType = "VIDEO";
                    startDate = "modi";
                    startRow = 186332;
                    type = "DISCOVER";
                }};
                accessToken = "cum";
                alt = "media";
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                siteUrl = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
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