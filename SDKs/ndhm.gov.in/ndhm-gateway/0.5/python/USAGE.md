<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PostV05CareContextsDiscoverJSONRequest(
    authorization="corrupti",
    patient_discovery_request=shared.PatientDiscoveryRequest(
        patient=shared.PatientDiscoveryRequestPatient(
            gender="O",
            id="<patient-id>@<consent-manager-id>",
            name="chandler bing",
            unverified_identifiers=[
                shared.Identifier(
                    type="HEALTH_ID",
                    value="+919800083232",
                ),
                shared.Identifier(
                    type="NDHM_HEALTH_NUMBER",
                    value="+919800083232",
                ),
                shared.Identifier(
                    type="HEALTH_ID",
                    value="+919800083232",
                ),
            ],
            verified_identifiers=[
                shared.Identifier(
                    type="HEALTH_ID",
                    value="+919800083232",
                ),
                shared.Identifier(
                    type="MR",
                    value="+919800083232",
                ),
                shared.Identifier(
                    type="NDHM_HEALTH_NUMBER",
                    value="+919800083232",
                ),
            ],
            year_of_birth=2000,
        ),
        request_id="499a5a4a-7dda-4f20-9b67-e24589627061",
        timestamp="2022-03-26T09:37:56.283Z",
        transaction_id="74e0f467-cc87-496e-9151-a05dfc2ddf7c",
    ),
    x_hip_id="quod",
)
    
res = s.cm_facing.post_v0_5_care_contexts_discover_json(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->