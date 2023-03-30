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

    req := operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest{
        Security: operations.FcmdataProjectsAndroidAppsDeliveryDataListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FcmdataProjectsAndroidAppsDeliveryDataListPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.FcmdataProjectsAndroidAppsDeliveryDataListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PageSize: 423655,
            PageToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FcmdataProjectsAndroidAppsDeliveryDataList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->