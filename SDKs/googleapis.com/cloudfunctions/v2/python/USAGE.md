<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest(
    security=operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams(
        parent="iure",
    ),
    query_params=operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams(
        dollar_xgafv="1",
        access_token="facilis",
        alt="media",
        callback="perferendis",
        fields="et",
        function_id="tenetur",
        key="laudantium",
        oauth_token="tenetur",
        pretty_print=True,
        quota_user="corrupti",
        upload_type="vel",
        upload_protocol="non",
    ),
    request=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="cumque",
            docker_registry="ARTIFACT_REGISTRY",
            docker_repository="unde",
            entry_point="eum",
            environment_variables={
                "fuga": "non",
                "reprehenderit": "debitis",
            },
            runtime="iste",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="voluptatum",
                    commit_sha="numquam",
                    dir="accusamus",
                    invert_regex=False,
                    project_id="sed",
                    repo_name="rerum",
                    tag_name="exercitationem",
                ),
                storage_source=shared.StorageSource(
                    bucket="corrupti",
                    generation="architecto",
                    object="nihil",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="aut",
                    commit_sha="eaque",
                    dir="natus",
                    invert_regex=False,
                    project_id="qui",
                    repo_name="commodi",
                    tag_name="hic",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="nemo",
                    generation="in",
                    object="enim",
                ),
            ),
            worker_pool="voluptates",
        ),
        description="tempore",
        environment="ENVIRONMENT_UNSPECIFIED",
        event_trigger=shared.EventTriggerInput(
            channel="labore",
            event_filters=[
                shared.EventFilter(
                    attribute="cupiditate",
                    operator="voluptatem",
                    value="doloribus",
                ),
            ],
            event_type="non",
            pubsub_topic="mollitia",
            retry_policy="RETRY_POLICY_DO_NOT_RETRY",
            service_account_email="est",
            trigger_region="aspernatur",
        ),
        labels={
            "molestiae": "soluta",
            "cumque": "aut",
        },
        name="autem",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=True,
            available_cpu="quas",
            available_memory="omnis",
            environment_variables={
                "est": "quia",
                "quis": "et",
                "consequatur": "et",
            },
            ingress_settings="ALLOW_INTERNAL_ONLY",
            max_instance_count=3404160775247558679,
            max_instance_request_concurrency=3565360713834926833,
            min_instance_count=6878051429988505760,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="minus",
                    project_id="voluptas",
                    secret="molestiae",
                    version="earum",
                ),
                shared.SecretEnvVar(
                    key="atque",
                    project_id="vel",
                    secret="vero",
                    version="qui",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="laudantium",
                    project_id="est",
                    secret="et",
                    versions=[
                        shared.SecretVersion(
                            path="tenetur",
                            version="omnis",
                        ),
                    ],
                ),
                shared.SecretVolume(
                    mount_path="excepturi",
                    project_id="voluptas",
                    secret="ut",
                    versions=[
                        shared.SecretVersion(
                            path="asperiores",
                            version="eum",
                        ),
                        shared.SecretVersion(
                            path="soluta",
                            version="mollitia",
                        ),
                        shared.SecretVersion(
                            path="tenetur",
                            version="sit",
                        ),
                    ],
                ),
            ],
            security_level="SECURE_OPTIONAL",
            service_account_email="earum",
            timeout_seconds=8992597555331895288,
            vpc_connector="sed",
            vpc_connector_egress_settings="VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
        ),
    ),
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->