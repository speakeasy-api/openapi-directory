# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/groupssettings/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GroupsSettingsGroupsGetRequest(
    alt="json",
    fields_="provident",
    group_unique_id="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.groups.groups_settings_groups_get(req, operations.GroupsSettingsGroupsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.groups is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### groups

* `groups_settings_groups_get` - Gets one resource by id.
* `groups_settings_groups_patch` - Updates an existing resource. This method supports patch semantics.
* `groups_settings_groups_update` - Updates an existing resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
