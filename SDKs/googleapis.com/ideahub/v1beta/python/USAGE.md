<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest(
    path_params=operations.IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams(
        parent="at",
    ),
    query_params=operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="media",
        callback="sint",
        fields="vel",
        key="culpa",
        oauth_token="fuga",
        pretty_print=False,
        quota_user="cumque",
        upload_type="debitis",
        upload_protocol="optio",
    ),
    request=shared.GoogleSearchIdeahubV1betaIdeaActivity(
        ideas=[
            "placeat",
            "nihil",
        ],
        name="quia",
        topics=[
            "voluptas",
            "impedit",
            "earum",
        ],
        type="POST_DRAFTED",
        uri="quia",
    ),
)
    
res = s.platforms.ideahub_platforms_properties_idea_activities_create(req)

if res.google_search_ideahub_v1beta_idea_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->