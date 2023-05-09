# Media

## Overview

Information about media

### Available Operations

* [GetResourcesMediaJSON](#getresourcesmediajson) - Get MediaItems
* [GetResourcesMediaFeaturedJSON](#getresourcesmediafeaturedjson) - Get the list of featured content in the syndication system
* [GetResourcesMediaMostPopularMediaFormat](#getresourcesmediamostpopularmediaformat) - Get MediaItems by popularity
* [GetResourcesMediaSearchResultsJSON](#getresourcesmediasearchresultsjson) - Get MediaItems by search query
* [GetResourcesMediaIDJSON](#getresourcesmediaidjson) - Get MediaItem by ID
* [GetResourcesMediaIDContent](#getresourcesmediaidcontent) - Get content for MediaItem
* [GetResourcesMediaIDEmbedJSON](#getresourcesmediaidembedjson) - Get embed code for MediaItem
* [GetResourcesMediaIDPreviewJpg](#getresourcesmediaidpreviewjpg) - Get Tag by ID
* [GetResourcesMediaIDRelatedMediaFormat](#getresourcesmediaidrelatedmediaformat) - Get related MediaItems by ID
* [GetResourcesMediaIDSyndicateFormat](#getresourcesmediaidsyndicateformat) - Get syndicated content for MediaItem
* [GetResourcesMediaIDThumbnailJpg](#getresourcesmediaidthumbnailjpg) - Get JPG thumbnail for MediaItem
* [GetResourcesMediaIDYoutubeMetaDataJSON](#getresourcesmediaidyoutubemetadatajson) - Get Youtube metadata for MediaItem

## GetResourcesMediaJSON

Media Items Listings

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
    res, err := s.Media.GetResourcesMediaJSON(ctx, operations.GetResourcesMediaJSONRequest{
        CollectionID: sdk.Int(383441),
        ContentAuthoredBeforeDate: types.MustDateFromString("2022-03-18"),
        ContentAuthoredInRange: sdk.String("placeat"),
        ContentAuthoredSinceDate: types.MustDateFromString("2022-01-15"),
        ContentPublishedBeforeDate: types.MustDateFromString("2022-03-20"),
        ContentPublishedInRange: sdk.String("recusandae"),
        ContentPublishedSinceDate: types.MustDateFromString("2022-10-15"),
        ContentReviewedBeforeDate: types.MustDateFromString("2022-11-30"),
        ContentReviewedInRange: sdk.String("deserunt"),
        ContentReviewedSinceDate: types.MustDateFromString("2022-08-19"),
        ContentUpdatedBeforeDate: types.MustDateFromString("2020-02-17"),
        ContentUpdatedInRange: sdk.String("quo"),
        ContentUpdatedSinceDate: types.MustDateFromString("2022-02-17"),
        CreatedBy: sdk.String("at"),
        CustomThumbnailURL: sdk.String("maiores"),
        CustomThumbnailURLContains: sdk.String("molestiae"),
        DateContentAuthored: types.MustDateFromString("2020-08-07"),
        DateContentPublished: types.MustDateFromString("2022-06-25"),
        DateContentReviewed: types.MustDateFromString("2020-12-18"),
        DateContentUpdated: types.MustDateFromString("2022-04-12"),
        DateSyndicationCaptured: types.MustDateFromString("2021-11-02"),
        DateSyndicationUpdated: types.MustDateFromString("2022-06-18"),
        DescriptionContains: sdk.String("hic"),
        Hash: sdk.String("optio"),
        HashContains: sdk.String("totam"),
        LanguageID: sdk.Int64(105907),
        LanguageIsoCode: sdk.String("commodi"),
        LanguageName: sdk.String("molestiae"),
        Max: sdk.Int(264555),
        MediaTypes: sdk.String("qui"),
        Name: sdk.String("Jonathon Klocko"),
        NameContains: sdk.String("aspernatur"),
        Offset: sdk.Int(18789),
        Order: sdk.String("ad"),
        RestrictToSet: sdk.String("natus"),
        Sort: sdk.String("sed"),
        SourceAcronym: sdk.String("iste"),
        SourceAcronymContains: sdk.String("dolor"),
        SourceID: sdk.Int64(616934),
        SourceName: sdk.String("laboriosam"),
        SourceNameContains: sdk.String("hic"),
        SourceURL: sdk.String("saepe"),
        SourceURLContains: sdk.String("fuga"),
        SyndicationCapturedBeforeDate: types.MustDateFromString("2022-08-22"),
        SyndicationCapturedInRange: sdk.String("iste"),
        SyndicationCapturedSinceDate: types.MustDateFromString("2022-02-05"),
        SyndicationUpdatedBeforeDate: types.MustDateFromString("2022-10-20"),
        SyndicationUpdatedInRange: sdk.String("ipsa"),
        SyndicationUpdatedSinceDate: types.MustDateFromString("2020-12-31"),
        SyndicationVisibleBeforeDate: types.MustDateFromString("2021-08-29"),
        SyndicationVisibleInRange: types.MustDateFromString("2022-10-16"),
        SyndicationVisibleSinceDate: types.MustDateFromString("2022-11-14"),
        TagIds: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesMediaFeaturedJSON

Get the list of featured content in the syndication system

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
    res, err := s.Media.GetResourcesMediaFeaturedJSON(ctx, operations.GetResourcesMediaFeaturedJSONRequest{
        Max: sdk.Int(315428),
        Offset: sdk.Int(607831),
        Sort: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItems != nil {
        // handle response
    }
}
```

## GetResourcesMediaMostPopularMediaFormat

Get the media with the highest ratings.

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
    res, err := s.Media.GetResourcesMediaMostPopularMediaFormat(ctx, operations.GetResourcesMediaMostPopularMediaFormatRequest{
        Format: "minima",
        Max: sdk.Int(570197),
        Offset: sdk.Int(38425),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesMediaSearchResultsJSON

Full search

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
    res, err := s.Media.GetResourcesMediaSearchResultsJSON(ctx, operations.GetResourcesMediaSearchResultsJSONRequest{
        Max: sdk.Int(438601),
        Offset: sdk.Int(634274),
        Q: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDJSON

Information about a specific media item

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
    res, err := s.Media.GetResourcesMediaIDJSON(ctx, operations.GetResourcesMediaIDJSONRequest{
        ID: 958950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDContent

The actual media content (html, image, etc...)

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
    res, err := s.Media.GetResourcesMediaIDContent(ctx, operations.GetResourcesMediaIDContentRequest{
        CalledByBuild: sdk.Bool(false),
        ID: 102044,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesMediaIDContent200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDEmbedJSON

Get the javascript or iframe embed code for this item (to embed it on a web page).

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
    res, err := s.Media.GetResourcesMediaIDEmbedJSON(ctx, operations.GetResourcesMediaIDEmbedJSONRequest{
        DisplayMethod: sdk.String("mollitia"),
        DivID: sdk.String("dolorem"),
        ExcludeDiv: sdk.Bool(false),
        ExcludeJquery: sdk.Bool(false),
        Flavor: sdk.String("culpa"),
        Height: sdk.Int(161309),
        ID: 995300,
        IframeName: sdk.String("mollitia"),
        Width: sdk.Int(581850),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesMediaIDEmbedJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDPreviewJpg

Get the jpg preview of the content item where applicable.

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
    res, err := s.Media.GetResourcesMediaIDPreviewJpg(ctx, operations.GetResourcesMediaIDPreviewJpgRequest{
        ID: 253291,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesMediaIDPreviewJpg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDRelatedMediaFormat

Get the media related to the current media item.

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
    res, err := s.Media.GetResourcesMediaIDRelatedMediaFormat(ctx, operations.GetResourcesMediaIDRelatedMediaFormatRequest{
        Format: "commodi",
        ID: 466311,
        Max: sdk.Int(474697),
        Offset: sdk.Int(244425),
        Sort: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDSyndicateFormat

Get syndicated content.

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
    res, err := s.Media.GetResourcesMediaIDSyndicateFormat(ctx, operations.GetResourcesMediaIDSyndicateFormatRequest{
        Autoplay: sdk.Bool(false),
        CSSClass: sdk.String("quia"),
        FontSize: sdk.Int(338007),
        Format: "vitae",
        ID: 674752,
        ImageFloat: sdk.String("animi"),
        ImageMargin: sdk.String("enim"),
        Rel: sdk.Bool(false),
        StripBreaks: sdk.Bool(false),
        StripClasses: sdk.Bool(false),
        StripImages: sdk.Bool(false),
        StripScripts: sdk.Bool(false),
        StripStyles: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyndicateMarshallerWrapped != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDThumbnailJpg

Get the jpg thumbnail of the content item where applicable.

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
    res, err := s.Media.GetResourcesMediaIDThumbnailJpg(ctx, operations.GetResourcesMediaIDThumbnailJpgRequest{
        ID: 138183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesMediaIDThumbnailJpg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetResourcesMediaIDYoutubeMetaDataJSON

Youtube meta-data for a video item.

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
    res, err := s.Media.GetResourcesMediaIDYoutubeMetaDataJSON(ctx, operations.GetResourcesMediaIDYoutubeMetaDataJSONRequest{
        ID: 778346,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
