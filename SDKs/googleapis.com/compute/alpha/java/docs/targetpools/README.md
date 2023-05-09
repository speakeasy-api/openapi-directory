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
* [computeTargetPoolsSetSecurityPolicy](#computetargetpoolssetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified target pool. For more information, see Google Cloud Armor Overview
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

            ComputeTargetPoolsAddHealthCheckRequest req = new ComputeTargetPoolsAddHealthCheckRequest("sapiente", "soluta", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                targetPoolsAddHealthCheckRequest = new TargetPoolsAddHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "beatae";
                        }}),
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "non";
                key = "ipsum";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "necessitatibus";
                uploadType = "suscipit";
                uploadProtocol = "pariatur";
                userIp = "quidem";
            }};            

            ComputeTargetPoolsAddHealthCheckResponse res = sdk.targetPools.computeTargetPoolsAddHealthCheck(req, new ComputeTargetPoolsAddHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsAddHealthCheckSecurityOption1("culpa", "in") {{
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

            ComputeTargetPoolsAddInstanceRequest req = new ComputeTargetPoolsAddInstanceRequest("laboriosam", "ullam", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPoolsAddInstanceRequest = new TargetPoolsAddInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "inventore";
                        }}),
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "fuga";
                key = "sit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "repudiandae";
                requestId = "similique";
                uploadType = "error";
                uploadProtocol = "voluptates";
                userIp = "dicta";
            }};            

            ComputeTargetPoolsAddInstanceResponse res = sdk.targetPools.computeTargetPoolsAddInstance(req, new ComputeTargetPoolsAddInstanceSecurity() {{
                option1 = new ComputeTargetPoolsAddInstanceSecurityOption1("magni", "ratione") {{
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

            ComputeTargetPoolsAggregatedListRequest req = new ComputeTargetPoolsAggregatedListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "dolor";
                filter = "itaque";
                includeAllScopes = false;
                key = "maxime";
                maxResults = 509551L;
                oauthToken = "minima";
                orderBy = "quam";
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "exercitationem";
                uploadProtocol = "deserunt";
                userIp = "nesciunt";
            }};            

            ComputeTargetPoolsAggregatedListResponse res = sdk.targetPools.computeTargetPoolsAggregatedList(req, new ComputeTargetPoolsAggregatedListSecurity() {{
                option1 = new ComputeTargetPoolsAggregatedListSecurityOption1("vero", "quo") {{
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

            ComputeTargetPoolsDeleteRequest req = new ComputeTargetPoolsDeleteRequest("itaque", "mollitia", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "nemo";
                key = "laboriosam";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "consequatur";
                uploadType = "ipsum";
                uploadProtocol = "sed";
                userIp = "iure";
            }};            

            ComputeTargetPoolsDeleteResponse res = sdk.targetPools.computeTargetPoolsDelete(req, new ComputeTargetPoolsDeleteSecurity() {{
                option1 = new ComputeTargetPoolsDeleteSecurityOption1("iste", "id") {{
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

            ComputeTargetPoolsGetRequest req = new ComputeTargetPoolsGetRequest("quisquam", "officiis", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "quasi";
                key = "quia";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "libero";
                uploadProtocol = "nisi";
                userIp = "sapiente";
            }};            

            ComputeTargetPoolsGetResponse res = sdk.targetPools.computeTargetPoolsGet(req, new ComputeTargetPoolsGetSecurity() {{
                option1 = new ComputeTargetPoolsGetSecurityOption1("alias", "aspernatur") {{
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

            ComputeTargetPoolsGetHealthRequest req = new ComputeTargetPoolsGetHealthRequest("ut", "molestias", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceReference = new InstanceReference() {{
                    instance = "dolore";
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "est";
                key = "molestias";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "illum";
                uploadProtocol = "minima";
                userIp = "sequi";
            }};            

            ComputeTargetPoolsGetHealthResponse res = sdk.targetPools.computeTargetPoolsGetHealth(req, new ComputeTargetPoolsGetHealthSecurity() {{
                option1 = new ComputeTargetPoolsGetHealthSecurityOption1("soluta", "beatae") {{
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

            ComputeTargetPoolsInsertRequest req = new ComputeTargetPoolsInsertRequest("velit", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetPool = new TargetPool() {{
                    backupPool = "corrupti";
                    creationTimestamp = "explicabo";
                    description = "maxime";
                    failoverRatio = 9318.42;
                    healthChecks = new String[]{{
                        add("quia"),
                        add("consequuntur"),
                        add("fuga"),
                    }};
                    id = "nostrum";
                    instances = new String[]{{
                        add("laboriosam"),
                    }};
                    kind = "est";
                    name = "Hope McClure";
                    region = "ipsa";
                    securityPolicy = "culpa";
                    selfLink = "in";
                    selfLinkWithId = "porro";
                    sessionAffinity = TargetPoolSessionAffinityEnum.GENERATED_COOKIE;
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "autem";
                key = "et";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "beatae";
                uploadType = "praesentium";
                uploadProtocol = "exercitationem";
                userIp = "distinctio";
            }};            

            ComputeTargetPoolsInsertResponse res = sdk.targetPools.computeTargetPoolsInsert(req, new ComputeTargetPoolsInsertSecurity() {{
                option1 = new ComputeTargetPoolsInsertSecurityOption1("id", "laudantium") {{
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

            ComputeTargetPoolsListRequest req = new ComputeTargetPoolsListRequest("aspernatur", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "quasi";
                filter = "nobis";
                key = "distinctio";
                maxResults = 569805L;
                oauthToken = "autem";
                orderBy = "mollitia";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "nesciunt";
                uploadProtocol = "necessitatibus";
                userIp = "impedit";
            }};            

            ComputeTargetPoolsListResponse res = sdk.targetPools.computeTargetPoolsList(req, new ComputeTargetPoolsListSecurity() {{
                option1 = new ComputeTargetPoolsListSecurityOption1("pariatur", "vero") {{
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

            ComputeTargetPoolsRemoveHealthCheckRequest req = new ComputeTargetPoolsRemoveHealthCheckRequest("voluptate", "nihil", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                targetPoolsRemoveHealthCheckRequest = new TargetPoolsRemoveHealthCheckRequest() {{
                    healthChecks = new org.openapis.openapi.models.shared.HealthCheckReference[]{{
                        add(new HealthCheckReference() {{
                            healthCheck = "natus";
                        }}),
                    }};
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "esse";
                key = "illo";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "ratione";
                uploadType = "incidunt";
                uploadProtocol = "soluta";
                userIp = "aperiam";
            }};            

            ComputeTargetPoolsRemoveHealthCheckResponse res = sdk.targetPools.computeTargetPoolsRemoveHealthCheck(req, new ComputeTargetPoolsRemoveHealthCheckSecurity() {{
                option1 = new ComputeTargetPoolsRemoveHealthCheckSecurityOption1("sapiente", "inventore") {{
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

            ComputeTargetPoolsRemoveInstanceRequest req = new ComputeTargetPoolsRemoveInstanceRequest("amet", "tenetur", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                targetPoolsRemoveInstanceRequest = new TargetPoolsRemoveInstanceRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "in";
                        }}),
                        add(new InstanceReference() {{
                            instance = "consectetur";
                        }}),
                        add(new InstanceReference() {{
                            instance = "facilis";
                        }}),
                        add(new InstanceReference() {{
                            instance = "inventore";
                        }}),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "dicta";
                key = "enim";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "in";
                uploadType = "dignissimos";
                uploadProtocol = "magni";
                userIp = "dolore";
            }};            

            ComputeTargetPoolsRemoveInstanceResponse res = sdk.targetPools.computeTargetPoolsRemoveInstance(req, new ComputeTargetPoolsRemoveInstanceSecurity() {{
                option1 = new ComputeTargetPoolsRemoveInstanceSecurityOption1("consequuntur", "modi") {{
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

            ComputeTargetPoolsSetBackupRequest req = new ComputeTargetPoolsSetBackupRequest("inventore", "ipsam", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                targetReference = new TargetReference() {{
                    target = "quia";
                }};;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                failoverRatio = 3405.66;
                fields = "molestiae";
                key = "repellat";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "voluptatibus";
                uploadType = "sapiente";
                uploadProtocol = "molestiae";
                userIp = "laudantium";
            }};            

            ComputeTargetPoolsSetBackupResponse res = sdk.targetPools.computeTargetPoolsSetBackup(req, new ComputeTargetPoolsSetBackupSecurity() {{
                option1 = new ComputeTargetPoolsSetBackupSecurityOption1("consectetur", "repellendus") {{
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

## computeTargetPoolsSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified target pool. For more information, see Google Cloud Armor Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetPoolsSetSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetPoolsSetSecurityPolicyRequest req = new ComputeTargetPoolsSetSecurityPolicyRequest("nobis", "at", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "dicta";
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "ipsum";
                key = "cum";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "quidem";
                uploadType = "dignissimos";
                uploadProtocol = "temporibus";
                userIp = "ea";
            }};            

            ComputeTargetPoolsSetSecurityPolicyResponse res = sdk.targetPools.computeTargetPoolsSetSecurityPolicy(req, new ComputeTargetPoolsSetSecurityPolicySecurity() {{
                option1 = new ComputeTargetPoolsSetSecurityPolicySecurityOption1("qui", "veritatis") {{
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

            ComputeTargetPoolsTestIamPermissionsRequest req = new ComputeTargetPoolsTestIamPermissionsRequest("natus", "vero", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("unde"),
                        add("itaque"),
                        add("ullam"),
                        add("veniam"),
                    }};
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "enim";
                key = "quidem";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "nesciunt";
                uploadProtocol = "natus";
                userIp = "reprehenderit";
            }};            

            ComputeTargetPoolsTestIamPermissionsResponse res = sdk.targetPools.computeTargetPoolsTestIamPermissions(req, new ComputeTargetPoolsTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetPoolsTestIamPermissionsSecurityOption1("debitis", "amet") {{
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
