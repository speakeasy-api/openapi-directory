<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DlpInfoTypesListRequest(
    security=operations.DlpInfoTypesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DlpInfoTypesListQueryParams(
        dollar_xgafv="2",
        access_token="ad",
        alt="media",
        callback="non",
        fields="nihil",
        filter="incidunt",
        key="dolore",
        language_code="asperiores",
        location_id="labore",
        oauth_token="dolorum",
        parent="ipsum",
        pretty_print=False,
        quota_user="molestiae",
        upload_type="aut",
        upload_protocol="voluptatum",
    ),
)
    
res = s.info_types.dlp_info_types_list(req)

if res.google_privacy_dlp_v2_list_info_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->