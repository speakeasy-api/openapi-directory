# Catalog

### Available Operations

* [DatacatalogCatalogSearch](#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

## DatacatalogCatalogSearch

Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

### Example Usage

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
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, operations.DatacatalogCatalogSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogV1SearchCatalogRequest: &shared.GoogleCloudDatacatalogV1SearchCatalogRequest{
            OrderBy: sdk.String("quis"),
            PageSize: sdk.Int(87129),
            PageToken: sdk.String("deserunt"),
            Query: sdk.String("perferendis"),
            Scope: &shared.GoogleCloudDatacatalogV1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: sdk.Bool(false),
                IncludeOrgIds: []string{
                    "repellendus",
                    "sapiente",
                },
                IncludeProjectIds: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
                IncludePublicTagTemplates: sdk.Bool(false),
                RestrictedLocations: []string{
                    "quod",
                    "quod",
                },
                StarredOnly: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.DatacatalogCatalogSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1SearchCatalogResponse != nil {
        // handle response
    }
}
```
