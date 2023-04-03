<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurityOption2;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunSecurity;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunRequest;
import org.openapis.openapi.models.operations.GenomicsPipelinesRunResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsPipelinesRunRequest req = new GenomicsPipelinesRunRequest() {{
                dollarXgafv = "2";
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
                                    add("PUBLISH_EXPOSED_PORTS"),
                                    add("ALWAYS_RUN"),
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
                                name = "totam";
                                pidNamespace = "porro";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("dicta", 720633);
                                    put("officia", 582020);
                                    put("fugit", 537373);
                                }};
                                timeout = "hic";
                            }}),
                            add(new Action() {{
                                commands = new String[]{{
                                    add("totam"),
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
                                    add("RUN_IN_BACKGROUND"),
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
                                name = "iste";
                                pidNamespace = "iure";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("quidem", 99280);
                                    put("ipsa", 969810);
                                    put("est", 653140);
                                    put("laborum", 170909);
                                }};
                                timeout = "dolorem";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "corporis";
                            keyName = "explicabo";
                        }};
                        environment = new java.util.HashMap<String, String>() {{
                            put("enim", "omnis");
                            put("nemo", "minima");
                            put("excepturi", "accusantium");
                            put("iure", "culpa");
                        }};
                        resources = new Resources() {{
                            projectId = "doloribus";
                            regions = new String[]{{
                                add("architecto"),
                                add("mollitia"),
                                add("dolorem"),
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
                accessToken = "iusto";
                alt = "json";
                callback = "harum";
                fields = "enim";
                key = "accusamus";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quae";
                uploadProtocol = "ipsum";
            }}            

            GenomicsPipelinesRunResponse res = sdk.pipelines.genomicsPipelinesRun(req, new GenomicsPipelinesRunSecurity() {{
                option1 = new GenomicsPipelinesRunSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->