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

import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption2;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurity;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunQueryParams;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunRequest;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunResponse;
import org.openapis.openapi.models.shared.RunPipelineRequest;
import org.openapis.openapi.models.shared.Pipeline;
import org.openapis.openapi.models.shared.Resources;
import org.openapis.openapi.models.shared.VirtualMachine;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.PersistentDisk;
import org.openapis.openapi.models.shared.NFSMount;
import org.openapis.openapi.models.shared.ExistingDisk;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.ActionFlagsEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.Mount;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new RunPipelineRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                commands = new String[]{{
                                    add("molestiae"),
                                    add("minus"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "placeat";
                                    keyName = "voluptatum";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "iusto";
                                    keyName = "excepturi";
                                }};
                                entrypoint = "nisi";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                    put("deserunt", "perferendis");
                                    put("ipsam", "repellendus");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add("DISABLE_STANDARD_ERROR_CAPTURE"),
                                    add("IGNORE_EXIT_STATUS"),
                                    add("DISABLE_STANDARD_ERROR_CAPTURE"),
                                    add("DISABLE_STANDARD_ERROR_CAPTURE"),
                                }};
                                imageUri = "maiores";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quod", "quod");
                                    put("esse", "totam");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "dolorum";
                                        path = "dicta";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "nam";
                                        path = "officia";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "occaecati";
                                        path = "fugit";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "deleniti";
                                        path = "hic";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "optio";
                                pidNamespace = "totam";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("commodi", 473600);
                                }};
                                timeout = "modi";
                            }}),
                            add(new Action() {{
                                commands = new String[]{{
                                    add("impedit"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "cum";
                                    keyName = "esse";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "ipsum";
                                    keyName = "excepturi";
                                }};
                                entrypoint = "aspernatur";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("ad", "natus");
                                }};
                                flags = new org.openapis.openapi.models.shared.ActionFlagsEnum[]{{
                                    add("PUBLISH_EXPOSED_PORTS"),
                                }};
                                imageUri = "dolor";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "iure";
                                        path = "saepe";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "quidem";
                                        path = "architecto";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "ipsa";
                                        path = "reiciendis";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "est";
                                pidNamespace = "mollitia";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("dolores", 210382);
                                    put("corporis", 128926);
                                    put("nobis", 315428);
                                }};
                                timeout = "omnis";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "nemo";
                            keyName = "minima";
                        }};
                        environment = new java.util.HashMap<String, String>() {{
                            put("accusantium", "iure");
                            put("culpa", "doloribus");
                            put("sapiente", "architecto");
                        }};
                        resources = new Resources() {{
                            projectId = "mollitia";
                            regions = new String[]{{
                                add("culpa"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                    add(new Accelerator() {{
                                        count = "repellat";
                                        type = "mollitia";
                                    }}),
                                }};
                                bootDiskSizeGb = 581850;
                                bootImage = "numquam";
                                cpuPlatform = "commodi";
                                disks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        name = "molestiae";
                                        sizeGb = 244425;
                                        sourceImage = "error";
                                        type = "quia";
                                    }}),
                                    add(new Disk() {{
                                        name = "quis";
                                        sizeGb = 110375;
                                        sourceImage = "laborum";
                                        type = "animi";
                                    }}),
                                }};
                                dockerCacheImages = new String[]{{
                                    add("odit"),
                                    add("quo"),
                                }};
                                enableStackdriverMonitoring = false;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("tenetur", "ipsam");
                                }};
                                machineType = "id";
                                network = new Network() {{
                                    name = "possimus";
                                    subnetwork = "aut";
                                    usePrivateAddress = false;
                                }};
                                nvidiaDriverVersion = "quasi";
                                preemptible = false;
                                reservation = "error";
                                serviceAccount = new ServiceAccount() {{
                                    email = "Margie_Boyer87@hotmail.com";
                                    scopes = new String[]{{
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                }};
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "omnis";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "voluptate";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 739264;
                                            sourceImage = "perferendis";
                                            type = "doloremque";
                                        }};
                                        volume = "reprehenderit";
                                    }}),
                                }};
                            }};
                            zones = new String[]{{
                                add("maiores"),
                                add("dicta"),
                            }};
                        }};
                        timeout = "corporis";
                    }};
                    pubSubTopic = "dolore";
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
