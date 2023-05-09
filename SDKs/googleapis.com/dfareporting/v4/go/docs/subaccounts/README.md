# Subaccounts

### Available Operations

* [DfareportingSubaccountsGet](#dfareportingsubaccountsget) - Gets one subaccount by ID.
* [DfareportingSubaccountsInsert](#dfareportingsubaccountsinsert) - Inserts a new subaccount.
* [DfareportingSubaccountsList](#dfareportingsubaccountslist) - Gets a list of subaccounts, possibly filtered. This method supports paging.
* [DfareportingSubaccountsPatch](#dfareportingsubaccountspatch) - Updates an existing subaccount. This method supports patch semantics.
* [DfareportingSubaccountsUpdate](#dfareportingsubaccountsupdate) - Updates an existing subaccount.

## DfareportingSubaccountsGet

Gets one subaccount by ID.

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
    res, err := s.Subaccounts.DfareportingSubaccountsGet(ctx, operations.DfareportingSubaccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("illum"),
        ID: "8299bc67-6378-4edc-8c34-7040cadf0ba5",
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("officia"),
    }, operations.DfareportingSubaccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subaccount != nil {
        // handle response
    }
}
```

## DfareportingSubaccountsInsert

Inserts a new subaccount.

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
    res, err := s.Subaccounts.DfareportingSubaccountsInsert(ctx, operations.DfareportingSubaccountsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Subaccount: &shared.Subaccount{
            AccountID: sdk.String("esse"),
            AvailablePermissionIds: []string{
                "placeat",
            },
            ID: sdk.String("fugit"),
            Kind: sdk.String("ratione"),
            Name: sdk.String("Frankie Waelchi"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veniam",
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DfareportingSubaccountsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subaccount != nil {
        // handle response
    }
}
```

## DfareportingSubaccountsList

Gets a list of subaccounts, possibly filtered. This method supports paging.

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
    res, err := s.Subaccounts.DfareportingSubaccountsList(ctx, operations.DfareportingSubaccountsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("sunt"),
        Ids: []string{
            "nemo",
        },
        Key: sdk.String("officia"),
        MaxResults: sdk.Int64(14996),
        OauthToken: sdk.String("qui"),
        PageToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("rem"),
        SearchString: sdk.String("atque"),
        SortField: operations.DfareportingSubaccountsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSubaccountsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("quae"),
    }, operations.DfareportingSubaccountsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountsListResponse != nil {
        // handle response
    }
}
```

## DfareportingSubaccountsPatch

Updates an existing subaccount. This method supports patch semantics.

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
    res, err := s.Subaccounts.DfareportingSubaccountsPatch(ctx, operations.DfareportingSubaccountsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Subaccount: &shared.Subaccount{
            AccountID: sdk.String("iste"),
            AvailablePermissionIds: []string{
                "ex",
                "perspiciatis",
            },
            ID: sdk.String("numquam"),
            Kind: sdk.String("quas"),
            Name: sdk.String("Miss Eileen Smith"),
        },
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("vitae"),
        ID: "f3f53593-90c0-4a96-8bbc-933f80cc0595",
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ab",
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DfareportingSubaccountsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subaccount != nil {
        // handle response
    }
}
```

## DfareportingSubaccountsUpdate

Updates an existing subaccount.

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
    res, err := s.Subaccounts.DfareportingSubaccountsUpdate(ctx, operations.DfareportingSubaccountsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Subaccount: &shared.Subaccount{
            AccountID: sdk.String("quis"),
            AvailablePermissionIds: []string{
                "deserunt",
                "assumenda",
                "distinctio",
            },
            ID: sdk.String("temporibus"),
            Kind: sdk.String("tempore"),
            Name: sdk.String("Irene Pfeffer"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolore",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DfareportingSubaccountsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subaccount != nil {
        // handle response
    }
}
```
