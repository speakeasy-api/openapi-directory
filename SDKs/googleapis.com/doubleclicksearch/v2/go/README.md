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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DoubleclicksearchConversionGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AdGroupID: "distinctio",
        AdID: "quibusdam",
        AdvertiserID: "unde",
        AgencyID: "nulla",
        Alt: "media",
        Callback: "illum",
        CampaignID: "vel",
        CriterionID: "error",
        CustomerID: "deserunt",
        EndDate: 384382,
        EngineAccountID: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        RowCount: 272656,
        StartDate: 383441,
        StartRow: 477665,
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Conversion.DoubleclicksearchConversionGet(ctx, req, operations.DoubleclicksearchConversionGetSecurity{
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


### Conversion

* `DoubleclicksearchConversionGet` - Retrieves a list of conversions from a DoubleClick Search engine account.
* `DoubleclicksearchConversionGetByCustomerID` - Retrieves a list of conversions from a DoubleClick Search engine account.
* `DoubleclicksearchConversionInsert` - Inserts a batch of new conversions into DoubleClick Search.
* `DoubleclicksearchConversionUpdate` - Updates a batch of conversions in DoubleClick Search.
* `DoubleclicksearchConversionUpdateAvailability` - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### Reports

* `DoubleclicksearchReportsGenerate` - Generates and returns a report immediately.
* `DoubleclicksearchReportsGet` - Polls for the status of a report request.
* `DoubleclicksearchReportsGetFile` - Downloads a report file encoded in UTF-8.
* `DoubleclicksearchReportsGetIDMappingFile` - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* `DoubleclicksearchReportsRequest` - Inserts a report request into the reporting system.

### SavedColumns

* `DoubleclicksearchSavedColumnsList` - Retrieve the list of saved columns for a specified advertiser.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
