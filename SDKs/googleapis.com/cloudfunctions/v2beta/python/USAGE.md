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
        parent="et",
    ),
    query_params=operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="nesciunt",
        alt="proto",
        callback="pariatur",
        fields="odio",
        function_id="occaecati",
        key="eveniet",
        oauth_token="et",
        pretty_print=False,
        quota_user="nostrum",
        upload_type="quaerat",
        upload_protocol="voluptas",
    ),
    request=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="recusandae",
            docker_registry="ARTIFACT_REGISTRY",
            docker_repository="eum",
            entry_point="esse",
            environment_variables={
                "pariatur": "omnis",
                "perspiciatis": "et",
                "impedit": "rem",
            },
            runtime="quam",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="maiores",
                    commit_sha="ut",
                    dir="et",
                    invert_regex=True,
                    project_id="aperiam",
                    repo_name="mollitia",
                    tag_name="officia",
                ),
                storage_source=shared.StorageSource(
                    bucket="quaerat",
                    generation="nam",
                    object="modi",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="officia",
                    commit_sha="in",
                    dir="commodi",
                    invert_regex=False,
                    project_id="laudantium",
                    repo_name="vel",
                    tag_name="reprehenderit",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="nihil",
                    generation="nam",
                    object="est",
                ),
            ),
            worker_pool="dolorum",
        ),
        description="voluptatem",
        environment="GEN_2",
        event_trigger=shared.EventTriggerInput(
            channel="magni",
            event_filters=[
                shared.EventFilter(
                    attribute="quibusdam",
                    operator="dolore",
                    value="eveniet",
                ),
                shared.EventFilter(
                    attribute="pariatur",
                    operator="quisquam",
                    value="sapiente",
                ),
            ],
            event_type="et",
            pubsub_topic="ut",
            retry_policy="RETRY_POLICY_RETRY",
            service_account_email="magnam",
            trigger_region="at",
        ),
        labels={
            "cupiditate": "ut",
            "sint": "minus",
            "fugiat": "quae",
        },
        name="rerum",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=False,
            available_cpu="quo",
            available_memory="nemo",
            environment_variables={
                "atque": "impedit",
            },
            ingress_settings="INGRESS_SETTINGS_UNSPECIFIED",
            max_instance_count=792269188445923293,
            max_instance_request_concurrency=7397228704190247381,
            min_instance_count=1487699710755746120,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="earum",
                    project_id="in",
                    secret="molestias",
                    version="delectus",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="omnis",
                    project_id="ipsa",
                    secret="ut",
                    versions=[
                        shared.SecretVersion(
                            path="culpa",
                            version="ut",
                        ),
                    ],
                ),
                shared.SecretVolume(
                    mount_path="velit",
                    project_id="laudantium",
                    secret="rem",
                    versions=[
                        shared.SecretVersion(
                            path="assumenda",
                            version="facere",
                        ),
                    ],
                ),
            ],
            security_level="SECURITY_LEVEL_UNSPECIFIED",
            service_account_email="in",
            timeout_seconds=5600512735016871670,
            vpc_connector="eum",
            vpc_connector_egress_settings="PRIVATE_RANGES_ONLY",
        ),
    ),
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->