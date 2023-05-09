# Accounts

### Available Operations

* [DfareportingAccountsGet](#dfareportingaccountsget) - Gets one account by ID.
* [DfareportingAccountsList](#dfareportingaccountslist) - Retrieves the list of accounts, possibly filtered. This method supports paging.
* [DfareportingAccountsPatch](#dfareportingaccountspatch) - Updates an existing account. This method supports patch semantics.
* [DfareportingAccountsUpdate](#dfareportingaccountsupdate) - Updates an existing account.

## DfareportingAccountsGet

Gets one account by ID.

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
    res, err := s.Accounts.DfareportingAccountsGet(ctx, operations.DfareportingAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dignissimos"),
        ID: "f3a41006-74eb-4f69-a80d-1ba77a89ebf7",
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "id",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.DfareportingAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## DfareportingAccountsList

Retrieves the list of accounts, possibly filtered. This method supports paging.

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
    res, err := s.Accounts.DfareportingAccountsList(ctx, operations.DfareportingAccountsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("amet"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("ad"),
        Ids: []string{
            "suscipit",
            "deserunt",
            "provident",
            "minima",
        },
        Key: sdk.String("repellendus"),
        MaxResults: sdk.Int64(519711),
        OauthToken: sdk.String("similique"),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "at",
        QuotaUser: sdk.String("quaerat"),
        SearchString: sdk.String("tempora"),
        SortField: operations.DfareportingAccountsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAccountsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("qui"),
    }, operations.DfareportingAccountsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsListResponse != nil {
        // handle response
    }
}
```

## DfareportingAccountsPatch

Updates an existing account. This method supports patch semantics.

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
    res, err := s.Accounts.DfareportingAccountsPatch(ctx, operations.DfareportingAccountsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Account: &shared.Account{
            AccountPermissionIds: []string{
                "esse",
                "harum",
                "iusto",
                "ipsum",
            },
            AccountProfile: shared.AccountAccountProfileEnumAccountProfileStandard.ToPointer(),
            Active: sdk.Bool(false),
            ActiveAdsLimitTier: shared.AccountActiveAdsLimitTierEnumActiveAdsTier1M.ToPointer(),
            ActiveViewOptOut: sdk.Bool(false),
            AvailablePermissionIds: []string{
                "tempore",
            },
            CountryID: sdk.String("accusamus"),
            CurrencyID: sdk.String("numquam"),
            DefaultCreativeSizeID: sdk.String("enim"),
            Description: sdk.String("dolorem"),
            ID: sdk.String("sapiente"),
            Kind: sdk.String("totam"),
            Locale: sdk.String("nihil"),
            MaximumImageSize: sdk.String("sit"),
            Name: sdk.String("Luis Cremin"),
            NielsenOcrEnabled: sdk.Bool(false),
            ReportsConfiguration: &shared.ReportsConfiguration{
                ExposureToConversionEnabled: sdk.Bool(false),
                LookbackConfiguration: &shared.LookbackConfiguration{
                    ClickDuration: sdk.Int(374170),
                    PostImpressionActivitiesDuration: sdk.Int(646265),
                },
                ReportGenerationTimeZoneID: sdk.String("quam"),
            },
            ShareReportsWithTwitter: sdk.Bool(false),
            TeaserSizeLimit: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("maxime"),
        ID: "db1a8422-bb67-49d2-b227-15bf0cbb1e31",
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tempore",
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DfareportingAccountsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## DfareportingAccountsUpdate

Updates an existing account.

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
    res, err := s.Accounts.DfareportingAccountsUpdate(ctx, operations.DfareportingAccountsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Account: &shared.Account{
            AccountPermissionIds: []string{
                "labore",
                "adipisci",
            },
            AccountProfile: shared.AccountAccountProfileEnumAccountProfileStandard.ToPointer(),
            Active: sdk.Bool(false),
            ActiveAdsLimitTier: shared.AccountActiveAdsLimitTierEnumActiveAdsTier40K.ToPointer(),
            ActiveViewOptOut: sdk.Bool(false),
            AvailablePermissionIds: []string{
                "aut",
            },
            CountryID: sdk.String("quas"),
            CurrencyID: sdk.String("itaque"),
            DefaultCreativeSizeID: sdk.String("consequatur"),
            Description: sdk.String("est"),
            ID: sdk.String("repellendus"),
            Kind: sdk.String("porro"),
            Locale: sdk.String("doloribus"),
            MaximumImageSize: sdk.String("ut"),
            Name: sdk.String("Ms. Terrance Davis"),
            NielsenOcrEnabled: sdk.Bool(false),
            ReportsConfiguration: &shared.ReportsConfiguration{
                ExposureToConversionEnabled: sdk.Bool(false),
                LookbackConfiguration: &shared.LookbackConfiguration{
                    ClickDuration: sdk.Int(580447),
                    PostImpressionActivitiesDuration: sdk.Int(977496),
                },
                ReportGenerationTimeZoneID: sdk.String("quisquam"),
            },
            ShareReportsWithTwitter: sdk.Bool(false),
            TeaserSizeLimit: sdk.String("vero"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vero",
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("hic"),
    }, operations.DfareportingAccountsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
