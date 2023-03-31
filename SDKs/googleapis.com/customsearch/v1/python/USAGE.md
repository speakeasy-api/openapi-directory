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