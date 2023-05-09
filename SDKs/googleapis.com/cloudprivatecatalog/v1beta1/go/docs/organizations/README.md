# Organizations

### Available Operations

* [CloudprivatecatalogOrganizationsCatalogsSearch](#cloudprivatecatalogorganizationscatalogssearch) - Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [CloudprivatecatalogOrganizationsProductsSearch](#cloudprivatecatalogorganizationsproductssearch) - Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [CloudprivatecatalogOrganizationsVersionsSearch](#cloudprivatecatalogorganizationsversionssearch) - Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

## CloudprivatecatalogOrganizationsCatalogsSearch

Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

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
    res, err := s.Organizations.CloudprivatecatalogOrganizationsCatalogsSearch(ctx, operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PageSize: sdk.Int64(812169),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("iusto"),
        QuotaUser: sdk.String("excepturi"),
        Resource: "nisi",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogOrganizationsProductsSearch

Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

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
    res, err := s.Organizations.CloudprivatecatalogOrganizationsProductsSearch(ctx, operations.CloudprivatecatalogOrganizationsProductsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PageSize: sdk.Int64(957156),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("odit"),
        QuotaUser: sdk.String("at"),
        Resource: "at",
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.CloudprivatecatalogOrganizationsProductsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogOrganizationsVersionsSearch

Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

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
    res, err := s.Organizations.CloudprivatecatalogOrganizationsVersionsSearch(ctx, operations.CloudprivatecatalogOrganizationsVersionsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(720633),
        PageToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("occaecati"),
        QuotaUser: sdk.String("fugit"),
        Resource: "deleniti",
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.CloudprivatecatalogOrganizationsVersionsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
