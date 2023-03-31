<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApigeeregistryProjectsLocationsApisCreateRequest(
    dollar_xgafv="2",
    api_input=shared.APIInput(
        annotations={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        availability="vel",
        description="error",
        display_name="deserunt",
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        recommended_deployment="tempora",
        recommended_version="suscipit",
    ),
    access_token="molestiae",
    alt="proto",
    api_id="placeat",
    callback="voluptatum",
    fields_="iusto",
    key="excepturi",
    oauth_token="nisi",
    parent="recusandae",
    pretty_print=False,
    quota_user="temporibus",
    upload_type="ab",
    upload_protocol="quis",
)
    
res = s.projects.apigeeregistry_projects_locations_apis_create(req, operations.ApigeeregistryProjectsLocationsApisCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->