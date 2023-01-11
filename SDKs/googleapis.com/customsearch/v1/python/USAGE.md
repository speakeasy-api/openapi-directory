<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SearchCseListRequest(
    query_params=operations.SearchCseListQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="json",
        c2coff="odio",
        callback="a",
        cr="sed",
        cx="molestias",
        date_restrict="quo",
        exact_terms="laboriosam",
        exclude_terms="facere",
        fields="dolorem",
        file_type="asperiores",
        filter="voluptatum",
        gl="minus",
        googlehost="dolorum",
        high_range="eligendi",
        hl="voluptates",
        hq="natus",
        img_color_type="imgColorTypeUndefined",
        img_dominant_color="green",
        img_size="LARGE",
        img_type="lineart",
        key="voluptates",
        link_site="dolores",
        low_range="magnam",
        lr="hic",
        num=1057078635996990971,
        oauth_token="deserunt",
        or_terms="ut",
        pretty_print=True,
        q="quisquam",
        quota_user="eos",
        related_site="provident",
        rights="unde",
        safe="off",
        search_type="image",
        site_search="possimus",
        site_search_filter="e",
        sort="qui",
        start=3231570155386035522,
        upload_type="dolore",
        upload_protocol="aut",
    ),
)
    
res = s.cse.search_cse_list(req)

if res.search is not None:
    # handle response
```
<!-- End SDK Example Usage -->