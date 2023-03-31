<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest(
    dollar_xgafv="2",
    google_search_ideahub_v1beta_idea_activity=shared.GoogleSearchIdeahubV1betaIdeaActivity(
        ideas=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        name="nulla",
        topics=[
            "illum",
            "vel",
            "error",
        ],
        type="POST_DELETED",
        uri="http://innocent-effect.org",
    ),
    access_token="ipsa",
    alt="proto",
    callback="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    upload_type="iusto",
    upload_protocol="excepturi",
)
    
res = s.platforms.ideahub_platforms_properties_idea_activities_create(req)

if res.google_search_ideahub_v1beta_idea_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->