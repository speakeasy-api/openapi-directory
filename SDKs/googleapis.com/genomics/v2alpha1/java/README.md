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
import org.openapis.openapi.models.operations.GenomicsPipelinesRunRequest;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunResponse;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurity;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption2;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ActionFlagsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.ExistingDisk;
import org.openapis.openapi.models.shared.Mount;
import org.openapis.openapi.models.shared.NFSMount;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.PersistentDisk;
import org.openapis.openapi.models.shared.Pipeline;
import org.openapis.openapi.models.shared.Resources;
import org.openapis.openapi.models.shared.RunPipelineRequest;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.VirtualMachine;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsPipelinesRunRequest req = new GenomicsPipelinesRunRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                runPipelineRequest = new RunPipelineRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                commands = new String[]{{
                                    add("deserunt"),
                                    add("suscipit"),
                                    add("iure"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "magnam";
                                    keyName = "debitis";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "ipsa";
                                    keyName = "delectus";
                                }};
                                entrypoint = "tempora";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add(ActionFlagsEnum.PUBLISH_EXPOSED_PORTS),
                                    add(ActionFlagsEnum.ALWAYS_RUN),
                                }};
                                imageUri = "recusandae";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ab", "quis");
                                    put("veritatis", "deserunt");
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "odit";
                                        path = "at";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "at";
                                        path = "maiores";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "molestiae";
                                        path = "quod";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "quod";
                                        path = "esse";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "Miss Lowell Parisian";
                                pidNamespace = "occaecati";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("deleniti", 944669);
                                }};
                                timeout = "optio";
                            }}),
                            add(new Action() {{
                                commands = new String[]{{
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "modi";
                                    keyName = "qui";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "impedit";
                                    keyName = "cum";
                                }};
                                entrypoint = "esse";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "aspernatur");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add(ActionFlagsEnum.RUN_IN_BACKGROUND),
                                }};
                                imageUri = "natus";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("iste", "dolor");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "laboriosam";
                                        path = "hic";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "saepe";
                                        path = "fuga";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "in";
                                        path = "corporis";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "Brad Turcotte Jr.";
                                pidNamespace = "reiciendis";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("mollitia", 670638);
                                    put("dolores", 210382);
                                    put("corporis", 128926);
                                }};
                                timeout = "nobis";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "enim";
                            keyName = "omnis";
                        }};;
                        environment = new java.util.HashMap<String, String>() {{
                            put("minima", "excepturi");
                            put("accusantium", "iure");
                        }};
                        resources = new Resources() {{
                            projectId = "culpa";
                            regions = new String[]{{
                                add("sapiente"),
                                add("architecto"),
                                add("mollitia"),
                                add("dolorem"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                    add(new Accelerator() {{
                                        count = "consequuntur";
                                        type = "repellat";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "mollitia";
                                        type = "occaecati";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "numquam";
                                        type = "commodi";
                                    }}),
                                }};
                                bootDiskSizeGb = 466311;
                                bootImage = "molestiae";
                                cpuPlatform = "velit";
                                disks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        name = "Beatrice Brown";
                                        sizeGb = 317202;
                                        sourceImage = "odit";
                                        type = "quo";
                                    }}),
                                    add(new Disk() {{
                                        name = "Mandy Hills";
                                        sizeGb = 13571;
                                        sourceImage = "quasi";
                                        type = "error";
                                    }}),
                                    add(new Disk() {{
                                        name = "Neal Boyer";
                                        sizeGb = 878194;
                                        sourceImage = "nihil";
                                        type = "praesentium";
                                    }}),
                                }};
                                dockerCacheImages = new String[]{{
                                    add("ipsa"),
                                    add("omnis"),
                                    add("voluptate"),
                                    add("cum"),
                                }};
                                enableStackdriverMonitoring = false;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("doloremque", "reprehenderit");
                                }};
                                machineType = "ut";
                                network = new Network() {{
                                    name = "Willie Hessel";
                                    subnetwork = "dicta";
                                    usePrivateAddress = false;
                                }};;
                                nvidiaDriverVersion = "harum";
                                preemptible = false;
                                reservation = "enim";
                                serviceAccount = new ServiceAccount() {{
                                    email = "Harry21@hotmail.com";
                                    scopes = new String[]{{
                                        add("molestias"),
                                        add("excepturi"),
                                        add("pariatur"),
                                    }};
                                }};;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "praesentium";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "rem";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 916723;
                                            sourceImage = "quasi";
                                            type = "repudiandae";
                                        }};
                                        volume = "sint";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "veritatis";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "itaque";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 277718;
                                            sourceImage = "enim";
                                            type = "consequatur";
                                        }};
                                        volume = "est";
                                    }}),
                                }};
                            }};;
                            zones = new String[]{{
                                add("explicabo"),
                                add("deserunt"),
                                add("distinctio"),
                                add("quibusdam"),
                            }};
                        }};;
                        timeout = "labore";
                    }};;
                    pubSubTopic = "modi";
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            GenomicsPipelinesRunResponse res = sdk.pipelines.genomicsPipelinesRun(req, new GenomicsPipelinesRunSecurity() {{
                option1 = new GenomicsPipelinesRunSecurityOption1("fugit", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
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


### [pipelines](docs/pipelines/README.md)

* [genomicsPipelinesRun](docs/pipelines/README.md#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### [projects](docs/projects/README.md)

* [genomicsProjectsOperationsCancel](docs/projects/README.md#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [genomicsProjectsOperationsList](docs/projects/README.md#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [genomicsProjectsWorkersCheckIn](docs/projects/README.md#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### [workers](docs/workers/README.md)

* [genomicsWorkersCheckIn](docs/workers/README.md#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
