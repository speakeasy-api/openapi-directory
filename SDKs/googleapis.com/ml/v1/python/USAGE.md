<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MlProjectsExplainRequest(
    dollar_xgafv="2",
    google_cloud_ml_v1_explain_request=shared.GoogleCloudMlV1ExplainRequest(
        http_body=shared.GoogleAPIHTTPBody(
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
    ),
    access_token="veritatis",
    alt="media",
    callback="perferendis",
    fields_="ipsam",
    key="repellendus",
    name="sapiente",
    oauth_token="quo",
    pretty_print=False,
    quota_user="odit",
    upload_type="at",
    upload_protocol="at",
)
    
res = s.projects.ml_projects_explain(req, operations.MlProjectsExplainSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_api_http_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->