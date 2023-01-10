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
            DollarXgafv: "1",
            AccessToken: "maiores",
            Alt: "media",
            Callback: "ipsam",
            Fields: "odio",
            Key: "sit",
            OauthToken: "voluptas",
            OrderBy: "aut",
            PageSize: 2338102413139933104,
            PageToken: "non",
            PrettyPrint: false,
            QuotaUser: "accusantium",
            UploadType: "placeat",
            UploadProtocol: "magni",
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