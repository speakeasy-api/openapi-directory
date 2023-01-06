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
    
    req := operations.DatatransferApplicationsGetRequest{
        Security: operations.DatatransferApplicationsGetSecurity{
            Option1: &operations.DatatransferApplicationsGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DatatransferApplicationsGetPathParams{
            ApplicationID: "dolorum",
        },
        QueryParams: operations.DatatransferApplicationsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "proto",
            Callback: "qui",
            Fields: "voluptatibus",
            Key: "nulla",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "tempora",
            UploadType: "quis",
            UploadProtocol: "tenetur",
        },
    }
    
    res, err := s.Applications.DatatransferApplicationsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->