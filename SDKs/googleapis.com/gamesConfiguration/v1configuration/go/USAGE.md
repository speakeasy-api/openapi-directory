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
            AchievementID: "earum",
        },
        QueryParams: operations.GamesConfigurationAchievementConfigurationsDeleteQueryParams{
            DollarXgafv: "1",
            AccessToken: "cum",
            Alt: "json",
            Callback: "dicta",
            Fields: "consequatur",
            Key: "et",
            OauthToken: "tempora",
            PrettyPrint: true,
            QuotaUser: "aliquam",
            UploadType: "quaerat",
            UploadProtocol: "voluptatem",
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