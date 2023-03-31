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

    req := operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest{
        DollarXgafv: "2",
        Principal: &shared.Principal{
            GroupResourceName: "provident",
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: false,
                GsuiteGroupEmail: "distinctio",
                GsuiteUserEmail: "quibusdam",
            },
            UserResourceName: "unde",
        },
        AccessToken: "nulla",
        Alt: "media",
        Callback: "illum",
        DebugOptionsEnableDebugging: false,
        Fields: "vel",
        Key: "error",
        Name: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, req, operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity{
        Option1: &operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->