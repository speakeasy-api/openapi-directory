<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApigeeregistryProjectsLocationsApisCreateRequest(
    security=operations.ApigeeregistryProjectsLocationsApisCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ApigeeregistryProjectsLocationsApisCreatePathParams(
        parent="modi",
    ),
    query_params=operations.ApigeeregistryProjectsLocationsApisCreateQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="media",
        api_id="delectus",
        callback="sint",
        fields="non",
        key="labore",
        oauth_token="ut",
        pretty_print=False,
        quota_user="magni",
        upload_type="eveniet",
        upload_protocol="consectetur",
    ),
    request=shared.APIInput(
        annotations={
            "eum": "rerum",
            "ut": "est",
            "quas": "quia",
        },
        availability="rem",
        description="incidunt",
        display_name="modi",
        labels={
            "ex": "maiores",
            "inventore": "quia",
            "amet": "ullam",
        },
        name="ut",
        recommended_deployment="fugit",
        recommended_version="temporibus",
    ),
)
    
res = s.projects.apigeeregistry_projects_locations_apis_create(req)

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->