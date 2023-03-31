# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/discovery/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DiscoveryApisGetRestRequest(
    alt="json",
    api="corrupti",
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
    version="corrupti",
)
    
res = s.apis.discovery_apis_get_rest(req)

if res.rest_description is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apis

* `discovery_apis_get_rest` - Retrieve the description of a particular version of an api.
* `discovery_apis_list` - Retrieve the list of APIs supported at this endpoint.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
