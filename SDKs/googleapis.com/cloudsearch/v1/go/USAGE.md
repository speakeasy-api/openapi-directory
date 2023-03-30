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
        Security: operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity{
            Option1: &operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudsearchDebugDatasourcesItemsCheckAccessPathParams{
            Name: "corrupti",
        },
        QueryParams: operations.CloudsearchDebugDatasourcesItemsCheckAccessQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            DebugOptionsEnableDebugging: false,
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.Principal{
            GroupResourceName: "suscipit",
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: false,
                GsuiteGroupEmail: "iure",
                GsuiteUserEmail: "magnam",
            },
            UserResourceName: "debitis",
        },
    }

    ctx := context.Background()
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->