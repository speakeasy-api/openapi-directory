# V1

### Available Operations

* [CloudsearchInitializeCustomer](#cloudsearchinitializecustomer) - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

## CloudsearchInitializeCustomer

Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

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
    res, err := s.V1.CloudsearchInitializeCustomer(ctx, operations.CloudsearchInitializeCustomerRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "maxime": "quia",
            "quia": "nostrum",
            "omnis": "libero",
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.CloudsearchInitializeCustomerSecurity{
        Option1: &operations.CloudsearchInitializeCustomerSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
