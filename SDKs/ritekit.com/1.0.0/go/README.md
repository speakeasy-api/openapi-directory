# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ritekit.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AnimateImage(ctx, operations.AnimateImageRequest{
        Type: "corrupti",
        URL: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AnimateImage](docs/sdk/README.md#animateimage) - Animate Image
* [AutoEmojify](docs/sdk/README.md#autoemojify) - Auto-Emojify
* [AutoHashtag](docs/sdk/README.md#autohashtag) - Auto-Hashtag
* [CompanyLogo](docs/sdk/README.md#companylogo) - Company Logo
* [EmojiSuggestions](docs/sdk/README.md#emojisuggestions) - Emoji Suggestions
* [HashtagHistory](docs/sdk/README.md#hashtaghistory) - Hashtag History
* [HashtagStats](docs/sdk/README.md#hashtagstats) - Hashtag Stats
* [HashtagSuggestions](docs/sdk/README.md#hashtagsuggestions) - Hashtag Suggestions
* [HashtagsCleaner](docs/sdk/README.md#hashtagscleaner) - Hashtags cleaner
* [ListOfCTAs](docs/sdk/README.md#listofctas) - List of CTAs
* [ShortenLink](docs/sdk/README.md#shortenlink) - Shorten Link
* [TextToImage](docs/sdk/README.md#texttoimage) - Text to Image
* [TrendingHashtags](docs/sdk/README.md#trendinghashtags) - Trending Hashtags
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
