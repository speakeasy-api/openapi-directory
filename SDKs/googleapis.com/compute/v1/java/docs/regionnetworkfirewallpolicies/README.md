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

            ComputeRegionNetworkFirewallPoliciesAddAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesAddAssociationRequest("aliquid", "dicta", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "officia";
                    displayName = "necessitatibus";
                    firewallPolicyId = "vitae";
                    name = "Terry Walker";
                    shortName = "magni";
                }};;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "alias";
                key = "fuga";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "sed";
                replaceExistingAssociation = false;
                requestId = "molestias";
                uploadType = "sequi";
                uploadProtocol = "asperiores";
                userIp = "neque";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddAssociation(req, new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddAssociationSecurityOption1("ea", "rem") {{
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

            ComputeRegionNetworkFirewallPoliciesAddRuleRequest req = new ComputeRegionNetworkFirewallPoliciesAddRuleRequest("quibusdam", "suscipit", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "hic";
                    description = "perspiciatis";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "doloremque";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("fugiat"),
                        }};
                        destFqdns = new String[]{{
                            add("nulla"),
                            add("vero"),
                        }};
                        destIpRanges = new String[]{{
                            add("excepturi"),
                            add("temporibus"),
                            add("accusantium"),
                            add("voluptatem"),
                        }};
                        destRegionCodes = new String[]{{
                            add("impedit"),
                            add("consequuntur"),
                            add("laboriosam"),
                            add("voluptas"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("veritatis"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "itaque";
                                ports = new String[]{{
                                    add("consequatur"),
                                    add("facere"),
                                    add("vero"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "magni";
                                ports = new String[]{{
                                    add("non"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "nesciunt";
                                ports = new String[]{{
                                    add("dolor"),
                                    add("blanditiis"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "odit";
                                ports = new String[]{{
                                    add("fugit"),
                                    add("eius"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("consequatur"),
                            add("commodi"),
                            add("doloremque"),
                            add("nemo"),
                        }};
                        srcFqdns = new String[]{{
                            add("velit"),
                            add("dolorum"),
                            add("saepe"),
                        }};
                        srcIpRanges = new String[]{{
                            add("cupiditate"),
                            add("quia"),
                            add("nostrum"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("sequi"),
                            add("voluptates"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Dr. Tony Lockman";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Candace Daugherty";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Renee Crona";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Luther Powlowski";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("nisi"),
                            add("quis"),
                            add("modi"),
                        }};
                    }};;
                    priority = 926674;
                    ruleName = "necessitatibus";
                    ruleTupleCount = 481221;
                    targetResources = new String[]{{
                        add("excepturi"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Rufus Zulauf";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Leonard Fisher";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Antoinette Prohaska";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("alias"),
                        add("rem"),
                    }};
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "cumque";
                key = "sit";
                maxPriority = 494410L;
                minPriority = 996287L;
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "possimus";
                uploadType = "suscipit";
                uploadProtocol = "dolorum";
                userIp = "rem";
            }};            

            ComputeRegionNetworkFirewallPoliciesAddRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesAddRule(req, new ComputeRegionNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesAddRuleSecurityOption1("nemo", "reiciendis") {{
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

            ComputeRegionNetworkFirewallPoliciesCloneRulesRequest req = new ComputeRegionNetworkFirewallPoliciesCloneRulesRequest("iusto", "distinctio", "quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "eius";
                key = "voluptates";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "atque";
                sourceFirewallPolicy = "soluta";
                uploadType = "porro";
                uploadProtocol = "nesciunt";
                userIp = "harum";
            }};            

            ComputeRegionNetworkFirewallPoliciesCloneRulesResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesCloneRules(req, new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesCloneRulesSecurityOption1("vel", "nesciunt") {{
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

            ComputeRegionNetworkFirewallPoliciesDeleteRequest req = new ComputeRegionNetworkFirewallPoliciesDeleteRequest("deserunt", "deserunt", "numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "possimus";
                key = "unde";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "itaque";
                uploadType = "iste";
                uploadProtocol = "quibusdam";
                userIp = "dolore";
            }};            

            ComputeRegionNetworkFirewallPoliciesDeleteResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesDelete(req, new ComputeRegionNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesDeleteSecurityOption1("similique", "exercitationem") {{
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

            ComputeRegionNetworkFirewallPoliciesGetRequest req = new ComputeRegionNetworkFirewallPoliciesGetRequest("reprehenderit", "suscipit", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "esse";
                key = "sunt";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "vitae";
                uploadProtocol = "quam";
                userIp = "blanditiis";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGet(req, new ComputeRegionNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetSecurityOption1("debitis", "aperiam") {{
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

            ComputeRegionNetworkFirewallPoliciesGetAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesGetAssociationRequest("molestiae", "ex", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "ducimus";
                key = "soluta";
                name = "Mr. Lorene Murphy";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "eligendi";
                uploadProtocol = "facere";
                userIp = "sed";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetAssociation(req, new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetAssociationSecurityOption1("eos", "quasi") {{
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

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest req = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest("accusamus", "recusandae", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "dolores";
                key = "eaque";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "asperiores";
                uploadProtocol = "porro";
                userIp = "numquam";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls(req, new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurityOption1("accusantium", "corporis") {{
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

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest("doloribus", "corporis", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "quas";
                key = "accusamus";
                oauthToken = "repellendus";
                optionsRequestedPolicyVersion = 980690L;
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "saepe";
                uploadProtocol = "incidunt";
                userIp = "quas";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1("earum", "necessitatibus") {{
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

            ComputeRegionNetworkFirewallPoliciesGetRuleRequest req = new ComputeRegionNetworkFirewallPoliciesGetRuleRequest("quos", "consectetur", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "quaerat";
                key = "et";
                oauthToken = "maiores";
                prettyPrint = false;
                priority = 33832L;
                quotaUser = "consectetur";
                uploadType = "expedita";
                uploadProtocol = "quibusdam";
                userIp = "soluta";
            }};            

            ComputeRegionNetworkFirewallPoliciesGetRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesGetRule(req, new ComputeRegionNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesGetRuleSecurityOption1("veniam", "nihil") {{
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

            ComputeRegionNetworkFirewallPoliciesInsertRequest req = new ComputeRegionNetworkFirewallPoliciesInsertRequest("beatae", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "rerum";
                            displayName = "eligendi";
                            firewallPolicyId = "veritatis";
                            name = "Kelly Schamberger";
                            shortName = "quo";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "dicta";
                            displayName = "in";
                            firewallPolicyId = "doloremque";
                            name = "Mrs. Ramon McGlynn";
                            shortName = "recusandae";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "voluptate";
                            displayName = "dicta";
                            firewallPolicyId = "tempore";
                            name = "Ms. Dora Kunde";
                            shortName = "laborum";
                        }}),
                    }};
                    creationTimestamp = "repudiandae";
                    description = "perferendis";
                    displayName = "unde";
                    fingerprint = "explicabo";
                    id = "rerum";
                    kind = "esse";
                    name = "Mr. Ellen Predovic";
                    parent = "ad";
                    region = "natus";
                    ruleTupleCount = 298531;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "quibusdam";
                            description = "quo";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "tenetur";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("illo"),
                                }};
                                destFqdns = new String[]{{
                                    add("necessitatibus"),
                                }};
                                destIpRanges = new String[]{{
                                    add("nulla"),
                                    add("tenetur"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("adipisci"),
                                    add("aliquid"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("unde"),
                                    add("dolores"),
                                    add("tempore"),
                                    add("officia"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "amet";
                                        ports = new String[]{{
                                            add("impedit"),
                                            add("deserunt"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("error"),
                                    add("debitis"),
                                    add("reprehenderit"),
                                }};
                                srcFqdns = new String[]{{
                                    add("libero"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("magni"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("recusandae"),
                                    add("quis"),
                                    add("animi"),
                                    add("ab"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Nicolas Collins DDS";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ea"),
                                    add("fugit"),
                                    add("dolores"),
                                    add("eos"),
                                }};
                            }};
                            priority = 670567;
                            ruleName = "totam";
                            ruleTupleCount = 415488;
                            targetResources = new String[]{{
                                add("fuga"),
                                add("sint"),
                                add("suscipit"),
                                add("deleniti"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Kirk Sauer";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Ana Kihn";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Helen Bayer";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Gerardo McLaughlin";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("maiores"),
                                add("eveniet"),
                                add("repudiandae"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "illum";
                            description = "autem";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "quisquam";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("dolore"),
                                    add("amet"),
                                }};
                                destFqdns = new String[]{{
                                    add("reprehenderit"),
                                    add("repellat"),
                                    add("maiores"),
                                    add("tempore"),
                                }};
                                destIpRanges = new String[]{{
                                    add("veniam"),
                                    add("repellat"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("architecto"),
                                    add("doloremque"),
                                    add("dolores"),
                                    add("ea"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("praesentium"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "laudantium";
                                        ports = new String[]{{
                                            add("dolor"),
                                            add("temporibus"),
                                            add("ex"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "totam";
                                        ports = new String[]{{
                                            add("fugiat"),
                                            add("quo"),
                                            add("a"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("alias"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                srcFqdns = new String[]{{
                                    add("eos"),
                                    add("adipisci"),
                                    add("asperiores"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("necessitatibus"),
                                    add("suscipit"),
                                    add("beatae"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("asperiores"),
                                    add("dolor"),
                                    add("eos"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kerry Toy Jr.";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dr. Erik Lowe";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Eula Windler";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("iure"),
                                }};
                            }};
                            priority = 39376;
                            ruleName = "non";
                            ruleTupleCount = 875306;
                            targetResources = new String[]{{
                                add("veritatis"),
                                add("accusamus"),
                                add("consequuntur"),
                                add("ipsa"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mike Harvey";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mr. Shannon McClure";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Judy Goodwin";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("eligendi"),
                                add("debitis"),
                            }};
                        }}),
                    }};
                    selfLink = "qui";
                    selfLinkWithId = "dicta";
                    shortName = "optio";
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "facilis";
                key = "beatae";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "quas";
                uploadType = "modi";
                uploadProtocol = "omnis";
                userIp = "impedit";
            }};            

            ComputeRegionNetworkFirewallPoliciesInsertResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesInsert(req, new ComputeRegionNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesInsertSecurityOption1("amet", "accusantium") {{
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

            ComputeRegionNetworkFirewallPoliciesListRequest req = new ComputeRegionNetworkFirewallPoliciesListRequest("sint", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "ducimus";
                filter = "molestiae";
                key = "amet";
                maxResults = 594998L;
                oauthToken = "natus";
                orderBy = "vero";
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                returnPartialSuccess = false;
                uploadType = "qui";
                uploadProtocol = "eveniet";
                userIp = "necessitatibus";
            }};            

            ComputeRegionNetworkFirewallPoliciesListResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesList(req, new ComputeRegionNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesListSecurityOption1("nihil", "iure") {{
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

            ComputeRegionNetworkFirewallPoliciesPatchRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRequest("iusto", "hic", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "consequatur";
                            displayName = "distinctio";
                            firewallPolicyId = "nesciunt";
                            name = "Gustavo Carter";
                            shortName = "illum";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "quos";
                            displayName = "laboriosam";
                            firewallPolicyId = "praesentium";
                            name = "Donna Schmidt II";
                            shortName = "vero";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "iure";
                            displayName = "autem";
                            firewallPolicyId = "accusamus";
                            name = "Ms. Lorena Ernser";
                            shortName = "tenetur";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "optio";
                            displayName = "ullam";
                            firewallPolicyId = "sapiente";
                            name = "Jeannie Franey DDS";
                            shortName = "adipisci";
                        }}),
                    }};
                    creationTimestamp = "reiciendis";
                    description = "deserunt";
                    displayName = "fugit";
                    fingerprint = "expedita";
                    id = "excepturi";
                    kind = "commodi";
                    name = "Moses Dickens";
                    parent = "distinctio";
                    region = "aspernatur";
                    ruleTupleCount = 405145;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "adipisci";
                            description = "neque";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "optio";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("fuga"),
                                }};
                                destFqdns = new String[]{{
                                    add("soluta"),
                                    add("laboriosam"),
                                    add("provident"),
                                    add("omnis"),
                                }};
                                destIpRanges = new String[]{{
                                    add("eum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("placeat"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("optio"),
                                    add("optio"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "fuga";
                                        ports = new String[]{{
                                            add("consequuntur"),
                                            add("reiciendis"),
                                            add("totam"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("perferendis"),
                                    add("dolore"),
                                    add("vel"),
                                    add("iste"),
                                }};
                                srcFqdns = new String[]{{
                                    add("in"),
                                    add("odit"),
                                    add("cupiditate"),
                                    add("quos"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("optio"),
                                    add("tempore"),
                                    add("quidem"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("eos"),
                                    add("eum"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Jermaine Adams";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Carrie Davis";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kristi Reichert";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Leo Von";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("magnam"),
                                }};
                            }};
                            priority = 822010;
                            ruleName = "esse";
                            ruleTupleCount = 243280;
                            targetResources = new String[]{{
                                add("repellendus"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Gregg Langworth";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Denise Glover";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Monica Mraz";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jackie Nienow";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("modi"),
                                add("aut"),
                                add("officiis"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "accusamus";
                            description = "optio";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "autem";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("tempore"),
                                    add("sequi"),
                                    add("alias"),
                                }};
                                destFqdns = new String[]{{
                                    add("porro"),
                                }};
                                destIpRanges = new String[]{{
                                    add("cum"),
                                    add("accusantium"),
                                    add("voluptas"),
                                    add("voluptatem"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("in"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("cupiditate"),
                                    add("alias"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "aspernatur";
                                        ports = new String[]{{
                                            add("numquam"),
                                            add("earum"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("omnis"),
                                    add("sunt"),
                                }};
                                srcFqdns = new String[]{{
                                    add("quibusdam"),
                                    add("ea"),
                                    add("hic"),
                                    add("rerum"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("dicta"),
                                    add("molestias"),
                                    add("earum"),
                                    add("temporibus"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptas"),
                                    add("pariatur"),
                                    add("ducimus"),
                                    add("a"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Derek Vandervort";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("perspiciatis"),
                                    add("harum"),
                                }};
                            }};
                            priority = 905366;
                            ruleName = "repellendus";
                            ruleTupleCount = 426928;
                            targetResources = new String[]{{
                                add("earum"),
                                add("dolorem"),
                                add("tenetur"),
                                add("illum"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jessica Mohr";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Moses Balistreri";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Marie Nolan";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quod"),
                                add("aliquam"),
                                add("cumque"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "aut";
                            description = "facere";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "vitae";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quis"),
                                    add("doloribus"),
                                    add("facere"),
                                    add("tenetur"),
                                }};
                                destFqdns = new String[]{{
                                    add("iusto"),
                                    add("cumque"),
                                    add("magnam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("debitis"),
                                    add("ab"),
                                    add("perferendis"),
                                    add("assumenda"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("veritatis"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("possimus"),
                                    add("sequi"),
                                    add("enim"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "dolorem";
                                        ports = new String[]{{
                                            add("sequi"),
                                            add("officiis"),
                                            add("inventore"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "repellendus";
                                        ports = new String[]{{
                                            add("quisquam"),
                                            add("porro"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("mollitia"),
                                    add("quo"),
                                    add("asperiores"),
                                }};
                                srcFqdns = new String[]{{
                                    add("impedit"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("libero"),
                                    add("aliquam"),
                                    add("ea"),
                                    add("magni"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nisi"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Betsy Strosin";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Nora Volkman Sr.";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("minus"),
                                    add("praesentium"),
                                    add("at"),
                                    add("cupiditate"),
                                }};
                            }};
                            priority = 260879;
                            ruleName = "accusantium";
                            ruleTupleCount = 977887;
                            targetResources = new String[]{{
                                add("in"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jack Fisher";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mr. Ana Welch";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("enim"),
                                add("deleniti"),
                                add("mollitia"),
                                add("tempore"),
                            }};
                        }}),
                    }};
                    selfLink = "voluptatibus";
                    selfLinkWithId = "neque";
                    shortName = "dolor";
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "ab";
                key = "ratione";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "harum";
                uploadType = "architecto";
                uploadProtocol = "consequatur";
                userIp = "optio";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatch(req, new ComputeRegionNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchSecurityOption1("cum", "et") {{
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

            ComputeRegionNetworkFirewallPoliciesPatchRuleRequest req = new ComputeRegionNetworkFirewallPoliciesPatchRuleRequest("ipsum", "officiis", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "quis";
                    description = "consequuntur";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "reiciendis";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("nostrum"),
                            add("libero"),
                            add("officiis"),
                        }};
                        destFqdns = new String[]{{
                            add("illo"),
                        }};
                        destIpRanges = new String[]{{
                            add("fugit"),
                            add("officia"),
                            add("reprehenderit"),
                        }};
                        destRegionCodes = new String[]{{
                            add("aperiam"),
                            add("beatae"),
                            add("tempora"),
                            add("voluptate"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("molestias"),
                            add("explicabo"),
                            add("sint"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "fugiat";
                                ports = new String[]{{
                                    add("eius"),
                                    add("architecto"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("mollitia"),
                            add("dolores"),
                        }};
                        srcFqdns = new String[]{{
                            add("perspiciatis"),
                            add("molestiae"),
                            add("at"),
                            add("quae"),
                        }};
                        srcIpRanges = new String[]{{
                            add("iste"),
                            add("et"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("qui"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Annie Herzog";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Betsy Baumbach";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("quas"),
                            add("ratione"),
                            add("nesciunt"),
                            add("blanditiis"),
                        }};
                    }};;
                    priority = 15195;
                    ruleName = "perspiciatis";
                    ruleTupleCount = 559250;
                    targetResources = new String[]{{
                        add("quidem"),
                        add("accusamus"),
                        add("aliquid"),
                        add("magnam"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Derek Runolfsdottir";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Dallas Abbott";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Monica Bosco I";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("cum"),
                        add("aliquid"),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "magnam";
                key = "mollitia";
                oauthToken = "perferendis";
                prettyPrint = false;
                priority = 907146L;
                quotaUser = "maxime";
                requestId = "maiores";
                uploadType = "voluptate";
                uploadProtocol = "incidunt";
                userIp = "eius";
            }};            

            ComputeRegionNetworkFirewallPoliciesPatchRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesPatchRule(req, new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesPatchRuleSecurityOption1("omnis", "ratione") {{
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

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest("nobis", "quia", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "eius";
                key = "ullam";
                name = "Nellie Zemlak";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "delectus";
                uploadType = "quod";
                uploadProtocol = "ipsa";
                userIp = "iure";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveAssociation(req, new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurityOption1("porro", "est") {{
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

            ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest("incidunt", "cupiditate", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "eligendi";
                key = "numquam";
                oauthToken = "adipisci";
                prettyPrint = false;
                priority = 272278L;
                quotaUser = "expedita";
                requestId = "occaecati";
                uploadType = "sit";
                uploadProtocol = "dolore";
                userIp = "voluptatibus";
            }};            

            ComputeRegionNetworkFirewallPoliciesRemoveRuleResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesRemoveRule(req, new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurityOption1("doloribus", "blanditiis") {{
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

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest("doloribus", "eum", "harum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ea";
                            condition = new Expr() {{
                                description = "deleniti";
                                expression = "harum";
                                location = "eaque";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("repudiandae"),
                                add("ab"),
                            }};
                            role = "corrupti";
                        }}),
                    }};
                    etag = "aliquid";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloremque"),
                                            add("autem"),
                                            add("tempore"),
                                            add("architecto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                            add("ea"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("magni"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("consequuntur"),
                                    add("nulla"),
                                    add("saepe"),
                                }};
                                service = "itaque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("laudantium"),
                                            add("minima"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("at"),
                                    add("quasi"),
                                    add("dolores"),
                                    add("amet"),
                                }};
                                service = "cum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corporis"),
                                            add("suscipit"),
                                            add("quasi"),
                                            add("doloribus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("pariatur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("incidunt"),
                                    add("consequuntur"),
                                }};
                                service = "unde";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "repellendus";
                                condition = new Expr() {{
                                    description = "nam";
                                    expression = "repellat";
                                    location = "numquam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("cum"),
                                    add("consequuntur"),
                                    add("repellat"),
                                }};
                                role = "debitis";
                            }}),
                            add(new Binding() {{
                                bindingId = "inventore";
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "natus";
                                    location = "odit";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("sed"),
                                    add("natus"),
                                }};
                                role = "labore";
                            }}),
                            add(new Binding() {{
                                bindingId = "esse";
                                condition = new Expr() {{
                                    description = "libero";
                                    expression = "quis";
                                    location = "similique";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("cumque"),
                                    add("beatae"),
                                }};
                                role = "repellendus";
                            }}),
                            add(new Binding() {{
                                bindingId = "sunt";
                                condition = new Expr() {{
                                    description = "voluptatum";
                                    expression = "iste";
                                    location = "odit";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("esse"),
                                    add("quasi"),
                                    add("necessitatibus"),
                                }};
                                role = "dignissimos";
                            }}),
                        }};
                        etag = "at";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "aliquam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("molestias"),
                                            add("quas"),
                                            add("maiores"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "provident";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("eveniet"),
                                            add("et"),
                                            add("itaque"),
                                            add("quo"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "quaerat";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("placeat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "ab";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("voluptates"),
                                            add("ad"),
                                            add("nisi"),
                                        }};
                                    }}),
                                }};
                                description = "ipsa";
                                ins = new String[]{{
                                    add("hic"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kari McDermott";
                                                    value = "adipisci";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacqueline Roberts DDS";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Gayle Will";
                                                    value = "soluta";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bryan Kohler";
                                                    value = "consequatur";
                                                }}),
                                            }};
                                            field = "impedit";
                                            metric = "perspiciatis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("architecto"),
                                    add("eaque"),
                                    add("voluptatum"),
                                    add("ipsam"),
                                }};
                                permissions = new String[]{{
                                    add("fugit"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nisi"),
                                            add("officia"),
                                            add("eum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "similique";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("optio"),
                                            add("doloribus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "esse";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("itaque"),
                                            add("expedita"),
                                            add("cum"),
                                        }};
                                    }}),
                                }};
                                description = "excepturi";
                                ins = new String[]{{
                                    add("aliquam"),
                                    add("facilis"),
                                    add("voluptatum"),
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
                                                    name = "Rosemarie Kassulke";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "April Rau II";
                                                    value = "culpa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ida Kuhlman II";
                                                    value = "accusamus";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "omnis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("dolorem"),
                                    add("sed"),
                                    add("necessitatibus"),
                                    add("impedit"),
                                }};
                                permissions = new String[]{{
                                    add("officiis"),
                                    add("reprehenderit"),
                                }};
                            }}),
                        }};
                        version = 320462;
                    }};;
                }};;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "voluptates";
                key = "praesentium";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "veniam";
                uploadProtocol = "reiciendis";
                userIp = "perspiciatis";
            }};            

            ComputeRegionNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesSetIamPolicy(req, new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurityOption1("autem", "excepturi") {{
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

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest("repellendus", "provident", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("totam"),
                        add("unde"),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "minima";
                key = "ullam";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "beatae";
                uploadProtocol = "magnam";
                userIp = "illo";
            }};            

            ComputeRegionNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.regionNetworkFirewallPolicies.computeRegionNetworkFirewallPoliciesTestIamPermissions(req, new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("facilis", "et") {{
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
