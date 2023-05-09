# EffectiveIamPolicies

### Available Operations

* [CloudassetEffectiveIamPoliciesBatchGet](#cloudasseteffectiveiampoliciesbatchget) - Gets effective IAM policies for a batch of resources.

## CloudassetEffectiveIamPoliciesBatchGet

Gets effective IAM policies for a batch of resources.

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
    res, err := s.EffectiveIamPolicies.CloudassetEffectiveIamPoliciesBatchGet(ctx, operations.CloudassetEffectiveIamPoliciesBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        Names: []string{
            "deleniti",
        },
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        Scope: "totam",
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.CloudassetEffectiveIamPoliciesBatchGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetEffectiveIamPoliciesResponse != nil {
        // handle response
    }
}
```
