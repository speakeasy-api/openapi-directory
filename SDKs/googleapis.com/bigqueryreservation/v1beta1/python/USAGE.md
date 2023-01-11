<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest(
    security=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity(
        option1=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams(
        parent="accusamus",
    ),
    query_params=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="deleniti",
        alt="json",
        callback="quasi",
        capacity_commitment_id="praesentium",
        enforce_single_admin_project_per_org=True,
        fields="eos",
        key="ipsam",
        oauth_token="ipsum",
        pretty_print=False,
        quota_user="ut",
        upload_type="veniam",
        upload_protocol="qui",
    ),
    request=shared.CapacityCommitmentInput(
        failure_status=shared.Status(
            code=7196243287888629260,
            details=[
                {
                    "distinctio": "eos",
                },
            ],
            message="officia",
        ),
        multi_region_auxiliary=True,
        plan="ANNUAL",
        renewal_plan="COMMITMENT_PLAN_UNSPECIFIED",
        slot_count="corporis",
    ),
)
    
res = s.projects.bigqueryreservation_projects_locations_capacity_commitments_create(req)

if res.capacity_commitment is not None:
    # handle response
```
<!-- End SDK Example Usage -->