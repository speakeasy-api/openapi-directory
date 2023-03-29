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

    req := operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest{
        Security: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams{
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
        Request: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: "eum",
                Name: "iusto",
                Resource: "ullam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->