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
        DollarXgafv: "2",
        GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: "provident",
                Name: "distinctio",
                Resource: "quibusdam",
            },
        },
        AccessToken: "unde",
        Alt: "proto",
        Callback: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsCreate(ctx, req, operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity{
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
<!-- End SDK Example Usage -->