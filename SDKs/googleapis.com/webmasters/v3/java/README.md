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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### searchanalytics

* `webmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmastersSitemapsDelete` - Deletes a sitemap from this site.
* `webmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `webmastersSitemapsList` - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* `webmastersSitemapsSubmit` - Submits a sitemap for a site.

### sites

* `webmastersSitesAdd` - Adds a site to the set of the user's sites in Search Console.
* `webmastersSitesDelete` - Removes a site from the set of the user's Search Console sites.
* `webmastersSitesGet` - Retrieves information about specific site.
* `webmastersSitesList` - Lists the user's Search Console sites.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
