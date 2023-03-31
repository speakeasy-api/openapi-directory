<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest(
    dollar_xgafv="2",
    capacity_commitment_input=shared.CapacityCommitmentInput(
        failure_status=shared.Status(
            code=592845,
            details=[
                {
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                {
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                {
                    "suscipit": "molestiae",
                    "minus": "placeat",
                },
            ],
            message="voluptatum",
        ),
        multi_region_auxiliary=False,
        plan="TRIAL",
        renewal_plan="TRIAL",
        slot_count="nisi",
    ),
    access_token="recusandae",
    alt="proto",
    callback="ab",
    capacity_commitment_id="quis",
    enforce_single_admin_project_per_org=False,
    fields_="veritatis",
    key="deserunt",
    oauth_token="perferendis",
    parent="ipsam",
    pretty_print=False,
    quota_user="repellendus",
    upload_type="sapiente",
    upload_protocol="quo",
)
    
res = s.projects.bigqueryreservation_projects_locations_capacity_commitments_create(req, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity(
    option1=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.capacity_commitment is not None:
    # handle response
```
<!-- End SDK Example Usage -->