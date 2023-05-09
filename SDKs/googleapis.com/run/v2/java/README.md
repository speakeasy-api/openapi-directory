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
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2BinaryAuthorization;
import org.openapis.openapi.models.shared.GoogleCloudRunV2CloudSqlInstance;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionExecutionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionRevisionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Container;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVarSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionReference;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPGetAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobInput;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobLaunchStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Probe;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ResourceRequirements;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretKeySelector;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TCPSocketAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Volume;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccess;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccessEgressEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsCreateRequest req = new RunProjectsLocationsJobsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "error";
                        useDefault = false;
                    }};;
                    client = "deserunt";
                    clientVersion = "suscipit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "tempora";
                        createTime = "suscipit";
                        name = "Alexandra Schulist";
                    }};;
                    launchStage = GoogleCloudRunV2JobLaunchStageEnum.ALPHA;
                    name = "Mrs. Sophie Smith MD";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("ipsam", "repellendus");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("quo", "odit");
                            put("at", "at");
                            put("maiores", "molestiae");
                            put("quod", "quod");
                        }};
                        parallelism = 461479;
                        taskCount = 520478;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                    command = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                    dependsOn = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Krista Rippin";
                                            value = "excepturi";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "aspernatur";
                                                    version = "perferendis";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Faye Cormier";
                                            value = "natus";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "laboriosam";
                                                    version = "hic";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "saepe";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 681820;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 449950;
                                            service = "corporis";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Mr. Kerry Predovic";
                                                    value = "est";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Cameron Dach";
                                                    value = "explicabo";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Ronnie Mohr";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            path = "accusantium";
                                            port = 438601;
                                        }};
                                        initialDelaySeconds = 634274;
                                        periodSeconds = 988374;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 958950;
                                        }};
                                        timeoutSeconds = 102044;
                                    }};
                                    name = "Mike Nicolas";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 581850;
                                            name = "Lucy Konopelski";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 623510;
                                            name = "Beatrice Brown";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 317202;
                                            name = "Angelica Dietrich";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("possimus", "aut");
                                            put("quasi", "error");
                                            put("temporibus", "laborum");
                                        }};
                                        startupCpuBoost = false;
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 96098;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 971945;
                                            service = "voluptatibus";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Miss Irma Wolff";
                                                    value = "cum";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Sharon Kiehn";
                                                    value = "dicta";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Miss Valerie Kshlerin";
                                                    value = "accusamus";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Elvira Bergnaum";
                                                    value = "molestias";
                                                }}),
                                            }};
                                            path = "excepturi";
                                            port = 865103;
                                        }};
                                        initialDelaySeconds = 265389;
                                        periodSeconds = 508969;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 523248;
                                        }};
                                        timeoutSeconds = 916723;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "repudiandae";
                                            name = "Patrick Ward";
                                        }}),
                                    }};
                                    workingDir = "consequatur";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("quibusdam"),
                                        add("explicabo"),
                                        add("deserunt"),
                                    }};
                                    command = new String[]{{
                                        add("quibusdam"),
                                        add("labore"),
                                        add("modi"),
                                    }};
                                    dependsOn = new String[]{{
                                        add("aliquid"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Christopher Cummerata";
                                            value = "alias";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "fugit";
                                                    version = "dolorum";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Eddie Prosacco";
                                            value = "delectus";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "eum";
                                                    version = "non";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Sergio Hyatt";
                                            value = "sint";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "officia";
                                                    version = "dolor";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "debitis";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 952749;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 680056;
                                            service = "in";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Mrs. Emilio Price";
                                                    value = "facere";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Beth Padberg";
                                                    value = "occaecati";
                                                }}),
                                            }};
                                            path = "enim";
                                            port = 881736;
                                        }};
                                        initialDelaySeconds = 965417;
                                        periodSeconds = 692532;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 588465;
                                        }};
                                        timeoutSeconds = 725255;
                                    }};
                                    name = "Nelson Lesch";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 394869;
                                            name = "Ada Moen IV";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 301575;
                                            name = "Alfonso Green";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 618016;
                                            name = "Duane Thiel II";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("excepturi", "ullam");
                                        }};
                                        startupCpuBoost = false;
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 590873;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 551816;
                                            service = "sint";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Abel O'Hara";
                                                    value = "dolor";
                                                }}),
                                            }};
                                            path = "necessitatibus";
                                            port = 141264;
                                        }};
                                        initialDelaySeconds = 367562;
                                        periodSeconds = 97260;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 435865;
                                        }};
                                        timeoutSeconds = 984043;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "eius";
                                            name = "Alfredo Prosacco Sr.";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "repudiandae";
                                            name = "Lola Koss";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "sed";
                                            name = "Al Bashirian";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "natus";
                                            name = "Joan Satterfield";
                                        }}),
                                    }};
                                    workingDir = "maxime";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("excepturi"),
                                        add("odit"),
                                    }};
                                    command = new String[]{{
                                        add("accusantium"),
                                        add("ab"),
                                    }};
                                    dependsOn = new String[]{{
                                        add("quidem"),
                                        add("ipsam"),
                                        add("voluptate"),
                                        add("autem"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Meredith Hickle PhD";
                                            value = "amet";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "aut";
                                                    version = "cumque";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Mindy Renner";
                                            value = "quis";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "totam";
                                                    version = "dignissimos";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Beatrice Dooley Sr.";
                                            value = "minus";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "quam";
                                                    version = "dolor";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "vero";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 345352;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 944120;
                                            service = "recusandae";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Freddie Bartoletti";
                                                    value = "blanditiis";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Gary Mayert";
                                                    value = "asperiores";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Edwin Morar";
                                                    value = "pariatur";
                                                }}),
                                            }};
                                            path = "provident";
                                            port = 750844;
                                        }};
                                        initialDelaySeconds = 730122;
                                        periodSeconds = 964490;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 311945;
                                        }};
                                        timeoutSeconds = 554242;
                                    }};
                                    name = "Florence Ebert";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 944373;
                                            name = "Felipe Klein";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("dolorum", "numquam");
                                        }};
                                        startupCpuBoost = false;
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 85295;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 58029;
                                            service = "ipsa";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Bertha Thompson";
                                                    value = "voluptas";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Dr. Craig Littel DDS";
                                                    value = "dolorum";
                                                }}),
                                            }};
                                            path = "iusto";
                                            port = 453697;
                                        }};
                                        initialDelaySeconds = 677082;
                                        periodSeconds = 536579;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 607045;
                                        }};
                                        timeoutSeconds = 896672;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "asperiores";
                                            name = "Edna Klocko";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "eius";
                                            name = "Lisa Fay";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "ad";
                                            name = "Sam Oberbrunner";
                                        }}),
                                    }};
                                    workingDir = "repellendus";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("similique"),
                                        add("alias"),
                                        add("at"),
                                    }};
                                    command = new String[]{{
                                        add("tempora"),
                                        add("vel"),
                                    }};
                                    dependsOn = new String[]{{
                                        add("officiis"),
                                        add("qui"),
                                        add("dolorum"),
                                        add("a"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Tyrone Emard";
                                            value = "amet";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "tempore";
                                                    version = "accusamus";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Darlene Effertz";
                                            value = "nihil";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "sit";
                                                    version = "expedita";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "neque";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 153694;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 424685;
                                            service = "libero";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Darryl Emard";
                                                    value = "cupiditate";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Miss Jody Rogahn";
                                                    value = "incidunt";
                                                }}),
                                            }};
                                            path = "aspernatur";
                                            port = 174909;
                                        }};
                                        initialDelaySeconds = 716860;
                                        periodSeconds = 704474;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 396060;
                                        }};
                                        timeoutSeconds = 463150;
                                    }};
                                    name = "Marty Deckow";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 488056;
                                            name = "Marion Reichert DDS";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("nobis", "et");
                                            put("saepe", "ipsum");
                                            put("veritatis", "nobis");
                                        }};
                                        startupCpuBoost = false;
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 552193;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 731694;
                                            service = "cupiditate";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Mike Greenholt";
                                                    value = "dolorum";
                                                }}),
                                            }};
                                            path = "architecto";
                                            port = 63038;
                                        }};
                                        initialDelaySeconds = 16429;
                                        periodSeconds = 555649;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 929530;
                                        }};
                                        timeoutSeconds = 9240;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "repellendus";
                                            name = "Domingo Grady";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "qui";
                                            name = "Marsha Kuhic";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "quisquam";
                                            name = "Arturo Hauck";
                                        }}),
                                    }};
                                    workingDir = "voluptate";
                                }}),
                            }};
                            encryptionKey = "consectetur";
                            executionEnvironment = GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum.EXECUTION_ENVIRONMENT_GEN2;
                            maxRetries = 949319;
                            serviceAccount = "dignissimos";
                            timeout = "hic";
                            volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("odio"),
                                            add("similique"),
                                            add("facilis"),
                                            add("vero"),
                                        }};
                                    }};
                                    emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                        medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                        sizeLimit = "dolore";
                                    }};
                                    name = "Gilberto Dickinson";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 13236;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 347233;
                                                path = "nulla";
                                                version = "fugit";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 780427;
                                                path = "maiores";
                                                version = "doloribus";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 478370;
                                                path = "eligendi";
                                                version = "ducimus";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 4048;
                                                path = "officia";
                                                version = "tempora";
                                            }}),
                                        }};
                                        secret = "ipsam";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("aspernatur"),
                                            add("vel"),
                                        }};
                                    }};
                                    emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                        medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEMORY;
                                        sizeLimit = "magnam";
                                    }};
                                    name = "Mrs. Vicki Langosh";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 97844;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 862192;
                                                path = "excepturi";
                                                version = "voluptatibus";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 343605;
                                                path = "sapiente";
                                                version = "quisquam";
                                            }}),
                                        }};
                                        secret = "saepe";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("impedit"),
                                            add("corporis"),
                                        }};
                                    }};
                                    emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                        medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                        sizeLimit = "aliquid";
                                    }};
                                    name = "Megan Jaskolski";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 926213;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 325310;
                                                path = "eaque";
                                                version = "a";
                                            }}),
                                        }};
                                        secret = "libero";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "aut";
                                egress = GoogleCloudRunV2VpcAccessEgressEnum.VPC_EGRESS_UNSPECIFIED;
                            }};;
                        }};;
                    }};;
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum.NON_ZERO_EXIT_CODE;
                        lastTransitionTime = "impedit";
                        message = "aliquam";
                        reason = GoogleCloudRunV2ConditionReasonEnum.REVISION_FAILED;
                        revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum.HEALTH_CHECK_SKIPPED;
                        severity = GoogleCloudRunV2ConditionSeverityEnum.SEVERITY_UNSPECIFIED;
                        state = GoogleCloudRunV2ConditionStateEnum.CONDITION_PENDING;
                        type = "et";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "velit";
                jobId = "eum";
                key = "autem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "assumenda";
                uploadProtocol = "nulla";
                validateOnly = false;
            }};            

            RunProjectsLocationsJobsCreateResponse res = sdk.projects.runProjectsLocationsJobsCreate(req, new RunProjectsLocationsJobsCreateSecurity("voluptas", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [runProjectsLocationsJobsCreate](docs/projects/README.md#runprojectslocationsjobscreate) - Creates a Job.
* [runProjectsLocationsJobsExecutionsList](docs/projects/README.md#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [runProjectsLocationsJobsExecutionsTasksList](docs/projects/README.md#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [runProjectsLocationsJobsList](docs/projects/README.md#runprojectslocationsjobslist) - Lists Jobs.
* [runProjectsLocationsJobsRun](docs/projects/README.md#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [runProjectsLocationsOperationsList](docs/projects/README.md#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [runProjectsLocationsOperationsWait](docs/projects/README.md#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [runProjectsLocationsServicesCreate](docs/projects/README.md#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [runProjectsLocationsServicesGetIamPolicy](docs/projects/README.md#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](docs/projects/README.md#runprojectslocationsserviceslist) - Lists Services.
* [runProjectsLocationsServicesPatch](docs/projects/README.md#runprojectslocationsservicespatch) - Updates a Service.
* [runProjectsLocationsServicesRevisionsDelete](docs/projects/README.md#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [runProjectsLocationsServicesRevisionsGet](docs/projects/README.md#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [runProjectsLocationsServicesRevisionsList](docs/projects/README.md#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [runProjectsLocationsServicesSetIamPolicy](docs/projects/README.md#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
