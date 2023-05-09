# SDK

## Overview

RiteKit API is based on REST principles.

Authentication uses standard OAuth 2.0 process

##Getting started

1. Sign up for [RiteKit](https://ritekit.com/)

1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)

1. Click "Create a token" button to get your **Client ID** and **Client secret**

1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)

## Options for authorizing API Calls

#### Using Client ID directly

You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.

GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a

### Available Operations

* [AnimateImage](#animateimage) - Animate Image
* [AutoEmojify](#autoemojify) - Auto-Emojify
* [AutoHashtag](#autohashtag) - Auto-Hashtag
* [CompanyLogo](#companylogo) - Company Logo
* [EmojiSuggestions](#emojisuggestions) - Emoji Suggestions
* [HashtagHistory](#hashtaghistory) - Hashtag History
* [HashtagStats](#hashtagstats) - Hashtag Stats
* [HashtagSuggestions](#hashtagsuggestions) - Hashtag Suggestions
* [HashtagsCleaner](#hashtagscleaner) - Hashtags cleaner
* [ListOfCTAs](#listofctas) - List of CTAs
* [ShortenLink](#shortenlink) - Shorten Link
* [TextToImage](#texttoimage) - Text to Image
* [TrendingHashtags](#trendinghashtags) - Trending Hashtags

## AnimateImage

Returns URL of an animated GIF.

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
    res, err := s.SDK.AnimateImage(ctx, operations.AnimateImageRequest{
        Type: "distinctio",
        URL: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoEmojify

Returns text of the post with emoji added

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
    res, err := s.SDK.AutoEmojify(ctx, operations.AutoEmojifyRequest{
        Text: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AutoHashtag

Returns auto-hashtagged text of the post.

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
    res, err := s.SDK.AutoHashtag(ctx, operations.AutoHashtagRequest{
        HashtagPosition: sdk.String("nulla"),
        MaxHashtags: sdk.Int64(544883),
        Post: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompanyLogo

Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.

Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.

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
    res, err := s.SDK.CompanyLogo(ctx, operations.CompanyLogoRequest{
        Domain: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EmojiSuggestions

Returns list of emoji suggestions for a given text of the post

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
    res, err := s.SDK.EmojiSuggestions(ctx, operations.EmojiSuggestionsRequest{
        Text: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HashtagHistory

Returns historical stats for a given hashtag from the last 30 days

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
    res, err := s.SDK.HashtagHistory(ctx, operations.HashtagHistoryRequest{
        Hashtag: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HashtagStats

Returns real-time stats for up to 100 hashtags (updated hourly).

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
    res, err := s.SDK.HashtagStats(ctx, operations.HashtagStatsRequest{
        Tags: []interface{}{
            "iure",
            "magnam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HashtagSuggestions

Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.

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
    res, err := s.SDK.HashtagSuggestions(ctx, operations.HashtagSuggestionsRequest{
        Text: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## HashtagsCleaner

Remove banned hashtags before posting to Instagram

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
    res, err := s.SDK.HashtagsCleaner(ctx, operations.HashtagsCleanerRequest{
        Post: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListOfCTAs

Returns list of available CTA for current user. Requires each user to authenticate with RiteKit

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListOfCTAs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ShortenLink

Returns a shorten link with a given CTA.

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
    res, err := s.SDK.ShortenLink(ctx, operations.ShortenLinkRequest{
        Cta: 963663,
        URL: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TextToImage

Returns URL of an image created from text according to given style parameters

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
    res, err := s.SDK.TextToImage(ctx, operations.TextToImageRequest{
        Animation: "suscipit",
        Author: "molestiae",
        AuthorFont: "minus",
        AuthorFontColor: "placeat",
        BackgroundColor: "voluptatum",
        BgType: "iusto",
        BrandLogo: "excepturi",
        EnableHighlight: 392785,
        FontSize: 925597,
        GradientColor1: "temporibus",
        GradientColor2: "ab",
        GradientType: "quis",
        HighlightColor: "veritatis",
        Quote: "deserunt",
        QuoteFont: "perferendis",
        QuoteFontColor: "ipsam",
        ShowQuoteMark: sdk.Int64(832620),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TrendingHashtags

Returns list of hashtags currently trending on Twitter

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
    res, err := s.SDK.TrendingHashtags(ctx, operations.TrendingHashtagsRequest{
        Green: sdk.Bool(false),
        Latin: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
