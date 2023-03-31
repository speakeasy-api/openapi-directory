# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/gov.bc.ca/gwells/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)


req = operations.AquiferCodesDemandListRequest(
    limit=548814,
    offset=592845,
)
    
res = s.aquifer_codes.aquifer_codes_demand_list(req)

if res.aquifer_codes_demand_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### aquifer_codes

* `aquifer_codes_demand_list` - return a list of aquifer demand codes
* `aquifer_codes_materials_list` - return a list of aquifer material codes
* `aquifer_codes_productivity_list` - return a list of aquifer productivity codes
* `aquifer_codes_quality_concerns_list` - return a list of quality concern codes
* `aquifer_codes_subtypes_list` - return a list of aquifer subtype codes
* `aquifer_codes_vulnerability_list` - return a list of aquifer vulnerability codes
* `aquifer_codes_water_use_list` - return a list of water use codes

### aquifers

* `aquifers_files_list` - list files found for the aquifer identified in the uri
* `aquifers_list` - return a list of aquifers
* `aquifers_names_list` - List all aquifers in a simplified format
* `aquifers_read` - return details of aquifers

### cities

* `cities_drillers_list` - returns a list of cities with a qualified, registered operator (driller or installer)
* `cities_installers_list` - returns a list of cities with a qualified, registered operator (driller or installer)

### config

* `config_list` - serves general configuration

### drillers

* `drillers_files_list` - list files found for the aquifer identified in the uri
* `drillers_list` - Returns a list of all person records
* `drillers_names_list` - Search for a person in the Register

### keycloak

* `keycloak_list` - serves keycloak config

### submissions

* `submissions_options_list` - Options required for submitting activity report forms

### surveys

* `surveys_list` - returns a list of active surveys

### wells

* `wells_files_list` - list files found for the well identified in the uri
* `wells_list` - returns a list of wells
* `wells_read` - Return well detail.
This view is open to all, and has no permissions.
* `wells_tags_list` - seach for wells by tag or owner
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
