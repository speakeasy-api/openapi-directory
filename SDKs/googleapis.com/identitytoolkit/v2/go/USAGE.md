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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: "deserunt",
            IDToken: "suscipit",
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: "iure",
                Code: "magnam",
                PhoneNumber: "debitis",
                SessionInfo: "ipsa",
            },
            TenantID: "delectus",
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo{
                SessionInfo: "tempora",
                VerificationCode: "suscipit",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->