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
            ApkVersionCode: 548814,
            EditID: "deserunt",
            Language: "porro",
            PackageName: "nulla",
        },
        QueryParams: operations.AndroidpublisherEditsApklistingsDeleteQueryParams{
            Alt: "json",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UserIP: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->