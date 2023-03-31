<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption2;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurity;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryPathParams;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryQueryParams;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryRequest;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    siteUrl = "corrupti";
                }};
                queryParams = new WebmastersSearchanalyticsQueryQueryParams() {{
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
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "BY_PROPERTY";
                    dataState = "FINAL";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
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
                    }};
                    dimensions = new org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]{{
                        add("PAGE"),
                        add("DEVICE"),
                        add("DEVICE"),
                        add("PAGE"),
                    }};
                    endDate = "totam";
                    rowLimit = 780529;
                    searchType = "DISCOVER";
                    startDate = "dicta";
                    startRow = 720633;
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