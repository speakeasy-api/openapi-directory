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

    req := operations.PolicytroubleshooterIamTroubleshootRequest{
        Security: operations.PolicytroubleshooterIamTroubleshootSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.PolicytroubleshooterIamTroubleshootQueryParams{
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
        Request: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: "deserunt",
                Permission: "suscipit",
                Principal: "iure",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->