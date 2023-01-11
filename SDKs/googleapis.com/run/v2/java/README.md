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
                    parent = "nemo";
                }};
                queryParams = new RunProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "possimus";
                    alt = "json";
                    callback = "eaque";
                    fields = "nostrum";
                    jobId = "qui";
                    key = "ut";
                    oauthToken = "quas";
                    prettyPrint = false;
                    quotaUser = "quas";
                    uploadType = "recusandae";
                    uploadProtocol = "aut";
                    validateOnly = false;
                }};
                request = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("nostrum", "aut");
                        put("commodi", "vel");
                        put("blanditiis", "aut");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "provident";
                        useDefault = false;
                    }};
                    client = "ab";
                    clientVersion = "soluta";
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "omnis");
                        put("amet", "qui");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "eum";
                        createTime = "est";
                        name = "voluptatem";
                    }};
                    launchStage = "PRELAUNCH";
                    name = "architecto";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("autem", "labore");
                            put("iste", "accusantium");
                            put("similique", "corrupti");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("enim", "numquam");
                            put("omnis", "ipsam");
                        }};
                        parallelism = 3145075608343649334;
                        taskCount = 475625411291893399;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new openapisdk.models.shared.GoogleCloudRunV2Container[]() {{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]() {{
                                        add("tenetur"),
                                        add("aspernatur"),
                                        add("sit"),
                                    }};
                                    command = new String[]() {{
                                        add("quaerat"),
                                    }};
                                    env = new openapisdk.models.shared.GoogleCloudRunV2EnvVar[]() {{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "non";
                                            value = "quia";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "ducimus";
                                                    version = "sed";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "ipsum";
                                            value = "nobis";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "quibusdam";
                                                    version = "quam";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "mollitia";
                                            value = "ut";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "qui";
                                                    version = "sint";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "dolores";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 6029482161937200390;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 7048387579217796344;
                                            service = "vitae";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "aliquam";
                                                    value = "est";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "nulla";
                                                    value = "molestias";
                                                }}),
                                            }};
                                            path = "quasi";
                                        }};
                                        initialDelaySeconds = 8067687964968880749;
                                        periodSeconds = 283211734988073257;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 5655887632095028385;
                                        }};
                                        timeoutSeconds = 5743798426125817880;
                                    }};
                                    name = "a";
                                    ports = new openapisdk.models.shared.GoogleCloudRunV2ContainerPort[]() {{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 1911036039318588495;
                                            name = "consequatur";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 2366383408130608419;
                                            name = "ad";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("accusamus", "in");
                                            put("cupiditate", "et");
                                            put("sed", "et");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 4986235178075191050;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 359970047222382702;
                                            service = "ea";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "optio";
                                                    value = "voluptatem";
                                                }}),
                                            }};
                                            path = "molestias";
                                        }};
                                        initialDelaySeconds = 3337532553715861462;
                                        periodSeconds = 5438524418408162904;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 8904267528297227803;
                                        }};
                                        timeoutSeconds = 3749108602919780733;
                                    }};
                                    volumeMounts = new openapisdk.models.shared.GoogleCloudRunV2VolumeMount[]() {{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "aut";
                                            name = "dolores";
                                        }}),
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "omnis";
                                            name = "minima";
                                        }}),
                                    }};
                                    workingDir = "non";
                                }}),
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]() {{
                                        add("quaerat"),
                                        add("ex"),
                                    }};
                                    command = new String[]() {{
                                        add("minus"),
                                        add("voluptas"),
                                        add("ut"),
                                    }};
                                    env = new openapisdk.models.shared.GoogleCloudRunV2EnvVar[]() {{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "unde";
                                            value = "corrupti";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "vitae";
                                                    version = "sapiente";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "eos";
                                            value = "omnis";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "sit";
                                                    version = "aliquam";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "sequi";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 5100625360813066717;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 5312582212448115937;
                                            service = "voluptates";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "atque";
                                                    value = "velit";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "quo";
                                                    value = "consectetur";
                                                }}),
                                            }};
                                            path = "qui";
                                        }};
                                        initialDelaySeconds = 8648177583748317537;
                                        periodSeconds = 2803711218330973093;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 1985372982066537218;
                                        }};
                                        timeoutSeconds = 374777448867330334;
                                    }};
                                    name = "alias";
                                    ports = new openapisdk.models.shared.GoogleCloudRunV2ContainerPort[]() {{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 496967435441444982;
                                            name = "fuga";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("nostrum", "corporis");
                                        }};
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 9191504972874448162;
                                        grpc = new GoogleCloudRunV2GrpcAction() {{
                                            port = 4520424994124967770;
                                            service = "laborum";
                                        }};
                                        httpGet = new GoogleCloudRunV2HttpGetAction() {{
                                            httpHeaders = new openapisdk.models.shared.GoogleCloudRunV2HttpHeader[]() {{
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "omnis";
                                                    value = "et";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "consequatur";
                                                    value = "odit";
                                                }}),
                                                add(new GoogleCloudRunV2HttpHeader() {{
                                                    name = "enim";
                                                    value = "nam";
                                                }}),
                                            }};
                                            path = "eligendi";
                                        }};
                                        initialDelaySeconds = 959096935344815869;
                                        periodSeconds = 7428740828765031150;
                                        tcpSocket = new GoogleCloudRunV2TcpSocketAction() {{
                                            port = 3799034442655895215;
                                        }};
                                        timeoutSeconds = 9197789757500907007;
                                    }};
                                    volumeMounts = new openapisdk.models.shared.GoogleCloudRunV2VolumeMount[]() {{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "et";
                                            name = "sed";
                                        }}),
                                    }};
                                    workingDir = "et";
                                }}),
                            }};
                            encryptionKey = "omnis";
                            executionEnvironment = "EXECUTION_ENVIRONMENT_UNSPECIFIED";
                            maxRetries = 6318069228905819529;
                            serviceAccount = "consequatur";
                            timeout = "alias";
                            volumes = new openapisdk.models.shared.GoogleCloudRunV2Volume[]() {{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]() {{
                                            add("adipisci"),
                                        }};
                                    }};
                                    name = "cum";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 8838871458553901847;
                                        items = new openapisdk.models.shared.GoogleCloudRunV2VersionToPath[]() {{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 599976771286868695;
                                                path = "et";
                                                version = "tempora";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 5834941202782018414;
                                                path = "aliquam";
                                                version = "quaerat";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 4176187742767373134;
                                                path = "ullam";
                                                version = "dolores";
                                            }}),
                                        }};
                                        secret = "perferendis";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]() {{
                                            add("et"),
                                            add("ea"),
                                            add("rerum"),
                                        }};
                                    }};
                                    name = "et";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 3966890689828243498;
                                        items = new openapisdk.models.shared.GoogleCloudRunV2VersionToPath[]() {{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 3524904515083528158;
                                                path = "sint";
                                                version = "et";
                                            }}),
                                        }};
                                        secret = "deleniti";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]() {{
                                            add("sunt"),
                                            add("aperiam"),
                                            add("non"),
                                        }};
                                    }};
                                    name = "consequatur";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 5101600335788017761;
                                        items = new openapisdk.models.shared.GoogleCloudRunV2VersionToPath[]() {{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 7270503619157569051;
                                                path = "amet";
                                                version = "quaerat";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 7678673476489550456;
                                                path = "sint";
                                                version = "sed";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 2129967294969045231;
                                                path = "vel";
                                                version = "debitis";
                                            }}),
                                        }};
                                        secret = "neque";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "inventore";
                                egress = "ALL_TRAFFIC";
                            }};
                        }};
                    }};
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = "NON_ZERO_EXIT_CODE";
                        lastTransitionTime = "dolores";
                        message = "nobis";
                        reason = "CONTAINER_IMAGE_UNAUTHORIZED";
                        revisionReason = "MIN_INSTANCES_NOT_PROVISIONED";
                        severity = "ERROR";
                        state = "CONDITION_SUCCEEDED";
                        type = "cupiditate";
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
