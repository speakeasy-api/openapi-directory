# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hubapi.com/cms/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCmsV3DomainsGetPageRequest(
    after="corrupti",
    archived=False,
    created_after="2021-07-27T21:52:56.087Z",
    created_at="2021-03-11T23:22:42.658Z",
    created_before="2021-05-14T08:28:11.899Z",
    limit=847252,
    sort=[
        "error",
        "deserunt",
    ],
    updated_after="2022-07-25T06:44:09.184Z",
    updated_at="2022-02-09T12:04:06.508Z",
    updated_before="2022-01-14T06:18:51.036Z",
)
    
res = s.domains.get_cms_v3_domains_get_page(req, operations.GetCmsV3DomainsGetPageSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.collection_response_with_total_domain_forward_paging is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domains

* `get_cms_v3_domains_get_page` - Get current domains
* `get_cms_v3_domains_domain_id_get_by_id` - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
