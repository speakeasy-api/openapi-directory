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
    
    req := operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest{
        Security: operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SecuritycenterOrganizationsAssetsRunDiscoveryPathParams{
            Parent: "sed",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolore",
            Alt: "json",
            Callback: "consequatur",
            Fields: "est",
            Key: "asperiores",
            OauthToken: "non",
            PrettyPrint: false,
            QuotaUser: "ab",
            UploadType: "ut",
            UploadProtocol: "aut",
        },
        Request: map[string]interface{}{
            "rerum": "repellat",
            "sed": "at",
            "mollitia": "voluptas",
        },
    }
    
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsRunDiscovery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->