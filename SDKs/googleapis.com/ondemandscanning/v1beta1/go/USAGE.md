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
    
    req := operations.OndemandscanningProjectsLocationsOperationsCancelRequest{
        Security: operations.OndemandscanningProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OndemandscanningProjectsLocationsOperationsCancelPathParams{
            Name: "consectetur",
        },
        QueryParams: operations.OndemandscanningProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "json",
            Callback: "quia",
            Fields: "rerum",
            Key: "facere",
            OauthToken: "architecto",
            PrettyPrint: true,
            QuotaUser: "ipsam",
            UploadType: "repudiandae",
            UploadProtocol: "illo",
        },
    }
    
    res, err := s.Projects.OndemandscanningProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->