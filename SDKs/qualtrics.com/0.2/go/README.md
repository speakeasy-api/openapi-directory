# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/qualtrics.com/0.2/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateContactInMailinglist(ctx, operations.CreateContactInMailinglistRequest{
        CreateContactInMailingList: shared.CreateContactInMailingList{
            Email: sdk.String("Larue_Rau85@yahoo.com"),
            FirstName: sdk.String("Karley"),
            LastName: sdk.String("Stamm"),
            Unsubscribed: sdk.Bool(false),
        },
        DirectoryID: "vel",
        MailingListID: "error",
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

* [CreateContactInMailinglist](docs/sdk/README.md#createcontactinmailinglist) - Create contact in mailing list
* [GenerateDistributionLinks](docs/sdk/README.md#generatedistributionlinks) - Generate distribution links
* [GetDistributions](docs/sdk/README.md#getdistributions) - Get distributions for survey
* [GetEventSubscriptions](docs/sdk/README.md#geteventsubscriptions) - Get event subscriptions
* [GetSurvey](docs/sdk/README.md#getsurvey) - Get survey
* [Retrievedistributionlinks](docs/sdk/README.md#retrievedistributionlinks) - Retrieve distribution links
* [WebhookDelete](docs/sdk/README.md#webhookdelete) - Remove subscription to response event
* [WhenAResponseIsReceived](docs/sdk/README.md#whenaresponseisreceived) - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
