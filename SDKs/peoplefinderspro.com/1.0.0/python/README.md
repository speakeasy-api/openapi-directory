# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/peoplefinderspro.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SearchRequest(
    request_body=operations.SearchRequestBody(
        address=operations.SearchRequestBodyAddress(
            address_line1="corrupti",
            address_line2="provident",
        ),
        age=7151.9,
        dob="quibusdam",
        email="Ryan.Little62@yahoo.com",
        first_name="Luna",
        last_name="Hoppe",
        middle_name="iure",
        phone_number="magnam",
    ),
    galaxy_ap_name="debitis",
    galaxy_ap_password="ipsa",
    galaxy_search_type="delectus",
)
    
res = s.search(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `search` - Search
* `post_address_autocomplete` - Search
* `post_contact_enrich` - Search
* `post_email_enrich` - Search
* `post_phone_enrich` - Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
