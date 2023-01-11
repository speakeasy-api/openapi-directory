<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DoubleclicksearchConversionGetRequest(
    security=operations.DoubleclicksearchConversionGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DoubleclicksearchConversionGetPathParams(
        advertiser_id="omnis",
        agency_id="nesciunt",
        engine_account_id="non",
    ),
    query_params=operations.DoubleclicksearchConversionGetQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        ad_group_id="reprehenderit",
        ad_id="iste",
        alt="media",
        callback="dolor",
        campaign_id="voluptas",
        criterion_id="qui",
        customer_id="sequi",
        end_date=8364161452162830366,
        fields="odit",
        key="et",
        oauth_token="suscipit",
        pretty_print=True,
        quota_user="ad",
        row_count=5886645646246062940,
        start_date=887084586441570373,
        start_row=3255355928524481789,
        upload_type="ut",
        upload_protocol="id",
    ),
)
    
res = s.conversion.doubleclicksearch_conversion_get(req)

if res.conversion_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->