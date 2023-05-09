# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/parliament.uk/oralquestions/v1/go
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
    res, err := s.EarlyDayMotions.PublishedEarlyDayMotionGet(ctx, operations.PublishedEarlyDayMotionGetRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [EarlyDayMotions](docs/earlydaymotions/README.md)

* [PublishedEarlyDayMotionGet](docs/earlydaymotions/README.md#publishedearlydaymotionget) - Returns a single Early Day Motion by ID
* [GetEarlyDayMotionsList](docs/earlydaymotions/README.md#getearlydaymotionslist) - Returns a list of Early Day Motions

### [OralQuestionTimes](docs/oralquestiontimes/README.md)

* [PublishedOralQuestionTimeGet](docs/oralquestiontimes/README.md#publishedoralquestiontimeget) - Returns a list of oral question times

### [OralQuestions](docs/oralquestions/README.md)

* [PublishedOralQuestionGet](docs/oralquestions/README.md#publishedoralquestionget) - Returns a list of oral questions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
