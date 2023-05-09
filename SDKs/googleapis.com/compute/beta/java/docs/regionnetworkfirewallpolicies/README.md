# regionNetworkFirewallPolicies

### Available Operations

* [computeRegionNetworkFirewallPoliciesAddAssociation](#computeregionnetworkfirewallpoliciesaddassociation) - Inserts an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesAddRule](#computeregionnetworkfirewallpoliciesaddrule) - Inserts a rule into a network firewall policy.
* [computeRegionNetworkFirewallPoliciesCloneRules](#computeregionnetworkfirewallpoliciesclonerules) - Copies rules to the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesDelete](#computeregionnetworkfirewallpoliciesdelete) - Deletes the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGet](#computeregionnetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesGetAssociation](#computeregionnetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls](#computeregionnetworkfirewallpoliciesgeteffectivefirewalls) - Returns the effective firewalls on a given network.
* [computeRegionNetworkFirewallPoliciesGetIamPolicy](#computeregionnetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionNetworkFirewallPoliciesGetRule](#computeregionnetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesInsert](#computeregionnetworkfirewallpoliciesinsert) - Creates a new network firewall policy in the specified project and region.
* [computeRegionNetworkFirewallPoliciesList](#computeregionnetworkfirewallpolicieslist) - Lists all the network firewall policies that have been configured for the specified project in the given region.
* [computeRegionNetworkFirewallPoliciesPatch](#computeregionnetworkfirewallpoliciespatch) - Patches the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesPatchRule](#computeregionnetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesRemoveAssociation](#computeregionnetworkfirewallpoliciesremoveassociation) - Removes an association for the specified network firewall policy.
* [computeRegionNetworkFirewallPoliciesRemoveRule](#computeregionnetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeRegionNetworkFirewallPoliciesSetIamPolicy](#computeregionnetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionNetworkFirewallPoliciesTestIamPermissions](#computeregionnetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionNetworkFirewallPoliciesAddAssociation

Inserts an association for the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesAddAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesAddAssociationRequest("nemo", "corporis", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "laudantium";
                    displayName = "assumenda";
                    firewallPolicyId = "eos";
                    name = "Crystal Considine";
                    shortName = "pariatur";
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "error";
                key = "esse";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "molestias";
                replaceExistingAssociation = false;
                requestId = "numquam";
                uploadType = "vero";
                uploadProtocol = "excepturi";
                userIp = "ut";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddAssociation(req, new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1("error", "soluta") {{
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

## computeRegionNetworkFirewallPoliciesAddRule

Inserts a rule into a network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesAddRuleRequest req = new ComputeRegionNetworkFirewallPoliciesAddRuleRequest("itaque", "velit", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "minima";
                    description = "in";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "perferendis";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("tempore"),
                            add("quibusdam"),
                            add("non"),
                            add("doloremque"),
                        }};
                        destFqdns = new String[]{{
                            add("nam"),
                            add("sit"),
                            add("dolores"),
                            add("laboriosam"),
                        }};
                        destIpRanges = new String[]{{
                            add("ea"),
                            add("occaecati"),
                        }};
                        destRegionCodes = new String[]{{
                            add("ipsam"),
                            add("aliquid"),
                            add("laudantium"),
                            add("harum"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("aut"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "atque";
                                ports = new String[]{{
                                    add("commodi"),
                                    add("inventore"),
                                    add("non"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "est";
                                ports = new String[]{{
                                    add("non"),
                                    add("officiis"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("vero"),
                            add("sit"),
                        }};
                        srcFqdns = new String[]{{
                            add("eligendi"),
                            add("ullam"),
                            add("deleniti"),
                        }};
                        srcIpRanges = new String[]{{
                            add("magnam"),
                            add("impedit"),
                            add("aut"),
                            add("debitis"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("saepe"),
                            add("possimus"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Ivan Kshlerin";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Essie Goldner";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("quam"),
                            add("sit"),
                            add("pariatur"),
                        }};
                    }};;
                    priority = 479878;
                    ruleName = "pariatur";
                    ruleTupleCount = 99845;
                    targetResources = new String[]{{
                        add("nisi"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Antonia Emmerich";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Seth Schmidt";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Ms. Ebony Schulist";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Kristi Hirthe";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("velit"),
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "minus";
                key = "architecto";
                maxPriority = 646350L;
                minPriority = 813834L;
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "dolorem";
                uploadType = "tempore";
                uploadProtocol = "earum";
                userIp = "suscipit";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddRule(req, new ComputeRegionNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1("et", "expedita") {{
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

## computeRegionNetworkFirewallPoliciesCloneRules

Copies rules to the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesCloneRulesRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesCloneRulesResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesCloneRulesRequest req = new ComputeRegionNetworkFirewallPoliciesCloneRulesRequest("molestiae", "aliquam", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "recusandae";
                key = "fugiat";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "alias";
                sourceFirewallPolicy = "numquam";
                uploadType = "laboriosam";
                uploadProtocol = "impedit";
                userIp = "tempora";
            }};            

            ComputeRegionNetworkFirewallPoliciesCloneRulesResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesCloneRules(req, new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1("ipsum", "quo") {{
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

## computeRegionNetworkFirewallPoliciesDelete

Deletes the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesDeleteRequest req = new ComputeRegionNetworkFirewallPoliciesDeleteRequest("nihil", "eos", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "eius";
                key = "alias";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "itaque";
                uploadType = "error";
                uploadProtocol = "maxime";
                userIp = "excepturi";
            }};            

            ComputeRegionNetworkFirewallPoliciesDeleteResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesDelete(req, new ComputeRegionNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1("earum", "rem") {{
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

## computeRegionNetworkFirewallPoliciesGet

Returns the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesGetRequest req = new ComputeRegionNetworkFirewallPoliciesGetRequest("modi", "omnis", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "saepe";
                key = "earum";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quas";
                uploadProtocol = "velit";
                userIp = "similique";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGet(req, new ComputeRegionNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetSecurityOption1("quam", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesGetAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesGetAssociationRequest("suscipit", "sint", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "hic";
                key = "iusto";
                name = "Eugene Fritsch";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ratione";
                uploadProtocol = "minima";
                userIp = "voluptatum";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetAssociation(req, new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1("quae", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyAssociation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls

Returns the effective firewalls on a given network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest req = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest("nihil", "optio", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "a";
                key = "dicta";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "reprehenderit";
                uploadProtocol = "fugit";
                userIp = "qui";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls(req, new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1("qui", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionNetworkFirewallPoliciesGetEffectiveFirewallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest("suscipit", "recusandae", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "magnam";
                key = "et";
                oauthToken = "eaque";
                optionsRequestedPolicyVersion = 301548L;
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "odit";
                uploadProtocol = "accusamus";
                userIp = "perspiciatis";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1("nam", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesGetRuleRequest req = new ComputeRegionNetworkFirewallPoliciesGetRuleRequest("atque", "quasi", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "animi";
                fields = "optio";
                key = "expedita";
                oauthToken = "id";
                prettyPrint = false;
                priority = 212463L;
                quotaUser = "eius";
                uploadType = "impedit";
                uploadProtocol = "occaecati";
                userIp = "aliquid";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetRule(req, new ComputeRegionNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1("expedita", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesInsert

Creates a new network firewall policy in the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesInsertRequest req = new ComputeRegionNetworkFirewallPoliciesInsertRequest("modi", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "hic";
                            displayName = "quas";
                            firewallPolicyId = "mollitia";
                            name = "Pauline Mann";
                            shortName = "saepe";
                        }}),
                    }};
                    creationTimestamp = "dolore";
                    description = "rerum";
                    displayName = "unde";
                    fingerprint = "error";
                    id = "explicabo";
                    kind = "excepturi";
                    name = "Don Schmitt";
                    parent = "nihil";
                    region = "aspernatur";
                    ruleTupleCount = 916408;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "illo";
                            description = "voluptas";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "atque";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("autem"),
                                }};
                                destFqdns = new String[]{{
                                    add("tempore"),
                                    add("omnis"),
                                    add("doloremque"),
                                }};
                                destIpRanges = new String[]{{
                                    add("consequuntur"),
                                    add("a"),
                                    add("eum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("unde"),
                                    add("possimus"),
                                    add("perferendis"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("impedit"),
                                    add("quibusdam"),
                                    add("neque"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "illo";
                                        ports = new String[]{{
                                            add("quidem"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "repellat";
                                        ports = new String[]{{
                                            add("illum"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ab";
                                        ports = new String[]{{
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "vero";
                                        ports = new String[]{{
                                            add("fugit"),
                                            add("totam"),
                                            add("illum"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("consequuntur"),
                                    add("provident"),
                                    add("unde"),
                                }};
                                srcFqdns = new String[]{{
                                    add("quod"),
                                    add("ea"),
                                    add("dignissimos"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("adipisci"),
                                    add("in"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("vero"),
                                    add("at"),
                                    add("porro"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Vincent Fritsch II";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ernesto Stehr DDS";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("molestias"),
                                    add("ab"),
                                }};
                            }};
                            priority = 46;
                            ruleName = "molestiae";
                            ruleTupleCount = 357206;
                            targetResources = new String[]{{
                                add("accusantium"),
                                add("esse"),
                                add("consequuntur"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Diana Spencer";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jan Weber";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Lynn Schmeler";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mr. Juan Dickinson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("qui"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "earum";
                            description = "necessitatibus";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "atque";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("velit"),
                                    add("hic"),
                                }};
                                destFqdns = new String[]{{
                                    add("tempore"),
                                }};
                                destIpRanges = new String[]{{
                                    add("quaerat"),
                                    add("ex"),
                                    add("perspiciatis"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("quas"),
                                    add("vel"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("temporibus"),
                                    add("consequatur"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nulla";
                                        ports = new String[]{{
                                            add("quas"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "harum";
                                        ports = new String[]{{
                                            add("hic"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "amet";
                                        ports = new String[]{{
                                            add("veniam"),
                                            add("amet"),
                                            add("ad"),
                                            add("provident"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("molestias"),
                                }};
                                srcFqdns = new String[]{{
                                    add("maxime"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("culpa"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("suscipit"),
                                    add("corrupti"),
                                    add("facilis"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Stuart Fahey";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Kara Schamberger";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Terrence Bergstrom";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("quis"),
                                }};
                            }};
                            priority = 572410;
                            ruleName = "deserunt";
                            ruleTupleCount = 825241;
                            targetResources = new String[]{{
                                add("temporibus"),
                                add("tempore"),
                                add("consequuntur"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Carroll Murray";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("ut"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "perspiciatis";
                            description = "dolore";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "distinctio";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("qui"),
                                    add("est"),
                                }};
                                destFqdns = new String[]{{
                                    add("ab"),
                                }};
                                destIpRanges = new String[]{{
                                    add("voluptatibus"),
                                    add("possimus"),
                                    add("tempore"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("perspiciatis"),
                                    add("pariatur"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("minus"),
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quidem";
                                        ports = new String[]{{
                                            add("esse"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "laudantium";
                                        ports = new String[]{{
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "tempore";
                                        ports = new String[]{{
                                            add("facere"),
                                            add("cupiditate"),
                                            add("possimus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "animi";
                                        ports = new String[]{{
                                            add("hic"),
                                            add("ratione"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("laborum"),
                                    add("ad"),
                                }};
                                srcFqdns = new String[]{{
                                    add("suscipit"),
                                    add("odit"),
                                    add("saepe"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sint"),
                                    add("enim"),
                                    add("maiores"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("a"),
                                    add("consequuntur"),
                                    add("perspiciatis"),
                                    add("quam"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Elias Boehm";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Tanya Schultz";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ullam"),
                                }};
                            }};
                            priority = 507116;
                            ruleName = "facilis";
                            ruleTupleCount = 627965;
                            targetResources = new String[]{{
                                add("sapiente"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Pat Greenholt";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Marlon Anderson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Cesar Terry";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Archie Schmidt";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("odit"),
                                add("molestiae"),
                                add("hic"),
                                add("suscipit"),
                            }};
                        }}),
                    }};
                    selfLink = "harum";
                    selfLinkWithId = "culpa";
                    shortName = "adipisci";
                }};;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "veritatis";
                key = "quis";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "autem";
                requestId = "blanditiis";
                uploadType = "ipsum";
                uploadProtocol = "perferendis";
                userIp = "vero";
            }};            

            ComputeRegionNetworkFirewallPoliciesInsertResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesInsert(req, new ComputeRegionNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1("quos", "beatae") {{
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

## computeRegionNetworkFirewallPoliciesList

Lists all the network firewall policies that have been configured for the specified project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesListRequest req = new ComputeRegionNetworkFirewallPoliciesListRequest("molestias", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "voluptate";
                filter = "omnis";
                key = "totam";
                maxResults = 952308L;
                oauthToken = "hic";
                orderBy = "iusto";
                pageToken = "sit";
                prettyPrint = false;
                quotaUser = "similique";
                returnPartialSuccess = false;
                uploadType = "sint";
                uploadProtocol = "facere";
                userIp = "repellat";
            }};            

            ComputeRegionNetworkFirewallPoliciesListResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesList(req, new ComputeRegionNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesListSecurityOption1("hic", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesPatch

Patches the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesPatchRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRequest("eligendi", "veniam", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "sit";
                            displayName = "non";
                            firewallPolicyId = "soluta";
                            name = "Jeannie Stehr MD";
                            shortName = "aspernatur";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "minima";
                            displayName = "repudiandae";
                            firewallPolicyId = "suscipit";
                            name = "Glenda Stanton";
                            shortName = "quis";
                        }}),
                    }};
                    creationTimestamp = "et";
                    description = "eaque";
                    displayName = "dolore";
                    fingerprint = "quas";
                    id = "quisquam";
                    kind = "perferendis";
                    name = "Hope Kautzer";
                    parent = "tempore";
                    region = "ea";
                    ruleTupleCount = 37278;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "dignissimos";
                            description = "ea";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "vero";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("deleniti"),
                                }};
                                destFqdns = new String[]{{
                                    add("facere"),
                                    add("odio"),
                                    add("repudiandae"),
                                    add("quibusdam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("consequuntur"),
                                    add("corporis"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("et"),
                                    add("quia"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("atque"),
                                    add("delectus"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "veniam";
                                        ports = new String[]{{
                                            add("ad"),
                                            add("excepturi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "iure";
                                        ports = new String[]{{
                                            add("officiis"),
                                            add("rerum"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("esse"),
                                    add("reprehenderit"),
                                    add("molestias"),
                                }};
                                srcFqdns = new String[]{{
                                    add("dolor"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sapiente"),
                                    add("molestias"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("eius"),
                                    add("ex"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Teresa Stokes";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("voluptatibus"),
                                    add("iure"),
                                    add("vero"),
                                    add("officia"),
                                }};
                            }};
                            priority = 795518;
                            ruleName = "molestiae";
                            ruleTupleCount = 25164;
                            targetResources = new String[]{{
                                add("beatae"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Pedro Leffler";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("eos"),
                                add("ducimus"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "excepturi";
                            description = "tempora";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "tempora";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("expedita"),
                                    add("occaecati"),
                                    add("nesciunt"),
                                }};
                                destFqdns = new String[]{{
                                    add("aspernatur"),
                                }};
                                destIpRanges = new String[]{{
                                    add("illo"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("accusamus"),
                                    add("vel"),
                                    add("illum"),
                                    add("dicta"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("inventore"),
                                    add("voluptatum"),
                                    add("quis"),
                                    add("eaque"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "modi";
                                        ports = new String[]{{
                                            add("odit"),
                                            add("qui"),
                                            add("magni"),
                                            add("quia"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "hic";
                                        ports = new String[]{{
                                            add("minus"),
                                            add("sed"),
                                            add("ipsam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quidem";
                                        ports = new String[]{{
                                            add("odit"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("fuga"),
                                    add("omnis"),
                                    add("hic"),
                                    add("voluptates"),
                                }};
                                srcFqdns = new String[]{{
                                    add("expedita"),
                                    add("explicabo"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("maiores"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("molestias"),
                                    add("quaerat"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Marcella Denesik";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Myrtle Dooley";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Malcolm Muller";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("eius"),
                                    add("amet"),
                                    add("fugiat"),
                                }};
                            }};
                            priority = 338978;
                            ruleName = "fugit";
                            ruleTupleCount = 548022;
                            targetResources = new String[]{{
                                add("dignissimos"),
                                add("quidem"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Grace Schmidt";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Vicki Hoppe";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Brandy Waelchi";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Joanna Beier";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("amet"),
                            }};
                        }}),
                    }};
                    selfLink = "minima";
                    selfLinkWithId = "laudantium";
                    shortName = "fuga";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "cupiditate";
                key = "architecto";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "laudantium";
                uploadType = "maiores";
                uploadProtocol = "animi";
                userIp = "tempora";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatch(req, new ComputeRegionNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1("adipisci", "officiis") {{
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

## computeRegionNetworkFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesPatchRuleRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRuleRequest("praesentium", "perferendis", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "voluptate";
                    description = "nulla";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "magnam";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("magni"),
                            add("sit"),
                            add("animi"),
                            add("molestias"),
                        }};
                        destFqdns = new String[]{{
                            add("iusto"),
                            add("similique"),
                            add("delectus"),
                            add("et"),
                        }};
                        destIpRanges = new String[]{{
                            add("nobis"),
                            add("voluptatibus"),
                        }};
                        destRegionCodes = new String[]{{
                            add("asperiores"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("est"),
                            add("illum"),
                            add("id"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "fuga";
                                ports = new String[]{{
                                    add("necessitatibus"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "vero";
                                ports = new String[]{{
                                    add("quia"),
                                    add("facilis"),
                                    add("aliquid"),
                                    add("saepe"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("nam"),
                            add("voluptatem"),
                        }};
                        srcFqdns = new String[]{{
                            add("rem"),
                            add("delectus"),
                            add("unde"),
                        }};
                        srcIpRanges = new String[]{{
                            add("commodi"),
                            add("ducimus"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("provident"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Charlie Leuschke";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("ipsam"),
                            add("error"),
                            add("nam"),
                            add("culpa"),
                        }};
                    }};;
                    priority = 615365;
                    ruleName = "sunt";
                    ruleTupleCount = 38461;
                    targetResources = new String[]{{
                        add("esse"),
                        add("facere"),
                        add("laborum"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Sabrina Rippin";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Mr. Susan McGlynn";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("laudantium"),
                        add("illo"),
                        add("suscipit"),
                    }};
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "hic";
                key = "voluptatum";
                oauthToken = "quis";
                prettyPrint = false;
                priority = 520290L;
                quotaUser = "voluptatum";
                requestId = "fuga";
                uploadType = "et";
                uploadProtocol = "voluptatum";
                userIp = "voluptatum";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatchRule(req, new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1("est", "accusamus") {{
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

## computeRegionNetworkFirewallPoliciesRemoveAssociation

Removes an association for the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest("aliquid", "nesciunt", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "nesciunt";
                key = "officiis";
                name = "Melinda Walsh";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "veniam";
                requestId = "accusamus";
                uploadType = "saepe";
                uploadProtocol = "accusamus";
                userIp = "temporibus";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveAssociation(req, new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1("dicta", "maiores") {{
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

## computeRegionNetworkFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest("corporis", "rem", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "accusamus";
                key = "asperiores";
                oauthToken = "sapiente";
                prettyPrint = false;
                priority = 964582L;
                quotaUser = "exercitationem";
                requestId = "voluptate";
                uploadType = "iure";
                uploadProtocol = "totam";
                userIp = "minus";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveRule(req, new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1("eos", "similique") {{
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

## computeRegionNetworkFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest("eligendi", "eaque", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "voluptatum";
                            condition = new Expr() {{
                                description = "vitae";
                                expression = "aliquid";
                                location = "hic";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("architecto"),
                            }};
                            role = "voluptatibus";
                        }}),
                        add(new Binding() {{
                            bindingId = "iusto";
                            condition = new Expr() {{
                                description = "esse";
                                expression = "molestias";
                                location = "distinctio";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("porro"),
                                add("incidunt"),
                            }};
                            role = "earum";
                        }}),
                        add(new Binding() {{
                            bindingId = "sint";
                            condition = new Expr() {{
                                description = "similique";
                                expression = "porro";
                                location = "animi";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("repellat"),
                                add("totam"),
                                add("blanditiis"),
                                add("explicabo"),
                            }};
                            role = "quam";
                        }}),
                    }};
                    etag = "quibusdam";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("ipsum"),
                                            add("neque"),
                                            add("nihil"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magnam"),
                                            add("sint"),
                                            add("illum"),
                                            add("alias"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("pariatur"),
                                            add("alias"),
                                            add("exercitationem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corporis"),
                                            add("commodi"),
                                            add("accusamus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("qui"),
                                    add("aspernatur"),
                                }};
                                service = "cum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fuga"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("atque"),
                                            add("facilis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ullam"),
                                            add("eos"),
                                            add("dolores"),
                                            add("quas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                            add("maiores"),
                                            add("ea"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("esse"),
                                }};
                                service = "alias";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                            add("non"),
                                            add("laudantium"),
                                            add("expedita"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("totam"),
                                }};
                                service = "eos";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                            add("veritatis"),
                                            add("dolores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("fuga"),
                                }};
                                service = "ad";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "illum";
                                condition = new Expr() {{
                                    description = "molestias";
                                    expression = "odio";
                                    location = "rerum";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("a"),
                                    add("esse"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "consequuntur";
                                condition = new Expr() {{
                                    description = "officiis";
                                    expression = "quas";
                                    location = "quas";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("asperiores"),
                                    add("dolorum"),
                                    add("officia"),
                                }};
                                role = "ex";
                            }}),
                        }};
                        etag = "est";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quidem";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("esse"),
                                        }};
                                    }}),
                                }};
                                description = "quis";
                                ins = new String[]{{
                                    add("modi"),
                                    add("quis"),
                                    add("delectus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Raul Aufderhar";
                                                    value = "iste";
                                                }}),
                                            }};
                                            field = "dolorum";
                                            metric = "nobis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("facilis"),
                                    add("quibusdam"),
                                }};
                                permissions = new String[]{{
                                    add("eligendi"),
                                    add("aperiam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "cum";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("minus"),
                                            add("maxime"),
                                            add("in"),
                                        }};
                                    }}),
                                }};
                                description = "provident";
                                ins = new String[]{{
                                    add("expedita"),
                                    add("ratione"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Candace Luettgen";
                                                    value = "et";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Ethel Medhurst";
                                                    value = "voluptates";
                                                }}),
                                            }};
                                            field = "nesciunt";
                                            metric = "quibusdam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ana Kuhic";
                                                    value = "numquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rafael Bayer";
                                                    value = "aut";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Barry Schmeler";
                                                    value = "inventore";
                                                }}),
                                            }};
                                            field = "itaque";
                                            metric = "quo";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                    add("esse"),
                                    add("exercitationem"),
                                }};
                                permissions = new String[]{{
                                    add("eius"),
                                }};
                            }}),
                        }};
                        version = 385723;
                    }};;
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "ratione";
                key = "magnam";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "quaerat";
                uploadProtocol = "at";
                userIp = "aperiam";
            }};            

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesSetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1("vel", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionNetworkFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest("asperiores", "tempore", "quas") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                        add("odio"),
                        add("dolorum"),
                        add("nostrum"),
                    }};
                }};;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "voluptas";
                key = "sunt";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "maxime";
                uploadProtocol = "optio";
                userIp = "beatae";
            }};            

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesTestIamPermissions(req, new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("minus", "culpa") {{
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
