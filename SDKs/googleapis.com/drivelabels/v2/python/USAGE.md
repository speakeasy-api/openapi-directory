<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DrivelabelsLabelsGetRequest(
    path_params=operations.DrivelabelsLabelsGetPathParams(
        name="aspernatur",
    ),
    query_params=operations.DrivelabelsLabelsGetQueryParams(
        dollar_xgafv="1",
        access_token="dolor",
        alt="media",
        callback="et",
        fields="a",
        key="quo",
        language_code="vero",
        oauth_token="dolorem",
        pretty_print=True,
        quota_user="placeat",
        upload_type="hic",
        upload_protocol="et",
        use_admin_access=True,
        view="LABEL_VIEW_BASIC",
    ),
)
    
res = s.labels.drivelabels_labels_get(req)

if res.google_apps_drive_labels_v2_label is not None:
    # handle response
```
<!-- End SDK Example Usage -->