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
import org.openapis.openapi.models.shared.ApiDimensionFilterDimensionEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroupGroupTypeEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterOperatorEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestAggregationTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDataStateEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestSearchTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = SearchAnalyticsQueryRequestAggregationTypeEnum.BY_PAGE;
                    dataState = SearchAnalyticsQueryRequestDataStateEnum.ALL;
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.COUNTRY;
                                    expression = "illum";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.DEVICE;
                                    expression = "deserunt";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.COUNTRY;
                                    expression = "magnam";
                                    operator = ApiDimensionFilterOperatorEnum.EXCLUDING_REGEX;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.QUERY;
                                    expression = "delectus";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_EQUALS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.COUNTRY;
                                    expression = "minus";
                                    operator = ApiDimensionFilterOperatorEnum.INCLUDING_REGEX;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.COUNTRY;
                                    expression = "iusto";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_CONTAINS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.SEARCH_APPEARANCE;
                                    expression = "temporibus";
                                    operator = ApiDimensionFilterOperatorEnum.EQUALS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "veritatis";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_CONTAINS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]{{
                        add(SearchAnalyticsQueryRequestDimensionsEnum.PAGE),
                    }};
                    endDate = "repellendus";
                    rowLimit = 957156;
                    searchType = SearchAnalyticsQueryRequestSearchTypeEnum.DISCOVER;
                    startDate = "odit";
                    startRow = 870013;
                    type = SearchAnalyticsQueryRequestTypeEnum.GOOGLE_NEWS;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req, new WebmastersSearchanalyticsQuerySecurity() {{
                option1 = new WebmastersSearchanalyticsQuerySecurityOption1("nam", "officia") {{
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