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
            Name: "sit",
        },
        QueryParams: operations.CloudsearchDebugDatasourcesItemsCheckAccessQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            DebugOptionsEnableDebugging: false,
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.Principal{
            GroupResourceName: "debitis",
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: true,
                GsuiteGroupEmail: "et",
                GsuiteUserEmail: "ut",
            },
            UserResourceName: "dolorem",
        },
    }
    
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->