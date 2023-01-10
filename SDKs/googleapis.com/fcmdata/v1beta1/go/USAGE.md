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
            Parent: "et",
        },
        QueryParams: operations.FcmdataProjectsAndroidAppsDeliveryDataListQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatem",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "iusto",
            Key: "totam",
            OauthToken: "ea",
            PageSize: 2572624293435492387,
            PageToken: "dicta",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "omnis",
            UploadProtocol: "qui",
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