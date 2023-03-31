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

import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreatePathParams;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateQueryParams;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobLaunchStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobInput;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionExecutionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionRevisionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccessEgressEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccess;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Volume;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath;
import org.openapis.openapi.models.shared.GoogleCloudRunV2CloudSqlInstance;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Container;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Probe;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TCPSocketAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPGetAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader;
import org.openapis.openapi.models.shared.GoogleCloudRunV2GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ResourceRequirements;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVarSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretKeySelector;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionReference;
import org.openapis.openapi.models.shared.GoogleCloudRunV2BinaryAuthorization;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RunProjectsLocationsJobsCreateQueryParams() {{
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
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                    validateOnly = false;
                }};
                request = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "tempora";
                        useDefault = false;
                    }};
                    client = "suscipit";
                    clientVersion = "molestiae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "quis";
                        createTime = "veritatis";
                        name = "deserunt";
                    }};
                    launchStage = "LAUNCH_STAGE_UNSPECIFIED";
                    name = "ipsam";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("sapiente", "quo");
                            put("odit", "at");
                            put("at", "maiores");
                            put("molestiae", "quod");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("esse", "totam");
                            put("porro", "dolorum");
                            put("dicta", "nam");
                            put("officia", "occaecati");
                        }};
                        parallelism = 143353;
                        taskCount = 537373;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    command = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "esse";
                                            value = "ipsum";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "excepturi";
                                                    version = "aspernatur";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "perferendis";
                                            value = "ad";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "natus";
                                                    version = "sed";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "iste";
                                            value = "dolor";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "natus";
                                                    version = "laboriosam";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "hic";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 902599;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 681820;
                                            service = "in";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "iste";
                                                    value = "iure";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "saepe";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            path = "architecto";
                                            port = 60225;
                                        }};
                                        initialDelaySeconds = 969810;
                                        periodSeconds = 666767;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 653140;
                                        }};
                                        timeoutSeconds = 670638;
                                    }};
                                    name = "dolores";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 358152;
                                            name = "explicabo";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("enim", "omnis");
                                            put("nemo", "minima");
                                            put("excepturi", "accusantium");
                                            put("iure", "culpa");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 988374;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 958950;
                                            service = "architecto";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "dolorem";
                                                    value = "culpa";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "consequuntur";
                                                    value = "repellat";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "mollitia";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            path = "numquam";
                                            port = 414369;
                                        }};
                                        initialDelaySeconds = 466311;
                                        periodSeconds = 474697;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 244425;
                                        }};
                                        timeoutSeconds = 623510;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "quis";
                                            name = "vitae";
                                        }}),
                                    }};
                                    workingDir = "laborum";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("enim"),
                                        add("odit"),
                                        add("quo"),
                                    }};
                                    command = new String[]{{
                                        add("tenetur"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "id";
                                            value = "possimus";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "aut";
                                                    version = "quasi";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "error";
                                            value = "temporibus";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "laborum";
                                                    version = "quasi";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "reiciendis";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 976460;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 878194;
                                            service = "nihil";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "voluptatibus";
                                                    value = "ipsa";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "omnis";
                                                    value = "voluptate";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "cum";
                                                    value = "perferendis";
                                                }}),
                                            }};
                                            path = "doloremque";
                                            port = 441711;
                                        }};
                                        initialDelaySeconds = 282807;
                                        periodSeconds = 979587;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 120196;
                                        }};
                                        timeoutSeconds = 359444;
                                    }};
                                    name = "dolore";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 118727;
                                            name = "harum";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 317983;
                                            name = "accusamus";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("repudiandae", "quae");
                                            put("ipsum", "quidem");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 565189;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 566602;
                                            service = "pariatur";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "praesentium";
                                                    value = "rem";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "voluptates";
                                                    value = "quasi";
                                                }}),
                                            }};
                                            path = "repudiandae";
                                            port = 575947;
                                        }};
                                        initialDelaySeconds = 83112;
                                        periodSeconds = 929297;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 277718;
                                        }};
                                        timeoutSeconds = 318569;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "est";
                                            name = "quibusdam";
                                        }}),
                                    }};
                                    workingDir = "explicabo";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("distinctio"),
                                        add("quibusdam"),
                                        add("labore"),
                                    }};
                                    command = new String[]{{
                                        add("qui"),
                                        add("aliquid"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "quos";
                                            value = "perferendis";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "magni";
                                                    version = "assumenda";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "ipsam";
                                            value = "alias";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "fugit";
                                                    version = "dolorum";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "excepturi";
                                            value = "tempora";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "facilis";
                                                    version = "tempore";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "labore";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 962189;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 433288;
                                            service = "non";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "sint";
                                                    value = "aliquid";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "provident";
                                                    value = "necessitatibus";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "sint";
                                                    value = "officia";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "dolor";
                                                    value = "debitis";
                                                }}),
                                            }};
                                            path = "a";
                                            port = 680056;
                                        }};
                                        initialDelaySeconds = 447125;
                                        periodSeconds = 449198;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 846409;
                                        }};
                                        timeoutSeconds = 978571;
                                    }};
                                    name = "rerum";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 297437;
                                            name = "cumque";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("ea", "aliquid");
                                            put("laborum", "accusamus");
                                            put("non", "occaecati");
                                            put("enim", "accusamus");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 965417;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 692532;
                                            service = "provident";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "id";
                                                    value = "blanditiis";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "deleniti";
                                                    value = "sapiente";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "amet";
                                                    value = "deserunt";
                                                }}),
                                            }};
                                            path = "nisi";
                                            port = 423855;
                                        }};
                                        initialDelaySeconds = 618809;
                                        periodSeconds = 606393;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 474867;
                                        }};
                                        timeoutSeconds = 19193;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "magnam";
                                            name = "distinctio";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "id";
                                            name = "labore";
                                        }}),
                                    }};
                                    workingDir = "labore";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("natus"),
                                        add("nobis"),
                                    }};
                                    command = new String[]{{
                                        add("vero"),
                                        add("aspernatur"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "magnam";
                                            value = "et";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "excepturi";
                                                    version = "ullam";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "provident";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 551816;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 574325;
                                            service = "accusantium";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "reiciendis";
                                                    value = "mollitia";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "ad";
                                                    value = "eum";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "dolor";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            path = "odit";
                                            port = 367562;
                                        }};
                                        initialDelaySeconds = 97260;
                                        periodSeconds = 435865;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 984043;
                                        }};
                                        timeoutSeconds = 891924;
                                    }};
                                    name = "eius";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 537023;
                                            name = "facilis";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 447926;
                                            name = "architecto";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 99569;
                                            name = "repudiandae";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 352312;
                                            name = "expedita";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("repellat", "quibusdam");
                                            put("sed", "saepe");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 868126;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 37559;
                                            service = "consequuntur";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "natus";
                                                    value = "magni";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "sunt";
                                                    value = "quo";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "illum";
                                                    value = "pariatur";
                                                }}),
                                            }};
                                            path = "maxime";
                                            port = 411397;
                                        }};
                                        initialDelaySeconds = 569101;
                                        periodSeconds = 139972;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 407183;
                                        }};
                                        timeoutSeconds = 33222;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "maiores";
                                            name = "quidem";
                                        }}),
                                    }};
                                    workingDir = "ipsam";
                                }}),
                            }};
                            encryptionKey = "voluptate";
                            executionEnvironment = "EXECUTION_ENVIRONMENT_GEN1";
                            maxRetries = 722056;
                            serviceAccount = "eaque";
                            timeout = "pariatur";
                            volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("perferendis"),
                                            add("fugiat"),
                                            add("amet"),
                                            add("aut"),
                                        }};
                                    }};
                                    name = "cumque";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 359978;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 729991;
                                                path = "nobis";
                                                version = "dolores";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 339404;
                                                path = "totam";
                                                version = "dignissimos";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 54338;
                                                path = "quis";
                                                version = "nesciunt";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 179490;
                                                path = "perferendis";
                                                version = "dolores";
                                            }}),
                                        }};
                                        secret = "minus";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("dolor"),
                                            add("vero"),
                                        }};
                                    }};
                                    name = "nostrum";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 944120;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 608253;
                                                path = "facilis";
                                                version = "perspiciatis";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 31838;
                                                path = "porro";
                                                version = "consequuntur";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 500026;
                                                path = "error";
                                                version = "eaque";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 577229;
                                                path = "rerum";
                                                version = "adipisci";
                                            }}),
                                        }};
                                        secret = "asperiores";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "earum";
                                egress = "VPC_EGRESS_UNSPECIFIED";
                            }};
                        }};
                    }};
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = "CANCELLED";
                        lastTransitionTime = "dolorum";
                        message = "deleniti";
                        reason = "IMMEDIATE_RETRY";
                        revisionReason = "CUSTOMIZED_PATH_RESPONSE_PENDING";
                        severity = "INFO";
                        state = "CONDITION_FAILED";
                        type = "delectus";
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
* `runProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `runProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
