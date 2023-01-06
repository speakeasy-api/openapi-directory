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
            AccessToken: "consectetur",
            Alt: "media",
            Callback: "et",
            Fields: "sunt",
            Key: "in",
            OauthToken: "tenetur",
            PrettyPrint: true,
            QuotaUser: "sit",
            UploadType: "similique",
            UploadProtocol: "quae",
        },
        Request: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: "enim",
                Permission: "autem",
                Principal: "qui",
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