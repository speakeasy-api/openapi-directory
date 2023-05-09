# Onboarding

### Available Operations

* [BooksOnboardingListCategories](#booksonboardinglistcategories) - List categories for onboarding experience.
* [BooksOnboardingListCategoryVolumes](#booksonboardinglistcategoryvolumes) - List available volumes under categories for onboarding experience.

## BooksOnboardingListCategories

List categories for onboarding experience.

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
    res, err := s.Onboarding.BooksOnboardingListCategories(ctx, operations.BooksOnboardingListCategoriesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("mollitia"),
        Locale: sdk.String("incidunt"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.BooksOnboardingListCategoriesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## BooksOnboardingListCategoryVolumes

List available volumes under categories for onboarding experience.

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
    res, err := s.Onboarding.BooksOnboardingListCategoryVolumes(ctx, operations.BooksOnboardingListCategoryVolumesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        CategoryID: []string{
            "saepe",
        },
        Fields: sdk.String("occaecati"),
        Key: sdk.String("atque"),
        Locale: sdk.String("et"),
        MaxAllowedMaturityRating: operations.BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnumMature.ToPointer(),
        OauthToken: sdk.String("eveniet"),
        PageSize: sdk.Int64(882042),
        PageToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("nam"),
    }, operations.BooksOnboardingListCategoryVolumesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume2 != nil {
        // handle response
    }
}
```
