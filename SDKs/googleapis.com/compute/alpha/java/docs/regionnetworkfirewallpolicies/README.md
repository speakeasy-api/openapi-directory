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
* [computeRegionNetworkFirewallPoliciesPatchAssociation](#computeregionnetworkfirewallpoliciespatchassociation) - Updates an association for the specified network firewall policy.
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

            ComputeRegionNetworkFirewallPoliciesAddAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesAddAssociationRequest("ratione", "iste", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "recusandae";
                    displayName = "tenetur";
                    firewallPolicyId = "amet";
                    name = "Mr. Pauline Rice";
                    priority = 450438;
                    shortName = "delectus";
                }};;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "eaque";
                key = "nihil";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "accusantium";
                replaceExistingAssociation = false;
                requestId = "fugiat";
                uploadType = "rem";
                uploadProtocol = "quae";
                userIp = "eaque";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddAssociation(req, new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1("praesentium", "beatae") {{
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

            ComputeRegionNetworkFirewallPoliciesAddRuleRequest req = new ComputeRegionNetworkFirewallPoliciesAddRuleRequest("eveniet", "incidunt", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "minima";
                    description = "repellendus";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "incidunt";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("maxime"),
                            add("fugit"),
                        }};
                        destFqdns = new String[]{{
                            add("nemo"),
                            add("molestias"),
                        }};
                        destIpRanges = new String[]{{
                            add("eum"),
                            add("occaecati"),
                        }};
                        destRegionCodes = new String[]{{
                            add("non"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("excepturi"),
                            add("sunt"),
                            add("perferendis"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "laborum";
                                ports = new String[]{{
                                    add("neque"),
                                    add("nemo"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("quos"),
                            add("iure"),
                        }};
                        srcFqdns = new String[]{{
                            add("placeat"),
                        }};
                        srcIpRanges = new String[]{{
                            add("officiis"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("quibusdam"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Carol Schulist";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Gilberto Daniel";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Bridget Oberbrunner IV";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Sherry Heathcote";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("nisi"),
                            add("ullam"),
                        }};
                    }};;
                    priority = 584739;
                    ruleName = "aperiam";
                    ruleTupleCount = 359413;
                    securityProfileGroup = "a";
                    targetResources = new String[]{{
                        add("modi"),
                        add("ad"),
                        add("quibusdam"),
                        add("animi"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Garry Rau DDS";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Tiffany Nikolaus";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Margaret Osinski";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Tracy Rau";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("maxime"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "ex";
                key = "porro";
                maxPriority = 460599L;
                minPriority = 432214L;
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "eum";
                uploadType = "doloremque";
                uploadProtocol = "voluptate";
                userIp = "dolores";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddRule(req, new ComputeRegionNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1("expedita", "unde") {{
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

            ComputeRegionNetworkFirewallPoliciesCloneRulesRequest req = new ComputeRegionNetworkFirewallPoliciesCloneRulesRequest("itaque", "necessitatibus", "temporibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "suscipit";
                key = "illum";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "officiis";
                sourceFirewallPolicy = "ut";
                uploadType = "ducimus";
                uploadProtocol = "est";
                userIp = "necessitatibus";
            }};            

            ComputeRegionNetworkFirewallPoliciesCloneRulesResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesCloneRules(req, new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1("recusandae", "occaecati") {{
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

            ComputeRegionNetworkFirewallPoliciesDeleteRequest req = new ComputeRegionNetworkFirewallPoliciesDeleteRequest("optio", "officia", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "ipsum";
                key = "iusto";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "dolorem";
                uploadType = "ullam";
                uploadProtocol = "nihil";
                userIp = "occaecati";
            }};            

            ComputeRegionNetworkFirewallPoliciesDeleteResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesDelete(req, new ComputeRegionNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1("reiciendis", "asperiores") {{
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

            ComputeRegionNetworkFirewallPoliciesGetRequest req = new ComputeRegionNetworkFirewallPoliciesGetRequest("officia", "id", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "cupiditate";
                key = "vero";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "fugiat";
                uploadProtocol = "pariatur";
                userIp = "neque";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGet(req, new ComputeRegionNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetSecurityOption1("explicabo", "quam") {{
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

            ComputeRegionNetworkFirewallPoliciesGetAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesGetAssociationRequest("repellendus", "ex", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "ea";
                key = "provident";
                name = "Hope Schaden";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "aliquam";
                uploadProtocol = "mollitia";
                userIp = "nobis";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetAssociation(req, new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1("maxime", "voluptatibus") {{
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

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest req = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest("dignissimos", "sint", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "fugit";
                key = "facere";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "ratione";
                uploadProtocol = "magnam";
                userIp = "temporibus";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls(req, new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1("ad", "libero") {{
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

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest("sunt", "soluta", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "non";
                key = "vero";
                oauthToken = "voluptate";
                optionsRequestedPolicyVersion = 1715L;
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "tempore";
                uploadProtocol = "sequi";
                userIp = "vel";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1("veritatis", "ratione") {{
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

            ComputeRegionNetworkFirewallPoliciesGetRuleRequest req = new ComputeRegionNetworkFirewallPoliciesGetRuleRequest("ab", "neque", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "nobis";
                key = "ratione";
                oauthToken = "quod";
                prettyPrint = false;
                priority = 270875L;
                quotaUser = "eos";
                uploadType = "saepe";
                uploadProtocol = "deserunt";
                userIp = "officia";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetRule(req, new ComputeRegionNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1("asperiores", "occaecati") {{
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
import org.openapis.openapi.models.shared.FirewallPolicyVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesInsertRequest req = new ComputeRegionNetworkFirewallPoliciesInsertRequest("ipsa", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "officiis";
                            displayName = "optio";
                            firewallPolicyId = "officia";
                            name = "Amber Watsica";
                            priority = 290822;
                            shortName = "velit";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "doloremque";
                            displayName = "ratione";
                            firewallPolicyId = "et";
                            name = "Lorene Prosacco Jr.";
                            priority = 213368;
                            shortName = "voluptatum";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "molestias";
                            displayName = "aliquam";
                            firewallPolicyId = "enim";
                            name = "Tommy Ankunding";
                            priority = 981387;
                            shortName = "animi";
                        }}),
                    }};
                    creationTimestamp = "nemo";
                    description = "ea";
                    displayName = "adipisci";
                    fingerprint = "harum";
                    id = "earum";
                    kind = "excepturi";
                    name = "Morris Lehner";
                    parent = "exercitationem";
                    region = "libero";
                    ruleTupleCount = 765938;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "illo";
                            description = "quidem";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "quasi";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("debitis"),
                                }};
                                destFqdns = new String[]{{
                                    add("aliquid"),
                                    add("nihil"),
                                }};
                                destIpRanges = new String[]{{
                                    add("neque"),
                                    add("reprehenderit"),
                                    add("voluptates"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("harum"),
                                    add("rem"),
                                    add("alias"),
                                    add("cupiditate"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("recusandae"),
                                    add("sequi"),
                                    add("doloremque"),
                                    add("ea"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "assumenda";
                                        ports = new String[]{{
                                            add("voluptates"),
                                            add("nisi"),
                                            add("recusandae"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "perspiciatis";
                                        ports = new String[]{{
                                            add("ad"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("quibusdam"),
                                    add("corporis"),
                                    add("rem"),
                                }};
                                srcFqdns = new String[]{{
                                    add("itaque"),
                                    add("minima"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("reprehenderit"),
                                    add("ipsum"),
                                    add("reprehenderit"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("tempora"),
                                    add("voluptatum"),
                                    add("quaerat"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Agnes Abernathy";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mark Barrows IV";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Grady Ebert";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("voluptate"),
                                }};
                            }};
                            priority = 453852;
                            ruleName = "tenetur";
                            ruleTupleCount = 36519;
                            securityProfileGroup = "ab";
                            targetResources = new String[]{{
                                add("illo"),
                                add("occaecati"),
                                add("doloremque"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Claude Kuhlman";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mrs. Flora Feil IV";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Samantha Rempel";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("neque"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "quaerat";
                            description = "earum";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "laborum";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("unde"),
                                }};
                                destFqdns = new String[]{{
                                    add("libero"),
                                    add("error"),
                                    add("aut"),
                                }};
                                destIpRanges = new String[]{{
                                    add("harum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("assumenda"),
                                    add("corrupti"),
                                    add("perferendis"),
                                    add("labore"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("est"),
                                    add("pariatur"),
                                    add("magni"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quo";
                                        ports = new String[]{{
                                            add("quaerat"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nesciunt";
                                        ports = new String[]{{
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quia";
                                        ports = new String[]{{
                                            add("animi"),
                                            add("nam"),
                                            add("voluptates"),
                                            add("iusto"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "mollitia";
                                        ports = new String[]{{
                                            add("blanditiis"),
                                            add("doloremque"),
                                            add("maxime"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("accusantium"),
                                    add("cumque"),
                                    add("amet"),
                                    add("ipsa"),
                                }};
                                srcFqdns = new String[]{{
                                    add("dolore"),
                                    add("vero"),
                                    add("minima"),
                                    add("repudiandae"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("repellendus"),
                                    add("quidem"),
                                    add("corrupti"),
                                    add("fugiat"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("sed"),
                                    add("dicta"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Tom Lebsack";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Allan O'Conner V";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dr. Desiree Abernathy";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("voluptatum"),
                                    add("ex"),
                                }};
                            }};
                            priority = 150907;
                            ruleName = "fugiat";
                            ruleTupleCount = 63698;
                            securityProfileGroup = "ad";
                            targetResources = new String[]{{
                                add("quisquam"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Marc Orn";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("distinctio"),
                                add("placeat"),
                                add("ab"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "quia";
                            description = "cumque";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "iusto";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("consequatur"),
                                    add("consequatur"),
                                    add("corporis"),
                                }};
                                destFqdns = new String[]{{
                                    add("dolor"),
                                    add("exercitationem"),
                                    add("modi"),
                                    add("quae"),
                                }};
                                destIpRanges = new String[]{{
                                    add("magni"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("non"),
                                    add("ad"),
                                    add("ullam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("facilis"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quo";
                                        ports = new String[]{{
                                            add("asperiores"),
                                            add("natus"),
                                            add("dolores"),
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "labore";
                                        ports = new String[]{{
                                            add("accusamus"),
                                            add("commodi"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "impedit";
                                        ports = new String[]{{
                                            add("et"),
                                            add("accusamus"),
                                            add("tempore"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "atque";
                                        ports = new String[]{{
                                            add("nam"),
                                            add("possimus"),
                                            add("sint"),
                                            add("eveniet"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("excepturi"),
                                    add("tempore"),
                                    add("distinctio"),
                                    add("molestias"),
                                }};
                                srcFqdns = new String[]{{
                                    add("assumenda"),
                                    add("atque"),
                                    add("sit"),
                                    add("aspernatur"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("porro"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("rem"),
                                    add("assumenda"),
                                    add("perferendis"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Cedric Champlin";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("illum"),
                                    add("rem"),
                                    add("reprehenderit"),
                                    add("perferendis"),
                                }};
                            }};
                            priority = 264767;
                            ruleName = "quasi";
                            ruleTupleCount = 745272;
                            securityProfileGroup = "minima";
                            targetResources = new String[]{{
                                add("molestiae"),
                                add("suscipit"),
                                add("debitis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Willie Schmeler DVM";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("beatae"),
                                add("fugiat"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "saepe";
                    selfLinkWithId = "molestiae";
                    shortName = "sint";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "quam";
                key = "laborum";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "quasi";
                uploadType = "iure";
                uploadProtocol = "illum";
                userIp = "ab";
            }};            

            ComputeRegionNetworkFirewallPoliciesInsertResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesInsert(req, new ComputeRegionNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1("sapiente", "nobis") {{
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

            ComputeRegionNetworkFirewallPoliciesListRequest req = new ComputeRegionNetworkFirewallPoliciesListRequest("blanditiis", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "aliquid";
                filter = "quidem";
                key = "nisi";
                maxResults = 664994L;
                oauthToken = "sed";
                orderBy = "nihil";
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "velit";
                returnPartialSuccess = false;
                uploadType = "maiores";
                uploadProtocol = "iusto";
                userIp = "voluptates";
            }};            

            ComputeRegionNetworkFirewallPoliciesListResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesList(req, new ComputeRegionNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesListSecurityOption1("aspernatur", "eaque") {{
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
import org.openapis.openapi.models.shared.FirewallPolicyVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesPatchRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRequest("pariatur", "deserunt", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "nisi";
                            displayName = "excepturi";
                            firewallPolicyId = "incidunt";
                            name = "Paulette Upton";
                            priority = 154598;
                            shortName = "aspernatur";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "occaecati";
                            displayName = "ut";
                            firewallPolicyId = "voluptas";
                            name = "Jonathon Purdy";
                            priority = 409835;
                            shortName = "nostrum";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "unde";
                            displayName = "soluta";
                            firewallPolicyId = "necessitatibus";
                            name = "Lindsay Muller";
                            priority = 622376;
                            shortName = "quas";
                        }}),
                    }};
                    creationTimestamp = "laboriosam";
                    description = "aliquid";
                    displayName = "ipsa";
                    fingerprint = "odio";
                    id = "eos";
                    kind = "enim";
                    name = "Seth Durgan";
                    parent = "sapiente";
                    region = "est";
                    ruleTupleCount = 387792;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "architecto";
                            description = "maxime";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "consequatur";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quisquam"),
                                }};
                                destFqdns = new String[]{{
                                    add("repudiandae"),
                                }};
                                destIpRanges = new String[]{{
                                    add("id"),
                                    add("blanditiis"),
                                    add("in"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("tenetur"),
                                    add("reiciendis"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("et"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "mollitia";
                                        ports = new String[]{{
                                            add("iste"),
                                            add("hic"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "delectus";
                                        ports = new String[]{{
                                            add("expedita"),
                                            add("cumque"),
                                            add("ad"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "occaecati";
                                        ports = new String[]{{
                                            add("ab"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("illo"),
                                    add("earum"),
                                }};
                                srcFqdns = new String[]{{
                                    add("est"),
                                    add("iure"),
                                    add("aliquam"),
                                    add("ullam"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("quasi"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("eum"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Pete Lebsack";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Tammy D'Amore";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ed Torphy";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Inez Stoltenberg";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("consequuntur"),
                                    add("at"),
                                }};
                            }};
                            priority = 931125;
                            ruleName = "a";
                            ruleTupleCount = 236137;
                            securityProfileGroup = "quod";
                            targetResources = new String[]{{
                                add("doloribus"),
                                add("quo"),
                                add("aperiam"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Maggie Ziemann";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Pamela Emmerich";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Virginia Tremblay";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("temporibus"),
                                add("distinctio"),
                                add("ratione"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "corporis";
                            description = "voluptatem";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "tenetur";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("est"),
                                    add("exercitationem"),
                                    add("consequatur"),
                                    add("explicabo"),
                                }};
                                destFqdns = new String[]{{
                                    add("cupiditate"),
                                    add("voluptatem"),
                                    add("et"),
                                    add("quod"),
                                }};
                                destIpRanges = new String[]{{
                                    add("natus"),
                                    add("labore"),
                                    add("exercitationem"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("magni"),
                                    add("possimus"),
                                    add("quae"),
                                    add("commodi"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("quas"),
                                    add("aperiam"),
                                    add("quas"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "odio";
                                        ports = new String[]{{
                                            add("aliquid"),
                                            add("quo"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "sapiente";
                                        ports = new String[]{{
                                            add("eos"),
                                            add("neque"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "doloribus";
                                        ports = new String[]{{
                                            add("corrupti"),
                                            add("quibusdam"),
                                            add("quas"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nemo";
                                        ports = new String[]{{
                                            add("labore"),
                                            add("expedita"),
                                            add("distinctio"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("nostrum"),
                                    add("molestiae"),
                                    add("facilis"),
                                    add("odio"),
                                }};
                                srcFqdns = new String[]{{
                                    add("ex"),
                                    add("incidunt"),
                                    add("non"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("voluptate"),
                                    add("repudiandae"),
                                    add("adipisci"),
                                    add("reiciendis"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nam"),
                                    add("ipsa"),
                                    add("mollitia"),
                                    add("aut"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dr. Mae McLaughlin III";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Louise Schimmel";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("iusto"),
                                    add("adipisci"),
                                    add("iste"),
                                    add("atque"),
                                }};
                            }};
                            priority = 27151;
                            ruleName = "atque";
                            ruleTupleCount = 819750;
                            securityProfileGroup = "excepturi";
                            targetResources = new String[]{{
                                add("quod"),
                                add("laboriosam"),
                                add("nisi"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Gayle Kuhlman";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Doreen Abbott";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quia"),
                                add("ipsum"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "saepe";
                            description = "perspiciatis";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "in";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("eum"),
                                    add("fuga"),
                                }};
                                destFqdns = new String[]{{
                                    add("est"),
                                    add("voluptatibus"),
                                    add("natus"),
                                    add("soluta"),
                                }};
                                destIpRanges = new String[]{{
                                    add("dolorem"),
                                    add("dolorum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("odio"),
                                    add("iste"),
                                    add("nihil"),
                                    add("quisquam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("cupiditate"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "eum";
                                        ports = new String[]{{
                                            add("commodi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "temporibus";
                                        ports = new String[]{{
                                            add("deleniti"),
                                            add("voluptates"),
                                            add("ipsa"),
                                            add("repellat"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "fugit";
                                        ports = new String[]{{
                                            add("et"),
                                            add("rerum"),
                                            add("sapiente"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "earum";
                                        ports = new String[]{{
                                            add("velit"),
                                            add("dolor"),
                                            add("autem"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("odit"),
                                    add("culpa"),
                                }};
                                srcFqdns = new String[]{{
                                    add("atque"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("vitae"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("ullam"),
                                    add("itaque"),
                                    add("amet"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Mercedes Windler";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("totam"),
                                    add("fuga"),
                                }};
                            }};
                            priority = 103962;
                            ruleName = "voluptate";
                            ruleTupleCount = 38209;
                            securityProfileGroup = "commodi";
                            targetResources = new String[]{{
                                add("maxime"),
                                add("laudantium"),
                                add("pariatur"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Christopher Schowalter";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jacquelyn Zulauf";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Alfonso Rice";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("alias"),
                                add("sequi"),
                                add("sint"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "nobis";
                            description = "eum";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "magni";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("molestiae"),
                                }};
                                destFqdns = new String[]{{
                                    add("ex"),
                                }};
                                destIpRanges = new String[]{{
                                    add("sit"),
                                    add("id"),
                                    add("ipsum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("vitae"),
                                    add("iste"),
                                    add("animi"),
                                    add("cumque"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("modi"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nemo";
                                        ports = new String[]{{
                                            add("possimus"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("est"),
                                    add("ut"),
                                }};
                                srcFqdns = new String[]{{
                                    add("dolor"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ad"),
                                    add("asperiores"),
                                    add("amet"),
                                    add("quas"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("porro"),
                                    add("repellat"),
                                    add("a"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Carroll Morissette";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("temporibus"),
                                    add("non"),
                                    add("inventore"),
                                    add("rem"),
                                }};
                            }};
                            priority = 713249;
                            ruleName = "deleniti";
                            ruleTupleCount = 828405;
                            securityProfileGroup = "sint";
                            targetResources = new String[]{{
                                add("quisquam"),
                                add("cumque"),
                                add("aliquam"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jackie Schimmel";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Caleb Fay";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Ruth Denesik";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Nick Goodwin";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("veritatis"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "quas";
                    selfLinkWithId = "quia";
                    shortName = "cum";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "cumque";
                key = "velit";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "quis";
                uploadType = "quae";
                uploadProtocol = "delectus";
                userIp = "occaecati";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatch(req, new ComputeRegionNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1("velit", "quia") {{
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

## computeRegionNetworkFirewallPoliciesPatchAssociation

Updates an association for the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchAssociationRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchAssociationResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkFirewallPoliciesPatchAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesPatchAssociationRequest("molestiae", "mollitia", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "fuga";
                    displayName = "maiores";
                    firewallPolicyId = "animi";
                    name = "Tracy Little DDS";
                    priority = 881133;
                    shortName = "repudiandae";
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "alias";
                key = "quia";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "atque";
                requestId = "velit";
                uploadType = "molestias";
                uploadProtocol = "animi";
                userIp = "sed";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatchAssociation(req, new ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchAssociationSecurityOption1("id", "in") {{
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

            ComputeRegionNetworkFirewallPoliciesPatchRuleRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRuleRequest("in", "incidunt", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "nihil";
                    description = "rerum";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "accusamus";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("tempore"),
                            add("aperiam"),
                        }};
                        destFqdns = new String[]{{
                            add("fugiat"),
                            add("laboriosam"),
                            add("reprehenderit"),
                        }};
                        destIpRanges = new String[]{{
                            add("doloremque"),
                            add("aspernatur"),
                            add("blanditiis"),
                        }};
                        destRegionCodes = new String[]{{
                            add("praesentium"),
                            add("hic"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("modi"),
                            add("quia"),
                            add("alias"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "sequi";
                                ports = new String[]{{
                                    add("in"),
                                    add("dolores"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "laudantium";
                                ports = new String[]{{
                                    add("nam"),
                                    add("sint"),
                                    add("voluptas"),
                                    add("optio"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "in";
                                ports = new String[]{{
                                    add("omnis"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("iste"),
                            add("dolor"),
                            add("at"),
                        }};
                        srcFqdns = new String[]{{
                            add("saepe"),
                            add("cum"),
                            add("cumque"),
                        }};
                        srcIpRanges = new String[]{{
                            add("modi"),
                            add("magnam"),
                            add("vitae"),
                            add("unde"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("illum"),
                            add("quos"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Hugo Durgan IV";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Gwendolyn Hickle I";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Mr. Tara Lakin";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("magnam"),
                            add("doloremque"),
                            add("deleniti"),
                        }};
                    }};;
                    priority = 511451;
                    ruleName = "nulla";
                    ruleTupleCount = 124670;
                    securityProfileGroup = "inventore";
                    targetResources = new String[]{{
                        add("quod"),
                        add("doloribus"),
                        add("iure"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Miss Derrick Littel";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Kristina Gleason DDS";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Wade Hane MD";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("sint"),
                        add("perferendis"),
                        add("accusantium"),
                        add("maxime"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "dicta";
                key = "tenetur";
                oauthToken = "aspernatur";
                prettyPrint = false;
                priority = 863698L;
                quotaUser = "aperiam";
                requestId = "laboriosam";
                uploadType = "nisi";
                uploadProtocol = "dolorum";
                userIp = "veniam";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatchRule(req, new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1("totam", "vel") {{
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

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest("aliquid", "rerum", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "illum";
                key = "et";
                name = "Enrique Rodriguez";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "dolorum";
                uploadType = "deserunt";
                uploadProtocol = "quo";
                userIp = "qui";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveAssociation(req, new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1("molestias", "excepturi") {{
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

            ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest("enim", "blanditiis", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "atque";
                key = "est";
                oauthToken = "a";
                prettyPrint = false;
                priority = 336277L;
                quotaUser = "sapiente";
                requestId = "quisquam";
                uploadType = "optio";
                uploadProtocol = "voluptatem";
                userIp = "atque";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveRule(req, new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1("dolor", "odio") {{
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

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest("vitae", "minima", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "aliquid";
                            condition = new Expr() {{
                                description = "occaecati";
                                expression = "consequuntur";
                                location = "laborum";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("culpa"),
                            }};
                            role = "deleniti";
                        }}),
                        add(new Binding() {{
                            bindingId = "illo";
                            condition = new Expr() {{
                                description = "dolorum";
                                expression = "voluptatum";
                                location = "distinctio";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("ab"),
                                add("sequi"),
                                add("beatae"),
                                add("ullam"),
                            }};
                            role = "tenetur";
                        }}),
                    }};
                    etag = "modi";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tempore"),
                                            add("veritatis"),
                                            add("vitae"),
                                            add("aliquam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("beatae"),
                                            add("accusantium"),
                                            add("unde"),
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("porro"),
                                            add("delectus"),
                                            add("optio"),
                                            add("quas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ab"),
                                }};
                                service = "dicta";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("enim"),
                                            add("corrupti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                            add("eaque"),
                                            add("eum"),
                                            add("tenetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("odit"),
                                    add("eligendi"),
                                }};
                                service = "ut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptas"),
                                            add("enim"),
                                            add("maiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nihil"),
                                    add("odit"),
                                }};
                                service = "laboriosam";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("alias"),
                                            add("officia"),
                                            add("aliquid"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                            add("modi"),
                                            add("ipsam"),
                                            add("tempore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officiis"),
                                            add("voluptatibus"),
                                            add("aperiam"),
                                            add("error"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("culpa"),
                                    add("maiores"),
                                    add("minus"),
                                }};
                                service = "sapiente";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "voluptatum";
                                condition = new Expr() {{
                                    description = "soluta";
                                    expression = "adipisci";
                                    location = "possimus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("vero"),
                                    add("ullam"),
                                }};
                                role = "illum";
                            }}),
                            add(new Binding() {{
                                bindingId = "natus";
                                condition = new Expr() {{
                                    description = "soluta";
                                    expression = "cum";
                                    location = "doloremque";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("cumque"),
                                    add("magni"),
                                }};
                                role = "voluptatum";
                            }}),
                        }};
                        etag = "autem";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "deleniti";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("dolores"),
                                            add("veritatis"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "vero";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("iusto"),
                                            add("tempore"),
                                            add("temporibus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "veniam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("eligendi"),
                                            add("consequatur"),
                                            add("minus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "voluptatum";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("nostrum"),
                                            add("expedita"),
                                        }};
                                    }}),
                                }};
                                description = "occaecati";
                                ins = new String[]{{
                                    add("quisquam"),
                                    add("officiis"),
                                    add("enim"),
                                    add("placeat"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marsha Nikolaus";
                                                    value = "facere";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "quos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Margaret Beahan MD";
                                                    value = "tempora";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Desiree Leannon";
                                                    value = "earum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shelly Greenfelder";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            field = "repellat";
                                            metric = "neque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("amet"),
                                    add("numquam"),
                                    add("recusandae"),
                                    add("sunt"),
                                }};
                                permissions = new String[]{{
                                    add("suscipit"),
                                    add("libero"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "distinctio";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("consequatur"),
                                            add("iusto"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "neque";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("blanditiis"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "a";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("qui"),
                                            add("itaque"),
                                            add("omnis"),
                                        }};
                                    }}),
                                }};
                                description = "provident";
                                ins = new String[]{{
                                    add("possimus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Russell Hane";
                                                    value = "consequuntur";
                                                }}),
                                            }};
                                            field = "accusantium";
                                            metric = "neque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kimberly Kessler";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hugh Spencer";
                                                    value = "at";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "cupiditate";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Philip White";
                                                    value = "quas";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elias Smitham";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Heather Rolfson MD";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Wade Flatley";
                                                    value = "officiis";
                                                }}),
                                            }};
                                            field = "sit";
                                            metric = "beatae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("odit"),
                                }};
                                permissions = new String[]{{
                                    add("soluta"),
                                    add("minus"),
                                    add("aliquid"),
                                    add("ex"),
                                }};
                            }}),
                        }};
                        version = 553634;
                    }};;
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "rerum";
                key = "beatae";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
                userIp = "perspiciatis";
            }};            

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesSetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1("possimus", "molestiae") {{
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

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest("ad", "enim", "corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("odio"),
                        add("consectetur"),
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "quam";
                fields = "eveniet";
                key = "praesentium";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "explicabo";
                uploadProtocol = "quibusdam";
                userIp = "aspernatur";
            }};            

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesTestIamPermissions(req, new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("quae", "explicabo") {{
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
