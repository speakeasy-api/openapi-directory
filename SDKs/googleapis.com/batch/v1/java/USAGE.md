<!-- Start SDK Example Usage -->
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

            BatchProjectsLocationsJobsCreateRequest req = new BatchProjectsLocationsJobsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                jobInput = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new org.openapis.openapi.models.shared.InstancePolicyOrTemplate[]{{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "quibusdam";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "nulla";
                                            installGpuDrivers = false;
                                            type = "corrupti";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "illum";
                                            installGpuDrivers = false;
                                            type = "vel";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "error";
                                            installGpuDrivers = false;
                                            type = "deserunt";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "suscipit";
                                        image = "iure";
                                        sizeGb = "magnam";
                                        snapshot = "debitis";
                                        type = "ipsa";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "tempora";
                                            existingDisk = "suscipit";
                                            newDisk = new Disk() {{
                                                diskInterface = "molestiae";
                                                image = "minus";
                                                sizeGb = "placeat";
                                                snapshot = "voluptatum";
                                                type = "iusto";
                                            }};
                                        }}),
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
                                        add(new AttachedDisk() {{
                                            deviceName = "at";
                                            existingDisk = "at";
                                            newDisk = new Disk() {{
                                                diskInterface = "maiores";
                                                image = "molestiae";
                                                sizeGb = "quod";
                                                snapshot = "quod";
                                                type = "esse";
                                            }};
                                        }}),
                                    }};
                                    machineType = "totam";
                                    minCpuPlatform = "porro";
                                    provisioningModel = InstancePolicyProvisioningModelEnum.SPOT;
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "dicta";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "officia";
                                            installGpuDrivers = false;
                                            type = "occaecati";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "fugit";
                                            installGpuDrivers = false;
                                            type = "deleniti";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "hic";
                                            installGpuDrivers = false;
                                            type = "optio";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "totam";
                                        image = "beatae";
                                        sizeGb = "commodi";
                                        snapshot = "molestiae";
                                        type = "modi";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "impedit";
                                            existingDisk = "cum";
                                            newDisk = new Disk() {{
                                                diskInterface = "esse";
                                                image = "ipsum";
                                                sizeGb = "excepturi";
                                                snapshot = "aspernatur";
                                                type = "perferendis";
                                            }};
                                        }}),
                                    }};
                                    machineType = "ad";
                                    minCpuPlatform = "natus";
                                    provisioningModel = InstancePolicyProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                }};
                            }}),
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "iste";
                                policy = new InstancePolicy() {{
                                    accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                        add(new Accelerator() {{
                                            count = "natus";
                                            installGpuDrivers = false;
                                            type = "laboriosam";
                                        }}),
                                    }};
                                    bootDisk = new Disk() {{
                                        diskInterface = "hic";
                                        image = "saepe";
                                        sizeGb = "fuga";
                                        snapshot = "in";
                                        type = "corporis";
                                    }};
                                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                                        add(new AttachedDisk() {{
                                            deviceName = "iure";
                                            existingDisk = "saepe";
                                            newDisk = new Disk() {{
                                                diskInterface = "quidem";
                                                image = "architecto";
                                                sizeGb = "ipsa";
                                                snapshot = "reiciendis";
                                                type = "est";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "mollitia";
                                            existingDisk = "laborum";
                                            newDisk = new Disk() {{
                                                diskInterface = "dolores";
                                                image = "dolorem";
                                                sizeGb = "corporis";
                                                snapshot = "explicabo";
                                                type = "nobis";
                                            }};
                                        }}),
                                        add(new AttachedDisk() {{
                                            deviceName = "enim";
                                            existingDisk = "omnis";
                                            newDisk = new Disk() {{
                                                diskInterface = "nemo";
                                                image = "minima";
                                                sizeGb = "excepturi";
                                                snapshot = "accusantium";
                                                type = "iure";
                                            }};
                                        }}),
                                    }};
                                    machineType = "culpa";
                                    minCpuPlatform = "doloribus";
                                    provisioningModel = InstancePolicyProvisioningModelEnum.PREEMPTIBLE;
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("mollitia", "dolorem");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]{{
                                add("consequuntur"),
                                add("repellat"),
                                add("mollitia"),
                            }};
                        }};;
                        network = new NetworkPolicy() {{
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    network = "numquam";
                                    noExternalIpAddress = false;
                                    subnetwork = "commodi";
                                }}),
                                add(new NetworkInterface() {{
                                    network = "quam";
                                    noExternalIpAddress = false;
                                    subnetwork = "molestiae";
                                }}),
                                add(new NetworkInterface() {{
                                    network = "velit";
                                    noExternalIpAddress = false;
                                    subnetwork = "error";
                                }}),
                            }};
                        }};;
                        placement = new PlacementPolicy() {{
                            collocation = "quia";
                            maxDistance = "quis";
                        }};;
                        serviceAccount = new ServiceAccount() {{
                            email = "Marguerite13@gmail.com";
                            scopes = new String[]{{
                                add("sequi"),
                                add("tenetur"),
                                add("ipsam"),
                                add("id"),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "quasi");
                        put("error", "temporibus");
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = LogsPolicyDestinationEnum.PATH;
                        logsPath = "nihil";
                    }};;
                    notifications = new org.openapis.openapi.models.shared.JobNotification[]{{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.DELETION_IN_PROGRESS;
                                newTaskState = MessageNewTaskStateEnum.STATE_UNSPECIFIED;
                                type = MessageTypeEnum.JOB_STATE_CHANGED;
                            }};
                            pubsubTopic = "voluptate";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.FAILED;
                                newTaskState = MessageNewTaskStateEnum.STATE_UNSPECIFIED;
                                type = MessageTypeEnum.TYPE_UNSPECIFIED;
                            }};
                            pubsubTopic = "reprehenderit";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = MessageNewJobStateEnum.QUEUED;
                                newTaskState = MessageNewTaskStateEnum.UNEXECUTED;
                                type = MessageTypeEnum.TYPE_UNSPECIFIED;
                            }};
                            pubsubTopic = "corporis";
                        }}),
                    }};
                    priority = "dolore";
                    status = new JobStatus() {{
                        runDuration = "iusto";
                        state = JobStatusStateEnum.STATE_UNSPECIFIED;
                        statusEvents = new org.openapis.openapi.models.shared.StatusEvent[]{{
                            add(new StatusEvent() {{
                                description = "enim";
                                eventTime = "accusamus";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 414263;
                                }};
                                taskState = StatusEventTaskStateEnum.UNEXECUTED;
                                type = "quae";
                            }}),
                            add(new StatusEvent() {{
                                description = "ipsum";
                                eventTime = "quidem";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 565189;
                                }};
                                taskState = StatusEventTaskStateEnum.RUNNING;
                                type = "pariatur";
                            }}),
                            add(new StatusEvent() {{
                                description = "modi";
                                eventTime = "praesentium";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 523248;
                                }};
                                taskState = StatusEventTaskStateEnum.UNEXECUTED;
                                type = "quasi";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, org.openapis.openapi.models.shared.TaskGroupStatus>() {{
                            put("sint", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("itaque", "incidunt");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "consequatur";
                                            image = "est";
                                            sizeGb = "quibusdam";
                                            snapshot = "explicabo";
                                            type = "deserunt";
                                        }};
                                        machineType = "distinctio";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PREEMPTIBLE;
                                        taskPack = "labore";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "modi";
                                            image = "qui";
                                            sizeGb = "aliquid";
                                            snapshot = "cupiditate";
                                            type = "quos";
                                        }};
                                        machineType = "perferendis";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                        taskPack = "assumenda";
                                    }}),
                                }};
                            }});
                            put("ipsam", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("fugit", "dolorum");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "tempora";
                                            image = "facilis";
                                            sizeGb = "tempore";
                                            snapshot = "labore";
                                            type = "delectus";
                                        }};
                                        machineType = "eum";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                        taskPack = "eligendi";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "sint";
                                            image = "aliquid";
                                            sizeGb = "provident";
                                            snapshot = "necessitatibus";
                                            type = "sint";
                                        }};
                                        machineType = "officia";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                        taskPack = "debitis";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "a";
                                            image = "dolorum";
                                            sizeGb = "in";
                                            snapshot = "in";
                                            type = "illum";
                                        }};
                                        machineType = "maiores";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.SPOT;
                                        taskPack = "dicta";
                                    }}),
                                }};
                            }});
                            put("magnam", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("facere", "ea");
                                    put("aliquid", "laborum");
                                    put("accusamus", "non");
                                    put("occaecati", "enim");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "delectus";
                                            image = "quidem";
                                            sizeGb = "provident";
                                            snapshot = "nam";
                                            type = "id";
                                        }};
                                        machineType = "blanditiis";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.SPOT;
                                        taskPack = "sapiente";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "amet";
                                            image = "deserunt";
                                            sizeGb = "nisi";
                                            snapshot = "vel";
                                            type = "natus";
                                        }};
                                        machineType = "omnis";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.STANDARD;
                                        taskPack = "perferendis";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "nihil";
                                            image = "magnam";
                                            sizeGb = "distinctio";
                                            snapshot = "id";
                                            type = "labore";
                                        }};
                                        machineType = "labore";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.STANDARD;
                                        taskPack = "natus";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "nobis";
                                            image = "eum";
                                            sizeGb = "vero";
                                            snapshot = "aspernatur";
                                            type = "architecto";
                                        }};
                                        machineType = "magnam";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                        taskPack = "excepturi";
                                    }}),
                                }};
                            }});
                            put("ullam", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("quos", "sint");
                                    put("accusantium", "mollitia");
                                    put("reiciendis", "mollitia");
                                }};
                                instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "eum";
                                            image = "dolor";
                                            sizeGb = "necessitatibus";
                                            snapshot = "odit";
                                            type = "nemo";
                                        }};
                                        machineType = "quasi";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.STANDARD;
                                        taskPack = "doloribus";
                                    }}),
                                    add(new InstanceStatus() {{
                                        bootDisk = new Disk() {{
                                            diskInterface = "debitis";
                                            image = "eius";
                                            sizeGb = "maxime";
                                            snapshot = "deleniti";
                                            type = "facilis";
                                        }};
                                        machineType = "in";
                                        provisioningModel = InstanceStatusProvisioningModelEnum.PROVISIONING_MODEL_UNSPECIFIED;
                                        taskPack = "architecto";
                                    }}),
                                }};
                            }});
                        }};
                    }};;
                    taskGroups = new org.openapis.openapi.models.shared.TaskGroupInput[]{{
                        add(new TaskGroupInput() {{
                            parallelism = "ullam";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "expedita";
                            taskCountPerNode = "nihil";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "quibusdam";
                                        keyName = "sed";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("pariatur", "accusantium");
                                        put("consequuntur", "praesentium");
                                        put("natus", "magni");
                                        put("sunt", "quo");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("pariatur", "maxime");
                                        put("ea", "excepturi");
                                        put("odit", "ea");
                                        put("accusantium", "ab");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "maiores";
                                        keyName = "quidem";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("voluptate", "autem");
                                        put("nam", "eaque");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("nemo", "voluptatibus");
                                        put("perferendis", "fugiat");
                                        put("amet", "aut");
                                        put("cumque", "corporis");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "hic";
                                        keyName = "libero";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("dolores", "quis");
                                        put("totam", "dignissimos");
                                        put("eaque", "quis");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("eos", "perferendis");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "dolores";
                                        keyName = "minus";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("dolor", "vero");
                                        put("nostrum", "hic");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("omnis", "facilis");
                                        put("perspiciatis", "voluptatem");
                                        put("porro", "consequuntur");
                                        put("blanditiis", "error");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "eaque";
                                    cpuMilli = "occaecati";
                                    memoryMib = "rerum";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "adipisci";
                                        keyName = "asperiores";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("modi", "iste");
                                        put("dolorum", "deleniti");
                                        put("pariatur", "provident");
                                        put("nobis", "libero");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("quaerat", "quos");
                                        put("aliquid", "dolorem");
                                        put("dolorem", "dolor");
                                        put("qui", "ipsum");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "cum");
                                    put("voluptate", "dignissimos");
                                    put("reiciendis", "amet");
                                    put("dolorum", "numquam");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(434417),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 487838;
                                maxRunDuration = "quaerat";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Jan Hodkiewicz";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("sit"),
                                                add("fugiat"),
                                                add("ab"),
                                            }};
                                            entrypoint = "soluta";
                                            imageUri = "dolorum";
                                            options = "iusto";
                                            password = "voluptate";
                                            username = "Marianna_Leuschke";
                                            volumes = new String[]{{
                                                add("asperiores"),
                                                add("nihil"),
                                                add("ipsum"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "voluptate";
                                                keyName = "id";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("eius", "aspernatur");
                                                put("perferendis", "amet");
                                                put("optio", "accusamus");
                                                put("ad", "saepe");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("deserunt", "provident");
                                                put("minima", "repellendus");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("similique", "alias");
                                            put("at", "quaerat");
                                            put("tempora", "vel");
                                        }};
                                        script = new Script() {{
                                            path = "quod";
                                            text = "officiis";
                                        }};
                                        timeout = "qui";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Randal Klocko";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("quisquam"),
                                            }};
                                            entrypoint = "tenetur";
                                            imageUri = "amet";
                                            options = "tempore";
                                            password = "accusamus";
                                            username = "Deontae95";
                                            volumes = new String[]{{
                                                add("nihil"),
                                                add("sit"),
                                                add("expedita"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "neque";
                                                keyName = "sed";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("libero", "voluptas");
                                                put("deserunt", "quam");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("incidunt", "qui");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("maxime", "pariatur");
                                            put("soluta", "dicta");
                                            put("laborum", "totam");
                                        }};
                                        script = new Script() {{
                                            path = "incidunt";
                                            text = "aspernatur";
                                        }};
                                        timeout = "dolores";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Cesar Hyatt";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("qui"),
                                                add("neque"),
                                                add("fugit"),
                                                add("magni"),
                                            }};
                                            entrypoint = "odio";
                                            imageUri = "sunt";
                                            options = "ullam";
                                            password = "nam";
                                            username = "Tristian_Bartell74";
                                            volumes = new String[]{{
                                                add("saepe"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "ipsum";
                                                keyName = "veritatis";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("quos", "tempore");
                                                put("cupiditate", "aperiam");
                                                put("delectus", "dolorem");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("labore", "adipisci");
                                                put("dolorum", "architecto");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("aut", "quas");
                                        }};
                                        script = new Script() {{
                                            path = "itaque";
                                            text = "consequatur";
                                        }};
                                        timeout = "est";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Sherman Wyman";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("qui"),
                                                add("quae"),
                                                add("laudantium"),
                                            }};
                                            entrypoint = "odio";
                                            imageUri = "occaecati";
                                            options = "voluptatibus";
                                            password = "quisquam";
                                            username = "Selina.Moen";
                                            volumes = new String[]{{
                                                add("voluptate"),
                                                add("consectetur"),
                                                add("vero"),
                                                add("tenetur"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "dignissimos";
                                                keyName = "hic";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("quod", "odio");
                                                put("similique", "facilis");
                                                put("vero", "ducimus");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "illum");
                                                put("sequi", "natus");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("aut", "voluptatibus");
                                            put("exercitationem", "nulla");
                                            put("fugit", "porro");
                                            put("maiores", "doloribus");
                                        }};
                                        script = new Script() {{
                                            path = "iusto";
                                            text = "eligendi";
                                        }};
                                        timeout = "ducimus";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "officia";
                                        gcs = new Gcs() {{
                                            remotePath = "tempora";
                                        }};
                                        mountOptions = new String[]{{
                                            add("ea"),
                                            add("aspernatur"),
                                        }};
                                        mountPath = "vel";
                                        nfs = new Nfs() {{
                                            remotePath = "possimus";
                                            server = "magnam";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "ratione";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "ex";
                            taskCountPerNode = "laudantium";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "dolor";
                                        keyName = "maiores";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("ex", "nulla");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("voluptatibus", "nostrum");
                                        put("sapiente", "quisquam");
                                        put("saepe", "ea");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "impedit";
                                    cpuMilli = "corporis";
                                    memoryMib = "veniam";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "aliquid";
                                        keyName = "inventore";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("ea", "quo");
                                        put("consectetur", "recusandae");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("minima", "eaque");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("libero", "aut");
                                    put("aut", "deleniti");
                                    put("impedit", "aliquam");
                                    put("fugit", "accusamus");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.ACTION_UNSPECIFIED;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(677412),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 672048;
                                maxRunDuration = "placeat";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Stacey Rolfson";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("voluptas"),
                                                add("libero"),
                                                add("quasi"),
                                                add("tempora"),
                                            }};
                                            entrypoint = "numquam";
                                            imageUri = "explicabo";
                                            options = "provident";
                                            password = "ipsa";
                                            username = "Jarvis.Gutkowski";
                                            volumes = new String[]{{
                                                add("esse"),
                                                add("rem"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "fuga";
                                                keyName = "reprehenderit";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("fugiat", "ut");
                                                put("eum", "suscipit");
                                                put("assumenda", "eos");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("quisquam", "veritatis");
                                                put("ipsa", "id");
                                                put("quidem", "neque");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("illum", "quo");
                                            put("fuga", "eius");
                                            put("eos", "voluptas");
                                            put("ab", "cupiditate");
                                        }};
                                        script = new Script() {{
                                            path = "consequatur";
                                            text = "tempora";
                                        }};
                                        timeout = "debitis";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "aspernatur";
                                        gcs = new Gcs() {{
                                            remotePath = "sequi";
                                        }};
                                        mountOptions = new String[]{{
                                            add("esse"),
                                            add("recusandae"),
                                            add("aperiam"),
                                            add("distinctio"),
                                        }};
                                        mountPath = "quod";
                                        nfs = new Nfs() {{
                                            remotePath = "dignissimos";
                                            server = "inventore";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "nihil";
                                        gcs = new Gcs() {{
                                            remotePath = "totam";
                                        }};
                                        mountOptions = new String[]{{
                                            add("aliquam"),
                                            add("odio"),
                                            add("occaecati"),
                                            add("commodi"),
                                        }};
                                        mountPath = "sapiente";
                                        nfs = new Nfs() {{
                                            remotePath = "dolores";
                                            server = "deserunt";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "molestiae";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "accusantium";
                            taskCountPerNode = "porro";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "quas";
                                        keyName = "praesentium";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("deleniti", "fugit");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("mollitia", "incidunt");
                                        put("atque", "explicabo");
                                        put("minima", "nisi");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "fugit";
                                        keyName = "sapiente";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("ratione", "explicabo");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("occaecati", "atque");
                                        put("et", "esse");
                                        put("eveniet", "accusamus");
                                        put("veritatis", "esse");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "quod";
                                    cpuMilli = "nam";
                                    memoryMib = "vero";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "aliquid";
                                        keyName = "quasi";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("vel", "harum");
                                        put("molestiae", "rerum");
                                        put("occaecati", "minima");
                                        put("distinctio", "eligendi");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("culpa", "tempore");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("cumque", "consequuntur");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.FAIL_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(959167),
                                                add(232865),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 458139;
                                maxRunDuration = "blanditiis";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Ismael Lynch DVM";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("sint"),
                                                add("pariatur"),
                                                add("possimus"),
                                            }};
                                            entrypoint = "quia";
                                            imageUri = "eveniet";
                                            options = "asperiores";
                                            password = "facere";
                                            username = "Arvel62";
                                            volumes = new String[]{{
                                                add("aliquid"),
                                                add("tenetur"),
                                                add("quae"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "earum";
                                                keyName = "vel";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("eius", "libero");
                                                put("illum", "soluta");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("aliquam", "sapiente");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("ullam", "reprehenderit");
                                        }};
                                        script = new Script() {{
                                            path = "ullam";
                                            text = "nisi";
                                        }};
                                        timeout = "aut";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Clarence Sporer";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("dolorum"),
                                                add("architecto"),
                                                add("omnis"),
                                                add("tenetur"),
                                            }};
                                            entrypoint = "quasi";
                                            imageUri = "at";
                                            options = "et";
                                            password = "voluptate";
                                            username = "Anabel23";
                                            volumes = new String[]{{
                                                add("iste"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "temporibus";
                                                keyName = "accusantium";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("aut", "laudantium");
                                                put("eum", "mollitia");
                                                put("ab", "corrupti");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("voluptatem", "dolor");
                                                put("occaecati", "numquam");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("explicabo", "voluptas");
                                            put("aut", "dignissimos");
                                            put("dicta", "maiores");
                                            put("natus", "velit");
                                        }};
                                        script = new Script() {{
                                            path = "voluptatibus";
                                            text = "voluptas";
                                        }};
                                        timeout = "asperiores";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Eileen Hagenes";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("maxime"),
                                                add("dignissimos"),
                                                add("officia"),
                                            }};
                                            entrypoint = "asperiores";
                                            imageUri = "nemo";
                                            options = "quae";
                                            password = "quaerat";
                                            username = "Otis7";
                                            volumes = new String[]{{
                                                add("fuga"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "id";
                                                keyName = "suscipit";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("culpa", "est");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("totam", "fugiat");
                                                put("vel", "ducimus");
                                                put("quos", "vel");
                                                put("labore", "possimus");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("cum", "commodi");
                                            put("in", "corporis");
                                            put("reiciendis", "assumenda");
                                        }};
                                        script = new Script() {{
                                            path = "nemo";
                                            text = "recusandae";
                                        }};
                                        timeout = "aliquid";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "cum";
                                        gcs = new Gcs() {{
                                            remotePath = "consectetur";
                                        }};
                                        mountOptions = new String[]{{
                                            add("exercitationem"),
                                            add("earum"),
                                        }};
                                        mountPath = "facere";
                                        nfs = new Nfs() {{
                                            remotePath = "numquam";
                                            server = "doloribus";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "suscipit";
                            permissiveSsh = false;
                            requireHostsFile = false;
                            taskCount = "reiciendis";
                            taskCountPerNode = "quidem";
                            taskEnvironments = new org.openapis.openapi.models.shared.Environment[]{{
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "necessitatibus";
                                        keyName = "dolore";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("asperiores", "adipisci");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("amet", "beatae");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "dignissimos";
                                        keyName = "a";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("consectetur", "corporis");
                                        put("harum", "laboriosam");
                                        put("ipsa", "voluptates");
                                        put("libero", "vitae");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("similique", "tempora");
                                        put("aspernatur", "voluptas");
                                        put("voluptas", "voluptas");
                                        put("minima", "nobis");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "dolorum";
                                        keyName = "adipisci";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("dolores", "blanditiis");
                                        put("in", "dolore");
                                        put("aliquam", "officiis");
                                        put("temporibus", "ullam");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("cum", "blanditiis");
                                    }};
                                }}),
                                add(new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "quas";
                                        keyName = "hic";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("culpa", "corrupti");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("totam", "hic");
                                        put("exercitationem", "nobis");
                                        put("sit", "rerum");
                                        put("sed", "reiciendis");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "explicabo";
                                    cpuMilli = "asperiores";
                                    memoryMib = "facilis";
                                }};
                                environment = new Environment() {{
                                    encryptedVariables = new KMSEnvMap() {{
                                        cipherText = "voluptate";
                                        keyName = "expedita";
                                    }};
                                    secretVariables = new java.util.HashMap<String, String>() {{
                                        put("iste", "dolore");
                                    }};
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("sed", "in");
                                        put("commodi", "quidem");
                                        put("explicabo", "voluptas");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("architecto", "suscipit");
                                    put("sapiente", "debitis");
                                    put("illo", "reiciendis");
                                }};
                                lifecyclePolicies = new org.openapis.openapi.models.shared.LifecyclePolicy[]{{
                                    add(new LifecyclePolicy() {{
                                        action = LifecyclePolicyActionEnum.RETRY_TASK;
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]{{
                                                add(274823),
                                                add(148478),
                                                add(592231),
                                                add(258702),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 896762;
                                maxRunDuration = "ipsum";
                                runnables = new org.openapis.openapi.models.shared.Runnable[]{{
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Isaac Wolf";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("reiciendis"),
                                                add("ex"),
                                            }};
                                            entrypoint = "sit";
                                            imageUri = "non";
                                            options = "officiis";
                                            password = "praesentium";
                                            username = "Melody37";
                                            volumes = new String[]{{
                                                add("rem"),
                                                add("sit"),
                                                add("nobis"),
                                                add("error"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "veniam";
                                                keyName = "minima";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "nulla");
                                                put("magni", "aperiam");
                                                put("saepe", "numquam");
                                                put("veniam", "in");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("beatae", "laudantium");
                                                put("exercitationem", "praesentium");
                                                put("cum", "laboriosam");
                                                put("dolorum", "voluptatum");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("hic", "expedita");
                                            put("debitis", "neque");
                                            put("dolorum", "nostrum");
                                        }};
                                        script = new Script() {{
                                            path = "officia";
                                            text = "dolorum";
                                        }};
                                        timeout = "corrupti";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = false;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "Ricky Little";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]{{
                                                add("voluptatem"),
                                                add("culpa"),
                                                add("expedita"),
                                                add("magnam"),
                                            }};
                                            entrypoint = "consequatur";
                                            imageUri = "esse";
                                            options = "ipsam";
                                            password = "sit";
                                            username = "Justine.Lynch8";
                                            volumes = new String[]{{
                                                add("ex"),
                                                add("sed"),
                                                add("sit"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            encryptedVariables = new KMSEnvMap() {{
                                                cipherText = "vel";
                                                keyName = "nostrum";
                                            }};
                                            secretVariables = new java.util.HashMap<String, String>() {{
                                                put("error", "consequatur");
                                                put("incidunt", "reiciendis");
                                                put("dolorem", "harum");
                                                put("dicta", "architecto");
                                            }};
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("labore", "quidem");
                                                put("atque", "laborum");
                                                put("nam", "tenetur");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("alias", "amet");
                                            put("deserunt", "voluptate");
                                        }};
                                        script = new Script() {{
                                            path = "unde";
                                            text = "reiciendis";
                                        }};
                                        timeout = "provident";
                                    }}),
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        deviceName = "delectus";
                                        gcs = new Gcs() {{
                                            remotePath = "voluptates";
                                        }};
                                        mountOptions = new String[]{{
                                            add("est"),
                                        }};
                                        mountPath = "quidem";
                                        nfs = new Nfs() {{
                                            remotePath = "reprehenderit";
                                            server = "facere";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "fuga";
                                        gcs = new Gcs() {{
                                            remotePath = "praesentium";
                                        }};
                                        mountOptions = new String[]{{
                                            add("veniam"),
                                            add("voluptatem"),
                                            add("quisquam"),
                                        }};
                                        mountPath = "repudiandae";
                                        nfs = new Nfs() {{
                                            remotePath = "quasi";
                                            server = "atque";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "reprehenderit";
                                        gcs = new Gcs() {{
                                            remotePath = "asperiores";
                                        }};
                                        mountOptions = new String[]{{
                                            add("suscipit"),
                                            add("quidem"),
                                            add("maxime"),
                                        }};
                                        mountPath = "et";
                                        nfs = new Nfs() {{
                                            remotePath = "esse";
                                            server = "amet";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "assumenda";
                                        gcs = new Gcs() {{
                                            remotePath = "ea";
                                        }};
                                        mountOptions = new String[]{{
                                            add("error"),
                                            add("officiis"),
                                            add("officiis"),
                                        }};
                                        mountPath = "accusamus";
                                        nfs = new Nfs() {{
                                            remotePath = "natus";
                                            server = "minima";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "corrupti";
                jobId = "at";
                key = "error";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "repudiandae";
                uploadType = "atque";
                uploadProtocol = "atque";
            }};            

            BatchProjectsLocationsJobsCreateResponse res = sdk.projects.batchProjectsLocationsJobsCreate(req, new BatchProjectsLocationsJobsCreateSecurity("sunt", "recusandae") {{
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
<!-- End SDK Example Usage -->