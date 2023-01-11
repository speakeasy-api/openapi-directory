# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PolicysimulatorProjectsLocationsReplaysCreateRequest(
    security=operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PolicysimulatorProjectsLocationsReplaysCreatePathParams(
        parent="ducimus",
    ),
    query_params=operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams(
        dollar_xgafv="1",
        access_token="dolores",
        alt="proto",
        callback="est",
        fields="autem",
        key="distinctio",
        oauth_token="quia",
        pretty_print=True,
        quota_user="sed",
        upload_type="odit",
        upload_protocol="magnam",
    ),
    request=shared.GoogleCloudPolicysimulatorV1ReplayInput(
        config=shared.GoogleCloudPolicysimulatorV1ReplayConfig(
            log_source="LOG_SOURCE_UNSPECIFIED",
            policy_overlay={
                "qui": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "sunt",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "est",
                                    ],
                                    log_type="DATA_READ",
                                ),
                            ],
                            service="quos",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "sed",
                                        "molestias",
                                        "eligendi",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                            ],
                            service="suscipit",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="hic",
                                expression="non",
                                location="et",
                                title="eaque",
                            ),
                            members=[
                                "optio",
                                "iure",
                            ],
                            role="accusantium",
                        ),
                    ],
                    etag="sapiente",
                    version=1914239726825849494,
                ),
            },
        ),
        results_summary=shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary(
            difference_count=8089997685592009719,
            error_count=2733693980610613482,
            log_count=2820533667328245501,
            newest_date=shared.GoogleTypeDate(
                day=4640716428144215188,
                month=7060479145607682029,
                year=8522260910576823526,
            ),
            oldest_date=shared.GoogleTypeDate(
                day=4311955425285923233,
                month=4495951167761038811,
                year=3860047325397984572,
            ),
            unchanged_count=2719928965250406025,
        ),
    ),
)
    
res = s.projects.policysimulator_projects_locations_replays_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `policysimulator_projects_locations_replays_create` - Creates and starts a Replay using the given ReplayConfig.
* `policysimulator_projects_locations_replays_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `policysimulator_projects_locations_replays_results_list` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
