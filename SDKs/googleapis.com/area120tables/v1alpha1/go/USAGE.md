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
    
    req := operations.Area120tablesTablesListRequest{
        Security: operations.Area120tablesTablesListSecurity{
            Option1: &operations.Area120tablesTablesListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.Area120tablesTablesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quidem",
            Alt: "media",
            Callback: "consequatur",
            Fields: "nisi",
            Key: "quasi",
            OauthToken: "autem",
            OrderBy: "corrupti",
            PageSize: 8106997193166281027,
            PageToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "molestiae",
            UploadType: "architecto",
            UploadProtocol: "alias",
        },
    }
    
    res, err := s.Tables.Area120tablesTablesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->