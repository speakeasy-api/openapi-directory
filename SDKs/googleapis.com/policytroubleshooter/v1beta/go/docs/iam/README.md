# Iam

### Available Operations

* [PolicytroubleshooterIamTroubleshoot](#policytroubleshooteriamtroubleshoot) - Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.

## PolicytroubleshooterIamTroubleshoot

Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: sdk.String("debitis"),
                Permission: sdk.String("ipsa"),
                Principal: sdk.String("delectus"),
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.PolicytroubleshooterIamTroubleshootSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse != nil {
        // handle response
    }
}
```
