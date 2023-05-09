# Entitlements

### Available Operations

* [AndroidenterpriseEntitlementsDelete](#androidenterpriseentitlementsdelete) - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseEntitlementsGet](#androidenterpriseentitlementsget) - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseEntitlementsList](#androidenterpriseentitlementslist) - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseEntitlementsUpdate](#androidenterpriseentitlementsupdate) - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## AndroidenterpriseEntitlementsDelete

Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Entitlements.AndroidenterpriseEntitlementsDelete(ctx, operations.AndroidenterpriseEntitlementsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        EnterpriseID: "exercitationem",
        EntitlementID: "nulla",
        Fields: sdk.String("fugit"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
        UserID: "ducimus",
    }, operations.AndroidenterpriseEntitlementsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseEntitlementsGet

Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Entitlements.AndroidenterpriseEntitlementsGet(ctx, operations.AndroidenterpriseEntitlementsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        EnterpriseID: "ea",
        EntitlementID: "aspernatur",
        Fields: sdk.String("vel"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("laudantium"),
        UserID: "dicta",
    }, operations.AndroidenterpriseEntitlementsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entitlement != nil {
        // handle response
    }
}
```

## AndroidenterpriseEntitlementsList

Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Entitlements.AndroidenterpriseEntitlementsList(ctx, operations.AndroidenterpriseEntitlementsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        EnterpriseID: "nulla",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("saepe"),
        UserID: "ea",
    }, operations.AndroidenterpriseEntitlementsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EntitlementsListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseEntitlementsUpdate

Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Entitlements.AndroidenterpriseEntitlementsUpdate(ctx, operations.AndroidenterpriseEntitlementsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Entitlement: &shared.Entitlement{
            ProductID: sdk.String("corporis"),
            Reason: shared.EntitlementReasonEnumFree.ToPointer(),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        EnterpriseID: "ea",
        EntitlementID: "quo",
        Fields: sdk.String("consectetur"),
        Install: sdk.Bool(false),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("a"),
        UserID: "libero",
    }, operations.AndroidenterpriseEntitlementsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entitlement != nil {
        // handle response
    }
}
```
