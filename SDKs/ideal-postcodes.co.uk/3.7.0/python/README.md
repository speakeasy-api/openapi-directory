# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ideal-postcodes.co.uk/3.7.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddressAutocompleteRequest(
    api_key="ak_test",
    bias_country="corrupti",
    bias_ip="true",
    bias_lonlat="-2.095,57.15,100",
    bias_post_town="provident",
    bias_postcode="/addresses?postcode=SW1A2AA&q=10",
    bias_postcode_area="The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
    bias_postcode_outward="distinctio",
    bias_postcode_sector="SW1A 2AA is SW1A 2",
    bias_thoroughfare="quibusdam",
    box="2.095,57.15,-2.096,57.14",
    context="unde",
    country="England",
    limit=5,
    post_town="London",
    postcode="SW1A 2AA",
    postcode_area="SW",
    postcode_outward="1AA",
    postcode_sector="SW1A 2",
    postcode_type="L",
    query="nulla",
    su_organisation_indicator="Y",
    uprn=100023336956,
)
    
res = s.address_search.address_autocomplete(req)

if res.autocomplete_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### address_search

* `address_autocomplete` - Find Address
* `resolve` - Resolve Address (GBR)
* `resolve_usa` - Resolve Address (USA)

### configs

* `create_config` - Create
* `delete_config` - Delete
* `list_configs` - List
* `retrieve_config` - Retrieve
* `update_config` - Update

### emails

* `email_validation` - Email Validation

### keys

* `key_availability` - Availability
* `key_details` - Details
* `key_logs` - Logs (CSV)
* `key_usage` - Usage Stats

### licensees

* `create_licensee` - Create
* `delete_licensee` - Cancel
* `list_licensees` - List
* `retrieve_licensee` - Retrieve
* `update_licensee` - Update

### phone_numbers

* `phone_number_validation` - Phone Number Validation

### place_search

* `find_place` - Find Place
* `resolve_place` - Resolve Place

### uk

* `address_cleanse` - Cleanse
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
