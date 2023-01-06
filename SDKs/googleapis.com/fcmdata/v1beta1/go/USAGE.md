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
            Parent: "sequi",
        },
        QueryParams: operations.FcmdataProjectsAndroidAppsDeliveryDataListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quae",
            Alt: "json",
            Callback: "et",
            Fields: "et",
            Key: "eum",
            OauthToken: "itaque",
            PageSize: 7316543229150888277,
            PageToken: "rem",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "repellat",
            UploadProtocol: "eum",
        },
    }
    
    res, err := s.Projects.FcmdataProjectsAndroidAppsDeliveryDataList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->