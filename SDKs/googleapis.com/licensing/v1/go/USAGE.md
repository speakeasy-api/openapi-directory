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

    req := operations.LicensingLicenseAssignmentsDeleteRequest{
        Security: operations.LicensingLicenseAssignmentsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.LicensingLicenseAssignmentsDeletePathParams{
            ProductID: "unde",
            SkuID: "deserunt",
            UserID: "porro",
        },
        QueryParams: operations.LicensingLicenseAssignmentsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "id",
            Alt: "proto",
            Callback: "perspiciatis",
            Fields: "nulla",
            Key: "nihil",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->