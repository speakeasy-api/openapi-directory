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
    
    req := operations.DriveactivityActivityQueryRequest{
        Security: operations.DriveactivityActivityQuerySecurity{
            Option1: &operations.DriveactivityActivityQuerySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.DriveactivityActivityQueryQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.QueryDriveActivityRequest{
            AncestorName: "rerum",
            ConsolidationStrategy: &shared.ConsolidationStrategy{
                Legacy: map[string]interface{}{
                    "debitis": "voluptatum",
                    "et": "ut",
                    "dolorem": "et",
                },
                None: map[string]interface{}{
                    "iste": "vitae",
                },
            },
            Filter: "totam",
            ItemName: "dolores",
            PageSize: 1929546706668609706,
            PageToken: "debitis",
        },
    }
    
    res, err := s.Activity.DriveactivityActivityQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDriveActivityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->