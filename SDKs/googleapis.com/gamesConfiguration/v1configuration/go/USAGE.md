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
    
    req := operations.GamesConfigurationAchievementConfigurationsDeleteRequest{
        Security: operations.GamesConfigurationAchievementConfigurationsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GamesConfigurationAchievementConfigurationsDeletePathParams{
            AchievementID: "exercitationem",
        },
        QueryParams: operations.GamesConfigurationAchievementConfigurationsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "ullam",
            Alt: "proto",
            Callback: "rerum",
            Fields: "rerum",
            Key: "sequi",
            OauthToken: "libero",
            PrettyPrint: true,
            QuotaUser: "officiis",
            UploadType: "vero",
            UploadProtocol: "perferendis",
        },
    }
    
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->