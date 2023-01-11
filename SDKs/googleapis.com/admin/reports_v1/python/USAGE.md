<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ReportsActivitiesListRequest(
    security=operations.ReportsActivitiesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ReportsActivitiesListPathParams(
        application_name="keep",
        user_key="molestiae",
    ),
    query_params=operations.ReportsActivitiesListQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        actor_ip_address="aut",
        alt="json",
        callback="expedita",
        customer_id="nihil",
        end_time="incidunt",
        event_name="est",
        fields="nostrum",
        filters="esse",
        group_id_filter="dolores",
        key="ut",
        max_results=2825598413902487513,
        oauth_token="id",
        org_unit_id="consequuntur",
        page_token="magni",
        pretty_print=True,
        quota_user="doloremque",
        start_time="iure",
        upload_type="maiores",
        upload_protocol="dolor",
    ),
)
    
res = s.activities.reports_activities_list(req)

if res.activities is not None:
    # handle response
```
<!-- End SDK Example Usage -->