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
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, operations.AdsensehostAccountsAdclientsGetRequest{
        AccountID: "corrupti",
        AdClientID: "provident",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UserIP: sdk.String("illum"),
    }, operations.AdsensehostAccountsAdclientsGetSecurity{
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


### [Accounts](docs/accounts/README.md)

* [AdsensehostAccountsAdclientsGet](docs/accounts/README.md#adsensehostaccountsadclientsget) - Get information about one of the ad clients in the specified publisher's AdSense account.
* [AdsensehostAccountsAdclientsList](docs/accounts/README.md#adsensehostaccountsadclientslist) - List all hosted ad clients in the specified hosted account.
* [AdsensehostAccountsAdunitsDelete](docs/accounts/README.md#adsensehostaccountsadunitsdelete) - Delete the specified ad unit from the specified publisher AdSense account.
* [AdsensehostAccountsAdunitsGet](docs/accounts/README.md#adsensehostaccountsadunitsget) - Get the specified host ad unit in this AdSense account.
* [AdsensehostAccountsAdunitsGetAdCode](docs/accounts/README.md#adsensehostaccountsadunitsgetadcode) - Get ad code for the specified ad unit, attaching the specified host custom channels.
* [AdsensehostAccountsAdunitsInsert](docs/accounts/README.md#adsensehostaccountsadunitsinsert) - Insert the supplied ad unit into the specified publisher AdSense account.
* [AdsensehostAccountsAdunitsList](docs/accounts/README.md#adsensehostaccountsadunitslist) - List all ad units in the specified publisher's AdSense account.
* [AdsensehostAccountsAdunitsPatch](docs/accounts/README.md#adsensehostaccountsadunitspatch) - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* [AdsensehostAccountsAdunitsUpdate](docs/accounts/README.md#adsensehostaccountsadunitsupdate) - Update the supplied ad unit in the specified publisher AdSense account.
* [AdsensehostAccountsGet](docs/accounts/README.md#adsensehostaccountsget) - Get information about the selected associated AdSense account.
* [AdsensehostAccountsList](docs/accounts/README.md#adsensehostaccountslist) - List hosted accounts associated with this AdSense account by ad client id.
* [AdsensehostAccountsReportsGenerate](docs/accounts/README.md#adsensehostaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### [Adclients](docs/adclients/README.md)

* [AdsensehostAdclientsGet](docs/adclients/README.md#adsensehostadclientsget) - Get information about one of the ad clients in the Host AdSense account.
* [AdsensehostAdclientsList](docs/adclients/README.md#adsensehostadclientslist) - List all host ad clients in this AdSense account.

### [Associationsessions](docs/associationsessions/README.md)

* [AdsensehostAssociationsessionsStart](docs/associationsessions/README.md#adsensehostassociationsessionsstart) - Create an association session for initiating an association with an AdSense user.
* [AdsensehostAssociationsessionsVerify](docs/associationsessions/README.md#adsensehostassociationsessionsverify) - Verify an association session after the association callback returns from AdSense signup.

### [Customchannels](docs/customchannels/README.md)

* [AdsensehostCustomchannelsDelete](docs/customchannels/README.md#adsensehostcustomchannelsdelete) - Delete a specific custom channel from the host AdSense account.
* [AdsensehostCustomchannelsGet](docs/customchannels/README.md#adsensehostcustomchannelsget) - Get a specific custom channel from the host AdSense account.
* [AdsensehostCustomchannelsInsert](docs/customchannels/README.md#adsensehostcustomchannelsinsert) - Add a new custom channel to the host AdSense account.
* [AdsensehostCustomchannelsList](docs/customchannels/README.md#adsensehostcustomchannelslist) - List all host custom channels in this AdSense account.
* [AdsensehostCustomchannelsPatch](docs/customchannels/README.md#adsensehostcustomchannelspatch) - Update a custom channel in the host AdSense account. This method supports patch semantics.
* [AdsensehostCustomchannelsUpdate](docs/customchannels/README.md#adsensehostcustomchannelsupdate) - Update a custom channel in the host AdSense account.

### [Reports](docs/reports/README.md)

* [AdsensehostReportsGenerate](docs/reports/README.md#adsensehostreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### [Urlchannels](docs/urlchannels/README.md)

* [AdsensehostUrlchannelsDelete](docs/urlchannels/README.md#adsensehosturlchannelsdelete) - Delete a URL channel from the host AdSense account.
* [AdsensehostUrlchannelsInsert](docs/urlchannels/README.md#adsensehosturlchannelsinsert) - Add a new URL channel to the host AdSense account.
* [AdsensehostUrlchannelsList](docs/urlchannels/README.md#adsensehosturlchannelslist) - List all host URL channels in the host AdSense account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
