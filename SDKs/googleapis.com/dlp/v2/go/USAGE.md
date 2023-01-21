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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Filter: "dolor",
            Key: "expedita",
            LanguageCode: "voluptas",
            LocationID: "fugit",
            OauthToken: "et",
            Parent: "nihil",
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
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