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