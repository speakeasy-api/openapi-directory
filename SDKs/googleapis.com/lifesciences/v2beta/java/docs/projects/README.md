# projects

### Available Operations

* [lifesciencesProjectsLocationsList](#lifesciencesprojectslocationslist) - Lists information about the supported locations for this service.
* [lifesciencesProjectsLocationsOperationsCancel](#lifesciencesprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`
* [lifesciencesProjectsLocationsOperationsGet](#lifesciencesprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`
* [lifesciencesProjectsLocationsOperationsList](#lifesciencesprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`
* [lifesciencesProjectsLocationsPipelinesRun](#lifesciencesprojectslocationspipelinesrun) - Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

## lifesciencesProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LifesciencesProjectsLocationsListRequest req = new LifesciencesProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            LifesciencesProjectsLocationsListResponse res = sdk.projects.lifesciencesProjectsLocationsList(req, new LifesciencesProjectsLocationsListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lifesciencesProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LifesciencesProjectsLocationsOperationsCancelRequest req = new LifesciencesProjectsLocationsOperationsCancelRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                }};
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            LifesciencesProjectsLocationsOperationsCancelResponse res = sdk.projects.lifesciencesProjectsLocationsOperationsCancel(req, new LifesciencesProjectsLocationsOperationsCancelSecurity("fugit", "deleniti") {{
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

## lifesciencesProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LifesciencesProjectsLocationsOperationsGetRequest req = new LifesciencesProjectsLocationsOperationsGetRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            LifesciencesProjectsLocationsOperationsGetResponse res = sdk.projects.lifesciencesProjectsLocationsOperationsGet(req, new LifesciencesProjectsLocationsOperationsGetSecurity("ipsum", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## lifesciencesProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LifesciencesProjectsLocationsOperationsListRequest req = new LifesciencesProjectsLocationsOperationsListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                filter = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                pageSize = 943749L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            LifesciencesProjectsLocationsOperationsListResponse res = sdk.projects.lifesciencesProjectsLocationsOperationsList(req, new LifesciencesProjectsLocationsOperationsListSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lifesciencesProjectsLocationsPipelinesRun

Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsPipelinesRunRequest;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsPipelinesRunResponse;
import org.openapis.openapi.models.operations.LifesciencesProjectsLocationsPipelinesRunSecurity;
import org.openapis.openapi.models.shared.Accelerator;
import org.openapis.openapi.models.shared.Action;
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

            LifesciencesProjectsLocationsPipelinesRunRequest req = new LifesciencesProjectsLocationsPipelinesRunRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                runPipelineRequest = new RunPipelineRequest() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "reiciendis");
                    }};
                    pipeline = new Pipeline() {{
                        actions = new org.openapis.openapi.models.shared.Action[]{{
                            add(new Action() {{
                                alwaysRun = false;
                                blockExternalNetwork = false;
                                commands = new String[]{{
                                    add("laborum"),
                                    add("dolores"),
                                    add("dolorem"),
                                }};
                                containerName = "corporis";
                                credentials = new Secret() {{
                                    cipherText = "explicabo";
                                    keyName = "nobis";
                                }};
                                disableImagePrefetch = false;
                                disableStandardErrorCapture = false;
                                enableFuse = false;
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "enim";
                                    keyName = "omnis";
                                }};
                                entrypoint = "nemo";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                                ignoreExitStatus = false;
                                imageUri = "doloribus";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                    put("consequuntur", "repellat");
                                    put("mollitia", "occaecati");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "commodi";
                                        path = "quam";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "molestiae";
                                        path = "velit";
                                        readOnly = false;
                                    }}),
                                }};
                                pidNamespace = "error";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("quis", 110375);
                                }};
                                publishExposedPorts = false;
                                runInBackground = false;
                                timeout = "laborum";
                            }}),
                            add(new Action() {{
                                alwaysRun = false;
                                blockExternalNetwork = false;
                                commands = new String[]{{
                                    add("enim"),
                                    add("odit"),
                                    add("quo"),
                                }};
                                containerName = "sequi";
                                credentials = new Secret() {{
                                    cipherText = "tenetur";
                                    keyName = "ipsam";
                                }};
                                disableImagePrefetch = false;
                                disableStandardErrorCapture = false;
                                enableFuse = false;
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "id";
                                    keyName = "possimus";
                                }};
                                entrypoint = "aut";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("error", "temporibus");
                                }};
                                ignoreExitStatus = false;
                                imageUri = "laborum";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "voluptatibus");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "nihil";
                                        path = "praesentium";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "voluptatibus";
                                        path = "ipsa";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "omnis";
                                        path = "voluptate";
                                        readOnly = false;
                                    }}),
                                    add(new Mount() {{
                                        disk = "cum";
                                        path = "perferendis";
                                        readOnly = false;
                                    }}),
                                }};
                                pidNamespace = "doloremque";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("ut", 979587);
                                    put("dicta", 359444);
                                }};
                                publishExposedPorts = false;
                                runInBackground = false;
                                timeout = "dolore";
                            }}),
                            add(new Action() {{
                                alwaysRun = false;
                                blockExternalNetwork = false;
                                commands = new String[]{{
                                    add("dicta"),
                                    add("harum"),
                                }};
                                containerName = "enim";
                                credentials = new Secret() {{
                                    cipherText = "accusamus";
                                    keyName = "commodi";
                                }};
                                disableImagePrefetch = false;
                                disableStandardErrorCapture = false;
                                enableFuse = false;
                                encryptedEnvironment = new Secret() {{
                                    cipherText = "repudiandae";
                                    keyName = "quae";
                                }};
                                entrypoint = "ipsum";
                                environment = new java.util.HashMap<String, String>() {{
                                    put("molestias", "excepturi");
                                    put("pariatur", "modi");
                                    put("praesentium", "rem");
                                }};
                                ignoreExitStatus = false;
                                imageUri = "voluptates";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "sint");
                                }};
                                mounts = new org.openapis.openapi.models.shared.Mount[]{{
                                    add(new Mount() {{
                                        disk = "itaque";
                                        path = "incidunt";
                                        readOnly = false;
                                    }}),
                                }};
                                pidNamespace = "enim";
                                portMappings = new java.util.HashMap<String, Integer>() {{
                                    put("est", 842342);
                                }};
                                publishExposedPorts = false;
                                runInBackground = false;
                                timeout = "explicabo";
                            }}),
                        }};
                        encryptedEnvironment = new Secret() {{
                            cipherText = "deserunt";
                            keyName = "distinctio";
                        }};;
                        environment = new java.util.HashMap<String, String>() {{
                            put("labore", "modi");
                            put("qui", "aliquid");
                            put("cupiditate", "quos");
                            put("perferendis", "magni");
                        }};
                        resources = new Resources() {{
                            regions = new String[]{{
                                add("ipsam"),
                                add("alias"),
                                add("fugit"),
                                add("dolorum"),
                            }};
                            virtualMachine = new VirtualMachine() {{
                                accelerators = new org.openapis.openapi.models.shared.Accelerator[]{{
                                    add(new Accelerator() {{
                                        count = "tempora";
                                        type = "facilis";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "tempore";
                                        type = "labore";
                                    }}),
                                    add(new Accelerator() {{
                                        count = "delectus";
                                        type = "eum";
                                    }}),
                                }};
                                bootDiskSizeGb = 248753;
                                bootImage = "eligendi";
                                cpuPlatform = "sint";
                                disks = new org.openapis.openapi.models.shared.Disk[]{{
                                    add(new Disk() {{
                                        name = "Terence Marquardt";
                                        sizeGb = 891555;
                                        sourceImage = "a";
                                        type = "dolorum";
                                    }}),
                                    add(new Disk() {{
                                        name = "Arlene Stamm";
                                        sizeGb = 116202;
                                        sourceImage = "magnam";
                                        type = "cumque";
                                    }}),
                                }};
                                dockerCacheImages = new String[]{{
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                    add("accusamus"),
                                }};
                                enableStackdriverMonitoring = false;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "enim");
                                }};
                                machineType = "accusamus";
                                network = new Network() {{
                                    network = "delectus";
                                    subnetwork = "quidem";
                                    usePrivateAddress = false;
                                }};;
                                nvidiaDriverVersion = "provident";
                                preemptible = false;
                                reservation = "nam";
                                serviceAccount = new ServiceAccount() {{
                                    email = "Jewell.Lesch64@yahoo.com";
                                    scopes = new String[]{{
                                        add("vel"),
                                        add("natus"),
                                    }};
                                }};;
                                volumes = new org.openapis.openapi.models.shared.Volume[]{{
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "molestiae";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "perferendis";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 470132;
                                            sourceImage = "magnam";
                                            type = "distinctio";
                                        }};
                                        volume = "id";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "labore";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "labore";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 383462;
                                            sourceImage = "natus";
                                            type = "nobis";
                                        }};
                                        volume = "eum";
                                    }}),
                                    add(new Volume() {{
                                        existingDisk = new ExistingDisk() {{
                                            disk = "vero";
                                        }};
                                        nfsMount = new NFSMount() {{
                                            target = "aspernatur";
                                        }};
                                        persistentDisk = new PersistentDisk() {{
                                            sizeGb = 102863;
                                            sourceImage = "magnam";
                                            type = "et";
                                        }};
                                        volume = "excepturi";
                                    }}),
                                }};
                            }};;
                            zones = new String[]{{
                                add("provident"),
                                add("quos"),
                            }};
                        }};;
                        timeout = "sint";
                    }};;
                    pubSubTopic = "accusantium";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "ad";
                key = "eum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
            }};            

            LifesciencesProjectsLocationsPipelinesRunResponse res = sdk.projects.lifesciencesProjectsLocationsPipelinesRun(req, new LifesciencesProjectsLocationsPipelinesRunSecurity("quasi", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
