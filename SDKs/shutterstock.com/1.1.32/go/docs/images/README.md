# Images

### Available Operations

* [AddImageCollectionItems](#addimagecollectionitems) - Add images to collections
* [BulkSearchImages](#bulksearchimages) - Run multiple image searches
* [CreateImageCollection](#createimagecollection) - Create image collections
* [DeleteImageCollection](#deleteimagecollection) - Delete image collections
* [DeleteImageCollectionItems](#deleteimagecollectionitems) - Remove images from collections
* [DownloadImage](#downloadimage) - Download images
* [GetFeaturedImageCollection](#getfeaturedimagecollection) - Get the details of featured image collections
* [GetFeaturedImageCollectionItems](#getfeaturedimagecollectionitems) - Get the contents of featured image collections
* [GetFeaturedImageCollectionList](#getfeaturedimagecollectionlist) - List featured image collections
* [GetImage](#getimage) - Get details about images
* [GetImageCollection](#getimagecollection) - Get the details of image collections
* [GetImageCollectionItems](#getimagecollectionitems) - Get the contents of image collections
* [GetImageCollectionList](#getimagecollectionlist) - List image collections
* [GetImageKeywordSuggestions](#getimagekeywordsuggestions) - Get keywords from text
* [GetImageLicenseList](#getimagelicenselist) - List image licenses
* [GetImageList](#getimagelist) - List images
* [GetImageRecommendations](#getimagerecommendations) - List recommended images
* [GetImageSuggestions](#getimagesuggestions) - Get suggestions for a search term
* [GetUpdatedImages](#getupdatedimages) - List updated images
* [LicenseImages](#licenseimages) - License images
* [ListImageCategories](#listimagecategories) - List image categories
* [ListSimilarImages](#listsimilarimages) - List similar images
* [RenameImageCollection](#renameimagecollection) - Rename image collections
* [SearchImages](#searchimages) - Search for images

## AddImageCollectionItems

This endpoint adds one or more images to a collection by image IDs.

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
    res, err := s.Images.AddImageCollectionItems(ctx, operations.AddImageCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-02-06T01:23:27.992Z"),
                    ID: "d86e68e4-be05-4601-bf59-da757a59ecfe",
                    MediaType: sdk.String("asperiores"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-08-16T11:44:46.779Z"),
                    ID: "ef1caa33-83c2-4beb-8773-73c8d72f64d1",
                    MediaType: sdk.String("facere"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-10-18T05:42:38.841Z"),
                    ID: "f2c43106-61e9-4634-9e1c-f9e06e3a4370",
                    MediaType: sdk.String("doloremque"),
                },
            },
        },
        ID: "0ae6b6bc-9b8f-4759-aac5-5a9741d31135",
    }, operations.AddImageCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BulkSearchImages

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

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
    res, err := s.Images.BulkSearchImages(ctx, operations.BulkSearchImagesRequest{
        RequestBody: []shared.SearchImage{
            shared.SearchImage{
                AddedDate: types.MustDateFromString("2022-03-12"),
                AddedDateEnd: types.MustDateFromString("2022-04-03"),
                AddedDateStart: types.MustDateFromString("2021-12-12"),
                AspectRatio: sdk.Float64(6780.6),
                AspectRatioMax: sdk.Float64(4876.76),
                AspectRatioMin: sdk.Float64(1446.91),
                Authentic: sdk.Bool(false),
                Category: sdk.String("alias"),
                Color: sdk.String("magni"),
                Contributor: []string{
                    "quae",
                    "quae",
                },
                ContributorCountry: []string{
                    "exercitationem",
                },
                Fields: sdk.String("itaque"),
                Height: sdk.Int64(88248),
                HeightFrom: sdk.Int64(215398),
                HeightTo: sdk.Int64(602229),
                ImageType: []shared.SearchImageImageTypeEnum{
                    shared.SearchImageImageTypeEnumVector,
                    shared.SearchImageImageTypeEnumVector,
                    shared.SearchImageImageTypeEnumPhoto,
                    shared.SearchImageImageTypeEnumPhoto,
                },
                KeywordSafeSearch: sdk.Bool(false),
                Language: shared.LanguageEnumCs.ToPointer(),
                License: []shared.SearchImageLicenseEnum{
                    shared.SearchImageLicenseEnumEditorial,
                    shared.SearchImageLicenseEnumEnhanced,
                },
                Model: []string{
                    "id",
                },
                Orientation: shared.SearchImageOrientationEnumVertical.ToPointer(),
                Page: sdk.Int64(854460),
                PeopleAge: shared.SearchImagePeopleAgeEnumFortys.ToPointer(),
                PeopleEthnicity: []shared.SearchImagePeopleEthnicityEnum{
                    shared.SearchImagePeopleEthnicityEnumNotMiddleEastern,
                    shared.SearchImagePeopleEthnicityEnumAfrican,
                    shared.SearchImagePeopleEthnicityEnumOther,
                },
                PeopleGender: shared.SearchImagePeopleGenderEnumMale.ToPointer(),
                PeopleModelReleased: sdk.Bool(false),
                PeopleNumber: sdk.Int64(914864),
                PerPage: sdk.Int64(80061),
                Query: sdk.String("aperiam"),
                Region: sdk.String("74.193.183.8"),
                Safe: sdk.Bool(false),
                Sort: shared.SearchImageSortEnumPopular.ToPointer(),
                SpellcheckQuery: sdk.Bool(false),
                View: shared.SearchImageViewEnumMinimal.ToPointer(),
                Width: sdk.Int64(172951),
                WidthFrom: sdk.Int64(824798),
                WidthTo: sdk.Int64(107210),
            },
        },
        AddedDate: types.MustDateFromString("2021-05-14"),
        AddedDateEnd: types.MustDateFromString("2022-01-20"),
        AddedDateStart: types.MustDateFromString("2021-03-27"),
        AspectRatio: sdk.Float64(8964.8),
        AspectRatioMax: sdk.Float64(7332.89),
        AspectRatioMin: sdk.Float64(5750.78),
        Category: sdk.String("ea"),
        Color: sdk.String("autem"),
        Contributor: []string{
            "rerum",
            "laudantium",
        },
        ContributorCountry: []string{
            "voluptatibus",
            "cum",
            "at",
            "alias",
        },
        Fields: sdk.String("quia"),
        Height: sdk.Int64(694158),
        HeightFrom: sdk.Int64(684126),
        HeightTo: sdk.Int64(919508),
        ImageType: []BulkSearchImagesImageTypeEnum{
            operations.BulkSearchImagesImageTypeEnumVector,
        },
        KeywordSafeSearch: sdk.Bool(false),
        Language: shared.LanguageEnumCs.ToPointer(),
        License: []BulkSearchImagesLicenseEnum{
            operations.BulkSearchImagesLicenseEnumCommercial,
            operations.BulkSearchImagesLicenseEnumEnhanced,
            operations.BulkSearchImagesLicenseEnumEditorial,
            operations.BulkSearchImagesLicenseEnumEditorial,
        },
        Model: []string{
            "explicabo",
        },
        Orientation: operations.BulkSearchImagesOrientationEnumHorizontal.ToPointer(),
        Page: sdk.Int64(621473),
        PeopleAge: operations.BulkSearchImagesPeopleAgeEnumOlder.ToPointer(),
        PeopleEthnicity: []BulkSearchImagesPeopleEthnicityEnum{
            operations.BulkSearchImagesPeopleEthnicityEnumNotSouthAsian,
        },
        PeopleGender: operations.BulkSearchImagesPeopleGenderEnumFemale.ToPointer(),
        PeopleModelReleased: sdk.Bool(false),
        PeopleNumber: sdk.Int64(282837),
        PerPage: sdk.Int64(693746),
        Region: sdk.String("beatae"),
        Safe: sdk.Bool(false),
        Sort: operations.BulkSearchImagesSortEnumRelevance.ToPointer(),
        SpellcheckQuery: sdk.Bool(false),
        View: operations.BulkSearchImagesViewEnumMinimal.ToPointer(),
        Width: sdk.Int64(963198),
        WidthFrom: sdk.Int64(585593),
        WidthTo: sdk.Int64(147801),
    }, operations.BulkSearchImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkImageSearchResults != nil {
        // handle response
    }
}
```

## CreateImageCollection

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

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
    res, err := s.Images.CreateImageCollection(ctx, shared.CollectionCreateRequest{
        Name: "Carrie Douglas",
    }, operations.CreateImageCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionCreateResponse != nil {
        // handle response
    }
}
```

## DeleteImageCollection

This endpoint deletes an image collection.

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
    res, err := s.Images.DeleteImageCollection(ctx, operations.DeleteImageCollectionRequest{
        ID: "7ce52b89-5c53-47c6-854e-fb0b34896c3c",
    }, operations.DeleteImageCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteImageCollectionItems

This endpoint removes one or more images from a collection.

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
    res, err := s.Images.DeleteImageCollectionItems(ctx, operations.DeleteImageCollectionItemsRequest{
        ID: "a5acfbe2-fd57-4075-b792-9177deac646e",
        ItemID: []string{
            "quidem",
            "exercitationem",
            "quam",
            "dolorem",
        },
    }, operations.DeleteImageCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadImage

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

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
    res, err := s.Images.DownloadImage(ctx, operations.DownloadImageRequest{
        RedownloadImage: shared.RedownloadImage{
            AuthCookie: &shared.Cookie{
                Name: "Melissa Mayer",
                Value: "repudiandae",
            },
            ShowModal: sdk.Bool(false),
            Size: shared.RedownloadImageSizeEnumSupersize.ToPointer(),
            VerificationCode: sdk.String("dicta"),
        },
        ID: "e5a2b12e-b07f-4116-9b99-545fc95fa889",
    }, operations.DownloadImageSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URL != nil {
        // handle response
    }
}
```

## GetFeaturedImageCollection

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

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
    res, err := s.Images.GetFeaturedImageCollection(ctx, operations.GetFeaturedImageCollectionRequest{
        AssetHint: operations.GetFeaturedImageCollectionAssetHintEnumOnex.ToPointer(),
        Embed: operations.GetFeaturedImageCollectionEmbedEnumShareURL.ToPointer(),
        ID: "0e189dbb-30fc-4b33-aa05-5b197cd44e2f",
    }, operations.GetFeaturedImageCollectionSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedCollection != nil {
        // handle response
    }
}
```

## GetFeaturedImageCollectionItems

This endpoint lists the IDs of images in a featured collection and the date that each was added.

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
    res, err := s.Images.GetFeaturedImageCollectionItems(ctx, operations.GetFeaturedImageCollectionItemsRequest{
        ID: "52d82d35-13bb-46f4-8b65-6bcdb35ff2e4",
        Page: sdk.Int64(700928),
        PerPage: sdk.Int64(179795),
    }, operations.GetFeaturedImageCollectionItemsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionItemDataList != nil {
        // handle response
    }
}
```

## GetFeaturedImageCollectionList

This endpoint lists featured collections of specific types and a name and cover image for each collection.

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
    res, err := s.Images.GetFeaturedImageCollectionList(ctx, operations.GetFeaturedImageCollectionListRequest{
        AssetHint: operations.GetFeaturedImageCollectionListAssetHintEnumOnex.ToPointer(),
        Embed: operations.GetFeaturedImageCollectionListEmbedEnumShareURL.ToPointer(),
        Type: []GetFeaturedImageCollectionListTypeEnum{
            operations.GetFeaturedImageCollectionListTypeEnumPhoto,
            operations.GetFeaturedImageCollectionListTypeEnumEditorial,
        },
    }, operations.GetFeaturedImageCollectionListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedCollectionDataList != nil {
        // handle response
    }
}
```

## GetImage

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

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
    res, err := s.Images.GetImage(ctx, operations.GetImageRequest{
        ID: "est",
        Language: shared.LanguageEnumCs.ToPointer(),
        SearchID: sdk.String("rem"),
        View: operations.GetImageViewEnumFull.ToPointer(),
    }, operations.GetImageSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Image != nil {
        // handle response
    }
}
```

## GetImageCollection

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

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
    res, err := s.Images.GetImageCollection(ctx, operations.GetImageCollectionRequest{
        Embed: []GetImageCollectionEmbedEnum{
            operations.GetImageCollectionEmbedEnumShareURL,
            operations.GetImageCollectionEmbedEnumShareURL,
            operations.GetImageCollectionEmbedEnumShareCode,
            operations.GetImageCollectionEmbedEnumShareCode,
        },
        ID: "19c177d5-25f7-47b1-94ee-b52ff785fc37",
        ShareCode: sdk.String("deleniti"),
    }, operations.GetImageCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## GetImageCollectionItems

This endpoint lists the IDs of images in a collection and the date that each was added.

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
    res, err := s.Images.GetImageCollectionItems(ctx, operations.GetImageCollectionItemsRequest{
        ID: "14d4c98e-0c2b-4b89-ab75-dad636c60050",
        Page: sdk.Int64(229567),
        PerPage: sdk.Int64(849320),
        ShareCode: sdk.String("praesentium"),
        Sort: operations.GetImageCollectionItemsSortEnumOldest.ToPointer(),
    }, operations.GetImageCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionItemDataList != nil {
        // handle response
    }
}
```

## GetImageCollectionList

This endpoint lists your collections of images and their basic attributes.

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
    res, err := s.Images.GetImageCollectionList(ctx, operations.GetImageCollectionListRequest{
        Embed: []GetImageCollectionListEmbedEnum{
            operations.GetImageCollectionListEmbedEnumShareCode,
            operations.GetImageCollectionListEmbedEnumShareCode,
            operations.GetImageCollectionListEmbedEnumShareCode,
        },
        Page: sdk.Int64(514922),
        PerPage: sdk.Int64(40710),
    }, operations.GetImageCollectionListSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionDataList != nil {
        // handle response
    }
}
```

## GetImageKeywordSuggestions

This endpoint returns up to 10 important keywords from a block of plain text.

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
    res, err := s.Images.GetImageKeywordSuggestions(ctx, shared.SearchEntitiesRequest{
        Text: "earum",
    }, operations.GetImageKeywordSuggestionsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchEntitiesResponse != nil {
        // handle response
    }
}
```

## GetImageLicenseList

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
    res, err := s.Images.GetImageLicenseList(ctx, operations.GetImageLicenseListRequest{
        DownloadAvailability: operations.GetImageLicenseListDownloadAvailabilityEnumDownloadable.ToPointer(),
        EndDate: types.MustTimeFromString("2022-05-31T09:24:28.393Z"),
        ImageID: sdk.String("dolorum"),
        License: sdk.String("necessitatibus"),
        Page: sdk.Int64(592880),
        PerPage: sdk.Int64(920272),
        Sort: operations.GetImageLicenseListSortEnumNewest.ToPointer(),
        StartDate: types.MustTimeFromString("2022-07-11T07:45:44.709Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Tomasa.Quitzon"),
    }, operations.GetImageLicenseListSecurity{
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

## GetImageList

This endpoint lists information about one or more images, including the available sizes.

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
    res, err := s.Images.GetImageList(ctx, operations.GetImageListRequest{
        ID: []string{
            "accusamus",
            "eos",
            "totam",
        },
        SearchID: sdk.String("dicta"),
        View: operations.GetImageListViewEnumMinimal.ToPointer(),
    }, operations.GetImageListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageDataList != nil {
        // handle response
    }
}
```

## GetImageRecommendations

This endpoint returns images that customers put in the same collection as the specified image IDs.

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
    res, err := s.Images.GetImageRecommendations(ctx, operations.GetImageRecommendationsRequest{
        ID: []string{
            "dolor",
        },
        MaxItems: sdk.Int64(124289),
        Safe: sdk.Bool(false),
    }, operations.GetImageRecommendationsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecommendationDataList != nil {
        // handle response
    }
}
```

## GetImageSuggestions

This endpoint provides autocomplete suggestions for partial search terms.

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
    res, err := s.Images.GetImageSuggestions(ctx, operations.GetImageSuggestionsRequest{
        Limit: sdk.Int64(953676),
        Query: "dolor",
    }, operations.GetImageSuggestionsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Suggestions != nil {
        // handle response
    }
}
```

## GetUpdatedImages

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

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
    res, err := s.Images.GetUpdatedImages(ctx, operations.GetUpdatedImagesRequest{
        EndDate: types.MustDateFromString("2021-12-02"),
        Interval: sdk.String("beatae"),
        Page: sdk.Int64(868255),
        PerPage: sdk.Int64(287544),
        Sort: operations.GetUpdatedImagesSortEnumOldest.ToPointer(),
        StartDate: types.MustDateFromString("2022-12-20"),
        Type: []GetUpdatedImagesTypeEnum{
            operations.GetUpdatedImagesTypeEnumEdit,
        },
    }, operations.GetUpdatedImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatedMediaDataList != nil {
        // handle response
    }
}
```

## LicenseImages

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

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
    res, err := s.Images.LicenseImages(ctx, operations.LicenseImagesRequest{
        LicenseImageRequest: shared.LicenseImageRequest{
            Images: []interface{}{
                shared.LicenseImage{
                    AuthCookie: &shared.Cookie{
                        Name: "Kristie Frami",
                        Value: "consectetur",
                    },
                    CustomDimensions: &shared.CustomSizeDimensions{
                        Height: sdk.Int64(753240),
                        Width: sdk.Int64(490110),
                    },
                    EditorialAcknowledgement: sdk.Bool(false),
                    Format: shared.LicenseImageFormatEnumJpg.ToPointer(),
                    ImageID: "consectetur",
                    Metadata: map[string]interface{}{
                        "natus": "temporibus",
                        "officia": "amet",
                        "tenetur": "aspernatur",
                    },
                    Price: sdk.Float64(7782.76),
                    SearchID: sdk.String("itaque"),
                    ShowModal: sdk.Bool(false),
                    Size: shared.LicenseImageSizeEnumCustom.ToPointer(),
                    SubscriptionID: sdk.String("laborum"),
                    VerificationCode: sdk.String("dignissimos"),
                },
                shared.LicenseImageVector{
                    AuthCookie: &shared.Cookie{
                        Name: "Mr. Edith Zieme",
                        Value: "nihil",
                    },
                    EditorialAcknowledgement: sdk.Bool(false),
                    Format: shared.LicenseImageVectorFormatEnumEps.ToPointer(),
                    ImageID: "non",
                    Metadata: map[string]interface{}{
                        "illo": "hic",
                    },
                    Price: sdk.Float64(6444.79),
                    SearchID: sdk.String("delectus"),
                    ShowModal: sdk.Bool(false),
                    Size: shared.LicenseImageVectorSizeEnumVector.ToPointer(),
                    SubscriptionID: sdk.String("non"),
                    VerificationCode: sdk.String("distinctio"),
                },
            },
        },
        Format: operations.LicenseImagesFormatEnumEps.ToPointer(),
        SearchID: sdk.String("exercitationem"),
        Size: operations.LicenseImagesSizeEnumMedium.ToPointer(),
        SubscriptionID: sdk.String("numquam"),
    }, operations.LicenseImagesSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseImageResultDataList != nil {
        // handle response
    }
}
```

## ListImageCategories

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

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
    res, err := s.Images.ListImageCategories(ctx, operations.ListImageCategoriesRequest{
        Language: shared.LanguageEnumCs.ToPointer(),
    }, operations.ListImageCategoriesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryDataList != nil {
        // handle response
    }
}
```

## ListSimilarImages

This endpoint returns images that are visually similar to an image that you specify.

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
    res, err := s.Images.ListSimilarImages(ctx, operations.ListSimilarImagesRequest{
        ID: "e472e802-857a-45b4-8463-a7d575f1400e",
        Language: shared.LanguageEnumCs.ToPointer(),
        Page: sdk.Int64(483753),
        PerPage: sdk.Int64(413758),
        View: operations.ListSimilarImagesViewEnumMinimal.ToPointer(),
    }, operations.ListSimilarImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageSearchResults != nil {
        // handle response
    }
}
```

## RenameImageCollection

This endpoint sets a new name for an image collection.

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
    res, err := s.Images.RenameImageCollection(ctx, operations.RenameImageCollectionRequest{
        CollectionUpdateRequest: shared.CollectionUpdateRequest{
            Name: "Woodrow Klein",
        },
        ID: "4ec1b781-b36a-4080-88d1-00efada200ef",
    }, operations.RenameImageCollectionSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchImages

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

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
    res, err := s.Images.SearchImages(ctx, operations.SearchImagesRequest{
        AddedDate: types.MustDateFromString("2022-09-21"),
        AddedDateEnd: types.MustDateFromString("2022-10-25"),
        AddedDateStart: types.MustDateFromString("2020-12-04"),
        AiIndustry: operations.SearchImagesAiIndustryEnumAutomotive.ToPointer(),
        AiLabelsLimit: sdk.Int64(108903),
        AiObjective: operations.SearchImagesAiObjectiveEnumTraffic.ToPointer(),
        AiSearch: sdk.Bool(false),
        AspectRatio: sdk.Float64(2646.49),
        AspectRatioMax: sdk.Float64(7600.49),
        AspectRatioMin: sdk.Float64(9750.95),
        Category: sdk.String("molestias"),
        Color: sdk.String("officia"),
        Contributor: []string{
            "totam",
            "sequi",
            "aliquid",
        },
        ContributorCountry: []string{
            "ducimus",
            "odit",
            "velit",
            "reiciendis",
        },
        Fields: sdk.String("repellat"),
        Height: sdk.Int64(861123),
        HeightFrom: sdk.Int64(671116),
        HeightTo: sdk.Int64(617657),
        ImageType: []SearchImagesImageTypeEnum{
            operations.SearchImagesImageTypeEnumPhoto,
            operations.SearchImagesImageTypeEnumIllustration,
            operations.SearchImagesImageTypeEnumVector,
            operations.SearchImagesImageTypeEnumVector,
        },
        KeywordSafeSearch: sdk.Bool(false),
        Language: shared.LanguageEnumCs.ToPointer(),
        License: []SearchImagesLicenseEnum{
            operations.SearchImagesLicenseEnumCommercial,
            operations.SearchImagesLicenseEnumEditorial,
            operations.SearchImagesLicenseEnumCommercial,
            operations.SearchImagesLicenseEnumEditorial,
        },
        Model: []string{
            "dicta",
            "voluptatibus",
            "eligendi",
            "quae",
        },
        Orientation: operations.SearchImagesOrientationEnumVertical.ToPointer(),
        Page: sdk.Int64(100002),
        PeopleAge: operations.SearchImagesPeopleAgeEnumInfants.ToPointer(),
        PeopleEthnicity: []SearchImagesPeopleEthnicityEnum{
            operations.SearchImagesPeopleEthnicityEnumNotHispanic,
            operations.SearchImagesPeopleEthnicityEnumNotAfrican,
        },
        PeopleGender: operations.SearchImagesPeopleGenderEnumMale.ToPointer(),
        PeopleModelReleased: sdk.Bool(false),
        PeopleNumber: sdk.Int64(704271),
        PerPage: sdk.Int64(967055),
        Query: sdk.String("a"),
        Region: sdk.String("30.141.91.75"),
        Safe: sdk.Bool(false),
        Sort: operations.SearchImagesSortEnumPopular.ToPointer(),
        SpellcheckQuery: sdk.Bool(false),
        View: operations.SearchImagesViewEnumFull.ToPointer(),
        Width: sdk.Int64(807419),
        WidthFrom: sdk.Int64(265905),
        WidthTo: sdk.Int64(163558),
    }, operations.SearchImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageSearchResults != nil {
        // handle response
    }
}
```
