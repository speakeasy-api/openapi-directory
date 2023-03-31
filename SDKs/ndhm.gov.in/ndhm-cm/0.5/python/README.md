# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ndhm.gov.in/ndhm-cm/0.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PostV05ConsentRequestsInitJSONRequest(
    authorization="corrupti",
    consent_request=shared.ConsentRequest(
        consent=shared.ConsentRequestConsent(
            care_contexts=[
                shared.CareContextDefinition(
                    care_context_reference="Episode1",
                    patient_reference="batman@tmh",
                ),
                shared.CareContextDefinition(
                    care_context_reference="Episode1",
                    patient_reference="batman@tmh",
                ),
                shared.CareContextDefinition(
                    care_context_reference="Episode1",
                    patient_reference="batman@tmh",
                ),
            ],
            hi_types=[
                "DiagnosticReport",
                "DischargeSummary",
                "DiagnosticReport",
            ],
            hip=shared.ConsentRequestConsentHip(
                id="corrupti",
            ),
            hiu=shared.ConsentRequestConsentHiu(
                id="illum",
            ),
            patient=shared.ConsentRequestConsentPatient(
                id="hinapatel79@ndhm",
            ),
            permission=shared.Permission(
                access_mode="STORE",
                data_erase_at="2021-09-16T11:56:06.019Z",
                date_range=shared.PermissionDateRange(
                    from_="2022-07-25T06:44:09.184Z",
                    to="2022-02-09T12:04:06.508Z",
                ),
                frequency=shared.PermissionFrequency(
                    repeats=56713,
                    unit="YEAR",
                    value=272656,
                ),
            ),
            purpose=shared.UsePurpose(
                code="suscipit",
                ref_uri="http://spotted-skyline.name",
                text="iusto",
            ),
            requester=shared.Requester(
                identifier=shared.RequesterIdentifier(
                    system="https://www.mciindia.org",
                    type="REGNO",
                    value="MH1001",
                ),
                name="Dr. Manju",
            ),
        ),
        request_id="499a5a4a-7dda-4f20-9b67-e24589627061",
        timestamp="2022-03-20T06:24:36.919Z",
    ),
)
    
res = s.consent.post_v0_5_consent_requests_init_json(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### consent

* `post_v0_5_consent_requests_init_json` - Create consent request
* `post_v0_5_consent_requests_init_raw` - Create consent request
* `post_v0_5_consent_requests_status_json` - Get consent request status
* `post_v0_5_consent_requests_status_raw` - Get consent request status
* `post_v0_5_consents_fetch` - Get consent artefact
* `post_v0_5_consents_hip_on_notify_json` - Consent notification
* `post_v0_5_consents_hip_on_notify_raw` - Consent notification
* `post_v0_5_consents_hiu_on_notify` - Consent notification

### data_flow

* `post_v0_5_health_information_notify_json` - Notifications corresponding to events during data flow
* `post_v0_5_health_information_notify_raw` - Notifications corresponding to events during data flow
* `post_v0_5_health_information_on_request_json` - Health information data request acknowledgement from HIP
* `post_v0_5_health_information_on_request_raw` - Health information data request acknowledgement from HIP
* `post_v0_5_health_information_request_json` - Health information data request from HIU
* `post_v0_5_health_information_request_raw` - Health information data request from HIU

### discovery

* `post_v0_5_care_contexts_on_discover_json` - Response to patient's account discovery request
* `post_v0_5_care_contexts_on_discover_raw` - Response to patient's account discovery request

### hip_facing

* `post_v0_5_users_auth_fetch_modes_json` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_fetch_modes_raw` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_on_notify_json` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `post_v0_5_users_auth_on_notify_raw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### hiu_facing

* `post_v0_5_subscriptions_hiu_on_notify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `post_v0_5_users_auth_on_notify_json` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `post_v0_5_users_auth_on_notify_raw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### identification

* `post_v0_5_patients_find_json` - Identify a patient by her consent-manager user-id
* `post_v0_5_patients_find_raw` - Identify a patient by her consent-manager user-id

### link

* `post_v0_5_links_link_add_contexts_json` - API for HIP initiated care-context linking for patient
* `post_v0_5_links_link_add_contexts_raw` - API for HIP initiated care-context linking for patient
* `post_v0_5_links_link_on_confirm_json` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `post_v0_5_links_link_on_confirm_raw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `post_v0_5_links_link_on_init_json` - Response to patient's care context link request
* `post_v0_5_links_link_on_init_raw` - Response to patient's care context link request

### monitoring

* `get_v0_5_heartbeat` - Get consent request status

### profile

* `post_v0_5_patients_profile_on_share_json` - Response to patient's share profile request
* `post_v0_5_patients_profile_on_share_raw` - Response to patient's share profile request

### subscriptions

* `post_v0_5_subscription_requests_cm_init_json` - Request for subscription
* `post_v0_5_subscription_requests_cm_init_raw` - Request for subscription
* `post_v0_5_subscription_requests_hiu_on_notify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `post_v0_5_subscriptions_hiu_on_notify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user_auth

* `post_v0_5_users_auth_confirm_json` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `post_v0_5_users_auth_confirm_raw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `post_v0_5_users_auth_fetch_modes_json` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_fetch_modes_raw` - Get a patient's authentication modes relevant to specified purpose
* `post_v0_5_users_auth_init_json` - Initialize authentication from HIP
* `post_v0_5_users_auth_init_raw` - Initialize authentication from HIP
* `post_v0_5_users_auth_on_notify_json` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `post_v0_5_users_auth_on_notify_raw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
