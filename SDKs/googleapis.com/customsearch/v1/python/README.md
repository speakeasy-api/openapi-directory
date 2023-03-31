# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/customsearch/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SearchCseListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    c2coff="quibusdam",
    callback="unde",
    cr="nulla",
    cx="corrupti",
    date_restrict="illum",
    exact_terms="vel",
    exclude_terms="error",
    fields_="deserunt",
    file_type="suscipit",
    filter="iure",
    gl="magnam",
    googlehost="debitis",
    high_range="ipsa",
    hl="delectus",
    hq="tempora",
    img_color_type="mono",
    img_dominant_color="orange",
    img_size="XLARGE",
    img_type="photo",
    key="voluptatum",
    link_site="iusto",
    low_range="excepturi",
    lr="nisi",
    num=925597,
    oauth_token="temporibus",
    or_terms="ab",
    pretty_print=False,
    q="quis",
    quota_user="veritatis",
    related_site="deserunt",
    rights="perferendis",
    safe="active",
    search_type="image",
    site_search="sapiente",
    site_search_filter="i",
    sort="odit",
    start=870013,
    upload_type="at",
    upload_protocol="maiores",
)
    
res = s.cse.search_cse_list(req)

if res.search is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cse

* `search_cse_list` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* `search_cse_siterestrict_list` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
