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