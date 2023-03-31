# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/va.gov/facilities/0.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllFacilitiesRequest(
    accept="application/vnd.geo+json",
)
    
res = s.facilities.get_all_facilities(req, operations.GetAllFacilitiesSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.geo_facilities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### facilities

* `get_all_facilities` - Bulk download information for all facilities
* `get_facilities_by_location` - Query facilities by location or IDs, with optional filters
* `get_facility_by_id` - Retrieve a specific facility by ID
* `get_facility_ids` - Bulk download of all facility IDs
* `get_nearby_facilities` - Retrieve all VA health facilities reachable by driving within the specified time period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
