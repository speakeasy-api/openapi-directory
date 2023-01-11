<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DataprocProjectsLocationsBatchesCreateRequest(
    security=operations.DataprocProjectsLocationsBatchesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DataprocProjectsLocationsBatchesCreatePathParams(
        parent="dolorem",
    ),
    query_params=operations.DataprocProjectsLocationsBatchesCreateQueryParams(
        dollar_xgafv="2",
        access_token="adipisci",
        alt="json",
        batch_id="officia",
        callback="eligendi",
        fields="doloremque",
        key="et",
        oauth_token="perspiciatis",
        pretty_print=True,
        quota_user="esse",
        request_id="est",
        upload_type="accusamus",
        upload_protocol="quibusdam",
    ),
    request=shared.BatchInput(
        environment_config=shared.EnvironmentConfig(
            execution_config=shared.ExecutionConfig(
                idle_ttl="reiciendis",
                kms_key="esse",
                network_tags=[
                    "expedita",
                    "nulla",
                ],
                network_uri="quaerat",
                service_account="odit",
                subnetwork_uri="veritatis",
            ),
            peripherals_config=shared.PeripheralsConfig(
                metastore_service="iusto",
                spark_history_server_config=shared.SparkHistoryServerConfig(
                    dataproc_cluster="deserunt",
                ),
            ),
        ),
        labels={
            "unde": "architecto",
            "qui": "dolor",
        },
        pyspark_batch=shared.PySparkBatch(
            archive_uris=[
                "voluptatem",
            ],
            args=[
                "aut",
                "qui",
            ],
            file_uris=[
                "rerum",
            ],
            jar_file_uris=[
                "molestias",
                "et",
                "officia",
            ],
            main_python_file_uri="ipsum",
            python_file_uris=[
                "velit",
            ],
        ),
        runtime_config=shared.RuntimeConfig(
            container_image="sed",
            properties={
                "nisi": "eos",
                "in": "expedita",
            },
            version="quisquam",
        ),
        runtime_info=shared.RuntimeInfoInput(
            approximate_usage=shared.UsageMetrics(
                milli_dcu_seconds="consequatur",
                shuffle_storage_gb_seconds="aperiam",
            ),
        ),
        spark_batch=shared.SparkBatch(
            archive_uris=[
                "consequatur",
                "alias",
            ],
            args=[
                "quia",
                "quibusdam",
                "error",
            ],
            file_uris=[
                "architecto",
                "hic",
                "quia",
            ],
            jar_file_uris=[
                "voluptatem",
                "recusandae",
            ],
            main_class="a",
            main_jar_file_uri="ipsam",
        ),
        spark_r_batch=shared.SparkRBatch(
            archive_uris=[
                "temporibus",
                "qui",
            ],
            args=[
                "ex",
            ],
            file_uris=[
                "sed",
            ],
            main_r_file_uri="dolorum",
        ),
        spark_sql_batch=shared.SparkSQLBatch(
            jar_file_uris=[
                "ut",
                "corporis",
            ],
            query_file_uri="nesciunt",
            query_variables={
                "in": "consequatur",
                "dolores": "a",
            },
        ),
    ),
)
    
res = s.projects.dataproc_projects_locations_batches_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->