# Catalog

### Available Operations

* [DatacatalogCatalogSearch](#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

## DatacatalogCatalogSearch

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

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
        GoogleCloudDatacatalogV1beta1SearchCatalogRequest: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest{
            OrderBy: sdk.String("quis"),
            PageSize: sdk.Int(87129),
            PageToken: sdk.String("deserunt"),
            Query: sdk.String("perferendis"),
            Scope: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope{
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
                RestrictedLocations: []string{
                    "quod",
                    "quod",
                },
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

    if res.GoogleCloudDatacatalogV1beta1SearchCatalogResponse != nil {
        // handle response
    }
}
```
