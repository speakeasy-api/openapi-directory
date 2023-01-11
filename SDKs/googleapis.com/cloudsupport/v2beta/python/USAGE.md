<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudsupportCaseClassificationsSearchRequest(
    security=operations.CloudsupportCaseClassificationsSearchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.CloudsupportCaseClassificationsSearchQueryParams(
        dollar_xgafv="1",
        access_token="tempore",
        alt="json",
        callback="et",
        fields="et",
        key="sed",
        oauth_token="aut",
        page_size=8094092916024648142,
        page_token="aperiam",
        pretty_print=False,
        query="quaerat",
        quota_user="dolor",
        upload_type="tempore",
        upload_protocol="et",
    ),
)
    
res = s.case_classifications.cloudsupport_case_classifications_search(req)

if res.search_case_classifications_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->