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
            Callback: "distinctio",
            Fields: "culpa",
            Key: "sunt",
            OauthToken: "incidunt",
            PageSize: 7682392061282111062,
            PageToken: "sed",
            PrettyPrint: false,
            Query: "ut",
            QuotaUser: "et",
            UploadType: "eveniet",
            UploadProtocol: "et",
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