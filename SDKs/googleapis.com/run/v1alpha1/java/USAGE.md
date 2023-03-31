<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RunNamespacesJobsCreateSecurity;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreatePathParams;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateQueryParams;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RunNamespacesJobsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Job() {{
                    apiVersion = "suscipit";
                    kind = "iure";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("debitis", "ipsa");
                            put("delectus", "tempora");
                        }};
                        clusterName = "suscipit";
                        creationTimestamp = "molestiae";
                        deletionGracePeriodSeconds = 791725;
                        deletionTimestamp = "placeat";
                        finalizers = new String[]{{
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        generateName = "recusandae";
                        generation = 836079;
                        labels = new java.util.HashMap<String, String>() {{
                            put("quis", "veritatis");
                        }};
                        name = "deserunt";
                        namespace = "perferendis";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "repellendus";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "sapiente";
                                name = "quo";
                                uid = "odit";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "at";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "at";
                                name = "maiores";
                                uid = "molestiae";
                            }}),
                        }};
                        resourceVersion = "quod";
                        selfLink = "quod";
                        uid = "esse";
                    }};
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "totam";
                        backoffLimit = 780529;
                        completions = 678880;
                        parallelism = 118274;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "nam";
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("fugit"),
                                            add("deleniti"),
                                            add("hic"),
                                        }};
                                        command = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "qui";
                                                value = "impedit";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "cum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "esse";
                                                        }};
                                                        name = "ipsum";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "excepturi";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "aspernatur";
                                                        }};
                                                        name = "perferendis";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "ad";
                                                value = "natus";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "sed";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "iste";
                                                        }};
                                                        name = "dolor";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "natus";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "laboriosam";
                                                        }};
                                                        name = "hic";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "fuga";
                                                    }};
                                                    name = "in";
                                                    optional = false;
                                                }};
                                                prefix = "corporis";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "iste";
                                                    }};
                                                    name = "iure";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "saepe";
                                                    }};
                                                    name = "quidem";
                                                    optional = false;
                                                }};
                                                prefix = "architecto";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "ipsa";
                                                    }};
                                                    name = "reiciendis";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "est";
                                                    }};
                                                    name = "mollitia";
                                                    optional = false;
                                                }};
                                                prefix = "laborum";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "dolores";
                                                    }};
                                                    name = "dolorem";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "corporis";
                                                    }};
                                                    name = "explicabo";
                                                    optional = false;
                                                }};
                                                prefix = "nobis";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "enim";
                                                    }};
                                                    name = "omnis";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "nemo";
                                        imagePullPolicy = "minima";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("accusantium"),
                                                    add("iure"),
                                                    add("culpa"),
                                                }};
                                            }};
                                            failureThreshold = 988374;
                                            grpc = new GRPCAction() {{
                                                port = 958950;
                                                service = "architecto";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "mollitia";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "culpa";
                                                        value = "consequuntur";
                                                    }}),
                                                }};
                                                path = "repellat";
                                                scheme = "mollitia";
                                            }};
                                            initialDelaySeconds = 581850;
                                            periodSeconds = 253291;
                                            successThreshold = 414369;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "quam";
                                                port = 474697;
                                            }};
                                            timeoutSeconds = 244425;
                                        }};
                                        name = "error";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 338007;
                                                name = "vitae";
                                                protocol = "laborum";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("enim"),
                                                    add("odit"),
                                                    add("quo"),
                                                }};
                                            }};
                                            failureThreshold = 196582;
                                            grpc = new GRPCAction() {{
                                                port = 949572;
                                                service = "ipsam";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "id";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "aut";
                                                        value = "quasi";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "error";
                                                        value = "temporibus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "laborum";
                                                        value = "quasi";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "reiciendis";
                                                        value = "voluptatibus";
                                                    }}),
                                                }};
                                                path = "vero";
                                                scheme = "nihil";
                                            }};
                                            initialDelaySeconds = 509624;
                                            periodSeconds = 976762;
                                            successThreshold = 55714;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "omnis";
                                                port = 451159;
                                            }};
                                            timeoutSeconds = 739264;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("doloremque", "reprehenderit");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("maiores", "dicta");
                                                put("corporis", "dolore");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 480894;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("harum"),
                                                }};
                                            }};
                                            failureThreshold = 317983;
                                            grpc = new GRPCAction() {{
                                                port = 880476;
                                                service = "commodi";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "repudiandae";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "ipsum";
                                                        value = "quidem";
                                                    }}),
                                                }};
                                                path = "molestias";
                                                scheme = "excepturi";
                                            }};
                                            initialDelaySeconds = 865103;
                                            periodSeconds = 265389;
                                            successThreshold = 508969;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "rem";
                                                port = 916723;
                                            }};
                                            timeoutSeconds = 93940;
                                        }};
                                        terminationMessagePath = "repudiandae";
                                        terminationMessagePolicy = "sint";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "itaque";
                                                name = "incidunt";
                                                readOnly = false;
                                                subPath = "enim";
                                            }}),
                                        }};
                                        workingDir = "consequatur";
                                    }}),
                                    add(new Container() {{
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
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "aliquid";
                                                value = "cupiditate";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "quos";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "perferendis";
                                                        }};
                                                        name = "magni";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "assumenda";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "ipsam";
                                                        }};
                                                        name = "alias";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "dolorum";
                                                    }};
                                                    name = "excepturi";
                                                    optional = false;
                                                }};
                                                prefix = "tempora";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "facilis";
                                                    }};
                                                    name = "tempore";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "labore";
                                        imagePullPolicy = "delectus";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("non"),
                                                    add("eligendi"),
                                                }};
                                            }};
                                            failureThreshold = 576157;
                                            grpc = new GRPCAction() {{
                                                port = 396098;
                                                service = "provident";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "necessitatibus";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "officia";
                                                        value = "dolor";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "debitis";
                                                        value = "a";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "dolorum";
                                                        value = "in";
                                                    }}),
                                                }};
                                                path = "in";
                                                scheme = "illum";
                                            }};
                                            initialDelaySeconds = 978571;
                                            periodSeconds = 699479;
                                            successThreshold = 116202;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "magnam";
                                                port = 767024;
                                            }};
                                            timeoutSeconds = 813798;
                                        }};
                                        name = "ea";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 675439;
                                                name = "accusamus";
                                                protocol = "non";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 581273;
                                                name = "enim";
                                                protocol = "accusamus";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("quidem"),
                                                    add("provident"),
                                                    add("nam"),
                                                    add("id"),
                                                }};
                                            }};
                                            failureThreshold = 501324;
                                            grpc = new GRPCAction() {{
                                                port = 533206;
                                                service = "sapiente";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "amet";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "nisi";
                                                        value = "vel";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "natus";
                                                        value = "omnis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "molestiae";
                                                        value = "perferendis";
                                                    }}),
                                                }};
                                                path = "nihil";
                                                scheme = "magnam";
                                            }};
                                            initialDelaySeconds = 716075;
                                            periodSeconds = 660174;
                                            successThreshold = 287991;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "labore";
                                                port = 383462;
                                            }};
                                            timeoutSeconds = 618016;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("eum", "vero");
                                                put("aspernatur", "architecto");
                                                put("magnam", "et");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("ullam", "provident");
                                                put("quos", "sint");
                                                put("accusantium", "mollitia");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 968962;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("ad"),
                                                    add("eum"),
                                                    add("dolor"),
                                                }};
                                            }};
                                            failureThreshold = 896547;
                                            grpc = new GRPCAction() {{
                                                port = 141264;
                                                service = "nemo";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quasi";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "doloribus";
                                                        value = "debitis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "eius";
                                                        value = "maxime";
                                                    }}),
                                                }};
                                                path = "deleniti";
                                                scheme = "facilis";
                                            }};
                                            initialDelaySeconds = 447926;
                                            periodSeconds = 100226;
                                            successThreshold = 99569;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "repudiandae";
                                                port = 352312;
                                            }};
                                            timeoutSeconds = 714242;
                                        }};
                                        terminationMessagePath = "nihil";
                                        terminationMessagePolicy = "repellat";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "sed";
                                                name = "saepe";
                                                readOnly = false;
                                                subPath = "pariatur";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "accusantium";
                                                name = "consequuntur";
                                                readOnly = false;
                                                subPath = "praesentium";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "natus";
                                                name = "magni";
                                                readOnly = false;
                                                subPath = "sunt";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "quo";
                                                name = "illum";
                                                readOnly = false;
                                                subPath = "pariatur";
                                            }}),
                                        }};
                                        workingDir = "maxime";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("excepturi"),
                                            add("odit"),
                                        }};
                                        command = new String[]{{
                                            add("accusantium"),
                                            add("ab"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "quidem";
                                                value = "ipsam";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "voluptate";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "autem";
                                                        }};
                                                        name = "nam";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "eaque";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "pariatur";
                                                        }};
                                                        name = "nemo";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "voluptatibus";
                                                value = "perferendis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "fugiat";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "amet";
                                                        }};
                                                        name = "aut";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "cumque";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "corporis";
                                                        }};
                                                        name = "hic";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "libero";
                                                value = "nobis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "dolores";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "quis";
                                                        }};
                                                        name = "totam";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "dignissimos";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "eaque";
                                                        }};
                                                        name = "quis";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "nesciunt";
                                                value = "eos";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "perferendis";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dolores";
                                                        }};
                                                        name = "minus";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "quam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dolor";
                                                        }};
                                                        name = "vero";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "hic";
                                                    }};
                                                    name = "recusandae";
                                                    optional = false;
                                                }};
                                                prefix = "omnis";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "facilis";
                                                    }};
                                                    name = "perspiciatis";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "voluptatem";
                                                    }};
                                                    name = "porro";
                                                    optional = false;
                                                }};
                                                prefix = "consequuntur";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "blanditiis";
                                                    }};
                                                    name = "error";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "eaque";
                                        imagePullPolicy = "occaecati";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("adipisci"),
                                                    add("asperiores"),
                                                    add("earum"),
                                                }};
                                            }};
                                            failureThreshold = 267262;
                                            grpc = new GRPCAction() {{
                                                port = 613966;
                                                service = "dolorum";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "deleniti";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "provident";
                                                        value = "nobis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "libero";
                                                        value = "delectus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "quaerat";
                                                        value = "quos";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "aliquid";
                                                        value = "dolorem";
                                                    }}),
                                                }};
                                                path = "dolorem";
                                                scheme = "dolor";
                                            }};
                                            initialDelaySeconds = 186193;
                                            periodSeconds = 218749;
                                            successThreshold = 944373;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "excepturi";
                                                port = 739551;
                                            }};
                                            timeoutSeconds = 452109;
                                        }};
                                        name = "dignissimos";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
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
                                            add(new ContainerPort() {{
                                                containerPort = 434417;
                                                name = "odio";
                                                protocol = "quaerat";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 881005;
                                                name = "quidem";
                                                protocol = "voluptatibus";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("natus"),
                                                    add("eos"),
                                                }};
                                            }};
                                            failureThreshold = 542499;
                                            grpc = new GRPCAction() {{
                                                port = 24678;
                                                service = "fugiat";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "ab";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "dolorum";
                                                        value = "iusto";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "voluptate";
                                                        value = "dolorum";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "deleniti";
                                                        value = "omnis";
                                                    }}),
                                                }};
                                                path = "necessitatibus";
                                                scheme = "distinctio";
                                            }};
                                            initialDelaySeconds = 990339;
                                            periodSeconds = 469497;
                                            successThreshold = 216897;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "voluptate";
                                                port = 663078;
                                            }};
                                            timeoutSeconds = 906418;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("aspernatur", "perferendis");
                                                put("amet", "optio");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("ad", "saepe");
                                                put("suscipit", "deserunt");
                                                put("provident", "minima");
                                                put("repellendus", "totam");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 628982;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("at"),
                                                }};
                                            }};
                                            failureThreshold = 311860;
                                            grpc = new GRPCAction() {{
                                                port = 273542;
                                                service = "vel";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "quod";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "qui";
                                                        value = "dolorum";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "a";
                                                        value = "esse";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "harum";
                                                        value = "iusto";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "ipsum";
                                                        value = "quisquam";
                                                    }}),
                                                }};
                                                path = "tenetur";
                                                scheme = "amet";
                                            }};
                                            initialDelaySeconds = 730856;
                                            periodSeconds = 880298;
                                            successThreshold = 253941;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "enim";
                                                port = 213312;
                                            }};
                                            timeoutSeconds = 957451;
                                        }};
                                        terminationMessagePath = "totam";
                                        terminationMessagePolicy = "nihil";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "expedita";
                                                name = "neque";
                                                readOnly = false;
                                                subPath = "sed";
                                            }}),
                                        }};
                                        workingDir = "vel";
                                    }}),
                                }};
                                restartPolicy = "libero";
                                serviceAccountName = "voluptas";
                                terminationGracePeriodSeconds = "deserunt";
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 214880;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "qui";
                                                    mode = 586784;
                                                    path = "maxime";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "pariatur";
                                                    mode = 747080;
                                                    path = "dicta";
                                                }}),
                                            }};
                                            name = "laborum";
                                            optional = false;
                                        }};
                                        name = "totam";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 276894;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "dolores";
                                                    mode = 716860;
                                                    path = "facilis";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "aliquid";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 463150;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "temporibus";
                                                    mode = 183280;
                                                    path = "neque";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "fugit";
                                                    mode = 164959;
                                                    path = "odio";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "sunt";
                                                    mode = 355613;
                                                    path = "nam";
                                                }}),
                                            }};
                                            name = "hic";
                                            optional = false;
                                        }};
                                        name = "voluptatem";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 765326;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "nobis";
                                                    mode = 92596;
                                                    path = "saepe";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "ipsum";
                                                    mode = 83422;
                                                    path = "nobis";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "quos";
                                                    mode = 731694;
                                                    path = "cupiditate";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "aperiam";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ttlSecondsAfterFinished = 961937;
                    }};
                    status = new JobStatus() {{
                        active = 209157;
                        completionTime = "dolore";
                        conditions = new org.openapis.openapi.models.shared.JobCondition[]{{
                            add(new JobCondition() {{
                                lastTransitionTime = "adipisci";
                                message = "dolorum";
                                reason = "architecto";
                                severity = "quae";
                                status = "aut";
                                type = "quas";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "itaque";
                                message = "consequatur";
                                reason = "est";
                                severity = "repellendus";
                                status = "porro";
                                type = "doloribus";
                            }}),
                        }};
                        failed = 281730;
                        imageDigest = "facilis";
                        instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                            add(new InstanceStatus() {{
                                completionTime = "qui";
                                failed = 63955;
                                index = 512393;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 485628;
                                    status = new GoogleRpcStatus() {{
                                        code = 580447;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("vero", "omnis");
                                                put("quis", "ipsum");
                                                put("delectus", "voluptate");
                                                put("consectetur", "vero");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("dignissimos", "hic");
                                                put("distinctio", "quod");
                                                put("odio", "similique");
                                                put("facilis", "vero");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("dolore", "quibusdam");
                                                put("illum", "sequi");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("impedit", "aut");
                                                put("voluptatibus", "exercitationem");
                                                put("nulla", "fugit");
                                            }}),
                                        }};
                                        message = "porro";
                                    }};
                                }};
                                lastExitCode = 981830;
                                restarted = 985033;
                                startTime = "iusto";
                                succeeded = 753570;
                            }}),
                            add(new InstanceStatus() {{
                                completionTime = "ducimus";
                                failed = 4048;
                                index = 639473;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 269479;
                                    status = new GoogleRpcStatus() {{
                                        code = 368584;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("vel", "possimus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ratione", "ex");
                                                put("laudantium", "dicta");
                                            }}),
                                        }};
                                        message = "dolor";
                                    }};
                                }};
                                lastExitCode = 980700;
                                restarted = 97844;
                                startTime = "ex";
                                succeeded = 862192;
                            }}),
                            add(new InstanceStatus() {{
                                completionTime = "excepturi";
                                failed = 972920;
                                index = 343605;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 960835;
                                    status = new GoogleRpcStatus() {{
                                        code = 788873;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("impedit", "corporis");
                                                put("veniam", "aliquid");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("magnam", "ea");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("consectetur", "recusandae");
                                                put("aspernatur", "minima");
                                                put("eaque", "a");
                                                put("libero", "aut");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("deleniti", "impedit");
                                            }}),
                                        }};
                                        message = "aliquam";
                                    }};
                                }};
                                lastExitCode = 146946;
                                restarted = 882860;
                                startTime = "inventore";
                                succeeded = 250622;
                            }}),
                        }};
                        observedGeneration = 89603;
                        startTime = "dolorum";
                        succeeded = 672048;
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