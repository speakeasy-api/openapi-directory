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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Filter: "vero",
            Key: "perspiciatis",
            LanguageCode: "nulla",
            LocationID: "nihil",
            OauthToken: "fuga",
            Parent: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.InfoTypes.DlpInfoTypesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePrivacyDlpV2ListInfoTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->