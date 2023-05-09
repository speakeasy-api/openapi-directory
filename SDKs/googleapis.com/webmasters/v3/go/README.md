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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Searchanalytics.WebmastersSearchanalyticsQuery(ctx, operations.WebmastersSearchanalyticsQueryRequest{
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: sdk.String("corrupti"),
            DataState: sdk.String("provident"),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("unde"),
                            Expression: sdk.String("nulla"),
                            Operator: sdk.String("corrupti"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("illum"),
                            Expression: sdk.String("vel"),
                            Operator: sdk.String("error"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("deserunt"),
                            Expression: sdk.String("suscipit"),
                            Operator: sdk.String("iure"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("magnam"),
                            Expression: sdk.String("debitis"),
                            Operator: sdk.String("ipsa"),
                        },
                    },
                    GroupType: sdk.String("delectus"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("suscipit"),
                            Expression: sdk.String("molestiae"),
                            Operator: sdk.String("minus"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("placeat"),
                            Expression: sdk.String("voluptatum"),
                            Operator: sdk.String("iusto"),
                        },
                    },
                    GroupType: sdk.String("excepturi"),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("recusandae"),
                            Expression: sdk.String("temporibus"),
                            Operator: sdk.String("ab"),
                        },
                        shared.APIDimensionFilter{
                            Dimension: sdk.String("quis"),
                            Expression: sdk.String("veritatis"),
                            Operator: sdk.String("deserunt"),
                        },
                    },
                    GroupType: sdk.String("perferendis"),
                },
            },
            Dimensions: []string{
                "repellendus",
                "sapiente",
            },
            EndDate: sdk.String("quo"),
            RowLimit: sdk.Int(140350),
            SearchType: sdk.String("at"),
            StartDate: sdk.String("at"),
            StartRow: sdk.Int(978619),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        SiteURL: "totam",
        UserIP: sdk.String("porro"),
    }, operations.WebmastersSearchanalyticsQuerySecurity{
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


### [Searchanalytics](docs/searchanalytics/README.md)

* [WebmastersSearchanalyticsQuery](docs/searchanalytics/README.md#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### [Sitemaps](docs/sitemaps/README.md)

* [WebmastersSitemapsDelete](docs/sitemaps/README.md#webmasterssitemapsdelete) - Deletes a sitemap from this site.
* [WebmastersSitemapsGet](docs/sitemaps/README.md#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [WebmastersSitemapsList](docs/sitemaps/README.md#webmasterssitemapslist) - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* [WebmastersSitemapsSubmit](docs/sitemaps/README.md#webmasterssitemapssubmit) - Submits a sitemap for a site.

### [Sites](docs/sites/README.md)

* [WebmastersSitesAdd](docs/sites/README.md#webmasterssitesadd) - Adds a site to the set of the user's sites in Search Console.
* [WebmastersSitesDelete](docs/sites/README.md#webmasterssitesdelete) - Removes a site from the set of the user's Search Console sites.
* [WebmastersSitesGet](docs/sites/README.md#webmasterssitesget) - Retrieves information about specific site.
* [WebmastersSitesList](docs/sites/README.md#webmasterssiteslist) - Lists the user's Search Console sites.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
