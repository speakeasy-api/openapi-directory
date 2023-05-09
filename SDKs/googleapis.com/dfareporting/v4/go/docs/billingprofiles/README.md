# BillingProfiles

### Available Operations

* [DfareportingBillingProfilesGet](#dfareportingbillingprofilesget) - Gets one billing profile by ID.
* [DfareportingBillingProfilesList](#dfareportingbillingprofileslist) - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* [DfareportingBillingProfilesUpdate](#dfareportingbillingprofilesupdate) - Updates an existing billing profile.

## DfareportingBillingProfilesGet

Gets one billing profile by ID.

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
    res, err := s.BillingProfiles.DfareportingBillingProfilesGet(ctx, operations.DfareportingBillingProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("eveniet"),
        ID: "d8f9fdb9-410f-463b-bf81-7837b01afdd7",
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vel",
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DfareportingBillingProfilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingProfile != nil {
        // handle response
    }
}
```

## DfareportingBillingProfilesList

Retrieves a list of billing profiles, possibly filtered. This method supports paging.

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
    res, err := s.BillingProfiles.DfareportingBillingProfilesList(ctx, operations.DfareportingBillingProfilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        CurrencyCode: sdk.String("incidunt"),
        Fields: sdk.String("labore"),
        Ids: []string{
            "ducimus",
            "consectetur",
            "sapiente",
        },
        Key: sdk.String("quis"),
        MaxResults: sdk.Int64(33323),
        Name: sdk.String("Ms. Kim Zboncak"),
        OauthToken: sdk.String("tempore"),
        OnlySuggestion: sdk.Bool(false),
        PageToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("consequuntur"),
        SortField: operations.DfareportingBillingProfilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingBillingProfilesListSortOrderEnumDescending.ToPointer(),
        Status: []DfareportingBillingProfilesListStatusEnum{
            operations.DfareportingBillingProfilesListStatusEnumUnderReview,
            operations.DfareportingBillingProfilesListStatusEnumUnderReview,
            operations.DfareportingBillingProfilesListStatusEnumUnderReview,
            operations.DfareportingBillingProfilesListStatusEnumUnderReview,
        },
        SubaccountIds: []string{
            "error",
            "expedita",
            "error",
            "placeat",
        },
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DfareportingBillingProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingProfilesListResponse != nil {
        // handle response
    }
}
```

## DfareportingBillingProfilesUpdate

Updates an existing billing profile.

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
    res, err := s.BillingProfiles.DfareportingBillingProfilesUpdate(ctx, operations.DfareportingBillingProfilesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BillingProfile: &shared.BillingProfile{
            ConsolidatedInvoice: sdk.Bool(false),
            CountryCode: sdk.String("GH"),
            CurrencyCode: sdk.String("odit"),
            ID: sdk.String("odit"),
            InvoiceLevel: shared.BillingProfileInvoiceLevelEnumAccountLevel.ToPointer(),
            IsDefault: sdk.Bool(false),
            Kind: sdk.String("error"),
            Name: sdk.String("Jan Abbott Sr."),
            PaymentsAccountID: sdk.String("amet"),
            PaymentsCustomerID: sdk.String("cum"),
            PurchaseOrder: sdk.String("iusto"),
            SecondaryPaymentsCustomerID: sdk.String("corrupti"),
            Status: shared.BillingProfileStatusEnumUnderReview.ToPointer(),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("minima"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "architecto",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("in"),
    }, operations.DfareportingBillingProfilesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingProfile != nil {
        // handle response
    }
}
```
