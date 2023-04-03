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
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsCreateRequest req = new RunProjectsLocationsJobsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "vel";
                        useDefault = false;
                    }};
                    client = "error";
                    clientVersion = "deserunt";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "delectus";
                        createTime = "tempora";
                        name = "suscipit";
                    }};
                    launchStage = "EARLY_ACCESS";
                    name = "minus";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("voluptatum", "iusto");
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                            put("ab", "quis");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("deserunt", "perferendis");
                        }};
                        parallelism = 368241;
                        taskCount = 832620;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("odit"),
                                        add("at"),
                                        add("at"),
                                        add("maiores"),
                                    }};
                                    command = new String[]{{
                                        add("quod"),
                                        add("quod"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "totam";
                                            value = "porro";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "dolorum";
                                                    version = "dicta";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "nam";
                                            value = "officia";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "occaecati";
                                                    version = "fugit";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "deleniti";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 944669;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 758616;
                                            service = "totam";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "commodi";
                                                    value = "molestiae";
                                                }}),
                                            }};
                                            path = "modi";
                                            port = 186332;
                                        }};
                                        initialDelaySeconds = 774234;
                                        periodSeconds = 736918;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 456150;
                                        }};
                                        timeoutSeconds = 216550;
                                    }};
                                    name = "excepturi";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 18789;
                                            name = "ad";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("sed", "iste");
                                            put("dolor", "natus");
                                            put("laboriosam", "hic");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
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
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "dolorem";
                                            name = "corporis";
                                        }}),
                                    }};
                                    workingDir = "explicabo";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("enim"),
                                        add("omnis"),
                                        add("nemo"),
                                        add("minima"),
                                    }};
                                    command = new String[]{{
                                        add("accusantium"),
                                        add("iure"),
                                        add("culpa"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "sapiente";
                                            value = "architecto";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "mollitia";
                                                    version = "dolorem";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "culpa";
                                            value = "consequuntur";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "repellat";
                                                    version = "mollitia";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "occaecati";
                                            value = "numquam";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "commodi";
                                                    version = "quam";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "molestiae";
                                            value = "velit";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "error";
                                                    version = "quia";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "quis";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 110375;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 674752;
                                            service = "animi";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "odit";
                                                    value = "quo";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "sequi";
                                                    value = "tenetur";
                                                }}),
                                            }};
                                            path = "ipsam";
                                            port = 662527;
                                        }};
                                        initialDelaySeconds = 820994;
                                        periodSeconds = 13571;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 97101;
                                        }};
                                        timeoutSeconds = 622846;
                                    }};
                                    name = "temporibus";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 96098;
                                            name = "reiciendis";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 976460;
                                            name = "vero";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 468651;
                                            name = "praesentium";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("ipsa", "omnis");
                                            put("voluptate", "cum");
                                            put("perferendis", "doloremque");
                                            put("reprehenderit", "ut");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 979587;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 120196;
                                            service = "corporis";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "iusto";
                                                    value = "dicta";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "harum";
                                                    value = "enim";
                                                }}),
                                            }};
                                            path = "accusamus";
                                            port = 414263;
                                        }};
                                        initialDelaySeconds = 918236;
                                        periodSeconds = 64147;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 216822;
                                        }};
                                        timeoutSeconds = 692472;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "excepturi";
                                            name = "pariatur";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "modi";
                                            name = "praesentium";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "rem";
                                            name = "voluptates";
                                        }}),
                                    }};
                                    workingDir = "quasi";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("sint"),
                                        add("veritatis"),
                                        add("itaque"),
                                        add("incidunt"),
                                    }};
                                    command = new String[]{{
                                        add("consequatur"),
                                        add("est"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "explicabo";
                                            value = "deserunt";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "distinctio";
                                                    version = "quibusdam";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "labore";
                                            value = "modi";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "qui";
                                                    version = "aliquid";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "cupiditate";
                                            value = "quos";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "perferendis";
                                                    version = "magni";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "assumenda";
                                            value = "ipsam";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "alias";
                                                    version = "fugit";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "dolorum";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 569618;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 270008;
                                            service = "facilis";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "labore";
                                                    value = "delectus";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "eum";
                                                    value = "non";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "eligendi";
                                                    value = "sint";
                                                }}),
                                            }};
                                            path = "aliquid";
                                            port = 592042;
                                        }};
                                        initialDelaySeconds = 896039;
                                        periodSeconds = 572252;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 638921;
                                        }};
                                        timeoutSeconds = 223081;
                                    }};
                                    name = "debitis";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 680056;
                                            name = "in";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 449198;
                                            name = "illum";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 978571;
                                            name = "rerum";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 116202;
                                            name = "magnam";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("facere", "ea");
                                            put("aliquid", "laborum");
                                            put("accusamus", "non");
                                            put("occaecati", "enim");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 881736;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 965417;
                                            service = "quidem";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "nam";
                                                    value = "id";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "blanditiis";
                                                    value = "deleniti";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "sapiente";
                                                    value = "amet";
                                                }}),
                                            }};
                                            path = "deserunt";
                                            port = 394869;
                                        }};
                                        initialDelaySeconds = 423855;
                                        periodSeconds = 618809;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 606393;
                                        }};
                                        timeoutSeconds = 474867;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "nihil";
                                            name = "magnam";
                                        }}),
                                    }};
                                    workingDir = "distinctio";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("labore"),
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                    command = new String[]{{
                                        add("nobis"),
                                        add("eum"),
                                        add("vero"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "architecto";
                                            value = "magnam";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "et";
                                                    version = "excepturi";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "ullam";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 590873;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 551816;
                                            service = "sint";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "mollitia";
                                                    value = "reiciendis";
                                                }}),
                                            }};
                                            path = "mollitia";
                                            port = 320997;
                                        }};
                                        initialDelaySeconds = 431418;
                                        periodSeconds = 221262;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 896547;
                                        }};
                                        timeoutSeconds = 141264;
                                    }};
                                    name = "nemo";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 435865;
                                            name = "doloribus";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("eius", "maxime");
                                            put("deleniti", "facilis");
                                            put("in", "architecto");
                                            put("architecto", "repudiandae");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 352312;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 714242;
                                            service = "nihil";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "quibusdam";
                                                    value = "sed";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "saepe";
                                                    value = "pariatur";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "accusantium";
                                                    value = "consequuntur";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "praesentium";
                                                    value = "natus";
                                                }}),
                                            }};
                                            path = "magni";
                                            port = 123820;
                                        }};
                                        initialDelaySeconds = 779051;
                                        periodSeconds = 848009;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 864934;
                                        }};
                                        timeoutSeconds = 807319;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "excepturi";
                                            name = "odit";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "ea";
                                            name = "accusantium";
                                        }}),
                                    }};
                                    workingDir = "ab";
                                }}),
                            }};
                            encryptionKey = "maiores";
                            executionEnvironment = "EXECUTION_ENVIRONMENT_GEN2";
                            maxRetries = 373291;
                            serviceAccount = "voluptate";
                            timeout = "autem";
                            volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("pariatur"),
                                        }};
                                    }};
                                    name = "nemo";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 975522;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 855804;
                                                path = "amet";
                                                version = "aut";
                                            }}),
                                        }};
                                        secret = "cumque";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("hic"),
                                            add("libero"),
                                        }};
                                    }};
                                    name = "nobis";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 171629;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 521037;
                                                path = "dignissimos";
                                                version = "eaque";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 338985;
                                                path = "nesciunt";
                                                version = "eos";
                                            }}),
                                        }};
                                        secret = "perferendis";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("minus"),
                                        }};
                                    }};
                                    name = "quam";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 223924;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 345352;
                                                path = "hic";
                                                version = "recusandae";
                                            }}),
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
                                        }};
                                        secret = "occaecati";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "rerum";
                                egress = "VPC_EGRESS_UNSPECIFIED";
                            }};
                        }};
                    }};
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = "CANCELLING";
                        lastTransitionTime = "earum";
                        message = "modi";
                        reason = "ENCRYPTION_KEY_CHECK_FAILED";
                        revisionReason = "MIN_INSTANCES_NOT_PROVISIONED";
                        severity = "WARNING";
                        state = "CONDITION_SUCCEEDED";
                        type = "provident";
                    }};
                }};
                accessToken = "nobis";
                alt = "proto";
                callback = "delectus";
                fields = "quaerat";
                jobId = "quos";
                key = "aliquid";
                oauthToken = "dolorem";
                parent = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
                validateOnly = false;
            }}            

            RunProjectsLocationsJobsCreateResponse res = sdk.projects.runProjectsLocationsJobsCreate(req, new RunProjectsLocationsJobsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
