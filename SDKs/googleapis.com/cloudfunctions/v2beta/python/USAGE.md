<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest(
    dollar_xgafv="2",
    function_input=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="provident",
            docker_registry="ARTIFACT_REGISTRY",
            docker_repository="quibusdam",
            entry_point="unde",
            environment_variables={
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            runtime="debitis",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="ipsa",
                    commit_sha="delectus",
                    dir="tempora",
                    invert_regex=False,
                    project_id="suscipit",
                    repo_name="molestiae",
                    tag_name="minus",
                ),
                storage_source=shared.StorageSource(
                    bucket="placeat",
                    generation="voluptatum",
                    object="iusto",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="excepturi",
                    commit_sha="nisi",
                    dir="recusandae",
                    invert_regex=False,
                    project_id="temporibus",
                    repo_name="ab",
                    tag_name="quis",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="veritatis",
                    generation="deserunt",
                    object="perferendis",
                ),
            ),
            worker_pool="ipsam",
        ),
        description="repellendus",
        environment="GEN_2",
        event_trigger=shared.EventTriggerInput(
            channel="quo",
            event_filters=[
                shared.EventFilter(
                    attribute="at",
                    operator="at",
                    value="maiores",
                ),
            ],
            event_type="molestiae",
            pubsub_topic="quod",
            retry_policy="RETRY_POLICY_RETRY",
            service_account_email="esse",
            trigger_region="totam",
        ),
        kms_key_name="porro",
        labels={
            "dicta": "nam",
            "officia": "occaecati",
            "fugit": "deleniti",
        },
        name="hic",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=False,
            available_cpu="optio",
            available_memory="totam",
            environment_variables={
                "commodi": "molestiae",
            },
            ingress_settings="ALLOW_ALL",
            max_instance_count=186332,
            max_instance_request_concurrency=774234,
            min_instance_count=736918,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="ipsum",
                    project_id="excepturi",
                    secret="aspernatur",
                    version="perferendis",
                ),
                shared.SecretEnvVar(
                    key="ad",
                    project_id="natus",
                    secret="sed",
                    version="iste",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="natus",
                    project_id="laboriosam",
                    secret="hic",
                    versions=[
                        shared.SecretVersion(
                            path="fuga",
                            version="in",
                        ),
                        shared.SecretVersion(
                            path="corporis",
                            version="iste",
                        ),
                        shared.SecretVersion(
                            path="iure",
                            version="saepe",
                        ),
                        shared.SecretVersion(
                            path="quidem",
                            version="architecto",
                        ),
                    ],
                ),
            ],
            security_level="SECURITY_LEVEL_UNSPECIFIED",
            service_account_email="reiciendis",
            timeout_seconds=666767,
            vpc_connector="mollitia",
            vpc_connector_egress_settings="ALL_TRAFFIC",
        ),
    ),
    access_token="dolores",
    alt="json",
    callback="corporis",
    fields_="explicabo",
    function_id="nobis",
    key="enim",
    oauth_token="omnis",
    parent="nemo",
    pretty_print=False,
    quota_user="minima",
    upload_type="excepturi",
    upload_protocol="accusantium",
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req, operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->