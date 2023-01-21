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
    
    req := operations.AndroidpublisherEditsApklistingsDeleteRequest{
        Security: operations.AndroidpublisherEditsApklistingsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherEditsApklistingsDeletePathParams{
            ApkVersionCode: 8717895732742165505,
            EditID: "voluptas",
            Language: "culpa",
            PackageName: "expedita",
        },
        QueryParams: operations.AndroidpublisherEditsApklistingsDeleteQueryParams{
            Alt: "json",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UserIP: "nihil",
        },
    }
    
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->