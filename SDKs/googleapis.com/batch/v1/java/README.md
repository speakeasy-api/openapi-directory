# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreatePathParams;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateQueryParams;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.TaskGroupInput;
import org.openapis.openapi.models.shared.TaskSpec;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.Nfs;
import org.openapis.openapi.models.shared.Gcs;
import org.openapis.openapi.models.shared.Runnable;
import org.openapis.openapi.models.shared.Script;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.KMSEnvMap;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.Barrier;
import org.openapis.openapi.models.shared.LifecyclePolicyActionEnum;
import org.openapis.openapi.models.shared.LifecyclePolicy;
import org.openapis.openapi.models.shared.ActionCondition;
import org.openapis.openapi.models.shared.ComputeResource;
import org.openapis.openapi.models.shared.JobStatusStateEnum;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.TaskGroupStatus;
import org.openapis.openapi.models.shared.InstanceStatusProvisioningModelEnum;
import org.openapis.openapi.models.shared.InstanceStatus;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.StatusEventTaskStateEnum;
import org.openapis.openapi.models.shared.StatusEvent;
import org.openapis.openapi.models.shared.TaskExecution;
import org.openapis.openapi.models.shared.JobNotification;
import org.openapis.openapi.models.shared.MessageNewJobStateEnum;
import org.openapis.openapi.models.shared.MessageNewTaskStateEnum;
import org.openapis.openapi.models.shared.MessageTypeEnum;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.LogsPolicyDestinationEnum;
import org.openapis.openapi.models.shared.LogsPolicy;
import org.openapis.openapi.models.shared.AllocationPolicy;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.NetworkPolicy;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.LocationPolicy;
import org.openapis.openapi.models.shared.InstancePolicyOrTemplate;
import org.openapis.openapi.models.shared.InstancePolicyProvisioningModelEnum;
import org.openapis.openapi.models.shared.InstancePolicy;
import org.openapis.openapi.models.shared.AttachedDisk;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new BatchProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    jobId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new org.openapis.openapi.models.shared.InstancePolicyOrTemplate[]{{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "debitis";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "delectus";
                                            installGpuDrivers = false;
                                            type = "tempora";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "suscipit";
                                        image = "molestiae";
                                        sizeGb = "minus";
                                        snapshot = "placeat";
                                        type = "voluptatum";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "excepturi";
                                            existingDisk = "nisi";
                                            newDisk = new Disk() {{
                                                diskInterface = "recusandae";
                                                image = "temporibus";
                                                sizeGb = "ab";
                                                snapshot = "quis";
                                                type = "veritatis";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "deserunt";
                                            existingDisk = "perferendis";
                                            newDisk = new Disk() {{
                                                diskInterface = "ipsam";
                                                image = "repellendus";
                                                sizeGb = "sapiente";
                                                snapshot = "quo";
                                                type = "odit";
                                            }};
                                        }}),
                                    }};
                                    machineType = "at";
                                    minCpuPlatform = "at";
                                    provisioningModel = "PREEMPTIBLE";
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "molestiae";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "quod";
                                            installGpuDrivers = false;
                                            type = "esse";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "totam";
                                            installGpuDrivers = false;
                                            type = "porro";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "dolorum";
                                            installGpuDrivers = false;
                                            type = "dicta";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "nam";
                                            installGpuDrivers = false;
                                            type = "officia";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "occaecati";
                                        image = "fugit";
                                        sizeGb = "deleniti";
                                        snapshot = "hic";
                                        type = "optio";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "beatae";
                                            existingDisk = "commodi";
                                            newDisk = new Disk() {{
                                                diskInterface = "molestiae";
                                                image = "modi";
                                                sizeGb = "qui";
                                                snapshot = "impedit";
                                                type = "cum";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "esse";
                                            existingDisk = "ipsum";
                                            newDisk = new Disk() {{
                                                diskInterface = "excepturi";
                                                image = "aspernatur";
                                                sizeGb = "perferendis";
                                                snapshot = "ad";
                                                type = "natus";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "sed";
                                            existingDisk = "iste";
                                            newDisk = new Disk() {{
                                                diskInterface = "dolor";
                                                image = "natus";
                                                sizeGb = "laboriosam";
                                                snapshot = "hic";
                                                type = "saepe";
                                            }};
                                        }}),
                                    }};
                                    machineType = "fuga";
                                    minCpuPlatform = "in";
                                    provisioningModel = "STANDARD";
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("iure", "saepe");
                            put("quidem", "architecto");
                            put("ipsa", "reiciendis");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]{{
                                add("mollitia"),
                                add("laborum"),
                                add("dolores"),
                            }};
                        }};
                        network = new NetworkPolicy() {{
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    network = "corporis";
                                    noExternalIpAddress = false;
                                    subnetwork = "explicabo";
                                }}),
                            }};
                        }};
                        serviceAccount = new ServiceAccount() {{
                            email = "Emerald.Mohr@hotmail.com";
                            scopes = new String[]{{
                                add("accusantium"),
                                add("iure"),
                                add("culpa"),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "architecto");
                        put("mollitia", "dolorem");
                        put("culpa", "consequuntur");
                        put("repellat", "mollitia");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = "CLOUD_LOGGING";
                        logsPath = "numquam";
                    }};
                    notifications = new org.openapis.openapi.models.shared.JobNotification[]{{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "RUNNING";
                                newTaskState = "ASSIGNED";
                                type = "TYPE_UNSPECIFIED";
                            }};
                            pubsubTopic = "error";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "QUEUED";
                                newTaskState = "ASSIGNED";
                                type = "TYPE_UNSPECIFIED";
                            }};
                            pubsubTopic = "laborum";
                        }}),
                    }};
                    priority = "animi";
                    status = new JobStatus() {{
                        runDuration = "enim";
                        state = "STATE_UNSPECIFIED";
                        statusEvents = new org.openapis.openapi.models.shared.StatusEvent[]{{
                            add(new StatusEvent() {{
                                description = "sequi";
                                eventTime = "tenetur";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 368725;
                                }};
                                taskState = "RUNNING";
                                type = "possimus";
                            }}),
                            add(new StatusEvent() {{
                                description = "aut";
                                eventTime = "quasi";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 622846;
                                }};
                                taskState = "SUCCEEDED";
                                type = "laborum";
                            }}),
                            add(new StatusEvent() {{
                                description = "quasi";
                                eventTime = "reiciendis";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 976460;
                                }};
                                taskState = "SUCCEEDED";
                                type = "nihil";
                            }}),
                            add(new StatusEvent() {{
                                description = "praesentium";
                                eventTime = "voluptatibus";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 55714;
                                }};
                                taskState = "RUNNING";
                                type = "voluptate";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.TaskGroupStatus>() {{
                            put("perferendis", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "ut");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "dicta";
                                            image = "corporis";
                                            sizeGb = "dolore";
                                            snapshot = "iusto";
                                            type = "dicta";
                                        }};
                                        machineType = "harum";
                                        provisioningModel = "STANDARD";
                                        taskPack = "accusamus";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "commodi";
                                            image = "repudiandae";
                                            sizeGb = "quae";
                                            snapshot = "ipsum";
                                            type = "quidem";
                                        }};
                                        machineType = "molestias";
                                        provisioningModel = "SPOT";
                                        taskPack = "pariatur";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "modi";
                                            image = "praesentium";
                                            sizeGb = "rem";
                                            snapshot = "voluptates";
                                            type = "quasi";
                                        }};
                                        machineType = "repudiandae";
                                        provisioningModel = "SPOT";
                                        taskPack = "veritatis";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "itaque";
                                            image = "incidunt";
                                            sizeGb = "enim";
                                            snapshot = "consequatur";
                                            type = "est";
                                        }};
                                        machineType = "quibusdam";
                                        provisioningModel = "PROVISIONING_MODEL_UNSPECIFIED";
                                        taskPack = "deserunt";
                                    }}),
                                }};
                            }});
                            put("distinctio", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("labore", "modi");
                                    put("qui", "aliquid");
                                    put("cupiditate", "quos");
                                    put("perferendis", "magni");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "ipsam";
                                            image = "alias";
                                            sizeGb = "fugit";
                                            snapshot = "dolorum";
                                            type = "excepturi";
                                        }};
                                        machineType = "tempora";
                                        provisioningModel = "SPOT";
                                        taskPack = "tempore";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "labore";
                                            image = "delectus";
                                            sizeGb = "eum";
                                            snapshot = "non";
                                            type = "eligendi";
                                        }};
                                        machineType = "sint";
                                        provisioningModel = "STANDARD";
                                        taskPack = "provident";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "necessitatibus";
                                            image = "sint";
                                            sizeGb = "officia";
                                            snapshot = "dolor";
                                            type = "debitis";
                                        }};
                                        machineType = "a";
                                        provisioningModel = "SPOT";
                                        taskPack = "in";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "in";
                                            image = "illum";
                                            sizeGb = "maiores";
                                            snapshot = "rerum";
                                            type = "dicta";
                                        }};
                                        machineType = "magnam";
                                        provisioningModel = "PREEMPTIBLE";
                                        taskPack = "facere";
                                    }}),
                                }};
                            }});
                            put("ea", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("laborum", "accusamus");
                                    put("non", "occaecati");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "accusamus";
                                            image = "delectus";
                                            sizeGb = "quidem";
                                            snapshot = "provident";
                                            type = "nam";
                                        }};
                                        machineType = "id";
                                        provisioningModel = "SPOT";
                                        taskPack = "deleniti";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "sapiente";
                                            image = "amet";
                                            sizeGb = "deserunt";
                                            snapshot = "nisi";
                                            type = "vel";
                                        }};
                                        machineType = "natus";
                                        provisioningModel = "SPOT";
                                        taskPack = "molestiae";
                                    }}),
                                }};
                            }});
                        }};
                    }};
                    taskGroups = new org.openapis.openapi.models.shared.TaskGroupInput[]{{
                        add(new TaskGroupInput() {{
                            parallelism = "nihil";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "magnam";
                            taskCountPerNode = "distinctio";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "labore";
                                        keyName = "labore";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("natus", "nobis");
                                        put("eum", "vero");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("architecto", "magnam");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "et";
                                        keyName = "excepturi";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("provident", "quos");
                                        put("sint", "accusantium");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "mollitia");
                                        put("ad", "eum");
                                        put("dolor", "necessitatibus");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "odit";
                                        keyName = "nemo";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("iure", "doloribus");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("eius", "maxime");
                                        put("deleniti", "facilis");
                                        put("in", "architecto");
                                        put("architecto", "repudiandae");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "ullam";
                                    cpuMilli = "expedita";
                                    memoryMib = "nihil";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "repellat";
                                        keyName = "quibusdam";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("saepe", "pariatur");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("consequuntur", "praesentium");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("magni", "sunt");
                                    put("quo", "illum");
                                    put("pariatur", "maxime");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = "RETRY_TASK";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(407183),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(982575),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 697429;
                                maxRunDuration = "ipsam";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "autem";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("eaque"),
                                                add("pariatur"),
                                                add("nemo"),
                                            }};
                                            entrypoint = "voluptatibus";
                                            imageUri = "perferendis";
                                            options = "fugiat";
                                            password = "amet";
                                            username = "Adolf_Runolfsdottir";
                                            volumes = new String[]{{
                                                add("nobis"),
                                                add("dolores"),
                                                add("quis"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "totam";
                                                keyName = "dignissimos";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("quis", "nesciunt");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("perferendis", "dolores");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "minus";
                                            text = "quam";
                                        }};
                                        timeout = "dolor";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "vero";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("hic"),
                                                add("recusandae"),
                                            }};
                                            entrypoint = "omnis";
                                            imageUri = "facilis";
                                            options = "perspiciatis";
                                            password = "voluptatem";
                                            username = "Ottilie_Cruickshank";
                                            volumes = new String[]{{
                                                add("occaecati"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "rerum";
                                                keyName = "adipisci";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("earum", "modi");
                                                put("iste", "dolorum");
                                                put("deleniti", "pariatur");
                                                put("provident", "nobis");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("delectus", "quaerat");
                                                put("quos", "aliquid");
                                                put("dolorem", "dolorem");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "dolor";
                                            text = "qui";
                                        }};
                                        timeout = "ipsum";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "excepturi";
                                        gcs = new Gcs() {{
                                            remotePath = "cum";
                                        }};
                                        mountOptions = new String[]{{
                                            add("dignissimos"),
                                            add("reiciendis"),
                                        }};
                                        mountPath = "amet";
                                        nfs = new Nfs() {{
                                            remotePath = "dolorum";
                                            server = "numquam";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "veritatis";
                                        gcs = new Gcs() {{
                                            remotePath = "ipsa";
                                        }};
                                        mountOptions = new String[]{{
                                            add("iure"),
                                        }};
                                        mountPath = "odio";
                                        nfs = new Nfs() {{
                                            remotePath = "quaerat";
                                            server = "accusamus";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "quidem";
                                        gcs = new Gcs() {{
                                            remotePath = "voluptatibus";
                                        }};
                                        mountOptions = new String[]{{
                                            add("natus"),
                                            add("eos"),
                                        }};
                                        mountPath = "atque";
                                        nfs = new Nfs() {{
                                            remotePath = "sit";
                                            server = "fugiat";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "ab";
                                        gcs = new Gcs() {{
                                            remotePath = "soluta";
                                        }};
                                        mountOptions = new String[]{{
                                            add("iusto"),
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                        mountPath = "deleniti";
                                        nfs = new Nfs() {{
                                            remotePath = "omnis";
                                            server = "necessitatibus";
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
* `batchProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `batchProjectsLocationsStateReport` - Report agent's state, e.g. agent status and tasks information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
