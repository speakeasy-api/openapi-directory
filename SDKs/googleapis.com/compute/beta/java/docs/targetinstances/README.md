# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.
* [computeTargetInstancesTestIamPermissions](#computetargetinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeTargetInstancesAggregatedListRequest req = new ComputeTargetInstancesAggregatedListRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "aspernatur";
                filter = "voluptates";
                includeAllScopes = false;
                key = "suscipit";
                maxResults = 91365L;
                oauthToken = "ea";
                orderBy = "maiores";
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "vitae";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "fuga";
                userIp = "adipisci";
            }};            

            ComputeTargetInstancesAggregatedListResponse res = sdk.targetInstances.computeTargetInstancesAggregatedList(req, new ComputeTargetInstancesAggregatedListSecurity() {{
                option1 = new ComputeTargetInstancesAggregatedListSecurityOption1("vero", "nam") {{
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

            ComputeTargetInstancesDeleteRequest req = new ComputeTargetInstancesDeleteRequest("nihil", "distinctio", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "occaecati";
                key = "accusantium";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "cum";
                uploadType = "illum";
                uploadProtocol = "repellat";
                userIp = "provident";
            }};            

            ComputeTargetInstancesDeleteResponse res = sdk.targetInstances.computeTargetInstancesDelete(req, new ComputeTargetInstancesDeleteSecurity() {{
                option1 = new ComputeTargetInstancesDeleteSecurityOption1("suscipit", "odio") {{
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

            ComputeTargetInstancesGetRequest req = new ComputeTargetInstancesGetRequest("odit", "odio", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "sunt";
                key = "possimus";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "voluptate";
                uploadProtocol = "deserunt";
                userIp = "praesentium";
            }};            

            ComputeTargetInstancesGetResponse res = sdk.targetInstances.computeTargetInstancesGet(req, new ComputeTargetInstancesGetSecurity() {{
                option1 = new ComputeTargetInstancesGetSecurityOption1("architecto", "fuga") {{
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

            ComputeTargetInstancesInsertRequest req = new ComputeTargetInstancesInsertRequest("numquam", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                targetInstance = new TargetInstance() {{
                    creationTimestamp = "veniam";
                    description = "omnis";
                    id = "dignissimos";
                    instance = "totam";
                    kind = "debitis";
                    name = "Lela Dooley";
                    natPolicy = TargetInstanceNatPolicyEnum.NO_NAT;
                    network = "error";
                    selfLink = "atque";
                    zone = "neque";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "labore";
                key = "quod";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "autem";
                uploadType = "mollitia";
                uploadProtocol = "tempora";
                userIp = "numquam";
            }};            

            ComputeTargetInstancesInsertResponse res = sdk.targetInstances.computeTargetInstancesInsert(req, new ComputeTargetInstancesInsertSecurity() {{
                option1 = new ComputeTargetInstancesInsertSecurityOption1("reiciendis", "explicabo") {{
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

            ComputeTargetInstancesListRequest req = new ComputeTargetInstancesListRequest("nulla", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "ipsum";
                filter = "recusandae";
                key = "earum";
                maxResults = 259300L;
                oauthToken = "soluta";
                orderBy = "ab";
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "quas";
                returnPartialSuccess = false;
                uploadType = "doloremque";
                uploadProtocol = "nostrum";
                userIp = "dolores";
            }};            

            ComputeTargetInstancesListResponse res = sdk.targetInstances.computeTargetInstancesList(req, new ComputeTargetInstancesListSecurity() {{
                option1 = new ComputeTargetInstancesListSecurityOption1("harum", "beatae") {{
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

## computeTargetInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetInstancesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesTestIamPermissionsRequest req = new ComputeTargetInstancesTestIamPermissionsRequest("est", "tempore", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("velit"),
                        add("similique"),
                    }};
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "expedita";
                key = "aspernatur";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "sit";
                uploadProtocol = "nobis";
                userIp = "esse";
            }};            

            ComputeTargetInstancesTestIamPermissionsResponse res = sdk.targetInstances.computeTargetInstancesTestIamPermissions(req, new ComputeTargetInstancesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetInstancesTestIamPermissionsSecurityOption1("nulla", "occaecati") {{
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
