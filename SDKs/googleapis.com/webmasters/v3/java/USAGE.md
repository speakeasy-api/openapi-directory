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
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.ApiDimensionFilter;
import org.openapis.openapi.models.shared.AltEnum;
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
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
                }};
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "corrupti";
                    dataState = "illum";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
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
                    }};
                    dimensions = new String[]{{
                        add("sapiente"),
                        add("quo"),
                        add("odit"),
                        add("at"),
                    }};
                    endDate = "at";
                    rowLimit = 978619;
                    searchType = "molestiae";
                    startDate = "quod";
                    startRow = 800911;
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