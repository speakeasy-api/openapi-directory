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
                    parent = "nisi";
                }};
                queryParams = new BatchProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "unde";
                    alt = "media";
                    callback = "ut";
                    fields = "vel";
                    jobId = "rerum";
                    key = "minus";
                    oauthToken = "asperiores";
                    prettyPrint = false;
                    quotaUser = "voluptate";
                    requestId = "aut";
                    uploadType = "sit";
                    uploadProtocol = "ipsa";
                }};
                request = new JobInput() {{
                    allocationPolicy = new AllocationPolicy() {{
                        instances = new openapisdk.models.shared.InstancePolicyOrTemplate[]() {{
                            add(new InstancePolicyOrTemplate() {{
                                installGpuDrivers = false;
                                instanceTemplate = "dolore";
                                policy = new InstancePolicy() {{
                                    accelerators = new openapisdk.models.shared.Accelerator[]() {{
                                        add(new Accelerator() {{
                                            count = "voluptas";
                                            installGpuDrivers = true;
                                            type = "dolor";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "esse";
                                            installGpuDrivers = false;
                                            type = "omnis";
                                        }}),
                                        add(new Accelerator() {{
                                            count = "et";
                                            installGpuDrivers = false;
                                            type = "voluptatem";
                                        }}),
                                    }};
                                    disks = new openapisdk.models.shared.AttachedDisk[]() {{
                                        add(new AttachedDisk() {{
                                            deviceName = "est";
                                            existingDisk = "ducimus";
                                            newDisk = new Disk() {{
                                                diskInterface = "adipisci";
                                                image = "ut";
                                                sizeGb = "et";
                                                snapshot = "vel";
                                                type = "dolores";
                                            }};
                                        }}),
                                    }};
                                    machineType = "iste";
                                    minCpuPlatform = "ut";
                                    provisioningModel = "STANDARD";
                                }};
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("incidunt", "ducimus");
                        }};
                        location = new LocationPolicy() {{
                            allowedLocations = new String[]() {{
                                add("voluptas"),
                            }};
                        }};
                        network = new NetworkPolicy() {{
                            networkInterfaces = new openapisdk.models.shared.NetworkInterface[]() {{
                                add(new NetworkInterface() {{
                                    network = "voluptates";
                                    noExternalIpAddress = false;
                                    subnetwork = "eligendi";
                                }}),
                            }};
                        }};
                        serviceAccount = new ServiceAccount() {{
                            email = "adipisci";
                        }};
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("optio", "atque");
                    }};
                    logsPolicy = new LogsPolicy() {{
                        destination = "DESTINATION_UNSPECIFIED";
                        logsPath = "quam";
                    }};
                    notifications = new openapisdk.models.shared.JobNotification[]() {{
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "SCHEDULED";
                                newTaskState = "FAILED";
                                type = "TASK_STATE_CHANGED";
                            }};
                            pubsubTopic = "aliquid";
                        }}),
                        add(new JobNotification() {{
                            message = new Message() {{
                                newJobState = "QUEUED";
                                newTaskState = "FAILED";
                                type = "TASK_STATE_CHANGED";
                            }};
                            pubsubTopic = "consequatur";
                        }}),
                    }};
                    priority = "eos";
                    status = new JobStatus() {{
                        runDuration = "non";
                        state = "RUNNING";
                        statusEvents = new openapisdk.models.shared.StatusEvent[]() {{
                            add(new StatusEvent() {{
                                description = "facere";
                                eventTime = "magnam";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 2243994930834819635;
                                }};
                                type = "eum";
                            }}),
                            add(new StatusEvent() {{
                                description = "facilis";
                                eventTime = "perferendis";
                                taskExecution = new TaskExecution() {{
                                    exitCode = 670118985590453658;
                                }};
                                type = "ut";
                            }}),
                        }};
                        taskGroups = new java.util.HashMap<String, openapisdk.models.shared.TaskGroupStatus>() {{
                            put("qui", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("ut", "qui");
                                    put("harum", "fuga");
                                    put("facilis", "blanditiis");
                                }};
                                instances = new openapisdk.models.shared.InstanceStatus[]() {{
                                    add(new InstanceStatus() {{
                                        machineType = "ea";
                                        provisioningModel = "PROVISIONING_MODEL_UNSPECIFIED";
                                        taskPack = "non";
                                    }}),
                                    add(new InstanceStatus() {{
                                        machineType = "veritatis";
                                        provisioningModel = "SPOT";
                                        taskPack = "facere";
                                    }}),
                                    add(new InstanceStatus() {{
                                        machineType = "aut";
                                        provisioningModel = "STANDARD";
                                        taskPack = "adipisci";
                                    }}),
                                }};
                            }});
                            put("consequatur", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "alias");
                                }};
                                instances = new openapisdk.models.shared.InstanceStatus[]() {{
                                    add(new InstanceStatus() {{
                                        machineType = "voluptatem";
                                        provisioningModel = "SPOT";
                                        taskPack = "enim";
                                    }}),
                                }};
                            }});
                            put("aut", new TaskGroupStatus() {{
                                counts = new java.util.HashMap<String, String>() {{
                                    put("ratione", "adipisci");
                                    put("eius", "quisquam");
                                }};
                                instances = new openapisdk.models.shared.InstanceStatus[]() {{
                                    add(new InstanceStatus() {{
                                        machineType = "quia";
                                        provisioningModel = "STANDARD";
                                        taskPack = "voluptatem";
                                    }}),
                                    add(new InstanceStatus() {{
                                        machineType = "voluptate";
                                        provisioningModel = "STANDARD";
                                        taskPack = "quo";
                                    }}),
                                }};
                            }});
                        }};
                    }};
                    taskGroups = new openapisdk.models.shared.TaskGroupInput[]() {{
                        add(new TaskGroupInput() {{
                            parallelism = "ipsum";
                            permissiveSsh = true;
                            requireHostsFile = false;
                            taskCount = "quis";
                            taskCountPerNode = "et";
                            taskEnvironments = new openapisdk.models.shared.Environment[]() {{
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("laborum", "quibusdam");
                                        put("eum", "magnam");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "veniam";
                                    cpuMilli = "dolores";
                                    memoryMib = "rerum";
                                }};
                                environment = new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("voluptatem", "voluptatem");
                                        put("qui", "est");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("et", "ea");
                                    put("voluptas", "velit");
                                    put("ipsa", "in");
                                }};
                                lifecyclePolicies = new openapisdk.models.shared.LifecyclePolicy[]() {{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(6631302707605664415),
                                                add(1394201994945011949),
                                            }};
                                        }};
                                    }}),
                                    add(new LifecyclePolicy() {{
                                        action = "FAIL_TASK";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(6305227779196293352),
                                                add(2660334108604812451),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 3513038634322267310;
                                maxRunDuration = "perspiciatis";
                                runnables = new openapisdk.models.shared.Runnable[]() {{
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "commodi";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("asperiores"),
                                                add("amet"),
                                                add("cupiditate"),
                                            }};
                                            entrypoint = "nisi";
                                            imageUri = "nihil";
                                            options = "dolorem";
                                            password = "impedit";
                                            username = "laboriosam";
                                            volumes = new String[]() {{
                                                add("soluta"),
                                                add("ut"),
                                                add("est"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("sunt", "soluta");
                                                put("alias", "aut");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "dolorum";
                                            text = "nostrum";
                                        }};
                                        timeout = "laboriosam";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "doloribus";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = true;
                                            commands = new String[]() {{
                                                add("et"),
                                                add("natus"),
                                            }};
                                            entrypoint = "corrupti";
                                            imageUri = "quis";
                                            options = "consequatur";
                                            password = "tenetur";
                                            username = "alias";
                                            volumes = new String[]() {{
                                                add("iure"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("et", "deleniti");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "fuga";
                                            text = "doloribus";
                                        }};
                                        timeout = "quasi";
                                    }}),
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        deviceName = "laboriosam";
                                        gcs = new Gcs() {{
                                            remotePath = "debitis";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("minus"),
                                        }};
                                        mountPath = "sed";
                                        nfs = new Nfs() {{
                                            remotePath = "magnam";
                                            server = "similique";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "fuga";
                                        gcs = new Gcs() {{
                                            remotePath = "voluptatem";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("iure"),
                                            add("at"),
                                            add("consequatur"),
                                        }};
                                        mountPath = "aut";
                                        nfs = new Nfs() {{
                                            remotePath = "nobis";
                                            server = "vero";
                                        }};
                                    }}),
                                }};
                            }};
                        }}),
                        add(new TaskGroupInput() {{
                            parallelism = "aperiam";
                            permissiveSsh = false;
                            requireHostsFile = true;
                            taskCount = "laborum";
                            taskCountPerNode = "voluptas";
                            taskEnvironments = new openapisdk.models.shared.Environment[]() {{
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("velit", "modi");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("optio", "doloremque");
                                        put("cum", "necessitatibus");
                                    }};
                                }}),
                                add(new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("enim", "aspernatur");
                                        put("ratione", "quasi");
                                        put("omnis", "sapiente");
                                    }};
                                }}),
                            }};
                            taskSpec = new TaskSpec() {{
                                computeResource = new ComputeResource() {{
                                    bootDiskMib = "et";
                                    cpuMilli = "omnis";
                                    memoryMib = "accusamus";
                                }};
                                environment = new Environment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("accusamus", "voluptatibus");
                                    }};
                                }};
                                environments = new java.util.HashMap<String, String>() {{
                                    put("in", "reiciendis");
                                    put("rerum", "in");
                                    put("perspiciatis", "fugit");
                                }};
                                lifecyclePolicies = new openapisdk.models.shared.LifecyclePolicy[]() {{
                                    add(new LifecyclePolicy() {{
                                        action = "ACTION_UNSPECIFIED";
                                        actionCondition = new ActionCondition() {{
                                            exitCodes = new Integer[]() {{
                                                add(5742301973518926107),
                                                add(4126061186846913615),
                                            }};
                                        }};
                                    }}),
                                }};
                                maxRetryCount = 6089070892117498567;
                                maxRunDuration = "nulla";
                                runnables = new openapisdk.models.shared.Runnable[]() {{
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "iure";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = false;
                                            commands = new String[]() {{
                                                add("fugit"),
                                            }};
                                            entrypoint = "qui";
                                            imageUri = "natus";
                                            options = "molestiae";
                                            password = "odit";
                                            username = "dolor";
                                            volumes = new String[]() {{
                                                add("aut"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("et", "sunt");
                                            }};
                                        }};
                                        ignoreExitStatus = true;
                                        script = new Script() {{
                                            path = "voluptatem";
                                            text = "natus";
                                        }};
                                        timeout = "ea";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = true;
                                        barrier = new Barrier() {{
                                            name = "omnis";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = true;
                                            commands = new String[]() {{
                                                add("dolores"),
                                                add("harum"),
                                            }};
                                            entrypoint = "neque";
                                            imageUri = "eligendi";
                                            options = "et";
                                            password = "aut";
                                            username = "fugiat";
                                            volumes = new String[]() {{
                                                add("sit"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("iste", "tempora");
                                                put("officia", "ducimus");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "eos";
                                            text = "perferendis";
                                        }};
                                        timeout = "nostrum";
                                    }}),
                                    add(new Runnable() {{
                                        alwaysRun = true;
                                        background = false;
                                        barrier = new Barrier() {{
                                            name = "enim";
                                        }};
                                        container = new Container() {{
                                            blockExternalNetwork = true;
                                            commands = new String[]() {{
                                                add("quos"),
                                                add("quibusdam"),
                                                add("est"),
                                            }};
                                            entrypoint = "qui";
                                            imageUri = "consequatur";
                                            options = "laborum";
                                            password = "quis";
                                            username = "laboriosam";
                                            volumes = new String[]() {{
                                                add("et"),
                                                add("nesciunt"),
                                            }};
                                        }};
                                        environment = new Environment() {{
                                            variables = new java.util.HashMap<String, String>() {{
                                                put("libero", "modi");
                                                put("est", "et");
                                                put("et", "a");
                                            }};
                                        }};
                                        ignoreExitStatus = false;
                                        script = new Script() {{
                                            path = "est";
                                            text = "dolorum";
                                        }};
                                        timeout = "ut";
                                    }}),
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        deviceName = "est";
                                        gcs = new Gcs() {{
                                            remotePath = "blanditiis";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("asperiores"),
                                            add("tempore"),
                                            add("tempore"),
                                        }};
                                        mountPath = "assumenda";
                                        nfs = new Nfs() {{
                                            remotePath = "deleniti";
                                            server = "ea";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "aut";
                                        gcs = new Gcs() {{
                                            remotePath = "dignissimos";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("voluptatem"),
                                            add("quo"),
                                            add("atque"),
                                        }};
                                        mountPath = "vel";
                                        nfs = new Nfs() {{
                                            remotePath = "itaque";
                                            server = "ut";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        deviceName = "ut";
                                        gcs = new Gcs() {{
                                            remotePath = "unde";
                                        }};
                                        mountOptions = new String[]() {{
                                            add("fuga"),
                                            add("maiores"),
                                            add("repellendus"),
                                        }};
                                        mountPath = "ducimus";
                                        nfs = new Nfs() {{
                                            remotePath = "repudiandae";
                                            server = "voluptates";
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