<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest(
    batch_input_marketing_event_subscriber=shared.BatchInputMarketingEventSubscriber(
        inputs=[
            shared.MarketingEventSubscriber(
                interaction_date_time=592845,
                properties={
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                vid=623564,
            ),
            shared.MarketingEventSubscriber(
                interaction_date_time=645894,
                properties={
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                vid=963663,
            ),
            shared.MarketingEventSubscriber(
                interaction_date_time=272656,
                properties={
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                vid=479977,
            ),
        ],
    ),
    external_account_id="excepturi",
    external_event_id="nisi",
    subscriber_state="recusandae",
)
    
res = s.attendance_subscriber_state_changes.post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_create_create(req, operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity(
    oauth2_legacy="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.batch_response_subscriber_vid_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->