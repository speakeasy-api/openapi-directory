# globalForwardingRules

### Available Operations

* [computeGlobalForwardingRulesDelete](#computeglobalforwardingrulesdelete) - Deletes the specified GlobalForwardingRule resource.
* [computeGlobalForwardingRulesGet](#computeglobalforwardingrulesget) - Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
* [computeGlobalForwardingRulesInsert](#computeglobalforwardingrulesinsert) - Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
* [computeGlobalForwardingRulesList](#computeglobalforwardingruleslist) - Retrieves a list of GlobalForwardingRule resources available to the specified project.
* [computeGlobalForwardingRulesPatch](#computeglobalforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeGlobalForwardingRulesSetLabels](#computeglobalforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
* [computeGlobalForwardingRulesSetTarget](#computeglobalforwardingrulessettarget) - Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.

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

            ComputeGlobalForwardingRulesDeleteRequest req = new ComputeGlobalForwardingRulesDeleteRequest("eligendi", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "autem";
                key = "in";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "cumque";
                uploadType = "dolore";
                uploadProtocol = "optio";
                userIp = "quo";
            }};            

            ComputeGlobalForwardingRulesDeleteResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesDelete(req, new ComputeGlobalForwardingRulesDeleteSecurity() {{
                option1 = new ComputeGlobalForwardingRulesDeleteSecurityOption1("repudiandae", "tempora") {{
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

            ComputeGlobalForwardingRulesGetRequest req = new ComputeGlobalForwardingRulesGetRequest("libero", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "aliquid";
                key = "repellat";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "eligendi";
                uploadProtocol = "ullam";
                userIp = "nihil";
            }};            

            ComputeGlobalForwardingRulesGetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesGet(req, new ComputeGlobalForwardingRulesGetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesGetSecurityOption1("eius", "dignissimos") {{
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

            ComputeGlobalForwardingRulesInsertRequest req = new ComputeGlobalForwardingRulesInsertRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "architecto";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ESP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "corporis";
                    baseForwardingRule = "nihil";
                    creationTimestamp = "officiis";
                    description = "dolore";
                    fingerprint = "magnam";
                    id = "maiores";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV6;
                    isMirroringCollector = false;
                    kind = "dicta";
                    labelFingerprint = "hic";
                    labels = new java.util.HashMap<String, String>() {{
                        put("libero", "consequatur");
                        put("totam", "tempora");
                        put("quo", "dolor");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Samuel Mann";
                                    value = "odit";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ana Hagenes";
                                    value = "tenetur";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Javier Gibson";
                                    value = "facere";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Della Sawayn";
                                    value = "ducimus";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Paula Turner";
                                    value = "cum";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                    }};
                    name = "Jan Torphy";
                    network = "aut";
                    networkTier = ForwardingRuleNetworkTierEnum.FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "libero";
                    ports = new String[]{{
                        add("odio"),
                        add("omnis"),
                        add("officiis"),
                    }};
                    pscConnectionId = "delectus";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.CLOSED;
                    region = "sit";
                    selfLink = "velit";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "nihil";
                            service = "neque";
                            serviceDirectoryRegion = "aspernatur";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "eaque";
                            service = "corporis";
                            serviceDirectoryRegion = "cupiditate";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "aut";
                            service = "impedit";
                            serviceDirectoryRegion = "quod";
                        }}),
                    }};
                    serviceLabel = "quo";
                    serviceName = "architecto";
                    sourceIpRanges = new String[]{{
                        add("perspiciatis"),
                    }};
                    subnetwork = "ea";
                    target = "eius";
                }};;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "beatae";
                key = "sequi";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "debitis";
                uploadType = "quis";
                uploadProtocol = "eaque";
                userIp = "incidunt";
            }};            

            ComputeGlobalForwardingRulesInsertResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesInsert(req, new ComputeGlobalForwardingRulesInsertSecurity() {{
                option1 = new ComputeGlobalForwardingRulesInsertSecurityOption1("ut", "delectus") {{
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

            ComputeGlobalForwardingRulesListRequest req = new ComputeGlobalForwardingRulesListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "eos";
                filter = "assumenda";
                key = "cumque";
                maxResults = 281120L;
                oauthToken = "quae";
                orderBy = "nihil";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "assumenda";
                returnPartialSuccess = false;
                uploadType = "consequatur";
                uploadProtocol = "cumque";
                userIp = "placeat";
            }};            

            ComputeGlobalForwardingRulesListResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesList(req, new ComputeGlobalForwardingRulesListSecurity() {{
                option1 = new ComputeGlobalForwardingRulesListSecurityOption1("adipisci", "tenetur") {{
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

            ComputeGlobalForwardingRulesPatchRequest req = new ComputeGlobalForwardingRulesPatchRequest("non", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "itaque";
                    ipProtocol = ForwardingRuleIPProtocolEnum.UDP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "impedit";
                    baseForwardingRule = "dicta";
                    creationTimestamp = "corporis";
                    description = "impedit";
                    fingerprint = "eveniet";
                    id = "cum";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV4;
                    isMirroringCollector = false;
                    kind = "illum";
                    labelFingerprint = "ea";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quasi", "accusamus");
                        put("animi", "necessitatibus");
                        put("voluptatem", "maiores");
                        put("odio", "veniam");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.INTERNAL_SELF_MANAGED;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Louis O'Connell";
                                    value = "distinctio";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Tracey Rodriguez";
                                    value = "et";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Austin Cremin";
                                    value = "pariatur";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Jon Lockman";
                                    value = "vel";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Miss Elaine Considine";
                                    value = "recusandae";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Marcella McKenzie Sr.";
                                    value = "a";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Leigh Ondricka";
                                    value = "perferendis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Hector Mayer";
                                    value = "fuga";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Erik Champlin";
                                    value = "deleniti";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ada Barrows";
                                    value = "quasi";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                    }};
                    name = "Laura Macejkovic IV";
                    network = "quas";
                    networkTier = ForwardingRuleNetworkTierEnum.STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "laudantium";
                    ports = new String[]{{
                        add("minus"),
                        add("autem"),
                        add("vel"),
                        add("beatae"),
                    }};
                    pscConnectionId = "quos";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.CLOSED;
                    region = "soluta";
                    selfLink = "tenetur";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "perspiciatis";
                            service = "suscipit";
                            serviceDirectoryRegion = "ullam";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "unde";
                            service = "debitis";
                            serviceDirectoryRegion = "quidem";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "magnam";
                            service = "doloremque";
                            serviceDirectoryRegion = "accusamus";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "quod";
                            service = "sunt";
                            serviceDirectoryRegion = "voluptas";
                        }}),
                    }};
                    serviceLabel = "earum";
                    serviceName = "est";
                    sourceIpRanges = new String[]{{
                        add("nihil"),
                        add("nostrum"),
                        add("rerum"),
                        add("perferendis"),
                    }};
                    subnetwork = "nam";
                    target = "ullam";
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "modi";
                key = "illum";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "reprehenderit";
                uploadType = "eligendi";
                uploadProtocol = "cum";
                userIp = "culpa";
            }};            

            ComputeGlobalForwardingRulesPatchResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesPatch(req, new ComputeGlobalForwardingRulesPatchSecurity() {{
                option1 = new ComputeGlobalForwardingRulesPatchSecurityOption1("culpa", "a") {{
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

            ComputeGlobalForwardingRulesSetLabelsRequest req = new ComputeGlobalForwardingRulesSetLabelsRequest("magnam", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "quia";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quaerat", "voluptatum");
                        put("numquam", "explicabo");
                        put("eligendi", "cupiditate");
                        put("tempore", "odit");
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "explicabo";
                key = "nulla";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "necessitatibus";
                uploadProtocol = "voluptatum";
                userIp = "quasi";
            }};            

            ComputeGlobalForwardingRulesSetLabelsResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetLabels(req, new ComputeGlobalForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetLabelsSecurityOption1("mollitia", "voluptatum") {{
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

            ComputeGlobalForwardingRulesSetTargetRequest req = new ComputeGlobalForwardingRulesSetTargetRequest("blanditiis", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                targetReference = new TargetReference() {{
                    target = "incidunt";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "nihil";
                key = "ratione";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "quod";
                uploadType = "nulla";
                uploadProtocol = "tempora";
                userIp = "quam";
            }};            

            ComputeGlobalForwardingRulesSetTargetResponse res = sdk.globalForwardingRules.computeGlobalForwardingRulesSetTarget(req, new ComputeGlobalForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeGlobalForwardingRulesSetTargetSecurityOption1("consectetur", "nemo") {{
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
