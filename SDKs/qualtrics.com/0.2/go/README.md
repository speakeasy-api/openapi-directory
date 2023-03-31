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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateContactInMailinglistRequest{
        CreateContactInMailingList: shared.CreateContactInMailingList{
            Email: "Larue_Rau85@yahoo.com",
            FirstName: "Karley",
            LastName: "Stamm",
            Unsubscribed: false,
        },
        DirectoryID: "vel",
        MailingListID: "error",
    }

    ctx := context.Background()
    res, err := s.CreateContactInMailinglist(ctx, req)
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

### SDK SDK

* `CreateContactInMailinglist` - Create contact in mailing list
* `GenerateDistributionLinks` - Generate distribution links
* `GetDistributions` - Get distributions for survey
* `GetEventSubscriptions` - Get event subscriptions
* `GetSurvey` - Get survey
* `Retrievedistributionlinks` - Retrieve distribution links
* `WebhookDelete` - Remove subscription to response event
* `WhenAResponseIsReceived` - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
