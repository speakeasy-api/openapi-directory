# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/policysimulator/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PolicysimulatorProjectsLocationsReplaysCreateRequest(
    dollar_xgafv="2",
    google_cloud_policysimulator_v1_replay_input=shared.GoogleCloudPolicysimulatorV1ReplayInput(
        config=shared.GoogleCloudPolicysimulatorV1ReplayConfig(
            log_source="RECENT_ACCESSES",
            policy_overlay={
                "quibusdam": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "illum",
                                        "vel",
                                        "error",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "iure",
                                        "magnam",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "delectus",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "molestiae",
                                        "minus",
                                    ],
                                    log_type="DATA_READ",
                                ),
                            ],
                            service="voluptatum",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "nisi",
                                        "recusandae",
                                        "temporibus",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "veritatis",
                                        "deserunt",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                            ],
                            service="ipsam",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "quo",
                                        "odit",
                                        "at",
                                        "at",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "quod",
                                        "quod",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "porro",
                                        "dolorum",
                                        "dicta",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "occaecati",
                                        "fugit",
                                        "deleniti",
                                    ],
                                    log_type="DATA_READ",
                                ),
                            ],
                            service="optio",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="beatae",
                                expression="commodi",
                                location="molestiae",
                                title="Mrs.",
                            ),
                            members=[
                                "impedit",
                            ],
                            role="cum",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="esse",
                                expression="ipsum",
                                location="excepturi",
                                title="Mr.",
                            ),
                            members=[
                                "ad",
                            ],
                            role="natus",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="sed",
                                expression="iste",
                                location="dolor",
                                title="Miss",
                            ),
                            members=[
                                "hic",
                                "saepe",
                            ],
                            role="fuga",
                        ),
                    ],
                    etag="in",
                    version=359508,
                ),
                "iste": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "architecto",
                                        "ipsa",
                                        "reiciendis",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "laborum",
                                        "dolores",
                                        "dolorem",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "nobis",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "nemo",
                                        "minima",
                                        "excepturi",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                            ],
                            service="iure",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "sapiente",
                                        "architecto",
                                        "mollitia",
                                        "dolorem",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "repellat",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "numquam",
                                        "commodi",
                                        "quam",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="velit",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="quia",
                                expression="quis",
                                location="vitae",
                                title="Miss",
                            ),
                            members=[
                                "enim",
                                "odit",
                                "quo",
                            ],
                            role="sequi",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="tenetur",
                                expression="ipsam",
                                location="id",
                                title="Dr.",
                            ),
                            members=[
                                "quasi",
                            ],
                            role="error",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="temporibus",
                                expression="laborum",
                                location="quasi",
                                title="Dr.",
                            ),
                            members=[
                                "vero",
                                "nihil",
                                "praesentium",
                                "voluptatibus",
                            ],
                            role="ipsa",
                        ),
                    ],
                    etag="omnis",
                    version=451159,
                ),
                "cum": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "ut",
                                        "maiores",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                            ],
                            service="corporis",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="iusto",
                                expression="dicta",
                                location="harum",
                                title="Mrs.",
                            ),
                            members=[
                                "commodi",
                                "repudiandae",
                                "quae",
                                "ipsum",
                            ],
                            role="quidem",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="molestias",
                                expression="excepturi",
                                location="pariatur",
                                title="Mrs.",
                            ),
                            members=[
                                "rem",
                                "voluptates",
                                "quasi",
                            ],
                            role="repudiandae",
                        ),
                    ],
                    etag="sint",
                    version=83112,
                ),
            },
        ),
        results_summary=shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary(
            difference_count=929297,
            error_count=277718,
            log_count=318569,
            newest_date=shared.GoogleTypeDate(
                day=9356,
                month=667411,
                year=842342,
            ),
            oldest_date=shared.GoogleTypeDate(
                day=131797,
                month=647174,
                year=716327,
            ),
            unchanged_count=841386,
        ),
    ),
    access_token="labore",
    alt="json",
    callback="qui",
    fields_="aliquid",
    key="cupiditate",
    oauth_token="quos",
    parent="perferendis",
    pretty_print=False,
    quota_user="magni",
    upload_type="assumenda",
    upload_protocol="ipsam",
)
    
res = s.projects.policysimulator_projects_locations_replays_create(req, operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `policysimulator_projects_locations_replays_create` - Creates and starts a Replay using the given ReplayConfig.
* `policysimulator_projects_locations_replays_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `policysimulator_projects_locations_replays_results_list` - Lists the results of running a Replay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
