# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostV05ConsentRequestsInitRequest(
    headers=operations.PostV05ConsentRequestsInitHeaders(
        authorization="voluptatum",
    ),
    request=operations.PostV05ConsentRequestsInitRequests(
        application_xml="illo".encode(),
        consent_request=shared.ConsentRequest(
            consent=shared.ConsentRequestConsent(
                care_contexts=[
                    shared.CareContextDefinition(
                        care_context_reference="earum",
                        patient_reference="modi",
                    ),
                    shared.CareContextDefinition(
                        care_context_reference="dolores",
                        patient_reference="atque",
                    ),
                ],
                hi_types=[
                    "DischargeSummary",
                    "DischargeSummary",
                ],
                hip=shared.ConsentRequestConsentHip(
                    id="aut",
                ),
                hiu=shared.ConsentRequestConsentHiu(
                    id="nobis",
                ),
                patient=shared.ConsentRequestConsentPatient(
                    id="hic",
                ),
                permission=shared.Permission(
                    access_mode="STREAM",
                    data_erase_at="2018-03-19T12:27:56Z",
                    date_range=shared.PermissionDateRange(
                        from_="2017-09-04T08:50:21Z",
                        to="2017-04-21T17:30:59Z",
                    ),
                    frequency=shared.PermissionFrequency(
                        repeats=8672261348979772532,
                        unit="HOUR",
                        value=2010732503877948891,
                    ),
                ),
                purpose=shared.UsePurpose(
                    code="et",
                    ref_uri="quibusdam",
                    text="at",
                ),
                requester=shared.Requester(
                    identifier=shared.RequesterIdentifier(
                        system="impedit",
                        type="sunt",
                        value="in",
                    ),
                    name="eveniet",
                ),
            ),
            request_id="provident",
            timestamp="2001-01-31T12:57:38Z",
        ),
    ),
)
    
res = s.consent.post_v0_5_consent_requests_init(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### consent

* `post_v0_5_consent_requests_init` - Create consent request
* `post_v0_5_consent_requests_status` - Get consent request status
* `post_v0_5_consents_fetch` - Get consent artefact
* `post_v0_5_consents_hip_on_notify` - Consent notification
* `post_v0_5_consents_hiu_on_notify` - Consent notification

### data flow

* `post_v0_5_health_information_notify` - Notifications corresponding to events during data flow
* `post_v0_5_health_information_on_request` - Health information data request acknowledgement from HIP
* `post_v0_5_health_information_request` - Health information data request from HIU

### discovery

* `post_v0_5_care_contexts_on_discover` - Response to patient's account discovery request

### hip facing

* `post_v0_5_users_auth_fetch_modes` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_on_notify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### hiu facing

* `post_v0_5_subscriptions_hiu_on_notify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `post_v0_5_users_auth_on_notify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### identification

* `post_v0_5_patients_find` - Identify a patient by her consent-manager user-id

### link

* `post_v0_5_links_link_add_contexts` - API for HIP initiated care-context linking for patient
* `post_v0_5_links_link_on_confirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `post_v0_5_links_link_on_init` - Response to patient's care context link request

### monitoring

* `get_v0_5_heartbeat` - Get consent request status

### profile

* `post_v0_5_patients_profile_on_share` - Response to patient's share profile request

### subscriptions

* `post_v0_5_subscription_requests_cm_init` - Request for subscription
* `post_v0_5_subscription_requests_hiu_on_notify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `post_v0_5_subscriptions_hiu_on_notify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user auth

* `post_v0_5_users_auth_confirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `post_v0_5_users_auth_fetch_modes` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_init` - Initialize authentication from HIP
* `post_v0_5_users_auth_on_notify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
