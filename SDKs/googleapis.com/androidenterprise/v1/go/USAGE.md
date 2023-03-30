<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            DeviceID: "corrupti",
            EnterpriseID: "provident",
            UserID: "distinctio",
        },
        QueryParams: operations.AndroidenterpriseDevicesForceReportUploadQueryParams{
            DollarXgafv: "2",
            AccessToken: "unde",
            Alt: "proto",
            Callback: "corrupti",
            Fields: "illum",
            Key: "vel",
            OauthToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Devices.AndroidenterpriseDevicesForceReportUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->