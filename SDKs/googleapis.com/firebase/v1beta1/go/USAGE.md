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
    
    req := operations.FirebaseAvailableProjectsListRequest{
        Security: operations.FirebaseAvailableProjectsListSecurity{
            Option1: &operations.FirebaseAvailableProjectsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.FirebaseAvailableProjectsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "possimus",
            Alt: "proto",
            Callback: "velit",
            Fields: "veritatis",
            Key: "dolorum",
            OauthToken: "sed",
            PageSize: 365548328721826458,
            PageToken: "non",
            PrettyPrint: false,
            QuotaUser: "commodi",
            UploadType: "ex",
            UploadProtocol: "vitae",
        },
    }
    
    res, err := s.AvailableProjects.FirebaseAvailableProjectsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableProjectsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->