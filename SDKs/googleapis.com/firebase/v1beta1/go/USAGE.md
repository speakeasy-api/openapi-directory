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
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "proto",
            Callback: "nesciunt",
            Fields: "qui",
            Key: "nesciunt",
            OauthToken: "quis",
            PageSize: 413522258613888617,
            PageToken: "dignissimos",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "repellendus",
            UploadProtocol: "et",
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