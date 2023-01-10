<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "autem",
        },
        QueryParams: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "json",
            Callback: "qui",
            Fields: "quis",
            Key: "facilis",
            OauthToken: "reprehenderit",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "quod",
            UploadProtocol: "perspiciatis",
        },
        Request: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: "accusantium",
                Name: "impedit",
                Resource: "nihil",
            },
        },
    }
    
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->