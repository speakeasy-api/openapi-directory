# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/searchconsole/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.WebmastersSearchanalyticsQueryRequest{
        Security: operations.WebmastersSearchanalyticsQuerySecurity{
            Option1: &operations.WebmastersSearchanalyticsQuerySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.WebmastersSearchanalyticsQueryPathParams{
            SiteURL: "unde",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "FINAL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "sapiente",
                            Operator: "NOT_EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "voluptatum",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "non",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "reprehenderit",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "dicta",
                            Operator: "NOT_CONTAINS",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "DEVICE",
                "SEARCH_APPEARANCE",
            },
            EndDate: "omnis",
            RowLimit: 140350,
            SearchType: "GOOGLE_NEWS",
            StartDate: "accusamus",
            StartRow: 978619,
            Type: "VIDEO",
        },
    }

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAnalyticsQueryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Searchanalytics

* `WebmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Sitemaps

* `WebmastersSitemapsDelete` - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* `WebmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `WebmastersSitemapsList` -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* `WebmastersSitemapsSubmit` - Submits a sitemap for a site.

### Sites

* `WebmastersSitesAdd` -  Adds a site to the set of the user's sites in Search Console.
* `WebmastersSitesDelete` -  Removes a site from the set of the user's Search Console sites.
* `WebmastersSitesGet` -  Retrieves information about specific site.
* `WebmastersSitesList` -  Lists the user's Search Console sites.

### URLInspection

* `SearchconsoleURLInspectionIndexInspect` - Index inspection.

### URLTestingTools

* `SearchconsoleURLTestingToolsMobileFriendlyTestRun` - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
