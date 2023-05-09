# ComputerVision

### Available Operations

* [GetKeywords](#getkeywords) - List suggested keywords
* [GetSimilarImages](#getsimilarimages) - List similar images
* [GetSimilarVideos](#getsimilarvideos) - List similar videos
* [~~UploadEphemeralImage~~](#uploadephemeralimage) - Upload ephemeral images :warning: **Deprecated**
* [UploadImage](#uploadimage) - Upload images

## GetKeywords

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

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
    res, err := s.ComputerVision.GetKeywords(ctx, operations.GetKeywordsRequest{
        AssetID: "esse",
    }, operations.GetKeywordsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordDataList != nil {
        // handle response
    }
}
```

## GetSimilarImages

This endpoint returns images that are visually similar to an image that you specify or upload.

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
    res, err := s.ComputerVision.GetSimilarImages(ctx, operations.GetSimilarImagesRequest{
        AssetID: "eveniet",
        Language: shared.LanguageEnumCs.ToPointer(),
        License: []GetSimilarImagesLicenseEnum{
            operations.GetSimilarImagesLicenseEnumCommercial,
            operations.GetSimilarImagesLicenseEnumCommercial,
            operations.GetSimilarImagesLicenseEnumEditorial,
            operations.GetSimilarImagesLicenseEnumEditorial,
        },
        Page: sdk.Int64(877131),
        PerPage: sdk.Int64(399025),
        Safe: sdk.Bool(false),
        View: operations.GetSimilarImagesViewEnumMinimal.ToPointer(),
    }, operations.GetSimilarImagesSecurity{
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

## GetSimilarVideos

This endpoint returns videos that are visually similar to an image that you specify or upload.

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
    res, err := s.ComputerVision.GetSimilarVideos(ctx, operations.GetSimilarVideosRequest{
        AssetID: "saepe",
        Language: shared.LanguageEnumCs.ToPointer(),
        License: []GetSimilarVideosLicenseEnum{
            operations.GetSimilarVideosLicenseEnumEditorial,
            operations.GetSimilarVideosLicenseEnumCommercial,
        },
        Page: sdk.Int64(699622),
        PerPage: sdk.Int64(580197),
        Safe: sdk.Bool(false),
        View: operations.GetSimilarVideosViewEnumMinimal.ToPointer(),
    }, operations.GetSimilarVideosSecurity{
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

## ~~UploadEphemeralImage~~

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

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
    res, err := s.ComputerVision.UploadEphemeralImage(ctx, shared.ImageCreateRequest{
        Base64Image: "distinctio",
    }, operations.UploadEphemeralImageSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageCreateResponse != nil {
        // handle response
    }
}
```

## UploadImage

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

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
    res, err := s.ComputerVision.UploadImage(ctx, shared.ImageCreateRequest{
        Base64Image: "eligendi",
    }, operations.UploadImageSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputerVisionImageCreateResponse != nil {
        // handle response
    }
}
```
