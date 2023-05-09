# globalForwardingRules

### Available Operations

* [computeGlobalForwardingRulesDelete](#computeglobalforwardingrulesdelete) - Deletes the specified GlobalForwardingRule resource.
* [computeGlobalForwardingRulesGet](#computeglobalforwardingrulesget) - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* [computeGlobalForwardingRulesInsert](#computeglobalforwardingrulesinsert) - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* [computeGlobalForwardingRulesList](#computeglobalforwardingruleslist) - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* [computeGlobalForwardingRulesPatch](#computeglobalforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeGlobalForwardingRulesSetLabels](#computeglobalforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* [computeGlobalForwardingRulesSetTarget](#computeglobalforwardingrulessettarget) - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
* [computeGlobalForwardingRulesTestIamPermissions](#computeglobalforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeGlobalForwardingRulesDelete

Deletes the specified GlobalForwardingRule resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesDeleteRequest req = new ComputeGlobalForwardingRulesDeleteRequest("nobis", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "itaque";
                key = "rerum";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "distinctio";
                uploadType = "blanditiis";
                uploadProtocol = "quaerat";
                userIp = "odit";
            }};            

            ComputeGlobalForwardingRulesDeleteResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesDelete(req, new ComputeGlobalForwardingRulesDeleteSecurity() {{
                option1 = new ComputeGlobalForwardingRulesDeleteSecurityOption1("ab", "unde") {{
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

## computeGlobalForwardingRulesGet

Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesGetRequest req = new ComputeGlobalForwardingRulesGetRequest("nemo", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "nulla";
                key = "nesciunt";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "sequi";
                uploadProtocol = "veritatis";
                userIp = "veniam";
            }};            

            ComputeGlobalForwardingRulesGetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesGet(req, new ComputeGlobalForwardingRulesGetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesGetSecurityOption1("unde", "assumenda") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.forwardingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalForwardingRulesInsert

Creates a GlobalForwardingRule resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesInsertRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesInsertResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ForwardingRule;
import org.openapis.openapi.models.shared.ForwardingRuleIPProtocolEnum;
import org.openapis.openapi.models.shared.ForwardingRuleIpVersionEnum;
import org.openapis.openapi.models.shared.ForwardingRuleLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.ForwardingRuleNetworkTierEnum;
import org.openapis.openapi.models.shared.ForwardingRulePscConnectionStatusEnum;
import org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration;
import org.openapis.openapi.models.shared.MetadataFilter;
import org.openapis.openapi.models.shared.MetadataFilterFilterMatchCriteriaEnum;
import org.openapis.openapi.models.shared.MetadataFilterLabelMatch;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesInsertRequest req = new ComputeGlobalForwardingRulesInsertRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "accusamus";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ICMP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "provident";
                    baseForwardingRule = "nostrum";
                    creationTimestamp = "dolor";
                    description = "quod";
                    fingerprint = "consequatur";
                    id = "accusantium";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV4;
                    isMirroringCollector = false;
                    kind = "illo";
                    labelFingerprint = "amet";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quos", "aliquid");
                        put("sequi", "culpa");
                        put("fuga", "modi");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Travis Bernhard";
                                    value = "explicabo";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Willie Weissnat";
                                    value = "ullam";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Dr. Rex Graham";
                                    value = "distinctio";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Jackie Schmitt";
                                    value = "iure";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Clyde Waelchi";
                                    value = "veniam";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ronald Koch";
                                    value = "quisquam";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Mrs. Brendan Kemmer";
                                    value = "mollitia";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ms. Johnnie Krajcik";
                                    value = "dicta";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Melvin Grimes";
                                    value = "sit";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Paul Mayert V";
                                    value = "possimus";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                    }};
                    name = "Rodolfo Champlin";
                    network = "earum";
                    networkTier = ForwardingRuleNetworkTierEnum.FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "repudiandae";
                    ports = new String[]{{
                        add("consequatur"),
                    }};
                    pscConnectionId = "nemo";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.PENDING;
                    region = "numquam";
                    selfLink = "numquam";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "molestias";
                            service = "amet";
                            serviceDirectoryRegion = "enim";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "illum";
                            service = "sed";
                            serviceDirectoryRegion = "adipisci";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "reprehenderit";
                            service = "id";
                            serviceDirectoryRegion = "ducimus";
                        }}),
                    }};
                    serviceLabel = "dolores";
                    serviceName = "asperiores";
                    sourceIpRanges = new String[]{{
                        add("doloremque"),
                        add("blanditiis"),
                        add("magnam"),
                    }};
                    subnetwork = "excepturi";
                    target = "fugiat";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "assumenda";
                key = "quaerat";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "optio";
                uploadType = "soluta";
                uploadProtocol = "dignissimos";
                userIp = "nemo";
            }};            

            ComputeGlobalForwardingRulesInsertResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesInsert(req, new ComputeGlobalForwardingRulesInsertSecurity() {{
                option1 = new ComputeGlobalForwardingRulesInsertSecurityOption1("neque", "esse") {{
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

## computeGlobalForwardingRulesList

Retrieves a list of GlobalForwardingRule resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesListRequest req = new ComputeGlobalForwardingRulesListRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quia";
                filter = "maxime";
                key = "excepturi";
                maxResults = 958586L;
                oauthToken = "maiores";
                orderBy = "exercitationem";
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolore";
                returnPartialSuccess = false;
                uploadType = "iste";
                uploadProtocol = "inventore";
                userIp = "error";
            }};            

            ComputeGlobalForwardingRulesListResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesList(req, new ComputeGlobalForwardingRulesListSecurity() {{
                option1 = new ComputeGlobalForwardingRulesListSecurityOption1("id", "harum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.forwardingRuleList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalForwardingRulesPatch

Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesPatchRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesPatchResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ForwardingRule;
import org.openapis.openapi.models.shared.ForwardingRuleIPProtocolEnum;
import org.openapis.openapi.models.shared.ForwardingRuleIpVersionEnum;
import org.openapis.openapi.models.shared.ForwardingRuleLoadBalancingSchemeEnum;
import org.openapis.openapi.models.shared.ForwardingRuleNetworkTierEnum;
import org.openapis.openapi.models.shared.ForwardingRulePscConnectionStatusEnum;
import org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration;
import org.openapis.openapi.models.shared.MetadataFilter;
import org.openapis.openapi.models.shared.MetadataFilterFilterMatchCriteriaEnum;
import org.openapis.openapi.models.shared.MetadataFilterLabelMatch;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesPatchRequest req = new ComputeGlobalForwardingRulesPatchRequest("sapiente", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "vero";
                    ipProtocol = ForwardingRuleIPProtocolEnum.L3_DEFAULT;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "eum";
                    baseForwardingRule = "quasi";
                    creationTimestamp = "tenetur";
                    description = "accusantium";
                    fingerprint = "quo";
                    id = "id";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV4;
                    isMirroringCollector = false;
                    kind = "pariatur";
                    labelFingerprint = "labore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "vero");
                        put("reiciendis", "dicta");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Elmer Lang";
                                    value = "hic";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                    }};
                    name = "Mr. Roy Batz";
                    network = "quia";
                    networkTier = ForwardingRuleNetworkTierEnum.FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "minus";
                    ports = new String[]{{
                        add("veniam"),
                        add("exercitationem"),
                        add("quod"),
                        add("quod"),
                    }};
                    pscConnectionId = "alias";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.NEEDS_ATTENTION;
                    region = "molestias";
                    selfLink = "modi";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "quasi";
                            service = "laudantium";
                            serviceDirectoryRegion = "ut";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "possimus";
                            service = "nihil";
                            serviceDirectoryRegion = "voluptas";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "facere";
                            service = "omnis";
                            serviceDirectoryRegion = "voluptate";
                        }}),
                    }};
                    serviceLabel = "vitae";
                    serviceName = "reiciendis";
                    sourceIpRanges = new String[]{{
                        add("atque"),
                        add("explicabo"),
                        add("sit"),
                        add("eligendi"),
                    }};
                    subnetwork = "commodi";
                    target = "enim";
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "in";
                key = "rerum";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "saepe";
                uploadType = "sit";
                uploadProtocol = "optio";
                userIp = "impedit";
            }};            

            ComputeGlobalForwardingRulesPatchResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesPatch(req, new ComputeGlobalForwardingRulesPatchSecurity() {{
                option1 = new ComputeGlobalForwardingRulesPatchSecurityOption1("corrupti", "quas") {{
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

## computeGlobalForwardingRulesSetLabels

Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesSetLabelsRequest req = new ComputeGlobalForwardingRulesSetLabelsRequest("ullam", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "molestiae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("labore", "nulla");
                        put("accusamus", "consequatur");
                        put("ut", "laborum");
                        put("hic", "sed");
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "quibusdam";
                key = "facere";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "labore";
                uploadProtocol = "commodi";
                userIp = "mollitia";
            }};            

            ComputeGlobalForwardingRulesSetLabelsResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetLabels(req, new ComputeGlobalForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetLabelsSecurityOption1("similique", "quasi") {{
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

## computeGlobalForwardingRulesSetTarget

Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetTargetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetTargetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetTargetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetTargetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesSetTargetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesSetTargetRequest req = new ComputeGlobalForwardingRulesSetTargetRequest("quo", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                targetReference = new TargetReference() {{
                    target = "ea";
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "blanditiis";
                key = "assumenda";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "inventore";
                uploadType = "nesciunt";
                uploadProtocol = "et";
                userIp = "error";
            }};            

            ComputeGlobalForwardingRulesSetTargetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetTarget(req, new ComputeGlobalForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetTargetSecurityOption1("inventore", "vitae") {{
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

## computeGlobalForwardingRulesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalForwardingRulesTestIamPermissionsRequest req = new ComputeGlobalForwardingRulesTestIamPermissionsRequest("qui", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aliquid"),
                        add("eum"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "ab";
                key = "quibusdam";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "delectus";
                uploadProtocol = "explicabo";
                userIp = "iste";
            }};            

            ComputeGlobalForwardingRulesTestIamPermissionsResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesTestIamPermissions(req, new ComputeGlobalForwardingRulesTestIamPermissionsSecurity() {{
                option1 = new ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption1("perferendis", "magnam") {{
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
