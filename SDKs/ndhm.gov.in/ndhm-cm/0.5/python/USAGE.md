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