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
        DollarXgafv: "2",
        GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: "provident",
            IDToken: "distinctio",
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: "quibusdam",
                Code: "unde",
                PhoneNumber: "nulla",
                SessionInfo: "corrupti",
            },
            TenantID: "illum",
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo{
                SessionInfo: "vel",
                VerificationCode: "error",
            },
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, req, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->