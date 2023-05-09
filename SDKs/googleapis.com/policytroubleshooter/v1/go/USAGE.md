<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, operations.PolicytroubleshooterIamTroubleshootRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest: &shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1AccessTuple{
                FullResourceName: sdk.String("provident"),
                Permission: sdk.String("distinctio"),
                Principal: sdk.String("quibusdam"),
            },
        },
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.PolicytroubleshooterIamTroubleshootSecurity{
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