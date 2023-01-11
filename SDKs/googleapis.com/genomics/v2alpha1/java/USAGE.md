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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new RunPipelineRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "debitis");
                        put("voluptatum", "et");
                        put("ut", "dolorem");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new openapisdk.models.shared.Action[]() {{
                            add(new Action() {{
                                commands = new String[]() {{
                                    add("iste"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "vitae";
                                    keyName = "totam";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "dolores";
                                    keyName = "illum";
                                }};
                                entrypoint = "debitis";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("odio", "dolore");
                                    put("id", "aspernatur");
                                }};
                                flags = new openapisdk.models.shared.ActionFlagsEnum[]() {{
                                    add("PUBLISH_EXPOSED_PORTS"),
                                    add("DISABLE_STANDARD_ERROR_CAPTURE"),
                                    add("BLOCK_EXTERNAL_NETWORK"),
                                }};
                                imageUri = "est";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("odit", "non");
                                    put("voluptas", "omnis");
                                    put("aut", "illo");
                                }};
                                mounts = new openapisdk.models.shared.Mount[]() {{
                                    add(new Mount() {{
                                        disk = "officiis";
                                        path = "autem";
                                        readOnly = true;
                                    }}),
                                    add(new Mount() {{
                                        disk = "nobis";
                                        path = "odio";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "recusandae";
                                        path = "at";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "eveniet";
                                pidNamespace = "modi";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("inventore", 7847956203786849690);
                                }};
                                timeout = "exercitationem";
                            }}),
                            add(new Action() {{
                                commands = new String[]() {{
                                    add("reprehenderit"),
                                    add("tempore"),
                                    add("maiores"),
                                }};
                                credentials = new Secret() {{
                                    cipherText = "incidunt";
                                    keyName = "dolor";
                                }};
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "beatae";
                                    keyName = "veritatis";
                                }};
                                entrypoint = "in";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("omnis", "ipsum");
                                    put("ex", "dolores");
                                    put("placeat", "vel");
                                }};
                                flags = new openapisdk.models.shared.ActionFlagsEnum[]() {{
                                    add("ENABLE_FUSE"),
                                    add("ENABLE_FUSE"),
                                    add("ALWAYS_RUN"),
                                }};
                                imageUri = "reprehenderit";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("qui", "unde");
                                }};
                                mounts = new openapisdk.models.shared.Mount[]() {{
                                    add(new Mount() {{
                                        disk = "autem";
                                        path = "qui";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "itaque";
                                        path = "ab";
                                        readOnly = false;
                                    }}),
                                }};
                                name = "ullam";
                                pidNamespace = "et";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("esse", 5902760509050140210);
                                    put("quam", 3604381780091280195);
                                    put("cumque", 3331863358128628835);
                                }};
                                timeout = "sunt";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "voluptates";
                            keyName = "magni";
                        }};
                        environment = new java.util.HashMap<String, String>() {{
                            put("optio", "qui");
                            put("earum", "illo");
                            put("omnis", "ut");
                        }};
                        resources = new Resources() {{
                            projectId = "consequatur";
                            regions = new String[]() {{
                                add("commodi"),
                                add("error"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new openapisdk.models.shared.Accelerator[]() {{
                                    add(new Accelerator() {{
                                        count = "consectetur";
                                        type = "nostrum";
                                    }}),
                                }};
                                bootDiskSizeGb = 950400323440343118;
                                bootImage = "laboriosam";
                                cpuPlatform = "sed";
                                disks = new openapisdk.models.shared.Disk[]() {{
                                    add(new Disk() {{
                                        name = "soluta";
                                        sizeGb = 7540276489530073149;
                                        sourceImage = "quas";
                                        type = "consequuntur";
                                    }}),
                                }};
                                dockerCacheImages = new String[]() {{
                                    add("autem"),
                                }};
                                enableStackdriverMonitoring = true;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("doloremque", "perferendis");
                                    put("atque", "ratione");
                                }};
                                machineType = "quisquam";
                                network = new Network() {{
                                    name = "explicabo";
                                    subnetwork = "ea";
                                    usePrivateAddress = true;
                                }};
                                nvidiaDriverVersion = "eum";
                                preemptible = false;
                                reservation = "et";
                                serviceAccount = new ServiceAccount() {{
                                    email = "rerum";
                                    scopes = new String[]() {{
                                        add("quis"),
                                        add("cumque"),
                                        add("minima"),
                                    }};
                                }};
                                volumes = new openapisdk.models.shared.Volume[]() {{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "est";
                                        }};
                                        nfsMount = new NfsMount() {{
                                            target = "quis";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 7478610059307147871;
                                            sourceImage = "labore";
                                            type = "et";
                                        }};
                                        volume = "impedit";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "ad";
                                        }};
                                        nfsMount = new NfsMount() {{
                                            target = "expedita";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 4540487686588600123;
                                            sourceImage = "qui";
                                            type = "modi";
                                        }};
                                        volume = "nihil";
                                    }}),
                                }};
                            }};
                            zones = new String[]() {{
                                add("deserunt"),
                                add("eaque"),
                                add("sunt"),
                            }};
                        }};
                        timeout = "sit";
                    }};
                    pubSubTopic = "autem";
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