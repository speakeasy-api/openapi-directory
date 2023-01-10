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
    
    req := operations.GamesAchievementDefinitionsListRequest{
        Security: operations.GamesAchievementDefinitionsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GamesAchievementDefinitionsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "quod",
            Alt: "json",
            Callback: "sunt",
            Fields: "nostrum",
            Key: "et",
            Language: "sed",
            MaxResults: 1042231653372785846,
            OauthToken: "omnis",
            PageToken: "similique",
            PrettyPrint: true,
            QuotaUser: "consequatur",
            UploadType: "alias",
            UploadProtocol: "voluptas",
        },
    }
    
    res, err := s.AchievementDefinitions.GamesAchievementDefinitionsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementDefinitionsListResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->