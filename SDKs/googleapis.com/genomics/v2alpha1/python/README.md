# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/genomics/v2alpha1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GenomicsPipelinesRunRequest(
    dollar_xgafv="2",
    run_pipeline_request=shared.RunPipelineRequest(
        labels={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        pipeline=shared.Pipeline(
            actions=[
                shared.Action(
                    commands=[
                        "deserunt",
                        "suscipit",
                        "iure",
                    ],
                    credentials=shared.Secret(
                        cipher_text="magnam",
                        key_name="debitis",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="ipsa",
                        key_name="delectus",
                    ),
                    entrypoint="tempora",
                    environment={
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    flags=[
                        "PUBLISH_EXPOSED_PORTS",
                        "ALWAYS_RUN",
                    ],
                    image_uri="recusandae",
                    labels={
                        "ab": "quis",
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                        "repellendus": "sapiente",
                    },
                    mounts=[
                        shared.Mount(
                            disk="odit",
                            path="at",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="at",
                            path="maiores",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="molestiae",
                            path="quod",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="quod",
                            path="esse",
                            read_only=False,
                        ),
                    ],
                    name="totam",
                    pid_namespace="porro",
                    port_mappings={
                        "dicta": 720633,
                        "officia": 582020,
                        "fugit": 537373,
                    },
                    timeout="hic",
                ),
                shared.Action(
                    commands=[
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    ],
                    credentials=shared.Secret(
                        cipher_text="modi",
                        key_name="qui",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="impedit",
                        key_name="cum",
                    ),
                    entrypoint="esse",
                    environment={
                        "excepturi": "aspernatur",
                    },
                    flags=[
                        "RUN_IN_BACKGROUND",
                    ],
                    image_uri="natus",
                    labels={
                        "iste": "dolor",
                    },
                    mounts=[
                        shared.Mount(
                            disk="laboriosam",
                            path="hic",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="saepe",
                            path="fuga",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="in",
                            path="corporis",
                            read_only=False,
                        ),
                    ],
                    name="iste",
                    pid_namespace="iure",
                    port_mappings={
                        "quidem": 99280,
                        "ipsa": 969810,
                        "est": 653140,
                        "laborum": 170909,
                    },
                    timeout="dolorem",
                ),
            ],
            encrypted_environment=shared.Secret(
                cipher_text="corporis",
                key_name="explicabo",
            ),
            environment={
                "enim": "omnis",
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            resources=shared.Resources(
                project_id="doloribus",
                regions=[
                    "architecto",
                    "mollitia",
                    "dolorem",
                    "culpa",
                ],
                virtual_machine=shared.VirtualMachine(
                    accelerators=[
                        shared.Accelerator(
                            count="repellat",
                            type="mollitia",
                        ),
                    ],
                    boot_disk_size_gb=581850,
                    boot_image="numquam",
                    cpu_platform="commodi",
                    disks=[
                        shared.Disk(
                            name="molestiae",
                            size_gb=244425,
                            source_image="error",
                            type="quia",
                        ),
                        shared.Disk(
                            name="quis",
                            size_gb=110375,
                            source_image="laborum",
                            type="animi",
                        ),
                    ],
                    docker_cache_images=[
                        "odit",
                        "quo",
                    ],
                    enable_stackdriver_monitoring=False,
                    labels={
                        "tenetur": "ipsam",
                    },
                    machine_type="id",
                    network=shared.Network(
                        name="possimus",
                        subnetwork="aut",
                        use_private_address=False,
                    ),
                    nvidia_driver_version="quasi",
                    preemptible=False,
                    reservation="error",
                    service_account=shared.ServiceAccount(
                        email="Margie_Boyer87@hotmail.com",
                        scopes=[
                            "praesentium",
                            "voluptatibus",
                        ],
                    ),
                    volumes=[
                        shared.Volume(
                            existing_disk=shared.ExistingDisk(
                                disk="omnis",
                            ),
                            nfs_mount=shared.NFSMount(
                                target="voluptate",
                            ),
                            persistent_disk=shared.PersistentDisk(
                                size_gb=739264,
                                source_image="perferendis",
                                type="doloremque",
                            ),
                            volume="reprehenderit",
                        ),
                    ],
                ),
                zones=[
                    "maiores",
                    "dicta",
                ],
            ),
            timeout="corporis",
        ),
        pub_sub_topic="dolore",
    ),
    access_token="iusto",
    alt="json",
    callback="harum",
    fields_="enim",
    key="accusamus",
    oauth_token="commodi",
    pretty_print=False,
    quota_user="repudiandae",
    upload_type="quae",
    upload_protocol="ipsum",
)
    
res = s.pipelines.genomics_pipelines_run(req, operations.GenomicsPipelinesRunSecurity(
    option1=operations.GenomicsPipelinesRunSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pipelines

* `genomics_pipelines_run` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `genomics_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `genomics_projects_operations_list` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `genomics_projects_workers_check_in` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `genomics_workers_check_in` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
