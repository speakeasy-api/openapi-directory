# Grouplicenseusers

### Available Operations

* [AndroidenterpriseGrouplicenseusersList](#androidenterprisegrouplicenseuserslist) - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## AndroidenterpriseGrouplicenseusersList

Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Grouplicenseusers.AndroidenterpriseGrouplicenseusersList(ctx, operations.AndroidenterpriseGrouplicenseusersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        EnterpriseID: "ipsa",
        Fields: sdk.String("molestiae"),
        GroupLicenseID: "magnam",
        Key: sdk.String("odio"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
    }, operations.AndroidenterpriseGrouplicenseusersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupLicenseUsersListResponse != nil {
        // handle response
    }
}
```
