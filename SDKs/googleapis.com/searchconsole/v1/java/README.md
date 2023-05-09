# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [searchanalytics](docs/searchanalytics/README.md)

* [webmastersSearchanalyticsQuery](docs/searchanalytics/README.md#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### [sitemaps](docs/sitemaps/README.md)

* [webmastersSitemapsDelete](docs/sitemaps/README.md#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [webmastersSitemapsGet](docs/sitemaps/README.md#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](docs/sitemaps/README.md#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [webmastersSitemapsSubmit](docs/sitemaps/README.md#webmasterssitemapssubmit) - Submits a sitemap for a site.

### [sites](docs/sites/README.md)

* [webmastersSitesAdd](docs/sites/README.md#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](docs/sites/README.md#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](docs/sites/README.md#webmasterssitesget) -  Retrieves information about specific site.
* [webmastersSitesList](docs/sites/README.md#webmasterssiteslist) -  Lists the user's Search Console sites.

### [urlInspection](docs/urlinspection/README.md)

* [searchconsoleUrlInspectionIndexInspect](docs/urlinspection/README.md#searchconsoleurlinspectionindexinspect) - Index inspection.

### [urlTestingTools](docs/urltestingtools/README.md)

* [searchconsoleUrlTestingToolsMobileFriendlyTestRun](docs/urltestingtools/README.md#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
