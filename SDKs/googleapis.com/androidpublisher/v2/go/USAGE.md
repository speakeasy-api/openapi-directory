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
        Alt: "json",
        ApkVersionCode: 548814,
        EditID: "provident",
        Fields: "distinctio",
        Key: "quibusdam",
        Language: "unde",
        OauthToken: "nulla",
        PackageName: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        UserIP: "vel",
    }

    ctx := context.Background()
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, req, operations.AndroidpublisherEditsApklistingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->