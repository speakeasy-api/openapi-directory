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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("laboriosam"),
        ID: "cd594526-a5fc-48a5-99c2-7a56532a4521",
        Key: sdk.String("esse"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatum",
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("excepturi"),
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
            AccountID: sdk.String("asperiores"),
            AvailablePermissionIds: []string{
                "inventore",
                "voluptas",
                "iste",
            },
            ID: sdk.String("quia"),
            Kind: sdk.String("consequatur"),
            Name: sdk.String("Whitney Little"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("officia"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "inventore",
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("aspernatur"),
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
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("cum"),
        Ids: []string{
            "in",
            "quas",
        },
        Key: sdk.String("voluptates"),
        MaxResults: sdk.Int64(167926),
        OauthToken: sdk.String("perspiciatis"),
        PageToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "esse",
        QuotaUser: sdk.String("sapiente"),
        SearchString: sdk.String("a"),
        SortField: operations.DfareportingSubaccountsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSubaccountsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("quasi"),
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
            AccountID: sdk.String("aspernatur"),
            AvailablePermissionIds: []string{
                "ducimus",
                "commodi",
                "aliquid",
                "nostrum",
            },
            ID: sdk.String("deserunt"),
            Kind: sdk.String("exercitationem"),
            Name: sdk.String("Mr. Lionel Sawayn"),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("possimus"),
        ID: "488d5252-e328-4370-8142-cc13ee6ac12b",
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "numquam",
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("sint"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Subaccount: &shared.Subaccount{
            AccountID: sdk.String("commodi"),
            AvailablePermissionIds: []string{
                "aut",
                "laborum",
                "accusantium",
            },
            ID: sdk.String("perspiciatis"),
            Kind: sdk.String("minus"),
            Name: sdk.String("Deborah Harber Sr."),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("quo"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("quasi"),
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
