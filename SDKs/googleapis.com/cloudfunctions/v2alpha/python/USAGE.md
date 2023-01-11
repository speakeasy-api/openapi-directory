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
        parent="voluptatem",
    ),
    query_params=operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="vel",
        fields="sequi",
        function_id="repellendus",
        key="non",
        oauth_token="cum",
        pretty_print=True,
        quota_user="earum",
        upload_type="consectetur",
        upload_protocol="vero",
    ),
    request=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="perspiciatis",
            docker_registry="CONTAINER_REGISTRY",
            docker_repository="facilis",
            entry_point="id",
            environment_variables={
                "quam": "odio",
                "excepturi": "aspernatur",
                "ducimus": "ut",
            },
            runtime="expedita",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="sequi",
                    commit_sha="enim",
                    dir="explicabo",
                    invert_regex=True,
                    project_id="deleniti",
                    repo_name="consequatur",
                    tag_name="facere",
                ),
                storage_source=shared.StorageSource(
                    bucket="animi",
                    generation="ducimus",
                    object="sapiente",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="ipsum",
                    commit_sha="atque",
                    dir="nisi",
                    invert_regex=False,
                    project_id="autem",
                    repo_name="ipsam",
                    tag_name="rerum",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="reiciendis",
                    generation="velit",
                    object="et",
                ),
            ),
            worker_pool="ullam",
        ),
        description="impedit",
        environment="GEN_1",
        event_trigger=shared.EventTriggerInput(
            channel="est",
            event_filters=[
                shared.EventFilter(
                    attribute="asperiores",
                    operator="alias",
                    value="necessitatibus",
                ),
            ],
            event_type="et",
            pubsub_topic="perspiciatis",
            retry_policy="RETRY_POLICY_UNSPECIFIED",
            service_account_email="non",
            trigger_region="voluptas",
        ),
        labels={
            "aspernatur": "facilis",
            "et": "doloribus",
        },
        name="excepturi",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=True,
            available_cpu="soluta",
            available_memory="similique",
            environment_variables={
                "animi": "quisquam",
                "enim": "incidunt",
            },
            ingress_settings="ALLOW_ALL",
            max_instance_count=7689307747697478495,
            max_instance_request_concurrency=6614803028872981226,
            min_instance_count=6072307249965416689,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="hic",
                    project_id="recusandae",
                    secret="numquam",
                    version="omnis",
                ),
                shared.SecretEnvVar(
                    key="necessitatibus",
                    project_id="culpa",
                    secret="cum",
                    version="fugiat",
                ),
                shared.SecretEnvVar(
                    key="ut",
                    project_id="incidunt",
                    secret="sit",
                    version="sint",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="vero",
                    project_id="voluptatum",
                    secret="quo",
                    versions=[
                        shared.SecretVersion(
                            path="ex",
                            version="similique",
                        ),
                        shared.SecretVersion(
                            path="aut",
                            version="aspernatur",
                        ),
                    ],
                ),
            ],
            security_level="SECURE_OPTIONAL",
            service_account_email="voluptas",
            timeout_seconds=2562921366260505538,
            vpc_connector="molestias",
            vpc_connector_egress_settings="ALL_TRAFFIC",
        ),
    ),
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->