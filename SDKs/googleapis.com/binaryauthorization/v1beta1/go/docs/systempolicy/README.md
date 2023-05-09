# Systempolicy

### Available Operations

* [BinaryauthorizationSystempolicyGetPolicy](#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.

## BinaryauthorizationSystempolicyGetPolicy

Gets the current system policy in the specified location.

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
    res, err := s.Systempolicy.BinaryauthorizationSystempolicyGetPolicy(ctx, operations.BinaryauthorizationSystempolicyGetPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("vel"),
        Key: sdk.String("libero"),
        Name: "Joanna Kohler",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.BinaryauthorizationSystempolicyGetPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```
