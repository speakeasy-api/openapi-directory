# EditorialVideo

### Available Operations

* [GetEditorialVideo](#geteditorialvideo) - Get editorial video content details
* [GetEditorialVideoLicenseList](#geteditorialvideolicenselist) - List editorial video licenses
* [LicenseEditorialVideo](#licenseeditorialvideo) - License editorial video content
* [ListEditorialVideoCategories](#listeditorialvideocategories) - List editorial video categories
* [SearchEditorialVideos](#searcheditorialvideos) - Search editorial video content

## GetEditorialVideo

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

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
    res, err := s.EditorialVideo.GetEditorialVideo(ctx, operations.GetEditorialVideoRequest{
        Country: "dolor",
        ID: "01042181-3d52-408e-8e7e-253b668451c6",
        SearchID: sdk.String("nobis"),
    }, operations.GetEditorialVideoSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialVideoContent != nil {
        // handle response
    }
}
```

## GetEditorialVideoLicenseList

This endpoint lists existing editorial video licenses.

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
    res, err := s.EditorialVideo.GetEditorialVideoLicenseList(ctx, operations.GetEditorialVideoLicenseListRequest{
        DownloadAvailability: operations.GetEditorialVideoLicenseListDownloadAvailabilityEnumDownloadable.ToPointer(),
        EndDate: types.MustTimeFromString("2022-07-09T08:51:26.881Z"),
        License: sdk.String("voluptatem"),
        Page: sdk.Int64(350207),
        PerPage: sdk.Int64(895692),
        Sort: operations.GetEditorialVideoLicenseListSortEnumNewest.ToPointer(),
        StartDate: types.MustTimeFromString("2022-02-17T01:08:30.498Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Shaina.Orn98"),
        VideoID: sdk.String("repudiandae"),
    }, operations.GetEditorialVideoLicenseListSecurity{
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

## LicenseEditorialVideo

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

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
    res, err := s.EditorialVideo.LicenseEditorialVideo(ctx, shared.LicenseEditorialVideoContentRequest{
        Country: shared.ISOCountryCode{},
        Editorial: []shared.LicenseEditorialVideoContent{
            shared.LicenseEditorialVideoContent{
                EditorialID: "occaecati",
                License: shared.LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMedia,
                Metadata: map[string]interface{}{
                    "blanditiis": "officia",
                    "voluptas": "numquam",
                },
                Size: shared.LicenseEditorialVideoContentSizeEnumOriginal.ToPointer(),
            },
            shared.LicenseEditorialVideoContent{
                EditorialID: "nemo",
                License: shared.LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMediaSingleTerritory,
                Metadata: map[string]interface{}{
                    "aspernatur": "ducimus",
                    "nesciunt": "fuga",
                },
                Size: shared.LicenseEditorialVideoContentSizeEnumOriginal.ToPointer(),
            },
            shared.LicenseEditorialVideoContent{
                EditorialID: "laudantium",
                License: shared.LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMedia,
                Metadata: map[string]interface{}{
                    "rem": "fugiat",
                },
                Size: shared.LicenseEditorialVideoContentSizeEnumOriginal.ToPointer(),
            },
            shared.LicenseEditorialVideoContent{
                EditorialID: "dicta",
                License: shared.LicenseEditorialVideoContentLicenseEnumPremierEditorialVideoAllMedia,
                Metadata: map[string]interface{}{
                    "consectetur": "aperiam",
                },
                Size: shared.LicenseEditorialVideoContentSizeEnumOriginal.ToPointer(),
            },
        },
    }, operations.LicenseEditorialVideoSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseEditorialContentResults != nil {
        // handle response
    }
}
```

## ListEditorialVideoCategories

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

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
    res, err := s.EditorialVideo.ListEditorialVideoCategories(ctx, operations.ListEditorialVideoCategoriesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialVideoCategoryResults != nil {
        // handle response
    }
}
```

## SearchEditorialVideos

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

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
    res, err := s.EditorialVideo.SearchEditorialVideos(ctx, operations.SearchEditorialVideosRequest{
        Category: sdk.String("cupiditate"),
        Country: "reiciendis",
        Cursor: sdk.String("soluta"),
        DateEnd: types.MustDateFromString("2022-05-23"),
        DateStart: types.MustDateFromString("2022-06-03"),
        Fps: sdk.Float64(6128.67),
        PerPage: sdk.Int64(170099),
        Query: sdk.String("inventore"),
        Resolution: operations.SearchEditorialVideosResolutionEnumStandardDefinition.ToPointer(),
        Sort: operations.SearchEditorialVideosSortEnumOldest.ToPointer(),
        SupplierCode: []string{
            "distinctio",
            "omnis",
            "delectus",
            "minima",
        },
    }, operations.SearchEditorialVideosSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialVideoSearchResults != nil {
        // handle response
    }
}
```
