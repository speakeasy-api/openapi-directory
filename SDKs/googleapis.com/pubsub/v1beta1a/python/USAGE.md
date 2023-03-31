<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PubsubSubscriptionsAcknowledgeRequest(
    dollar_xgafv="2",
    acknowledge_request=shared.AcknowledgeRequest(
        ack_id=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        subscription="nulla",
    ),
    access_token="corrupti",
    alt="proto",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.subscriptions.pubsub_subscriptions_acknowledge(req, operations.PubsubSubscriptionsAcknowledgeSecurity(
    option1=operations.PubsubSubscriptionsAcknowledgeSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->