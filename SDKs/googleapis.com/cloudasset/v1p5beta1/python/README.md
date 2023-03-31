# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudasset/v1p5beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetAssetsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    asset_types=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
    callback="vel",
    content_type="ORG_POLICY",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    page_size=297534,
    page_token="debitis",
    parent="ipsa",
    pretty_print=False,
    quota_user="delectus",
    read_time="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.assets.cloudasset_assets_list(req, operations.CloudassetAssetsListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### assets

* `cloudasset_assets_list` - Lists assets with time and resource types and returns paged results in response.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
