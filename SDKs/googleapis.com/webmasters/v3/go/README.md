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
            SiteURL: "corrupti",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "provident",
            Key: "distinctio",
            OauthToken: "quibusdam",
            PrettyPrint: false,
            QuotaUser: "unde",
            UserIP: "nulla",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "corrupti",
            DataState: "illum",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
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
                        shared.APIDimensionFilter{
                            Dimension: "delectus",
                            Expression: "tempora",
                            Operator: "suscipit",
                        },
                    },
                    GroupType: "molestiae",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "placeat",
                            Expression: "voluptatum",
                            Operator: "iusto",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "excepturi",
                            Expression: "nisi",
                            Operator: "recusandae",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "temporibus",
                            Expression: "ab",
                            Operator: "quis",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "veritatis",
                            Expression: "deserunt",
                            Operator: "perferendis",
                        },
                    },
                    GroupType: "ipsam",
                },
            },
            Dimensions: []string{
                "sapiente",
                "quo",
                "odit",
                "at",
            },
            EndDate: "at",
            RowLimit: 978619,
            SearchType: "molestiae",
            StartDate: "quod",
            StartRow: 800911,
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
