# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/dataproc/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `dataproc_projects_locations_batches_create` - Creates a batch workload that executes asynchronously.
* `dataproc_projects_locations_batches_list` - Lists batch workloads.
* `dataproc_projects_regions_autoscaling_policies_create` - Creates new autoscaling policy.
* `dataproc_projects_regions_autoscaling_policies_list` - Lists autoscaling policies in the project.
* `dataproc_projects_regions_clusters_create` - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataproc_projects_regions_clusters_delete` - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataproc_projects_regions_clusters_diagnose` - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* `dataproc_projects_regions_clusters_get` - Gets the resource representation for a cluster in a project.
* `dataproc_projects_regions_clusters_inject_credentials` - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* `dataproc_projects_regions_clusters_list` - Lists all regions/{region}/clusters in a project alphabetically.
* `dataproc_projects_regions_clusters_node_groups_create` - Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* `dataproc_projects_regions_clusters_node_groups_resize` - Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
* `dataproc_projects_regions_clusters_patch` - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* `dataproc_projects_regions_clusters_repair` - Repairs a cluster.
* `dataproc_projects_regions_clusters_start` - Starts a cluster in a project.
* `dataproc_projects_regions_clusters_stop` - Stops a cluster in a project.
* `dataproc_projects_regions_jobs_cancel` - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* `dataproc_projects_regions_jobs_delete` - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* `dataproc_projects_regions_jobs_get` - Gets the resource representation for a job in a project.
* `dataproc_projects_regions_jobs_list` - Lists regions/{region}/jobs in a project.
* `dataproc_projects_regions_jobs_patch` - Updates a job in a project.
* `dataproc_projects_regions_jobs_submit` - Submits a job to a cluster.
* `dataproc_projects_regions_jobs_submit_as_operation` - Submits job to a cluster.
* `dataproc_projects_regions_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataproc_projects_regions_workflow_templates_create` - Creates new workflow template.
* `dataproc_projects_regions_workflow_templates_delete` - Deletes a workflow template. It does not cancel in-progress workflows.
* `dataproc_projects_regions_workflow_templates_get` - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* `dataproc_projects_regions_workflow_templates_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataproc_projects_regions_workflow_templates_instantiate` - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataproc_projects_regions_workflow_templates_instantiate_inline` - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataproc_projects_regions_workflow_templates_list` - Lists workflows that match the specified filter in the request.
* `dataproc_projects_regions_workflow_templates_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataproc_projects_regions_workflow_templates_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataproc_projects_regions_workflow_templates_update` - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
