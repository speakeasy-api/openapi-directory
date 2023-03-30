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

    req := operations.YoutubeAnalyticsGroupItemsDeleteRequest{
        Security: operations.YoutubeAnalyticsGroupItemsDeleteSecurity{
            Option1: &operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.YoutubeAnalyticsGroupItemsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            ID: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            OnBehalfOfContentOwner: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->