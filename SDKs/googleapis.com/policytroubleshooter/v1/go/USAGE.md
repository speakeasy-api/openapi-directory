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
        DollarXgafv: "2",
        GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest: &shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1AccessTuple{
                FullResourceName: "provident",
                Permission: "distinctio",
                Principal: "quibusdam",
            },
        },
        AccessToken: "unde",
        Alt: "proto",
        Callback: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, req, operations.PolicytroubleshooterIamTroubleshootSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->