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
            SkuID: "sed",
            UserID: "et",
        },
        QueryParams: operations.LicensingLicenseAssignmentsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "temporibus",
            Alt: "media",
            Callback: "iure",
            Fields: "facere",
            Key: "iste",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "dignissimos",
            UploadType: "ipsam",
            UploadProtocol: "voluptatem",
        },
    }
    
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->