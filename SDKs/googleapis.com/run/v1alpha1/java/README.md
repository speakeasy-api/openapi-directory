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
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigMapEnvSource;
import org.openapis.openapi.models.shared.ConfigMapKeySelector;
import org.openapis.openapi.models.shared.ConfigMapVolumeSource;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerPort;
import org.openapis.openapi.models.shared.EnvFromSource;
import org.openapis.openapi.models.shared.EnvVar;
import org.openapis.openapi.models.shared.EnvVarSource;
import org.openapis.openapi.models.shared.ExecAction;
import org.openapis.openapi.models.shared.GRPCAction;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.HTTPGetAction;
import org.openapis.openapi.models.shared.HTTPHeader;
import org.openapis.openapi.models.shared.InstanceAttemptResult;
import org.openapis.openapi.models.shared.InstanceSpec;
import org.openapis.openapi.models.shared.InstanceStatus;
import org.openapis.openapi.models.shared.InstanceTemplateSpec;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobCondition;
import org.openapis.openapi.models.shared.JobSpec;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.KeyToPath;
import org.openapis.openapi.models.shared.LocalObjectReference;
import org.openapis.openapi.models.shared.ObjectMeta;
import org.openapis.openapi.models.shared.OwnerReference;
import org.openapis.openapi.models.shared.Probe;
import org.openapis.openapi.models.shared.ResourceRequirements;
import org.openapis.openapi.models.shared.SecretEnvSource;
import org.openapis.openapi.models.shared.SecretKeySelector;
import org.openapis.openapi.models.shared.SecretVolumeSource;
import org.openapis.openapi.models.shared.SecurityContext;
import org.openapis.openapi.models.shared.TCPSocketAction;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VolumeMount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsCreateRequest req = new RunNamespacesJobsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                job = new Job() {{
                    apiVersion = "distinctio";
                    kind = "quibusdam";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("nulla", "corrupti");
                            put("illum", "vel");
                            put("error", "deserunt");
                        }};
                        clusterName = "suscipit";
                        creationTimestamp = "iure";
                        deletionGracePeriodSeconds = 297534;
                        deletionTimestamp = "debitis";
                        finalizers = new String[]{{
                            add("delectus"),
                        }};
                        generateName = "tempora";
                        generation = 383441;
                        labels = new java.util.HashMap<String, String>() {{
                            put("minus", "placeat");
                            put("voluptatum", "iusto");
                        }};
                        name = "Charlie Walsh II";
                        namespace = "veritatis";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "perferendis";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "ipsam";
                                name = "Timmy Satterfield";
                                uid = "at";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "maiores";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "molestiae";
                                name = "Forrest Koepp";
                                uid = "dolorum";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "dicta";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "nam";
                                name = "Seth Conroy";
                                uid = "optio";
                            }}),
                        }};
                        resourceVersion = "totam";
                        selfLink = "beatae";
                        uid = "commodi";
                    }};;
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "molestiae";
                        backoffLimit = 264555;
                        completions = 186332;
                        parallelism = 774234;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "cum";
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("excepturi"),
                                        }};
                                        command = new String[]{{
                                            add("perferendis"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Louis Moore";
                                                value = "laboriosam";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "hic";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Wilbur Kirlin";
                                                        }};
                                                        name = "Mr. Kerry Predovic";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "est";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Cameron Dach";
                                                        }};
                                                        name = "Della Halvorson";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Velma Batz";
                                                value = "doloribus";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "sapiente";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Angie Durgan";
                                                        }};
                                                        name = "Shaun McCullough";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "quam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Shannon Mueller";
                                                        }};
                                                        name = "Kayla O'Kon";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mandy Hills";
                                                    }};
                                                    name = "Joyce Mueller";
                                                    optional = false;
                                                }};
                                                prefix = "quasi";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Jan Thiel";
                                                    }};
                                                    name = "Jose Moen";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Sharon Kiehn";
                                                    }};
                                                    name = "Stacy Gulgowski MD";
                                                    optional = false;
                                                }};
                                                prefix = "enim";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mrs. Leslie VonRueden";
                                                    }};
                                                    name = "Andy Streich";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Grady Botsford";
                                                    }};
                                                    name = "Patti Gottlieb MD";
                                                    optional = false;
                                                }};
                                                prefix = "quibusdam";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Joanna Rau";
                                                    }};
                                                    name = "Tina Jacobi";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Louise Simonis Sr.";
                                                    }};
                                                    name = "Marshall Glover";
                                                    optional = false;
                                                }};
                                                prefix = "labore";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Andre Franey";
                                                    }};
                                                    name = "Sherri Tremblay";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "dolor";
                                        imagePullPolicy = "debitis";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("dolorum"),
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                            }};
                                            failureThreshold = 978571;
                                            grpc = new GRPCAction() {{
                                                port = 699479;
                                                service = "dicta";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "magnam";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Nathaniel Hyatt";
                                                        value = "non";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Jon Tillman";
                                                        value = "provident";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Lynn Kuvalis";
                                                        value = "amet";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Tyler Kassulke";
                                                        value = "molestiae";
                                                    }}),
                                                }};
                                                path = "perferendis";
                                                scheme = "nihil";
                                            }};
                                            initialDelaySeconds = 301575;
                                            periodSeconds = 716075;
                                            successThreshold = 660174;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "labore";
                                                port = 290077;
                                            }};
                                            timeoutSeconds = 383462;
                                        }};
                                        name = "Robin Keebler";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 298282;
                                                name = "Miriam Hermann";
                                                protocol = "sint";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("mollitia"),
                                                }};
                                            }};
                                            failureThreshold = 968962;
                                            grpc = new GRPCAction() {{
                                                port = 652103;
                                                service = "ad";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "eum";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Ms. Fred Hilll";
                                                        value = "debitis";
                                                    }}),
                                                }};
                                                path = "eius";
                                                scheme = "maxime";
                                            }};
                                            initialDelaySeconds = 537023;
                                            periodSeconds = 703889;
                                            successThreshold = 447926;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "architecto";
                                                port = 99569;
                                            }};
                                            timeoutSeconds = 919483;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("expedita", "nihil");
                                                put("repellat", "quibusdam");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("saepe", "pariatur");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 37559;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
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
                                                        name = "Simon Jenkins";
                                                        value = "ea";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Virginia Wunsch";
                                                        value = "voluptate";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Candice Beatty";
                                                        value = "voluptatibus";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Miss Ginger Feeney";
                                                        value = "hic";
                                                    }}),
                                                }};
                                                path = "libero";
                                                scheme = "nobis";
                                            }};
                                            initialDelaySeconds = 171629;
                                            periodSeconds = 339404;
                                            successThreshold = 521037;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "dignissimos";
                                                port = 54338;
                                            }};
                                            timeoutSeconds = 338985;
                                        }};
                                        terminationMessagePath = "nesciunt";
                                        terminationMessagePolicy = "eos";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "dolores";
                                                name = "Darryl Fadel";
                                                readOnly = false;
                                                subPath = "hic";
                                            }}),
                                        }};
                                        workingDir = "recusandae";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("facilis"),
                                            add("perspiciatis"),
                                            add("voluptatem"),
                                        }};
                                        command = new String[]{{
                                            add("consequuntur"),
                                            add("blanditiis"),
                                            add("error"),
                                            add("eaque"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Travis Zemlak";
                                                value = "iste";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "dolorum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Ervin McLaughlin";
                                                        }};
                                                        name = "Alex Luettgen";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "dolorem";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Norma Erdman";
                                                        }};
                                                        name = "Adrian Kuhn";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Mr. Bradley Bogan";
                                                value = "odio";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "quaerat";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Rickey Wolf";
                                                        }};
                                                        name = "Kay Bailey DDS";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "dolorum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Colleen Pagac";
                                                        }};
                                                        name = "Kelvin Zboncak";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Alberta Ullrich";
                                                value = "perferendis";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "amet";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Tomas Hammes";
                                                        }};
                                                        name = "Rene Hane";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "similique";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Cristina Hahn";
                                                        }};
                                                        name = "Erick Denesik";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Tyrone Emard";
                                                    }};
                                                    name = "Kelli Thompson";
                                                    optional = false;
                                                }};
                                                prefix = "dolorem";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Miss Jimmie Kozey";
                                                    }};
                                                    name = "Gina Renner";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Tracy Gottlieb";
                                                    }};
                                                    name = "Miss Jody Rogahn";
                                                    optional = false;
                                                }};
                                                prefix = "incidunt";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Bonnie Raynor";
                                                    }};
                                                    name = "Felicia Spencer";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "fugit";
                                        imagePullPolicy = "magni";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("sunt"),
                                                    add("ullam"),
                                                }};
                                            }};
                                            failureThreshold = 722081;
                                            grpc = new GRPCAction() {{
                                                port = 940432;
                                                service = "voluptatem";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "cumque";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Carl Turner DDS";
                                                        value = "quos";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Kent Bayer";
                                                        value = "dolore";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Mr. Josephine Pagac V";
                                                        value = "itaque";
                                                    }}),
                                                }};
                                                path = "consequatur";
                                                scheme = "est";
                                            }};
                                            initialDelaySeconds = 833038;
                                            periodSeconds = 785153;
                                            successThreshold = 984330;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "ut";
                                                port = 703495;
                                            }};
                                            timeoutSeconds = 586410;
                                        }};
                                        name = "Amy Langworth";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 787542;
                                                name = "Arturo Hauck";
                                                protocol = "voluptate";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 231701;
                                                name = "Roman Kulas";
                                                protocol = "quod";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 486160;
                                                name = "Malcolm Swift";
                                                protocol = "quibusdam";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 848944;
                                                name = "Dr. Faye Rutherford";
                                                protocol = "nulla";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("porro"),
                                                }};
                                            }};
                                            failureThreshold = 981830;
                                            grpc = new GRPCAction() {{
                                                port = 985033;
                                                service = "iusto";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "eligendi";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Brandi Glover";
                                                        value = "aspernatur";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Elena Gulgowski";
                                                        value = "laudantium";
                                                    }}),
                                                }};
                                                path = "dicta";
                                                scheme = "dolor";
                                            }};
                                            initialDelaySeconds = 980700;
                                            periodSeconds = 97844;
                                            successThreshold = 406120;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "nulla";
                                                port = 569211;
                                            }};
                                            timeoutSeconds = 972920;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("sapiente", "quisquam");
                                                put("saepe", "ea");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("corporis", "veniam");
                                                put("aliquid", "inventore");
                                                put("magnam", "ea");
                                                put("quo", "consectetur");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 926213;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("minima"),
                                                }};
                                            }};
                                            failureThreshold = 53427;
                                            grpc = new GRPCAction() {{
                                                port = 952871;
                                                service = "libero";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "aut";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Myron Haag";
                                                        value = "inventore";
                                                    }}),
                                                }};
                                                path = "non";
                                                scheme = "et";
                                            }};
                                            initialDelaySeconds = 677412;
                                            periodSeconds = 672048;
                                            successThreshold = 810424;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "velit";
                                                port = 432148;
                                            }};
                                            timeoutSeconds = 420539;
                                        }};
                                        terminationMessagePath = "nobis";
                                        terminationMessagePolicy = "quas";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "nulla";
                                                name = "Jeannette Boyer";
                                                readOnly = false;
                                                subPath = "explicabo";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "provident";
                                                name = "Minnie Gutkowski";
                                                readOnly = false;
                                                subPath = "esse";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "esse";
                                                name = "Blake Kihn";
                                                readOnly = false;
                                                subPath = "ut";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "eum";
                                                name = "Angelina Davis";
                                                readOnly = false;
                                                subPath = "veritatis";
                                            }}),
                                        }};
                                        workingDir = "ipsa";
                                    }}),
                                }};
                                restartPolicy = "id";
                                serviceAccountName = "quidem";
                                terminationGracePeriodSeconds = "neque";
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 847276;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "fuga";
                                                    mode = 259422;
                                                    path = "eos";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "voluptas";
                                                    mode = 69859;
                                                    path = "cupiditate";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "consequatur";
                                                    mode = 272822;
                                                    path = "debitis";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "ipsam";
                                                    mode = 133465;
                                                    path = "sequi";
                                                }}),
                                            }};
                                            name = "Miss Claude Walsh";
                                            optional = false;
                                        }};
                                        name = "Debra Kovacek";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 306810;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "occaecati";
                                                    mode = 414567;
                                                    path = "sapiente";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "dolores";
                                                    mode = 645570;
                                                    path = "molestiae";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "accusantium";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 783648;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "quas";
                                                    mode = 510017;
                                                    path = "consequuntur";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "deleniti";
                                                    mode = 143829;
                                                    path = "fuga";
                                                }}),
                                            }};
                                            name = "Randall Lindgren";
                                            optional = false;
                                        }};
                                        name = "Denise Will";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 129412;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "occaecati";
                                                    mode = 543806;
                                                    path = "et";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "esse";
                                                    mode = 910545;
                                                    path = "accusamus";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "veritatis";
                                                    mode = 458604;
                                                    path = "quod";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "nam";
                                                    mode = 877131;
                                                    path = "aliquid";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "quasi";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 904045;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "harum";
                                                    mode = 473221;
                                                    path = "rerum";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "occaecati";
                                                    mode = 327720;
                                                    path = "distinctio";
                                                }}),
                                            }};
                                            name = "Mark Nicolas";
                                            optional = false;
                                        }};
                                        name = "Carlos Altenwerth";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 959167;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "esse";
                                                    mode = 503427;
                                                    path = "provident";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "a";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 857723;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "esse";
                                                    mode = 97468;
                                                    path = "a";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "error";
                                                    mode = 575751;
                                                    path = "pariatur";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "possimus";
                                                    mode = 157632;
                                                    path = "eveniet";
                                                }}),
                                            }};
                                            name = "Carroll Bogan V";
                                            optional = false;
                                        }};
                                        name = "Dr. Gene Wiegand";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 447378;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "libero";
                                                    mode = 849039;
                                                    path = "soluta";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "accusantium";
                                                    mode = 306986;
                                                    path = "sapiente";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "dicta";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        ttlSecondsAfterFinished = 355369;
                    }};;
                    status = new JobStatus() {{
                        active = 443879;
                        completionTime = "ullam";
                        conditions = new org.openapis.openapi.models.shared.JobCondition[]{{
                            add(new JobCondition() {{
                                lastTransitionTime = "aut";
                                message = "voluptatum";
                                reason = "qui";
                                severity = "quibusdam";
                                status = "ex";
                                type = "deleniti";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "itaque";
                                message = "dolorum";
                                reason = "architecto";
                                severity = "omnis";
                                status = "tenetur";
                                type = "quasi";
                            }}),
                        }};
                        failed = 869489;
                        imageDigest = "et";
                        instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                            add(new InstanceStatus() {{
                                completionTime = "ipsa";
                                failed = 326701;
                                index = 86532;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 232744;
                                    status = new GoogleRpcStatus() {{
                                        code = 237173;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("accusantium", "rem");
                                                put("aut", "laudantium");
                                                put("eum", "mollitia");
                                                put("ab", "corrupti");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatem", "dolor");
                                                put("occaecati", "numquam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("explicabo", "voluptas");
                                                put("aut", "dignissimos");
                                                put("dicta", "maiores");
                                                put("natus", "velit");
                                            }}),
                                        }};
                                        message = "voluptatibus";
                                    }};
                                }};
                                lastExitCode = 374323;
                                restarted = 990345;
                                startTime = "aperiam";
                                succeeded = 409054;
                            }}),
                            add(new InstanceStatus() {{
                                completionTime = "quaerat";
                                failed = 162954;
                                index = 831520;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 638762;
                                    status = new GoogleRpcStatus() {{
                                        code = 807023;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("asperiores", "nemo");
                                                put("quae", "quaerat");
                                                put("porro", "quod");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ab", "adipisci");
                                                put("fuga", "id");
                                            }}),
                                        }};
                                        message = "suscipit";
                                    }};
                                }};
                                lastExitCode = 246063;
                                restarted = 633931;
                                startTime = "est";
                                succeeded = 926880;
                            }}),
                        }};
                        observedGeneration = 517309;
                        startTime = "fugiat";
                        succeeded = 424089;
                    }};;
                }};;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "labore";
                key = "possimus";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "commodi";
                uploadProtocol = "in";
            }};            

            RunNamespacesJobsCreateResponse res = sdk.namespaces.runNamespacesJobsCreate(req, new RunNamespacesJobsCreateSecurity("corporis", "reiciendis") {{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [namespaces](docs/namespaces/README.md)

* [runNamespacesJobsCreate](docs/namespaces/README.md#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](docs/namespaces/README.md#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsGet](docs/namespaces/README.md#runnamespacesjobsget) - Get information about a job.
* [runNamespacesJobsList](docs/namespaces/README.md#runnamespacesjobslist) - List jobs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
