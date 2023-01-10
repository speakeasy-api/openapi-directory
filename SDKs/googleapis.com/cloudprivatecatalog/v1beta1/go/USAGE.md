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
    
    req := operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest{
        Security: operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudprivatecatalogOrganizationsCatalogsSearchPathParams{
            Resource: "ea",
        },
        QueryParams: operations.CloudprivatecatalogOrganizationsCatalogsSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "ad",
            Alt: "proto",
            Callback: "quod",
            Fields: "similique",
            Key: "cupiditate",
            OauthToken: "error",
            PageSize: 757289501571609051,
            PageToken: "aut",
            PrettyPrint: true,
            Query: "magnam",
            QuotaUser: "suscipit",
            UploadType: "earum",
            UploadProtocol: "ut",
        },
    }
    
    res, err := s.Organizations.CloudprivatecatalogOrganizationsCatalogsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->