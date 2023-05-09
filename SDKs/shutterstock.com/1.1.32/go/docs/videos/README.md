# Videos

### Available Operations

* [AddVideoCollectionItems](#addvideocollectionitems) - Add videos to collections
* [CreateVideoCollection](#createvideocollection) - Create video collections
* [DeleteVideoCollection](#deletevideocollection) - Delete video collections
* [DeleteVideoCollectionItems](#deletevideocollectionitems) - Remove videos from collections
* [DownloadVideos](#downloadvideos) - Download videos
* [FindSimilarVideos](#findsimilarvideos) - List similar videos
* [GetFeaturedVideoCollection](#getfeaturedvideocollection) - Get the details of featured video collections
* [GetFeaturedVideoCollectionItems](#getfeaturedvideocollectionitems) - Get the contents of featured video collections
* [GetFeaturedVideoCollectionList](#getfeaturedvideocollectionlist) - List featured video collections
* [GetUpdatedVideos](#getupdatedvideos) - List updated videos
* [GetVideo](#getvideo) - Get details about videos
* [GetVideoCollection](#getvideocollection) - Get the details of video collections
* [GetVideoCollectionItems](#getvideocollectionitems) - Get the contents of video collections
* [GetVideoCollectionList](#getvideocollectionlist) - List video collections
* [GetVideoLicenseList](#getvideolicenselist) - List video licenses
* [GetVideoList](#getvideolist) - List videos
* [GetVideoSuggestions](#getvideosuggestions) - Get suggestions for a search term
* [LicenseVideos](#licensevideos) - License videos
* [ListVideoCategories](#listvideocategories) - List video categories
* [RenameVideoCollection](#renamevideocollection) - Rename video collections
* [SearchVideos](#searchvideos) - Search for videos

## AddVideoCollectionItems

This endpoint adds one or more videos to a collection by video IDs.

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
    res, err := s.Videos.AddVideoCollectionItems(ctx, operations.AddVideoCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-05-28T14:41:13.872Z"),
                    ID: "e510019c-6dc5-4e34-b627-99bfbbe6949f",
                    MediaType: sdk.String("cum"),
                },
            },
        },
        ID: "2bb4ecae-6c3d-45db-bade-bd5daea4c506",
    }, operations.AddVideoCollectionItemsSecurity{
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

## CreateVideoCollection

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

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
    res, err := s.Videos.CreateVideoCollection(ctx, shared.CollectionCreateRequest{
        Name: "Daryl Pacocha",
    }, operations.CreateVideoCollectionSecurity{
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

## DeleteVideoCollection

This endpoint deletes a collection.

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
    res, err := s.Videos.DeleteVideoCollection(ctx, operations.DeleteVideoCollectionRequest{
        ID: "4c02644c-f5e9-4d9a-8578-adc1ac600dec",
    }, operations.DeleteVideoCollectionSecurity{
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

## DeleteVideoCollectionItems

This endpoint removes one or more videos from a collection.

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
    res, err := s.Videos.DeleteVideoCollectionItems(ctx, operations.DeleteVideoCollectionItemsRequest{
        ID: "001ac802-e2ec-409f-b8f0-f816ff3477c1",
        ItemID: []string{
            "vero",
        },
    }, operations.DeleteVideoCollectionItemsSecurity{
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

## DownloadVideos

This endpoint redownloads videos that you have already received a license for.

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
    res, err := s.Videos.DownloadVideos(ctx, operations.DownloadVideosRequest{
        RedownloadVideo: shared.RedownloadVideo{
            AuthCookie: &shared.Cookie{
                Name: "Edward Denesik II",
                Value: "dicta",
            },
            ShowModal: sdk.Bool(false),
            Size: shared.RedownloadVideoSizeEnumWeb.ToPointer(),
            VerificationCode: sdk.String("corporis"),
        },
        ID: "b0960a66-8151-4a47-aaf9-23c5949f83f3",
    }, operations.DownloadVideosSecurity{
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

## FindSimilarVideos

This endpoint searches for videos that are similar to a video that you specify.

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
    res, err := s.Videos.FindSimilarVideos(ctx, operations.FindSimilarVideosRequest{
        ID: "nemo",
        Language: shared.LanguageEnumCs.ToPointer(),
        Page: sdk.Int64(57470),
        PerPage: sdk.Int64(787916),
        View: operations.FindSimilarVideosViewEnumFull.ToPointer(),
    }, operations.FindSimilarVideosSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoSearchResults != nil {
        // handle response
    }
}
```

## GetFeaturedVideoCollection

This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.

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
    res, err := s.Videos.GetFeaturedVideoCollection(ctx, operations.GetFeaturedVideoCollectionRequest{
        Embed: operations.GetFeaturedVideoCollectionEmbedEnumShareURL.ToPointer(),
        ID: "876ffb90-1c6e-4cbb-8e24-3cf789ffafed",
    }, operations.GetFeaturedVideoCollectionSecurity{
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

## GetFeaturedVideoCollectionItems

This endpoint lists the IDs of videos in a featured collection and the date that each was added.

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
    res, err := s.Videos.GetFeaturedVideoCollectionItems(ctx, operations.GetFeaturedVideoCollectionItemsRequest{
        ID: "a53e5ae6-e0ac-4184-82b9-c247c88373a4",
        Page: sdk.Int64(21358),
        PerPage: sdk.Int64(897058),
    }, operations.GetFeaturedVideoCollectionItemsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoCollectionItemDataList != nil {
        // handle response
    }
}
```

## GetFeaturedVideoCollectionList

This endpoint lists featured video collections and a name and cover video for each collection.

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
    res, err := s.Videos.GetFeaturedVideoCollectionList(ctx, operations.GetFeaturedVideoCollectionListRequest{
        Embed: operations.GetFeaturedVideoCollectionListEmbedEnumShareURL.ToPointer(),
    }, operations.GetFeaturedVideoCollectionListSecurity{
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

## GetUpdatedVideos

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

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
    res, err := s.Videos.GetUpdatedVideos(ctx, operations.GetUpdatedVideosRequest{
        EndDate: types.MustDateFromString("2022-06-08"),
        Interval: sdk.String("dolore"),
        Page: sdk.Int64(125811),
        PerPage: sdk.Int64(982991),
        Sort: operations.GetUpdatedVideosSortEnumNewest.ToPointer(),
        StartDate: types.MustDateFromString("2022-01-24"),
    }, operations.GetUpdatedVideosSecurity{
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

## GetVideo

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

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
    res, err := s.Videos.GetVideo(ctx, operations.GetVideoRequest{
        ID: "veniam",
        Language: shared.LanguageEnumCs.ToPointer(),
        SearchID: sdk.String("ipsam"),
        View: operations.GetVideoViewEnumMinimal.ToPointer(),
    }, operations.GetVideoSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Video != nil {
        // handle response
    }
}
```

## GetVideoCollection

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

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
    res, err := s.Videos.GetVideoCollection(ctx, operations.GetVideoCollectionRequest{
        Embed: []GetVideoCollectionEmbedEnum{
            operations.GetVideoCollectionEmbedEnumShareCode,
            operations.GetVideoCollectionEmbedEnumShareCode,
        },
        ID: "56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f",
        ShareCode: sdk.String("praesentium"),
    }, operations.GetVideoCollectionSecurity{
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

## GetVideoCollectionItems

This endpoint lists the IDs of videos in a collection and the date that each was added.

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
    res, err := s.Videos.GetVideoCollectionItems(ctx, operations.GetVideoCollectionItemsRequest{
        ID: "941aebc0-b80a-4692-8d3b-2ecfcc8f8950",
        Page: sdk.Int64(75850),
        PerPage: sdk.Int64(14251),
        ShareCode: sdk.String("doloribus"),
        Sort: operations.GetVideoCollectionItemsSortEnumNewest.ToPointer(),
    }, operations.GetVideoCollectionItemsSecurity{
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

## GetVideoCollectionList

This endpoint lists your collections of videos and their basic attributes.

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
    res, err := s.Videos.GetVideoCollectionList(ctx, operations.GetVideoCollectionListRequest{
        Embed: []GetVideoCollectionListEmbedEnum{
            operations.GetVideoCollectionListEmbedEnumShareURL,
            operations.GetVideoCollectionListEmbedEnumShareCode,
            operations.GetVideoCollectionListEmbedEnumShareURL,
            operations.GetVideoCollectionListEmbedEnumShareCode,
        },
        Page: sdk.Int64(960813),
        PerPage: sdk.Int64(652515),
    }, operations.GetVideoCollectionListSecurity{
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

## GetVideoLicenseList

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
    res, err := s.Videos.GetVideoLicenseList(ctx, operations.GetVideoLicenseListRequest{
        DownloadAvailability: operations.GetVideoLicenseListDownloadAvailabilityEnumAll.ToPointer(),
        EndDate: types.MustTimeFromString("2022-11-29T11:06:49.831Z"),
        License: sdk.String("non"),
        Page: sdk.Int64(913284),
        PerPage: sdk.Int64(324052),
        Sort: operations.GetVideoLicenseListSortEnumNewest.ToPointer(),
        StartDate: types.MustTimeFromString("2021-04-30T00:05:27.455Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Carroll40"),
        VideoID: sdk.String("laudantium"),
    }, operations.GetVideoLicenseListSecurity{
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

## GetVideoList

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

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
    res, err := s.Videos.GetVideoList(ctx, operations.GetVideoListRequest{
        ID: []string{
            "dolor",
            "aliquid",
            "consectetur",
        },
        SearchID: sdk.String("cumque"),
        View: operations.GetVideoListViewEnumFull.ToPointer(),
    }, operations.GetVideoListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoDataList != nil {
        // handle response
    }
}
```

## GetVideoSuggestions

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
    res, err := s.Videos.GetVideoSuggestions(ctx, operations.GetVideoSuggestionsRequest{
        Limit: sdk.Int64(527715),
        Query: "ducimus",
    }, operations.GetVideoSuggestionsSecurity{
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

## LicenseVideos

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

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
    res, err := s.Videos.LicenseVideos(ctx, operations.LicenseVideosRequest{
        LicenseVideoRequest: shared.LicenseVideoRequest{
            Videos: []shared.LicenseVideo{
                shared.LicenseVideo{
                    AuthCookie: &shared.Cookie{
                        Name: "Eddie Labadie",
                        Value: "voluptatum",
                    },
                    EditorialAcknowledgement: sdk.Bool(false),
                    Metadata: map[string]interface{}{
                        "rerum": "veritatis",
                    },
                    Price: sdk.Float64(9492.8),
                    SearchID: sdk.String("autem"),
                    ShowModal: sdk.Bool(false),
                    Size: shared.LicenseVideoSizeEnumHd.ToPointer(),
                    SubscriptionID: sdk.String("totam"),
                    VideoID: "porro",
                },
            },
        },
        SearchID: sdk.String("deserunt"),
        Size: operations.LicenseVideosSizeEnumWeb.ToPointer(),
        SubscriptionID: sdk.String("nihil"),
    }, operations.LicenseVideosSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseVideoResultDataList != nil {
        // handle response
    }
}
```

## ListVideoCategories

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

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
    res, err := s.Videos.ListVideoCategories(ctx, operations.ListVideoCategoriesRequest{
        Language: shared.LanguageEnumCs.ToPointer(),
    }, operations.ListVideoCategoriesSecurity{
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

## RenameVideoCollection

This endpoint sets a new name for a collection.

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
    res, err := s.Videos.RenameVideoCollection(ctx, operations.RenameVideoCollectionRequest{
        CollectionUpdateRequest: shared.CollectionUpdateRequest{
            Name: "Miss Madeline Jerde II",
        },
        ID: "c495cc69-9171-4b51-81bd-b1cf4b888ebd",
    }, operations.RenameVideoCollectionSecurity{
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

## SearchVideos

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

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
    res, err := s.Videos.SearchVideos(ctx, operations.SearchVideosRequest{
        AddedDate: types.MustDateFromString("2020-09-03"),
        AddedDateEnd: types.MustDateFromString("2022-03-15"),
        AddedDateStart: types.MustDateFromString("2020-08-28"),
        AspectRatio: operations.SearchVideosAspectRatioEnumNonstandard.ToPointer(),
        Category: sdk.String("excepturi"),
        Contributor: []string{
            "libero",
            "quo",
            "esse",
        },
        ContributorCountry: []string{
            "maxime",
            "accusantium",
            "soluta",
            "fugit",
        },
        Duration: sdk.Int64(866292),
        DurationFrom: sdk.Int64(756287),
        DurationTo: sdk.Int64(927490),
        Fps: sdk.Float64(837.91),
        FpsFrom: sdk.Float64(136.37),
        FpsTo: sdk.Float64(5161.24),
        KeywordSafeSearch: sdk.Bool(false),
        Language: shared.LanguageEnumCs.ToPointer(),
        License: []SearchVideosLicenseEnum{
            operations.SearchVideosLicenseEnumCommercial,
            operations.SearchVideosLicenseEnumEditorial,
        },
        Model: []string{
            "magni",
            "rerum",
        },
        Page: sdk.Int64(39222),
        PeopleAge: operations.SearchVideosPeopleAgeEnumInfants.ToPointer(),
        PeopleEthnicity: []SearchVideosPeopleEthnicityEnum{
            operations.SearchVideosPeopleEthnicityEnumSoutheastAsian,
            operations.SearchVideosPeopleEthnicityEnumEastAsian,
        },
        PeopleGender: operations.SearchVideosPeopleGenderEnumFemale.ToPointer(),
        PeopleModelReleased: sdk.Bool(false),
        PeopleNumber: sdk.Int64(531195),
        PerPage: sdk.Int64(502393),
        Query: sdk.String("nihil"),
        Resolution: operations.SearchVideosResolutionEnumStandardDefinition.ToPointer(),
        Safe: sdk.Bool(false),
        Sort: operations.SearchVideosSortEnumRelevance.ToPointer(),
        View: operations.SearchVideosViewEnumFull.ToPointer(),
    }, operations.SearchVideosSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoSearchResults != nil {
        // handle response
    }
}
```
