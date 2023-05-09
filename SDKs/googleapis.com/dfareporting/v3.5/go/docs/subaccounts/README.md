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
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("iure"),
        ID: "f99706be-2cb8-4850-bdd8-4ce76d5d982b",
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "minus",
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("consectetur"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Subaccount: &shared.Subaccount{
            AccountID: sdk.String("hic"),
            AvailablePermissionIds: []string{
                "veniam",
                "similique",
                "rerum",
                "earum",
            },
            ID: sdk.String("nesciunt"),
            Kind: sdk.String("impedit"),
            Name: sdk.String("Maryann Ebert"),
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cumque",
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("sunt"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("at"),
        Ids: []string{
            "voluptate",
            "labore",
            "distinctio",
        },
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(376951),
        OauthToken: sdk.String("dolore"),
        PageToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("delectus"),
        SearchString: sdk.String("quibusdam"),
        SortField: operations.DfareportingSubaccountsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSubaccountsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("delectus"),
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
            AccountID: sdk.String("tempore"),
            AvailablePermissionIds: []string{
                "placeat",
                "voluptas",
            },
            ID: sdk.String("quae"),
            Kind: sdk.String("quibusdam"),
            Name: sdk.String("Antonio Haag Jr."),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("aspernatur"),
        ID: "35fb96c7-0779-462c-93f6-40c582ae0eaf",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "optio",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("distinctio"),
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
            AccountID: sdk.String("rerum"),
            AvailablePermissionIds: []string{
                "deleniti",
                "tempora",
            },
            ID: sdk.String("atque"),
            Kind: sdk.String("molestias"),
            Name: sdk.String("Kristina Farrell"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "similique",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("modi"),
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
