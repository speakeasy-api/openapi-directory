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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            ID: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            OnBehalfOfContentOwner: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
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