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

            ComputeFirewallsDeleteRequest req = new ComputeFirewallsDeleteRequest("aperiam", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "delectus";
                key = "deleniti";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "reprehenderit";
                uploadType = "sint";
                uploadProtocol = "dignissimos";
                userIp = "voluptatum";
            }};            

            ComputeFirewallsDeleteResponse res = sdk.firewalls.computeFirewallsDelete(req, new ComputeFirewallsDeleteSecurity() {{
                option1 = new ComputeFirewallsDeleteSecurityOption1("nulla", "consequatur") {{
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

            ComputeFirewallsGetRequest req = new ComputeFirewallsGetRequest("similique", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "mollitia";
                key = "repudiandae";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "esse";
                userIp = "alias";
            }};            

            ComputeFirewallsGetResponse res = sdk.firewalls.computeFirewallsGet(req, new ComputeFirewallsGetSecurity() {{
                option1 = new ComputeFirewallsGetSecurityOption1("consequuntur", "architecto") {{
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

            ComputeFirewallsInsertRequest req = new ComputeFirewallsInsertRequest("est") {{
                dollarXgafv = XgafvEnum.ONE;
                firewall = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "quae";
                            ports = new String[]{{
                                add("suscipit"),
                                add("rerum"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "laboriosam";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "repudiandae";
                            ports = new String[]{{
                                add("excepturi"),
                                add("voluptatibus"),
                                add("facilis"),
                            }};
                        }}),
                        add(new FirewallDenied() {{
                            ipProtocol = "doloremque";
                            ports = new String[]{{
                                add("nisi"),
                                add("reprehenderit"),
                                add("necessitatibus"),
                                add("alias"),
                            }};
                        }}),
                    }};
                    description = "provident";
                    destinationRanges = new String[]{{
                        add("hic"),
                        add("facere"),
                    }};
                    direction = FirewallDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "saepe";
                    kind = "assumenda";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.EXCLUDE_ALL_METADATA;
                    }};;
                    name = "Joanne Balistreri";
                    network = "exercitationem";
                    priority = 204080;
                    selfLink = "mollitia";
                    selfLinkWithId = "velit";
                    sourceRanges = new String[]{{
                        add("est"),
                        add("quasi"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("blanditiis"),
                        add("sapiente"),
                        add("recusandae"),
                    }};
                    sourceTags = new String[]{{
                        add("natus"),
                        add("reprehenderit"),
                        add("dolorem"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("fuga"),
                    }};
                    targetTags = new String[]{{
                        add("cumque"),
                        add("aperiam"),
                        add("ad"),
                        add("fugiat"),
                    }};
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                fields = "eveniet";
                key = "consequuntur";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "rerum";
                uploadType = "voluptate";
                uploadProtocol = "perferendis";
                userIp = "maiores";
            }};            

            ComputeFirewallsInsertResponse res = sdk.firewalls.computeFirewallsInsert(req, new ComputeFirewallsInsertSecurity() {{
                option1 = new ComputeFirewallsInsertSecurityOption1("harum", "ratione") {{
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

            ComputeFirewallsListRequest req = new ComputeFirewallsListRequest("molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "consequatur";
                filter = "illum";
                key = "adipisci";
                maxResults = 210651L;
                oauthToken = "ex";
                orderBy = "quis";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "et";
                returnPartialSuccess = false;
                uploadType = "officiis";
                uploadProtocol = "quo";
                userIp = "culpa";
            }};            

            ComputeFirewallsListResponse res = sdk.firewalls.computeFirewallsList(req, new ComputeFirewallsListSecurity() {{
                option1 = new ComputeFirewallsListSecurityOption1("architecto", "iure") {{
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

            ComputeFirewallsPatchRequest req = new ComputeFirewallsPatchRequest("eveniet", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "tempora";
                            ports = new String[]{{
                                add("ab"),
                                add("harum"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "facere";
                            ports = new String[]{{
                                add("nisi"),
                                add("accusamus"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "officiis";
                            ports = new String[]{{
                                add("nam"),
                                add("nemo"),
                                add("veritatis"),
                                add("molestias"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "impedit";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "possimus";
                            ports = new String[]{{
                                add("architecto"),
                                add("asperiores"),
                                add("est"),
                            }};
                        }}),
                        add(new FirewallDenied() {{
                            ipProtocol = "repellendus";
                            ports = new String[]{{
                                add("nemo"),
                            }};
                        }}),
                    }};
                    description = "quis";
                    destinationRanges = new String[]{{
                        add("odit"),
                    }};
                    direction = FirewallDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "doloremque";
                    kind = "laboriosam";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Kellie Halvorson";
                    network = "consequuntur";
                    priority = 956752;
                    selfLink = "alias";
                    selfLinkWithId = "doloribus";
                    sourceRanges = new String[]{{
                        add("dolore"),
                        add("corrupti"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("commodi"),
                        add("laudantium"),
                    }};
                    sourceTags = new String[]{{
                        add("consequatur"),
                        add("incidunt"),
                        add("dolores"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("earum"),
                        add("consequatur"),
                    }};
                    targetTags = new String[]{{
                        add("officia"),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "voluptates";
                key = "tempore";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "ratione";
                uploadType = "aliquam";
                uploadProtocol = "ea";
                userIp = "aliquam";
            }};            

            ComputeFirewallsPatchResponse res = sdk.firewalls.computeFirewallsPatch(req, new ComputeFirewallsPatchSecurity() {{
                option1 = new ComputeFirewallsPatchSecurityOption1("corporis", "at") {{
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

            ComputeFirewallsTestIamPermissionsRequest req = new ComputeFirewallsTestIamPermissionsRequest("ipsa", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quaerat"),
                        add("repellat"),
                        add("expedita"),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "cumque";
                key = "cumque";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "tenetur";
                uploadProtocol = "ipsam";
                userIp = "quod";
            }};            

            ComputeFirewallsTestIamPermissionsResponse res = sdk.firewalls.computeFirewallsTestIamPermissions(req, new ComputeFirewallsTestIamPermissionsSecurity() {{
                option1 = new ComputeFirewallsTestIamPermissionsSecurityOption1("facilis", "doloremque") {{
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

            ComputeFirewallsUpdateRequest req = new ComputeFirewallsUpdateRequest("illo", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "quasi";
                            ports = new String[]{{
                                add("ipsam"),
                                add("aspernatur"),
                                add("atque"),
                                add("animi"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "eius";
                            ports = new String[]{{
                                add("mollitia"),
                                add("minus"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "quos";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "distinctio";
                            ports = new String[]{{
                                add("ullam"),
                                add("maiores"),
                                add("corrupti"),
                            }};
                        }}),
                    }};
                    description = "libero";
                    destinationRanges = new String[]{{
                        add("explicabo"),
                        add("placeat"),
                        add("animi"),
                        add("expedita"),
                    }};
                    direction = FirewallDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    id = "atque";
                    kind = "assumenda";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Marie Corkery";
                    network = "nulla";
                    priority = 364857;
                    selfLink = "omnis";
                    selfLinkWithId = "iure";
                    sourceRanges = new String[]{{
                        add("sapiente"),
                        add("eius"),
                        add("esse"),
                        add("quasi"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("similique"),
                    }};
                    sourceTags = new String[]{{
                        add("et"),
                        add("distinctio"),
                        add("porro"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("numquam"),
                        add("rerum"),
                    }};
                    targetTags = new String[]{{
                        add("aliquid"),
                        add("placeat"),
                        add("necessitatibus"),
                    }};
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "incidunt";
                key = "voluptatibus";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "ducimus";
                requestId = "nam";
                uploadType = "incidunt";
                uploadProtocol = "deleniti";
                userIp = "aliquam";
            }};            

            ComputeFirewallsUpdateResponse res = sdk.firewalls.computeFirewallsUpdate(req, new ComputeFirewallsUpdateSecurity() {{
                option1 = new ComputeFirewallsUpdateSecurityOption1("totam", "soluta") {{
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
