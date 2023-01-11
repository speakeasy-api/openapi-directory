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
        parent="amet",
    ),
    query_params=operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="culpa",
        alt="proto",
        callback="ex",
        capacity_commitment_id="quod",
        enforce_single_admin_project_per_org=False,
        fields="delectus",
        key="architecto",
        oauth_token="aut",
        pretty_print=False,
        quota_user="eius",
        upload_type="perferendis",
        upload_protocol="voluptatem",
    ),
    request=shared.CapacityCommitmentInput(
        failure_status=shared.Status(
            code=5007631981227778759,
            details=[
                {
                    "sapiente": "qui",
                    "laudantium": "repellendus",
                    "architecto": "pariatur",
                },
                {
                    "animi": "error",
                },
                {
                    "sit": "tempore",
                    "iure": "magni",
                },
            ],
            message="sed",
        ),
        multi_region_auxiliary=False,
        plan="MONTHLY",
        renewal_plan="MONTHLY",
        slot_count="sunt",
    ),
)
    
res = s.projects.bigqueryreservation_projects_locations_capacity_commitments_create(req)

if res.capacity_commitment is not None:
    # handle response
```
<!-- End SDK Example Usage -->