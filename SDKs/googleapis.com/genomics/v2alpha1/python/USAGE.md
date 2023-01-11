<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GenomicsPipelinesRunRequest(
    security=operations.GenomicsPipelinesRunSecurity(
        option1=operations.GenomicsPipelinesRunSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.GenomicsPipelinesRunQueryParams(
        dollar_xgafv="2",
        access_token="id",
        alt="proto",
        callback="iste",
        fields="pariatur",
        key="eos",
        oauth_token="quia",
        pretty_print=False,
        quota_user="atque",
        upload_type="dolorem",
        upload_protocol="dolorem",
    ),
    request=shared.RunPipelineRequest(
        labels={
            "sit": "est",
            "alias": "qui",
            "quidem": "est",
        },
        pipeline=shared.Pipeline(
            actions=[
                shared.Action(
                    commands=[
                        "voluptate",
                        "consequatur",
                    ],
                    credentials=shared.Secret(
                        cipher_text="molestiae",
                        key_name="id",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="repudiandae",
                        key_name="laborum",
                    ),
                    entrypoint="ipsam",
                    environment={
                        "qui": "impedit",
                        "consequatur": "voluptatem",
                        "dolores": "molestias",
                    },
                    flags=[
                        "ALWAYS_RUN",
                        "BLOCK_EXTERNAL_NETWORK",
                    ],
                    image_uri="neque",
                    labels={
                        "velit": "magnam",
                    },
                    mounts=[
                        shared.Mount(
                            disk="provident",
                            path="ipsum",
                            read_only=True,
                        ),
                        shared.Mount(
                            disk="vel",
                            path="aperiam",
                            read_only=True,
                        ),
                    ],
                    name="ut",
                    pid_namespace="aliquid",
                    port_mappings={
                        "sapiente": 1143508241167913904,
                    },
                    timeout="et",
                ),
                shared.Action(
                    commands=[
                        "quia",
                        "laboriosam",
                    ],
                    credentials=shared.Secret(
                        cipher_text="aspernatur",
                        key_name="delectus",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="error",
                        key_name="quas",
                    ),
                    entrypoint="quidem",
                    environment={
                        "unde": "dicta",
                    },
                    flags=[
                        "IGNORE_EXIT_STATUS",
                        "RUN_IN_BACKGROUND",
                    ],
                    image_uri="quasi",
                    labels={
                        "suscipit": "tempore",
                        "corporis": "minima",
                    },
                    mounts=[
                        shared.Mount(
                            disk="veniam",
                            path="totam",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="aut",
                            path="distinctio",
                            read_only=True,
                        ),
                    ],
                    name="quod",
                    pid_namespace="aut",
                    port_mappings={
                        "unde": 4389851703793246450,
                        "labore": 4778500505820559968,
                        "quod": 6206679695015972069,
                    },
                    timeout="voluptatem",
                ),
                shared.Action(
                    commands=[
                        "impedit",
                    ],
                    credentials=shared.Secret(
                        cipher_text="ea",
                        key_name="qui",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="dicta",
                        key_name="cumque",
                    ),
                    entrypoint="ut",
                    environment={
                        "nihil": "sit",
                    },
                    flags=[
                        "ALWAYS_RUN",
                    ],
                    image_uri="id",
                    labels={
                        "magni": "alias",
                        "sint": "voluptates",
                    },
                    mounts=[
                        shared.Mount(
                            disk="doloribus",
                            path="hic",
                            read_only=True,
                        ),
                        shared.Mount(
                            disk="inventore",
                            path="est",
                            read_only=False,
                        ),
                        shared.Mount(
                            disk="unde",
                            path="quia",
                            read_only=True,
                        ),
                    ],
                    name="tempora",
                    pid_namespace="ipsa",
                    port_mappings={
                        "ducimus": 9021147083455187159,
                        "natus": 3200989815766506694,
                        "deserunt": 377739180183339068,
                    },
                    timeout="sit",
                ),
            ],
            encrypted_environment=shared.Secret(
                cipher_text="fuga",
                key_name="repellendus",
            ),
            environment={
                "quis": "itaque",
                "nostrum": "eaque",
                "nostrum": "cumque",
            },
            resources=shared.Resources(
                project_id="molestiae",
                regions=[
                    "dolorem",
                    "enim",
                ],
                virtual_machine=shared.VirtualMachine(
                    accelerators=[
                        shared.Accelerator(
                            count="mollitia",
                            type="ex",
                        ),
                    ],
                    boot_disk_size_gb=8990962201144210255,
                    boot_image="et",
                    cpu_platform="nihil",
                    disks=[
                        shared.Disk(
                            name="tempore",
                            size_gb=7881272142187045715,
                            source_image="nostrum",
                            type="et",
                        ),
                        shared.Disk(
                            name="est",
                            size_gb=8093939891763351998,
                            source_image="at",
                            type="corrupti",
                        ),
                        shared.Disk(
                            name="ipsam",
                            size_gb=3446404157605498765,
                            source_image="doloribus",
                            type="ab",
                        ),
                    ],
                    docker_cache_images=[
                        "iure",
                        "explicabo",
                        "et",
                    ],
                    enable_stackdriver_monitoring=False,
                    labels={
                        "quia": "est",
                    },
                    machine_type="perferendis",
                    network=shared.Network(
                        name="fugit",
                        subnetwork="earum",
                        use_private_address=False,
                    ),
                    nvidia_driver_version="magni",
                    preemptible=False,
                    reservation="eos",
                    service_account=shared.ServiceAccount(
                        email="repudiandae",
                        scopes=[
                            "placeat",
                            "vel",
                        ],
                    ),
                    volumes=[
                        shared.Volume(
                            existing_disk=shared.ExistingDisk(
                                disk="et",
                            ),
                            nfs_mount=shared.NfsMount(
                                target="est",
                            ),
                            persistent_disk=shared.PersistentDisk(
                                size_gb=7282752345265345301,
                                source_image="pariatur",
                                type="hic",
                            ),
                            volume="suscipit",
                        ),
                    ],
                ),
                zones=[
                    "est",
                ],
            ),
            timeout="cupiditate",
        ),
        pub_sub_topic="ut",
    ),
)
    
res = s.pipelines.genomics_pipelines_run(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->