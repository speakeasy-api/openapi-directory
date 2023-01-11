<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RealtimebiddingBiddersCreativesWatchRequest(
    security=operations.RealtimebiddingBiddersCreativesWatchSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RealtimebiddingBiddersCreativesWatchPathParams(
        parent="autem",
    ),
    query_params=operations.RealtimebiddingBiddersCreativesWatchQueryParams(
        dollar_xgafv="2",
        access_token="quibusdam",
        alt="proto",
        callback="incidunt",
        fields="cupiditate",
        key="qui",
        oauth_token="quidem",
        pretty_print=False,
        quota_user="dolorum",
        upload_type="iure",
        upload_protocol="doloribus",
    ),
    request={
        "eum": "fuga",
        "natus": "voluptatem",
        "assumenda": "repellat",
    },
)
    
res = s.bidders.realtimebidding_bidders_creatives_watch(req)

if res.watch_creatives_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->