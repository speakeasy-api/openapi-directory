<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateCallRequestAnswerURL(
    answer_method="GET",
    answer_url=[
        "quibusdam",
        "unde",
        "nulla",
    ],
    event_method="GET",
    event_url=[
        "http://physical-pegboard.info",
        "http://fond-teen.com",
        "https://fatherly-geyser.info",
        "https://studious-lynx.info",
    ],
    from_=shared.EndpointPhoneFrom(
        number="14155550100",
        type="phone",
    ),
    length_timer=568045,
    machine_detection="continue",
    random_from_number=False,
    ringing_timer=392785,
    to=[
        shared.EndpointVBCExtension(
            extension="1234",
            type="vbc",
        ),
        shared.EndpointPhoneTo(
            dtmf_answer="p*123#",
            number="14155550100",
            type="phone",
        ),
        shared.EndpointSip(
            type="sip",
            uri="sip:rebekka@sip.example.com",
        ),
        shared.EndpointPhoneTo(
            dtmf_answer="p*123#",
            number="14155550100",
            type="phone",
        ),
    ],
)
    
res = s.calls.create_call(req, operations.CreateCallSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.create_call_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->