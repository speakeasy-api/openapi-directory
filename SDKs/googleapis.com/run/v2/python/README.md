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
    
req = operations.RunProjectsLocationsJobsCreateRequest(
    security=operations.RunProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RunProjectsLocationsJobsCreatePathParams(
        parent="suscipit",
    ),
    query_params=operations.RunProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="1",
        access_token="libero",
        alt="json",
        callback="ad",
        fields="ducimus",
        job_id="deleniti",
        key="nisi",
        oauth_token="ut",
        pretty_print=True,
        quota_user="porro",
        upload_type="tempore",
        upload_protocol="et",
        validate_only=True,
    ),
    request=shared.GoogleCloudRunV2JobInput(
        annotations={
            "laudantium": "perferendis",
            "et": "eius",
        },
        binary_authorization=shared.GoogleCloudRunV2BinaryAuthorization(
            breakglass_justification="qui",
            use_default=True,
        ),
        client="iusto",
        client_version="explicabo",
        labels={
            "eaque": "eaque",
            "dicta": "nemo",
            "ea": "delectus",
        },
        latest_created_execution=shared.GoogleCloudRunV2ExecutionReference(
            completion_time="aliquid",
            create_time="hic",
            name="quasi",
        ),
        launch_stage="PRELAUNCH",
        name="occaecati",
        template=shared.GoogleCloudRunV2ExecutionTemplate(
            annotations={
                "consequatur": "dignissimos",
                "officia": "perspiciatis",
            },
            labels={
                "quam": "culpa",
            },
            parallelism=5668688859707832686,
            task_count=4852492878856347376,
            template=shared.GoogleCloudRunV2TaskTemplate(
                containers=[
                    shared.GoogleCloudRunV2Container(
                        args=[
                            "ut",
                            "harum",
                        ],
                        command=[
                            "reprehenderit",
                            "cupiditate",
                        ],
                        env=[
                            shared.GoogleCloudRunV2EnvVar(
                                name="quibusdam",
                                value="iure",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="illum",
                                        version="nihil",
                                    ),
                                ),
                            ),
                            shared.GoogleCloudRunV2EnvVar(
                                name="magni",
                                value="asperiores",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="qui",
                                        version="dignissimos",
                                    ),
                                ),
                            ),
                        ],
                        image="voluptatibus",
                        liveness_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=8920474111595905787,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=4083509658646138217,
                                service="unde",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="maiores",
                                        value="numquam",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="dolor",
                                        value="dolores",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="asperiores",
                                        value="suscipit",
                                    ),
                                ],
                                path="ipsa",
                            ),
                            initial_delay_seconds=7753799171679445511,
                            period_seconds=4931175529225566848,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=2185325564674221262,
                            ),
                            timeout_seconds=138877756232706189,
                        ),
                        name="numquam",
                        ports=[
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=8562947669453034156,
                                name="numquam",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=568995101887030269,
                                name="illo",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=5323426190802164810,
                                name="qui",
                            ),
                        ],
                        resources=shared.GoogleCloudRunV2ResourceRequirements(
                            cpu_idle=True,
                            limits={
                                "sit": "omnis",
                            },
                        ),
                        startup_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=6298505812432238974,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=1952487967453246552,
                                service="ducimus",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="et",
                                        value="assumenda",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="occaecati",
                                        value="odio",
                                    ),
                                ],
                                path="doloribus",
                            ),
                            initial_delay_seconds=7628336263756955957,
                            period_seconds=4907723314801283488,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=3609607787253861825,
                            ),
                            timeout_seconds=1359176292588395974,
                        ),
                        volume_mounts=[
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="natus",
                                name="nostrum",
                            ),
                        ],
                        working_dir="nisi",
                    ),
                    shared.GoogleCloudRunV2Container(
                        args=[
                            "est",
                            "et",
                        ],
                        command=[
                            "sit",
                            "dolores",
                        ],
                        env=[
                            shared.GoogleCloudRunV2EnvVar(
                                name="nihil",
                                value="ut",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="voluptatum",
                                        version="ipsum",
                                    ),
                                ),
                            ),
                            shared.GoogleCloudRunV2EnvVar(
                                name="quae",
                                value="est",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="quia",
                                        version="non",
                                    ),
                                ),
                            ),
                            shared.GoogleCloudRunV2EnvVar(
                                name="sit",
                                value="repellendus",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="nemo",
                                        version="eius",
                                    ),
                                ),
                            ),
                        ],
                        image="qui",
                        liveness_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=8604891891811334033,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=4688415876928062105,
                                service="est",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="eveniet",
                                        value="et",
                                    ),
                                ],
                                path="nostrum",
                            ),
                            initial_delay_seconds=8024114062111476704,
                            period_seconds=7295088593213678795,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=4330808085858693847,
                            ),
                            timeout_seconds=2366086897166024343,
                        ),
                        name="ea",
                        ports=[
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=4210289638828124445,
                                name="et",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=8258572521064249376,
                                name="et",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=769848423266362173,
                                name="nemo",
                            ),
                        ],
                        resources=shared.GoogleCloudRunV2ResourceRequirements(
                            cpu_idle=False,
                            limits={
                                "maiores": "quos",
                            },
                        ),
                        startup_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=5475561261972105000,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=9192946029720373990,
                                service="delectus",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="quis",
                                        value="itaque",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="numquam",
                                        value="aliquam",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="dignissimos",
                                        value="omnis",
                                    ),
                                ],
                                path="alias",
                            ),
                            initial_delay_seconds=28994857420749428,
                            period_seconds=5712637066807001057,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=2780196467515509590,
                            ),
                            timeout_seconds=6904330919217889168,
                        ),
                        volume_mounts=[
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="ipsum",
                                name="ipsa",
                            ),
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="labore",
                                name="dolorem",
                            ),
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="a",
                                name="qui",
                            ),
                        ],
                        working_dir="amet",
                    ),
                    shared.GoogleCloudRunV2Container(
                        args=[
                            "natus",
                            "velit",
                            "facere",
                        ],
                        command=[
                            "excepturi",
                        ],
                        env=[
                            shared.GoogleCloudRunV2EnvVar(
                                name="ut",
                                value="aliquam",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="esse",
                                        version="officiis",
                                    ),
                                ),
                            ),
                            shared.GoogleCloudRunV2EnvVar(
                                name="voluptas",
                                value="aut",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="voluptatibus",
                                        version="rerum",
                                    ),
                                ),
                            ),
                            shared.GoogleCloudRunV2EnvVar(
                                name="sit",
                                value="voluptatem",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="in",
                                        version="praesentium",
                                    ),
                                ),
                            ),
                        ],
                        image="voluptatibus",
                        liveness_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=7848741044556088901,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=5740604594018737973,
                                service="voluptatibus",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="ducimus",
                                        value="vero",
                                    ),
                                ],
                                path="voluptas",
                            ),
                            initial_delay_seconds=1555857133064102873,
                            period_seconds=4254463046476411089,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=6454490089023437258,
                            ),
                            timeout_seconds=6763923784019875330,
                        ),
                        name="reprehenderit",
                        ports=[
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=1048976124591050888,
                                name="et",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=2462742793766988067,
                                name="voluptas",
                            ),
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=8967251498900461870,
                                name="perspiciatis",
                            ),
                        ],
                        resources=shared.GoogleCloudRunV2ResourceRequirements(
                            cpu_idle=True,
                            limits={
                                "est": "debitis",
                                "qui": "sed",
                                "animi": "rerum",
                            },
                        ),
                        startup_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=303880974147249365,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=8625174258481621805,
                                service="qui",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="et",
                                        value="molestiae",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="perferendis",
                                        value="vel",
                                    ),
                                ],
                                path="omnis",
                            ),
                            initial_delay_seconds=6609732672764367963,
                            period_seconds=209738473558586616,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=4916990636842298801,
                            ),
                            timeout_seconds=8377897415669018801,
                        ),
                        volume_mounts=[
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="repudiandae",
                                name="similique",
                            ),
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="fuga",
                                name="distinctio",
                            ),
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="enim",
                                name="maxime",
                            ),
                        ],
                        working_dir="magni",
                    ),
                ],
                encryption_key="provident",
                execution_environment="EXECUTION_ENVIRONMENT_GEN1",
                max_retries=4830780723789546804,
                service_account="id",
                timeout="ea",
                volumes=[
                    shared.GoogleCloudRunV2Volume(
                        cloud_sql_instance=shared.GoogleCloudRunV2CloudSQLInstance(
                            instances=[
                                "similique",
                            ],
                        ),
                        name="quo",
                        secret=shared.GoogleCloudRunV2SecretVolumeSource(
                            default_mode=3008938046829853154,
                            items=[
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=6557505680466147414,
                                    path="quas",
                                    version="ea",
                                ),
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=8985521989084988232,
                                    path="excepturi",
                                    version="iusto",
                                ),
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=5393738924859449848,
                                    path="eveniet",
                                    version="blanditiis",
                                ),
                            ],
                            secret="asperiores",
                        ),
                    ),
                ],
                vpc_access=shared.GoogleCloudRunV2VpcAccess(
                    connector="veritatis",
                    egress="PRIVATE_RANGES_ONLY",
                ),
            ),
        ),
        terminal_condition=shared.GoogleCloudRunV2Condition(
            execution_reason="JOB_STATUS_SERVICE_POLLING_ERROR",
            last_transition_time="itaque",
            message="sed",
            reason="IMMEDIATE_RETRY",
            revision_reason="RECREATING",
            severity="ERROR",
            state="CONDITION_FAILED",
            type="aut",
        ),
    ),
)
    
res = s.projects.run_projects_locations_jobs_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `run_projects_locations_jobs_create` - Creates a Job.
* `run_projects_locations_jobs_executions_list` - Lists Executions from a Job.
* `run_projects_locations_jobs_executions_tasks_list` - Lists Tasks from an Execution of a Job.
* `run_projects_locations_jobs_list` - Lists Jobs.
* `run_projects_locations_jobs_run` - Triggers creation of a new Execution of this Job.
* `run_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `run_projects_locations_services_create` - Creates a new Service in a given project and location.
* `run_projects_locations_services_get_iam_policy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `run_projects_locations_services_list` - Lists Services.
* `run_projects_locations_services_patch` - Updates a Service.
* `run_projects_locations_services_revisions_delete` - Deletes a Revision.
* `run_projects_locations_services_revisions_get` - Gets information about a Revision.
* `run_projects_locations_services_revisions_list` - Lists Revisions from a given Service, or from a given location.
* `run_projects_locations_services_set_iam_policy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `run_projects_locations_services_test_iam_permissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
