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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            ID: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            OnBehalfOfContentOwner: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
    }
    
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->