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

            ComputeForwardingRulesAggregatedListRequest req = new ComputeForwardingRulesAggregatedListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "neque";
                filter = "quod";
                includeAllScopes = false;
                key = "eos";
                maxResults = 186L;
                oauthToken = "ad";
                orderBy = "a";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "id";
                returnPartialSuccess = false;
                uploadType = "atque";
                uploadProtocol = "quaerat";
                userIp = "aperiam";
            }};            

            ComputeForwardingRulesAggregatedListResponse res = sdk.forwardingRules.computeForwardingRulesAggregatedList(req, new ComputeForwardingRulesAggregatedListSecurity() {{
                option1 = new ComputeForwardingRulesAggregatedListSecurityOption1("dignissimos", "quam") {{
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

            ComputeForwardingRulesDeleteRequest req = new ComputeForwardingRulesDeleteRequest("modi", "fuga", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolor";
                key = "ad";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "molestias";
                uploadType = "voluptas";
                uploadProtocol = "expedita";
                userIp = "voluptas";
            }};            

            ComputeForwardingRulesDeleteResponse res = sdk.forwardingRules.computeForwardingRulesDelete(req, new ComputeForwardingRulesDeleteSecurity() {{
                option1 = new ComputeForwardingRulesDeleteSecurityOption1("maiores", "ea") {{
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

            ComputeForwardingRulesGetRequest req = new ComputeForwardingRulesGetRequest("vel", "delectus", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "accusantium";
                fields = "voluptates";
                key = "provident";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "numquam";
                uploadProtocol = "non";
                userIp = "cum";
            }};            

            ComputeForwardingRulesGetResponse res = sdk.forwardingRules.computeForwardingRulesGet(req, new ComputeForwardingRulesGetSecurity() {{
                option1 = new ComputeForwardingRulesGetSecurityOption1("incidunt", "dolores") {{
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

            ComputeForwardingRulesInsertRequest req = new ComputeForwardingRulesInsertRequest("enim", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                forwardingRule = new ForwardingRule() {{
                    ipAddress = "omnis";
                    ipProtocol = ForwardingRuleIPProtocolEnum.L3_DEFAULT;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "eos";
                    baseForwardingRule = "quisquam";
                    creationTimestamp = "corrupti";
                    description = "repellendus";
                    fingerprint = "cum";
                    id = "quibusdam";
                    ipVersion = ForwardingRuleIpVersionEnum.UNSPECIFIED_VERSION;
                    isMirroringCollector = false;
                    kind = "commodi";
                    labelFingerprint = "similique";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "recusandae");
                        put("sapiente", "id");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.EXTERNAL;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Roy Hermiston";
                                    value = "pariatur";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Harriet Moore";
                                    value = "animi";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Allison Wiza";
                                    value = "dolorem";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.NOT_SET;
                        }}),
                    }};
                    name = "Thomas Hahn";
                    network = "dolore";
                    networkTier = ForwardingRuleNetworkTierEnum.FIXED_STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "illum";
                    ports = new String[]{{
                        add("culpa"),
                        add("dicta"),
                    }};
                    pscConnectionId = "atque";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.CLOSED;
                    region = "vitae";
                    selfLink = "quisquam";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "nihil";
                            service = "culpa";
                            serviceDirectoryRegion = "temporibus";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "a";
                            service = "ad";
                            serviceDirectoryRegion = "cupiditate";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "suscipit";
                            service = "reiciendis";
                            serviceDirectoryRegion = "repellendus";
                        }}),
                    }};
                    serviceLabel = "delectus";
                    serviceName = "ab";
                    sourceIpRanges = new String[]{{
                        add("possimus"),
                        add("praesentium"),
                        add("neque"),
                    }};
                    subnetwork = "quam";
                    target = "animi";
                }};;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "quisquam";
                key = "vitae";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "sint";
                uploadType = "eligendi";
                uploadProtocol = "occaecati";
                userIp = "quis";
            }};            

            ComputeForwardingRulesInsertResponse res = sdk.forwardingRules.computeForwardingRulesInsert(req, new ComputeForwardingRulesInsertSecurity() {{
                option1 = new ComputeForwardingRulesInsertSecurityOption1("tempore", "officia") {{
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

            ComputeForwardingRulesListRequest req = new ComputeForwardingRulesListRequest("iste", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "sapiente";
                filter = "deserunt";
                key = "dolor";
                maxResults = 940951L;
                oauthToken = "iure";
                orderBy = "sint";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "iste";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "ab";
                userIp = "fuga";
            }};            

            ComputeForwardingRulesListResponse res = sdk.forwardingRules.computeForwardingRulesList(req, new ComputeForwardingRulesListSecurity() {{
                option1 = new ComputeForwardingRulesListSecurityOption1("a", "dolor") {{
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

            ComputeForwardingRulesPatchRequest req = new ComputeForwardingRulesPatchRequest("voluptatum", "molestias", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                forwardingRule1 = new ForwardingRule() {{
                    ipAddress = "eaque";
                    ipProtocol = ForwardingRuleIPProtocolEnum.ESP;
                    allPorts = false;
                    allowGlobalAccess = false;
                    allowPscGlobalAccess = false;
                    backendService = "autem";
                    baseForwardingRule = "vitae";
                    creationTimestamp = "numquam";
                    description = "incidunt";
                    fingerprint = "modi";
                    id = "quos";
                    ipVersion = ForwardingRuleIpVersionEnum.UNSPECIFIED_VERSION;
                    isMirroringCollector = false;
                    kind = "voluptate";
                    labelFingerprint = "error";
                    labels = new java.util.HashMap<String, String>() {{
                        put("reprehenderit", "animi");
                        put("consequatur", "voluptates");
                    }};
                    loadBalancingScheme = ForwardingRuleLoadBalancingSchemeEnum.INVALID;
                    metadataFilters = new org.openapis.openapi.models.shared.MetadataFilter[]{{
                        add(new MetadataFilter() {{
                            filterLabels = new org.openapis.openapi.models.shared.MetadataFilterLabelMatch[]{{
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Mr. Edna Howe";
                                    value = "debitis";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Bradford Vandervort";
                                    value = "adipisci";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Kathleen Harris";
                                    value = "possimus";
                                }}),
                                add(new MetadataFilterLabelMatch() {{
                                    name = "Patti Cole";
                                    value = "delectus";
                                }}),
                            }};
                            filterMatchCriteria = MetadataFilterFilterMatchCriteriaEnum.MATCH_ALL;
                        }}),
                    }};
                    name = "Ralph Hermann";
                    network = "voluptates";
                    networkTier = ForwardingRuleNetworkTierEnum.STANDARD;
                    noAutomateDnsZone = false;
                    portRange = "est";
                    ports = new String[]{{
                        add("illo"),
                        add("voluptate"),
                    }};
                    pscConnectionId = "consequatur";
                    pscConnectionStatus = ForwardingRulePscConnectionStatusEnum.STATUS_UNSPECIFIED;
                    region = "incidunt";
                    selfLink = "dolore";
                    serviceDirectoryRegistrations = new org.openapis.openapi.models.shared.ForwardingRuleServiceDirectoryRegistration[]{{
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "est";
                            service = "quo";
                            serviceDirectoryRegion = "maxime";
                        }}),
                        add(new ForwardingRuleServiceDirectoryRegistration() {{
                            namespace = "delectus";
                            service = "laboriosam";
                            serviceDirectoryRegion = "laboriosam";
                        }}),
                    }};
                    serviceLabel = "quam";
                    serviceName = "fuga";
                    sourceIpRanges = new String[]{{
                        add("repellat"),
                        add("cupiditate"),
                        add("soluta"),
                    }};
                    subnetwork = "tempore";
                    target = "culpa";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "ad";
                key = "sapiente";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "nesciunt";
                uploadType = "ab";
                uploadProtocol = "quibusdam";
                userIp = "suscipit";
            }};            

            ComputeForwardingRulesPatchResponse res = sdk.forwardingRules.computeForwardingRulesPatch(req, new ComputeForwardingRulesPatchSecurity() {{
                option1 = new ComputeForwardingRulesPatchSecurityOption1("quidem", "delectus") {{
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

            ComputeForwardingRulesSetLabelsRequest req = new ComputeForwardingRulesSetLabelsRequest("nemo", "cumque", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "atque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("expedita", "rerum");
                        put("totam", "quod");
                        put("aspernatur", "eaque");
                        put("impedit", "nam");
                    }};
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "delectus";
                fields = "minus";
                key = "ut";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "eos";
                uploadType = "veniam";
                uploadProtocol = "repudiandae";
                userIp = "sint";
            }};            

            ComputeForwardingRulesSetLabelsResponse res = sdk.forwardingRules.computeForwardingRulesSetLabels(req, new ComputeForwardingRulesSetLabelsSecurity() {{
                option1 = new ComputeForwardingRulesSetLabelsSecurityOption1("occaecati", "debitis") {{
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

            ComputeForwardingRulesSetTargetRequest req = new ComputeForwardingRulesSetTargetRequest("laboriosam", "eos", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                targetReference = new TargetReference() {{
                    target = "porro";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "tempore";
                key = "in";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "tenetur";
                uploadType = "recusandae";
                uploadProtocol = "expedita";
                userIp = "iusto";
            }};            

            ComputeForwardingRulesSetTargetResponse res = sdk.forwardingRules.computeForwardingRulesSetTarget(req, new ComputeForwardingRulesSetTargetSecurity() {{
                option1 = new ComputeForwardingRulesSetTargetSecurityOption1("esse", "harum") {{
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
