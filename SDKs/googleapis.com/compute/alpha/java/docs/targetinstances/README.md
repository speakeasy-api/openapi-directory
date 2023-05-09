# targetInstances

### Available Operations

* [computeTargetInstancesAggregatedList](#computetargetinstancesaggregatedlist) - Retrieves an aggregated list of target instances.
* [computeTargetInstancesDelete](#computetargetinstancesdelete) - Deletes the specified TargetInstance resource.
* [computeTargetInstancesGet](#computetargetinstancesget) - Returns the specified TargetInstance resource.
* [computeTargetInstancesInsert](#computetargetinstancesinsert) - Creates a TargetInstance resource in the specified project and zone using the data included in the request.
* [computeTargetInstancesList](#computetargetinstanceslist) - Retrieves a list of TargetInstance resources available to the specified project and zone.
* [computeTargetInstancesSetSecurityPolicy](#computetargetinstancessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified target instance. For more information, see Google Cloud Armor Overview
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

            ComputeTargetInstancesAggregatedListRequest req = new ComputeTargetInstancesAggregatedListRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "adipisci";
                filter = "vel";
                includeAllScopes = false;
                key = "adipisci";
                maxResults = 199541L;
                oauthToken = "inventore";
                orderBy = "laudantium";
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                returnPartialSuccess = false;
                uploadType = "necessitatibus";
                uploadProtocol = "ducimus";
                userIp = "facere";
            }};            

            ComputeTargetInstancesAggregatedListResponse res = sdk.targetInstances.computeTargetInstancesAggregatedList(req, new ComputeTargetInstancesAggregatedListSecurity() {{
                option1 = new ComputeTargetInstancesAggregatedListSecurityOption1("eligendi", "velit") {{
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

            ComputeTargetInstancesDeleteRequest req = new ComputeTargetInstancesDeleteRequest("deserunt", "quaerat", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "laboriosam";
                key = "laboriosam";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "natus";
                uploadType = "quibusdam";
                uploadProtocol = "sed";
                userIp = "nam";
            }};            

            ComputeTargetInstancesDeleteResponse res = sdk.targetInstances.computeTargetInstancesDelete(req, new ComputeTargetInstancesDeleteSecurity() {{
                option1 = new ComputeTargetInstancesDeleteSecurityOption1("porro", "doloremque") {{
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

            ComputeTargetInstancesGetRequest req = new ComputeTargetInstancesGetRequest("nesciunt", "magnam", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "molestiae";
                key = "voluptas";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "atque";
                uploadProtocol = "possimus";
                userIp = "alias";
            }};            

            ComputeTargetInstancesGetResponse res = sdk.targetInstances.computeTargetInstancesGet(req, new ComputeTargetInstancesGetSecurity() {{
                option1 = new ComputeTargetInstancesGetSecurityOption1("vitae", "saepe") {{
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

            ComputeTargetInstancesInsertRequest req = new ComputeTargetInstancesInsertRequest("sunt", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                targetInstance = new TargetInstance() {{
                    creationTimestamp = "aliquid";
                    description = "earum";
                    id = "distinctio";
                    instance = "fugit";
                    kind = "aliquam";
                    name = "Seth Kertzmann";
                    natPolicy = TargetInstanceNatPolicyEnum.NO_NAT;
                    network = "assumenda";
                    securityPolicy = "modi";
                    selfLink = "aliquid";
                    selfLinkWithId = "ipsa";
                    zone = "in";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "qui";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "aspernatur";
                uploadType = "odit";
                uploadProtocol = "optio";
                userIp = "nostrum";
            }};            

            ComputeTargetInstancesInsertResponse res = sdk.targetInstances.computeTargetInstancesInsert(req, new ComputeTargetInstancesInsertSecurity() {{
                option1 = new ComputeTargetInstancesInsertSecurityOption1("ab", "praesentium") {{
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

            ComputeTargetInstancesListRequest req = new ComputeTargetInstancesListRequest("quo", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "qui";
                filter = "quis";
                key = "delectus";
                maxResults = 192986L;
                oauthToken = "saepe";
                orderBy = "eos";
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptate";
                returnPartialSuccess = false;
                uploadType = "aliquid";
                uploadProtocol = "voluptatem";
                userIp = "iusto";
            }};            

            ComputeTargetInstancesListResponse res = sdk.targetInstances.computeTargetInstancesList(req, new ComputeTargetInstancesListSecurity() {{
                option1 = new ComputeTargetInstancesListSecurityOption1("esse", "illo") {{
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

## computeTargetInstancesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified target instance. For more information, see Google Cloud Armor Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetInstancesSetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeTargetInstancesSetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeTargetInstancesSetSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeTargetInstancesSetSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetInstancesSetSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetInstancesSetSecurityPolicyRequest req = new ComputeTargetInstancesSetSecurityPolicyRequest("id", "quis", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "necessitatibus";
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "temporibus";
                key = "dolore";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "voluptas";
                uploadType = "autem";
                uploadProtocol = "odio";
                userIp = "dolorum";
            }};            

            ComputeTargetInstancesSetSecurityPolicyResponse res = sdk.targetInstances.computeTargetInstancesSetSecurityPolicy(req, new ComputeTargetInstancesSetSecurityPolicySecurity() {{
                option1 = new ComputeTargetInstancesSetSecurityPolicySecurityOption1("officia", "quae") {{
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

            ComputeTargetInstancesTestIamPermissionsRequest req = new ComputeTargetInstancesTestIamPermissionsRequest("quia", "veritatis", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("mollitia"),
                        add("facilis"),
                        add("quos"),
                    }};
                }};;
                accessToken = "soluta";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "odit";
                key = "perferendis";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "perspiciatis";
                uploadProtocol = "odio";
                userIp = "voluptatibus";
            }};            

            ComputeTargetInstancesTestIamPermissionsResponse res = sdk.targetInstances.computeTargetInstancesTestIamPermissions(req, new ComputeTargetInstancesTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetInstancesTestIamPermissionsSecurityOption1("amet", "odio") {{
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
