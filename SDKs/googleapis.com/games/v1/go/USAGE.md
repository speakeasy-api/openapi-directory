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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            Language: "expedita",
            MaxResults: 6044372234677422456,
            OauthToken: "fugit",
            PageToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
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