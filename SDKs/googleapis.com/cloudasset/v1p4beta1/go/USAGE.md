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
    res, err := s.V1p4beta1.CloudassetAnalyzeIamPolicy(ctx, operations.CloudassetAnalyzeIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        AnalysisQueryAccessSelectorPermissions: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        AnalysisQueryAccessSelectorRoles: []string{
            "error",
            "deserunt",
        },
        AnalysisQueryIdentitySelectorIdentity: sdk.String("suscipit"),
        AnalysisQueryResourceSelectorFullResourceName: sdk.String("iure"),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("delectus"),
        OptionsAnalyzeServiceAccountImpersonation: sdk.Bool(false),
        OptionsExecutionTimeout: sdk.String("tempora"),
        OptionsExpandGroups: sdk.Bool(false),
        OptionsExpandResources: sdk.Bool(false),
        OptionsExpandRoles: sdk.Bool(false),
        OptionsOutputGroupEdges: sdk.Bool(false),
        OptionsOutputResourceEdges: sdk.Bool(false),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.CloudassetAnalyzeIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeIamPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->