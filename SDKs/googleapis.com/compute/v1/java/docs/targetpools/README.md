# targetPools

### Available Operations

* [computeTargetPoolsAddHealthCheck](#computetargetpoolsaddhealthcheck) - Adds health check URLs to a target pool.
* [computeTargetPoolsAddInstance](#computetargetpoolsaddinstance) - Adds an instance to a target pool.
* [computeTargetPoolsAggregatedList](#computetargetpoolsaggregatedlist) - Retrieves an aggregated list of target pools.
* [computeTargetPoolsDelete](#computetargetpoolsdelete) - Deletes the specified target pool.
* [computeTargetPoolsGet](#computetargetpoolsget) - Returns the specified target pool.
* [computeTargetPoolsGetHealth](#computetargetpoolsgethealth) - Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
* [computeTargetPoolsInsert](#computetargetpoolsinsert) - Creates a target pool in the specified project and region using the data included in the request.
* [computeTargetPoolsList](#computetargetpoolslist) - Retrieves a list of target pools available to the specified project and region.
* [computeTargetPoolsRemoveHealthCheck](#computetargetpoolsremovehealthcheck) - Removes health check URL from a target pool.
* [computeTargetPoolsRemoveInstance](#computetargetpoolsremoveinstance) - Removes instance URL from a target pool.
* [computeTargetPoolsSetBackup](#computetargetpoolssetbackup) - Changes a backup target pool's configurations.

## computeTargetPoolsAddHealthCheck

Adds health check URLs to a target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddHealthCheckRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddHealthCheckResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddHealthCheckSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddHealthCheckSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddHealthCheckSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HealthCheckReference;
import org.openapis.openapi.models.shared.TargetPoolsAddHealthCheckRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsAddHealthCheckRequest req = new ComputeTargetPoolsAddHealthCheckRequest("natus", "ipsa", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsAddHealthCheckRequest = new TargetPoolsAddHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "sunt";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "commodi";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "iure";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "error";
                        }}),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "ea";
                key = "quasi";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "earum";
                uploadType = "excepturi";
                uploadProtocol = "nulla";
                userIp = "et";
            }};            

            ComputeTargetPoolsAddHealthCheckResponse res = sdk.targetPools.computeTargetPoolsAddHealthCheck(req, new ComputeTargetPoolsAddHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsAddHealthCheckSecurityOption1("sit", "voluptatem") {{
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

## computeTargetPoolsAddInstance

Adds an instance to a target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddInstanceRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddInstanceResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddInstanceSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddInstanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAddInstanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.TargetPoolsAddInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsAddInstanceRequest req = new ComputeTargetPoolsAddInstanceRequest("eligendi", "quam", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsAddInstanceRequest = new TargetPoolsAddInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "quam";
                        }}),
                        add(new InstanceReference() {{
                            instance = "sit";
                        }}),
                        add(new InstanceReference() {{
                            instance = "labore";
                        }}),
                        add(new InstanceReference() {{
                            instance = "corporis";
                        }}),
                    }};
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "illo";
                key = "voluptas";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "inventore";
                uploadType = "quis";
                uploadProtocol = "accusamus";
                userIp = "exercitationem";
            }};            

            ComputeTargetPoolsAddInstanceResponse res = sdk.targetPools.computeTargetPoolsAddInstance(req, new ComputeTargetPoolsAddInstanceSecurity() {{
                option1 = new ComputeTargetPoolsAddInstanceSecurityOption1("deleniti", "nostrum") {{
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

## computeTargetPoolsAggregatedList

Retrieves an aggregated list of target pools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetPoolsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsAggregatedListRequest req = new ComputeTargetPoolsAggregatedListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "sequi";
                filter = "harum";
                includeAllScopes = false;
                key = "cupiditate";
                maxResults = 939828L;
                oauthToken = "provident";
                orderBy = "excepturi";
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "sit";
                returnPartialSuccess = false;
                uploadType = "esse";
                uploadProtocol = "facilis";
                userIp = "laborum";
            }};            

            ComputeTargetPoolsAggregatedListResponse res = sdk.targetPools.computeTargetPoolsAggregatedList(req, new ComputeTargetPoolsAggregatedListSecurity() {{
                option1 = new ComputeTargetPoolsAggregatedListSecurityOption1("aut", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetPoolAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetPoolsDelete

Deletes the specified target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsDeleteRequest req = new ComputeTargetPoolsDeleteRequest("commodi", "laboriosam", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "sed";
                key = "odio";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "optio";
                uploadType = "neque";
                uploadProtocol = "nesciunt";
                userIp = "incidunt";
            }};            

            ComputeTargetPoolsDeleteResponse res = sdk.targetPools.computeTargetPoolsDelete(req, new ComputeTargetPoolsDeleteSecurity() {{
                option1 = new ComputeTargetPoolsDeleteSecurityOption1("harum", "facere") {{
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

## computeTargetPoolsGet

Returns the specified target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsGetRequest req = new ComputeTargetPoolsGetRequest("rerum", "repellendus", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "nostrum";
                key = "velit";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "similique";
                uploadProtocol = "aperiam";
                userIp = "nam";
            }};            

            ComputeTargetPoolsGetResponse res = sdk.targetPools.computeTargetPoolsGet(req, new ComputeTargetPoolsGetSecurity() {{
                option1 = new ComputeTargetPoolsGetSecurityOption1("unde", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetPool != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetPoolsGetHealth

Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetPoolsGetHealthSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsGetHealthRequest req = new ComputeTargetPoolsGetHealthRequest("repellendus", "rerum", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceReference = new InstanceReference() {{
                    instance = "sit";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "reiciendis";
                key = "voluptatem";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "dolor";
                uploadProtocol = "qui";
                userIp = "asperiores";
            }};            

            ComputeTargetPoolsGetHealthResponse res = sdk.targetPools.computeTargetPoolsGetHealth(req, new ComputeTargetPoolsGetHealthSecurity() {{
                option1 = new ComputeTargetPoolsGetHealthSecurityOption1("dignissimos", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetPoolInstanceHealth != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetPoolsInsert

Creates a target pool in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetPool;
import org.openapis.openapi.models.shared.TargetPoolSessionAffinityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsInsertRequest req = new ComputeTargetPoolsInsertRequest("ex", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPool = new TargetPool() {{
                    backupPool = "nulla";
                    creationTimestamp = "recusandae";
                    description = "id";
                    failoverRatio = 509.4;
                    healthChecks = new String[]{{
                        add("pariatur"),
                    }};
                    id = "impedit";
                    instances = new String[]{{
                        add("provident"),
                    }};
                    kind = "dolorum";
                    name = "Brandy Thompson";
                    region = "in";
                    selfLink = "laboriosam";
                    sessionAffinity = TargetPoolSessionAffinityEnum.HTTP_COOKIE;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "ipsam";
                key = "error";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "minus";
                requestId = "libero";
                uploadType = "reiciendis";
                uploadProtocol = "expedita";
                userIp = "a";
            }};            

            ComputeTargetPoolsInsertResponse res = sdk.targetPools.computeTargetPoolsInsert(req, new ComputeTargetPoolsInsertSecurity() {{
                option1 = new ComputeTargetPoolsInsertSecurityOption1("laudantium", "dignissimos") {{
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

## computeTargetPoolsList

Retrieves a list of target pools available to the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetPoolsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsListRequest req = new ComputeTargetPoolsListRequest("quidem", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "doloribus";
                filter = "assumenda";
                key = "aliquid";
                maxResults = 459455L;
                oauthToken = "voluptates";
                orderBy = "blanditiis";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "sunt";
                returnPartialSuccess = false;
                uploadType = "distinctio";
                uploadProtocol = "repudiandae";
                userIp = "alias";
            }};            

            ComputeTargetPoolsListResponse res = sdk.targetPools.computeTargetPoolsList(req, new ComputeTargetPoolsListSecurity() {{
                option1 = new ComputeTargetPoolsListSecurityOption1("nesciunt", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetPoolList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetPoolsRemoveHealthCheck

Removes health check URL from a target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveHealthCheckRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveHealthCheckResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveHealthCheckSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveHealthCheckSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveHealthCheckSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HealthCheckReference;
import org.openapis.openapi.models.shared.TargetPoolsRemoveHealthCheckRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsRemoveHealthCheckRequest req = new ComputeTargetPoolsRemoveHealthCheckRequest("voluptas", "quas", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsRemoveHealthCheckRequest = new TargetPoolsRemoveHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "corrupti";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "sed";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "aperiam";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "possimus";
                        }}),
                    }};
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "dolore";
                key = "quod";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "eos";
                uploadType = "animi";
                uploadProtocol = "voluptatibus";
                userIp = "velit";
            }};            

            ComputeTargetPoolsRemoveHealthCheckResponse res = sdk.targetPools.computeTargetPoolsRemoveHealthCheck(req, new ComputeTargetPoolsRemoveHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsRemoveHealthCheckSecurityOption1("alias", "amet") {{
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

## computeTargetPoolsRemoveInstance

Removes instance URL from a target pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveInstanceRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveInstanceResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveInstanceSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveInstanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsRemoveInstanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.TargetPoolsRemoveInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsRemoveInstanceRequest req = new ComputeTargetPoolsRemoveInstanceRequest("labore", "deleniti", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsRemoveInstanceRequest = new TargetPoolsRemoveInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "totam";
                        }}),
                        add(new InstanceReference() {{
                            instance = "odit";
                        }}),
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "voluptas";
                key = "eligendi";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "voluptas";
                uploadType = "accusantium";
                uploadProtocol = "temporibus";
                userIp = "voluptates";
            }};            

            ComputeTargetPoolsRemoveInstanceResponse res = sdk.targetPools.computeTargetPoolsRemoveInstance(req, new ComputeTargetPoolsRemoveInstanceSecurity() {{
                option1 = new ComputeTargetPoolsRemoveInstanceSecurityOption1("animi", "eius") {{
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

## computeTargetPoolsSetBackup

Changes a backup target pool's configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetBackupRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetBackupResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetBackupSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetBackupSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetBackupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsSetBackupRequest req = new ComputeTargetPoolsSetBackupRequest("aspernatur", "sapiente", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                targetReference = new TargetReference() {{
                    target = "nobis";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                failoverRatio = 2343.02;
                fields = "perferendis";
                key = "eum";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "minus";
                uploadType = "tempora";
                uploadProtocol = "excepturi";
                userIp = "debitis";
            }};            

            ComputeTargetPoolsSetBackupResponse res = sdk.targetPools.computeTargetPoolsSetBackup(req, new ComputeTargetPoolsSetBackupSecurity() {{
                option1 = new ComputeTargetPoolsSetBackupSecurityOption1("atque", "voluptas") {{
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
