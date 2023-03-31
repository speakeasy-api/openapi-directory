# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ideal-postcodes.co.uk/3.7.0/go
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

    req := operations.AddressAutocompleteRequest{
        APIKey: "ak_test",
        BiasCountry: "corrupti",
        BiasIP: "true",
        BiasLonlat: "-2.095,57.15,100",
        BiasPostTown: "provident",
        BiasPostcode: "/addresses?postcode=SW1A2AA&q=10",
        BiasPostcodeArea: "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
        BiasPostcodeOutward: "distinctio",
        BiasPostcodeSector: "SW1A 2AA is SW1A 2",
        BiasThoroughfare: "quibusdam",
        Box: "2.095,57.15,-2.096,57.14",
        Context: "unde",
        Country: "England",
        Limit: 5,
        PostTown: "London",
        Postcode: "SW1A 2AA",
        PostcodeArea: "SW",
        PostcodeOutward: "1AA",
        PostcodeSector: "SW1A 2",
        PostcodeType: "L",
        Query: "nulla",
        SuOrganisationIndicator: "Y",
        Uprn: 100023336956,
    }

    ctx := context.Background()
    res, err := s.AddressSearch.AddressAutocomplete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutocompleteResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AddressSearch

* `AddressAutocomplete` - Find Address
* `Resolve` - Resolve Address (GBR)
* `ResolveUsa` - Resolve Address (USA)

### Configs

* `CreateConfig` - Create
* `DeleteConfig` - Delete
* `ListConfigs` - List
* `RetrieveConfig` - Retrieve
* `UpdateConfig` - Update

### Emails

* `EmailValidation` - Email Validation

### Keys

* `KeyAvailability` - Availability
* `KeyDetails` - Details
* `KeyLogs` - Logs (CSV)
* `KeyUsage` - Usage Stats

### Licensees

* `CreateLicensee` - Create
* `DeleteLicensee` - Cancel
* `ListLicensees` - List
* `RetrieveLicensee` - Retrieve
* `UpdateLicensee` - Update

### PhoneNumbers

* `PhoneNumberValidation` - Phone Number Validation

### PlaceSearch

* `FindPlace` - Find Place
* `ResolvePlace` - Resolve Place

### Uk

* `AddressCleanse` - Cleanse
* `Addresses` - Extract Addresses
* `Postcodes` - Lookup Postcode
* `Udprn` - Retrieve by UDPRN
* `Umprn` - Retrieve by UMPRN
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
