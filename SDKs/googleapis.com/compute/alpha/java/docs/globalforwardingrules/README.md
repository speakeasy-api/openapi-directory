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

            ComputeGlobalForwardingRulesDeleteRequest req = new ComputeGlobalForwardingRulesDeleteRequest("dolores", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "totam";
                key = "id";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "vel";
                uploadType = "ipsum";
                uploadProtocol = "occaecati";
                userIp = "pariatur";
            }};            

            ComputeGlobalForwardingRulesDeleteResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesDelete(req, new ComputeGlobalForwardingRulesDeleteSecurity() {{
                option1 = new ComputeGlobalForwardingRulesDeleteSecurityOption1("similique", "quis") {{
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

            ComputeGlobalForwardingRulesGetRequest req = new ComputeGlobalForwardingRulesGetRequest("facilis", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quia";
                key = "facilis";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "illo";
                uploadProtocol = "dolorum";
                userIp = "provident";
            }};            

            ComputeGlobalForwardingRulesGetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesGet(req, new ComputeGlobalForwardingRulesGetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesGetSecurityOption1("incidunt", "maiores") {{
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

            ComputeGlobalForwardingRulesInsertRequest req = new ComputeGlobalForwardingRulesInsertRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "sequi";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ICMP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "autem";
                    baseForwardingRule = "tempora";
                    creationTimestamp = "mollitia";
                    description = "quas";
                    fingerprint = "hic";
                    id = "doloremque";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV6;
                    isMirroringCollector = false;
                    kind = "asperiores";
                    labelFingerprint = "rem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("commodi", "natus");
                        put("beatae", "placeat");
                        put("molestiae", "dolor");
                        put("quia", "nulla");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.INTERNAL_MANAGED;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Saul Maggio";
                                    value = "aliquid";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Shawn O'Kon";
                                    value = "possimus";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Dr. Garrett Hermann";
                                    value = "culpa";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ruby Sauer";
                                    value = "voluptate";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Theodore Leffler";
                                    value = "alias";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Dr. Iris Abbott";
                                    value = "commodi";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Tricia Rosenbaum";
                                    value = "eum";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Stephanie Moen";
                                    value = "omnis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Benny Krajcik";
                                    value = "optio";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Carmen McCullough";
                    network = "fugiat";
                    networkTier = ForwardingRuleNetworkTierEnum.PREMIUM;
                    noAutomateDnsZone = false;
                    portRange = "pariatur";
                    ports = new String[]{{
                        add("deserunt"),
                    }};
                    pscConnectionId = "nobis";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.NEEDS_ATTENTION;
                    region = "placeat";
                    selfLink = "est";
                    selfLinkWithId = "non";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "veniam";
                            service = "minus";
                            serviceDirectoryRegion = "similique";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "corrupti";
                            service = "aliquid";
                            serviceDirectoryRegion = "aliquam";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "error";
                            service = "animi";
                            serviceDirectoryRegion = "ducimus";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "perferendis";
                            service = "impedit";
                            serviceDirectoryRegion = "reiciendis";
                        }}),
                    }};
                    serviceLabel = "quibusdam";
                    serviceName = "veniam";
                    sourceIpRanges = new String[]{{
                        add("commodi"),
                        add("iste"),
                        add("corrupti"),
                        add("iste"),
                    }};
                    subnetwork = "distinctio";
                    target = "in";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "magnam";
                key = "ad";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "iure";
                uploadType = "voluptate";
                uploadProtocol = "illum";
                userIp = "et";
            }};            

            ComputeGlobalForwardingRulesInsertResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesInsert(req, new ComputeGlobalForwardingRulesInsertSecurity() {{
                option1 = new ComputeGlobalForwardingRulesInsertSecurityOption1("perspiciatis", "accusamus") {{
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

            ComputeGlobalForwardingRulesListRequest req = new ComputeGlobalForwardingRulesListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "perspiciatis";
                filter = "consequuntur";
                key = "earum";
                maxResults = 842689L;
                oauthToken = "inventore";
                orderBy = "ut";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "molestias";
                returnPartialSuccess = false;
                uploadType = "fuga";
                uploadProtocol = "odit";
                userIp = "minus";
            }};            

            ComputeGlobalForwardingRulesListResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesList(req, new ComputeGlobalForwardingRulesListSecurity() {{
                option1 = new ComputeGlobalForwardingRulesListSecurityOption1("sunt", "sint") {{
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

            ComputeGlobalForwardingRulesPatchRequest req = new ComputeGlobalForwardingRulesPatchRequest("exercitationem", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "quaerat";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ESP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "officiis";
                    baseForwardingRule = "unde";
                    creationTimestamp = "ullam";
                    description = "enim";
                    fingerprint = "facere";
                    id = "cumque";
                    ipVersion = ForwardingRuleIpVersionEnum.UNSPECIFIED_VERSION;
                    isMirroringCollector = false;
                    kind = "et";
                    labelFingerprint = "praesentium";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eveniet", "est");
                        put("magnam", "unde");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Erma Hagenes";
                                    value = "facere";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Betsy Osinski";
                                    value = "totam";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Hattie Rogahn";
                                    value = "illum";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Wendy Armstrong";
                                    value = "tenetur";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Miss Lena Braun Sr.";
                    network = "veniam";
                    networkTier = ForwardingRuleNetworkTierEnum.PREMIUM;
                    noAutomateDnsZone = false;
                    portRange = "laudantium";
                    ports = new String[]{{
                        add("rerum"),
                    }};
                    pscConnectionId = "nulla";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.NEEDS_ATTENTION;
                    region = "eveniet";
                    selfLink = "repellendus";
                    selfLinkWithId = "enim";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "veniam";
                            service = "voluptatem";
                            serviceDirectoryRegion = "quam";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "vel";
                            service = "aspernatur";
                            serviceDirectoryRegion = "veritatis";
                        }}),
                    }};
                    serviceLabel = "porro";
                    serviceName = "ad";
                    sourceIpRanges = new String[]{{
                        add("doloribus"),
                        add("magnam"),
                        add("nulla"),
                    }};
                    subnetwork = "iusto";
                    target = "adipisci";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "eum";
                key = "modi";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "fugit";
                requestId = "accusantium";
                uploadType = "fuga";
                uploadProtocol = "doloremque";
                userIp = "reprehenderit";
            }};            

            ComputeGlobalForwardingRulesPatchResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesPatch(req, new ComputeGlobalForwardingRulesPatchSecurity() {{
                option1 = new ComputeGlobalForwardingRulesPatchSecurityOption1("dicta", "veritatis") {{
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

            ComputeGlobalForwardingRulesSetLabelsRequest req = new ComputeGlobalForwardingRulesSetLabelsRequest("similique", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "dicta";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "ut");
                        put("deserunt", "dignissimos");
                        put("nulla", "facilis");
                        put("libero", "corrupti");
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "sed";
                key = "assumenda";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "odit";
                uploadProtocol = "eligendi";
                userIp = "earum";
            }};            

            ComputeGlobalForwardingRulesSetLabelsResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetLabels(req, new ComputeGlobalForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetLabelsSecurityOption1("iusto", "atque") {{
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

            ComputeGlobalForwardingRulesSetTargetRequest req = new ComputeGlobalForwardingRulesSetTargetRequest("sunt", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                targetReference = new TargetReference() {{
                    target = "nam";
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "impedit";
                key = "deleniti";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "aspernatur";
                uploadType = "eius";
                uploadProtocol = "accusantium";
                userIp = "nobis";
            }};            

            ComputeGlobalForwardingRulesSetTargetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetTarget(req, new ComputeGlobalForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetTargetSecurityOption1("asperiores", "corporis") {{
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

            ComputeGlobalForwardingRulesTestIamPermissionsRequest req = new ComputeGlobalForwardingRulesTestIamPermissionsRequest("tempora", "voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("blanditiis"),
                        add("hic"),
                        add("blanditiis"),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "a";
                key = "alias";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "totam";
                uploadProtocol = "officiis";
                userIp = "dicta";
            }};            

            ComputeGlobalForwardingRulesTestIamPermissionsResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesTestIamPermissions(req, new ComputeGlobalForwardingRulesTestIamPermissionsSecurity() {{
                option1 = new ComputeGlobalForwardingRulesTestIamPermissionsSecurityOption1("maiores", "dolores") {{
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
