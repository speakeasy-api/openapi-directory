# Grouplicenses

### Available Operations

* [AndroidenterpriseGrouplicensesGet](#androidenterprisegrouplicensesget) - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseGrouplicensesList](#androidenterprisegrouplicenseslist) - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## AndroidenterpriseGrouplicensesGet

Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Grouplicenses.AndroidenterpriseGrouplicensesGet(ctx, operations.AndroidenterpriseGrouplicensesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        EnterpriseID: "aliquam",
        Fields: sdk.String("fugit"),
        GroupLicenseID: "accusamus",
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AndroidenterpriseGrouplicensesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupLicense != nil {
        // handle response
    }
}
```

## AndroidenterpriseGrouplicensesList

Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Grouplicenses.AndroidenterpriseGrouplicensesList(ctx, operations.AndroidenterpriseGrouplicensesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        EnterpriseID: "nobis",
        Fields: sdk.String("quas"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AndroidenterpriseGrouplicensesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupLicensesListResponse != nil {
        // handle response
    }
}
```
