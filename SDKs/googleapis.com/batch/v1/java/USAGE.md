<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.BatchProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BatchProjectsLocationsJobsCreateRequest req = new BatchProjectsLocationsJobsCreateRequest() {{
                dollarXgafv = "2";
                jobInput = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new org.openapis.openapi.models.shared.InstancePolicyOrTemplate[]{{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "distinctio";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "unde";
                                            installGpuDrivers = false;
                                            type = "nulla";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "corrupti";
                                            installGpuDrivers = false;
                                            type = "illum";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "vel";
                                            installGpuDrivers = false;
                                            type = "error";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "deserunt";
                                            installGpuDrivers = false;
                                            type = "suscipit";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "iure";
                                        image = "magnam";
                                        sizeGb = "debitis";
                                        snapshot = "ipsa";
                                        type = "delectus";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "suscipit";
                                            existingDisk = "molestiae";
                                            newDisk = new Disk() {{
                                                diskInterface = "minus";
                                                image = "placeat";
                                                sizeGb = "voluptatum";
                                                snapshot = "iusto";
                                                type = "excepturi";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "nisi";
                                            existingDisk = "recusandae";
                                            newDisk = new Disk() {{
                                                diskInterface = "temporibus";
                                                image = "ab";
                                                sizeGb = "quis";
                                                snapshot = "veritatis";
                                                type = "deserunt";
                                            }};
                                        }}),
                                    }};
                                    machineType = "perferendis";
                                    minCpuPlatform = "ipsam";
                                    provisioningModel = "PREEMPTIBLE";
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "sapiente";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "odit";
                                            installGpuDrivers = false;
                                            type = "at";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "at";
                                            installGpuDrivers = false;
                                            type = "maiores";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "molestiae";
                                            installGpuDrivers = false;
                                            type = "quod";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "quod";
                                            installGpuDrivers = false;
                                            type = "esse";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "totam";
                                        image = "porro";
                                        sizeGb = "dolorum";
                                        snapshot = "dicta";
                                        type = "nam";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "occaecati";
                                            existingDisk = "fugit";
                                            newDisk = new Disk() {{
                                                diskInterface = "deleniti";
                                                image = "hic";
                                                sizeGb = "optio";
                                                snapshot = "totam";
                                                type = "beatae";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "commodi";
                                            existingDisk = "molestiae";
                                            newDisk = new Disk() {{
                                                diskInterface = "modi";
                                                image = "qui";
                                                sizeGb = "impedit";
                                                snapshot = "cum";
                                                type = "esse";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "ipsum";
                                            existingDisk = "excepturi";
                                            newDisk = new Disk() {{
                                                diskInterface = "aspernatur";
                                                image = "perferendis";
                                                sizeGb = "ad";
                                                snapshot = "natus";
                                                type = "sed";
                                            }};
                                        }}),
                                    }};
                                    machineType = "iste";
                                    minCpuPlatform = "dolor";
                                    provisioningModel = "SPOT";
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "laboriosam";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "saepe";
                                            installGpuDrivers = false;
                                            type = "fuga";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "in";
                                            installGpuDrivers = false;
                                            type = "corporis";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "iste";
                                            installGpuDrivers = false;
                                            type = "iure";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "saepe";
                                            installGpuDrivers = false;
                                            type = "quidem";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "architecto";
                                        image = "ipsa";
                                        sizeGb = "reiciendis";
                                        snapshot = "est";
                                        type = "mollitia";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "dolores";
                                            existingDisk = "dolorem";
                                            newDisk = new Disk() {{
                                                diskInterface = "corporis";
                                                image = "explicabo";
                                                sizeGb = "nobis";
                                                snapshot = "enim";
                                                type = "omnis";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "nemo";
                                            existingDisk = "minima";
                                            newDisk = new Disk() {{
                                                diskInterface = "excepturi";
                                                image = "accusantium";
                                                sizeGb = "iure";
                                                snapshot = "culpa";
                                                type = "doloribus";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "sapiente";
                                            existingDisk = "architecto";
                                            newDisk = new Disk() {{
                                                diskInterface = "mollitia";
                                                image = "dolorem";
                                                sizeGb = "culpa";
                                                snapshot = "consequuntur";
                                                type = "repellat";
                                            }};
                                        }}),
                                    }};
                                    machineType = "mollitia";
                                    minCpuPlatform = "occaecati";
                                    provisioningModel = "STANDARD";
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("quam", "molestiae");
                            put("velit", "error");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]{{
                                add("quis"),
                            }};
                        }};
                        network = new NetworkPolicy() {{
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    network = "laborum";
                                    noExternalIpAddress = false;
                                    subnetwork = "animi";
                                }}),
                            }};
                        }};
                        serviceAccount = new ServiceAccount() {{
                            email = "Britney94@gmail.com";
                            scopes = new String[]{{
                                add("id"),
                                add("possimus"),
                            }};
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("quasi", "error");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = "PATH";
                        logsPath = "laborum";
                    }};
                    notifications = new org.openapis.openapi.models.shared.JobNotification[]{{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "DELETION_IN_PROGRESS";
                                newTaskState = "SUCCEEDED";
                                type = "TASK_STATE_CHANGED";
                            }};
                            pubsubTopic = "nihil";
                        }}),
                    }};
                    priority = "praesentium";
                    status = new JobStatus() {{
                        runDuration = "voluptatibus";
                        state = "STATE_UNSPECIFIED";
                        statusEvents = new org.openapis.openapi.models.shared.StatusEvent[]{{
                            add(new StatusEvent() {{
                                description = "voluptate";
                                eventTime = "cum";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 19987;
                                }};
                                taskState = "STATE_UNSPECIFIED";
                                type = "reprehenderit";
                            }}),
                            add(new StatusEvent() {{
                                description = "ut";
                                eventTime = "maiores";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 120196;
                                }};
                                taskState = "ASSIGNED";
                                type = "dolore";
                            }}),
                            add(new StatusEvent() {{
                                description = "iusto";
                                eventTime = "dicta";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 688661;
                                }};
                                taskState = "PENDING";
                                type = "accusamus";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.TaskGroupStatus>() {{
                            put("repudiandae", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "quidem");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "excepturi";
                                            image = "pariatur";
                                            sizeGb = "modi";
                                            snapshot = "praesentium";
                                            type = "rem";
                                        }};
                                        machineType = "voluptates";
                                        provisioningModel = "PROVISIONING_MODEL_UNSPECIFIED";
                                        taskPack = "repudiandae";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "sint";
                                            image = "veritatis";
                                            sizeGb = "itaque";
                                            snapshot = "incidunt";
                                            type = "enim";
                                        }};
                                        machineType = "consequatur";
                                        provisioningModel = "SPOT";
                                        taskPack = "quibusdam";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "explicabo";
                                            image = "deserunt";
                                            sizeGb = "distinctio";
                                            snapshot = "quibusdam";
                                            type = "labore";
                                        }};
                                        machineType = "modi";
                                        provisioningModel = "PROVISIONING_MODEL_UNSPECIFIED";
                                        taskPack = "aliquid";
                                    }}),
                                }};
                            }});
                            put("cupiditate", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("perferendis", "magni");
                                    put("assumenda", "ipsam");
                                    put("alias", "fugit");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "excepturi";
                                            image = "tempora";
                                            sizeGb = "facilis";
                                            snapshot = "tempore";
                                            type = "labore";
                                        }};
                                        machineType = "delectus";
                                        provisioningModel = "STANDARD";
                                        taskPack = "non";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "eligendi";
                                            image = "sint";
                                            sizeGb = "aliquid";
                                            snapshot = "provident";
                                            type = "necessitatibus";
                                        }};
                                        machineType = "sint";
                                        provisioningModel = "SPOT";
                                        taskPack = "dolor";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "debitis";
                                            image = "a";
                                            sizeGb = "dolorum";
                                            snapshot = "in";
                                            type = "in";
                                        }};
                                        machineType = "illum";
                                        provisioningModel = "PREEMPTIBLE";
                                        taskPack = "rerum";
                                    }}),
                                }};
                            }});
                        }};
                    }};
                    taskGroups = new org.openapis.openapi.models.shared.TaskGroupInput[]{{
                        add(new TaskGroupInput() {{
                            parallelism = "magnam";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "cumque";
                            taskCountPerNode = "facere";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "aliquid";
                                        keyName = "laborum";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("non", "occaecati");
                                        put("enim", "accusamus");
                                        put("delectus", "quidem");
                                        put("provident", "nam");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("blanditiis", "deleniti");
                                        put("sapiente", "amet");
                                        put("deserunt", "nisi");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "vel";
                                        keyName = "natus";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("molestiae", "perferendis");
                                        put("nihil", "magnam");
                                        put("distinctio", "id");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("labore", "suscipit");
                                        put("natus", "nobis");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "eum";
                                    cpuMilli = "vero";
                                    memoryMib = "aspernatur";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "architecto";
                                        keyName = "magnam";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "ullam");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("quos", "sint");
                                        put("accusantium", "mollitia");
                                        put("reiciendis", "mollitia");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("eum", "dolor");
                                    put("necessitatibus", "odit");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(984043),
                                                add(891924),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(537023),
                                                add(703889),
                                                add(447926),
                                                add(100226),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 99569;
                                maxRunDuration = "repudiandae";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "expedita";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("repellat"),
                                                add("quibusdam"),
                                            }};
                                            entrypoint = "sed";
                                            imageUri = "saepe";
                                            options = "pariatur";
                                            password = "accusantium";
                                            username = "Carroll.Lang";
                                            volumes = new String[]{{
                                                add("quo"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "illum";
                                                keyName = "pariatur";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("ea", "excepturi");
                                                put("odit", "ea");
                                                put("accusantium", "ab");
                                                put("maiores", "quidem");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("voluptate", "autem");
                                                put("nam", "eaque");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "pariatur";
                                            text = "nemo";
                                        }};
                                        timeout = "voluptatibus";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "perferendis";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("amet"),
                                                add("aut"),
                                                add("cumque"),
                                                add("corporis"),
                                            }};
                                            entrypoint = "hic";
                                            imageUri = "libero";
                                            options = "nobis";
                                            password = "dolores";
                                            username = "Eulalia.Lebsack";
                                            volumes = new String[]{{
                                                add("nesciunt"),
                                                add("eos"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "perferendis";
                                                keyName = "dolores";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("quam", "dolor");
                                                put("vero", "nostrum");
                                                put("hic", "recusandae");
                                                put("omnis", "facilis");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("voluptatem", "porro");
                                                put("consequuntur", "blanditiis");
                                                put("error", "eaque");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "occaecati";
                                            text = "rerum";
                                        }};
                                        timeout = "adipisci";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "earum";
                                        gcs = new Gcs() {{
                                            remotePath = "modi";
                                        }};
                                        mountOptions = new String[]{{
                                            add("dolorum"),
                                            add("deleniti"),
                                            add("pariatur"),
                                        }};
                                        mountPath = "provident";
                                        nfs = new Nfs() {{
                                            remotePath = "nobis";
                                            server = "libero";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "delectus";
                                        gcs = new Gcs() {{
                                            remotePath = "quaerat";
                                        }};
                                        mountOptions = new String[]{{
                                            add("aliquid"),
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                        mountPath = "dolor";
                                        nfs = new Nfs() {{
                                            remotePath = "qui";
                                            server = "ipsum";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "hic";
                                        gcs = new Gcs() {{
                                            remotePath = "excepturi";
                                        }};
                                        mountOptions = new String[]{{
                                            add("voluptate"),
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
                                }};
                            }};
                        }}),
                    }};
                }};
                accessToken = "quidem";
                alt = "proto";
                callback = "voluptas";
                fields = "natus";
                jobId = "eos";
                key = "atque";
                oauthToken = "sit";
                parent = "fugiat";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "soluta";
                uploadType = "dolorum";
                uploadProtocol = "iusto";
            }}            

            BatchProjectsLocationsJobsCreateResponse res = sdk.projects.batchProjectsLocationsJobsCreate(req, new BatchProjectsLocationsJobsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->