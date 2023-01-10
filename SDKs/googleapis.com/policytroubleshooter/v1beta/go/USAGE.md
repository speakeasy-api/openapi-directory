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
            DollarXgafv: "1",
            AccessToken: "fugiat",
            Alt: "proto",
            Callback: "ut",
            Fields: "dolore",
            Key: "vel",
            OauthToken: "vel",
            PrettyPrint: true,
            QuotaUser: "provident",
            UploadType: "vel",
            UploadProtocol: "asperiores",
        },
        Request: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: "sit",
                Permission: "dolorem",
                Principal: "delectus",
            },
        },
    }
    
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->