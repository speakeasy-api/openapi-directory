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
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "sint",
            Fields: "sed",
            Key: "modi",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "error",
            UploadType: "eos",
            UploadProtocol: "modi",
        },
        Request: &shared.FileReference{
            GcsPath: "neque",
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