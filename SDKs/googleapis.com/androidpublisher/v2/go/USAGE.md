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
            ApkVersionCode: 2867676335299060471,
            EditID: "ipsum",
            Language: "sunt",
            PackageName: "soluta",
        },
        QueryParams: operations.AndroidpublisherEditsApklistingsDeleteQueryParams{
            Alt: "json",
            Fields: "earum",
            Key: "illo",
            OauthToken: "ducimus",
            PrettyPrint: true,
            QuotaUser: "blanditiis",
            UserIP: "non",
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