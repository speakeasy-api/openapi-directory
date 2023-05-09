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

            ComputeForwardingRulesAggregatedListRequest req = new ComputeForwardingRulesAggregatedListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "perferendis";
                filter = "tempora";
                includeAllScopes = false;
                key = "aliquam";
                maxResults = 99732L;
                oauthToken = "nulla";
                orderBy = "qui";
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "ratione";
                returnPartialSuccess = false;
                uploadType = "soluta";
                uploadProtocol = "quos";
                userIp = "sit";
            }};            

            ComputeForwardingRulesAggregatedListResponse res = sdk.forwardingRules.computeForwardingRulesAggregatedList(req, new ComputeForwardingRulesAggregatedListSecurity() {{
                option1 = new ComputeForwardingRulesAggregatedListSecurityOption1("laudantium", "sit") {{
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

            ComputeForwardingRulesDeleteRequest req = new ComputeForwardingRulesDeleteRequest("perspiciatis", "quaerat", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "laboriosam";
                key = "sit";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "excepturi";
                uploadType = "soluta";
                uploadProtocol = "voluptates";
                userIp = "rerum";
            }};            

            ComputeForwardingRulesDeleteResponse res = sdk.forwardingRules.computeForwardingRulesDelete(req, new ComputeForwardingRulesDeleteSecurity() {{
                option1 = new ComputeForwardingRulesDeleteSecurityOption1("cum", "est") {{
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

            ComputeForwardingRulesGetRequest req = new ComputeForwardingRulesGetRequest("fugiat", "perferendis", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "iure";
                key = "quidem";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "et";
                uploadProtocol = "ipsam";
                userIp = "eos";
            }};            

            ComputeForwardingRulesGetResponse res = sdk.forwardingRules.computeForwardingRulesGet(req, new ComputeForwardingRulesGetSecurity() {{
                option1 = new ComputeForwardingRulesGetSecurityOption1("exercitationem", "minima") {{
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

            ComputeForwardingRulesInsertRequest req = new ComputeForwardingRulesInsertRequest("laudantium", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "fuga";
                    ipProtocol = ForwardingRuleIPProtocolEnum.L3_DEFAULT;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "corporis";
                    baseForwardingRule = "nam";
                    creationTimestamp = "itaque";
                    description = "suscipit";
                    fingerprint = "porro";
                    id = "nulla";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV4;
                    isMirroringCollector = false;
                    kind = "qui";
                    labelFingerprint = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "impedit");
                        put("consectetur", "quis");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL_MANAGED;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Josephine Dibbert";
                                    value = "nihil";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Dennis Koelpin";
                                    value = "minus";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Rose Abernathy";
                                    value = "qui";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Byron Bailey";
                                    value = "quas";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Miranda Abshire";
                                    value = "quis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Gerardo Gislason";
                                    value = "nobis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Glenda Grimes";
                                    value = "ipsam";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Ralph Leffler";
                                    value = "optio";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Josefina Konopelski";
                                    value = "earum";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Mrs. Anne Walker";
                                    value = "nesciunt";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Jacob Treutel DDS";
                                    value = "ullam";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Maria Walter";
                    network = "aspernatur";
                    networkTier = ForwardingRuleNetworkTierEnum.STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "illum";
                    ports = new String[]{{
                        add("porro"),
                    }};
                    pscConnectionId = "iste";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.STATUS_UNSPECIFIED;
                    region = "vitae";
                    selfLink = "impedit";
                    selfLinkWithId = "eligendi";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "aperiam";
                            service = "consectetur";
                            serviceDirectoryRegion = "repellat";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "voluptas";
                            service = "quod";
                            serviceDirectoryRegion = "nesciunt";
                        }}),
                    }};
                    serviceLabel = "iste";
                    serviceName = "distinctio";
                    sourceIpRanges = new String[]{{
                        add("assumenda"),
                        add("alias"),
                        add("deserunt"),
                        add("vel"),
                    }};
                    subnetwork = "qui";
                    target = "perspiciatis";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "nemo";
                key = "quam";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "laudantium";
                uploadType = "nemo";
                uploadProtocol = "ab";
                userIp = "atque";
            }};            

            ComputeForwardingRulesInsertResponse res = sdk.forwardingRules.computeForwardingRulesInsert(req, new ComputeForwardingRulesInsertSecurity() {{
                option1 = new ComputeForwardingRulesInsertSecurityOption1("natus", "culpa") {{
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

            ComputeForwardingRulesListRequest req = new ComputeForwardingRulesListRequest("possimus", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "reprehenderit";
                filter = "animi";
                key = "officia";
                maxResults = 909558L;
                oauthToken = "quae";
                orderBy = "adipisci";
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "dolorem";
                returnPartialSuccess = false;
                uploadType = "adipisci";
                uploadProtocol = "optio";
                userIp = "similique";
            }};            

            ComputeForwardingRulesListResponse res = sdk.forwardingRules.computeForwardingRulesList(req, new ComputeForwardingRulesListSecurity() {{
                option1 = new ComputeForwardingRulesListSecurityOption1("odio", "unde") {{
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

            ComputeForwardingRulesPatchRequest req = new ComputeForwardingRulesPatchRequest("asperiores", "nam", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "recusandae";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ESP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "aut";
                    baseForwardingRule = "neque";
                    creationTimestamp = "quia";
                    description = "soluta";
                    fingerprint = "fuga";
                    id = "qui";
                    ipVersion = ForwardingRuleIpVersionEnum.IPV6;
                    isMirroringCollector = false;
                    kind = "a";
                    labelFingerprint = "temporibus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eum", "rem");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.INTERNAL_SELF_MANAGED;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Mildred Howe";
                                    value = "facilis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Jean Heathcote";
                                    value = "quis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Claude Fisher";
                                    value = "beatae";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Marie Fay";
                                    value = "fugiat";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Natalie Price";
                                    value = "architecto";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ANY;
                        }}),
                    }};
                    name = "Flora Rempel";
                    network = "eius";
                    networkTier = ForwardingRuleNetworkTierEnum.SELECT;
                    noAutomateDnsZone = false;
                    portRange = "dolores";
                    ports = new String[]{{
                        add("reprehenderit"),
                    }};
                    pscConnectionId = "minus";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.CLOSED;
                    region = "odit";
                    selfLink = "maxime";
                    selfLinkWithId = "aspernatur";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "minus";
                            service = "minima";
                            serviceDirectoryRegion = "ipsam";
                        }}),
                    }};
                    serviceLabel = "sequi";
                    serviceName = "quaerat";
                    sourceIpRanges = new String[]{{
                        add("incidunt"),
                    }};
                    subnetwork = "cupiditate";
                    target = "minima";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "quidem";
                key = "harum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "minima";
                uploadType = "reprehenderit";
                uploadProtocol = "quo";
                userIp = "vitae";
            }};            

            ComputeForwardingRulesPatchResponse res = sdk.forwardingRules.computeForwardingRulesPatch(req, new ComputeForwardingRulesPatchSecurity() {{
                option1 = new ComputeForwardingRulesPatchSecurityOption1("voluptates", "tempora") {{
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

            ComputeForwardingRulesSetLabelsRequest req = new ComputeForwardingRulesSetLabelsRequest("iste", "molestias", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "atque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("similique", "qui");
                        put("enim", "quam");
                        put("assumenda", "temporibus");
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "inventore";
                key = "fugit";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "at";
                uploadType = "debitis";
                uploadProtocol = "eum";
                userIp = "non";
            }};            

            ComputeForwardingRulesSetLabelsResponse res = sdk.forwardingRules.computeForwardingRulesSetLabels(req, new ComputeForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeForwardingRulesSetLabelsSecurityOption1("nam", "sapiente") {{
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

            ComputeForwardingRulesSetTargetRequest req = new ComputeForwardingRulesSetTargetRequest("porro", "impedit", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetReference = new TargetReference() {{
                    target = "iure";
                }};;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "aut";
                key = "architecto";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "reiciendis";
                uploadType = "est";
                uploadProtocol = "esse";
                userIp = "iste";
            }};            

            ComputeForwardingRulesSetTargetResponse res = sdk.forwardingRules.computeForwardingRulesSetTarget(req, new ComputeForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeForwardingRulesSetTargetSecurityOption1("ex", "odit") {{
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

            ComputeForwardingRulesTestIamPermissionsRequest req = new ComputeForwardingRulesTestIamPermissionsRequest("voluptatem", "voluptas", "libero") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("consequuntur"),
                        add("quidem"),
                        add("aperiam"),
                        add("animi"),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "quia";
                key = "porro";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "fuga";
                uploadProtocol = "perferendis";
                userIp = "illo";
            }};            

            ComputeForwardingRulesTestIamPermissionsResponse res = sdk.forwardingRules.computeForwardingRulesTestIamPermissions(req, new ComputeForwardingRulesTestIamPermissionsSecurity() {{
                option1 = new ComputeForwardingRulesTestIamPermissionsSecurityOption1("perferendis", "eveniet") {{
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
