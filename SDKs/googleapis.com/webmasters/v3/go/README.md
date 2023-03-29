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
            SiteURL: "unde",
        },
        QueryParams: operations.WebmastersSearchanalyticsQueryQueryParams{
            Alt: "json",
            Fields: "porro",
            Key: "nulla",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "vero",
            UserIP: "perspiciatis",
        },
        Request: &shared.SearchAnalyticsQueryRequest{
            AggregationType: "nulla",
            DataState: "nihil",
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "eum",
                            Expression: "iusto",
                            Operator: "ullam",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "saepe",
                            Expression: "inventore",
                            Operator: "sapiente",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "enim",
                            Expression: "eum",
                            Operator: "voluptatum",
                        },
                    },
                    GroupType: "autem",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "non",
                            Expression: "deleniti",
                            Operator: "similique",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "reprehenderit",
                            Expression: "molestiae",
                            Operator: "quo",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quasi",
                            Expression: "laboriosam",
                            Operator: "dicta",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "est",
                            Expression: "voluptatem",
                            Operator: "consequatur",
                        },
                    },
                    GroupType: "fugiat",
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: "omnis",
                            Expression: "eos",
                            Operator: "accusamus",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "accusamus",
                            Expression: "reiciendis",
                            Operator: "rem",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "quibusdam",
                            Expression: "et",
                            Operator: "praesentium",
                        },
                        shared.APIDimensionFilter{
                            Dimension: "occaecati",
                            Expression: "dolor",
                            Operator: "soluta",
                        },
                    },
                    GroupType: "sed",
                },
            },
            Dimensions: []string{
                "rerum",
                "culpa",
                "qui",
            },
            EndDate: "sed",
            RowLimit: 944669,
            SearchType: "possimus",
            StartDate: "occaecati",
            StartRow: 105907,
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
