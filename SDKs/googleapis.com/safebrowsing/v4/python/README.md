# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/safebrowsing/v4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SafebrowsingEncodedFullHashesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    client_id="unde",
    client_version="nulla",
    encoded_request="corrupti",
    fields_="illum",
    key="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.encoded_full_hashes.safebrowsing_encoded_full_hashes_get(req)

if res.google_security_safebrowsing_v4_find_full_hashes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### encoded_full_hashes

* `safebrowsing_encoded_full_hashes_get`

### encoded_updates

* `safebrowsing_encoded_updates_get`

### full_hashes

* `safebrowsing_full_hashes_find` - Finds the full hashes that match the requested hash prefixes.

### threat_hits

* `safebrowsing_threat_hits_create` - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### threat_list_updates

* `safebrowsing_threat_list_updates_fetch` - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### threat_lists

* `safebrowsing_threat_lists_list` - Lists the Safe Browsing threat lists available for download.

### threat_matches

* `safebrowsing_threat_matches_find` - Finds the threat entries that match the Safe Browsing lists.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
