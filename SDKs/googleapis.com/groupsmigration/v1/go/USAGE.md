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
    
    req := operations.GroupsmigrationArchiveInsertRequest{
        Security: operations.GroupsmigrationArchiveInsertSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GroupsmigrationArchiveInsertPathParams{
            GroupID: "sit",
        },
        QueryParams: operations.GroupsmigrationArchiveInsertQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
    }
    
    res, err := s.Archive.GroupsmigrationArchiveInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->