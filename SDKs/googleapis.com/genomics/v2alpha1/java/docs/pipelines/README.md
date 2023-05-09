# pipelines

### Available Operations

* [genomicsPipelinesRun](#genomicspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

## genomicsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### Example Usage

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
                        put("facilis", "tempore");
                        put("labore", "delectus");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                commands = new String[]{{
                                    add("eligendi"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "sint";
                                    keyName = "aliquid";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "provident";
                                    keyName = "necessitatibus";
                                }};
                                entrypoint = "sint";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("dolor", "debitis");
                                    put("a", "dolorum");
                                    put("in", "in");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add(ActionFlagsEnum.BLOCK_EXTERNAL_NETWORK),
                                    add(ActionFlagsEnum.DISABLE_IMAGE_PREFETCH),
                                    add(ActionFlagsEnum.IGNORE_EXIT_STATUS),
                                    add(ActionFlagsEnum.RUN_IN_BACKGROUND),
                                }};
                                imageUri = "cumque";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ea", "aliquid");
                                    put("laborum", "accusamus");
                                    put("non", "occaecati");
                                    put("enim", "accusamus");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "quidem";
                                        path = "provident";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "nam";
                                        path = "id";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "blanditiis";
                                        path = "deleniti";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "sapiente";
                                        path = "amet";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "Tyler Kassulke";
                                pidNamespace = "molestiae";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("nihil", 301575);
                                }};
                                timeout = "distinctio";
                            }}),
                            add(new Action() {{
                                commands = new String[]{{
                                    add("labore"),
                                    add("labore"),
                                    add("suscipit"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "natus";
                                    keyName = "nobis";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "eum";
                                    keyName = "vero";
                                }};
                                entrypoint = "aspernatur";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("magnam", "et");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add(ActionFlagsEnum.ALWAYS_RUN),
                                    add(ActionFlagsEnum.PUBLISH_EXPOSED_PORTS),
                                    add(ActionFlagsEnum.ENABLE_FUSE),
                                }};
                                imageUri = "sint";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("mollitia", "reiciendis");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "ad";
                                        path = "eum";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "dolor";
                                        path = "necessitatibus";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "odit";
                                        path = "nemo";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "Vera Wyman";
                                pidNamespace = "maxime";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("facilis", 447926);
                                    put("architecto", 99569);
                                    put("repudiandae", 352312);
                                }};
                                timeout = "expedita";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "nihil";
                            keyName = "repellat";
                        }};;
                        environment = new java.util.HashMap<String, String>() {{
                            put("sed", "saepe");
                            put("pariatur", "accusantium");
                            put("consequuntur", "praesentium");
                            put("natus", "magni");
                        }};
                        resources = new Resources() {{
                            projectId = "sunt";
                            regions = new String[]{{
                                add("illum"),
                                add("pariatur"),
                                add("maxime"),
                                add("ea"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                    add(new Accelerator() {{
                                        count = "odit";
                                        type = "ea";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "accusantium";
                                        type = "ab";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "maiores";
                                        type = "quidem";
                                    }}),
                                }};
                                bootDiskSizeGb = 373291;
                                bootImage = "voluptate";
                                cpuPlatform = "autem";
                                disks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        name = "Meredith Hickle PhD";
                                        sizeGb = 230742;
                                        sourceImage = "aut";
                                        type = "cumque";
                                    }}),
                                    add(new Disk() {{
                                        name = "Mindy Renner";
                                        sizeGb = 339404;
                                        sourceImage = "totam";
                                        type = "dignissimos";
                                    }}),
                                    add(new Disk() {{
                                        name = "Beatrice Dooley Sr.";
                                        sizeGb = 793698;
                                        sourceImage = "quam";
                                        type = "dolor";
                                    }}),
                                }};
                                dockerCacheImages = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                                enableStackdriverMonitoring = false;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("perspiciatis", "voluptatem");
                                    put("porro", "consequuntur");
                                    put("blanditiis", "error");
                                }};
                                machineType = "eaque";
                                network = new Network() {{
                                    name = "Jean Ferry";
                                    subnetwork = "modi";
                                    usePrivateAddress = false;
                                }};;
                                nvidiaDriverVersion = "iste";
                                preemptible = false;
                                reservation = "dolorum";
                                serviceAccount = new ServiceAccount() {{
                                    email = "Sam_McLaughlin96@yahoo.com";
                                    scopes = new String[]{{
                                        add("quos"),
                                        add("aliquid"),
                                    }};
                                }};;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "dolorem";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "dolor";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 186193;
                                            sourceImage = "ipsum";
                                            type = "hic";
                                        }};
                                        volume = "excepturi";
                                    }}),
                                }};
                            }};;
                            zones = new String[]{{
                                add("voluptate"),
                                add("dignissimos"),
                                add("reiciendis"),
                            }};
                        }};;
                        timeout = "amet";
                    }};;
                    pubSubTopic = "dolorum";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            GenomicsPipelinesRunResponse res = sdk.pipelines.genomicsPipelinesRun(req, new GenomicsPipelinesRunSecurity() {{
                option1 = new GenomicsPipelinesRunSecurityOption1("voluptatibus", "voluptas") {{
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
