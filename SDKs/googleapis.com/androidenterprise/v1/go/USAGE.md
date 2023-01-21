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
    
    req := operations.AndroidenterpriseDevicesForceReportUploadRequest{
        Security: operations.AndroidenterpriseDevicesForceReportUploadSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidenterpriseDevicesForceReportUploadPathParams{
            DeviceID: "sit",
            EnterpriseID: "voluptas",
            UserID: "culpa",
        },
        QueryParams: operations.AndroidenterpriseDevicesForceReportUploadQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequuntur",
            Alt: "media",
            Callback: "expedita",
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
    }
    
    res, err := s.Devices.AndroidenterpriseDevicesForceReportUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->