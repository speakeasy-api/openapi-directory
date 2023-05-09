# namespaces

### Available Operations

* [runNamespacesJobsCreate](#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsGet](#runnamespacesjobsget) - Get information about a job.
* [runNamespacesJobsList](#runnamespacesjobslist) - List jobs.

## runNamespacesJobsCreate

Create a job.

### Example Usage

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

            RunNamespacesJobsCreateRequest req = new RunNamespacesJobsCreateRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                job = new Job() {{
                    apiVersion = "recusandae";
                    kind = "aliquid";
                    metadata = new ObjectMeta() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("cum", "consectetur");
                        }};
                        clusterName = "in";
                        creationTimestamp = "exercitationem";
                        deletionGracePeriodSeconds = 937285;
                        deletionTimestamp = "facere";
                        finalizers = new String[]{{
                            add("doloribus"),
                            add("suscipit"),
                        }};
                        generateName = "reiciendis";
                        generation = 697142;
                        labels = new java.util.HashMap<String, String>() {{
                            put("necessitatibus", "dolore");
                            put("sunt", "asperiores");
                            put("adipisci", "non");
                            put("amet", "beatae");
                        }};
                        name = "Lorene Toy";
                        namespace = "harum";
                        ownerReferences = new org.openapis.openapi.models.shared.OwnerReference[]{{
                            add(new OwnerReference() {{
                                apiVersion = "ipsa";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "voluptates";
                                name = "Terry Tillman";
                                uid = "aspernatur";
                            }}),
                            add(new OwnerReference() {{
                                apiVersion = "voluptas";
                                blockOwnerDeletion = false;
                                controller = false;
                                kind = "voluptas";
                                name = "Cathy Rohan";
                                uid = "minus";
                            }}),
                        }};
                        resourceVersion = "dolores";
                        selfLink = "blanditiis";
                        uid = "in";
                    }};;
                    spec = new JobSpec() {{
                        activeDeadlineSeconds = "dolore";
                        backoffLimit = 304468;
                        completions = 885963;
                        parallelism = 839189;
                        template = new InstanceTemplateSpec() {{
                            spec = new InstanceSpec() {{
                                activeDeadlineSeconds = "ullam";
                                containers = new org.openapis.openapi.models.shared.Container[]{{
                                    add(new Container() {{
                                        args = new String[]{{
                                            add("blanditiis"),
                                            add("quas"),
                                            add("hic"),
                                        }};
                                        command = new String[]{{
                                            add("culpa"),
                                        }};
                                        env = new org.openapis.openapi.models.shared.EnvVar[]{{
                                            add(new EnvVar() {{
                                                name = "Jimmie Weimann";
                                                value = "sit";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "rerum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Faith Cole";
                                                        }};
                                                        name = "Kristy Bernier";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "laborum";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Pearl Johnson";
                                                        }};
                                                        name = "Geneva Bradtke";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Ms. Gregory Wisoky";
                                                value = "incidunt";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "sed";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Herbert Treutel";
                                                        }};
                                                        name = "Isaac Wolf";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "voluptate";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Marc Balistreri";
                                                        }};
                                                        name = "Malcolm Hagenes";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                            add(new EnvVar() {{
                                                name = "Ian Balistreri";
                                                value = "veniam";
                                                valueFrom = new EnvVarSource() {{
                                                    configMapKeyRef = new ConfigMapKeySelector() {{
                                                        key = "minima";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Van Stoltenberg PhD";
                                                        }};
                                                        name = "Lorraine King IV";
                                                        optional = false;
                                                    }};
                                                    secretKeyRef = new SecretKeySelector() {{
                                                        key = "exercitationem";
                                                        localObjectReference = new LocalObjectReference() {{
                                                            name = "Bennie Howe";
                                                        }};
                                                        name = "Irvin Rath";
                                                        optional = false;
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        envFrom = new org.openapis.openapi.models.shared.EnvFromSource[]{{
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Brandi Padberg";
                                                    }};
                                                    name = "Kay Cormier";
                                                    optional = false;
                                                }};
                                                prefix = "voluptatem";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Ms. Rudolph Gusikowski";
                                                    }};
                                                    name = "Nora Lynch";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Mattie Jaskolski III";
                                                    }};
                                                    name = "Mrs. Tricia Mueller";
                                                    optional = false;
                                                }};
                                                prefix = "dolorem";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Gerald Bradtke";
                                                    }};
                                                    name = "Alberto Osinski";
                                                    optional = false;
                                                }};
                                            }}),
                                            add(new EnvFromSource() {{
                                                configMapRef = new ConfigMapEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Patricia Farrell";
                                                    }};
                                                    name = "Boyd McKenzie";
                                                    optional = false;
                                                }};
                                                prefix = "voluptates";
                                                secretRef = new SecretEnvSource() {{
                                                    localObjectReference = new LocalObjectReference() {{
                                                        name = "Monique Predovic";
                                                    }};
                                                    name = "Max O'Connell DDS";
                                                    optional = false;
                                                }};
                                            }}),
                                        }};
                                        image = "repudiandae";
                                        imagePullPolicy = "quasi";
                                        livenessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("reprehenderit"),
                                                    add("asperiores"),
                                                    add("totam"),
                                                }};
                                            }};
                                            failureThreshold = 383103;
                                            grpc = new GRPCAction() {{
                                                port = 693957;
                                                service = "maxime";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "et";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Angelina Jenkins";
                                                        value = "officiis";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Tomas Mosciski";
                                                        value = "ex";
                                                    }}),
                                                }};
                                                path = "maiores";
                                                scheme = "corrupti";
                                            }};
                                            initialDelaySeconds = 871786;
                                            periodSeconds = 621693;
                                            successThreshold = 502721;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "suscipit";
                                                port = 922348;
                                            }};
                                            timeoutSeconds = 542129;
                                        }};
                                        name = "Willie Walker";
                                        ports = new org.openapis.openapi.models.shared.ContainerPort[]{{
                                            add(new ContainerPort() {{
                                                containerPort = 968287;
                                                name = "Mr. Elvira Buckridge";
                                                protocol = "enim";
                                            }}),
                                            add(new ContainerPort() {{
                                                containerPort = 389135;
                                                name = "Elsa Maggio";
                                                protocol = "consequuntur";
                                            }}),
                                        }};
                                        readinessProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("officiis"),
                                                    add("perspiciatis"),
                                                    add("in"),
                                                }};
                                            }};
                                            failureThreshold = 238043;
                                            grpc = new GRPCAction() {{
                                                port = 907876;
                                                service = "occaecati";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "consequuntur";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Leo Kiehn II";
                                                        value = "quidem";
                                                    }}),
                                                }};
                                                path = "eveniet";
                                                scheme = "non";
                                            }};
                                            initialDelaySeconds = 878493;
                                            periodSeconds = 39615;
                                            successThreshold = 434156;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "ipsa";
                                                port = 517612;
                                            }};
                                            timeoutSeconds = 61078;
                                        }};
                                        resources = new ResourceRequirements() {{
                                            limits = new java.util.HashMap<String, String>() {{
                                                put("eveniet", "qui");
                                                put("cum", "iure");
                                            }};
                                            requests = new java.util.HashMap<String, String>() {{
                                                put("ratione", "laborum");
                                                put("distinctio", "voluptatum");
                                                put("rem", "aliquam");
                                                put("ad", "repellat");
                                            }};
                                        }};
                                        securityContext = new SecurityContext() {{
                                            runAsUser = 3099;
                                        }};
                                        startupProbe = new Probe() {{
                                            exec = new ExecAction() {{
                                                command = new String[]{{
                                                    add("perspiciatis"),
                                                    add("nihil"),
                                                }};
                                            }};
                                            failureThreshold = 649078;
                                            grpc = new GRPCAction() {{
                                                port = 378245;
                                                service = "alias";
                                            }};
                                            httpGet = new HTTPGetAction() {{
                                                host = "maiores";
                                                httpHeaders = new org.openapis.openapi.models.shared.HTTPHeader[]{{
                                                    add(new HTTPHeader() {{
                                                        name = "Alberta Harber";
                                                        value = "nesciunt";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Sophie Mohr";
                                                        value = "ex";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Molly Ferry";
                                                        value = "eum";
                                                    }}),
                                                    add(new HTTPHeader() {{
                                                        name = "Patti Klocko";
                                                        value = "eum";
                                                    }}),
                                                }};
                                                path = "reiciendis";
                                                scheme = "provident";
                                            }};
                                            initialDelaySeconds = 133439;
                                            periodSeconds = 354506;
                                            successThreshold = 96804;
                                            tcpSocket = new TCPSocketAction() {{
                                                host = "animi";
                                                port = 343392;
                                            }};
                                            timeoutSeconds = 652309;
                                        }};
                                        terminationMessagePath = "provident";
                                        terminationMessagePolicy = "possimus";
                                        volumeMounts = new org.openapis.openapi.models.shared.VolumeMount[]{{
                                            add(new VolumeMount() {{
                                                mountPath = "ex";
                                                name = "Ruth Zulauf";
                                                readOnly = false;
                                                subPath = "in";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "nam";
                                                name = "Oliver Osinski";
                                                readOnly = false;
                                                subPath = "voluptatibus";
                                            }}),
                                            add(new VolumeMount() {{
                                                mountPath = "molestias";
                                                name = "Miss Timmy Runolfsdottir";
                                                readOnly = false;
                                                subPath = "quis";
                                            }}),
                                        }};
                                        workingDir = "inventore";
                                    }}),
                                }};
                                restartPolicy = "fugit";
                                serviceAccountName = "cumque";
                                terminationGracePeriodSeconds = "quae";
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        configMap = new ConfigMapVolumeSource() {{
                                            defaultMode = 241901;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "eum";
                                                    mode = 260628;
                                                    path = "rem";
                                                }}),
                                            }};
                                            name = "Edmund Daugherty";
                                            optional = false;
                                        }};
                                        name = "Cathy Breitenberg";
                                        secret = new SecretVolumeSource() {{
                                            defaultMode = 936469;
                                            items = new org.openapis.openapi.models.shared.KeyToPath[]{{
                                                add(new KeyToPath() {{
                                                    key = "hic";
                                                    mode = 848151;
                                                    path = "eaque";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "earum";
                                                    mode = 596211;
                                                    path = "maiores";
                                                }}),
                                                add(new KeyToPath() {{
                                                    key = "debitis";
                                                    mode = 399802;
                                                    path = "porro";
                                                }}),
                                            }};
                                            optional = false;
                                            secretName = "suscipit";
                                        }};
                                    }}),
                                }};
                            }};;
                        }};;
                        ttlSecondsAfterFinished = 211534;
                    }};;
                    status = new JobStatus() {{
                        active = 147808;
                        completionTime = "cumque";
                        conditions = new org.openapis.openapi.models.shared.JobCondition[]{{
                            add(new JobCondition() {{
                                lastTransitionTime = "ratione";
                                message = "animi";
                                reason = "necessitatibus";
                                severity = "nulla";
                                status = "consequatur";
                                type = "quasi";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "et";
                                message = "ducimus";
                                reason = "natus";
                                severity = "occaecati";
                                status = "suscipit";
                                type = "adipisci";
                            }}),
                            add(new JobCondition() {{
                                lastTransitionTime = "quasi";
                                message = "magni";
                                reason = "doloribus";
                                severity = "nulla";
                                status = "necessitatibus";
                                type = "ipsa";
                            }}),
                        }};
                        failed = 271113;
                        imageDigest = "nihil";
                        instances = new org.openapis.openapi.models.shared.InstanceStatus[]{{
                            add(new InstanceStatus() {{
                                completionTime = "dicta";
                                failed = 479754;
                                index = 457059;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 508390;
                                    status = new GoogleRpcStatus() {{
                                        code = 979963;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("architecto", "fugiat");
                                                put("doloremque", "dicta");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("tempora", "esse");
                                                put("ex", "consectetur");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ipsa", "laborum");
                                                put("sunt", "nostrum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("expedita", "aliquid");
                                                put("officia", "suscipit");
                                                put("aliquid", "perferendis");
                                                put("eum", "voluptas");
                                            }}),
                                        }};
                                        message = "iste";
                                    }};
                                }};
                                lastExitCode = 661607;
                                restarted = 70042;
                                startTime = "error";
                                succeeded = 822407;
                            }}),
                            add(new InstanceStatus() {{
                                completionTime = "voluptates";
                                failed = 653421;
                                index = 671794;
                                lastAttemptResult = new InstanceAttemptResult() {{
                                    exitCode = 726343;
                                    status = new GoogleRpcStatus() {{
                                        code = 324083;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("vitae", "repellendus");
                                                put("ex", "quo");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ut", "ad");
                                                put("expedita", "voluptatem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("cum", "aliquid");
                                                put("beatae", "voluptatum");
                                                put("omnis", "veritatis");
                                            }}),
                                        }};
                                        message = "rerum";
                                    }};
                                }};
                                lastExitCode = 665678;
                                restarted = 634786;
                                startTime = "voluptatem";
                                succeeded = 959143;
                            }}),
                        }};
                        observedGeneration = 889288;
                        startTime = "architecto";
                        succeeded = 682119;
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "alias";
                key = "deleniti";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "sapiente";
                uploadProtocol = "rem";
            }};            

            RunNamespacesJobsCreateResponse res = sdk.namespaces.runNamespacesJobsCreate(req, new RunNamespacesJobsCreateSecurity("minus", "nemo") {{
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

## runNamespacesJobsDelete

Delete a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsDeleteRequest req = new RunNamespacesJobsDeleteRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                apiVersion = "illum";
                callback = "totam";
                fields = "impedit";
                key = "quibusdam";
                kind = "nam";
                oauthToken = "ipsam";
                prettyPrint = false;
                propagationPolicy = "culpa";
                quotaUser = "dolor";
                uploadType = "aliquam";
                uploadProtocol = "inventore";
            }};            

            RunNamespacesJobsDeleteResponse res = sdk.namespaces.runNamespacesJobsDelete(req, new RunNamespacesJobsDeleteSecurity("deleniti", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runNamespacesJobsGet

Get information about a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsGetRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsGetResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsGetRequest req = new RunNamespacesJobsGetRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "modi";
                key = "fugit";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "quae";
                uploadProtocol = "dolor";
            }};            

            RunNamespacesJobsGetResponse res = sdk.namespaces.runNamespacesJobsGet(req, new RunNamespacesJobsGetSecurity("fugiat", "ipsam") {{
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

## runNamespacesJobsList

List jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunNamespacesJobsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesJobsListResponse;
import org.openapis.openapi.models.operations.RunNamespacesJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesJobsListRequest req = new RunNamespacesJobsListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "impedit";
                continue_ = "officiis";
                fieldSelector = "esse";
                fields = "necessitatibus";
                includeUninitialized = false;
                key = "sed";
                labelSelector = "veniam";
                limit = 199596L;
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "eum";
                resourceVersion = "vel";
                uploadType = "voluptatum";
                uploadProtocol = "magnam";
                watch = false;
            }};            

            RunNamespacesJobsListResponse res = sdk.namespaces.runNamespacesJobsList(req, new RunNamespacesJobsListSecurity("exercitationem", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
