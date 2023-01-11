# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BatchProjectsLocationsJobsCreateRequest(
    security=operations.BatchProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BatchProjectsLocationsJobsCreatePathParams(
        parent="nostrum",
    ),
    query_params=operations.BatchProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="1",
        access_token="tempora",
        alt="media",
        callback="deserunt",
        fields="nihil",
        job_id="provident",
        key="magni",
        oauth_token="et",
        pretty_print=True,
        quota_user="accusamus",
        request_id="asperiores",
        upload_type="ea",
        upload_protocol="veritatis",
    ),
    request=shared.JobInput(
        allocation_policy=shared.AllocationPolicy(
            instances=[
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=True,
                    instance_template="molestiae",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="vel",
                                install_gpu_drivers=True,
                                type="qui",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="nulla",
                                existing_disk="modi",
                                new_disk=shared.Disk(
                                    disk_interface="dignissimos",
                                    image="beatae",
                                    size_gb="esse",
                                    snapshot="et",
                                    type="eum",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="aspernatur",
                                existing_disk="molestiae",
                                new_disk=shared.Disk(
                                    disk_interface="minima",
                                    image="modi",
                                    size_gb="quo",
                                    snapshot="molestiae",
                                    type="porro",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="provident",
                                existing_disk="sequi",
                                new_disk=shared.Disk(
                                    disk_interface="molestiae",
                                    image="dolor",
                                    size_gb="pariatur",
                                    snapshot="hic",
                                    type="sed",
                                ),
                            ),
                        ],
                        machine_type="dolores",
                        min_cpu_platform="quae",
                        provisioning_model="STANDARD",
                    ),
                ),
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=True,
                    instance_template="reprehenderit",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="nesciunt",
                                install_gpu_drivers=True,
                                type="dolores",
                            ),
                            shared.Accelerator(
                                count="dicta",
                                install_gpu_drivers=True,
                                type="et",
                            ),
                            shared.Accelerator(
                                count="nisi",
                                install_gpu_drivers=True,
                                type="totam",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="ea",
                                existing_disk="ipsa",
                                new_disk=shared.Disk(
                                    disk_interface="sed",
                                    image="voluptatem",
                                    size_gb="repellendus",
                                    snapshot="beatae",
                                    type="cumque",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="pariatur",
                                existing_disk="possimus",
                                new_disk=shared.Disk(
                                    disk_interface="aperiam",
                                    image="accusantium",
                                    size_gb="et",
                                    snapshot="mollitia",
                                    type="voluptatum",
                                ),
                            ),
                        ],
                        machine_type="nisi",
                        min_cpu_platform="pariatur",
                        provisioning_model="STANDARD",
                    ),
                ),
                shared.InstancePolicyOrTemplate(
                    install_gpu_drivers=False,
                    instance_template="earum",
                    policy=shared.InstancePolicy(
                        accelerators=[
                            shared.Accelerator(
                                count="ab",
                                install_gpu_drivers=True,
                                type="earum",
                            ),
                        ],
                        disks=[
                            shared.AttachedDisk(
                                device_name="neque",
                                existing_disk="ullam",
                                new_disk=shared.Disk(
                                    disk_interface="adipisci",
                                    image="quia",
                                    size_gb="soluta",
                                    snapshot="nulla",
                                    type="aut",
                                ),
                            ),
                            shared.AttachedDisk(
                                device_name="voluptatibus",
                                existing_disk="omnis",
                                new_disk=shared.Disk(
                                    disk_interface="deleniti",
                                    image="libero",
                                    size_gb="dolorum",
                                    snapshot="voluptatem",
                                    type="impedit",
                                ),
                            ),
                        ],
                        machine_type="ipsa",
                        min_cpu_platform="qui",
                        provisioning_model="PREEMPTIBLE",
                    ),
                ),
            ],
            labels={
                "iste": "fugiat",
                "minus": "laborum",
                "eos": "illo",
            },
            location=shared.LocationPolicy(
                allowed_locations=[
                    "debitis",
                ],
            ),
            network=shared.NetworkPolicy(
                network_interfaces=[
                    shared.NetworkInterface(
                        network="dolorem",
                        no_external_ip_address=False,
                        subnetwork="et",
                    ),
                    shared.NetworkInterface(
                        network="ad",
                        no_external_ip_address=True,
                        subnetwork="et",
                    ),
                ],
            ),
            service_account=shared.ServiceAccount(
                email="beatae",
            ),
        ),
        labels={
            "ea": "libero",
        },
        logs_policy=shared.LogsPolicy(
            destination="DESTINATION_UNSPECIFIED",
            logs_path="eos",
        ),
        notifications=[
            shared.JobNotification(
                message=shared.Message(
                    new_job_state="DELETION_IN_PROGRESS",
                    new_task_state="RUNNING",
                    type="JOB_STATE_CHANGED",
                ),
                pubsub_topic="voluptas",
            ),
        ],
        priority="sapiente",
        status=shared.JobStatus(
            run_duration="iure",
            state="STATE_UNSPECIFIED",
            status_events=[
                shared.StatusEvent(
                    description="quod",
                    event_time="soluta",
                    task_execution=shared.TaskExecution(
                        exit_code=4831452067150929985,
                    ),
                    type="qui",
                ),
                shared.StatusEvent(
                    description="doloremque",
                    event_time="nisi",
                    task_execution=shared.TaskExecution(
                        exit_code=2332523520286397549,
                    ),
                    type="omnis",
                ),
                shared.StatusEvent(
                    description="debitis",
                    event_time="voluptatem",
                    task_execution=shared.TaskExecution(
                        exit_code=1264816207080619033,
                    ),
                    type="voluptatem",
                ),
            ],
            task_groups={
                "laboriosam": shared.TaskGroupStatus(
                    counts={
                        "aut": "aut",
                        "libero": "dolorem",
                    },
                    instances=[
                        shared.InstanceStatus(
                            machine_type="sunt",
                            provisioning_model="SPOT",
                            task_pack="autem",
                        ),
                    ],
                ),
                "commodi": shared.TaskGroupStatus(
                    counts={
                        "incidunt": "dolorum",
                    },
                    instances=[
                        shared.InstanceStatus(
                            machine_type="molestiae",
                            provisioning_model="PREEMPTIBLE",
                            task_pack="tempora",
                        ),
                    ],
                ),
                "distinctio": shared.TaskGroupStatus(
                    counts={
                        "rem": "est",
                    },
                    instances=[
                        shared.InstanceStatus(
                            machine_type="qui",
                            provisioning_model="STANDARD",
                            task_pack="et",
                        ),
                    ],
                ),
            },
        ),
        task_groups=[
            shared.TaskGroupInput(
                parallelism="et",
                permissive_ssh=True,
                require_hosts_file=True,
                task_count="ex",
                task_count_per_node="sint",
                task_environments=[
                    shared.Environment(
                        variables={
                            "voluptatem": "sapiente",
                        },
                    ),
                    shared.Environment(
                        variables={
                            "est": "sit",
                            "repellat": "earum",
                            "in": "ut",
                        },
                    ),
                    shared.Environment(
                        variables={
                            "laboriosam": "numquam",
                            "aperiam": "veniam",
                            "in": "voluptatem",
                        },
                    ),
                ],
                task_spec=shared.TaskSpec(
                    compute_resource=shared.ComputeResource(
                        boot_disk_mib="ut",
                        cpu_milli="debitis",
                        memory_mib="id",
                    ),
                    environment=shared.Environment(
                        variables={
                            "ut": "fuga",
                            "velit": "ullam",
                        },
                    ),
                    environments={
                        "suscipit": "molestiae",
                    },
                    lifecycle_policies=[
                        shared.LifecyclePolicy(
                            action="RETRY_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    3820347514480084000,
                                    3344327154756972185,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="FAIL_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    6937037417593652038,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="RETRY_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    5933233700664786384,
                                    5035964688981552535,
                                ],
                            ),
                        ),
                    ],
                    max_retry_count=8505737205951363350,
                    max_run_duration="voluptates",
                    runnables=[
                        shared.Runnable(
                            always_run=True,
                            background=True,
                            barrier=shared.Barrier(
                                name="et",
                            ),
                            container=shared.Container(
                                block_external_network=False,
                                commands=[
                                    "corporis",
                                    "ea",
                                ],
                                entrypoint="adipisci",
                                image_uri="sit",
                                options="sunt",
                                password="numquam",
                                username="et",
                                volumes=[
                                    "consequatur",
                                ],
                            ),
                            environment=shared.Environment(
                                variables={
                                    "delectus": "vel",
                                },
                            ),
                            ignore_exit_status=True,
                            script=shared.Script(
                                path="impedit",
                                text="animi",
                            ),
                            timeout="sint",
                        ),
                    ],
                    volumes=[
                        shared.Volume(
                            device_name="dolores",
                            gcs=shared.Gcs(
                                remote_path="sed",
                            ),
                            mount_options=[
                                "quidem",
                            ],
                            mount_path="reiciendis",
                            nfs=shared.Nfs(
                                remote_path="velit",
                                server="ut",
                            ),
                        ),
                        shared.Volume(
                            device_name="cumque",
                            gcs=shared.Gcs(
                                remote_path="dolor",
                            ),
                            mount_options=[
                                "dolor",
                                "et",
                                "officiis",
                            ],
                            mount_path="quo",
                            nfs=shared.Nfs(
                                remote_path="aut",
                                server="et",
                            ),
                        ),
                        shared.Volume(
                            device_name="dolorem",
                            gcs=shared.Gcs(
                                remote_path="aut",
                            ),
                            mount_options=[
                                "iste",
                                "autem",
                                "odio",
                            ],
                            mount_path="soluta",
                            nfs=shared.Nfs(
                                remote_path="porro",
                                server="omnis",
                            ),
                        ),
                    ],
                ),
            ),
            shared.TaskGroupInput(
                parallelism="et",
                permissive_ssh=False,
                require_hosts_file=False,
                task_count="reiciendis",
                task_count_per_node="et",
                task_environments=[
                    shared.Environment(
                        variables={
                            "sit": "assumenda",
                        },
                    ),
                ],
                task_spec=shared.TaskSpec(
                    compute_resource=shared.ComputeResource(
                        boot_disk_mib="minus",
                        cpu_milli="voluptatibus",
                        memory_mib="aut",
                    ),
                    environment=shared.Environment(
                        variables={
                            "doloribus": "est",
                            "praesentium": "distinctio",
                        },
                    ),
                    environments={
                        "mollitia": "iure",
                        "nulla": "officiis",
                    },
                    lifecycle_policies=[
                        shared.LifecyclePolicy(
                            action="RETRY_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    8490979167950514602,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="FAIL_TASK",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    5974282707100491270,
                                    2339931246899802995,
                                ],
                            ),
                        ),
                        shared.LifecyclePolicy(
                            action="ACTION_UNSPECIFIED",
                            action_condition=shared.ActionCondition(
                                exit_codes=[
                                    4894825553613291534,
                                    8207957692048737165,
                                    9158996368869269916,
                                ],
                            ),
                        ),
                    ],
                    max_retry_count=4686911943399463022,
                    max_run_duration="vero",
                    runnables=[
                        shared.Runnable(
                            always_run=True,
                            background=False,
                            barrier=shared.Barrier(
                                name="odio",
                            ),
                            container=shared.Container(
                                block_external_network=False,
                                commands=[
                                    "enim",
                                ],
                                entrypoint="dolores",
                                image_uri="et",
                                options="natus",
                                password="sunt",
                                username="ut",
                                volumes=[
                                    "iure",
                                    "neque",
                                    "quia",
                                ],
                            ),
                            environment=shared.Environment(
                                variables={
                                    "officiis": "suscipit",
                                },
                            ),
                            ignore_exit_status=True,
                            script=shared.Script(
                                path="aut",
                                text="qui",
                            ),
                            timeout="nostrum",
                        ),
                    ],
                    volumes=[
                        shared.Volume(
                            device_name="dolorem",
                            gcs=shared.Gcs(
                                remote_path="recusandae",
                            ),
                            mount_options=[
                                "ad",
                                "ipsum",
                                "labore",
                            ],
                            mount_path="omnis",
                            nfs=shared.Nfs(
                                remote_path="sequi",
                                server="velit",
                            ),
                        ),
                    ],
                ),
            ),
        ],
    ),
)
    
res = s.projects.batch_projects_locations_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `batch_projects_locations_jobs_create` - Create a Job.
* `batch_projects_locations_jobs_list` - List all Jobs for a project within a region.
* `batch_projects_locations_jobs_task_groups_tasks_list` - List Tasks associated with a job.
* `batch_projects_locations_list` - Lists information about the supported locations for this service.
* `batch_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `batch_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `batch_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `batch_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `batch_projects_locations_state_report` - Report agent's state, e.g. agent status and tasks information
* `batch_projects_locations_tasks_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `batch_projects_locations_tasks_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `batch_projects_locations_tasks_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
