# SoundEffects

### Available Operations

* [DownloadSfx](#downloadsfx) - Download sound effects
* [GetSfxDetails](#getsfxdetails) - Get details about sound effects
* [GetSfxLicenseList](#getsfxlicenselist) - List sound effects licenses
* [GetSfxListDetails](#getsfxlistdetails) - List details about sound effects
* [LicensesSFX](#licensessfx) - License sound effects
* [SearchSFX](#searchsfx) - Search for sound effects

## DownloadSfx

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SoundEffects.DownloadSfx(ctx, operations.DownloadSfxRequest{
        ID: "562a7b40-8f05-4e3d-88fd-af313a1f5fd9",
    }, operations.DownloadSfxSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SfxURL != nil {
        // handle response
    }
}
```

## GetSfxDetails

This endpoint shows information about a sound effect.

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
    res, err := s.SoundEffects.GetSfxDetails(ctx, operations.GetSfxDetailsRequest{
        ID: 275425,
        Language: shared.LanguageEnumCs.ToPointer(),
        Library: operations.GetSfxDetailsLibraryEnumShutterstock.ToPointer(),
        SearchID: sdk.String("ipsam"),
        View: operations.GetSfxDetailsViewEnumFull.ToPointer(),
    }, operations.GetSfxDetailsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sfx != nil {
        // handle response
    }
}
```

## GetSfxLicenseList

This endpoint lists existing licenses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SoundEffects.GetSfxLicenseList(ctx, operations.GetSfxLicenseListRequest{
        DownloadAvailability: operations.GetSfxLicenseListDownloadAvailabilityEnumNonDownloadable.ToPointer(),
        EndDate: types.MustTimeFromString("2022-04-21T23:30:19.456Z"),
        License: sdk.String("nesciunt"),
        LicenseID: sdk.String("commodi"),
        Page: sdk.Int64(956124),
        PerPage: sdk.Int64(164319),
        SfxID: sdk.String("veniam"),
        Sort: operations.GetSfxLicenseListSortEnumOldest.ToPointer(),
        StartDate: types.MustTimeFromString("2021-11-07T04:55:07.411Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Dylan.Gerhold72"),
    }, operations.GetSfxLicenseListSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadHistoryDataList != nil {
        // handle response
    }
}
```

## GetSfxListDetails

This endpoint shows information about sound effects.

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
    res, err := s.SoundEffects.GetSfxListDetails(ctx, operations.GetSfxListDetailsRequest{
        ID: []string{
            "minima",
            "ex",
        },
        Language: shared.LanguageEnumCs.ToPointer(),
        Library: operations.GetSfxListDetailsLibraryEnumPremiumbeat.ToPointer(),
        SearchID: sdk.String("ab"),
        View: operations.GetSfxListDetailsViewEnumMinimal.ToPointer(),
    }, operations.GetSfxListDetailsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SFXDataList != nil {
        // handle response
    }
}
```

## LicensesSFX

This endpoint licenses sounds effect assets.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SoundEffects.LicensesSFX(ctx, shared.LicenseSFXRequest{
        SoundEffects: []shared.LicenseSFX{
            shared.LicenseSFX{
                AudioLayout: shared.LicenseSFXAudioLayoutEnumFive1.ToPointer(),
                Format: shared.LicenseSFXFormatEnumMp3.ToPointer(),
                SearchID: sdk.String("dolor"),
                SfxID: "ducimus",
                SubscriptionID: "fuga",
            },
            shared.LicenseSFX{
                AudioLayout: shared.LicenseSFXAudioLayoutEnumAmbisonic.ToPointer(),
                Format: shared.LicenseSFXFormatEnumWav.ToPointer(),
                SearchID: sdk.String("qui"),
                SfxID: "aliquid",
                SubscriptionID: "magni",
            },
            shared.LicenseSFX{
                AudioLayout: shared.LicenseSFXAudioLayoutEnumAmbisonic.ToPointer(),
                Format: shared.LicenseSFXFormatEnumWav.ToPointer(),
                SearchID: sdk.String("praesentium"),
                SfxID: "dolor",
                SubscriptionID: "exercitationem",
            },
            shared.LicenseSFX{
                AudioLayout: shared.LicenseSFXAudioLayoutEnumStereo.ToPointer(),
                Format: shared.LicenseSFXFormatEnumMp3.ToPointer(),
                SearchID: sdk.String("impedit"),
                SfxID: "sit",
                SubscriptionID: "nemo",
            },
        },
    }, operations.LicensesSFXSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseSFXResultDataList != nil {
        // handle response
    }
}
```

## SearchSFX

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SoundEffects.SearchSFX(ctx, operations.SearchSFXRequest{
        AddedDate: types.MustDateFromString("2022-09-06"),
        AddedDateEnd: types.MustDateFromString("2022-05-10"),
        AddedDateStart: types.MustDateFromString("2022-09-01"),
        Duration: sdk.Int64(800256),
        DurationFrom: sdk.Int64(932250),
        DurationTo: sdk.Int64(955569),
        Language: shared.LanguageEnumCs.ToPointer(),
        Page: sdk.Int64(788661),
        PerPage: sdk.Int64(316550),
        Query: sdk.String("doloribus"),
        Safe: sdk.Bool(false),
        Sort: operations.SearchSFXSortEnumOldest.ToPointer(),
        View: operations.SearchSFXViewEnumFull.ToPointer(),
    }, operations.SearchSFXSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SFXSearchResults != nil {
        // handle response
    }
}
```
