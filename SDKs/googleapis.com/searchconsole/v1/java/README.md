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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### searchanalytics

* `webmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmastersSitemapsDelete` - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* `webmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `webmastersSitemapsList` -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* `webmastersSitemapsSubmit` - Submits a sitemap for a site.

### sites

* `webmastersSitesAdd` -  Adds a site to the set of the user's sites in Search Console.
* `webmastersSitesDelete` -  Removes a site from the set of the user's Search Console sites.
* `webmastersSitesGet` -  Retrieves information about specific site.
* `webmastersSitesList` -  Lists the user's Search Console sites.

### urlInspection

* `searchconsoleUrlInspectionIndexInspect` - Index inspection.

### urlTestingTools

* `searchconsoleUrlTestingToolsMobileFriendlyTestRun` - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
