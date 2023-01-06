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
            DollarXgafv: "2",
            AccessToken: "tempora",
            Alt: "media",
            Callback: "excepturi",
            Fields: "quos",
            Key: "quidem",
            OauthToken: "iure",
            PrettyPrint: true,
            QuotaUser: "a",
            UploadType: "temporibus",
            UploadProtocol: "aperiam",
        },
        Request: &shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1AccessTuple{
                FullResourceName: "quis",
                Permission: "sequi",
                Principal: "rerum",
            },
        },
    }
    
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->