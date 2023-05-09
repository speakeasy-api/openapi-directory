# pools

### Available Operations

* [replicapoolPoolsDelete](#replicapoolpoolsdelete) - Deletes a replica pool.
* [replicapoolPoolsGet](#replicapoolpoolsget) - Gets information about a single replica pool.
* [replicapoolPoolsInsert](#replicapoolpoolsinsert) - Inserts a new replica pool.
* [replicapoolPoolsList](#replicapoolpoolslist) - List all replica pools.
* [replicapoolPoolsResize](#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [replicapoolPoolsUpdatetemplate](#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

## replicapoolPoolsDelete

Deletes a replica pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PoolsDeleteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsDeleteRequest req = new ReplicapoolPoolsDeleteRequest("ipsa", "delectus", "tempora") {{
                poolsDeleteRequest = new PoolsDeleteRequest() {{
                    abandonInstances = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                userIp = "nisi";
            }};            

            ReplicapoolPoolsDeleteResponse res = sdk.pools.replicapoolPoolsDelete(req, new ReplicapoolPoolsDeleteSecurity() {{
                option1 = new ReplicapoolPoolsDeleteSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolPoolsGet

Gets information about a single replica pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption3;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption4;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption5;
import org.openapis.openapi.models.operations.ReplicapoolPoolsGetSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsGetRequest req = new ReplicapoolPoolsGetRequest("ab", "quis", "veritatis") {{
                alt = AltEnum.JSON;
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "sapiente";
            }};            

            ReplicapoolPoolsGetResponse res = sdk.pools.replicapoolPoolsGet(req, new ReplicapoolPoolsGetSecurity() {{
                option1 = new ReplicapoolPoolsGetSecurityOption1("quo", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolPoolsInsert

Inserts a new replica pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiskAttachment;
import org.openapis.openapi.models.shared.EnvVariable;
import org.openapis.openapi.models.shared.ExistingDisk;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.NewDisk;
import org.openapis.openapi.models.shared.NewDiskInitializeParams;
import org.openapis.openapi.models.shared.Pool;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Template;
import org.openapis.openapi.models.shared.VmParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsInsertRequest req = new ReplicapoolPoolsInsertRequest("at", "at") {{
                pool = new Pool() {{
                    autoRestart = false;
                    baseInstanceName = "maiores";
                    currentNumReplicas = 473608;
                    description = "quod";
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheck[]{{
                        add(new HealthCheck() {{
                            checkIntervalSec = 461479;
                            description = "totam";
                            healthyThreshold = 780529;
                            host = "dolorum";
                            name = "Antoinette Nikolaus";
                            path = "deleniti";
                            port = 944669;
                            timeoutSec = 758616;
                            unhealthyThreshold = 521848;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 105907;
                            description = "commodi";
                            healthyThreshold = 473600;
                            host = "modi";
                            name = "Krista Rippin";
                            path = "excepturi";
                            port = 135218;
                            timeoutSec = 18789;
                            unhealthyThreshold = 324141;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 617636;
                            description = "sed";
                            healthyThreshold = 612096;
                            host = "dolor";
                            name = "Lester Welch";
                            path = "in";
                            port = 359508;
                            timeoutSec = 613064;
                            unhealthyThreshold = 437032;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 902349;
                            description = "quidem";
                            healthyThreshold = 99280;
                            host = "ipsa";
                            name = "Carlton O'Hara";
                            path = "dolorem";
                            port = 358152;
                            timeoutSec = 128926;
                            unhealthyThreshold = 750686;
                        }}),
                    }};
                    initialNumReplicas = 315428;
                    labels = new org.openapis.openapi.models.shared.Label[]{{
                        add(new Label() {{
                            key = "nemo";
                            value = "minima";
                        }}),
                        add(new Label() {{
                            key = "excepturi";
                            value = "accusantium";
                        }}),
                        add(new Label() {{
                            key = "iure";
                            value = "culpa";
                        }}),
                    }};
                    name = "Darrin Brakus";
                    numReplicas = 635059;
                    resourceViews = new String[]{{
                        add("repellat"),
                    }};
                    selfLink = "mollitia";
                    targetPool = "occaecati";
                    targetPools = new String[]{{
                        add("commodi"),
                        add("quam"),
                    }};
                    template = new Template() {{
                        action = new Action() {{
                            commands = new String[]{{
                                add("velit"),
                                add("error"),
                            }};
                            envVariables = new org.openapis.openapi.models.shared.EnvVariable[]{{
                                add(new EnvVariable() {{
                                    hidden = false;
                                    name = "Gloria Padberg";
                                    value = "odit";
                                }}),
                            }};
                            timeoutMilliSeconds = 778346;
                        }};;
                        healthChecks = new org.openapis.openapi.models.shared.HealthCheck[]{{
                            add(new HealthCheck() {{
                                checkIntervalSec = 949572;
                                description = "ipsam";
                                healthyThreshold = 662527;
                                host = "possimus";
                                name = "Joyce Mueller";
                                path = "quasi";
                                port = 971945;
                                timeoutSec = 976460;
                                unhealthyThreshold = 878194;
                            }}),
                        }};
                        version = "nihil";
                        vmParams = new VmParams() {{
                            baseInstanceName = "praesentium";
                            canIpForward = false;
                            description = "voluptatibus";
                            disksToAttach = new org.openapis.openapi.models.shared.ExistingDisk[]{{
                                add(new ExistingDisk() {{
                                    attachment = new DiskAttachment() {{
                                        deviceName = "omnis";
                                        index = 451159L;
                                    }};
                                    source = "cum";
                                }}),
                            }};
                            disksToCreate = new org.openapis.openapi.models.shared.NewDisk[]{{
                                add(new NewDisk() {{
                                    attachment = new DiskAttachment() {{
                                        deviceName = "doloremque";
                                        index = 441711L;
                                    }};
                                    autoDelete = false;
                                    boot = false;
                                    initializeParams = new NewDiskInitializeParams() {{
                                        diskSizeGb = "ut";
                                        diskType = "maiores";
                                        sourceImage = "dicta";
                                    }};
                                }}),
                            }};
                            machineType = "corporis";
                            metadata = new Metadata() {{
                                fingerPrint = "dolore";
                                items = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                    add(new MetadataItem() {{
                                        key = "dicta";
                                        value = "harum";
                                    }}),
                                    add(new MetadataItem() {{
                                        key = "enim";
                                        value = "accusamus";
                                    }}),
                                }};
                            }};;
                            networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            name = "Edna Pouros";
                                            natIp = "pariatur";
                                            type = "modi";
                                        }}),
                                        add(new AccessConfig() {{
                                            name = "Dr. Jordan Von";
                                            natIp = "veritatis";
                                            type = "itaque";
                                        }}),
                                        add(new AccessConfig() {{
                                            name = "Erin Altenwerth";
                                            natIp = "explicabo";
                                            type = "deserunt";
                                        }}),
                                        add(new AccessConfig() {{
                                            name = "Marty Green";
                                            natIp = "aliquid";
                                            type = "cupiditate";
                                        }}),
                                    }};
                                    network = "quos";
                                    networkIp = "perferendis";
                                }}),
                                add(new NetworkInterface() {{
                                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                        add(new AccessConfig() {{
                                            name = "Vernon Abshire";
                                            natIp = "excepturi";
                                            type = "tempora";
                                        }}),
                                    }};
                                    network = "facilis";
                                    networkIp = "tempore";
                                }}),
                            }};
                            onHostMaintenance = "labore";
                            serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                                add(new ServiceAccount() {{
                                    email = "Delores.Roob@yahoo.com";
                                    scopes = new String[]{{
                                        add("necessitatibus"),
                                        add("sint"),
                                        add("officia"),
                                    }};
                                }}),
                                add(new ServiceAccount() {{
                                    email = "Sim.Wilderman44@gmail.com";
                                    scopes = new String[]{{
                                        add("maiores"),
                                        add("rerum"),
                                        add("dicta"),
                                        add("magnam"),
                                    }};
                                }}),
                                add(new ServiceAccount() {{
                                    email = "Raquel_Jenkins@hotmail.com";
                                    scopes = new String[]{{
                                        add("non"),
                                        add("occaecati"),
                                        add("enim"),
                                        add("accusamus"),
                                    }};
                                }}),
                                add(new ServiceAccount() {{
                                    email = "Matilda_McKenzie50@hotmail.com";
                                    scopes = new String[]{{
                                        add("sapiente"),
                                        add("amet"),
                                        add("deserunt"),
                                    }};
                                }}),
                            }};
                            tags = new Tag() {{
                                fingerPrint = "nisi";
                                items = new String[]{{
                                    add("natus"),
                                    add("omnis"),
                                }};
                            }};;
                        }};;
                    }};;
                    type = "molestiae";
                }};;
                alt = AltEnum.JSON;
                fields = "perferendis";
                key = "nihil";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "distinctio";
                userIp = "id";
            }};            

            ReplicapoolPoolsInsertResponse res = sdk.pools.replicapoolPoolsInsert(req, new ReplicapoolPoolsInsertSecurity() {{
                option1 = new ReplicapoolPoolsInsertSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolPoolsList

List all replica pools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption3;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption4;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption5;
import org.openapis.openapi.models.operations.ReplicapoolPoolsListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsListRequest req = new ReplicapoolPoolsListRequest("suscipit", "natus") {{
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "eum";
                maxResults = 878453L;
                oauthToken = "aspernatur";
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                userIp = "et";
            }};            

            ReplicapoolPoolsListResponse res = sdk.pools.replicapoolPoolsList(req, new ReplicapoolPoolsListSecurity() {{
                option1 = new ReplicapoolPoolsListSecurityOption1("excepturi", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolPoolsResize

Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsResizeSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsResizeRequest req = new ReplicapoolPoolsResizeRequest("provident", "quos", "sint") {{
                alt = AltEnum.JSON;
                fields = "accusantium";
                key = "mollitia";
                numReplicas = 968962L;
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                userIp = "eum";
            }};            

            ReplicapoolPoolsResizeResponse res = sdk.pools.replicapoolPoolsResize(req, new ReplicapoolPoolsResizeSecurity() {{
                option1 = new ReplicapoolPoolsResizeSecurityOption1("dolor", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replicapoolPoolsUpdatetemplate

Update the template used by the pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsUpdatetemplateSecurityOption3;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DiskAttachment;
import org.openapis.openapi.models.shared.EnvVariable;
import org.openapis.openapi.models.shared.ExistingDisk;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.MetadataItem;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.NewDisk;
import org.openapis.openapi.models.shared.NewDiskInitializeParams;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.Template;
import org.openapis.openapi.models.shared.VmParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsUpdatetemplateRequest req = new ReplicapoolPoolsUpdatetemplateRequest("odit", "nemo", "quasi") {{
                template = new Template() {{
                    action = new Action() {{
                        commands = new String[]{{
                            add("doloribus"),
                            add("debitis"),
                        }};
                        envVariables = new org.openapis.openapi.models.shared.EnvVariable[]{{
                            add(new EnvVariable() {{
                                hidden = false;
                                name = "Alfredo Prosacco Sr.";
                                value = "repudiandae";
                            }}),
                            add(new EnvVariable() {{
                                hidden = false;
                                name = "Lola Koss";
                                value = "sed";
                            }}),
                        }};
                        timeoutMilliSeconds = 904648;
                    }};;
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheck[]{{
                        add(new HealthCheck() {{
                            checkIntervalSec = 37559;
                            description = "consequuntur";
                            healthyThreshold = 508315;
                            host = "natus";
                            name = "Joan Satterfield";
                            path = "maxime";
                            port = 411397;
                            timeoutSec = 569101;
                            unhealthyThreshold = 139972;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 407183;
                            description = "accusantium";
                            healthyThreshold = 69167;
                            host = "maiores";
                            name = "Clyde Kling";
                            path = "eaque";
                            port = 866383;
                            timeoutSec = 365496;
                            unhealthyThreshold = 975522;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 16627;
                            description = "fugiat";
                            healthyThreshold = 230742;
                            host = "aut";
                            name = "Lewis Welch";
                            path = "dolores";
                            port = 339404;
                            timeoutSec = 521037;
                            unhealthyThreshold = 489549;
                        }}),
                        add(new HealthCheck() {{
                            checkIntervalSec = 54338;
                            description = "quis";
                            healthyThreshold = 199996;
                            host = "eos";
                            name = "Jacqueline Schimmel";
                            path = "vero";
                            port = 345352;
                            timeoutSec = 944120;
                            unhealthyThreshold = 928082;
                        }}),
                    }};
                    version = "omnis";
                    vmParams = new VmParams() {{
                        baseInstanceName = "facilis";
                        canIpForward = false;
                        description = "perspiciatis";
                        disksToAttach = new org.openapis.openapi.models.shared.ExistingDisk[]{{
                            add(new ExistingDisk() {{
                                attachment = new DiskAttachment() {{
                                    deviceName = "porro";
                                    index = 164694L;
                                }};
                                source = "blanditiis";
                            }}),
                        }};
                        disksToCreate = new org.openapis.openapi.models.shared.NewDisk[]{{
                            add(new NewDisk() {{
                                attachment = new DiskAttachment() {{
                                    deviceName = "eaque";
                                    index = 577229L;
                                }};
                                autoDelete = false;
                                boot = false;
                                initializeParams = new NewDiskInitializeParams() {{
                                    diskSizeGb = "rerum";
                                    diskType = "adipisci";
                                    sourceImage = "asperiores";
                                }};
                            }}),
                            add(new NewDisk() {{
                                attachment = new DiskAttachment() {{
                                    deviceName = "earum";
                                    index = 267262L;
                                }};
                                autoDelete = false;
                                boot = false;
                                initializeParams = new NewDiskInitializeParams() {{
                                    diskSizeGb = "iste";
                                    diskType = "dolorum";
                                    sourceImage = "deleniti";
                                }};
                            }}),
                            add(new NewDisk() {{
                                attachment = new DiskAttachment() {{
                                    deviceName = "pariatur";
                                    index = 589910L;
                                }};
                                autoDelete = false;
                                boot = false;
                                initializeParams = new NewDiskInitializeParams() {{
                                    diskSizeGb = "nobis";
                                    diskType = "libero";
                                    sourceImage = "delectus";
                                }};
                            }}),
                        }};
                        machineType = "quaerat";
                        metadata = new Metadata() {{
                            fingerPrint = "quos";
                            items = new org.openapis.openapi.models.shared.MetadataItem[]{{
                                add(new MetadataItem() {{
                                    key = "dolorem";
                                    value = "dolorem";
                                }}),
                                add(new MetadataItem() {{
                                    key = "dolor";
                                    value = "qui";
                                }}),
                            }};
                        }};;
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        name = "Felipe Klein";
                                        natIp = "amet";
                                        type = "dolorum";
                                    }}),
                                    add(new AccessConfig() {{
                                        name = "Ms. Christine Beer";
                                        natIp = "quaerat";
                                        type = "accusamus";
                                    }}),
                                    add(new AccessConfig() {{
                                        name = "Jan Hodkiewicz";
                                        natIp = "atque";
                                        type = "sit";
                                    }}),
                                    add(new AccessConfig() {{
                                        name = "Stephen Roberts";
                                        natIp = "voluptate";
                                        type = "dolorum";
                                    }}),
                                }};
                                network = "deleniti";
                                networkIp = "omnis";
                            }}),
                        }};
                        onHostMaintenance = "necessitatibus";
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Janessa_Emmerich@hotmail.com";
                                scopes = new String[]{{
                                    add("eius"),
                                    add("aspernatur"),
                                    add("perferendis"),
                                    add("amet"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Shannon.Hammes64@hotmail.com";
                                scopes = new String[]{{
                                    add("minima"),
                                    add("repellendus"),
                                    add("totam"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Aaliyah27@yahoo.com";
                                scopes = new String[]{{
                                    add("quod"),
                                    add("officiis"),
                                }};
                            }}),
                        }};
                        tags = new Tag() {{
                            fingerPrint = "qui";
                            items = new String[]{{
                                add("a"),
                                add("esse"),
                                add("harum"),
                            }};
                        }};;
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "iusto";
                key = "ipsum";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "tenetur";
                userIp = "amet";
            }};            

            ReplicapoolPoolsUpdatetemplateResponse res = sdk.pools.replicapoolPoolsUpdatetemplate(req, new ReplicapoolPoolsUpdatetemplateSecurity() {{
                option1 = new ReplicapoolPoolsUpdatetemplateSecurityOption1("tempore", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
