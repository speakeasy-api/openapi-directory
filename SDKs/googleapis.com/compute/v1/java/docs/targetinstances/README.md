# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.

## computeTargetInstancesAggregatedList

Retrieves an aggregated list of target instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetInstancesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesAggregatedListRequest req = new ComputeTargetInstancesAggregatedListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "omnis";
                filter = "ipsa";
                includeAllScopes = false;
                key = "perferendis";
                maxResults = 427510L;
                oauthToken = "culpa";
                orderBy = "nulla";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "iure";
                returnPartialSuccess = false;
                uploadType = "quaerat";
                uploadProtocol = "eum";
                userIp = "cupiditate";
            }};            

            ComputeTargetInstancesAggregatedListResponse res = sdk.targetInstances.computeTargetInstancesAggregatedList(req, new ComputeTargetInstancesAggregatedListSecurity() {{
                option1 = new ComputeTargetInstancesAggregatedListSecurityOption1("inventore", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetInstanceAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetInstancesDelete

Deletes the specified TargetInstance resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesDeleteRequest req = new ComputeTargetInstancesDeleteRequest("praesentium", "illum", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "dignissimos";
                key = "error";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "qui";
                uploadType = "inventore";
                uploadProtocol = "adipisci";
                userIp = "id";
            }};            

            ComputeTargetInstancesDeleteResponse res = sdk.targetInstances.computeTargetInstancesDelete(req, new ComputeTargetInstancesDeleteSecurity() {{
                option1 = new ComputeTargetInstancesDeleteSecurityOption1("incidunt", "ducimus") {{
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

## computeTargetInstancesGet

Returns the specified TargetInstance resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetInstancesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesGetRequest req = new ComputeTargetInstancesGetRequest("quod", "mollitia", "sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "recusandae";
                key = "debitis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "fuga";
                uploadProtocol = "minus";
                userIp = "illo";
            }};            

            ComputeTargetInstancesGetResponse res = sdk.targetInstances.computeTargetInstancesGet(req, new ComputeTargetInstancesGetSecurity() {{
                option1 = new ComputeTargetInstancesGetSecurityOption1("accusantium", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetInstancesInsert

Creates a TargetInstance resource in the specified project and zone using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetInstance;
import org.openapis.openapi.models.shared.TargetInstanceNatPolicyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesInsertRequest req = new ComputeTargetInstancesInsertRequest("hic", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                targetInstance = new TargetInstance() {{
                    creationTimestamp = "itaque";
                    description = "voluptates";
                    id = "laborum";
                    instance = "nobis";
                    kind = "ex";
                    name = "Mr. Kara Ledner";
                    natPolicy = TargetInstanceNatPolicyEnum.NO_NAT;
                    network = "commodi";
                    selfLink = "asperiores";
                    zone = "dolorem";
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "pariatur";
                key = "consequatur";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "ut";
                uploadType = "explicabo";
                uploadProtocol = "cumque";
                userIp = "numquam";
            }};            

            ComputeTargetInstancesInsertResponse res = sdk.targetInstances.computeTargetInstancesInsert(req, new ComputeTargetInstancesInsertSecurity() {{
                option1 = new ComputeTargetInstancesInsertSecurityOption1("porro", "possimus") {{
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

## computeTargetInstancesList

Retrieves a list of TargetInstance resources available to the specified project and zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetInstancesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesListRequest req = new ComputeTargetInstancesListRequest("culpa", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "porro";
                filter = "optio";
                key = "voluptatibus";
                maxResults = 320442L;
                oauthToken = "cupiditate";
                orderBy = "rem";
                pageToken = "aliquam";
                prettyPrint = false;
                quotaUser = "debitis";
                returnPartialSuccess = false;
                uploadType = "expedita";
                uploadProtocol = "architecto";
                userIp = "aliquam";
            }};            

            ComputeTargetInstancesListResponse res = sdk.targetInstances.computeTargetInstancesList(req, new ComputeTargetInstancesListSecurity() {{
                option1 = new ComputeTargetInstancesListSecurityOption1("itaque", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetInstanceList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
