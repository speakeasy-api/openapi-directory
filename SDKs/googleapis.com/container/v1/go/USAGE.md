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
    
    req := operations.ContainerProjectsAggregatedUsableSubnetworksListRequest{
        Security: operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContainerProjectsAggregatedUsableSubnetworksListPathParams{
            Parent: "sit",
        },
        QueryParams: operations.ContainerProjectsAggregatedUsableSubnetworksListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Filter: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PageSize: 1543572285742637646,
            PageToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
    }
    
    res, err := s.Projects.ContainerProjectsAggregatedUsableSubnetworksList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableSubnetworksResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->