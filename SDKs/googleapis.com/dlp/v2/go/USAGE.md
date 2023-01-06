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
    
    req := operations.DlpInfoTypesListRequest{
        Security: operations.DlpInfoTypesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DlpInfoTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "json",
            Callback: "autem",
            Fields: "alias",
            Filter: "sit",
            Key: "id",
            LanguageCode: "error",
            LocationID: "aut",
            OauthToken: "et",
            Parent: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "ipsa",
            UploadType: "sint",
            UploadProtocol: "aliquam",
        },
    }
    
    res, err := s.InfoTypes.DlpInfoTypesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePrivacyDlpV2ListInfoTypesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->