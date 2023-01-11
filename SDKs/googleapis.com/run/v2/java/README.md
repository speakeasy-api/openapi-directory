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

            RunProjectsLocationsJobsCreateRequest req = new RunProjectsLocationsJobsCreateRequest() {{
                security = new RunProjectsLocationsJobsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RunProjectsLocationsJobsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new RunProjectsLocationsJobsCreateQueryParams() {{
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
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                    validateOnly = true;
                }};
                request = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "dolorem";
                        useDefault = false;
                    }};
                    client = "voluptate";
                    clientVersion = "iste";
                    labels = new java.util.HashMap<String, String>() {{
                        put("totam", "dolores");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "illum";
                        createTime = "debitis";
                        name = "vel";
                    }};
                    launchStage = "LAUNCH_STAGE_UNSPECIFIED";
                    name = "dolore";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("aspernatur", "accusantium");
                            put("totam", "commodi");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("est", "aut");
                            put("odit", "non");
                            put("voluptas", "omnis");
                        }};
                        parallelism = 1059542851699319360;
                        taskCount = 6972732843819909978;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new openapisdk.models.shared.GoogleCloudRunV2Container[]() {{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]() {{
                                        add("autem"),
                                        add("consectetur"),
                                    }};
                                    command = new String[]() {{
                                        add("odio"),
                                    }};
                                    env = new openapisdk.models.shared.GoogleCloudRunV2EnvVar[]() {{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "recusandae";
                                            value = "at";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "ipsum";
                                                    version = "eveniet";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "modi";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 7338728586234333996;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 5392504858645185670;
                                            service = "ut";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "aut";
                                                    value = "reprehenderit";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "tempore";
                                                    value = "maiores";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "incidunt";
                                                    value = "dolor";
                                                }}),
                                            }};
                                            path = "beatae";
                                        }};
                                        initialDelaySeconds = 4112921325496946042;
                                        periodSeconds = 2671030200101705776;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 3508963237347473586;
                                        }};
                                        timeoutSeconds = 8565714761387219319;
                                    }};
                                    name = "ipsum";
                                    ports = new openapisdk.models.shared.GoogleCloudRunV2ContainerPort[]() {{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 7014402135919778893;
                                            name = "placeat";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = true;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("mollitia", "voluptas");
                                            put("quam", "reprehenderit");
                                            put("qui", "qui");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 4308690457412179793;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 7663837986485606015;
                                            service = "autem";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "ut";
                                                    value = "itaque";
                                                }}),
                                            }};
                                            path = "ab";
                                        }};
                                        initialDelaySeconds = 8218430188258725598;
                                        periodSeconds = 4255970180603226314;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 2682844416202521633;
                                        }};
                                        timeoutSeconds = 4304520335772049496;
                                    }};
                                    volumeMounts = new openapisdk.models.shared.GoogleCloudRunV2VolumeMount[]() {{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "architecto";
                                            name = "quam";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "velit";
                                            name = "cumque";
                                        }}),
                                    }};
                                    workingDir = "soluta";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]() {{
                                        add("voluptates"),
                                        add("magni"),
                                    }};
                                    command = new String[]() {{
                                        add("optio"),
                                        add("qui"),
                                        add("earum"),
                                    }};
                                    env = new openapisdk.models.shared.GoogleCloudRunV2EnvVar[]() {{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "omnis";
                                            value = "ut";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "consequatur";
                                                    version = "dolor";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "commodi";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 1925401661646756611;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 150340687756601720;
                                            service = "consectetur";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "ut";
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                            path = "sed";
                                        }};
                                        initialDelaySeconds = 6604365855503062775;
                                        periodSeconds = 1836598054518427835;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 7540276489530073149;
                                        }};
                                        timeoutSeconds = 7638413271565042464;
                                    }};
                                    name = "consequuntur";
                                    ports = new openapisdk.models.shared.GoogleCloudRunV2ContainerPort[]() {{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 434400178965901716;
                                            name = "ipsa";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "atque");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 5311927246208705713;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 3967212276624460248;
                                            service = "explicabo";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "maxime";
                                                    value = "eum";
                                                }}),
                                            }};
                                            path = "perferendis";
                                        }};
                                        initialDelaySeconds = 6018839464190747916;
                                        periodSeconds = 2037591971392316788;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 6394356307858046544;
                                        }};
                                        timeoutSeconds = 9096429817347931519;
                                    }};
                                    volumeMounts = new openapisdk.models.shared.GoogleCloudRunV2VolumeMount[]() {{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "minima";
                                            name = "necessitatibus";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "est";
                                            name = "quis";
                                        }}),
                                    }};
                                    workingDir = "eum";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]() {{
                                        add("et"),
                                    }};
                                    command = new String[]() {{
                                        add("ad"),
                                        add("expedita"),
                                    }};
                                    env = new openapisdk.models.shared.GoogleCloudRunV2EnvVar[]() {{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "qui";
                                            value = "modi";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "nihil";
                                                    version = "tempora";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "deserunt";
                                            value = "eaque";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "sunt";
                                                    version = "sit";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "autem";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 7506934391669544280;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 952897656927189675;
                                            service = "vel";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "qui";
                                                    value = "nisi";
                                                }}),
                                            }};
                                            path = "quis";
                                        }};
                                        initialDelaySeconds = 1062424578646559011;
                                        periodSeconds = 3321710981400855005;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 4230816687517220040;
                                        }};
                                        timeoutSeconds = 6165970817952435057;
                                    }};
                                    name = "accusamus";
                                    ports = new openapisdk.models.shared.GoogleCloudRunV2ContainerPort[]() {{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 2223751782546645906;
                                            name = "rerum";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 6870143829354119039;
                                            name = "laborum";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("minus", "soluta");
                                            put("aperiam", "consequuntur");
                                            put("excepturi", "mollitia");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 1377327594979300801;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 2654595716993425044;
                                            service = "ipsa";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "animi";
                                                    value = "ut";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "aliquam";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            path = "sed";
                                        }};
                                        initialDelaySeconds = 4680282486764958852;
                                        periodSeconds = 6464511094049078446;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 5857858779299113932;
                                        }};
                                        timeoutSeconds = 3308475210590835610;
                                    }};
                                    volumeMounts = new openapisdk.models.shared.GoogleCloudRunV2VolumeMount[]() {{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "provident";
                                            name = "molestiae";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "pariatur";
                                            name = "quasi";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "corrupti";
                                            name = "enim";
                                        }}),
                                    }};
                                    workingDir = "qui";
                                }}),
                            }};
                            encryptionKey = "sit";
                            executionEnvironment = "EXECUTION_ENVIRONMENT_GEN2";
                            maxRetries = 9178255268999664835;
                            serviceAccount = "neque";
                            timeout = "consequuntur";
                            volumes = new openapisdk.models.shared.GoogleCloudRunV2Volume[]() {{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]() {{
                                            add("est"),
                                            add("occaecati"),
                                        }};
                                    }};
                                    name = "ex";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 4932993544835283753;
                                        items = new openapisdk.models.shared.GoogleCloudRunV2VersionToPath[]() {{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 6514303339301977139;
                                                path = "velit";
                                                version = "quae";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 5042961816383320698;
                                                path = "ut";
                                                version = "necessitatibus";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 546268158124317116;
                                                path = "possimus";
                                                version = "voluptatem";
                                            }}),
                                        }};
                                        secret = "dolorum";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "doloribus";
                                egress = "PRIVATE_RANGES_ONLY";
                            }};
                        }};
                    }};
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = "CANCELLED";
                        lastTransitionTime = "earum";
                        message = "et";
                        reason = "POSTPONED_RETRY";
                        revisionReason = "HEALTH_CHECK_SKIPPED";
                        severity = "WARNING";
                        state = "CONDITION_RECONCILING";
                        type = "ipsum";
                    }};
                }};
            }};

            RunProjectsLocationsJobsCreateResponse res = sdk.projects.runProjectsLocationsJobsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
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

* `runProjectsLocationsJobsCreate` - Creates a Job.
* `runProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `runProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `runProjectsLocationsJobsList` - Lists Jobs.
* `runProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `runProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `runProjectsLocationsServicesCreate` - Creates a new Service in a given project and location.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists Services.
* `runProjectsLocationsServicesPatch` - Updates a Service.
* `runProjectsLocationsServicesRevisionsDelete` - Deletes a Revision.
* `runProjectsLocationsServicesRevisionsGet` - Gets information about a Revision.
* `runProjectsLocationsServicesRevisionsList` - Lists Revisions from a given Service, or from a given location.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
