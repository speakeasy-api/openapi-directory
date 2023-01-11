<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Area120tablesTablesListRequest(
    security=operations.Area120tablesTablesListSecurity(
        option1=operations.Area120tablesTablesListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.Area120tablesTablesListQueryParams(
        dollar_xgafv="1",
        access_token="maiores",
        alt="media",
        callback="ipsam",
        fields="odio",
        key="sit",
        oauth_token="voluptas",
        order_by="aut",
        page_size=2338102413139933104,
        page_token="non",
        pretty_print=False,
        quota_user="accusantium",
        upload_type="placeat",
        upload_protocol="magni",
    ),
)
    
res = s.tables.area120tables_tables_list(req)

if res.list_tables_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->