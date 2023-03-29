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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: "facilis",
                Permission: "eum",
                Principal: "iusto",
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