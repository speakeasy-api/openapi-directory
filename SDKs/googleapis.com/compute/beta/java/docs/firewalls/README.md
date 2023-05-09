# firewalls

### Available Operations

* [computeFirewallsDelete](#computefirewallsdelete) - Deletes the specified firewall.
* [computeFirewallsGet](#computefirewallsget) - Returns the specified firewall.
* [computeFirewallsInsert](#computefirewallsinsert) - Creates a firewall rule in the specified project using the data included in the request.
* [computeFirewallsList](#computefirewallslist) - Retrieves the list of firewall rules available to the specified project.
* [computeFirewallsPatch](#computefirewallspatch) - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeFirewallsTestIamPermissions](#computefirewallstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeFirewallsUpdate](#computefirewallsupdate) - Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

## computeFirewallsDelete

Deletes the specified firewall.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsDeleteRequest req = new ComputeFirewallsDeleteRequest("sunt", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "nostrum";
                key = "rerum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nam";
                requestId = "ullam";
                uploadType = "ratione";
                uploadProtocol = "eos";
                userIp = "id";
            }};            

            ComputeFirewallsDeleteResponse res = sdk.firewalls.computeFirewallsDelete(req, new ComputeFirewallsDeleteSecurity() {{
                option1 = new ComputeFirewallsDeleteSecurityOption1("modi", "illum") {{
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

## computeFirewallsGet

Returns the specified firewall.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsGetRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsGetResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsGetSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsGetRequest req = new ComputeFirewallsGetRequest("error", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "culpa";
                key = "a";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "ad";
                uploadProtocol = "quia";
                userIp = "quod";
            }};            

            ComputeFirewallsGetResponse res = sdk.firewalls.computeFirewallsGet(req, new ComputeFirewallsGetSecurity() {{
                option1 = new ComputeFirewallsGetSecurityOption1("quaerat", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewall != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFirewallsInsert

Creates a firewall rule in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsInsertRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsInsertResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Firewall;
import org.openapis.openapi.models.shared.FirewallAllowed;
import org.openapis.openapi.models.shared.FirewallDenied;
import org.openapis.openapi.models.shared.FirewallDirectionEnum;
import org.openapis.openapi.models.shared.FirewallLogConfig;
import org.openapis.openapi.models.shared.FirewallLogConfigMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsInsertRequest req = new ComputeFirewallsInsertRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                firewall = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "cupiditate";
                            ports = new String[]{{
                                add("odit"),
                                add("est"),
                                add("at"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "ipsum";
                            ports = new String[]{{
                                add("nulla"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "est";
                            ports = new String[]{{
                                add("necessitatibus"),
                                add("voluptatum"),
                                add("quasi"),
                                add("mollitia"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "voluptatum";
                            ports = new String[]{{
                                add("sapiente"),
                                add("ut"),
                                add("incidunt"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "labore";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "enim";
                            ports = new String[]{{
                                add("ratione"),
                                add("tenetur"),
                            }};
                        }}),
                        add(new FirewallDenied() {{
                            ipProtocol = "saepe";
                            ports = new String[]{{
                                add("nulla"),
                                add("tempora"),
                                add("quam"),
                                add("consectetur"),
                            }};
                        }}),
                    }};
                    description = "nemo";
                    destinationRanges = new String[]{{
                        add("earum"),
                    }};
                    direction = FirewallDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "dolor";
                    kind = "placeat";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Cynthia Morissette";
                    network = "unde";
                    priority = 646321;
                    selfLink = "id";
                    sourceRanges = new String[]{{
                        add("occaecati"),
                        add("optio"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("ad"),
                        add("asperiores"),
                        add("nam"),
                        add("cumque"),
                    }};
                    sourceTags = new String[]{{
                        add("quam"),
                        add("occaecati"),
                        add("repellendus"),
                        add("culpa"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("rem"),
                    }};
                    targetTags = new String[]{{
                        add("odio"),
                        add("totam"),
                        add("magni"),
                    }};
                }};;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "omnis";
                key = "quis";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "aliquam";
                uploadType = "vero";
                uploadProtocol = "nisi";
                userIp = "praesentium";
            }};            

            ComputeFirewallsInsertResponse res = sdk.firewalls.computeFirewallsInsert(req, new ComputeFirewallsInsertSecurity() {{
                option1 = new ComputeFirewallsInsertSecurityOption1("eum", "vitae") {{
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

## computeFirewallsList

Retrieves the list of firewall rules available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsListRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsListResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsListSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsListRequest req = new ComputeFirewallsListRequest("animi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "maiores";
                filter = "iste";
                key = "accusamus";
                maxResults = 370374L;
                oauthToken = "fugiat";
                orderBy = "odio";
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "inventore";
                returnPartialSuccess = false;
                uploadType = "eligendi";
                uploadProtocol = "occaecati";
                userIp = "doloribus";
            }};            

            ComputeFirewallsListResponse res = sdk.firewalls.computeFirewallsList(req, new ComputeFirewallsListSecurity() {{
                option1 = new ComputeFirewallsListSecurityOption1("necessitatibus", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFirewallsPatch

Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsPatchRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsPatchResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Firewall;
import org.openapis.openapi.models.shared.FirewallAllowed;
import org.openapis.openapi.models.shared.FirewallDenied;
import org.openapis.openapi.models.shared.FirewallDirectionEnum;
import org.openapis.openapi.models.shared.FirewallLogConfig;
import org.openapis.openapi.models.shared.FirewallLogConfigMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsPatchRequest req = new ComputeFirewallsPatchRequest("a", "nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "magni";
                            ports = new String[]{{
                                add("voluptatibus"),
                                add("nulla"),
                                add("quod"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "non";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "enim";
                            ports = new String[]{{
                                add("blanditiis"),
                            }};
                        }}),
                        add(new FirewallDenied() {{
                            ipProtocol = "modi";
                            ports = new String[]{{
                                add("a"),
                            }};
                        }}),
                    }};
                    description = "et";
                    destinationRanges = new String[]{{
                        add("autem"),
                        add("dolore"),
                    }};
                    direction = FirewallDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "nostrum";
                    kind = "ex";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.EXCLUDE_ALL_METADATA;
                    }};;
                    name = "Felicia Wolf";
                    network = "quidem";
                    priority = 139730;
                    selfLink = "molestiae";
                    sourceRanges = new String[]{{
                        add("quia"),
                        add("inventore"),
                        add("doloribus"),
                        add("praesentium"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("consequuntur"),
                        add("laboriosam"),
                    }};
                    sourceTags = new String[]{{
                        add("reprehenderit"),
                        add("soluta"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("vel"),
                    }};
                    targetTags = new String[]{{
                        add("maxime"),
                        add("vel"),
                        add("distinctio"),
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "iusto";
                key = "quod";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "magni";
                uploadType = "nostrum";
                uploadProtocol = "minus";
                userIp = "aliquid";
            }};            

            ComputeFirewallsPatchResponse res = sdk.firewalls.computeFirewallsPatch(req, new ComputeFirewallsPatchSecurity() {{
                option1 = new ComputeFirewallsPatchSecurityOption1("quam", "ea") {{
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

## computeFirewallsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsTestIamPermissionsRequest req = new ComputeFirewallsTestIamPermissionsRequest("numquam", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("velit"),
                        add("quasi"),
                        add("sed"),
                    }};
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "dolore";
                key = "in";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "cumque";
                uploadProtocol = "quia";
                userIp = "beatae";
            }};            

            ComputeFirewallsTestIamPermissionsResponse res = sdk.firewalls.computeFirewallsTestIamPermissions(req, new ComputeFirewallsTestIamPermissionsSecurity() {{
                option1 = new ComputeFirewallsTestIamPermissionsSecurityOption1("porro", "cumque") {{
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

## computeFirewallsUpdate

Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeFirewallsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeFirewallsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Firewall;
import org.openapis.openapi.models.shared.FirewallAllowed;
import org.openapis.openapi.models.shared.FirewallDenied;
import org.openapis.openapi.models.shared.FirewallDirectionEnum;
import org.openapis.openapi.models.shared.FirewallLogConfig;
import org.openapis.openapi.models.shared.FirewallLogConfigMetadataEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallsUpdateRequest req = new ComputeFirewallsUpdateRequest("distinctio", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "culpa";
                            ports = new String[]{{
                                add("minus"),
                                add("vero"),
                                add("impedit"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "omnis";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "earum";
                            ports = new String[]{{
                                add("est"),
                                add("distinctio"),
                                add("fugiat"),
                            }};
                        }}),
                    }};
                    description = "nulla";
                    destinationRanges = new String[]{{
                        add("praesentium"),
                        add("officiis"),
                        add("esse"),
                    }};
                    direction = FirewallDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "delectus";
                    kind = "laboriosam";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Tracey Cormier";
                    network = "quibusdam";
                    priority = 442864;
                    selfLink = "voluptate";
                    sourceRanges = new String[]{{
                        add("et"),
                        add("eveniet"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("hic"),
                        add("at"),
                    }};
                    sourceTags = new String[]{{
                        add("in"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("aut"),
                        add("consequatur"),
                    }};
                    targetTags = new String[]{{
                        add("accusamus"),
                        add("repellat"),
                        add("voluptatum"),
                    }};
                }};;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "repellendus";
                key = "voluptates";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "facere";
                requestId = "fugiat";
                uploadType = "ducimus";
                uploadProtocol = "aut";
                userIp = "provident";
            }};            

            ComputeFirewallsUpdateResponse res = sdk.firewalls.computeFirewallsUpdate(req, new ComputeFirewallsUpdateSecurity() {{
                option1 = new ComputeFirewallsUpdateSecurityOption1("voluptate", "tempore") {{
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
