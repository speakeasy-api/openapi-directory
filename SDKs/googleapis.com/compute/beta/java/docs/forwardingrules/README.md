# forwardingRules

### Available Operations

* [computeForwardingRulesAggregatedList](#computeforwardingrulesaggregatedlist) - Retrieves an aggregated list of forwarding rules.
* [computeForwardingRulesDelete](#computeforwardingrulesdelete) - Deletes the specified ForwardingRule resource.
* [computeForwardingRulesGet](#computeforwardingrulesget) - Returns the specified ForwardingRule resource.
* [computeForwardingRulesInsert](#computeforwardingrulesinsert) - Creates a ForwardingRule resource in the specified project and region using the data included in the request.
* [computeForwardingRulesList](#computeforwardingruleslist) - Retrieves a list of ForwardingRule resources available to the specified project and region.
* [computeForwardingRulesPatch](#computeforwardingrulespatch) - Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
* [computeForwardingRulesSetLabels](#computeforwardingrulessetlabels) - Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.
* [computeForwardingRulesSetTarget](#computeforwardingrulessettarget) - Changes target URL for forwarding rule. The new target should be of the same type as the old target.
* [computeForwardingRulesTestIamPermissions](#computeforwardingrulestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeForwardingRulesAggregatedList

Retrieves an aggregated list of forwarding rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeForwardingRulesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesAggregatedListRequest req = new ComputeForwardingRulesAggregatedListRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "quo";
                filter = "ullam";
                includeAllScopes = false;
                key = "in";
                maxResults = 986059L;
                oauthToken = "id";
                orderBy = "eum";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "odio";
                returnPartialSuccess = false;
                uploadType = "atque";
                uploadProtocol = "similique";
                userIp = "quia";
            }};            

            ComputeForwardingRulesAggregatedListResponse res = sdk.forwardingRules.computeForwardingRulesAggregatedList(req, new ComputeForwardingRulesAggregatedListSecurity() {{
                option1 = new ComputeForwardingRulesAggregatedListSecurityOption1("architecto", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.forwardingRuleAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeForwardingRulesDelete

Deletes the specified ForwardingRule resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesDeleteRequest req = new ComputeForwardingRulesDeleteRequest("accusamus", "illo", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "minus";
                key = "officia";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "cupiditate";
                uploadType = "veritatis";
                uploadProtocol = "aliquam";
                userIp = "excepturi";
            }};            

            ComputeForwardingRulesDeleteResponse res = sdk.forwardingRules.computeForwardingRulesDelete(req, new ComputeForwardingRulesDeleteSecurity() {{
                option1 = new ComputeForwardingRulesDeleteSecurityOption1("atque", "dicta") {{
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

## computeForwardingRulesGet

Returns the specified ForwardingRule resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeForwardingRulesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesGetRequest req = new ComputeForwardingRulesGetRequest("magnam", "doloremque", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quos";
                key = "id";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "voluptate";
                uploadProtocol = "consequatur";
                userIp = "itaque";
            }};            

            ComputeForwardingRulesGetResponse res = sdk.forwardingRules.computeForwardingRulesGet(req, new ComputeForwardingRulesGetSecurity() {{
                option1 = new ComputeForwardingRulesGetSecurityOption1("repellat", "voluptatem") {{
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

## computeForwardingRulesInsert

Creates a ForwardingRule resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesInsertRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesInsertResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesInsertSecurityOption2;
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

            ComputeForwardingRulesInsertRequest req = new ComputeForwardingRulesInsertRequest("dolor", "distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "a";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ESP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "nihil";
                    baseForwardingRule = "recusandae";
                    creationTimestamp = "numquam";
                    description = "mollitia";
                    fingerprint = "mollitia";
                    id = "blanditiis";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV6;
                    isMirroringCollector = false;
                    kind = "quas";
                    labelFingerprint = "quis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corporis", "iste");
                        put("ea", "autem");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.INTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Lorenzo Hintz";
                                    value = "tempore";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Irma Cummerata";
                    network = "in";
                    networkTier = ForwardingRuleNetworkTierEnum.FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "delectus";
                    ports = new String[]{{
                        add("minus"),
                        add("tenetur"),
                        add("assumenda"),
                    }};
                    pscConnectionId = "exercitationem";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.STATUS_UNSPECIFIED;
                    region = "tempore";
                    selfLink = "laboriosam";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "occaecati";
                            service = "dicta";
                            serviceDirectoryRegion = "quidem";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "omnis";
                            service = "laborum";
                            serviceDirectoryRegion = "molestias";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "a";
                            service = "dignissimos";
                            serviceDirectoryRegion = "labore";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "laudantium";
                            service = "dolore";
                            serviceDirectoryRegion = "aliquid";
                        }}),
                    }};
                    serviceLabel = "repudiandae";
                    serviceName = "aspernatur";
                    sourceIpRanges = new String[]{{
                        add("dolorem"),
                        add("neque"),
                        add("ipsa"),
                        add("excepturi"),
                    }};
                    subnetwork = "repellendus";
                    target = "soluta";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "iure";
                key = "quibusdam";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestId = "nihil";
                uploadType = "ad";
                uploadProtocol = "eligendi";
                userIp = "fuga";
            }};            

            ComputeForwardingRulesInsertResponse res = sdk.forwardingRules.computeForwardingRulesInsert(req, new ComputeForwardingRulesInsertSecurity() {{
                option1 = new ComputeForwardingRulesInsertSecurityOption1("consequatur", "sit") {{
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

## computeForwardingRulesList

Retrieves a list of ForwardingRule resources available to the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeForwardingRulesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesListRequest req = new ComputeForwardingRulesListRequest("iure", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "quo";
                filter = "et";
                key = "illo";
                maxResults = 668881L;
                oauthToken = "quia";
                orderBy = "veniam";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "cum";
                uploadProtocol = "maiores";
                userIp = "provident";
            }};            

            ComputeForwardingRulesListResponse res = sdk.forwardingRules.computeForwardingRulesList(req, new ComputeForwardingRulesListSecurity() {{
                option1 = new ComputeForwardingRulesListSecurityOption1("sunt", "maiores") {{
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

## computeForwardingRulesPatch

Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesPatchRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesPatchResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesPatchSecurityOption2;
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

            ComputeForwardingRulesPatchRequest req = new ComputeForwardingRulesPatchRequest("excepturi", "ducimus", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "molestias";
                    ipProtocol = ForwardingRuleIPProtocolEnum.SCTP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "at";
                    baseForwardingRule = "unde";
                    creationTimestamp = "laborum";
                    description = "provident";
                    fingerprint = "hic";
                    id = "corrupti";
                    ipVersion = ForwardingRuleIpVersionEnum.UNSPECIFIED_VERSION;
                    isMirroringCollector = false;
                    kind = "earum";
                    labelFingerprint = "praesentium";
                    labels = new java.util.HashMap<String, String>() {{
                        put("odit", "illo");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Marion Medhurst";
                                    value = "blanditiis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Deanna Kuhn";
                                    value = "culpa";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Wilbert Shields";
                    network = "optio";
                    networkTier = ForwardingRuleNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "magni";
                    ports = new String[]{{
                        add("voluptatum"),
                        add("dolore"),
                    }};
                    pscConnectionId = "possimus";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.REJECTED;
                    region = "eos";
                    selfLink = "sunt";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "eos";
                            service = "omnis";
                            serviceDirectoryRegion = "reiciendis";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "qui";
                            service = "similique";
                            serviceDirectoryRegion = "eligendi";
                        }}),
                    }};
                    serviceLabel = "numquam";
                    serviceName = "inventore";
                    sourceIpRanges = new String[]{{
                        add("tenetur"),
                        add("exercitationem"),
                        add("nihil"),
                        add("quia"),
                    }};
                    subnetwork = "quis";
                    target = "maiores";
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "sint";
                key = "id";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "itaque";
                uploadType = "aliquam";
                uploadProtocol = "vitae";
                userIp = "temporibus";
            }};            

            ComputeForwardingRulesPatchResponse res = sdk.forwardingRules.computeForwardingRulesPatch(req, new ComputeForwardingRulesPatchSecurity() {{
                option1 = new ComputeForwardingRulesPatchSecurityOption1("voluptatum", "deserunt") {{
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

## computeForwardingRulesSetLabels

Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesSetLabelsRequest req = new ComputeForwardingRulesSetLabelsRequest("aspernatur", "neque", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "neque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("amet", "labore");
                        put("repellat", "eos");
                        put("quibusdam", "repellat");
                        put("mollitia", "quaerat");
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "quam";
                key = "a";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "recusandae";
                uploadType = "iste";
                uploadProtocol = "aspernatur";
                userIp = "aspernatur";
            }};            

            ComputeForwardingRulesSetLabelsResponse res = sdk.forwardingRules.computeForwardingRulesSetLabels(req, new ComputeForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeForwardingRulesSetLabelsSecurityOption1("et", "ipsam") {{
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

## computeForwardingRulesSetTarget

Changes target URL for forwarding rule. The new target should be of the same type as the old target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetTargetRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetTargetResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetTargetSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetTargetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesSetTargetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesSetTargetRequest req = new ComputeForwardingRulesSetTargetRequest("et", "delectus", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                targetReference = new TargetReference() {{
                    target = "in";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "perspiciatis";
                key = "error";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "nesciunt";
                uploadType = "saepe";
                uploadProtocol = "unde";
                userIp = "reiciendis";
            }};            

            ComputeForwardingRulesSetTargetResponse res = sdk.forwardingRules.computeForwardingRulesSetTarget(req, new ComputeForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeForwardingRulesSetTargetSecurityOption1("quis", "modi") {{
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

## computeForwardingRulesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeForwardingRulesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeForwardingRulesTestIamPermissionsRequest req = new ComputeForwardingRulesTestIamPermissionsRequest("adipisci", "pariatur", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("numquam"),
                        add("dolor"),
                    }};
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "quia";
                key = "aspernatur";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "laboriosam";
                uploadProtocol = "accusantium";
                userIp = "tempora";
            }};            

            ComputeForwardingRulesTestIamPermissionsResponse res = sdk.forwardingRules.computeForwardingRulesTestIamPermissions(req, new ComputeForwardingRulesTestIamPermissionsSecurity() {{
                option1 = new ComputeForwardingRulesTestIamPermissionsSecurityOption1("aliquam", "dolorem") {{
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
