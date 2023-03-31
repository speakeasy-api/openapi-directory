<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest(
    dollar_xgafv="2",
    evaluation_input=shared.EvaluationInput(
        description="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        name="error",
        resource_filter=shared.ResourceFilter(
            gce_instance_filter=shared.GceInstanceFilter(
                service_accounts=[
                    "suscipit",
                    "iure",
                    "magnam",
                ],
            ),
            inclusion_labels={
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            resource_id_patterns=[
                "excepturi",
                "nisi",
            ],
            scopes=[
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            ],
        ),
        resource_status=shared.ResourceStatus(
            rules_newer_versions=[
                "perferendis",
                "ipsam",
                "repellendus",
            ],
            state="DELETING",
        ),
        rule_names=[
            "odit",
            "at",
            "at",
            "maiores",
        ],
    ),
    access_token="molestiae",
    alt="proto",
    callback="quod",
    evaluation_id="esse",
    fields_="totam",
    key="porro",
    oauth_token="dolorum",
    parent="dicta",
    pretty_print=False,
    quota_user="nam",
    request_id="officia",
    upload_type="occaecati",
    upload_protocol="fugit",
)
    
res = s.projects.workloadmanager_projects_locations_evaluations_create(req, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->