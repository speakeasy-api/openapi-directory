# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/application.v2/2.1.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.CreateApplicationRequestBody(
    capabilities=shared.Capabilities(
        meetings=shared.MeetingsCapability(
            webhooks=shared.MeetingsCapabilityWebhooks(
                recording_changed=shared.MeetingsCapabilityWebhooksRecordingChanged(
                    address="https://example.com/webhooks/event",
                    http_method="POST",
                ),
                room_changed=shared.MeetingsCapabilityWebhooksRoomChanged(
                    address="https://example.com/webhooks/event",
                    http_method="POST",
                ),
                session_changed=shared.MeetingsCapabilityWebhooksSessionChanged(
                    address="https://example.com/webhooks/event",
                    http_method="POST",
                ),
            ),
        ),
        messages=shared.MessagesCapability(
            version="corrupti",
            webhooks=shared.MessagesCapabilityWebhooks(
                inbound_url=shared.MessagesCapabilityWebhooksInboundURL(
                    address="https://example.com/webhooks/inbound",
                    http_method="POST",
                ),
                status_url=shared.MessagesCapabilityWebhooksStatusURL(
                    address="https://example.com/webhooks/status",
                    http_method="POST",
                ),
            ),
        ),
        rtc=shared.RtcCapability(
            leg_persistence_time=5,
            signed_callbacks=True,
            webhooks=shared.RtcCapabilityWebhooks(
                event_url=shared.RtcCapabilityWebhooksEventURL(
                    address="https://example.com/webhooks/event",
                    http_method="POST",
                ),
            ),
        ),
        vbc={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        verify=shared.VerifyCapability(
            version="v2",
            webhooks=shared.VerifyCapabilityWebhooks(
                status_url=shared.VerifyCapabilityWebhooksStatusURL(
                    address="https://example.com/webhooks/event",
                    http_method="POST",
                ),
            ),
        ),
        voice=shared.VoiceCapability(
            conversation_ttl=30,
            payments=shared.VoiceCapabilityPayments(
                gateways=[
                    shared.VoiceCapabilityPaymentsGateways(
                        credential="26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                        mode="live",
                        type="Stripe",
                    ),
                    shared.VoiceCapabilityPaymentsGateways(
                        credential="26f2a89e-6fcd-11ed-a1eb-0242ac120002",
                        mode="live",
                        type="Stripe",
                    ),
                ],
            ),
            signed_callbacks=True,
            webhooks=shared.VoiceCapabilityWebhooks(
                answer_url=shared.VoiceCapabilityWebhooksAnswerURL(
                    address="https://example.com/webhooks/answer",
                    connection_timeout=500,
                    http_method="POST",
                    socket_timeout=3000,
                ),
                event_url=shared.VoiceCapabilityWebhooksEventURL(
                    address="https://example.com/webhooks/event",
                    connection_timeout=500,
                    http_method="POST",
                    socket_timeout=3000,
                ),
                fallback_answer_url=shared.VoiceCapabilityWebhooksFallbackAnswerURL(
                    address="https://fallback.example.com/webhooks/answer",
                    connection_timeout=500,
                    http_method="POST",
                    socket_timeout=3000,
                ),
            ),
        ),
    ),
    keys=operations.CreateApplicationRequestBodyKeys(
        public_key="-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCA
    KOxjsU4pf/sMFi9N0jqcSLcjxu33G
    d/vynKnlw9SENi+UZR44GdjGdmfm1
    tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
    0kYWekeIZawIwe/g9faFgkev+1xsO
    OUNhPx2LhuLmgwWSRS4L5W851Xe3f
    UQIDAQAB
    -----END PUBLIC KEY-----
    ",
    ),
    name="Demo Application",
    privacy=operations.CreateApplicationRequestBodyPrivacy(
        improve_ai=True,
    ),
)
    
res = s.create_application(req)

if res.create_application_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_application` - Create an application
* `delete_application` - Delete an application
* `get_application` - Get an application
* `list_application` - List available applications
* `update_application` - Update an application
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
