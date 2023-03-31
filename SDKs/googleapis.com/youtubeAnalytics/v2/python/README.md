# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/youtubeAnalytics/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.YoutubeAnalyticsGroupItemsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    id="nulla",
    key="corrupti",
    oauth_token="illum",
    on_behalf_of_content_owner="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.group_items.youtube_analytics_group_items_delete(req, operations.YoutubeAnalyticsGroupItemsDeleteSecurity(
    option1=operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### group_items

* `youtube_analytics_group_items_delete` - Removes an item from a group.
* `youtube_analytics_group_items_insert` - Creates a group item.
* `youtube_analytics_group_items_list` - Returns a collection of group items that match the API request parameters.

### groups

* `youtube_analytics_groups_delete` - Deletes a group.
* `youtube_analytics_groups_insert` - Creates a group.
* `youtube_analytics_groups_list` - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* `youtube_analytics_groups_update` - Modifies a group. For example, you could change a group's title.

### reports

* `youtube_analytics_reports_query` - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
