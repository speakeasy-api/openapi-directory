# Volumes

### Available Operations

* [BooksVolumesAssociatedList](#booksvolumesassociatedlist) - Return a list of associated books.
* [BooksVolumesGet](#booksvolumesget) - Gets volume information for a single volume.
* [BooksVolumesList](#booksvolumeslist) - Performs a book search.
* [BooksVolumesMybooksList](#booksvolumesmybookslist) - Return a list of books in My Library.
* [BooksVolumesRecommendedList](#booksvolumesrecommendedlist) - Return a list of recommended books for the current user.
* [BooksVolumesRecommendedRate](#booksvolumesrecommendedrate) - Rate a recommended book for the current user.
* [BooksVolumesUseruploadedList](#booksvolumesuseruploadedlist) - Return a list of books uploaded by the current user.

## BooksVolumesAssociatedList

Return a list of associated books.

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
    res, err := s.Volumes.BooksVolumesAssociatedList(ctx, operations.BooksVolumesAssociatedListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Association: operations.BooksVolumesAssociatedListAssociationEnumAssociationUndefined.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        Locale: sdk.String("impedit"),
        MaxAllowedMaturityRating: operations.BooksVolumesAssociatedListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined.ToPointer(),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        Source: sdk.String("dignissimos"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("maiores"),
        VolumeID: "natus",
    }, operations.BooksVolumesAssociatedListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksVolumesGet

Gets volume information for a single volume.

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
    res, err := s.Volumes.BooksVolumesGet(ctx, operations.BooksVolumesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        Country: sdk.String("Aruba"),
        Fields: sdk.String("ea"),
        IncludeNonComicsSeries: sdk.Bool(false),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("consequuntur"),
        Partner: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.BooksVolumesGetProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("maxime"),
        Source: sdk.String("dignissimos"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("asperiores"),
        UserLibraryConsistentRead: sdk.Bool(false),
        VolumeID: "nemo",
    }, operations.BooksVolumesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume != nil {
        // handle response
    }
}
```

## BooksVolumesList

Performs a book search.

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
    res, err := s.Volumes.BooksVolumesList(ctx, operations.BooksVolumesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Download: operations.BooksVolumesListDownloadEnumDownloadUndefined.ToPointer(),
        Fields: sdk.String("ab"),
        Filter: operations.BooksVolumesListFilterEnumEbooks.ToPointer(),
        Key: sdk.String("fuga"),
        LangRestrict: sdk.String("id"),
        LibraryRestrict: operations.BooksVolumesListLibraryRestrictEnumMyLibrary.ToPointer(),
        MaxAllowedMaturityRating: operations.BooksVolumesListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined.ToPointer(),
        MaxResults: sdk.Int64(633931),
        OauthToken: sdk.String("est"),
        OrderBy: operations.BooksVolumesListOrderByEnumRelevance.ToPointer(),
        Partner: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        PrintType: operations.BooksVolumesListPrintTypeEnumMagazines.ToPointer(),
        Projection: operations.BooksVolumesListProjectionEnumFull.ToPointer(),
        Q: "ducimus",
        QuotaUser: sdk.String("quos"),
        ShowPreorders: sdk.Bool(false),
        Source: sdk.String("vel"),
        StartIndex: sdk.Int64(287051),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.BooksVolumesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksVolumesMybooksList

Return a list of books in My Library.

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
    res, err := s.Volumes.BooksVolumesMybooksList(ctx, operations.BooksVolumesMybooksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        AcquireMethod: []BooksVolumesMybooksListAcquireMethodEnum{
            operations.BooksVolumesMybooksListAcquireMethodEnumPreviouslyRented,
            operations.BooksVolumesMybooksListAcquireMethodEnumUploaded,
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Country: sdk.String("Tuvalu"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("aperiam"),
        Locale: sdk.String("cum"),
        MaxResults: sdk.Int64(232627),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProcessingState: []BooksVolumesMybooksListProcessingStateEnum{
            operations.BooksVolumesMybooksListProcessingStateEnumRunning,
            operations.BooksVolumesMybooksListProcessingStateEnumRunning,
        },
        QuotaUser: sdk.String("numquam"),
        Source: sdk.String("doloribus"),
        StartIndex: sdk.Int64(381760),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.BooksVolumesMybooksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksVolumesRecommendedList

Return a list of recommended books for the current user.

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
    res, err := s.Volumes.BooksVolumesRecommendedList(ctx, operations.BooksVolumesRecommendedListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("adipisci"),
        Locale: sdk.String("non"),
        MaxAllowedMaturityRating: operations.BooksVolumesRecommendedListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined.ToPointer(),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        Source: sdk.String("a"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.BooksVolumesRecommendedListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksVolumesRecommendedRate

Rate a recommended book for the current user.

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
    res, err := s.Volumes.BooksVolumesRecommendedRate(ctx, operations.BooksVolumesRecommendedRateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("libero"),
        Locale: sdk.String("vitae"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        Rating: operations.BooksVolumesRecommendedRateRatingEnumRatingUndefined,
        Source: sdk.String("aspernatur"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("voluptas"),
        VolumeID: "voluptas",
    }, operations.BooksVolumesRecommendedRateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BooksVolumesRecommendedRateResponse != nil {
        // handle response
    }
}
```

## BooksVolumesUseruploadedList

Return a list of books uploaded by the current user.

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
    res, err := s.Volumes.BooksVolumesUseruploadedList(ctx, operations.BooksVolumesUseruploadedListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("minus"),
        Key: sdk.String("dolores"),
        Locale: sdk.String("blanditiis"),
        MaxResults: sdk.Int64(449292),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProcessingState: []BooksVolumesUseruploadedListProcessingStateEnum{
            operations.BooksVolumesUseruploadedListProcessingStateEnumRunning,
            operations.BooksVolumesUseruploadedListProcessingStateEnumRunning,
        },
        QuotaUser: sdk.String("ullam"),
        Source: sdk.String("adipisci"),
        StartIndex: sdk.Int64(738391),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("quas"),
        VolumeID: []string{
            "nesciunt",
            "culpa",
            "corrupti",
            "pariatur",
        },
    }, operations.BooksVolumesUseruploadedListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```
