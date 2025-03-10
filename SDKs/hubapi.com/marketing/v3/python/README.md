# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hubapi.com/marketing/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attendance_subscriber_state_changes

* `post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_create_create` - Record
* `post_marketing_v3_marketing_events_attendance_external_event_id_subscriber_state_email_create_create_by_email` - Record

### marketing_events_external

* `delete_marketing_v3_marketing_events_events_external_event_id_archive`
* `get_marketing_v3_marketing_events_events_external_event_id_get_by_id`
* `patch_marketing_v3_marketing_events_events_external_event_id_update`
* `post_marketing_v3_marketing_events_events_delete_archive_batch`
* `post_marketing_v3_marketing_events_events_upsert_do_upsert`
* `post_marketing_v3_marketing_events_events_external_event_id_cancel_do_cancel`
* `post_marketing_v3_marketing_events_events_external_event_id_complete_complete`
* `post_marketing_v3_marketing_events_events_external_event_id_subscriber_state_email_upsert_do_email_upsert_by_id`
* `post_marketing_v3_marketing_events_events_external_event_id_subscriber_state_upsert_do_upsert_by_id`
* `post_marketing_v3_marketing_events_events_create`
* `put_marketing_v3_marketing_events_events_external_event_id_replace`

### search

* `get_marketing_v3_marketing_events_events_search_do_search` - Search for marketing events

### settings_external

* `get_marketing_v3_marketing_events_app_id_settings_get_all`
* `post_marketing_v3_marketing_events_app_id_settings_create`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
