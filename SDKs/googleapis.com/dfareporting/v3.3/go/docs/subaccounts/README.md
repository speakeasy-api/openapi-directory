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
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("accusantium"),
        ID: "46c01682-ec8d-4f36-8809-5fdbd9510351",
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aspernatur",
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("temporibus"),
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
            AccountID: sdk.String("odio"),
            AvailablePermissionIds: []string{
                "laudantium",
                "ad",
                "doloremque",
                "officiis",
            },
            ID: sdk.String("temporibus"),
            Kind: sdk.String("quos"),
            Name: sdk.String("Antoinette Barrows"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veniam",
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("delectus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("voluptatem"),
        Ids: []string{
            "quod",
            "voluptatem",
            "culpa",
        },
        Key: sdk.String("nostrum"),
        MaxResults: sdk.Int64(670142),
        OauthToken: sdk.String("illo"),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ut",
        QuotaUser: sdk.String("explicabo"),
        SearchString: sdk.String("necessitatibus"),
        SortField: operations.DfareportingSubaccountsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSubaccountsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("porro"),
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
            AccountID: sdk.String("aliquid"),
            AvailablePermissionIds: []string{
                "ipsam",
                "delectus",
                "quibusdam",
            },
            ID: sdk.String("veniam"),
            Kind: sdk.String("commodi"),
            Name: sdk.String("Ebony Medhurst"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("quibusdam"),
        ID: "8713045d-2f71-43e0-9b55-92bfc7395f71",
        Key: sdk.String("eos"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsum",
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("molestias"),
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
            AccountID: sdk.String("commodi"),
            AvailablePermissionIds: []string{
                "vitae",
                "tempore",
                "cupiditate",
            },
            ID: sdk.String("quisquam"),
            Kind: sdk.String("reprehenderit"),
            Name: sdk.String("Janie Carroll"),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "praesentium",
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("velit"),
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
