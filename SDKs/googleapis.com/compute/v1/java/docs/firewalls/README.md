# firewalls

### Available Operations

* [computeFirewallsDelete](#computefirewallsdelete) - Deletes the specified firewall.
* [computeFirewallsGet](#computefirewallsget) - Returns the specified firewall.
* [computeFirewallsInsert](#computefirewallsinsert) - Creates a firewall rule in the specified project using the data included in the request.
* [computeFirewallsList](#computefirewallslist) - Retrieves the list of firewall rules available to the specified project.
* [computeFirewallsPatch](#computefirewallspatch) - Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeFirewallsDeleteRequest req = new ComputeFirewallsDeleteRequest("molestiae", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "omnis";
                key = "ipsa";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "occaecati";
                uploadType = "quibusdam";
                uploadProtocol = "magni";
                userIp = "consequuntur";
            }};            

            ComputeFirewallsDeleteResponse res = sdk.firewalls.computeFirewallsDelete(req, new ComputeFirewallsDeleteSecurity() {{
                option1 = new ComputeFirewallsDeleteSecurityOption1("consequuntur", "eius") {{
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

            ComputeFirewallsGetRequest req = new ComputeFirewallsGetRequest("commodi", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "explicabo";
                key = "modi";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "sit";
                uploadProtocol = "voluptatum";
                userIp = "tempora";
            }};            

            ComputeFirewallsGetResponse res = sdk.firewalls.computeFirewallsGet(req, new ComputeFirewallsGetSecurity() {{
                option1 = new ComputeFirewallsGetSecurityOption1("delectus", "quam") {{
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

            ComputeFirewallsInsertRequest req = new ComputeFirewallsInsertRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                firewall = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "molestiae";
                            ports = new String[]{{
                                add("saepe"),
                                add("maiores"),
                                add("accusantium"),
                                add("sed"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "eos";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "quis";
                            ports = new String[]{{
                                add("occaecati"),
                            }};
                        }}),
                    }};
                    description = "labore";
                    destinationRanges = new String[]{{
                        add("quidem"),
                        add("exercitationem"),
                        add("veniam"),
                        add("modi"),
                    }};
                    direction = FirewallDirectionEnum.EGRESS;
                    disabled = false;
                    id = "quae";
                    kind = "similique";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Shane Jakubowski";
                    network = "doloribus";
                    priority = 589031;
                    selfLink = "alias";
                    sourceRanges = new String[]{{
                        add("fugit"),
                        add("autem"),
                        add("quo"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("maxime"),
                        add("facere"),
                    }};
                    sourceTags = new String[]{{
                        add("cupiditate"),
                        add("deleniti"),
                        add("quasi"),
                        add("maiores"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("aliquid"),
                    }};
                    targetTags = new String[]{{
                        add("unde"),
                        add("corrupti"),
                        add("quae"),
                    }};
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "nam";
                key = "amet";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "minus";
                requestId = "hic";
                uploadType = "similique";
                uploadProtocol = "fuga";
                userIp = "consectetur";
            }};            

            ComputeFirewallsInsertResponse res = sdk.firewalls.computeFirewallsInsert(req, new ComputeFirewallsInsertSecurity() {{
                option1 = new ComputeFirewallsInsertSecurityOption1("labore", "laudantium") {{
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

            ComputeFirewallsListRequest req = new ComputeFirewallsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "magnam";
                filter = "aperiam";
                key = "ducimus";
                maxResults = 933456L;
                oauthToken = "necessitatibus";
                orderBy = "numquam";
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "eligendi";
                returnPartialSuccess = false;
                uploadType = "sapiente";
                uploadProtocol = "alias";
                userIp = "impedit";
            }};            

            ComputeFirewallsListResponse res = sdk.firewalls.computeFirewallsList(req, new ComputeFirewallsListSecurity() {{
                option1 = new ComputeFirewallsListSecurityOption1("numquam", "aspernatur") {{
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

            ComputeFirewallsPatchRequest req = new ComputeFirewallsPatchRequest("nobis", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "vitae";
                            ports = new String[]{{
                                add("nisi"),
                                add("consequuntur"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "voluptas";
                            ports = new String[]{{
                                add("excepturi"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "corrupti";
                            ports = new String[]{{
                                add("perferendis"),
                                add("quibusdam"),
                                add("impedit"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "ducimus";
                            ports = new String[]{{
                                add("nisi"),
                                add("dolor"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "fugit";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "maxime";
                            ports = new String[]{{
                                add("expedita"),
                                add("accusantium"),
                                add("ea"),
                                add("impedit"),
                            }};
                        }}),
                        add(new FirewallDenied() {{
                            ipProtocol = "totam";
                            ports = new String[]{{
                                add("est"),
                                add("inventore"),
                                add("consequuntur"),
                                add("repellendus"),
                            }};
                        }}),
                    }};
                    description = "sit";
                    destinationRanges = new String[]{{
                        add("enim"),
                    }};
                    direction = FirewallDirectionEnum.EGRESS;
                    disabled = false;
                    id = "perspiciatis";
                    kind = "magni";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.EXCLUDE_ALL_METADATA;
                    }};;
                    name = "Alison Lesch";
                    network = "odio";
                    priority = 143253;
                    selfLink = "aspernatur";
                    sourceRanges = new String[]{{
                        add("illum"),
                        add("praesentium"),
                        add("sint"),
                        add("exercitationem"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("voluptatum"),
                        add("facilis"),
                        add("placeat"),
                    }};
                    sourceTags = new String[]{{
                        add("dolores"),
                        add("dolore"),
                        add("pariatur"),
                        add("facilis"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("nemo"),
                        add("natus"),
                        add("nisi"),
                    }};
                    targetTags = new String[]{{
                        add("amet"),
                        add("dolor"),
                        add("nostrum"),
                    }};
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "dolore";
                key = "ullam";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "cupiditate";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
                userIp = "fugiat";
            }};            

            ComputeFirewallsPatchResponse res = sdk.firewalls.computeFirewallsPatch(req, new ComputeFirewallsPatchSecurity() {{
                option1 = new ComputeFirewallsPatchSecurityOption1("molestiae", "quas") {{
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

            ComputeFirewallsUpdateRequest req = new ComputeFirewallsUpdateRequest("repellendus", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                firewall1 = new Firewall() {{
                    allowed = new org.openapis.openapi.models.shared.FirewallAllowed[]{{
                        add(new FirewallAllowed() {{
                            ipProtocol = "vel";
                            ports = new String[]{{
                                add("iste"),
                                add("nesciunt"),
                                add("corrupti"),
                                add("cupiditate"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "voluptatibus";
                            ports = new String[]{{
                                add("dolorum"),
                                add("soluta"),
                            }};
                        }}),
                        add(new FirewallAllowed() {{
                            ipProtocol = "cum";
                            ports = new String[]{{
                                add("delectus"),
                                add("commodi"),
                            }};
                        }}),
                    }};
                    creationTimestamp = "commodi";
                    denied = new org.openapis.openapi.models.shared.FirewallDenied[]{{
                        add(new FirewallDenied() {{
                            ipProtocol = "ullam";
                            ports = new String[]{{
                                add("doloremque"),
                                add("est"),
                            }};
                        }}),
                    }};
                    description = "qui";
                    destinationRanges = new String[]{{
                        add("adipisci"),
                        add("totam"),
                        add("qui"),
                    }};
                    direction = FirewallDirectionEnum.INGRESS;
                    disabled = false;
                    id = "eligendi";
                    kind = "incidunt";
                    logConfig = new FirewallLogConfig() {{
                        enable = false;
                        metadata = FirewallLogConfigMetadataEnum.INCLUDE_ALL_METADATA;
                    }};;
                    name = "Monique Wisoky";
                    network = "consectetur";
                    priority = 80998;
                    selfLink = "minima";
                    sourceRanges = new String[]{{
                        add("facilis"),
                        add("deserunt"),
                        add("nisi"),
                    }};
                    sourceServiceAccounts = new String[]{{
                        add("voluptatem"),
                        add("illo"),
                    }};
                    sourceTags = new String[]{{
                        add("incidunt"),
                        add("eveniet"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("ea"),
                    }};
                    targetTags = new String[]{{
                        add("veniam"),
                        add("quidem"),
                        add("asperiores"),
                        add("eum"),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "molestias";
                key = "architecto";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "quisquam";
                requestId = "praesentium";
                uploadType = "facilis";
                uploadProtocol = "assumenda";
                userIp = "repudiandae";
            }};            

            ComputeFirewallsUpdateResponse res = sdk.firewalls.computeFirewallsUpdate(req, new ComputeFirewallsUpdateSecurity() {{
                option1 = new ComputeFirewallsUpdateSecurityOption1("maiores", "ipsum") {{
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
