# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/symanto.net/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CommunicationRequest{
        RequestBody: []shared.Post{
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
            shared.Post{
                ID: "1",
                Language: "en",
                Text: "I love the service",
            },
        },
        All: false,
    }

    ctx := context.Background()
    res, err := s.TextAnalysis.Communication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### TextAnalysis

* `Communication` - Communication & Tonality
* `EkmanEmotion` - Emotion Analysis
* `Emotion` - Emotion Analysis
* `LanguageDetection` - Language Detection
* `Personality` - Personality Traits
* `Sentiment` - Sentiment Analysis
* `TopicSentiment` - Extracts topics and sentiments and relates them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
