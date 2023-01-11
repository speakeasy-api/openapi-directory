# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "BY_PAGE";
                    dataState = "DATA_STATE_UNSPECIFIED";
                    dimensionFilterGroups = new openapisdk.models.shared.ApiDimensionFilterGroup[]() {{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new openapisdk.models.shared.ApiDimensionFilter[]() {{
                                add(new ApiDimensionFilter() {{
                                    dimension = "PAGE";
                                    expression = "dolorem";
                                    operator = "INCLUDING_REGEX";
                                }}),
                            }};
                            groupType = "AND";
                        }}),
                    }};
                    dimensions = new openapisdk.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]() {{
                        add("DATE"),
                        add("PAGE"),
                        add("DATE"),
                    }};
                    endDate = "illum";
                    rowLimit = 6392442863481646880;
                    searchType = "DISCOVER";
                    startDate = "odio";
                    startRow = 6303220950515014660;
                    type = "DISCOVER";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
