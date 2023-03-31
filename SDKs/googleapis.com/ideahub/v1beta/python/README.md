# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/ideahub/v1beta/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### platforms

* `ideahub_platforms_properties_idea_activities_create` - Creates an idea activity entry.
* `ideahub_platforms_properties_ideas_list` - List ideas for a given Creator and filter and sort options.
* `ideahub_platforms_properties_locales_list` - Returns which locales ideas are available in for a given Creator.
* `ideahub_platforms_properties_topic_states_patch` - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
