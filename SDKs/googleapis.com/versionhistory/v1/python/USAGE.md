<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VersionhistoryPlatformsChannelsListRequest(
    path_params=operations.VersionhistoryPlatformsChannelsListPathParams(
        parent="quod",
    ),
    query_params=operations.VersionhistoryPlatformsChannelsListQueryParams(
        dollar_xgafv="1",
        access_token="numquam",
        alt="json",
        callback="blanditiis",
        fields="voluptatem",
        key="voluptas",
        oauth_token="ea",
        page_size=3770087752288054082,
        page_token="ea",
        pretty_print=False,
        quota_user="quod",
        upload_type="est",
        upload_protocol="quae",
    ),
)
    
res = s.platforms.versionhistory_platforms_channels_list(req)

if res.list_channels_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->