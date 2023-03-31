<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BulkCallParameters(
    answer_url="https://example.com/answer/",
    caller_name="Bulk Test",
    confirm_key="1",
    confirm_sound="https://example.com/confirm_sound/",
    core_uuid="2e8e6275-7cfe-4e3c-a8d6-25316b4519c7",
    delimiter="<",
    extra_dial_string="bridge_early_media=true,hangup_after_bridge=true",
    from_="15551234567",
    gateway_codecs="'PCMA,PCMU','G729,PCMU','PCMA,G729'",
    gateway_retries="3,1,2",
    gateway_timeouts="10,30,20",
    gateways="user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
    hangup_on_ring=90,
    hangup_url="https://example.com/hangup/",
    reject_causes="USER_BUSY,NO_ANSWER",
    ring_url="https://example.com/ring/",
    send_digits="1w2w3W#*@1500",
    send_on_preanswer=False,
    time_limit=90,
    to="15557654321",
)
    
res = s.call.post_v0_1_bulk_call_(req, operations.PostV01BulkCallSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.bulk_call_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->