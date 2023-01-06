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
    
    req := operations.GamesManagementAchievementsResetRequest{
        Security: operations.GamesManagementAchievementsResetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GamesManagementAchievementsResetPathParams{
            AchievementID: "maxime",
        },
        QueryParams: operations.GamesManagementAchievementsResetQueryParams{
            DollarXgafv: "1",
            AccessToken: "rerum",
            Alt: "proto",
            Callback: "non",
            Fields: "ut",
            Key: "necessitatibus",
            OauthToken: "doloremque",
            PrettyPrint: true,
            QuotaUser: "velit",
            UploadType: "deleniti",
            UploadProtocol: "qui",
        },
    }
    
    res, err := s.Achievements.GamesManagementAchievementsReset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementResetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->