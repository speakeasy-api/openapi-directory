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

            RunNamespacesJobsCreateRequest req = new RunNamespacesJobsCreateRequest() {{
                security = new RunNamespacesJobsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RunNamespacesJobsCreatePathParams() {{
                    parent = "quia";
                }};
                queryParams = new RunNamespacesJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "eum";
                    alt = "json";
                    callback = "itaque";
                    fields = "impedit";
                    key = "placeat";
                    oauthToken = "esse";
                    prettyPrint = false;
                    quotaUser = "sapiente";
                    uploadType = "non";
                    uploadProtocol = "perspiciatis";
                }};
                request = new Job() {{
                    apiVersion = "laboriosam";
                    kind = "fuga";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("itaque", "amet");
                            put("ex", "nulla");
                            put("sapiente", "dolores");
                        }};
                        clusterName = "voluptatem";
                        creationTimestamp = "deserunt";
                        deletionGracePeriodSeconds = 6495543562796115436;
                        deletionTimestamp = "voluptatem";
                        finalizers = new String[]() {{
                            add("laboriosam"),
                        }};
                        generateName = "qui";
                        generation = 443873397706115850;
                        labels = new java.util.HashMap<String, String>() {{
                            put("unde", "alias");
                            put("quaerat", "qui");
                        }};
                        name = "consequuntur";
                        namespace = "et";
                        ownerReferences = new openapisdk.models.shared.OwnerReference[]() {{
                            add(new OwnerReference() {{
                                apiVersion = "et";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "ratione";
                                name = "voluptas";
                                uid = "quaerat";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "architecto";
                                blockOwnerDeletion = false;
                                controller = true;
                                kind = "officiis";
                                name = "nulla";
                                uid = "sed";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "odit";
                                blockOwnerDeletion = false;
                                controller = true;
                                kind = "in";
                                name = "voluptate";
                                uid = "quo";
                            }}),
                        }};
                        resourceVersion = "provident";
                        selfLink = "et";
                        uid = "quibusdam";
                    }};
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "odio";
                        backoffLimit = 4980854814451068709;
                        completions = 6416461900353074878;
                        parallelism = 6745967034727974574;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "est";
                                containers = new openapisdk.models.shared.Container[]() {{
                                    add(new Container() {{
                                        args = new String[]() {{
                                            add("sit"),
                                        }};
                                        command = new String[]() {{
                                            add("commodi"),
                                            add("deserunt"),
                                        }};
                                        env = new openapisdk.models.shared.EnvVar[]() {{
                                            add(new EnvVar() {{
                                                name = "eos";
                                                value = "veritatis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "vel";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "est";
                                                        }};
                                                        name = "id";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "et";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "possimus";
                                                        }};
                                                        name = "vitae";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "est";
                                                value = "minus";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "dolores";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "ea";
                                                        }};
                                                        name = "et";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "voluptatem";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "consequatur";
                                                        }};
                                                        name = "nihil";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new openapisdk.models.shared.EnvFromSource[]() {{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "aut";
                                                    }};
                                                    name = "quis";
                                                    optional = true;
                                                }};
                                                prefix = "incidunt";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "sapiente";
                                                    }};
                                                    name = "et";
                                                    optional = true;
                                                }};
                                            }}),
                                        }};
                                        image = "quis";
                                        imagePullPolicy = "qui";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("aut"),
                                                }};
                                            }};
                                            failureThreshold = 6711387626686843273;
                                            grpc = new GrpcAction() {{
                                                port = 3208866810481984861;
                                                service = "quas";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "vero";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "reiciendis";
                                                        value = "aliquam";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "vitae";
                                                        value = "facilis";
                                                    }}),
                                                }};
                                                path = "ipsa";
                                                scheme = "ipsam";
                                            }};
                                            initialDelaySeconds = 8860148759241774910;
                                            periodSeconds = 3627238733053811544;
                                            successThreshold = 7952356740761457423;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "ad";
                                                port = 936109777341890437;
                                            }};
                                            timeoutSeconds = 5639837192463518066;
                                        }};
                                        name = "voluptas";
                                        ports = new openapisdk.models.shared.ContainerPort[]() {{
                                            add(new ContainerPort() {{
                                                containerPort = 5439324173076033005;
                                                name = "nihil";
                                                protocol = "ad";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 5475368691204685501;
                                                name = "deleniti";
                                                protocol = "dolor";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("natus"),
                                                    add("odio"),
                                                }};
                                            }};
                                            failureThreshold = 2038521334672436121;
                                            grpc = new GrpcAction() {{
                                                port = 2388699446342465995;
                                                service = "possimus";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "ipsum";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "culpa";
                                                        value = "fugit";
                                                    }}),
                                                }};
                                                path = "eaque";
                                                scheme = "dolorem";
                                            }};
                                            initialDelaySeconds = 1192832154538585400;
                                            periodSeconds = 1041593946706687031;
                                            successThreshold = 232524245438701595;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "hic";
                                                port = 6624152968535248429;
                                            }};
                                            timeoutSeconds = 936839204970475631;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("nemo", "voluptatem");
                                                put("inventore", "molestias");
                                                put("quisquam", "et");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("eveniet", "excepturi");
                                                put("ea", "incidunt");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 8017478756377895119;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("voluptatem"),
                                                    add("ut"),
                                                    add("assumenda"),
                                                }};
                                            }};
                                            failureThreshold = 3028737625635244447;
                                            grpc = new GrpcAction() {{
                                                port = 7663011083932512668;
                                                service = "ipsum";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "perferendis";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "ad";
                                                        value = "facere";
                                                    }}),
                                                }};
                                                path = "et";
                                                scheme = "libero";
                                            }};
                                            initialDelaySeconds = 4142331007241585666;
                                            periodSeconds = 366547234416597184;
                                            successThreshold = 2487654167470255367;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "et";
                                                port = 1700181251152582176;
                                            }};
                                            timeoutSeconds = 968201804781245561;
                                        }};
                                        terminationMessagePath = "dolores";
                                        terminationMessagePolicy = "voluptatem";
                                        volumeMounts = new openapisdk.models.shared.VolumeMount[]() {{
                                            add(new VolumeMount() {{
                                                mountPath = "quo";
                                                name = "et";
                                                readOnly = false;
                                                subPath = "sunt";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "vero";
                                                name = "nisi";
                                                readOnly = true;
                                                subPath = "qui";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "consequatur";
                                                name = "voluptatum";
                                                readOnly = false;
                                                subPath = "corporis";
                                            }}),
                                        }};
                                        workingDir = "fugiat";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]() {{
                                            add("voluptatem"),
                                            add("ratione"),
                                        }};
                                        command = new String[]() {{
                                            add("aliquid"),
                                        }};
                                        env = new openapisdk.models.shared.EnvVar[]() {{
                                            add(new EnvVar() {{
                                                name = "veniam";
                                                value = "hic";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "id";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "neque";
                                                        }};
                                                        name = "exercitationem";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "suscipit";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dolores";
                                                        }};
                                                        name = "dolores";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "non";
                                                value = "facilis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "enim";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "accusantium";
                                                        }};
                                                        name = "nihil";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "velit";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "libero";
                                                        }};
                                                        name = "est";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new openapisdk.models.shared.EnvFromSource[]() {{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "ut";
                                                    }};
                                                    name = "non";
                                                    optional = false;
                                                }};
                                                prefix = "sit";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "qui";
                                                    }};
                                                    name = "reprehenderit";
                                                    optional = true;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "voluptatum";
                                                    }};
                                                    name = "non";
                                                    optional = true;
                                                }};
                                                prefix = "accusamus";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "suscipit";
                                                    }};
                                                    name = "doloremque";
                                                    optional = true;
                                                }};
                                            }}),
                                        }};
                                        image = "quis";
                                        imagePullPolicy = "quibusdam";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("possimus"),
                                                }};
                                            }};
                                            failureThreshold = 596735270189682119;
                                            grpc = new GrpcAction() {{
                                                port = 7104520978615640161;
                                                service = "est";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "quos";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "facilis";
                                                        value = "cupiditate";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "ipsa";
                                                        value = "officia";
                                                    }}),
                                                }};
                                                path = "in";
                                                scheme = "nihil";
                                            }};
                                            initialDelaySeconds = 3100719221416180886;
                                            periodSeconds = 8503053587432963537;
                                            successThreshold = 2899654982963752788;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "minima";
                                                port = 1630521415830692879;
                                            }};
                                            timeoutSeconds = 5791648930893524291;
                                        }};
                                        name = "aliquid";
                                        ports = new openapisdk.models.shared.ContainerPort[]() {{
                                            add(new ContainerPort() {{
                                                containerPort = 2795506256409412262;
                                                name = "vitae";
                                                protocol = "praesentium";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 2159301609408237787;
                                                name = "fugit";
                                                protocol = "molestiae";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 8934331994676790663;
                                                name = "soluta";
                                                protocol = "incidunt";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("et"),
                                                }};
                                            }};
                                            failureThreshold = 5712537870730286072;
                                            grpc = new GrpcAction() {{
                                                port = 3604831437204130443;
                                                service = "necessitatibus";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "animi";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "rerum";
                                                        value = "voluptas";
                                                    }}),
                                                }};
                                                path = "placeat";
                                                scheme = "non";
                                            }};
                                            initialDelaySeconds = 2683959958141143293;
                                            periodSeconds = 3924871608859186553;
                                            successThreshold = 1280393244529177603;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "rerum";
                                                port = 3080523241011926563;
                                            }};
                                            timeoutSeconds = 3950409982780786911;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("veritatis", "quia");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("sunt", "et");
                                                put("voluptates", "quas");
                                                put("laudantium", "dignissimos");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 6987500601578542779;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("voluptatum"),
                                                    add("pariatur"),
                                                    add("dolores"),
                                                }};
                                            }};
                                            failureThreshold = 1402182556229598355;
                                            grpc = new GrpcAction() {{
                                                port = 3091832290934275710;
                                                service = "voluptatem";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "dolorum";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "nihil";
                                                        value = "facilis";
                                                    }}),
                                                }};
                                                path = "alias";
                                                scheme = "voluptatibus";
                                            }};
                                            initialDelaySeconds = 847494158596905607;
                                            periodSeconds = 3184466998913277613;
                                            successThreshold = 6216084799010775865;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "dicta";
                                                port = 8556129288685792205;
                                            }};
                                            timeoutSeconds = 4225470090884579886;
                                        }};
                                        terminationMessagePath = "voluptas";
                                        terminationMessagePolicy = "ad";
                                        volumeMounts = new openapisdk.models.shared.VolumeMount[]() {{
                                            add(new VolumeMount() {{
                                                mountPath = "assumenda";
                                                name = "dolorem";
                                                readOnly = false;
                                                subPath = "ipsam";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "dolorem";
                                                name = "omnis";
                                                readOnly = true;
                                                subPath = "vitae";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "et";
                                                name = "ea";
                                                readOnly = true;
                                                subPath = "autem";
                                            }}),
                                        }};
                                        workingDir = "cumque";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]() {{
                                            add("sapiente"),
                                            add("quaerat"),
                                            add("occaecati"),
                                        }};
                                        command = new String[]() {{
                                            add("cumque"),
                                            add("consequuntur"),
                                        }};
                                        env = new openapisdk.models.shared.EnvVar[]() {{
                                            add(new EnvVar() {{
                                                name = "qui";
                                                value = "voluptatibus";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "dignissimos";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "explicabo";
                                                        }};
                                                        name = "qui";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "qui";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "saepe";
                                                        }};
                                                        name = "et";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "cupiditate";
                                                value = "fugiat";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "hic";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dolore";
                                                        }};
                                                        name = "enim";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "cumque";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "at";
                                                        }};
                                                        name = "enim";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new openapisdk.models.shared.EnvFromSource[]() {{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "quo";
                                                    }};
                                                    name = "et";
                                                    optional = false;
                                                }};
                                                prefix = "voluptatum";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "numquam";
                                                    }};
                                                    name = "accusamus";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "nulla";
                                        imagePullPolicy = "beatae";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("repellat"),
                                                }};
                                            }};
                                            failureThreshold = 3104837257500916365;
                                            grpc = new GrpcAction() {{
                                                port = 8068683601943650845;
                                                service = "nesciunt";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "et";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "rerum";
                                                        value = "nisi";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "maiores";
                                                        value = "mollitia";
                                                    }}),
                                                }};
                                                path = "voluptatibus";
                                                scheme = "cumque";
                                            }};
                                            initialDelaySeconds = 9061133693977222958;
                                            periodSeconds = 7129119666053552068;
                                            successThreshold = 7719923366184646627;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "et";
                                                port = 616440386701654226;
                                            }};
                                            timeoutSeconds = 2494327043663509316;
                                        }};
                                        name = "officiis";
                                        ports = new openapisdk.models.shared.ContainerPort[]() {{
                                            add(new ContainerPort() {{
                                                containerPort = 1555645946692669730;
                                                name = "maxime";
                                                protocol = "aut";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 4091982020466571191;
                                                name = "non";
                                                protocol = "eligendi";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("similique"),
                                                }};
                                            }};
                                            failureThreshold = 8516455203687267495;
                                            grpc = new GrpcAction() {{
                                                port = 2496018308403067858;
                                                service = "amet";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "iure";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "recusandae";
                                                        value = "quas";
                                                    }}),
                                                }};
                                                path = "nisi";
                                                scheme = "quis";
                                            }};
                                            initialDelaySeconds = 9028721853580352446;
                                            periodSeconds = 1996329147209705501;
                                            successThreshold = 5030249676619928278;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "nulla";
                                                port = 1328194288019932207;
                                            }};
                                            timeoutSeconds = 8025860624341182139;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("odit", "ullam");
                                                put("aperiam", "magnam");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("harum", "ut");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 5266484665268730620;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("qui"),
                                                    add("est"),
                                                    add("rerum"),
                                                }};
                                            }};
                                            failureThreshold = 6644084635118556356;
                                            grpc = new GrpcAction() {{
                                                port = 3390322607307731286;
                                                service = "est";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "quis";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "facilis";
                                                        value = "dolor";
                                                    }}),
                                                }};
                                                path = "ad";
                                                scheme = "est";
                                            }};
                                            initialDelaySeconds = 4711560240118737073;
                                            periodSeconds = 6005895811440038054;
                                            successThreshold = 7230506922334944628;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "quae";
                                                port = 7999878208439328165;
                                            }};
                                            timeoutSeconds = 2425833236683675743;
                                        }};
                                        terminationMessagePath = "et";
                                        terminationMessagePolicy = "qui";
                                        volumeMounts = new openapisdk.models.shared.VolumeMount[]() {{
                                            add(new VolumeMount() {{
                                                mountPath = "aliquam";
                                                name = "in";
                                                readOnly = false;
                                                subPath = "quidem";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "enim";
                                                name = "reiciendis";
                                                readOnly = false;
                                                subPath = "porro";
                                            }}),
                                        }};
                                        workingDir = "voluptatem";
                                    }}),
                                }};
                                restartPolicy = "et";
                                serviceAccountName = "consequatur";
                                terminationGracePeriodSeconds = "totam";
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 7950936124983200772;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "pariatur";
                                                    mode = 4707100280994906176;
                                                    path = "voluptatibus";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "nesciunt";
                                                    mode = 8684346162108043215;
                                                    path = "rerum";
                                                }}),
                                            }};
                                            name = "eos";
                                            optional = true;
                                        }};
                                        name = "nisi";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 1413182759309051265;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "dolor";
                                                    mode = 3497982979710922239;
                                                    path = "consequatur";
                                                }}),
                                            }};
                                            optional = true;
                                            secretName = "sit";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 5767063532879783694;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "iste";
                                                    mode = 340396698681939924;
                                                    path = "ut";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "facere";
                                                    mode = 8179803086903240604;
                                                    path = "hic";
                                                }}),
                                            }};
                                            name = "et";
                                            optional = true;
                                        }};
                                        name = "quia";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 1801351800589204101;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "sunt";
                                                    mode = 4507365793978743574;
                                                    path = "sit";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "quia";
                                                    mode = 5595645534520080356;
                                                    path = "et";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "odio";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ttlSecondsAfterFinished = 3119137013936735173;
                    }};
                    status = new JobStatus() {{
                        active = 7322624309174653694;
                        completionTime = "est";
                        conditions = new openapisdk.models.shared.JobCondition[]() {{
                            add(new JobCondition() {{
                                lastTransitionTime = "nostrum";
                                message = "vero";
                                reason = "nostrum";
                                severity = "dolor";
                                status = "eveniet";
                                type = "mollitia";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "id";
                                message = "architecto";
                                reason = "aperiam";
                                severity = "tempora";
                                status = "culpa";
                                type = "et";
                            }}),
                        }};
                        failed = 4553432704598002962;
                        imageDigest = "laudantium";
                        instances = new openapisdk.models.shared.InstanceStatus[]() {{
                            add(new InstanceStatus() {{
                                completionTime = "error";
                                failed = 6562556489066340442;
                                index = 8276063308289136081;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 1843499899070574171;
                                    status = new GoogleRpcStatus() {{
                                        code = 6134976679469502454;
                                        details = new java.util.HashMap<String, Object>[]() {{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("in", "vero");
                                                put("eligendi", "qui");
                                                put("rerum", "aspernatur");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("placeat", "pariatur");
                                                put("corrupti", "cumque");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quisquam", "quo");
                                                put("necessitatibus", "ipsam");
                                                put("non", "sed");
                                            }}),
                                        }};
                                        message = "reprehenderit";
                                    }};
                                }};
                                lastExitCode = 2139781735691836793;
                                restarted = 3027380158552194458;
                                startTime = "debitis";
                                succeeded = 4689688653576579358;
                            }}),
                            add(new InstanceStatus() {{
                                completionTime = "ut";
                                failed = 5936068733480541337;
                                index = 2411526478913716635;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 7019616379304051948;
                                    status = new GoogleRpcStatus() {{
                                        code = 8565146962047347810;
                                        details = new java.util.HashMap<String, Object>[]() {{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("cupiditate", "labore");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("laboriosam", "laboriosam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ut", "veritatis");
                                                put("suscipit", "soluta");
                                            }}),
                                        }};
                                        message = "pariatur";
                                    }};
                                }};
                                lastExitCode = 8546715417534629051;
                                restarted = 715826167468639878;
                                startTime = "voluptas";
                                succeeded = 8570183855920545669;
                            }}),
                        }};
                        observedGeneration = 4517381619539889012;
                        startTime = "rerum";
                        succeeded = 4967809392193332702;
                    }};
                }};
            }};

            RunNamespacesJobsCreateResponse res = sdk.namespaces.runNamespacesJobsCreate(req);

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

### namespaces

* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsGet` - Get information about a job.
* `runNamespacesJobsList` - List jobs.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
