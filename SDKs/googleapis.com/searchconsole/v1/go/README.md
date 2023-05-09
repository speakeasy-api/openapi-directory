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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchAnalyticsQueryRequest: &shared.SearchAnalyticsQueryRequest{
            AggregationType: shared.SearchAnalyticsQueryRequestAggregationTypeEnumByProperty.ToPointer(),
            DataState: shared.SearchAnalyticsQueryRequestDataStateEnumAll.ToPointer(),
            DimensionFilterGroups: []shared.APIDimensionFilterGroup{
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("corrupti"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("error"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumPage.ToPointer(),
                            Expression: sdk.String("iure"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("delectus"),
                            Operator: shared.APIDimensionFilterOperatorEnumNotEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumPage.ToPointer(),
                            Expression: sdk.String("molestiae"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("voluptatum"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("nisi"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("quis"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("perferendis"),
                            Operator: shared.APIDimensionFilterOperatorEnumContains.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumSearchAppearance.ToPointer(),
                            Expression: sdk.String("sapiente"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumQuery.ToPointer(),
                            Expression: sdk.String("at"),
                            Operator: shared.APIDimensionFilterOperatorEnumExcludingRegex.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
                shared.APIDimensionFilterGroup{
                    Filters: []shared.APIDimensionFilter{
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("quod"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumCountry.ToPointer(),
                            Expression: sdk.String("totam"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("dicta"),
                            Operator: shared.APIDimensionFilterOperatorEnumIncludingRegex.ToPointer(),
                        },
                        shared.APIDimensionFilter{
                            Dimension: shared.APIDimensionFilterDimensionEnumDevice.ToPointer(),
                            Expression: sdk.String("occaecati"),
                            Operator: shared.APIDimensionFilterOperatorEnumEquals.ToPointer(),
                        },
                    },
                    GroupType: shared.APIDimensionFilterGroupGroupTypeEnumAnd.ToPointer(),
                },
            },
            Dimensions: []shared.SearchAnalyticsQueryRequestDimensionsEnum{
                shared.SearchAnalyticsQueryRequestDimensionsEnumSearchAppearance,
                shared.SearchAnalyticsQueryRequestDimensionsEnumDevice,
                shared.SearchAnalyticsQueryRequestDimensionsEnumCountry,
            },
            EndDate: sdk.String("beatae"),
            RowLimit: sdk.Int(414662),
            SearchType: shared.SearchAnalyticsQueryRequestSearchTypeEnumVideo.ToPointer(),
            StartDate: sdk.String("modi"),
            StartRow: sdk.Int(186332),
            Type: shared.SearchAnalyticsQueryRequestTypeEnumDiscover.ToPointer(),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        SiteURL: "natus",
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
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

* [WebmastersSearchanalyticsQuery](docs/searchanalytics/README.md#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### [Sitemaps](docs/sitemaps/README.md)

* [WebmastersSitemapsDelete](docs/sitemaps/README.md#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [WebmastersSitemapsGet](docs/sitemaps/README.md#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [WebmastersSitemapsList](docs/sitemaps/README.md#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [WebmastersSitemapsSubmit](docs/sitemaps/README.md#webmasterssitemapssubmit) - Submits a sitemap for a site.

### [Sites](docs/sites/README.md)

* [WebmastersSitesAdd](docs/sites/README.md#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [WebmastersSitesDelete](docs/sites/README.md#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [WebmastersSitesGet](docs/sites/README.md#webmasterssitesget) -  Retrieves information about specific site.
* [WebmastersSitesList](docs/sites/README.md#webmasterssiteslist) -  Lists the user's Search Console sites.

### [URLInspection](docs/urlinspection/README.md)

* [SearchconsoleURLInspectionIndexInspect](docs/urlinspection/README.md#searchconsoleurlinspectionindexinspect) - Index inspection.

### [URLTestingTools](docs/urltestingtools/README.md)

* [SearchconsoleURLTestingToolsMobileFriendlyTestRun](docs/urltestingtools/README.md#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
