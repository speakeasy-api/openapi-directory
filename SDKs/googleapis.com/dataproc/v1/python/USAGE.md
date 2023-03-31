<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DataprocProjectsLocationsBatchesCreateRequest(
    dollar_xgafv="2",
    batch_input=shared.BatchInput(
        environment_config=shared.EnvironmentConfig(
            execution_config=shared.ExecutionConfig(
                idle_ttl="provident",
                kms_key="distinctio",
                network_tags=[
                    "unde",
                    "nulla",
                    "corrupti",
                    "illum",
                ],
                network_uri="vel",
                service_account="error",
                staging_bucket="deserunt",
                subnetwork_uri="suscipit",
                ttl="iure",
            ),
            peripherals_config=shared.PeripheralsConfig(
                metastore_service="magnam",
                spark_history_server_config=shared.SparkHistoryServerConfig(
                    dataproc_cluster="debitis",
                ),
            ),
        ),
        labels={
            "delectus": "tempora",
        },
        pyspark_batch=shared.PySparkBatch(
            archive_uris=[
                "molestiae",
                "minus",
            ],
            args=[
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            ],
            file_uris=[
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            ],
            jar_file_uris=[
                "perferendis",
                "ipsam",
                "repellendus",
            ],
            main_python_file_uri="sapiente",
            python_file_uris=[
                "odit",
                "at",
                "at",
                "maiores",
            ],
        ),
        runtime_config=shared.RuntimeConfig(
            container_image="molestiae",
            properties={
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
            version="occaecati",
        ),
        runtime_info=shared.RuntimeInfoInput(
            approximate_usage=shared.UsageMetrics(
                milli_dcu_seconds="fugit",
                shuffle_storage_gb_seconds="deleniti",
            ),
            current_usage=shared.UsageSnapshot(
                milli_dcu="hic",
                shuffle_storage_gb="optio",
                snapshot_time="totam",
            ),
        ),
        spark_batch=shared.SparkBatch(
            archive_uris=[
                "commodi",
            ],
            args=[
                "modi",
                "qui",
            ],
            file_uris=[
                "cum",
                "esse",
                "ipsum",
                "excepturi",
            ],
            jar_file_uris=[
                "perferendis",
            ],
            main_class="ad",
            main_jar_file_uri="natus",
        ),
        spark_r_batch=shared.SparkRBatch(
            archive_uris=[
                "iste",
            ],
            args=[
                "natus",
            ],
            file_uris=[
                "hic",
                "saepe",
            ],
            main_r_file_uri="fuga",
        ),
        spark_sql_batch=shared.SparkSQLBatch(
            jar_file_uris=[
                "corporis",
                "iste",
            ],
            query_file_uri="iure",
            query_variables={
                "quidem": "architecto",
                "ipsa": "reiciendis",
                "est": "mollitia",
                "laborum": "dolores",
            },
        ),
    ),
    access_token="dolorem",
    alt="media",
    batch_id="explicabo",
    callback="nobis",
    fields_="enim",
    key="omnis",
    oauth_token="nemo",
    parent="minima",
    pretty_print=False,
    quota_user="excepturi",
    request_id="accusantium",
    upload_type="iure",
    upload_protocol="culpa",
)
    
res = s.projects.dataproc_projects_locations_batches_create(req, operations.DataprocProjectsLocationsBatchesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->