# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/adsensehost/v4.1/go
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

    req := operations.AdsensehostAccountsAdclientsGetRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: "json",
        Fields: "quibusdam",
        Key: "unde",
        OauthToken: "nulla",
        PrettyPrint: false,
        QuotaUser: "corrupti",
        UserIP: "illum",
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, req, operations.AdsensehostAccountsAdclientsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Accounts

* `AdsensehostAccountsAdclientsGet` - Get information about one of the ad clients in the specified publisher's AdSense account.
* `AdsensehostAccountsAdclientsList` - List all hosted ad clients in the specified hosted account.
* `AdsensehostAccountsAdunitsDelete` - Delete the specified ad unit from the specified publisher AdSense account.
* `AdsensehostAccountsAdunitsGet` - Get the specified host ad unit in this AdSense account.
* `AdsensehostAccountsAdunitsGetAdCode` - Get ad code for the specified ad unit, attaching the specified host custom channels.
* `AdsensehostAccountsAdunitsInsert` - Insert the supplied ad unit into the specified publisher AdSense account.
* `AdsensehostAccountsAdunitsList` - List all ad units in the specified publisher's AdSense account.
* `AdsensehostAccountsAdunitsPatch` - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* `AdsensehostAccountsAdunitsUpdate` - Update the supplied ad unit in the specified publisher AdSense account.
* `AdsensehostAccountsGet` - Get information about the selected associated AdSense account.
* `AdsensehostAccountsList` - List hosted accounts associated with this AdSense account by ad client id.
* `AdsensehostAccountsReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Adclients

* `AdsensehostAdclientsGet` - Get information about one of the ad clients in the Host AdSense account.
* `AdsensehostAdclientsList` - List all host ad clients in this AdSense account.

### Associationsessions

* `AdsensehostAssociationsessionsStart` - Create an association session for initiating an association with an AdSense user.
* `AdsensehostAssociationsessionsVerify` - Verify an association session after the association callback returns from AdSense signup.

### Customchannels

* `AdsensehostCustomchannelsDelete` - Delete a specific custom channel from the host AdSense account.
* `AdsensehostCustomchannelsGet` - Get a specific custom channel from the host AdSense account.
* `AdsensehostCustomchannelsInsert` - Add a new custom channel to the host AdSense account.
* `AdsensehostCustomchannelsList` - List all host custom channels in this AdSense account.
* `AdsensehostCustomchannelsPatch` - Update a custom channel in the host AdSense account. This method supports patch semantics.
* `AdsensehostCustomchannelsUpdate` - Update a custom channel in the host AdSense account.

### Reports

* `AdsensehostReportsGenerate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Urlchannels

* `AdsensehostUrlchannelsDelete` - Delete a URL channel from the host AdSense account.
* `AdsensehostUrlchannelsInsert` - Add a new URL channel to the host AdSense account.
* `AdsensehostUrlchannelsList` - List all host URL channels in the host AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
