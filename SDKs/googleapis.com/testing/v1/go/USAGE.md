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
    
    req := operations.TestingApplicationDetailServiceGetApkDetailsRequest{
        Security: operations.TestingApplicationDetailServiceGetApkDetailsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.TestingApplicationDetailServiceGetApkDetailsQueryParams{
            DollarXgafv: "2",
            AccessToken: "ex",
            Alt: "json",
            Callback: "consequatur",
            Fields: "ab",
            Key: "et",
            OauthToken: "sit",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "amet",
            UploadProtocol: "nihil",
        },
        Request: &shared.FileReference{
            GcsPath: "officia",
        },
    }
    
    res, err := s.ApplicationDetailService.TestingApplicationDetailServiceGetApkDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApkDetailsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->