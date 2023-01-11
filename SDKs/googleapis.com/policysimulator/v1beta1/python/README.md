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
        parent="tenetur",
    ),
    query_params=operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams(
        dollar_xgafv="1",
        access_token="est",
        alt="proto",
        callback="aut",
        fields="rerum",
        key="iure",
        oauth_token="explicabo",
        pretty_print=True,
        quota_user="ducimus",
        upload_type="nisi",
        upload_protocol="ut",
    ),
    request=shared.GoogleCloudPolicysimulatorV1beta1ReplayInput(
        config=shared.GoogleCloudPolicysimulatorV1beta1ReplayConfig(
            log_source="LOG_SOURCE_UNSPECIFIED",
            policy_overlay={
                "reiciendis": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "ut",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                            ],
                            service="tempora",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="id",
                                expression="eos",
                                location="dolores",
                                title="aut",
                            ),
                            members=[
                                "ad",
                                "dicta",
                                "neque",
                            ],
                            role="facere",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="dicta",
                                expression="sed",
                                location="rerum",
                                title="consequatur",
                            ),
                            members=[
                                "quod",
                            ],
                            role="deleniti",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="molestiae",
                                expression="perferendis",
                                location="qui",
                                title="nulla",
                            ),
                            members=[
                                "expedita",
                            ],
                            role="tenetur",
                        ),
                    ],
                    etag="omnis",
                    version=5999729721690653849,
                ),
                "quo": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "velit",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "voluptas",
                                        "aut",
                                        "repellat",
                                    ],
                                    log_type="DATA_READ",
                                ),
                            ],
                            service="eligendi",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "qui",
                                        "nihil",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "quo",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "earum",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="officia",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "voluptas",
                                        "et",
                                        "sint",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "totam",
                                        "atque",
                                        "ut",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "ut",
                                        "ad",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                            ],
                            service="molestias",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="impedit",
                                expression="deserunt",
                                location="vero",
                                title="error",
                            ),
                            members=[
                                "beatae",
                            ],
                            role="qui",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="molestiae",
                                expression="deleniti",
                                location="suscipit",
                                title="aut",
                            ),
                            members=[
                                "labore",
                                "et",
                            ],
                            role="omnis",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="blanditiis",
                                expression="itaque",
                                location="doloremque",
                                title="est",
                            ),
                            members=[
                                "est",
                                "fuga",
                            ],
                            role="inventore",
                        ),
                    ],
                    etag="impedit",
                    version=4818883313715258669,
                ),
            },
        ),
        results_summary=shared.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary(
            difference_count=8366996419462768188,
            error_count=8473441131434798447,
            log_count=9063643206236667702,
            newest_date=shared.GoogleTypeDate(
                day=6678564548261309100,
                month=4344067411313220386,
                year=5948743529736996933,
            ),
            oldest_date=shared.GoogleTypeDate(
                day=7733308612172317981,
                month=6367668452330419632,
                year=7502313555217038947,
            ),
            unchanged_count=3760236141729247733,
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
