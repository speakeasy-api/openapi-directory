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
    
    req := operations.CloudsupportCaseClassificationsSearchRequest{
        Security: operations.CloudsupportCaseClassificationsSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CloudsupportCaseClassificationsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PageSize: 6044372234677422456,
            PageToken: "fugit",
            PrettyPrint: false,
            Query: "nihil",
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
    }
    
    res, err := s.CaseClassifications.CloudsupportCaseClassificationsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCaseClassificationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->