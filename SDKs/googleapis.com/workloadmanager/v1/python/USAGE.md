<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest(
    security=operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams(
        parent="perspiciatis",
    ),
    query_params=operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        alt="json",
        callback="vero",
        evaluation_id="quibusdam",
        fields="qui",
        key="sint",
        oauth_token="ullam",
        pretty_print=False,
        quota_user="eos",
        request_id="et",
        upload_type="voluptas",
        upload_protocol="qui",
    ),
    request=shared.EvaluationInput(
        description="ab",
        labels={
            "deleniti": "mollitia",
            "dolore": "neque",
            "quo": "dolor",
        },
        name="quasi",
        resource_filter=shared.ResourceFilter(
            gce_instance_filter=shared.GceInstanceFilter(
                service_accounts=[
                    "vel",
                    "in",
                ],
            ),
            inclusion_labels={
                "omnis": "neque",
                "beatae": "temporibus",
            },
            resource_id_patterns=[
                "et",
                "enim",
                "in",
            ],
            scopes=[
                "in",
                "et",
            ],
        ),
        resource_status=shared.ResourceStatus(
            rules_newer_versions=[
                "sint",
                "tempora",
            ],
            state="ACTIVE",
        ),
        rule_names=[
            "assumenda",
        ],
    ),
)
    
res = s.projects.workloadmanager_projects_locations_evaluations_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->