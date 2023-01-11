<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest(
    security=operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity(
        private_apps_legacy=shared.SchemePrivateAppsLegacy(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams(
        external_event_id="veniam",
        subscriber_state="nam",
    ),
    query_params=operations.PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams(
        external_account_id="velit",
    ),
    request=shared.BatchInputMarketingEventSubscriber(
        inputs=[
            shared.MarketingEventSubscriber(
                interaction_date_time=2417915545820237958,
                properties={
                    "ut": "porro",
                    "ut": "vitae",
                    "culpa": "quaerat",
                },
                vid=5166240153220924713,
            ),
            shared.MarketingEventSubscriber(
                interaction_date_time=4937055844692512394,
                properties={
                    "tempore": "molestiae",
                    "doloribus": "perferendis",
                },
                vid=5709488542962643959,
            ),
            shared.MarketingEventSubscriber(
                interaction_date_time=2902389675343405999,
                properties={
                    "deleniti": "eos",
                },
                vid=7665706851115156798,
            ),
        ],
    ),
)
    
res = s.attendance_subscriber_state_changes.post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_create_create(req)

if res.batch_response_subscriber_vid_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->