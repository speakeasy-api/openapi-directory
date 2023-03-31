# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/greip.io/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBulkLookupRequest(
    format="XML",
    ips="1.1.1.1,2.2.2.2",
    key="2517bc4fc3f790e8f09bc808bb63b899",
    lang="AR",
    params="currency",
)
    
res = s.get_bulk_lookup(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_bulk_lookup` - BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.
* `get_country` - Country endpoint: Returns the information of a specific country by passing the `countrCode`.
* `get_geo_ip` - GeoIP endpoint: Returns the geolocation data of the visitor.
* `get_ip_lookup` - IPLookup endpoint: Returns the geolocation data of a specific IP Address.
* `get_bad_words` - badWords endpoint: Detects whether user inputs contain profanity or not.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
