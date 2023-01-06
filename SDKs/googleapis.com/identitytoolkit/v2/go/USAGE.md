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
    
    req := operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest{
        Security: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "ea",
            Fields: "incidunt",
            Key: "sapiente",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "quis",
            UploadType: "qui",
            UploadProtocol: "vitae",
        },
        Request: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: "aut",
            IDToken: "et",
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: "et",
                Code: "quas",
                PhoneNumber: "vero",
                SessionInfo: "quod",
            },
            TenantID: "reiciendis",
        },
    }
    
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->