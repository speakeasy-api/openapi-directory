<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FcmProjectsMessagesSendRequest(
    security=operations.FcmProjectsMessagesSendSecurity(
        option1=operations.FcmProjectsMessagesSendSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FcmProjectsMessagesSendPathParams(
        parent="delectus",
    ),
    query_params=operations.FcmProjectsMessagesSendQueryParams(
        dollar_xgafv="1",
        access_token="eum",
        alt="media",
        callback="praesentium",
        fields="nulla",
        key="blanditiis",
        oauth_token="blanditiis",
        pretty_print=True,
        quota_user="voluptas",
        upload_type="rerum",
        upload_protocol="quibusdam",
    ),
    request=shared.SendMessageRequest(
        message=shared.Message(
            android=shared.AndroidConfig(
                collapse_key="et",
                data={
                    "ut": "dolorem",
                    "quos": "exercitationem",
                },
                direct_boot_ok=False,
                fcm_options=shared.AndroidFcmOptions(
                    analytics_label="enim",
                ),
                notification=shared.AndroidNotification(
                    body="quaerat",
                    body_loc_args=[
                        "ab",
                    ],
                    body_loc_key="architecto",
                    bypass_proxy_notification=False,
                    channel_id="quas",
                    click_action="sed",
                    color="eum",
                    default_light_settings=True,
                    default_sound=False,
                    default_vibrate_timings=True,
                    event_time="ipsam",
                    icon="repellat",
                    image="consequuntur",
                    light_settings=shared.LightSettings(
                        color=shared.Color(
                            alpha=97.199997,
                            blue=39.200001,
                            green=73.199997,
                            red=22.100000,
                        ),
                        light_off_duration="corrupti",
                        light_on_duration="est",
                    ),
                    local_only=False,
                    notification_count=2801199715974625794,
                    notification_priority="PRIORITY_UNSPECIFIED",
                    sound="reprehenderit",
                    sticky=False,
                    tag="sed",
                    ticker="voluptatem",
                    title="sit",
                    title_loc_args=[
                        "earum",
                    ],
                    title_loc_key="animi",
                    vibrate_timings=[
                        "ex",
                    ],
                    visibility="VISIBILITY_UNSPECIFIED",
                ),
                priority="NORMAL",
                restricted_package_name="non",
                ttl="consequatur",
            ),
            apns=shared.ApnsConfig(
                fcm_options=shared.ApnsFcmOptions(
                    analytics_label="cumque",
                    image="autem",
                ),
                headers={
                    "deserunt": "iure",
                    "exercitationem": "molestiae",
                    "neque": "deleniti",
                },
                payload={
                    "commodi": "ut",
                    "esse": "nam",
                },
            ),
            condition="eius",
            data={
                "et": "velit",
            },
            fcm_options=shared.FcmOptions(
                analytics_label="quas",
            ),
            name="nostrum",
            notification=shared.Notification(
                body="eligendi",
                image="veritatis",
                title="quis",
            ),
            token="quidem",
            topic="ratione",
            webpush=shared.WebpushConfig(
                data={
                    "perferendis": "enim",
                    "natus": "repudiandae",
                    "aperiam": "minus",
                },
                fcm_options=shared.WebpushFcmOptions(
                    analytics_label="esse",
                    link="molestias",
                ),
                headers={
                    "ut": "neque",
                    "sed": "dolores",
                    "reprehenderit": "est",
                },
                notification={
                    "dolores": "officia",
                    "consequatur": "et",
                },
            ),
        ),
        validate_only=True,
    ),
)
    
res = s.projects.fcm_projects_messages_send(req)

if res.message is not None:
    # handle response
```
<!-- End SDK Example Usage -->