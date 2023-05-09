# Debug

### Available Operations

* [CloudsearchDebugDatasourcesItemsCheckAccess](#cloudsearchdebugdatasourcesitemscheckaccess) - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* [CloudsearchDebugDatasourcesItemsSearchByViewURL](#cloudsearchdebugdatasourcesitemssearchbyviewurl) - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* [CloudsearchDebugIdentitysourcesItemsListForunmappedidentity](#cloudsearchdebugidentitysourcesitemslistforunmappedidentity) - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* [CloudsearchDebugIdentitysourcesUnmappedidsList](#cloudsearchdebugidentitysourcesunmappedidslist) - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

## CloudsearchDebugDatasourcesItemsCheckAccess

Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.

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
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Principal: &shared.Principal{
            GroupResourceName: sdk.String("minus"),
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: sdk.Bool(false),
                GsuiteGroupEmail: sdk.String("placeat"),
                GsuiteUserEmail: sdk.String("voluptatum"),
            },
            UserResourceName: sdk.String("iusto"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        Name: "Mrs. Marie O'Connell",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity{
        Option1: &operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
}
```

## CloudsearchDebugDatasourcesItemsSearchByViewURL

Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.

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
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsSearchByViewURL(ctx, operations.CloudsearchDebugDatasourcesItemsSearchByViewURLRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchItemsByViewURLRequest: &shared.SearchItemsByViewURLRequest{
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            PageToken: sdk.String("maiores"),
            ViewURL: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        Name: "Samuel Reichel",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.CloudsearchDebugDatasourcesItemsSearchByViewURLSecurity{
        Option1: &operations.CloudsearchDebugDatasourcesItemsSearchByViewURLSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchItemsByViewURLResponse != nil {
        // handle response
    }
}
```

## CloudsearchDebugIdentitysourcesItemsListForunmappedidentity

Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.

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
    res, err := s.Debug.CloudsearchDebugIdentitysourcesItemsListForunmappedidentity(ctx, operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("modi"),
        GroupResourceName: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        PageSize: sdk.Int64(456150),
        PageToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
        UserResourceName: sdk.String("natus"),
    }, operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity{
        Option1: &operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListItemNamesForUnmappedIdentityResponse != nil {
        // handle response
    }
}
```

## CloudsearchDebugIdentitysourcesUnmappedidsList

Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

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
    res, err := s.Debug.CloudsearchDebugIdentitysourcesUnmappedidsList(ctx, operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        ResolutionStatusCode: operations.CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnumIdentitySourceNotFound.ToPointer(),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurity{
        Option1: &operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUnmappedIdentitiesResponse != nil {
        // handle response
    }
}
```
