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

            GenomicsPipelinesRunRequest req = new GenomicsPipelinesRunRequest() {{
                security = new GenomicsPipelinesRunSecurity() {{
                    option1 = new GenomicsPipelinesRunSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new GenomicsPipelinesRunQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolores";
                    alt = "media";
                    callback = "nam";
                    fields = "quo";
                    key = "pariatur";
                    oauthToken = "qui";
                    prettyPrint = false;
                    quotaUser = "voluptatem";
                    uploadType = "quia";
                    uploadProtocol = "blanditiis";
                }};
                request = new RunPipelineRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("facere", "est");
                        put("necessitatibus", "at");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new openapisdk.models.shared.Action[]() {{
                            add(new Action() {{
                                commands = new String[]() {{
                                    add("sunt"),
                                    add("ut"),
                                    add("et"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "sed";
                                    keyName = "veritatis";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "omnis";
                                    keyName = "natus";
                                }};
                                entrypoint = "voluptates";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("vitae", "voluptatum");
                                }};
                                flags = new openapisdk.models.shared.ActionFlagsEnum[]() {{
                                    add("PUBLISH_EXPOSED_PORTS"),
                                }};
                                imageUri = "non";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ut", "esse");
                                    put("quisquam", "quae");
                                    put("eum", "qui");
                                }};
                                mounts = new openapisdk.models.shared.Mount[]() {{
                                    add(new Mount() {{
                                        disk = "vel";
                                        path = "minima";
                                        readOnly = true;
                                    }}),
                                    add(new Mount() {{
                                        disk = "qui";
                                        path = "dolor";
                                        readOnly = true;
                                    }}),
                                    add(new Mount() {{
                                        disk = "asperiores";
                                        path = "minima";
                                        readOnly = true;
                                    }}),
                                }};
                                name = "vitae";
                                pidNamespace = "et";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("quam", 7872216776153390303);
                                    put("dignissimos", 4784334419680219104);
                                }};
                                timeout = "sint";
                            }}),
                            add(new Action() {{
                                commands = new String[]() {{
                                    add("ducimus"),
                                    add("quo"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "labore";
                                    keyName = "recusandae";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "doloribus";
                                    keyName = "blanditiis";
                                }};
                                entrypoint = "labore";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("natus", "optio");
                                    put("praesentium", "minima");
                                    put("accusantium", "in");
                                }};
                                flags = new openapisdk.models.shared.ActionFlagsEnum[]() {{
                                    add("DISABLE_IMAGE_PREFETCH"),
                                }};
                                imageUri = "veniam";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ut", "laboriosam");
                                    put("corrupti", "labore");
                                }};
                                mounts = new openapisdk.models.shared.Mount[]() {{
                                    add(new Mount() {{
                                        disk = "similique";
                                        path = "aliquam";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "hic";
                                        path = "aliquid";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "praesentium";
                                pidNamespace = "voluptates";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("non", 2936880191145408633);
                                    put("qui", 328344613669990564);
                                    put("suscipit", 4092613525228031887);
                                }};
                                timeout = "quia";
                            }}),
                            add(new Action() {{
                                commands = new String[]() {{
                                    add("aut"),
                                    add("molestiae"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "quod";
                                    keyName = "voluptatum";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "quos";
                                    keyName = "laboriosam";
                                }};
                                entrypoint = "incidunt";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "fuga");
                                }};
                                flags = new openapisdk.models.shared.ActionFlagsEnum[]() {{
                                    add("DISABLE_STANDARD_ERROR_CAPTURE"),
                                    add("DISABLE_IMAGE_PREFETCH"),
                                    add("DISABLE_IMAGE_PREFETCH"),
                                }};
                                imageUri = "libero";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "explicabo");
                                }};
                                mounts = new openapisdk.models.shared.Mount[]() {{
                                    add(new Mount() {{
                                        disk = "earum";
                                        path = "maiores";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "assumenda";
                                        path = "vitae";
                                        readOnly = true;
                                    }}),
                                }};
                                name = "ab";
                                pidNamespace = "illum";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("quas", 1335585147275884753);
                                    put("adipisci", 2298370415996819700);
                                    put("corrupti", 1962075970272724558);
                                }};
                                timeout = "dolorem";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "omnis";
                            keyName = "qui";
                        }};
                        environment = new java.util.HashMap<String, String>() {{
                            put("possimus", "rerum");
                            put("odio", "aut");
                            put("asperiores", "ea");
                        }};
                        resources = new Resources() {{
                            projectId = "quam";
                            regions = new String[]() {{
                                add("consequatur"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new openapisdk.models.shared.Accelerator[]() {{
                                    add(new Accelerator() {{
                                        count = "natus";
                                        type = "corrupti";
                                    }}),
                                }};
                                bootDiskSizeGb = 8664471317048760158;
                                bootImage = "ad";
                                cpuPlatform = "non";
                                disks = new openapisdk.models.shared.Disk[]() {{
                                    add(new Disk() {{
                                        name = "nihil";
                                        sizeGb = 5988256179519555850;
                                        sourceImage = "dolore";
                                        type = "asperiores";
                                    }}),
                                    add(new Disk() {{
                                        name = "labore";
                                        sizeGb = 734095770428926531;
                                        sourceImage = "ipsum";
                                        type = "quos";
                                    }}),
                                    add(new Disk() {{
                                        name = "molestiae";
                                        sizeGb = 7731919111569318016;
                                        sourceImage = "voluptatum";
                                        type = "et";
                                    }}),
                                }};
                                dockerCacheImages = new String[]() {{
                                    add("deleniti"),
                                }};
                                enableStackdriverMonitoring = true;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("provident", "velit");
                                    put("illo", "ut");
                                    put("sed", "repudiandae");
                                }};
                                machineType = "expedita";
                                network = new Network() {{
                                    name = "fugit";
                                    subnetwork = "quae";
                                    usePrivateAddress = true;
                                }};
                                nvidiaDriverVersion = "et";
                                preemptible = false;
                                reservation = "id";
                                serviceAccount = new ServiceAccount() {{
                                    email = "rerum";
                                    scopes = new String[]() {{
                                        add("nemo"),
                                    }};
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "quasi";
                                        }};
                                        nfsMount = new NfsMount() {{
                                            target = "enim";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 5030877786238265042;
                                            sourceImage = "at";
                                            type = "sit";
                                        }};
                                        volume = "culpa";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "ut";
                                        }};
                                        nfsMount = new NfsMount() {{
                                            target = "facilis";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 6444745865739105985;
                                            sourceImage = "tempore";
                                            type = "dolorem";
                                        }};
                                        volume = "nihil";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "odio";
                                        }};
                                        nfsMount = new NfsMount() {{
                                            target = "voluptatem";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 7033672475303882764;
                                            sourceImage = "ipsam";
                                            type = "modi";
                                        }};
                                        volume = "eum";
                                    }}),
                                }};
                            }};
                            zones = new String[]() {{
                                add("id"),
                            }};
                        }};
                        timeout = "qui";
                    }};
                    pubSubTopic = "culpa";
                }};
            }};

            GenomicsPipelinesRunResponse res = sdk.pipelines.genomicsPipelinesRun(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### pipelines

* `genomicsPipelinesRun` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `genomicsProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `genomicsProjectsOperationsList` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `genomicsProjectsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `genomicsWorkersCheckIn` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
