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
    
    req := operations.CloudbuildProjectsLocationsOperationsCancelRequest{
        Security: operations.CloudbuildProjectsLocationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudbuildProjectsLocationsOperationsCancelPathParams{
            Name: "a",
        },
        QueryParams: operations.CloudbuildProjectsLocationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "eveniet",
            Alt: "media",
            Callback: "numquam",
            Fields: "assumenda",
            Key: "vitae",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "mollitia",
            UploadType: "ut",
            UploadProtocol: "consequatur",
        },
        Request: map[string]interface{}{
            "tenetur": "repellendus",
        },
    }
    
    res, err := s.Projects.CloudbuildProjectsLocationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->