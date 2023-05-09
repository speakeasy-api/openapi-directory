# projects

### Available Operations

* [batchProjectsLocationsJobsCreate](#batchprojectslocationsjobscreate) - Create a Job.
* [batchProjectsLocationsJobsList](#batchprojectslocationsjobslist) - List all Jobs for a project within a region.
* [batchProjectsLocationsJobsTaskGroupsTasksList](#batchprojectslocationsjobstaskgroupstaskslist) - List Tasks associated with a job.
* [batchProjectsLocationsList](#batchprojectslocationslist) - Lists information about the supported locations for this service.
* [batchProjectsLocationsOperationsCancel](#batchprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [batchProjectsLocationsOperationsDelete](#batchprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [batchProjectsLocationsOperationsGet](#batchprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [batchProjectsLocationsOperationsList](#batchprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [batchProjectsLocationsStateReport](#batchprojectslocationsstatereport) - Report agent's state, e.g. agent status and tasks information

## batchProjectsLocationsJobsCreate

Create a Job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.ActionCondition;
import org.openapis.openapi.models.shared.AllocationPolicy;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.Barrier;
import org.openapis.openapi.models.shared.ComputeResource;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.Gcs;
import org.openapis.openapi.models.shared.InstancePolicy;
import org.openapis.openapi.models.shared.InstancePolicyOrTemplate;
import org.openapis.openapi.models.shared.InstancePolicyProvisioningModelEnum;
import org.openapis.openapi.models.shared.InstanceStatus;
import org.openapis.openapi.models.shared.InstanceStatusProvisioningModelEnum;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobNotification;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.JobStatusStateEnum;
import org.openapis.openapi.models.shared.KMSEnvMap;
import org.openapis.openapi.models.shared.LifecyclePolicy;
import org.openapis.openapi.models.shared.LifecyclePolicyActionEnum;
import org.openapis.openapi.models.shared.LocationPolicy;
import org.openapis.openapi.models.shared.LogsPolicy;
import org.openapis.openapi.models.shared.LogsPolicyDestinationEnum;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.MessageNewJobStateEnum;
import org.openapis.openapi.models.shared.MessageNewTaskStateEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.Nfs;
import org.openapis.openapi.models.shared.PlacementPolicy;
import org.openapis.openapi.models.shared.Runnable;
import org.openapis.openapi.models.shared.Script;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.StatusEvent;
import org.openapis.openapi.models.shared.StatusEventTaskStateEnum;
import org.openapis.openapi.models.shared.TaskExecution;
import org.openapis.openapi.models.shared.TaskGroupInput;
import org.openapis.openapi.models.shared.TaskGroupStatus;
import org.openapis.openapi.models.shared.TaskSpec;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsJobsCreateRequest req = new BatchProjectsLocationsJobsCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new org.openapis.openapi.models.shared.InstancePolicyOrTemplate[]{{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "reiciendis";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "repudiandae";
                                            installGpuDrivers = false;
                                            type = "dicta";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "accusantium";
                                        image = "beatae";
                                        sizeGb = "dolores";
                                        snapshot = "enim";
                                        type = "laboriosam";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "a";
                                            existingDisk = "molestias";
                                            newDisk = new Disk() {{
                                                diskInterface = "magnam";
                                                image = "saepe";
                                                sizeGb = "consequuntur";
                                                snapshot = "occaecati";
                                                type = "officiis";
                                            }};
                                        }}),
                                    }};
                                    machineType = "perspiciatis";
                                    minCpuPlatform = "in";
                                    provisioningModel = InstancePolicyProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "eveniet";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "consequuntur";
                                            installGpuDrivers = false;
                                            type = "fugit";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "id";
                                            installGpuDrivers = false;
                                            type = "quis";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "reprehenderit";
                                            installGpuDrivers = false;
                                            type = "error";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "illo";
                                        image = "corporis";
                                        sizeGb = "quidem";
                                        snapshot = "eveniet";
                                        type = "non";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "doloremque";
                                            existingDisk = "iure";
                                            newDisk = new Disk() {{
                                                diskInterface = "ipsa";
                                                image = "totam";
                                                sizeGb = "quae";
                                                snapshot = "molestiae";
                                                type = "eveniet";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "qui";
                                            existingDisk = "cum";
                                            newDisk = new Disk() {{
                                                diskInterface = "iure";
                                                image = "necessitatibus";
                                                sizeGb = "ratione";
                                                snapshot = "laborum";
                                                type = "distinctio";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "voluptatum";
                                            existingDisk = "rem";
                                            newDisk = new Disk() {{
                                                diskInterface = "aliquam";
                                                image = "ad";
                                                sizeGb = "repellat";
                                                snapshot = "alias";
                                                type = "corporis";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "perspiciatis";
                                            existingDisk = "nihil";
                                            newDisk = new Disk() {{
                                                diskInterface = "mollitia";
                                                image = "voluptas";
                                                sizeGb = "alias";
                                                snapshot = "maiores";
                                                type = "reiciendis";
                                            }};
                                        }}),
                                    }};
                                    machineType = "dolores";
                                    minCpuPlatform = "id";
                                    provisioningModel = InstancePolicyProvisioningModelEnum.STANDARD;
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("dolorum", "nesciunt");
                            put("quae", "recusandae");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]{{
                                add("quaerat"),
                                add("molestiae"),
                                add("ex"),
                            }};
                        }};;
                        network = new NetworkPolicy() {{
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    network = "culpa";
                                    noExternalIpAddress = false;
                                    subnetwork = "adipisci";
                                }}),
                                add(new NetworkInterface() {{
                                    network = "debitis";
                                    noExternalIpAddress = false;
                                    subnetwork = "laudantium";
                                }}),
                            }};
                        }};;
                        placement = new PlacementPolicy() {{
                            collocation = "eum";
                            maxDistance = "nemo";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Jaclyn.Medhurst@hotmail.com";
                            scopes = new String[]{{
                                add("provident"),
                                add("aspernatur"),
                                add("ullam"),
                                add("quasi"),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nostrum", "mollitia");
                        put("provident", "possimus");
                        put("animi", "ex");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = LogsPolicyDestinationEnum.CLOUD_LOGGING;
                        logsPath = "accusantium";
                    }};;
                    notifications = new org.openapis.openapi.models.shared.JobNotification[]{{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.DELETION_IN_PROGRESS;
                                newTaskState = MessageNewTaskStateEnum.ASSIGNED;
                                type = MessageTypeEnum.JOB_STATE_CHANGED;
                            }};
                            pubsubTopic = "nam";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.DELETION_IN_PROGRESS;
                                newTaskState = MessageNewTaskStateEnum.FAILED;
                                type = MessageTypeEnum.TASK_STATE_CHANGED;
                            }};
                            pubsubTopic = "placeat";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.QUEUED;
                                newTaskState = MessageNewTaskStateEnum.UNEXECUTED;
                                type = MessageTypeEnum.JOB_STATE_CHANGED;
                            }};
                            pubsubTopic = "officiis";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.DELETION_IN_PROGRESS;
                                newTaskState = MessageNewTaskStateEnum.SUCCEEDED;
                                type = MessageTypeEnum.TYPE_UNSPECIFIED;
                            }};
                            pubsubTopic = "rerum";
                        }}),
                    }};
                    priority = "tempora";
                    status = new JobStatus() {{
                        runDuration = "quis";
                        state = JobStatusStateEnum.STATE_UNSPECIFIED;
                        statusEvents = new org.openapis.openapi.models.shared.StatusEvent[]{{
                            add(new StatusEvent() {{
                                description = "cumque";
                                eventTime = "quae";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 21688;
                                }};
                                taskState = StatusEventTaskStateEnum.PENDING;
                                type = "aspernatur";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.TaskGroupStatus>() {{
                            put("eius", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("at", "impedit");
                                    put("eos", "sapiente");
                                    put("eum", "dicta");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "beatae";
                                            image = "cupiditate";
                                            sizeGb = "provident";
                                            snapshot = "earum";
                                            type = "soluta";
                                        }};
                                        machineType = "hic";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PREEMPTIBLE;
                                        taskPack = "eaque";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "earum";
                                            image = "perspiciatis";
                                            sizeGb = "maiores";
                                            snapshot = "debitis";
                                            type = "aliquid";
                                        }};
                                        machineType = "porro";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.STANDARD;
                                        taskPack = "dolorem";
                                    }}),
                                }};
                            }});
                            put("fugit", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("fuga", "ratione");
                                    put("animi", "necessitatibus");
                                    put("nulla", "consequatur");
                                    put("quasi", "et");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "natus";
                                            image = "occaecati";
                                            sizeGb = "suscipit";
                                            snapshot = "adipisci";
                                            type = "quasi";
                                        }};
                                        machineType = "magni";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PREEMPTIBLE;
                                        taskPack = "nulla";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "necessitatibus";
                                            image = "ipsa";
                                            sizeGb = "tempora";
                                            snapshot = "nihil";
                                            type = "molestiae";
                                        }};
                                        machineType = "dicta";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.STANDARD;
                                        taskPack = "esse";
                                    }}),
                                }};
                            }});
                        }};
                    }};;
                    taskGroups = new org.openapis.openapi.models.shared.TaskGroupInput[]{{
                        add(new TaskGroupInput() {{
                            parallelism = "maiores";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "reiciendis";
                            taskCountPerNode = "vel";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "fugiat";
                                        keyName = "doloremque";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("odio", "tempora");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("ex", "consectetur");
                                        put("aliquid", "ipsa");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "laborum";
                                    cpuMilli = "sunt";
                                    memoryMib = "nostrum";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "fugiat";
                                        keyName = "expedita";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("officia", "suscipit");
                                        put("aliquid", "perferendis");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("voluptas", "iste");
                                        put("id", "ab");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("possimus", "voluptates");
                                    put("mollitia", "laborum");
                                    put("libero", "ad");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(833316),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.RETRY_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(405373),
                                                add(281153),
                                                add(321043),
                                                add(713927),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(737254),
                                                add(399660),
                                                add(109784),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 530860;
                                maxRunDuration = "omnis";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Dr. Rex Nicolas";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("fuga"),
                                            }};
                                            entrypoint = "pariatur";
                                            imageUri = "debitis";
                                            options = "voluptatem";
                                            password = "alias";
                                            username = "Kaelyn_Wehner";
                                            volumes = new String[]{{
                                                add("minus"),
                                                add("nemo"),
                                                add("asperiores"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "ratione";
                                                keyName = "ullam";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("illum", "totam");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "nam");
                                                put("ipsam", "culpa");
                                                put("dolor", "aliquam");
                                                put("inventore", "deleniti");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("tempora", "dolor");
                                        }};
                                        script = new Script() {{
                                            path = "consequatur";
                                            text = "architecto";
                                        }};
                                        timeout = "sit";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "fugit";
                                        gcs = new Gcs() {{
                                            remotePath = "ab";
                                        }};
                                        mountOptions = new String[]{{
                                            add("quae"),
                                            add("dolor"),
                                            add("fugiat"),
                                        }};
                                        mountPath = "ipsam";
                                        nfs = new Nfs() {{
                                            remotePath = "consequuntur";
                                            server = "ipsa";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "quas";
                                        gcs = new Gcs() {{
                                            remotePath = "eveniet";
                                        }};
                                        mountOptions = new String[]{{
                                            add("officiis"),
                                            add("esse"),
                                            add("necessitatibus"),
                                            add("sed"),
                                        }};
                                        mountPath = "veniam";
                                        nfs = new Nfs() {{
                                            remotePath = "nesciunt";
                                            server = "expedita";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "eum";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "vel";
                            taskCountPerNode = "voluptatum";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "exercitationem";
                                        keyName = "ab";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("autem", "nobis");
                                        put("laboriosam", "recusandae");
                                        put("consequuntur", "voluptatem");
                                        put("exercitationem", "necessitatibus");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("nisi", "at");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "vero";
                                        keyName = "est";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("sequi", "doloribus");
                                        put("repudiandae", "optio");
                                        put("occaecati", "nemo");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("blanditiis", "officia");
                                        put("voluptas", "numquam");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "nemo";
                                    cpuMilli = "quos";
                                    memoryMib = "eius";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "aspernatur";
                                        keyName = "ducimus";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("fuga", "laudantium");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("quasi", "rem");
                                        put("fugiat", "dicta");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("consequuntur", "consectetur");
                                    put("aperiam", "cupiditate");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.FAIL_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(608989),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(612867),
                                                add(170099),
                                                add(81369),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.FAIL_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(976802),
                                                add(719620),
                                                add(608593),
                                                add(966390),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(802692),
                                                add(300403),
                                                add(836364),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 549501;
                                maxRunDuration = "commodi";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Deanna Wehner";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("voluptatem"),
                                                add("ipsam"),
                                                add("vel"),
                                                add("alias"),
                                            }};
                                            entrypoint = "quasi";
                                            imageUri = "non";
                                            options = "maiores";
                                            password = "enim";
                                            username = "King.Stokes";
                                            volumes = new String[]{{
                                                add("reprehenderit"),
                                                add("est"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "quis";
                                                keyName = "sint";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("impedit", "hic");
                                                put("necessitatibus", "asperiores");
                                                put("ex", "voluptas");
                                                put("debitis", "delectus");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("minus", "fuga");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("consectetur", "velit");
                                            put("atque", "ipsum");
                                            put("impedit", "magni");
                                        }};
                                        script = new Script() {{
                                            path = "soluta";
                                            text = "repudiandae";
                                        }};
                                        timeout = "nam";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Glenda Kling";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("quo"),
                                            }};
                                            entrypoint = "deleniti";
                                            imageUri = "quibusdam";
                                            options = "iure";
                                            password = "odit";
                                            username = "Wellington84";
                                            volumes = new String[]{{
                                                add("facere"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "libero";
                                                keyName = "architecto";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("quia", "porro");
                                                put("aliquam", "velit");
                                                put("illo", "accusantium");
                                                put("vel", "ea");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("vero", "excepturi");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("velit", "ut");
                                            put("perspiciatis", "earum");
                                        }};
                                        script = new Script() {{
                                            path = "dicta";
                                            text = "impedit";
                                        }};
                                        timeout = "voluptatibus";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Bradford Abernathy";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("laborum"),
                                            }};
                                            entrypoint = "non";
                                            imageUri = "dolor";
                                            options = "iusto";
                                            password = "sit";
                                            username = "Aliyah_Adams";
                                            volumes = new String[]{{
                                                add("quidem"),
                                                add("voluptas"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "facilis";
                                                keyName = "placeat";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("expedita", "deleniti");
                                                put("a", "voluptate");
                                                put("ullam", "unde");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("animi", "impedit");
                                                put("ipsam", "corporis");
                                                put("est", "error");
                                                put("esse", "labore");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("vero", "consectetur");
                                        }};
                                        script = new Script() {{
                                            path = "vitae";
                                            text = "inventore";
                                        }};
                                        timeout = "dolorem";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Tina Moore";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("libero"),
                                                add("rem"),
                                                add("dolorum"),
                                            }};
                                            entrypoint = "odio";
                                            imageUri = "fugit";
                                            options = "alias";
                                            password = "magni";
                                            username = "Herminia26";
                                            volumes = new String[]{{
                                                add("exercitationem"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "itaque";
                                                keyName = "et";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("unde", "nulla");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("maxime", "quia");
                                                put("quia", "nostrum");
                                                put("omnis", "libero");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("id", "libero");
                                        }};
                                        script = new Script() {{
                                            path = "fugiat";
                                            text = "officia";
                                        }};
                                        timeout = "quos";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "sit";
                                        gcs = new Gcs() {{
                                            remotePath = "iusto";
                                        }};
                                        mountOptions = new String[]{{
                                            add("voluptates"),
                                        }};
                                        mountPath = "inventore";
                                        nfs = new Nfs() {{
                                            remotePath = "aperiam";
                                            server = "totam";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "dolore";
                                        gcs = new Gcs() {{
                                            remotePath = "eligendi";
                                        }};
                                        mountOptions = new String[]{{
                                            add("voluptatem"),
                                            add("autem"),
                                            add("esse"),
                                        }};
                                        mountPath = "dolores";
                                        nfs = new Nfs() {{
                                            remotePath = "assumenda";
                                            server = "beatae";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "est";
                                        gcs = new Gcs() {{
                                            remotePath = "facere";
                                        }};
                                        mountOptions = new String[]{{
                                            add("molestiae"),
                                            add("provident"),
                                            add("accusamus"),
                                        }};
                                        mountPath = "necessitatibus";
                                        nfs = new Nfs() {{
                                            remotePath = "tempore";
                                            server = "sint";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "ea";
                                        gcs = new Gcs() {{
                                            remotePath = "autem";
                                        }};
                                        mountOptions = new String[]{{
                                            add("rerum"),
                                            add("laudantium"),
                                        }};
                                        mountPath = "corporis";
                                        nfs = new Nfs() {{
                                            remotePath = "officiis";
                                            server = "voluptatibus";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "cum";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "at";
                            taskCountPerNode = "alias";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "quidem";
                                        keyName = "fuga";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("accusantium", "expedita");
                                        put("officiis", "eos");
                                        put("quibusdam", "odio");
                                        put("praesentium", "odit");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("corporis", "error");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "earum";
                                    cpuMilli = "adipisci";
                                    memoryMib = "recusandae";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "similique";
                                        keyName = "ut";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("quis", "beatae");
                                        put("unde", "molestiae");
                                        put("delectus", "cupiditate");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("numquam", "numquam");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("at", "officia");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.FAIL_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(359111),
                                                add(185518),
                                                add(708898),
                                                add(532669),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.RETRY_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(809594),
                                                add(316542),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 204072;
                                maxRunDuration = "in";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Emma Herzog";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("tempore"),
                                                add("aperiam"),
                                                add("libero"),
                                                add("ratione"),
                                            }};
                                            entrypoint = "labore";
                                            imageUri = "totam";
                                            options = "occaecati";
                                            password = "voluptas";
                                            username = "Orrin_Flatley34";
                                            volumes = new String[]{{
                                                add("impedit"),
                                                add("delectus"),
                                                add("tempore"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "vero";
                                                keyName = "odit";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("pariatur", "nemo");
                                                put("reprehenderit", "aperiam");
                                                put("odio", "minima");
                                                put("in", "ducimus");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("dolores", "error");
                                                put("veritatis", "ducimus");
                                                put("voluptate", "pariatur");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("similique", "optio");
                                            put("ex", "quaerat");
                                            put("commodi", "officiis");
                                            put("placeat", "quidem");
                                        }};
                                        script = new Script() {{
                                            path = "exercitationem";
                                            text = "quam";
                                        }};
                                        timeout = "dolorem";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Melissa Mayer";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("cum"),
                                                add("dicta"),
                                                add("earum"),
                                                add("veniam"),
                                            }};
                                            entrypoint = "animi";
                                            imageUri = "dolores";
                                            options = "nam";
                                            password = "dicta";
                                            username = "Casimer.Tromp49";
                                            volumes = new String[]{{
                                                add("veritatis"),
                                                add("quasi"),
                                                add("laboriosam"),
                                                add("pariatur"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "libero";
                                                keyName = "excepturi";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("nemo", "aliquam");
                                                put("nostrum", "doloribus");
                                                put("eligendi", "sint");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("hic", "animi");
                                                put("quas", "totam");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("odio", "eaque");
                                            put("saepe", "architecto");
                                            put("quos", "iste");
                                        }};
                                        script = new Script() {{
                                            path = "assumenda";
                                            text = "tempore";
                                        }};
                                        timeout = "libero";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Sharon Windler";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("adipisci"),
                                            }};
                                            entrypoint = "saepe";
                                            imageUri = "deserunt";
                                            options = "doloremque";
                                            password = "quis";
                                            username = "Estefania58";
                                            volumes = new String[]{{
                                                add("eligendi"),
                                                add("possimus"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "non";
                                                keyName = "magnam";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("sed", "asperiores");
                                                put("veniam", "consequuntur");
                                                put("facere", "laudantium");
                                                put("odit", "pariatur");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("exercitationem", "ab");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("facilis", "tempore");
                                        }};
                                        script = new Script() {{
                                            path = "nisi";
                                            text = "voluptatibus";
                                        }};
                                        timeout = "quaerat";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Preston Huel";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("minus"),
                                                add("facere"),
                                                add("facilis"),
                                            }};
                                            entrypoint = "ipsum";
                                            imageUri = "ad";
                                            options = "voluptatibus";
                                            password = "voluptatibus";
                                            username = "Carrie70";
                                            volumes = new String[]{{
                                                add("reprehenderit"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "nostrum";
                                                keyName = "neque";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("est", "rem");
                                                put("eligendi", "fugiat");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("officiis", "ducimus");
                                                put("dolor", "dicta");
                                                put("error", "porro");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("dignissimos", "esse");
                                        }};
                                        script = new Script() {{
                                            path = "fugiat";
                                            text = "ad";
                                        }};
                                        timeout = "aspernatur";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "delectus";
                                        gcs = new Gcs() {{
                                            remotePath = "iusto";
                                        }};
                                        mountOptions = new String[]{{
                                            add("libero"),
                                            add("illo"),
                                        }};
                                        mountPath = "ab";
                                        nfs = new Nfs() {{
                                            remotePath = "incidunt";
                                            server = "accusamus";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "saepe";
                                        gcs = new Gcs() {{
                                            remotePath = "tempore";
                                        }};
                                        mountOptions = new String[]{{
                                            add("eos"),
                                            add("reiciendis"),
                                        }};
                                        mountPath = "earum";
                                        nfs = new Nfs() {{
                                            remotePath = "reprehenderit";
                                            server = "praesentium";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "sequi";
                jobId = "nihil";
                key = "deleniti";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "assumenda";
                uploadType = "aliquam";
                uploadProtocol = "quisquam";
            }};            

            BatchProjectsLocationsJobsCreateResponse res = sdk.projects.batchProjectsLocationsJobsCreate(req, new BatchProjectsLocationsJobsCreateSecurity("provident", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsJobsList

List all Jobs for a project within a region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsListRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsListResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsJobsListRequest req = new BatchProjectsLocationsJobsListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "expedita";
                filter = "quas";
                key = "provident";
                oauthToken = "repudiandae";
                pageSize = 700045L;
                pageToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "vero";
                uploadProtocol = "similique";
            }};            

            BatchProjectsLocationsJobsListResponse res = sdk.projects.batchProjectsLocationsJobsList(req, new BatchProjectsLocationsJobsListSecurity("repellendus", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsJobsTaskGroupsTasksList

List Tasks associated with a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsTaskGroupsTasksListRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsTaskGroupsTasksListResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsTaskGroupsTasksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsJobsTaskGroupsTasksListRequest req = new BatchProjectsLocationsJobsTaskGroupsTasksListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "voluptatem";
                filter = "ad";
                key = "quae";
                oauthToken = "amet";
                pageSize = 849320L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "cum";
                uploadProtocol = "amet";
            }};            

            BatchProjectsLocationsJobsTaskGroupsTasksListResponse res = sdk.projects.batchProjectsLocationsJobsTaskGroupsTasksList(req, new BatchProjectsLocationsJobsTaskGroupsTasksListSecurity("quasi", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsListRequest req = new BatchProjectsLocationsListRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "provident";
                filter = "dolorum";
                key = "necessitatibus";
                oauthToken = "provident";
                pageSize = 920272L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "molestiae";
                uploadProtocol = "itaque";
            }};            

            BatchProjectsLocationsListResponse res = sdk.projects.batchProjectsLocationsList(req, new BatchProjectsLocationsListSecurity("facilis", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsOperationsCancelRequest req = new BatchProjectsLocationsOperationsCancelRequest("aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eos", "totam");
                    put("dicta", "voluptatem");
                    put("velit", "dolor");
                    put("sunt", "a");
                }};
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "beatae";
                key = "at";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "esse";
                uploadProtocol = "voluptatem";
            }};            

            BatchProjectsLocationsOperationsCancelResponse res = sdk.projects.batchProjectsLocationsOperationsCancel(req, new BatchProjectsLocationsOperationsCancelSecurity("perferendis", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsOperationsDeleteRequest req = new BatchProjectsLocationsOperationsDeleteRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "porro";
                key = "provident";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "eligendi";
                reason = "dignissimos";
                requestId = "consectetur";
                uploadType = "soluta";
                uploadProtocol = "natus";
            }};            

            BatchProjectsLocationsOperationsDeleteResponse res = sdk.projects.batchProjectsLocationsOperationsDelete(req, new BatchProjectsLocationsOperationsDeleteSecurity("temporibus", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsOperationsGetRequest req = new BatchProjectsLocationsOperationsGetRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "illum";
                key = "laborum";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "qui";
                uploadProtocol = "consectetur";
            }};            

            BatchProjectsLocationsOperationsGetResponse res = sdk.projects.batchProjectsLocationsOperationsGet(req, new BatchProjectsLocationsOperationsGetSecurity("repellat", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsOperationsListRequest req = new BatchProjectsLocationsOperationsListRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "illo";
                filter = "hic";
                key = "deserunt";
                oauthToken = "delectus";
                pageSize = 251212L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "exercitationem";
                uploadProtocol = "labore";
            }};            

            BatchProjectsLocationsOperationsListResponse res = sdk.projects.batchProjectsLocationsOperationsList(req, new BatchProjectsLocationsOperationsListSecurity("numquam", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchProjectsLocationsStateReport

Report agent's state, e.g. agent status and tasks information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchProjectsLocationsStateReportRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsStateReportResponse;
import org.openapis.openapi.models.operations.BatchProjectsLocationsStateReportSecurity;
import org.openapis.openapi.models.shared.AgentInfo;
import org.openapis.openapi.models.shared.AgentInfoStateEnum;
import org.openapis.openapi.models.shared.AgentMetadata;
import org.openapis.openapi.models.shared.AgentTaskInfo;
import org.openapis.openapi.models.shared.AgentTimingInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportAgentStateRequest;
import org.openapis.openapi.models.shared.StatusEvent;
import org.openapis.openapi.models.shared.StatusEventTaskStateEnum;
import org.openapis.openapi.models.shared.TaskExecution;
import org.openapis.openapi.models.shared.TaskStatus;
import org.openapis.openapi.models.shared.TaskStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsStateReportRequest req = new BatchProjectsLocationsStateReportRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                reportAgentStateRequest = new ReportAgentStateRequest() {{
                    agentInfo = new AgentInfo() {{
                        jobId = "explicabo";
                        reportTime = "accusamus";
                        state = AgentInfoStateEnum.AGENT_RUNNING;
                        taskGroupId = "aperiam";
                        tasks = new org.openapis.openapi.models.shared.AgentTaskInfo[]{{
                            add(new AgentTaskInfo() {{
                                runnable = "deleniti";
                                taskId = "enim";
                                taskStatus = new TaskStatus() {{
                                    state = TaskStatusStateEnum.RUNNING;
                                    statusEvents = new org.openapis.openapi.models.shared.StatusEvent[]{{
                                        add(new StatusEvent() {{
                                            description = "minima";
                                            eventTime = "libero";
                                            taskExecution = new TaskExecution() {{
                                                exitCode = 300189;
                                            }};
                                            taskState = StatusEventTaskStateEnum.STATE_UNSPECIFIED;
                                            type = "modi";
                                        }}),
                                        add(new StatusEvent() {{
                                            description = "eum";
                                            eventTime = "nesciunt";
                                            taskExecution = new TaskExecution() {{
                                                exitCode = 652125;
                                            }};
                                            taskState = StatusEventTaskStateEnum.RUNNING;
                                            type = "fugiat";
                                        }}),
                                        add(new StatusEvent() {{
                                            description = "nostrum";
                                            eventTime = "molestiae";
                                            taskExecution = new TaskExecution() {{
                                                exitCode = 330600;
                                            }};
                                            taskState = StatusEventTaskStateEnum.UNEXECUTED;
                                            type = "ab";
                                        }}),
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                    agentTimingInfo = new AgentTimingInfo() {{
                        agentStartupTime = "modi";
                        bootTime = "aut";
                        scriptStartupTime = "aut";
                    }};;
                    metadata = new AgentMetadata() {{
                        creationTime = "eveniet";
                        creator = "odio";
                        imageVersion = "commodi";
                        instance = "numquam";
                        instanceId = "dolorum";
                        instancePreemptionNoticeReceived = false;
                        osRelease = new java.util.HashMap<String, String>() {{
                            put("voluptate", "consectetur");
                            put("nesciunt", "quaerat");
                            put("itaque", "minus");
                            put("sunt", "distinctio");
                        }};
                        version = "iusto";
                        zone = "quas";
                    }};;
                }};;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "autem";
                key = "fuga";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "aut";
                uploadProtocol = "quos";
            }};            

            BatchProjectsLocationsStateReportResponse res = sdk.projects.batchProjectsLocationsStateReport(req, new BatchProjectsLocationsStateReportSecurity("laudantium", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reportAgentStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
