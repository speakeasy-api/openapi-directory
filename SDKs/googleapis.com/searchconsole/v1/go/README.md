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
        DollarXgafv: "2",
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "BY_PROPERTY",
            DataState: "ALL",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "corrupti",
                            Operator: "EXCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "error",
                            Operator: "NOT_CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "iure",
                            Operator: "NOT_EQUALS",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "delectus",
                            Operator: "NOT_EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "PAGE",
                            Expression: "molestiae",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "voluptatum",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "nisi",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "quis",
                            Operator: "EQUALS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "perferendis",
                            Operator: "CONTAINS",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "SEARCH_APPEARANCE",
                            Expression: "sapiente",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "QUERY",
                            Expression: "at",
                            Operator: "EXCLUDING_REGEX",
                        },
                    },
                    GroupType: "AND",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "quod",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "COUNTRY",
                            Expression: "totam",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "dicta",
                            Operator: "INCLUDING_REGEX",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "DEVICE",
                            Expression: "occaecati",
                            Operator: "EQUALS",
                        },
                    },
                    GroupType: "AND",
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                "SEARCH_APPEARANCE",
                "DEVICE",
                "COUNTRY",
            },
            EndDate: "beatae",
            RowLimit: 414662,
            SearchType: "VIDEO",
            StartDate: "modi",
            StartRow: 186332,
            Type: "DISCOVER",
        },
        AccessToken: "cum",
        Alt: "media",
        Callback: "ipsum",
        Fields: "excepturi",
        Key: "aspernatur",
        OauthToken: "perferendis",
        PrettyPrint: false,
        QuotaUser: "ad",
        SiteURL: "natus",
        UploadType: "sed",
        UploadProtocol: "iste",
    }

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, req, operations.WebmastersSearchanalyticsQuerySecurity{
        Option1: &operations.WebmastersSearchanalyticsQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
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
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
