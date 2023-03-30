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
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            Language: "corrupti",
            MaxResults: 847252,
            OauthToken: "vel",
            PageToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.AchievementDefinitions.GamesAchievementDefinitionsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementDefinitionsListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->