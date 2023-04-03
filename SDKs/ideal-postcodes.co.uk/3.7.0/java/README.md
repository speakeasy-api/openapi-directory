# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddressAutocompleteRequest;
import org.openapis.openapi.models.operations.AddressAutocompleteResponse;
import org.openapis.openapi.models.shared.BiasIpParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddressAutocompleteRequest req = new AddressAutocompleteRequest() {{
                apiKey = "ak_test";
                biasCountry = "corrupti";
                biasIp = "true";
                biasLonlat = "-2.095,57.15,100";
                biasPostTown = "provident";
                biasPostcode = "/addresses?postcode=SW1A2AA&q=10";
                biasPostcodeArea = "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively";
                biasPostcodeOutward = "distinctio";
                biasPostcodeSector = "SW1A 2AA is SW1A 2";
                biasThoroughfare = "quibusdam";
                box = "2.095,57.15,-2.096,57.14";
                context = "unde";
                country = "England";
                limit = 5;
                postTown = "London";
                postcode = "SW1A 2AA";
                postcodeArea = "SW";
                postcodeOutward = "1AA";
                postcodeSector = "SW1A 2";
                postcodeType = "L";
                query = "nulla";
                suOrganisationIndicator = "Y";
                uprn = 100023336956;
            }}            

            AddressAutocompleteResponse res = sdk.addressSearch.addressAutocomplete(req);

            if (res.autocompleteResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addressSearch

* `addressAutocomplete` - Find Address
* `resolve` - Resolve Address (GBR)
* `resolveUsa` - Resolve Address (USA)

### configs

* `createConfig` - Create
* `deleteConfig` - Delete
* `listConfigs` - List
* `retrieveConfig` - Retrieve
* `updateConfig` - Update

### emails

* `emailValidation` - Email Validation

### keys

* `keyAvailability` - Availability
* `keyDetails` - Details
* `keyLogs` - Logs (CSV)
* `keyUsage` - Usage Stats

### licensees

* `createLicensee` - Create
* `deleteLicensee` - Cancel
* `listLicensees` - List
* `retrieveLicensee` - Retrieve
* `updateLicensee` - Update

### phoneNumbers

* `phoneNumberValidation` - Phone Number Validation

### placeSearch

* `findPlace` - Find Place
* `resolvePlace` - Resolve Place

### uk

* `addressCleanse` - Cleanse
* `addresses` - Extract Addresses
* `postcodes` - Lookup Postcode
* `udprn` - Retrieve by UDPRN
* `umprn` - Retrieve by UMPRN
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
