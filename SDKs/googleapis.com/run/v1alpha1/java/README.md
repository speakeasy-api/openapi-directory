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
                    parent = "sit";
                }};
                queryParams = new RunNamespacesJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Job() {{
                    apiVersion = "dicta";
                    kind = "debitis";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("et", "ut");
                        }};
                        clusterName = "dolorem";
                        creationTimestamp = "et";
                        deletionGracePeriodSeconds = 7373105480197164748;
                        deletionTimestamp = "iste";
                        finalizers = new String[]() {{
                            add("totam"),
                        }};
                        generateName = "dolores";
                        generation = 1929546706668609706;
                        labels = new java.util.HashMap<String, String>() {{
                            put("vel", "odio");
                        }};
                        name = "dolore";
                        namespace = "id";
                        ownerReferences = new openapisdk.models.shared.OwnerReference[]() {{
                            add(new OwnerReference() {{
                                apiVersion = "accusantium";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "quis";
                                name = "est";
                                uid = "aut";
                            }}),
                        }};
                        resourceVersion = "odit";
                        selfLink = "non";
                        uid = "voluptas";
                    }};
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "omnis";
                        backoffLimit = 1059542851699319360;
                        completions = 6972732843819909978;
                        parallelism = 5558237345453186302;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "officiis";
                                containers = new openapisdk.models.shared.Container[]() {{
                                    add(new Container() {{
                                        args = new String[]() {{
                                            add("nobis"),
                                        }};
                                        command = new String[]() {{
                                            add("qui"),
                                        }};
                                        env = new openapisdk.models.shared.EnvVar[]() {{
                                            add(new EnvVar() {{
                                                name = "at";
                                                value = "ipsum";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "eveniet";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "modi";
                                                        }};
                                                        name = "sint";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "ut";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "exercitationem";
                                                        }};
                                                        name = "aut";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "tempore";
                                                value = "maiores";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "incidunt";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "dolor";
                                                        }};
                                                        name = "beatae";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "in";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "et";
                                                        }};
                                                        name = "omnis";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "ex";
                                                value = "dolores";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "placeat";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "vel";
                                                        }};
                                                        name = "rerum";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "voluptas";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "quam";
                                                        }};
                                                        name = "reprehenderit";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new openapisdk.models.shared.EnvFromSource[]() {{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "unde";
                                                    }};
                                                    name = "in";
                                                    optional = false;
                                                }};
                                                prefix = "qui";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "ut";
                                                    }};
                                                    name = "itaque";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "neque";
                                        imagePullPolicy = "ullam";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("accusantium"),
                                                    add("esse"),
                                                    add("architecto"),
                                                }};
                                            }};
                                            failureThreshold = 9021104375654741729;
                                            grpc = new GrpcAction() {{
                                                port = 3604381780091280195;
                                                service = "cumque";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "soluta";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "voluptates";
                                                        value = "magni";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "et";
                                                        value = "optio";
                                                    }}),
                                                }};
                                                path = "qui";
                                                scheme = "earum";
                                            }};
                                            initialDelaySeconds = 4391202566038595699;
                                            periodSeconds = 6215632031706852400;
                                            successThreshold = 241482278320610612;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "consequatur";
                                                port = 5364953311572054685;
                                            }};
                                            timeoutSeconds = 7945398411639602224;
                                        }};
                                        name = "error";
                                        ports = new openapisdk.models.shared.ContainerPort[]() {{
                                            add(new ContainerPort() {{
                                                containerPort = 4989862523986425397;
                                                name = "nostrum";
                                                protocol = "ut";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("sed"),
                                                    add("a"),
                                                    add("soluta"),
                                                }};
                                            }};
                                            failureThreshold = 7540276489530073149;
                                            grpc = new GrpcAction() {{
                                                port = 7638413271565042464;
                                                service = "consequuntur";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "laudantium";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "ipsa";
                                                        value = "expedita";
                                                    }}),
                                                }};
                                                path = "doloremque";
                                                scheme = "perferendis";
                                            }};
                                            initialDelaySeconds = 8497925768463229012;
                                            periodSeconds = 5311927246208705713;
                                            successThreshold = 3967212276624460248;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "explicabo";
                                                port = 1115785012616387305;
                                            }};
                                            timeoutSeconds = 2629911606854649819;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("perferendis", "et");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "quis");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 5026609382502824278;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("necessitatibus"),
                                                }};
                                            }};
                                            failureThreshold = 9205243623417456715;
                                            grpc = new GrpcAction() {{
                                                port = 190417550815006435;
                                                service = "eum";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "labore";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "impedit";
                                                        value = "ad";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "expedita";
                                                        value = "vel";
                                                    }}),
                                                }};
                                                path = "qui";
                                                scheme = "modi";
                                            }};
                                            initialDelaySeconds = 8279128640960530079;
                                            periodSeconds = 1011676084465510524;
                                            successThreshold = 8764227983217623240;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "eaque";
                                                port = 7941830299651147569;
                                            }};
                                            timeoutSeconds = 157519078836327761;
                                        }};
                                        terminationMessagePath = "autem";
                                        terminationMessagePolicy = "quis";
                                        volumeMounts = new openapisdk.models.shared.VolumeMount[]() {{
                                            add(new VolumeMount() {{
                                                mountPath = "vel";
                                                name = "placeat";
                                                readOnly = true;
                                                subPath = "nisi";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "quis";
                                                name = "adipisci";
                                                readOnly = false;
                                                subPath = "rerum";
                                            }}),
                                        }};
                                        workingDir = "et";
                                    }}),
                                    add(new Container() {{
                                        args = new String[]() {{
                                            add("numquam"),
                                            add("laborum"),
                                            add("rerum"),
                                        }};
                                        command = new String[]() {{
                                            add("laborum"),
                                            add("fugit"),
                                        }};
                                        env = new openapisdk.models.shared.EnvVar[]() {{
                                            add(new EnvVar() {{
                                                name = "minus";
                                                value = "soluta";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "aperiam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "consequuntur";
                                                        }};
                                                        name = "excepturi";
                                                        optional = true;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "inventore";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "delectus";
                                                        }};
                                                        name = "ipsa";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "animi";
                                                value = "ut";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "aliquam";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "fuga";
                                                        }};
                                                        name = "sed";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "et";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "consequuntur";
                                                        }};
                                                        name = "non";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "provident";
                                                value = "molestiae";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "pariatur";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "quasi";
                                                        }};
                                                        name = "corrupti";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "qui";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "sit";
                                                        }};
                                                        name = "possimus";
                                                        optional = true;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new openapisdk.models.shared.EnvFromSource[]() {{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "consequuntur";
                                                    }};
                                                    name = "quia";
                                                    optional = true;
                                                }};
                                                prefix = "est";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "occaecati";
                                                    }};
                                                    name = "ex";
                                                    optional = true;
                                                }};
                                            }}),
                                        }};
                                        image = "quia";
                                        imagePullPolicy = "temporibus";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("quae"),
                                                }};
                                            }};
                                            failureThreshold = 5042961816383320698;
                                            grpc = new GrpcAction() {{
                                                port = 283784251954593037;
                                                service = "necessitatibus";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "in";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "voluptatem";
                                                        value = "dolorum";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "doloribus";
                                                        value = "saepe";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "sunt";
                                                        value = "earum";
                                                    }}),
                                                }};
                                                path = "et";
                                                scheme = "ut";
                                            }};
                                            initialDelaySeconds = 1514803956160473307;
                                            periodSeconds = 8363070169127058929;
                                            successThreshold = 5192917599516086534;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "ipsum";
                                                port = 6787227741588449494;
                                            }};
                                            timeoutSeconds = 4883506937319508494;
                                        }};
                                        name = "nihil";
                                        ports = new openapisdk.models.shared.ContainerPort[]() {{
                                            add(new ContainerPort() {{
                                                containerPort = 8481809518534237594;
                                                name = "impedit";
                                                protocol = "non";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("ut"),
                                                }};
                                            }};
                                            failureThreshold = 3357930257403748968;
                                            grpc = new GrpcAction() {{
                                                port = 371208508841907247;
                                                service = "qui";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "quia";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "ducimus";
                                                        value = "enim";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "blanditiis";
                                                        value = "distinctio";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "delectus";
                                                        value = "rerum";
                                                    }}),
                                                }};
                                                path = "dolore";
                                                scheme = "repellat";
                                            }};
                                            initialDelaySeconds = 7796777083842162182;
                                            periodSeconds = 1469755398674317289;
                                            successThreshold = 8230160685758639177;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "sunt";
                                                port = 29372123613087746;
                                            }};
                                            timeoutSeconds = 4286316651252402687;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("a", "qui");
                                                put("excepturi", "autem");
                                                put("corporis", "dicta");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("doloremque", "quae");
                                                put("nisi", "recusandae");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 7110471015351200494;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]() {{
                                                    add("et"),
                                                    add("rerum"),
                                                }};
                                            }};
                                            failureThreshold = 7434067341455688771;
                                            grpc = new GrpcAction() {{
                                                port = 9068966224370832188;
                                                service = "eos";
                                            }};
                                            httpGet = new HttpGetAction() {{
                                                host = "et";
                                                httpHeaders = new openapisdk.models.shared.HttpHeader[]() {{
                                                    add(new HttpHeader() {{
                                                        name = "aspernatur";
                                                        value = "praesentium";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "porro";
                                                        value = "nihil";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        name = "adipisci";
                                                        value = "consequatur";
                                                    }}),
                                                }};
                                                path = "illum";
                                                scheme = "accusantium";
                                            }};
                                            initialDelaySeconds = 5615798573507722061;
                                            periodSeconds = 1444501184389758573;
                                            successThreshold = 6965195451650017723;
                                            tcpSocket = new TcpSocketAction() {{
                                                host = "quidem";
                                                port = 2803265238606586800;
                                            }};
                                            timeoutSeconds = 9117043256905423229;
                                        }};
                                        terminationMessagePath = "vero";
                                        terminationMessagePolicy = "alias";
                                        volumeMounts = new openapisdk.models.shared.VolumeMount[]() {{
                                            add(new VolumeMount() {{
                                                mountPath = "deserunt";
                                                name = "eius";
                                                readOnly = false;
                                                subPath = "beatae";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "omnis";
                                                name = "totam";
                                                readOnly = false;
                                                subPath = "et";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "magni";
                                                name = "necessitatibus";
                                                readOnly = false;
                                                subPath = "culpa";
                                            }}),
                                        }};
                                        workingDir = "repellendus";
                                    }}),
                                }};
                                restartPolicy = "voluptas";
                                serviceAccountName = "ut";
                                terminationGracePeriodSeconds = "veniam";
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 9207329833049742865;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "quo";
                                                    mode = 7465719782626729327;
                                                    path = "saepe";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "commodi";
                                                    mode = 4178331056796501958;
                                                    path = "quibusdam";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "asperiores";
                                                    mode = 5721519542403305305;
                                                    path = "ea";
                                                }}),
                                            }};
                                            name = "soluta";
                                            optional = true;
                                        }};
                                        name = "commodi";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 434570727381690637;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "in";
                                                    mode = 8079844328673265272;
                                                    path = "odit";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "est";
                                                    mode = 7054703545425477159;
                                                    path = "ipsum";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "perspiciatis";
                                        }};
                                    }}),
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 9182685730299275088;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "voluptatem";
                                                    mode = 4642525602086184656;
                                                    path = "magni";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "vero";
                                                    mode = 2348459223939882374;
                                                    path = "cumque";
                                                }}),
                                            }};
                                            name = "ea";
                                            optional = false;
                                        }};
                                        name = "non";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 930977177771307407;
                                            items = new openapisdk.models.shared.KeyToPath[]() {{
                                                add(new KeyToPath() {{
                                                    key = "quae";
                                                    mode = 2073310069225302801;
                                                    path = "magni";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "minus";
                                                    mode = 8662026721107688812;
                                                    path = "aut";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "neque";
                                                    mode = 542203605369773217;
                                                    path = "quia";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "debitis";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ttlSecondsAfterFinished = 3507238623703885833;
                    }};
                    status = new JobStatus() {{
                        active = 2350280920086746644;
                        completionTime = "enim";
                        conditions = new openapisdk.models.shared.JobCondition[]() {{
                            add(new JobCondition() {{
                                lastTransitionTime = "non";
                                message = "nihil";
                                reason = "laborum";
                                severity = "recusandae";
                                status = "nihil";
                                type = "exercitationem";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "iste";
                                message = "perferendis";
                                reason = "id";
                                severity = "autem";
                                status = "hic";
                                type = "voluptatem";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "omnis";
                                message = "libero";
                                reason = "qui";
                                severity = "omnis";
                                status = "minus";
                                type = "nostrum";
                            }}),
                        }};
                        failed = 2734276392450386024;
                        imageDigest = "sit";
                        instances = new openapisdk.models.shared.InstanceStatus[]() {{
                            add(new InstanceStatus() {{
                                completionTime = "quo";
                                failed = 2422259341021744438;
                                index = 4500698545012642604;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 8645970321281326832;
                                    status = new GoogleRpcStatus() {{
                                        code = 7136207181802684899;
                                        details = new java.util.HashMap<String, Object>[]() {{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("aut", "tempora");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("mollitia", "non");
                                                put("magni", "recusandae");
                                                put("illum", "consequatur");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("hic", "nihil");
                                                put("explicabo", "ex");
                                                put("iure", "et");
                                            }}),
                                        }};
                                        message = "quos";
                                    }};
                                }};
                                lastExitCode = 6531361177861028646;
                                restarted = 2099360370584244541;
                                startTime = "necessitatibus";
                                succeeded = 5252551447369431039;
                            }}),
                        }};
                        observedGeneration = 704530383849749415;
                        startTime = "in";
                        succeeded = 2245863337273937304;
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
