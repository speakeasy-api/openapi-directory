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
            Parent: "aperiam",
        },
        QueryParams: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "voluptatum",
            Fields: "nisi",
            Key: "pariatur",
            OauthToken: "natus",
            PrettyPrint: false,
            QuotaUser: "earum",
            UploadType: "ex",
            UploadProtocol: "ab",
        },
        Request: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: "ad",
                Name: "earum",
                Resource: "nam",
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