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
            Parent: "officiis",
        },
        QueryParams: operations.SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams{
            DollarXgafv: "1",
            AccessToken: "omnis",
            Alt: "media",
            Callback: "ullam",
            Fields: "molestiae",
            Key: "facere",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "quis",
            UploadType: "iure",
            UploadProtocol: "neque",
        },
        Request: map[string]interface{}{
            "aspernatur": "sed",
            "temporibus": "culpa",
            "soluta": "dolor",
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