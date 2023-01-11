<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PubsubSubscriptionsAcknowledgeRequest(
    security=operations.PubsubSubscriptionsAcknowledgeSecurity(
        option1=operations.PubsubSubscriptionsAcknowledgeSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.PubsubSubscriptionsAcknowledgeQueryParams(
        dollar_xgafv="1",
        access_token="dicta",
        alt="media",
        callback="voluptas",
        fields="ut",
        key="accusantium",
        oauth_token="eum",
        pretty_print=False,
        quota_user="dolorem",
        upload_type="at",
        upload_protocol="omnis",
    ),
    request=shared.AcknowledgeRequest(
        ack_id=[
            "autem",
            "ad",
        ],
        subscription="ut",
    ),
)
    
res = s.subscriptions.pubsub_subscriptions_acknowledge(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->