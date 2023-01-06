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
            Resource: "nemo",
        },
        QueryParams: operations.CloudprivatecatalogOrganizationsCatalogsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "nisi",
            Alt: "media",
            Callback: "totam",
            Fields: "ducimus",
            Key: "ea",
            OauthToken: "ipsa",
            PageSize: 5500056277977155702,
            PageToken: "voluptatem",
            PrettyPrint: false,
            Query: "beatae",
            QuotaUser: "cumque",
            UploadType: "pariatur",
            UploadProtocol: "possimus",
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