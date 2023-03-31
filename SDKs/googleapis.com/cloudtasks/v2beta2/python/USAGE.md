<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudtasksAPIQueueUpdateRequest(
    dollar_xgafv="2",
    http_body=shared.HTTPBody(
        content_type="provident",
        data="distinctio",
        extensions=[
            {
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            {
                "iure": "magnam",
                "debitis": "ipsa",
            },
            {
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
                "iusto": "excepturi",
            },
            {
                "recusandae": "temporibus",
                "ab": "quis",
            },
        ],
    ),
    access_token="veritatis",
    alt="media",
    app_id="perferendis",
    callback="ipsam",
    fields_="repellendus",
    key="sapiente",
    oauth_token="quo",
    pretty_print=False,
    quota_user="odit",
    upload_type="at",
    upload_protocol="at",
)
    
res = s.api.cloudtasks_api_queue_update(req, operations.CloudtasksAPIQueueUpdateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->