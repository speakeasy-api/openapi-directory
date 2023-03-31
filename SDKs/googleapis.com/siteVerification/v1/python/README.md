# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/siteVerification/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SiteVerificationWebResourceDeleteRequest(
    alt="json",
    fields_="corrupti",
    id="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
)
    
res = s.web_resource.site_verification_web_resource_delete(req, operations.SiteVerificationWebResourceDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### web_resource

* `site_verification_web_resource_delete` - Relinquish ownership of a website or domain.
* `site_verification_web_resource_get` - Get the most current data for a website or domain.
* `site_verification_web_resource_get_token` - Get a verification token for placing on a website or domain.
* `site_verification_web_resource_insert` - Attempt verification of a website or domain.
* `site_verification_web_resource_list` - Get the list of your verified websites and domains.
* `site_verification_web_resource_patch` - Modify the list of owners for your website or domain. This method supports patch semantics.
* `site_verification_web_resource_update` - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
