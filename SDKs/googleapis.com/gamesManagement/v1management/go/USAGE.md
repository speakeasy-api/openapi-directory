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
            AchievementID: "ullam",
        },
        QueryParams: operations.GamesManagementAchievementsResetQueryParams{
            DollarXgafv: "1",
            AccessToken: "perferendis",
            Alt: "proto",
            Callback: "et",
            Fields: "ea",
            Key: "rerum",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "occaecati",
            UploadType: "non",
            UploadProtocol: "sint",
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