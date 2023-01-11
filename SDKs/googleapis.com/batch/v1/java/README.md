# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            BatchProjectsLocationsJobsCreateRequest req = new BatchProjectsLocationsJobsCreateRequest() {{
                security = new BatchProjectsLocationsJobsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BatchProjectsLocationsJobsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new BatchProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    jobId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new openapisdk.models.shared.InstancePolicyOrTemplate[]() {{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "ut";
                                policy = new InstancePolicy() {{
                                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                                        add(new Accelerator() {{
                                            count = "et";
                                            installGpuDrivers = false;
                                            type = "iste";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "vitae";
                                            installGpuDrivers = true;
                                            type = "dolores";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "illum";
                                            installGpuDrivers = true;
                                            type = "vel";
                                        }}),
                                    }};
                                    disks = new openapisdk.models.shared.AttachedDisk[]() {{
                                        add(new AttachedDisk() {{
                                            deviceName = "dolore";
                                            existingDisk = "id";
                                            newDisk = new Disk() {{
                                                diskInterface = "aspernatur";
                                                image = "accusantium";
                                                sizeGb = "totam";
                                                snapshot = "commodi";
                                                type = "quis";
                                            }};
                                        }}),
                                    }};
                                    machineType = "est";
                                    minCpuPlatform = "aut";
                                    provisioningModel = "SPOT";
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("voluptas", "omnis");
                            put("aut", "illo");
                            put("sed", "officiis");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]() {{
                                add("consectetur"),
                                add("nobis"),
                            }};
                        }};
                        network = new NetworkPolicy() {{
                            networkInterfaces = new openapisdk.models.shared.NetworkInterface[]() {{
                                add(new NetworkInterface() {{
                                    network = "qui";
                                    noExternalIpAddress = true;
                                    subnetwork = "at";
                                }}),
                            }};
                        }};
                        serviceAccount = new ServiceAccount() {{
                            email = "ipsum";
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("modi", "sint");
                        put("inventore", "ut");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = "PATH";
                        logsPath = "aut";
                    }};
                    notifications = new openapisdk.models.shared.JobNotification[]() {{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "FAILED";
                                newTaskState = "RUNNING";
                                type = "TASK_STATE_CHANGED";
                            }};
                            pubsubTopic = "dolor";
                        }}),
                    }};
                    priority = "beatae";
                    status = new JobStatus() {{
                        runDuration = "veritatis";
                        state = "FAILED";
                        statusEvents = new openapisdk.models.shared.StatusEvent[]() {{
                            add(new StatusEvent() {{
                                description = "omnis";
                                eventTime = "ipsum";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 1198006251912892506;
                                }};
                                type = "dolores";
                            }}),
                            add(new StatusEvent() {{
                                description = "placeat";
                                eventTime = "vel";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 2587000937929698613;
                                }};
                                type = "mollitia";
                            }}),
                            add(new StatusEvent() {{
                                description = "voluptas";
                                eventTime = "quam";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 7481608503761597087;
                                }};
                                type = "qui";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, openapisdk.models.shared.TaskGroupStatus>() {{
                            put("unde", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("autem", "qui");
                                    put("ut", "itaque");
                                }};
                                instances = new openapisdk.models.shared.InstanceStatus[]() {{
                                    add(new InstanceStatus() {{
                                        machineType = "neque";
                                        provisioningModel = "PROVISIONING_MODEL_UNSPECIFIED";
                                        taskPack = "et";
                                    }}),
                                }};
                            }});
                        }};
                    }};
                    taskGroups = new openapisdk.models.shared.TaskGroupInput[]() {{
                        add(new TaskGroupInput() {{
                            parallelism = "esse";
                            permissiveSsh = true;
                            requireHostsFile = false;
                            taskCount = "velit";
                            taskCountPerNode = "cumque";
                            taskEnvironments = new openapisdk.models.shared.Environment[]() {{
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("voluptates", "magni");
                                        put("et", "optio");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "qui";
                                    cpuMilli = "earum";
                                    memoryMib = "illo";
                                }};
                                environment = new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("ut", "consequatur");
                                        put("dolor", "commodi");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "consectetur");
                                }};
                                lifecyclePolicies = new openapisdk.models.shared.LifecyclePolicy[]() {{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(1937101031588528881),
                                                add(6604365855503062775),
                                                add(1836598054518427835),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 7540276489530073149;
                                maxRunDuration = "quas";
                                runnables = new openapisdk.models.shared.Runnable[]() {{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "ipsa";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("perferendis"),
                                            }};
                                            entrypoint = "atque";
                                            imageUri = "ratione";
                                            options = "quisquam";
                                            password = "explicabo";
                                            username = "ea";
                                            volumes = new String[]() {{
                                                add("eum"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("et", "rerum");
                                                put("reiciendis", "quis");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "minima";
                                            text = "necessitatibus";
                                        }};
                                        timeout = "est";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "labore";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("ad"),
                                                add("expedita"),
                                            }};
                                            entrypoint = "vel";
                                            imageUri = "qui";
                                            options = "modi";
                                            password = "nihil";
                                            username = "tempora";
                                            volumes = new String[]() {{
                                                add("eaque"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("sit", "autem");
                                                put("quis", "vel");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "placeat";
                                            text = "qui";
                                        }};
                                        timeout = "nisi";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "porro";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = true;
                                            commands = new String[]() {{
                                                add("accusamus"),
                                            }};
                                            entrypoint = "numquam";
                                            imageUri = "laborum";
                                            options = "rerum";
                                            password = "ut";
                                            username = "laborum";
                                            volumes = new String[]() {{
                                                add("quis"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("soluta", "aperiam");
                                                put("consequuntur", "excepturi");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "inventore";
                                            text = "delectus";
                                        }};
                                        timeout = "ipsa";
                                    }}),
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        deviceName = "animi";
                                        gcs = new Gcs() {{
                                            remotePath = "ut";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("fuga"),
                                        }};
                                        mountPath = "sed";
                                        nfs = new Nfs() {{
                                            remotePath = "sed";
                                            server = "et";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "consequuntur";
                                        gcs = new Gcs() {{
                                            remotePath = "non";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("provident"),
                                            add("molestiae"),
                                            add("pariatur"),
                                        }};
                                        mountPath = "quasi";
                                        nfs = new Nfs() {{
                                            remotePath = "corrupti";
                                            server = "enim";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "qui";
                            permissiveSsh = true;
                            requireHostsFile = false;
                            taskCount = "modi";
                            taskCountPerNode = "neque";
                            taskEnvironments = new openapisdk.models.shared.Environment[]() {{
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("et", "est");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("ex", "voluptatem");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "velit");
                                        put("quae", "est");
                                        put("ut", "necessitatibus");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "in";
                                    cpuMilli = "possimus";
                                    memoryMib = "voluptatem";
                                }};
                                environment = new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("doloribus", "saepe");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("earum", "et");
                                    put("ut", "asperiores");
                                }};
                                lifecyclePolicies = new openapisdk.models.shared.LifecyclePolicy[]() {{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(6787227741588449494),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 4883506937319508494;
                                maxRunDuration = "nihil";
                                runnables = new openapisdk.models.shared.Runnable[]() {{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "non";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("possimus"),
                                                add("illo"),
                                                add("qui"),
                                            }};
                                            entrypoint = "quia";
                                            imageUri = "ipsam";
                                            options = "ducimus";
                                            password = "enim";
                                            username = "blanditiis";
                                            volumes = new String[]() {{
                                                add("delectus"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("dolore", "repellat");
                                                put("velit", "officia");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "sunt";
                                            text = "voluptas";
                                        }};
                                        timeout = "amet";
                                    }}),
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        deviceName = "a";
                                        gcs = new Gcs() {{
                                            remotePath = "qui";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("autem"),
                                        }};
                                        mountPath = "corporis";
                                        nfs = new Nfs() {{
                                            remotePath = "dicta";
                                            server = "rem";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "doloremque";
                                        gcs = new Gcs() {{
                                            remotePath = "quae";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("recusandae"),
                                            add("qui"),
                                        }};
                                        mountPath = "minus";
                                        nfs = new Nfs() {{
                                            remotePath = "et";
                                            server = "rerum";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "ut";
                                        gcs = new Gcs() {{
                                            remotePath = "rem";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("et"),
                                            add("reiciendis"),
                                            add("aspernatur"),
                                        }};
                                        mountPath = "praesentium";
                                        nfs = new Nfs() {{
                                            remotePath = "porro";
                                            server = "nihil";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "adipisci";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "accusantium";
                            taskCountPerNode = "atque";
                            taskEnvironments = new openapisdk.models.shared.Environment[]() {{
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("quidem", "est");
                                        put("quo", "vero");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("totam", "deserunt");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("repellat", "beatae");
                                        put("omnis", "totam");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "aut";
                                    cpuMilli = "et";
                                    memoryMib = "magni";
                                }};
                                environment = new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("et", "culpa");
                                        put("repellendus", "voluptas");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("veniam", "architecto");
                                    put("molestias", "rerum");
                                }};
                                lifecyclePolicies = new openapisdk.models.shared.LifecyclePolicy[]() {{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(1215184329252422444),
                                                add(4178331056796501958),
                                                add(8590975497400104807),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(5127216006209335150),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(5850174490929081658),
                                                add(434570727381690637),
                                                add(2506834319279501248),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 8019821597217977465;
                                maxRunDuration = "et";
                                runnables = new openapisdk.models.shared.Runnable[]() {{
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "ipsum";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("et"),
                                                add("vero"),
                                            }};
                                            entrypoint = "voluptatem";
                                            imageUri = "ex";
                                            options = "magni";
                                            password = "vero";
                                            username = "distinctio";
                                            volumes = new String[]() {{
                                                add("ea"),
                                                add("non"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("nam", "beatae");
                                                put("quae", "qui");
                                                put("magni", "minus");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "aut";
                                            text = "neque";
                                        }};
                                        timeout = "iusto";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "debitis";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = true;
                                            commands = new String[]() {{
                                                add("enim"),
                                                add("ut"),
                                            }};
                                            entrypoint = "non";
                                            imageUri = "nihil";
                                            options = "laborum";
                                            password = "recusandae";
                                            username = "nihil";
                                            volumes = new String[]() {{
                                                add("iste"),
                                                add("perferendis"),
                                                add("id"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("hic", "voluptatem");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "libero";
                                            text = "qui";
                                        }};
                                        timeout = "omnis";
                                    }}),
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        deviceName = "nostrum";
                                        gcs = new Gcs() {{
                                            remotePath = "non";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("repellat"),
                                            add("quo"),
                                        }};
                                        mountPath = "dolorum";
                                        nfs = new Nfs() {{
                                            remotePath = "laboriosam";
                                            server = "velit";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "ea";
                                        gcs = new Gcs() {{
                                            remotePath = "tempore";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("aut"),
                                        }};
                                        mountPath = "tempora";
                                        nfs = new Nfs() {{
                                            remotePath = "aliquid";
                                            server = "mollitia";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};
            }};

            BatchProjectsLocationsJobsCreateResponse res = sdk.projects.batchProjectsLocationsJobsCreate(req);

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `batchProjectsLocationsJobsCreate` - Create a Job.
* `batchProjectsLocationsJobsList` - List all Jobs for a project within a region.
* `batchProjectsLocationsJobsTaskGroupsTasksList` - List Tasks associated with a job.
* `batchProjectsLocationsList` - Lists information about the supported locations for this service.
* `batchProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `batchProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `batchProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `batchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `batchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
* `batchProjectsLocationsTasksGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `batchProjectsLocationsTasksSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `batchProjectsLocationsTasksTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
