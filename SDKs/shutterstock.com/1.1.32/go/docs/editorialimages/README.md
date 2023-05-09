# EditorialImages

### Available Operations

* [~~GetEditorialCategories~~](#geteditorialcategories) - (Deprecated) List editorial categories :warning: **Deprecated**
* [GetEditorialImage](#geteditorialimage) - Get editorial content details
* [GetEditorialImageLicenseList](#geteditorialimagelicenselist) - List editorial image licenses
* [GetEditorialImageLivefeed](#geteditorialimagelivefeed) - Get editorial livefeed
* [GetEditorialImageLivefeedItems](#geteditorialimagelivefeeditems) - Get editorial livefeed items
* [GetEditorialImageLivefeedList](#geteditorialimagelivefeedlist) - Get editorial livefeed list
* [~~GetEditorialLivefeed~~](#geteditoriallivefeed) - (Deprecated) Get editorial livefeed :warning: **Deprecated**
* [~~GetEditorialLivefeedItems~~](#geteditoriallivefeeditems) - (Deprecated) Get editorial livefeed items :warning: **Deprecated**
* [~~GetEditorialLivefeedList~~](#geteditoriallivefeedlist) - (Deprecated) Get editorial livefeed list :warning: **Deprecated**
* [~~GetUpdatedEditorialImage~~](#getupdatededitorialimage) - (Deprecated) List updated content :warning: **Deprecated**
* [GetUpdatedEditorialImages](#getupdatededitorialimages) - List updated content
* [~~GetV2EditorialID~~](#getv2editorialid) - (Deprecated) Get editorial content details :warning: **Deprecated**
* [~~LicenseEditorialImage~~](#licenseeditorialimage) - (Deprecated) License editorial content :warning: **Deprecated**
* [LicenseEditorialImages](#licenseeditorialimages) - License editorial content
* [ListEditorialImageCategories](#listeditorialimagecategories) - List editorial categories
* [~~SearchEditorial~~](#searcheditorial) - (Deprecated) Search editorial content :warning: **Deprecated**
* [SearchEditorialImages](#searcheditorialimages) - Search editorial images

## ~~GetEditorialCategories~~

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetEditorialCategories(ctx, operations.GetEditorialCategoriesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialCategoryResults != nil {
        // handle response
    }
}
```

## GetEditorialImage

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
    res, err := s.EditorialImages.GetEditorialImage(ctx, operations.GetEditorialImageRequest{
        Country: "fuga",
        ID: "8a50ce18-7f86-4bc1-b3d6-89eee9526f8d",
    }, operations.GetEditorialImageSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialContent != nil {
        // handle response
    }
}
```

## GetEditorialImageLicenseList

This endpoint lists existing editorial image licenses.

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
    res, err := s.EditorialImages.GetEditorialImageLicenseList(ctx, operations.GetEditorialImageLicenseListRequest{
        DownloadAvailability: operations.GetEditorialImageLicenseListDownloadAvailabilityEnumDownloadable.ToPointer(),
        EndDate: types.MustTimeFromString("2022-03-30T01:40:53.027Z"),
        ImageID: sdk.String("repudiandae"),
        License: sdk.String("atque"),
        Page: sdk.Int64(541381),
        PerPage: sdk.Int64(120919),
        Sort: operations.GetEditorialImageLicenseListSortEnumOldest.ToPointer(),
        StartDate: types.MustTimeFromString("2021-05-05T04:11:52.897Z"),
        TeamHistory: sdk.Bool(false),
        Username: sdk.String("Edmund91"),
    }, operations.GetEditorialImageLicenseListSecurity{
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

## GetEditorialImageLivefeed

Get editorial livefeed

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
    res, err := s.EditorialImages.GetEditorialImageLivefeed(ctx, operations.GetEditorialImageLivefeedRequest{
        Country: "dicta",
        ID: "012563f9-4e29-4e97-be92-2a57a15be3e0",
    }, operations.GetEditorialImageLivefeedSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialImageLivefeed != nil {
        // handle response
    }
}
```

## GetEditorialImageLivefeedItems

Get editorial livefeed items

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
    res, err := s.EditorialImages.GetEditorialImageLivefeedItems(ctx, operations.GetEditorialImageLivefeedItemsRequest{
        Country: "iure",
        ID: "0807e2b6-e3ab-4884-9f05-97a60ff2a54a",
    }, operations.GetEditorialImageLivefeedItemsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialImageContentDataList != nil {
        // handle response
    }
}
```

## GetEditorialImageLivefeedList

Get editorial livefeed list

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
    res, err := s.EditorialImages.GetEditorialImageLivefeedList(ctx, operations.GetEditorialImageLivefeedListRequest{
        Country: "nesciunt",
        Page: sdk.Int64(63207),
        PerPage: sdk.Int64(925703),
    }, operations.GetEditorialImageLivefeedListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialImageLivefeedList != nil {
        // handle response
    }
}
```

## ~~GetEditorialLivefeed~~

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetEditorialLivefeed(ctx, operations.GetEditorialLivefeedRequest{
        Country: "omnis",
        ID: "4764a3e8-65e7-4956-b925-1a5a9da660ff",
    }, operations.GetEditorialLivefeedSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialLivefeed != nil {
        // handle response
    }
}
```

## ~~GetEditorialLivefeedItems~~

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetEditorialLivefeedItems(ctx, operations.GetEditorialLivefeedItemsRequest{
        Country: "ullam",
        ID: "7bfaad4f-9efc-41b4-912c-1032648dc2f6",
    }, operations.GetEditorialLivefeedItemsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialContentDataList != nil {
        // handle response
    }
}
```

## ~~GetEditorialLivefeedList~~

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetEditorialLivefeedList(ctx, operations.GetEditorialLivefeedListRequest{
        Country: "dicta",
        Page: sdk.Int64(325118),
        PerPage: sdk.Int64(107004),
    }, operations.GetEditorialLivefeedListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialLivefeedList != nil {
        // handle response
    }
}
```

## ~~GetUpdatedEditorialImage~~

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetUpdatedEditorialImage(ctx, operations.GetUpdatedEditorialImageRequest{
        Country: "cupiditate",
        Cursor: sdk.String("provident"),
        DateTakenEnd: types.MustDateFromString("2020-10-06"),
        DateTakenStart: types.MustDateFromString("2020-06-16"),
        DateUpdatedEnd: types.MustTimeFromString("2022-01-24T10:06:39.484Z"),
        DateUpdatedStart: types.MustTimeFromString("2021-01-13T02:22:20.450Z"),
        PerPage: sdk.Int64(891801),
        Sort: operations.GetUpdatedEditorialImageSortEnumNewest.ToPointer(),
        SupplierCode: []string{
            "suscipit",
            "dolorem",
            "fugit",
            "cumque",
        },
        Type: operations.GetUpdatedEditorialImageTypeEnumAddition,
    }, operations.GetUpdatedEditorialImageSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialUpdatedResults != nil {
        // handle response
    }
}
```

## GetUpdatedEditorialImages

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

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
    res, err := s.EditorialImages.GetUpdatedEditorialImages(ctx, operations.GetUpdatedEditorialImagesRequest{
        Country: "ratione",
        Cursor: sdk.String("animi"),
        DateTakenEnd: types.MustDateFromString("2020-06-01"),
        DateTakenStart: types.MustDateFromString("2022-11-26"),
        DateUpdatedEnd: types.MustTimeFromString("2022-07-03T07:28:27.049Z"),
        DateUpdatedStart: types.MustTimeFromString("2021-11-02T19:26:40.219Z"),
        PerPage: sdk.Int64(382440),
        Sort: operations.GetUpdatedEditorialImagesSortEnumNewest.ToPointer(),
        SupplierCode: []string{
            "magni",
        },
        Type: operations.GetUpdatedEditorialImagesTypeEnumAddition,
    }, operations.GetUpdatedEditorialImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialUpdatedResults != nil {
        // handle response
    }
}
```

## ~~GetV2EditorialID~~

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.GetV2EditorialID(ctx, operations.GetV2EditorialIDRequest{
        Country: "nulla",
        ID: "e0477177-8ff6-41d0-9747-6360a15db6a6",
        SearchID: sdk.String("aliquid"),
    }, operations.GetV2EditorialIDSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialContent != nil {
        // handle response
    }
}
```

## ~~LicenseEditorialImage~~

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.LicenseEditorialImage(ctx, shared.LicenseEditorialContentRequest{
        Country: shared.ISOCountryCode{},
        Editorial: []shared.LicenseEditorialContent{
            shared.LicenseEditorialContent{
                EditorialID: "eum",
                License: "voluptas",
                Metadata: map[string]interface{}{
                    "id": "ab",
                    "error": "possimus",
                    "voluptates": "mollitia",
                },
                Size: shared.LicenseEditorialContentSizeEnumOriginal.ToPointer(),
            },
        },
    }, operations.LicenseEditorialImageSecurity{
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

## LicenseEditorialImages

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

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
    res, err := s.EditorialImages.LicenseEditorialImages(ctx, shared.LicenseEditorialContentRequest{
        Country: shared.ISOCountryCode{},
        Editorial: []shared.LicenseEditorialContent{
            shared.LicenseEditorialContent{
                EditorialID: "ad",
                License: "deleniti",
                Metadata: map[string]interface{}{
                    "vitae": "repellendus",
                    "ex": "quo",
                },
                Size: shared.LicenseEditorialContentSizeEnumMedium.ToPointer(),
            },
            shared.LicenseEditorialContent{
                EditorialID: "ut",
                License: "ad",
                Metadata: map[string]interface{}{
                    "voluptatem": "molestias",
                    "cum": "aliquid",
                    "beatae": "voluptatum",
                },
                Size: shared.LicenseEditorialContentSizeEnumMedium.ToPointer(),
            },
            shared.LicenseEditorialContent{
                EditorialID: "veritatis",
                License: "rerum",
                Metadata: map[string]interface{}{
                    "culpa": "voluptatem",
                    "sapiente": "officiis",
                    "architecto": "fuga",
                },
                Size: shared.LicenseEditorialContentSizeEnumOriginal.ToPointer(),
            },
        },
    }, operations.LicenseEditorialImagesSecurity{
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

## ListEditorialImageCategories

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

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
    res, err := s.EditorialImages.ListEditorialImageCategories(ctx, operations.ListEditorialImageCategoriesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialImageCategoryResults != nil {
        // handle response
    }
}
```

## ~~SearchEditorial~~

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.EditorialImages.SearchEditorial(ctx, operations.SearchEditorialRequest{
        Category: sdk.String("debitis"),
        Country: "voluptatem",
        Cursor: sdk.String("alias"),
        DateEnd: types.MustDateFromString("2021-02-15"),
        DateStart: types.MustDateFromString("2022-01-16"),
        PerPage: sdk.Int64(524184),
        Query: sdk.String("minus"),
        Sort: operations.SearchEditorialSortEnumNewest.ToPointer(),
        SupplierCode: []string{
            "ratione",
            "ullam",
            "perferendis",
            "illum",
        },
    }, operations.SearchEditorialSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialSearchResults != nil {
        // handle response
    }
}
```

## SearchEditorialImages

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

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
    res, err := s.EditorialImages.SearchEditorialImages(ctx, operations.SearchEditorialImagesRequest{
        Category: sdk.String("totam"),
        Country: "impedit",
        Cursor: sdk.String("quibusdam"),
        DateEnd: types.MustDateFromString("2022-04-03"),
        DateStart: types.MustDateFromString("2022-07-22"),
        PerPage: sdk.Int64(307376),
        Query: sdk.String("inventore"),
        Sort: operations.SearchEditorialImagesSortEnumNewest.ToPointer(),
        SupplierCode: []string{
            "tempora",
        },
    }, operations.SearchEditorialImagesSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditorialSearchResults != nil {
        // handle response
    }
}
```
