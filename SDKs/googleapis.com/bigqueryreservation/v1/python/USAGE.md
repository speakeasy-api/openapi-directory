<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest(
    dollar_xgafv="2",
    capacity_commitment_input=shared.CapacityCommitmentInput(
        edition="ENTERPRISE",
        failure_status=shared.Status(
            code=715190,
            details=[
                {
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                {
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                {
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                },
                {
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
            ],
            message="veritatis",
        ),
        multi_region_auxiliary=False,
        plan="ANNUAL",
        renewal_plan="COMMITMENT_PLAN_UNSPECIFIED",
        slot_count="ipsam",
    ),
    access_token="repellendus",
    alt="proto",
    callback="quo",
    capacity_commitment_id="odit",
    enforce_single_admin_project_per_org=False,
    fields_="at",
    key="at",
    oauth_token="maiores",
    parent="molestiae",
    pretty_print=False,
    quota_user="quod",
    upload_type="quod",
    upload_protocol="esse",
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