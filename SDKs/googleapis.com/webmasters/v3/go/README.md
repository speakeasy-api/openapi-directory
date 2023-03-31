# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/webmasters/v3/go
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
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "corrupti",
            DataState: "provident",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "unde",
                            Expression: "nulla",
                            Operator: "corrupti",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "illum",
                            Expression: "vel",
                            Operator: "error",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "deserunt",
                            Expression: "suscipit",
                            Operator: "iure",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "magnam",
                            Expression: "debitis",
                            Operator: "ipsa",
                        },
                    },
                    GroupType: "delectus",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "suscipit",
                            Expression: "molestiae",
                            Operator: "minus",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "placeat",
                            Expression: "voluptatum",
                            Operator: "iusto",
                        },
                    },
                    GroupType: "excepturi",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "recusandae",
                            Expression: "temporibus",
                            Operator: "ab",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quis",
                            Expression: "veritatis",
                            Operator: "deserunt",
                        },
                    },
                    GroupType: "perferendis",
                },
            },
            Dimensions: []string{
                "repellendus",
                "sapiente",
            },
            EndDate: "quo",
            RowLimit: 140350,
            SearchType: "at",
            StartDate: "at",
            StartRow: 978619,
        },
        Alt: "json",
        Fields: "molestiae",
        Key: "quod",
        OauthToken: "quod",
        PrettyPrint: false,
        QuotaUser: "esse",
        SiteURL: "totam",
        UserIP: "porro",
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

* `WebmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Sitemaps

* `WebmastersSitemapsDelete` - Deletes a sitemap from this site.
* `WebmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `WebmastersSitemapsList` - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* `WebmastersSitemapsSubmit` - Submits a sitemap for a site.

### Sites

* `WebmastersSitesAdd` - Adds a site to the set of the user's sites in Search Console.
* `WebmastersSitesDelete` - Removes a site from the set of the user's Search Console sites.
* `WebmastersSitesGet` - Retrieves information about specific site.
* `WebmastersSitesList` - Lists the user's Search Console sites.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
