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
* [computeTargetPoolsTestIamPermissions](#computetargetpoolstestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeTargetPoolsAddHealthCheckRequest req = new ComputeTargetPoolsAddHealthCheckRequest("ullam", "quam", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                targetPoolsAddHealthCheckRequest = new TargetPoolsAddHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "maxime";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "cumque";
                        }}),
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "non";
                key = "tenetur";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "voluptas";
                uploadType = "aut";
                uploadProtocol = "iusto";
                userIp = "a";
            }};            

            ComputeTargetPoolsAddHealthCheckResponse res = sdk.targetPools.computeTargetPoolsAddHealthCheck(req, new ComputeTargetPoolsAddHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsAddHealthCheckSecurityOption1("rem", "molestiae") {{
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

            ComputeTargetPoolsAddInstanceRequest req = new ComputeTargetPoolsAddInstanceRequest("dolorum", "autem", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsAddInstanceRequest = new TargetPoolsAddInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "explicabo";
                        }}),
                        add(new InstanceReference() {{
                            instance = "corporis";
                        }}),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "non";
                key = "vitae";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "quas";
                uploadType = "labore";
                uploadProtocol = "ducimus";
                userIp = "ullam";
            }};            

            ComputeTargetPoolsAddInstanceResponse res = sdk.targetPools.computeTargetPoolsAddInstance(req, new ComputeTargetPoolsAddInstanceSecurity() {{
                option1 = new ComputeTargetPoolsAddInstanceSecurityOption1("cumque", "voluptate") {{
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

            ComputeTargetPoolsAggregatedListRequest req = new ComputeTargetPoolsAggregatedListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "minus";
                filter = "nemo";
                includeAllScopes = false;
                key = "voluptate";
                maxResults = 637724L;
                oauthToken = "molestias";
                orderBy = "magni";
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "eligendi";
                returnPartialSuccess = false;
                uploadType = "ea";
                uploadProtocol = "beatae";
                userIp = "magni";
            }};            

            ComputeTargetPoolsAggregatedListResponse res = sdk.targetPools.computeTargetPoolsAggregatedList(req, new ComputeTargetPoolsAggregatedListSecurity() {{
                option1 = new ComputeTargetPoolsAggregatedListSecurityOption1("neque", "quibusdam") {{
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

            ComputeTargetPoolsDeleteRequest req = new ComputeTargetPoolsDeleteRequest("perferendis", "occaecati", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "veniam";
                key = "facere";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "minima";
                uploadType = "fugit";
                uploadProtocol = "minima";
                userIp = "saepe";
            }};            

            ComputeTargetPoolsDeleteResponse res = sdk.targetPools.computeTargetPoolsDelete(req, new ComputeTargetPoolsDeleteSecurity() {{
                option1 = new ComputeTargetPoolsDeleteSecurityOption1("deserunt", "voluptatem") {{
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

            ComputeTargetPoolsGetRequest req = new ComputeTargetPoolsGetRequest("nulla", "aliquam", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "optio";
                key = "occaecati";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ut";
                uploadProtocol = "facilis";
                userIp = "dolor";
            }};            

            ComputeTargetPoolsGetResponse res = sdk.targetPools.computeTargetPoolsGet(req, new ComputeTargetPoolsGetSecurity() {{
                option1 = new ComputeTargetPoolsGetSecurityOption1("illo", "temporibus") {{
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

            ComputeTargetPoolsGetHealthRequest req = new ComputeTargetPoolsGetHealthRequest("rerum", "ad", "quo") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceReference = new InstanceReference() {{
                    instance = "pariatur";
                }};;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "deserunt";
                key = "accusantium";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "quaerat";
                uploadProtocol = "voluptates";
                userIp = "suscipit";
            }};            

            ComputeTargetPoolsGetHealthResponse res = sdk.targetPools.computeTargetPoolsGetHealth(req, new ComputeTargetPoolsGetHealthSecurity() {{
                option1 = new ComputeTargetPoolsGetHealthSecurityOption1("iure", "eaque") {{
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

            ComputeTargetPoolsInsertRequest req = new ComputeTargetPoolsInsertRequest("quae", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPool = new TargetPool() {{
                    backupPool = "praesentium";
                    creationTimestamp = "suscipit";
                    description = "quidem";
                    failoverRatio = 1855.67;
                    healthChecks = new String[]{{
                        add("ullam"),
                        add("maiores"),
                        add("dolorum"),
                        add("eveniet"),
                    }};
                    id = "delectus";
                    instances = new String[]{{
                        add("cumque"),
                        add("voluptatibus"),
                        add("accusamus"),
                    }};
                    kind = "quaerat";
                    name = "Curtis Bechtelar";
                    region = "numquam";
                    selfLink = "soluta";
                    sessionAffinity = TargetPoolSessionAffinityEnum.CLIENT_IP;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "omnis";
                key = "necessitatibus";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "laborum";
                uploadType = "beatae";
                uploadProtocol = "nobis";
                userIp = "dolor";
            }};            

            ComputeTargetPoolsInsertResponse res = sdk.targetPools.computeTargetPoolsInsert(req, new ComputeTargetPoolsInsertSecurity() {{
                option1 = new ComputeTargetPoolsInsertSecurityOption1("aliquam", "maiores") {{
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

            ComputeTargetPoolsListRequest req = new ComputeTargetPoolsListRequest("consequatur", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "eligendi";
                filter = "eaque";
                key = "consequatur";
                maxResults = 151966L;
                oauthToken = "molestias";
                orderBy = "delectus";
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "doloremque";
                returnPartialSuccess = false;
                uploadType = "asperiores";
                uploadProtocol = "eius";
                userIp = "quam";
            }};            

            ComputeTargetPoolsListResponse res = sdk.targetPools.computeTargetPoolsList(req, new ComputeTargetPoolsListSecurity() {{
                option1 = new ComputeTargetPoolsListSecurityOption1("doloribus", "dolor") {{
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

            ComputeTargetPoolsRemoveHealthCheckRequest req = new ComputeTargetPoolsRemoveHealthCheckRequest("quae", "neque", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsRemoveHealthCheckRequest = new TargetPoolsRemoveHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "cupiditate";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "quos";
                        }}),
                        add(new HealthCheckReference() {{
                            healthCheck = "exercitationem";
                        }}),
                    }};
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "excepturi";
                key = "in";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "pariatur";
                uploadType = "suscipit";
                uploadProtocol = "exercitationem";
                userIp = "velit";
            }};            

            ComputeTargetPoolsRemoveHealthCheckResponse res = sdk.targetPools.computeTargetPoolsRemoveHealthCheck(req, new ComputeTargetPoolsRemoveHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsRemoveHealthCheckSecurityOption1("amet", "illo") {{
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

            ComputeTargetPoolsRemoveInstanceRequest req = new ComputeTargetPoolsRemoveInstanceRequest("quis", "id", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsRemoveInstanceRequest = new TargetPoolsRemoveInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "maiores";
                        }}),
                        add(new InstanceReference() {{
                            instance = "corporis";
                        }}),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "necessitatibus";
                key = "fuga";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "eveniet";
                uploadType = "id";
                uploadProtocol = "inventore";
                userIp = "atque";
            }};            

            ComputeTargetPoolsRemoveInstanceResponse res = sdk.targetPools.computeTargetPoolsRemoveInstance(req, new ComputeTargetPoolsRemoveInstanceSecurity() {{
                option1 = new ComputeTargetPoolsRemoveInstanceSecurityOption1("consectetur", "quam") {{
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

            ComputeTargetPoolsSetBackupRequest req = new ComputeTargetPoolsSetBackupRequest("expedita", "occaecati", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                targetReference = new TargetReference() {{
                    target = "omnis";
                }};;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                failoverRatio = 2673.53;
                fields = "illo";
                key = "in";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "autem";
                uploadType = "ab";
                uploadProtocol = "magni";
                userIp = "excepturi";
            }};            

            ComputeTargetPoolsSetBackupResponse res = sdk.targetPools.computeTargetPoolsSetBackup(req, new ComputeTargetPoolsSetBackupSecurity() {{
                option1 = new ComputeTargetPoolsSetBackupSecurityOption1("odit", "iusto") {{
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

## computeTargetPoolsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetPoolsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsTestIamPermissionsRequest req = new ComputeTargetPoolsTestIamPermissionsRequest("explicabo", "aliquid", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("a"),
                    }};
                }};;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "quae";
                key = "corrupti";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "perferendis";
                uploadProtocol = "illo";
                userIp = "aliquam";
            }};            

            ComputeTargetPoolsTestIamPermissionsResponse res = sdk.targetPools.computeTargetPoolsTestIamPermissions(req, new ComputeTargetPoolsTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetPoolsTestIamPermissionsSecurityOption1("commodi", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
