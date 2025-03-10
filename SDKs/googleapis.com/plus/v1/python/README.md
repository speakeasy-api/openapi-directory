# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/plus/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PlusActivitiesGetRequest(
    activity_id="corrupti",
    alt="json",
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
)
    
res = s.activities.plus_activities_get(req, operations.PlusActivitiesGetSecurity(
    option1=operations.PlusActivitiesGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `plus_activities_get` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plus_activities_list` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plus_activities_search` - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### comments

* `plus_comments_get` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plus_comments_list` - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### people

* `plus_people_get` - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* `plus_people_list` - List all of the people in the specified collection.
* `plus_people_list_by_activity` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* `plus_people_search` - Shut down. See https://developers.google.com/+/api-shutdown for more details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
