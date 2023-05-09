# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/doubleclicksearch/v2/go
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
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, operations.DoubleclicksearchConversionGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AdGroupID: sdk.String("distinctio"),
        AdID: sdk.String("quibusdam"),
        AdvertiserID: "unde",
        AgencyID: "nulla",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        CampaignID: sdk.String("vel"),
        CriterionID: sdk.String("error"),
        CustomerID: sdk.String("deserunt"),
        EndDate: 384382,
        EngineAccountID: "iure",
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        RowCount: 272656,
        StartDate: 383441,
        StartRow: 477665,
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DoubleclicksearchConversionGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Conversion](docs/conversion/README.md)

* [DoubleclicksearchConversionGet](docs/conversion/README.md#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [DoubleclicksearchConversionGetByCustomerID](docs/conversion/README.md#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [DoubleclicksearchConversionInsert](docs/conversion/README.md#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [DoubleclicksearchConversionUpdate](docs/conversion/README.md#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [DoubleclicksearchConversionUpdateAvailability](docs/conversion/README.md#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### [Reports](docs/reports/README.md)

* [DoubleclicksearchReportsGenerate](docs/reports/README.md#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [DoubleclicksearchReportsGet](docs/reports/README.md#doubleclicksearchreportsget) - Polls for the status of a report request.
* [DoubleclicksearchReportsGetFile](docs/reports/README.md#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [DoubleclicksearchReportsGetIDMappingFile](docs/reports/README.md#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [DoubleclicksearchReportsRequest](docs/reports/README.md#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

### [SavedColumns](docs/savedcolumns/README.md)

* [DoubleclicksearchSavedColumnsList](docs/savedcolumns/README.md#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
