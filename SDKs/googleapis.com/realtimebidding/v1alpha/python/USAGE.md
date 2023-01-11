<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest(
    security=operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RealtimebiddingBiddersBiddingFunctionsActivatePathParams(
        name="magni",
    ),
    query_params=operations.RealtimebiddingBiddersBiddingFunctionsActivateQueryParams(
        dollar_xgafv="1",
        access_token="maiores",
        alt="proto",
        callback="quasi",
        fields="voluptas",
        key="et",
        oauth_token="magni",
        pretty_print=True,
        quota_user="occaecati",
        upload_type="inventore",
        upload_protocol="accusamus",
    ),
    request={
        "rerum": "animi",
        "ut": "ea",
        "nihil": "suscipit",
    },
)
    
res = s.bidders.realtimebidding_bidders_bidding_functions_activate(req)

if res.bidding_function is not None:
    # handle response
```
<!-- End SDK Example Usage -->