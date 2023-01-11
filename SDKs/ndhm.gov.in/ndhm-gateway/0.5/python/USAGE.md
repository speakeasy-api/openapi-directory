<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostV05CareContextsDiscoverRequest(
    headers=operations.PostV05CareContextsDiscoverHeaders(
        authorization="nostrum",
        x_hip_id="architecto",
    ),
    request=operations.PostV05CareContextsDiscoverRequests(
        application_xml="quisquam".encode(),
        patient_discovery_request=shared.PatientDiscoveryRequest(
            patient=shared.PatientDiscoveryRequestPatient(
                gender="O",
                id="voluptatem",
                name="eos",
                unverified_identifiers=[
                    shared.Identifier(
                        type="HEALTH_ID",
                        value="impedit",
                    ),
                    shared.Identifier(
                        type="NDHM_HEALTH_NUMBER",
                        value="exercitationem",
                    ),
                    shared.Identifier(
                        type="HEALTH_ID",
                        value="quia",
                    ),
                ],
                verified_identifiers=[
                    shared.Identifier(
                        type="HEALTH_ID",
                        value="sit",
                    ),
                    shared.Identifier(
                        type="HEALTH_ID",
                        value="debitis",
                    ),
                ],
                year_of_birth=1476005494591598575,
            ),
            request_id="quia",
            timestamp="1999-05-24T06:05:34Z",
            transaction_id="repellendus",
        ),
    ),
)
    
res = s.cm_facing.post_v0_5_care_contexts_discover(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->