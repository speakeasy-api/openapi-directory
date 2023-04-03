<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RunNamespacesJobsCreateSecurity;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.InstanceStatus;
import org.openapis.openapi.models.shared.InstanceAttemptResult;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.JobCondition;
import org.openapis.openapi.models.shared.JobSpec;
import org.openapis.openapi.models.shared.InstanceTemplateSpec;
import org.openapis.openapi.models.shared.InstanceSpec;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.ConfigMapVolumeSource;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.ExecAction;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.ContainerPort;
import org.openapis.openapi.models.shared.EnvFromSource;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ConfigMapEnvSource;
import org.openapis.openapi.models.shared.EnvVar;
import org.openapis.openapi.models.shared.EnvVarSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.ConfigMapKeySelector;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsCreateRequest req = new RunNamespacesJobsCreateRequest() {{
                dollarXgafv = "2";
                job = new Job() {{
                    apiVersion = "provident";
                    kind = "distinctio";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("unde", "nulla");
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                        }};
                        clusterName = "iure";
                        creationTimestamp = "magnam";
                        deletionGracePeriodSeconds = 891773;
                        deletionTimestamp = "ipsa";
                        finalizers = new String[]{{
                            add("tempora"),
                            add("suscipit"),
                            add("molestiae"),
                            add("minus"),
                        }};
                        generateName = "placeat";
                        generation = 528895;
                        labels = new java.util.HashMap<String, String>() {{
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                        }};
                        name = "ab";
                        namespace = "quis";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "deserunt";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "perferendis";
                                name = "ipsam";
                                uid = "repellendus";
                            }}),
                        }};
                        resourceVersion = "sapiente";
                        selfLink = "quo";
                        uid = "odit";
                    }};
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "at";
                        backoffLimit = 870088;
                        completions = 978619;
                        parallelism = 473608;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "quod";
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("totam"),
                                            add("porro"),
                                        }};
                                        command = new String[]{{
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "fugit";
                                                value = "deleniti";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "hic";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "optio";
                                                        }};
                                                        name = "totam";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "beatae";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "commodi";
                                                        }};
                                                        name = "molestiae";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "modi";
                                                value = "qui";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "impedit";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "cum";
                                                        }};
                                                        name = "esse";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "ipsum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "excepturi";
                                                        }};
                                                        name = "aspernatur";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "perferendis";
                                                value = "ad";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "natus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "sed";
                                                        }};
                                                        name = "iste";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "dolor";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "natus";
                                                        }};
                                                        name = "laboriosam";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "saepe";
                                                    }};
                                                    name = "fuga";
                                                    optional = false;
                                                }};
                                                prefix = "in";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "corporis";
                                                    }};
                                                    name = "iste";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "iure";
                                                    }};
                                                    name = "saepe";
                                                    optional = false;
                                                }};
                                                prefix = "quidem";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "architecto";
                                                    }};
                                                    name = "ipsa";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "reiciendis";
                                                    }};
                                                    name = "est";
                                                    optional = false;
                                                }};
                                                prefix = "mollitia";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "laborum";
                                                    }};
                                                    name = "dolores";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "dolorem";
                                                    }};
                                                    name = "corporis";
                                                    optional = false;
                                                }};
                                                prefix = "explicabo";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "nobis";
                                                    }};
                                                    name = "enim";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "omnis";
                                        imagePullPolicy = "nemo";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("excepturi"),
                                                    add("accusantium"),
                                                }};
                                            }};
                                            failureThreshold = 438601;
                                            grpc = new GRPCAction() {{
                                                port = 634274;
                                                service = "doloribus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "sapiente";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "mollitia";
                                                        value = "dolorem";
                                                    }}),
                                                }};
                                                path = "culpa";
                                                scheme = "consequuntur";
                                            }};
                                            initialDelaySeconds = 995300;
                                            periodSeconds = 653108;
                                            successThreshold = 581850;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "numquam";
                                                port = 414369;
                                            }};
                                            timeoutSeconds = 466311;
                                        }};
                                        name = "molestiae";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 623510;
                                                name = "quia";
                                                protocol = "quis";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("laborum"),
                                                }};
                                            }};
                                            failureThreshold = 656330;
                                            grpc = new GRPCAction() {{
                                                port = 317202;
                                                service = "odit";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quo";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "tenetur";
                                                        value = "ipsam";
                                                    }}),
                                                }};
                                                path = "id";
                                                scheme = "possimus";
                                            }};
                                            initialDelaySeconds = 13571;
                                            periodSeconds = 97101;
                                            successThreshold = 622846;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "temporibus";
                                                port = 673660;
                                            }};
                                            timeoutSeconds = 96098;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("voluptatibus", "vero");
                                                put("nihil", "praesentium");
                                                put("voluptatibus", "ipsa");
                                                put("omnis", "voluptate");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("perferendis", "doloremque");
                                                put("reprehenderit", "ut");
                                                put("maiores", "dicta");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 359444;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("iusto"),
                                                    add("dicta"),
                                                }};
                                            }};
                                            failureThreshold = 688661;
                                            grpc = new GRPCAction() {{
                                                port = 317983;
                                                service = "accusamus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "commodi";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "quae";
                                                        value = "ipsum";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "quidem";
                                                        value = "molestias";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "excepturi";
                                                        value = "pariatur";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "modi";
                                                        value = "praesentium";
                                                    }}),
                                                }};
                                                path = "rem";
                                                scheme = "voluptates";
                                            }};
                                            initialDelaySeconds = 93940;
                                            periodSeconds = 921158;
                                            successThreshold = 575947;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "veritatis";
                                                port = 929297;
                                            }};
                                            timeoutSeconds = 277718;
                                        }};
                                        terminationMessagePath = "enim";
                                        terminationMessagePolicy = "consequatur";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "quibusdam";
                                                name = "explicabo";
                                                readOnly = false;
                                                subPath = "deserunt";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "distinctio";
                                                name = "quibusdam";
                                                readOnly = false;
                                                subPath = "labore";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "modi";
                                                name = "qui";
                                                readOnly = false;
                                                subPath = "aliquid";
                                            }}),
                                        }};
                                        workingDir = "cupiditate";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                        command = new String[]{{
                                            add("alias"),
                                            add("fugit"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "excepturi";
                                                value = "tempora";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "facilis";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "tempore";
                                                        }};
                                                        name = "labore";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "delectus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "eum";
                                                        }};
                                                        name = "non";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "eligendi";
                                                value = "sint";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "aliquid";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "provident";
                                                        }};
                                                        name = "necessitatibus";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "sint";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "officia";
                                                        }};
                                                        name = "dolor";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "debitis";
                                                value = "a";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "dolorum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "in";
                                                        }};
                                                        name = "in";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "illum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "maiores";
                                                        }};
                                                        name = "rerum";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "magnam";
                                                    }};
                                                    name = "cumque";
                                                    optional = false;
                                                }};
                                                prefix = "facere";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "ea";
                                                    }};
                                                    name = "aliquid";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "laborum";
                                        imagePullPolicy = "accusamus";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("occaecati"),
                                                }};
                                            }};
                                            failureThreshold = 313218;
                                            grpc = new GRPCAction() {{
                                                port = 881736;
                                                service = "delectus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quidem";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "nam";
                                                        value = "id";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "blanditiis";
                                                        value = "deleniti";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "sapiente";
                                                        value = "amet";
                                                    }}),
                                                }};
                                                path = "deserunt";
                                                scheme = "nisi";
                                            }};
                                            initialDelaySeconds = 423855;
                                            periodSeconds = 618809;
                                            successThreshold = 606393;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "molestiae";
                                                port = 19193;
                                            }};
                                            timeoutSeconds = 470132;
                                        }};
                                        name = "magnam";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 660174;
                                                name = "labore";
                                                protocol = "labore";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 383462;
                                                name = "natus";
                                                protocol = "nobis";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 428769;
                                                name = "vero";
                                                protocol = "aspernatur";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("magnam"),
                                                }};
                                            }};
                                            failureThreshold = 92373;
                                            grpc = new GRPCAction() {{
                                                port = 569965;
                                                service = "ullam";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "provident";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "sint";
                                                        value = "accusantium";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "mollitia";
                                                        value = "reiciendis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "mollitia";
                                                        value = "ad";
                                                    }}),
                                                }};
                                                path = "eum";
                                                scheme = "dolor";
                                            }};
                                            initialDelaySeconds = 896547;
                                            periodSeconds = 141264;
                                            successThreshold = 367562;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "quasi";
                                                port = 435865;
                                            }};
                                            timeoutSeconds = 984043;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("eius", "maxime");
                                                put("deleniti", "facilis");
                                                put("in", "architecto");
                                                put("architecto", "repudiandae");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("expedita", "nihil");
                                                put("repellat", "quibusdam");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 149448;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("pariatur"),
                                                    add("accusantium"),
                                                    add("consequuntur"),
                                                    add("praesentium"),
                                                }};
                                            }};
                                            failureThreshold = 615560;
                                            grpc = new GRPCAction() {{
                                                port = 166847;
                                                service = "sunt";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quo";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "pariatur";
                                                        value = "maxime";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "ea";
                                                        value = "excepturi";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "odit";
                                                        value = "ea";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "accusantium";
                                                        value = "ab";
                                                    }}),
                                                }};
                                                path = "maiores";
                                                scheme = "quidem";
                                            }};
                                            initialDelaySeconds = 373291;
                                            periodSeconds = 453543;
                                            successThreshold = 420075;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "nam";
                                                port = 50588;
                                            }};
                                            timeoutSeconds = 866383;
                                        }};
                                        terminationMessagePath = "nemo";
                                        terminationMessagePolicy = "voluptatibus";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "fugiat";
                                                name = "amet";
                                                readOnly = false;
                                                subPath = "aut";
                                            }}),
                                        }};
                                        workingDir = "cumque";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("hic"),
                                            add("libero"),
                                        }};
                                        command = new String[]{{
                                            add("dolores"),
                                            add("quis"),
                                            add("totam"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "eaque";
                                                value = "quis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "nesciunt";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "eos";
                                                        }};
                                                        name = "perferendis";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "dolores";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "minus";
                                                        }};
                                                        name = "quam";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "dolor";
                                                value = "vero";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "nostrum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "hic";
                                                        }};
                                                        name = "recusandae";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "omnis";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "facilis";
                                                        }};
                                                        name = "perspiciatis";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "porro";
                                                    }};
                                                    name = "consequuntur";
                                                    optional = false;
                                                }};
                                                prefix = "blanditiis";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "error";
                                                    }};
                                                    name = "eaque";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "occaecati";
                                        imagePullPolicy = "rerum";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("asperiores"),
                                                }};
                                            }};
                                            failureThreshold = 934214;
                                            grpc = new GRPCAction() {{
                                                port = 267262;
                                                service = "iste";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "dolorum";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "pariatur";
                                                        value = "provident";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "nobis";
                                                        value = "libero";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "delectus";
                                                        value = "quaerat";
                                                    }}),
                                                }};
                                                path = "quos";
                                                scheme = "aliquid";
                                            }};
                                            initialDelaySeconds = 212390;
                                            periodSeconds = 209843;
                                            successThreshold = 222443;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "qui";
                                                port = 218749;
                                            }};
                                            timeoutSeconds = 944373;
                                        }};
                                        name = "excepturi";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 452109;
                                                name = "dignissimos";
                                                protocol = "reiciendis";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 227414;
                                                name = "dolorum";
                                                protocol = "numquam";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 85295;
                                                name = "ipsa";
                                                protocol = "ipsa";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("odio"),
                                                    add("quaerat"),
                                                }};
                                            }};
                                            failureThreshold = 881005;
                                            grpc = new GRPCAction() {{
                                                port = 696344;
                                                service = "voluptatibus";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "voluptas";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "eos";
                                                        value = "atque";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "sit";
                                                        value = "fugiat";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "ab";
                                                        value = "soluta";
                                                    }}),
                                                }};
                                                path = "dolorum";
                                                scheme = "iusto";
                                            }};
                                            initialDelaySeconds = 453697;
                                            periodSeconds = 677082;
                                            successThreshold = 536579;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "omnis";
                                                port = 896672;
                                            }};
                                            timeoutSeconds = 714697;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("nihil", "ipsum");
                                                put("voluptate", "id");
                                                put("saepe", "eius");
                                                put("aspernatur", "perferendis");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("optio", "accusamus");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 320017;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("suscipit"),
                                                    add("deserunt"),
                                                    add("provident"),
                                                    add("minima"),
                                                }};
                                            }};
                                            failureThreshold = 831049;
                                            grpc = new GRPCAction() {{
                                                port = 519711;
                                                service = "similique";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "alias";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "quaerat";
                                                        value = "tempora";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "vel";
                                                        value = "quod";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "officiis";
                                                        value = "qui";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "dolorum";
                                                        value = "a";
                                                    }}),
                                                }};
                                                path = "esse";
                                                scheme = "harum";
                                            }};
                                            initialDelaySeconds = 483409;
                                            periodSeconds = 215507;
                                            successThreshold = 788740;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "tenetur";
                                                port = 229442;
                                            }};
                                            timeoutSeconds = 730856;
                                        }};
                                        terminationMessagePath = "accusamus";
                                        terminationMessagePolicy = "numquam";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "dolorem";
                                                name = "sapiente";
                                                readOnly = false;
                                                subPath = "totam";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "nihil";
                                                name = "sit";
                                                readOnly = false;
                                                subPath = "expedita";
                                            }}),
                                        }};
                                        workingDir = "neque";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("vel"),
                                        }};
                                        command = new String[]{{
                                            add("voluptas"),
                                            add("deserunt"),
                                            add("quam"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "incidunt";
                                                value = "qui";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "cupiditate";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "maxime";
                                                        }};
                                                        name = "pariatur";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "soluta";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dicta";
                                                        }};
                                                        name = "laborum";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "incidunt";
                                                    }};
                                                    name = "aspernatur";
                                                    optional = false;
                                                }};
                                                prefix = "dolores";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "distinctio";
                                                    }};
                                                    name = "facilis";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "aliquid";
                                                    }};
                                                    name = "quam";
                                                    optional = false;
                                                }};
                                                prefix = "molestias";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "temporibus";
                                                    }};
                                                    name = "qui";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "neque";
                                                    }};
                                                    name = "fugit";
                                                    optional = false;
                                                }};
                                                prefix = "magni";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "odio";
                                                    }};
                                                    name = "sunt";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "ullam";
                                        imagePullPolicy = "nam";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                    add("soluta"),
                                                    add("nobis"),
                                                }};
                                            }};
                                            failureThreshold = 92596;
                                            grpc = new GRPCAction() {{
                                                port = 903720;
                                                service = "ipsum";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "veritatis";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "quos";
                                                        value = "tempore";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "cupiditate";
                                                        value = "aperiam";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "delectus";
                                                        value = "dolorem";
                                                    }}),
                                                }};
                                                path = "dolore";
                                                scheme = "labore";
                                            }};
                                            initialDelaySeconds = 240829;
                                            periodSeconds = 677263;
                                            successThreshold = 100294;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "quae";
                                                port = 16429;
                                            }};
                                            timeoutSeconds = 555649;
                                        }};
                                        name = "itaque";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 669917;
                                                name = "repellendus";
                                                protocol = "porro";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("ut"),
                                                    add("facilis"),
                                                    add("cupiditate"),
                                                    add("qui"),
                                                }};
                                            }};
                                            failureThreshold = 63955;
                                            grpc = new GRPCAction() {{
                                                port = 512393;
                                                service = "odio";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "occaecati";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "quisquam";
                                                        value = "vero";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "omnis";
                                                        value = "quis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "ipsum";
                                                        value = "delectus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "voluptate";
                                                        value = "consectetur";
                                                    }}),
                                                }};
                                                path = "vero";
                                                scheme = "tenetur";
                                            }};
                                            initialDelaySeconds = 492268;
                                            periodSeconds = 941378;
                                            successThreshold = 715561;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "quod";
                                                port = 486160;
                                            }};
                                            timeoutSeconds = 630448;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("vero", "ducimus");
                                                put("dolore", "quibusdam");
                                                put("illum", "sequi");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("impedit", "aut");
                                                put("voluptatibus", "exercitationem");
                                                put("nulla", "fugit");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 780427;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("doloribus"),
                                                    add("iusto"),
                                                    add("eligendi"),
                                                    add("ducimus"),
                                                }};
                                            }};
                                            failureThreshold = 4048;
                                            grpc = new GRPCAction() {{
                                                port = 639473;
                                                service = "tempora";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "ipsam";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "aspernatur";
                                                        value = "vel";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "possimus";
                                                        value = "magnam";
                                                    }}),
                                                }};
                                                path = "ratione";
                                                scheme = "ex";
                                            }};
                                            initialDelaySeconds = 511319;
                                            periodSeconds = 120657;
                                            successThreshold = 224317;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "maiores";
                                                port = 97844;
                                            }};
                                            timeoutSeconds = 406120;
                                        }};
                                        terminationMessagePath = "nulla";
                                        terminationMessagePolicy = "excepturi";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "nostrum";
                                                name = "sapiente";
                                                readOnly = false;
                                                subPath = "quisquam";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "saepe";
                                                name = "ea";
                                                readOnly = false;
                                                subPath = "impedit";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "corporis";
                                                name = "veniam";
                                                readOnly = false;
                                                subPath = "aliquid";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "inventore";
                                                name = "magnam";
                                                readOnly = false;
                                                subPath = "ea";
                                            }}),
                                        }};
                                        workingDir = "quo";
                                    }}),
                                }};
                                restartPolicy = "consectetur";
                                serviceAccountName = "recusandae";
                                terminationGracePeriodSeconds = "aspernatur";
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 53427;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "libero";
                                                    mode = 13948;
                                                    path = "aut";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "deleniti";
                                                    mode = 770581;
                                                    path = "aliquam";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "fugit";
                                                    mode = 882860;
                                                    path = "inventore";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "non";
                                                    mode = 89603;
                                                    path = "dolorum";
                                                }}),
                                            }};
                                            name = "laborum";
                                            optional = false;
                                        }};
                                        name = "placeat";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 245367;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "autem";
                                                    mode = 752135;
                                                    path = "quas";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "assumenda";
                                                    mode = 860552;
                                                    path = "voluptas";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "libero";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 96549;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "numquam";
                                                    mode = 131482;
                                                    path = "provident";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "ipsa";
                                                    mode = 476477;
                                                    path = "magnam";
                                                }}),
                                            }};
                                            name = "odio";
                                            optional = false;
                                        }};
                                        name = "eius";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 458515;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "rem";
                                                    mode = 683282;
                                                    path = "reprehenderit";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "quidem";
                                                    mode = 852635;
                                                    path = "ut";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "eum";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ttlSecondsAfterFinished = 379927;
                    }};
                    status = new JobStatus() {{
                        active = 826871;
                        completionTime = "eos";
                        conditions = new org.openapis.openapi.models.shared.JobCondition[]{{
                            add(new JobCondition() {{
                                lastTransitionTime = "quisquam";
                                message = "veritatis";
                                reason = "ipsa";
                                severity = "id";
                                status = "quidem";
                                type = "neque";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "quo";
                                message = "illum";
                                reason = "quo";
                                severity = "fuga";
                                status = "eius";
                                type = "eos";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "voluptas";
                                message = "ab";
                                reason = "cupiditate";
                                severity = "consequatur";
                                status = "tempora";
                                type = "debitis";
                            }}),
                        }};
                        failed = 370853;
                        imageDigest = "aspernatur";
                        instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                            add(new InstanceStatus() {{
                                completionTime = "quo";
                                failed = 459856;
                                index = 925164;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 44612;
                                    status = new GoogleRpcStatus() {{
                                        code = 715179;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("inventore", "nihil");
                                                put("totam", "accusamus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("odio", "occaecati");
                                                put("commodi", "sapiente");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("deserunt", "molestiae");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("porro", "eum");
                                            }}),
                                        }};
                                        message = "quas";
                                    }};
                                }};
                                lastExitCode = 510017;
                                restarted = 159867;
                                startTime = "deleniti";
                                succeeded = 143829;
                            }}),
                        }};
                        observedGeneration = 681393;
                        startTime = "mollitia";
                        succeeded = 277596;
                    }};
                }};
                accessToken = "atque";
                alt = "json";
                callback = "minima";
                fields = "nisi";
                key = "fugit";
                oauthToken = "sapiente";
                parent = "consequuntur";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "explicabo";
                uploadProtocol = "saepe";
            }}            

            RunNamespacesJobsCreateResponse res = sdk.namespaces.runNamespacesJobsCreate(req, new RunNamespacesJobsCreateSecurity() {{
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