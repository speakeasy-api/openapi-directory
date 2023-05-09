# networkFirewallPolicies

### Available Operations

* [computeNetworkFirewallPoliciesAddAssociation](#computenetworkfirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesAddRule](#computenetworkfirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeNetworkFirewallPoliciesCloneRules](#computenetworkfirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeNetworkFirewallPoliciesDelete](#computenetworkfirewallpoliciesdelete) - Deletes the specified policy.
* [computeNetworkFirewallPoliciesGet](#computenetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeNetworkFirewallPoliciesGetAssociation](#computenetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeNetworkFirewallPoliciesGetIamPolicy](#computenetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkFirewallPoliciesGetRule](#computenetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeNetworkFirewallPoliciesInsert](#computenetworkfirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeNetworkFirewallPoliciesList](#computenetworkfirewallpolicieslist) - Lists all the policies that have been configured for the specified project.
* [computeNetworkFirewallPoliciesPatch](#computenetworkfirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeNetworkFirewallPoliciesPatchRule](#computenetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeNetworkFirewallPoliciesRemoveAssociation](#computenetworkfirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesRemoveRule](#computenetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeNetworkFirewallPoliciesSetIamPolicy](#computenetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkFirewallPoliciesTestIamPermissions](#computenetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesAddAssociationRequest req = new ComputeNetworkFirewallPoliciesAddAssociationRequest("modi", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "atque";
                    displayName = "incidunt";
                    firewallPolicyId = "nesciunt";
                    name = "Elbert Aufderhar MD";
                    priority = 173724;
                    shortName = "asperiores";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "necessitatibus";
                key = "provident";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "et";
                replaceExistingAssociation = false;
                requestId = "laborum";
                uploadType = "esse";
                uploadProtocol = "quos";
                userIp = "porro";
            }};            

            ComputeNetworkFirewallPoliciesAddAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddAssociation(req, new ComputeNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1("incidunt", "eos") {{
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

## computeNetworkFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurityOption2;
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

            ComputeNetworkFirewallPoliciesAddRuleRequest req = new ComputeNetworkFirewallPoliciesAddRuleRequest("commodi", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "est";
                    description = "libero";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "veritatis";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("aspernatur"),
                            add("minus"),
                            add("alias"),
                        }};
                        destFqdns = new String[]{{
                            add("ipsa"),
                            add("quos"),
                            add("porro"),
                            add("voluptas"),
                        }};
                        destIpRanges = new String[]{{
                            add("natus"),
                            add("sequi"),
                            add("qui"),
                        }};
                        destRegionCodes = new String[]{{
                            add("neque"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("possimus"),
                            add("magnam"),
                            add("facere"),
                            add("in"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "odit";
                                ports = new String[]{{
                                    add("vitae"),
                                    add("eum"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "nihil";
                                ports = new String[]{{
                                    add("eius"),
                                    add("amet"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("ipsum"),
                            add("in"),
                            add("repellendus"),
                        }};
                        srcFqdns = new String[]{{
                            add("est"),
                        }};
                        srcIpRanges = new String[]{{
                            add("voluptatibus"),
                            add("earum"),
                            add("consequuntur"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("recusandae"),
                            add("quisquam"),
                            add("cumque"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Ira O'Hara";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("vitae"),
                            add("deserunt"),
                            add("distinctio"),
                        }};
                    }};;
                    priority = 976771;
                    ruleName = "quod";
                    ruleTupleCount = 720296;
                    securityProfileGroup = "suscipit";
                    targetResources = new String[]{{
                        add("optio"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Shari Konopelski";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Jeannette Mayert";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Shawn Osinski";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("iure"),
                        add("placeat"),
                        add("ratione"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "soluta";
                key = "veritatis";
                maxPriority = 279840L;
                minPriority = 311000L;
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "dicta";
                uploadType = "cum";
                uploadProtocol = "numquam";
                userIp = "in";
            }};            

            ComputeNetworkFirewallPoliciesAddRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddRule(req, new ComputeNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddRuleSecurityOption1("assumenda", "consequatur") {{
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

## computeNetworkFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesCloneRulesRequest req = new ComputeNetworkFirewallPoliciesCloneRulesRequest("eum", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "exercitationem";
                key = "deleniti";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "ullam";
                requestId = "atque";
                sourceFirewallPolicy = "labore";
                uploadType = "excepturi";
                uploadProtocol = "sunt";
                userIp = "quo";
            }};            

            ComputeNetworkFirewallPoliciesCloneRulesResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesCloneRules(req, new ComputeNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1("dolore", "quidem") {{
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

## computeNetworkFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesDeleteRequest req = new ComputeNetworkFirewallPoliciesDeleteRequest("quaerat", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "corporis";
                key = "assumenda";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "necessitatibus";
                uploadType = "sit";
                uploadProtocol = "dolore";
                userIp = "odio";
            }};            

            ComputeNetworkFirewallPoliciesDeleteResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesDelete(req, new ComputeNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesDeleteSecurityOption1("quasi", "temporibus") {{
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

## computeNetworkFirewallPoliciesGet

Returns the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetRequest req = new ComputeNetworkFirewallPoliciesGetRequest("asperiores", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "voluptates";
                key = "commodi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "illo";
                uploadProtocol = "enim";
                userIp = "fugiat";
            }};            

            ComputeNetworkFirewallPoliciesGetResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGet(req, new ComputeNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetSecurityOption1("sunt", "iure") {{
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

## computeNetworkFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetAssociationRequest req = new ComputeNetworkFirewallPoliciesGetAssociationRequest("facilis", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "delectus";
                key = "reiciendis";
                name = "Paula Boyle";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "soluta";
                uploadProtocol = "magnam";
                userIp = "corrupti";
            }};            

            ComputeNetworkFirewallPoliciesGetAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetAssociation(req, new ComputeNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1("fuga", "pariatur") {{
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

## computeNetworkFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesGetIamPolicyRequest("dicta", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "velit";
                key = "nihil";
                oauthToken = "delectus";
                optionsRequestedPolicyVersion = 465224L;
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "voluptatem";
                uploadProtocol = "quos";
                userIp = "est";
            }};            

            ComputeNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetIamPolicy(req, new ComputeNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1("culpa", "delectus") {{
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

## computeNetworkFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetRuleRequest req = new ComputeNetworkFirewallPoliciesGetRuleRequest("veniam", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "dolores";
                key = "esse";
                oauthToken = "mollitia";
                prettyPrint = false;
                priority = 192559L;
                quotaUser = "repellat";
                uploadType = "impedit";
                uploadProtocol = "temporibus";
                userIp = "non";
            }};            

            ComputeNetworkFirewallPoliciesGetRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetRule(req, new ComputeNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetRuleSecurityOption1("vel", "sed") {{
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

## computeNetworkFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurityOption2;
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

            ComputeNetworkFirewallPoliciesInsertRequest req = new ComputeNetworkFirewallPoliciesInsertRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "eius";
                            displayName = "mollitia";
                            firewallPolicyId = "a";
                            name = "Mr. Amber Labadie";
                            priority = 231987;
                            shortName = "molestiae";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "aliquid";
                            displayName = "corporis";
                            firewallPolicyId = "quia";
                            name = "Marilyn Ruecker";
                            priority = 551520;
                            shortName = "vitae";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "voluptate";
                            displayName = "nemo";
                            firewallPolicyId = "error";
                            name = "Elijah Armstrong";
                            priority = 225265;
                            shortName = "neque";
                        }}),
                    }};
                    creationTimestamp = "modi";
                    description = "ducimus";
                    displayName = "sequi";
                    fingerprint = "impedit";
                    id = "quo";
                    kind = "distinctio";
                    name = "Dr. Lindsey Bruen";
                    parent = "aliquid";
                    region = "ex";
                    ruleTupleCount = 609610;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "voluptatibus";
                            description = "mollitia";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "minus";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("asperiores"),
                                    add("eveniet"),
                                    add("ab"),
                                }};
                                destFqdns = new String[]{{
                                    add("molestiae"),
                                    add("voluptate"),
                                    add("facilis"),
                                    add("fuga"),
                                }};
                                destIpRanges = new String[]{{
                                    add("dolorum"),
                                    add("voluptatum"),
                                    add("dolore"),
                                    add("nemo"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("aliquam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("accusamus"),
                                    add("accusantium"),
                                    add("totam"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "magni";
                                        ports = new String[]{{
                                            add("minus"),
                                            add("expedita"),
                                            add("magnam"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "enim";
                                        ports = new String[]{{
                                            add("sit"),
                                            add("nihil"),
                                            add("quaerat"),
                                            add("laborum"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "soluta";
                                        ports = new String[]{{
                                            add("temporibus"),
                                            add("fugiat"),
                                            add("itaque"),
                                            add("animi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "cum";
                                        ports = new String[]{{
                                            add("reiciendis"),
                                            add("soluta"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("ipsa"),
                                }};
                                srcFqdns = new String[]{{
                                    add("sit"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("eligendi"),
                                    add("dignissimos"),
                                    add("explicabo"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("placeat"),
                                    add("voluptate"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Lorene Osinski";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Pat Bradtke Jr.";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("occaecati"),
                                }};
                            }};
                            priority = 451805;
                            ruleName = "cupiditate";
                            ruleTupleCount = 346168;
                            securityProfileGroup = "rerum";
                            targetResources = new String[]{{
                                add("numquam"),
                                add("labore"),
                                add("iure"),
                                add("ad"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Luis D'Amore";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Marianne Bergnaum";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Cary Jones";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Todd Schaden";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("cupiditate"),
                                add("non"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "veniam";
                            description = "at";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "illo";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("provident"),
                                    add("deserunt"),
                                }};
                                destFqdns = new String[]{{
                                    add("quidem"),
                                    add("dignissimos"),
                                }};
                                destIpRanges = new String[]{{
                                    add("maxime"),
                                    add("saepe"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("vitae"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("labore"),
                                    add("enim"),
                                    add("ut"),
                                    add("assumenda"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "magni";
                                        ports = new String[]{{
                                            add("optio"),
                                            add("non"),
                                            add("laborum"),
                                            add("sequi"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("similique"),
                                    add("repellat"),
                                    add("dignissimos"),
                                    add("fuga"),
                                }};
                                srcFqdns = new String[]{{
                                    add("laudantium"),
                                    add("neque"),
                                    add("rerum"),
                                    add("occaecati"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("mollitia"),
                                    add("esse"),
                                    add("modi"),
                                    add("amet"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("ipsum"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Sheryl Rosenbaum";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kurt Christiansen";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Terry Medhurst DDS";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("minus"),
                                    add("suscipit"),
                                    add("commodi"),
                                }};
                            }};
                            priority = 519620;
                            ruleName = "ullam";
                            ruleTupleCount = 922478;
                            securityProfileGroup = "consectetur";
                            targetResources = new String[]{{
                                add("fugiat"),
                                add("deleniti"),
                                add("nihil"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Boyd Mraz";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Minnie Gislason";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Josefina Towne";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("vero"),
                                add("ut"),
                                add("labore"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "aperiam";
                            description = "temporibus";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "corporis";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("tempore"),
                                    add("quis"),
                                    add("vitae"),
                                }};
                                destFqdns = new String[]{{
                                    add("nostrum"),
                                    add("officia"),
                                    add("molestias"),
                                    add("asperiores"),
                                }};
                                destIpRanges = new String[]{{
                                    add("quod"),
                                    add("voluptates"),
                                    add("praesentium"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("consequuntur"),
                                    add("in"),
                                    add("mollitia"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("sed"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ex";
                                        ports = new String[]{{
                                            add("dignissimos"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "reprehenderit";
                                        ports = new String[]{{
                                            add("quisquam"),
                                            add("non"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "eveniet";
                                        ports = new String[]{{
                                            add("nesciunt"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("id"),
                                    add("voluptate"),
                                    add("corporis"),
                                }};
                                srcFqdns = new String[]{{
                                    add("repellendus"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("corporis"),
                                    add("vitae"),
                                    add("nulla"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("ullam"),
                                    add("cum"),
                                    add("dignissimos"),
                                    add("nemo"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dominick Brakus";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("occaecati"),
                                    add("inventore"),
                                    add("repudiandae"),
                                }};
                            }};
                            priority = 437446;
                            ruleName = "repellat";
                            ruleTupleCount = 596759;
                            securityProfileGroup = "ipsam";
                            targetResources = new String[]{{
                                add("cum"),
                                add("cum"),
                                add("veniam"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Gerard Morissette";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Darrin Mann";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Courtney Corwin";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("facere"),
                                add("blanditiis"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "dolor";
                            description = "fuga";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "nisi";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("pariatur"),
                                    add("mollitia"),
                                    add("fugit"),
                                    add("velit"),
                                }};
                                destFqdns = new String[]{{
                                    add("at"),
                                    add("temporibus"),
                                    add("saepe"),
                                    add("a"),
                                }};
                                destIpRanges = new String[]{{
                                    add("consequatur"),
                                    add("doloribus"),
                                    add("sequi"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("pariatur"),
                                    add("nulla"),
                                    add("pariatur"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("quisquam"),
                                    add("a"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "corporis";
                                        ports = new String[]{{
                                            add("architecto"),
                                            add("totam"),
                                            add("quia"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "culpa";
                                        ports = new String[]{{
                                            add("eligendi"),
                                            add("cum"),
                                            add("eaque"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nihil";
                                        ports = new String[]{{
                                            add("porro"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("rem"),
                                }};
                                srcFqdns = new String[]{{
                                    add("autem"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("eos"),
                                    add("quibusdam"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quasi"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Leslie Swift";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Grace Murazik";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("commodi"),
                                    add("temporibus"),
                                    add("commodi"),
                                }};
                            }};
                            priority = 719002;
                            ruleName = "ut";
                            ruleTupleCount = 290527;
                            securityProfileGroup = "quas";
                            targetResources = new String[]{{
                                add("nulla"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Drew Zulauf";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Julius Bauch";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Evan Rodriguez";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("harum"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "corporis";
                    selfLinkWithId = "quis";
                    shortName = "quos";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.GLOBAL_VPC_NETWORK;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "aut";
                key = "atque";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "aliquid";
                uploadType = "eveniet";
                uploadProtocol = "deserunt";
                userIp = "rem";
            }};            

            ComputeNetworkFirewallPoliciesInsertResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesInsert(req, new ComputeNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesInsertSecurityOption1("incidunt", "fuga") {{
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

## computeNetworkFirewallPoliciesList

Lists all the policies that have been configured for the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesListRequest req = new ComputeNetworkFirewallPoliciesListRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "maiores";
                filter = "maxime";
                key = "reprehenderit";
                maxResults = 3835L;
                oauthToken = "rerum";
                orderBy = "nesciunt";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "repudiandae";
                returnPartialSuccess = false;
                uploadType = "beatae";
                uploadProtocol = "alias";
                userIp = "occaecati";
            }};            

            ComputeNetworkFirewallPoliciesListResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesList(req, new ComputeNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesListSecurityOption1("architecto", "esse") {{
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

## computeNetworkFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurityOption2;
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

            ComputeNetworkFirewallPoliciesPatchRequest req = new ComputeNetworkFirewallPoliciesPatchRequest("accusantium", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "magnam";
                            displayName = "qui";
                            firewallPolicyId = "qui";
                            name = "Margie Kling DVM";
                            priority = 496963;
                            shortName = "magni";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "cum";
                            displayName = "ab";
                            firewallPolicyId = "accusamus";
                            name = "Brendan Conroy";
                            priority = 913945;
                            shortName = "odio";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "veniam";
                            displayName = "non";
                            firewallPolicyId = "laboriosam";
                            name = "Carroll Hills";
                            priority = 150561;
                            shortName = "fugit";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "voluptate";
                            displayName = "doloremque";
                            firewallPolicyId = "ipsam";
                            name = "Peter Kunde";
                            priority = 959221;
                            shortName = "enim";
                        }}),
                    }};
                    creationTimestamp = "recusandae";
                    description = "quod";
                    displayName = "reiciendis";
                    fingerprint = "adipisci";
                    id = "sint";
                    kind = "nulla";
                    name = "Crystal Farrell";
                    parent = "expedita";
                    region = "ratione";
                    ruleTupleCount = 540310;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "itaque";
                            description = "neque";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "voluptas";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("et"),
                                }};
                                destFqdns = new String[]{{
                                    add("accusantium"),
                                    add("eius"),
                                }};
                                destIpRanges = new String[]{{
                                    add("excepturi"),
                                    add("optio"),
                                    add("temporibus"),
                                    add("iure"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("magni"),
                                    add("totam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("aperiam"),
                                    add("iure"),
                                    add("sit"),
                                    add("corrupti"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "illo";
                                        ports = new String[]{{
                                            add("incidunt"),
                                            add("ipsum"),
                                            add("eius"),
                                            add("ipsam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "odit";
                                        ports = new String[]{{
                                            add("debitis"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("sequi"),
                                }};
                                srcFqdns = new String[]{{
                                    add("voluptatem"),
                                    add("distinctio"),
                                    add("doloribus"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("hic"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nam"),
                                    add("qui"),
                                    add("quibusdam"),
                                    add("praesentium"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Amanda Conroy";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ad"),
                                    add("sapiente"),
                                    add("harum"),
                                }};
                            }};
                            priority = 111435;
                            ruleName = "eligendi";
                            ruleTupleCount = 626434;
                            securityProfileGroup = "iste";
                            targetResources = new String[]{{
                                add("quasi"),
                                add("assumenda"),
                                add("nemo"),
                                add("officiis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Joyce Bernhard";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("consequuntur"),
                                add("repellat"),
                                add("maiores"),
                                add("maiores"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "possimus";
                            description = "vitae";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "eum";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("ipsam"),
                                    add("magni"),
                                }};
                                destFqdns = new String[]{{
                                    add("facere"),
                                    add("possimus"),
                                }};
                                destIpRanges = new String[]{{
                                    add("culpa"),
                                    add("pariatur"),
                                    add("doloribus"),
                                    add("non"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("et"),
                                    add("mollitia"),
                                    add("blanditiis"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("impedit"),
                                    add("sed"),
                                    add("maiores"),
                                    add("facere"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "neque";
                                        ports = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "sit";
                                        ports = new String[]{{
                                            add("similique"),
                                            add("ex"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "explicabo";
                                        ports = new String[]{{
                                            add("omnis"),
                                            add("alias"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "repellendus";
                                        ports = new String[]{{
                                            add("ipsum"),
                                            add("laboriosam"),
                                            add("quaerat"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("facere"),
                                    add("quidem"),
                                    add("cumque"),
                                    add("molestiae"),
                                }};
                                srcFqdns = new String[]{{
                                    add("praesentium"),
                                    add("blanditiis"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("amet"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quia"),
                                    add("officia"),
                                    add("nisi"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Matthew Hilpert";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Brandy Gusikowski";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Gustavo Bruen";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Karl Thiel I";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("tenetur"),
                                    add("recusandae"),
                                }};
                            }};
                            priority = 216468;
                            ruleName = "nesciunt";
                            ruleTupleCount = 506127;
                            securityProfileGroup = "quos";
                            targetResources = new String[]{{
                                add("voluptatibus"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Muriel Ullrich V";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Patricia Labadie";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Lucy Johnson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Karla Dickinson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quae"),
                                add("consequuntur"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "expedita";
                            description = "porro";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "commodi";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("omnis"),
                                    add("at"),
                                    add("assumenda"),
                                    add("nostrum"),
                                }};
                                destFqdns = new String[]{{
                                    add("ipsam"),
                                    add("ullam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("cupiditate"),
                                    add("esse"),
                                    add("iusto"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("vitae"),
                                    add("reiciendis"),
                                    add("totam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("maiores"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "accusantium";
                                        ports = new String[]{{
                                            add("quaerat"),
                                            add("ipsum"),
                                            add("nisi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "cupiditate";
                                        ports = new String[]{{
                                            add("quo"),
                                            add("facilis"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "perspiciatis";
                                        ports = new String[]{{
                                            add("impedit"),
                                            add("explicabo"),
                                            add("ullam"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("libero"),
                                    add("cum"),
                                    add("reprehenderit"),
                                    add("quibusdam"),
                                }};
                                srcFqdns = new String[]{{
                                    add("repellat"),
                                    add("molestiae"),
                                    add("dolores"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("itaque"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("dolore"),
                                    add("veritatis"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Colin Kreiger";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Elijah O'Kon";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Bonnie Kub";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Rosemarie Thompson";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("deserunt"),
                                    add("voluptatem"),
                                }};
                            }};
                            priority = 251005;
                            ruleName = "debitis";
                            ruleTupleCount = 553620;
                            securityProfileGroup = "inventore";
                            targetResources = new String[]{{
                                add("culpa"),
                                add("quos"),
                                add("reiciendis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jared Bartell";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("officia"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "ex";
                            description = "totam";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "deserunt";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("voluptate"),
                                }};
                                destFqdns = new String[]{{
                                    add("doloribus"),
                                    add("exercitationem"),
                                    add("nam"),
                                    add("aliquid"),
                                }};
                                destIpRanges = new String[]{{
                                    add("magnam"),
                                    add("beatae"),
                                    add("labore"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("autem"),
                                    add("ipsa"),
                                    add("ea"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("laudantium"),
                                    add("reprehenderit"),
                                    add("expedita"),
                                    add("a"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "temporibus";
                                        ports = new String[]{{
                                            add("optio"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("esse"),
                                }};
                                srcFqdns = new String[]{{
                                    add("laudantium"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("hic"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptate"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Traci Hand";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Jimmie Cremin";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Rachel Gislason";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Edwin Hagenes III";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("rerum"),
                                    add("repudiandae"),
                                }};
                            }};
                            priority = 602089;
                            ruleName = "dolorum";
                            ruleTupleCount = 760797;
                            securityProfileGroup = "ad";
                            targetResources = new String[]{{
                                add("cumque"),
                                add("id"),
                                add("reprehenderit"),
                                add("facilis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Matt Kerluke";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Joe Reynolds";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Dr. Gwen Bogan";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("iusto"),
                                add("explicabo"),
                                add("deleniti"),
                                add("nam"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "accusamus";
                    selfLinkWithId = "eaque";
                    shortName = "a";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "reiciendis";
                key = "sequi";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "aliquam";
                requestId = "ducimus";
                uploadType = "nulla";
                uploadProtocol = "eum";
                userIp = "cum";
            }};            

            ComputeNetworkFirewallPoliciesPatchResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatch(req, new ComputeNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchSecurityOption1("praesentium", "provident") {{
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

## computeNetworkFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurityOption2;
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

            ComputeNetworkFirewallPoliciesPatchRuleRequest req = new ComputeNetworkFirewallPoliciesPatchRuleRequest("facere", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "maxime";
                    description = "aut";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "est";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("error"),
                        }};
                        destFqdns = new String[]{{
                            add("iste"),
                            add("reprehenderit"),
                            add("nobis"),
                            add("unde"),
                        }};
                        destIpRanges = new String[]{{
                            add("adipisci"),
                            add("beatae"),
                            add("cum"),
                        }};
                        destRegionCodes = new String[]{{
                            add("illum"),
                            add("assumenda"),
                            add("perferendis"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("repellendus"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "dolorum";
                                ports = new String[]{{
                                    add("officia"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "perferendis";
                                ports = new String[]{{
                                    add("at"),
                                    add("nostrum"),
                                    add("deleniti"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("cum"),
                            add("repellendus"),
                        }};
                        srcFqdns = new String[]{{
                            add("tempora"),
                        }};
                        srcIpRanges = new String[]{{
                            add("harum"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("ipsam"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Herbert Collier II";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Mandy Steuber";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Patricia Treutel";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Clarence Schamberger";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("incidunt"),
                            add("esse"),
                            add("modi"),
                        }};
                    }};;
                    priority = 624525;
                    ruleName = "inventore";
                    ruleTupleCount = 729858;
                    securityProfileGroup = "assumenda";
                    targetResources = new String[]{{
                        add("culpa"),
                        add("cupiditate"),
                        add("perferendis"),
                        add("saepe"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Tim Lockman";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("excepturi"),
                        add("libero"),
                        add("quasi"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "officia";
                key = "ratione";
                oauthToken = "voluptas";
                prettyPrint = false;
                priority = 238583L;
                quotaUser = "hic";
                requestId = "velit";
                uploadType = "consequuntur";
                uploadProtocol = "earum";
                userIp = "illum";
            }};            

            ComputeNetworkFirewallPoliciesPatchRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatchRule(req, new ComputeNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1("est", "qui") {{
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

## computeNetworkFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeNetworkFirewallPoliciesRemoveAssociationRequest("consectetur", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "ut";
                key = "sint";
                name = "Ruby Goyette";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "culpa";
                uploadType = "architecto";
                uploadProtocol = "voluptate";
                userIp = "mollitia";
            }};            

            ComputeNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveAssociation(req, new ComputeNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1("blanditiis", "quaerat") {{
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

## computeNetworkFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeNetworkFirewallPoliciesRemoveRuleRequest("reiciendis", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "facere";
                key = "qui";
                oauthToken = "libero";
                prettyPrint = false;
                priority = 551475L;
                quotaUser = "vitae";
                requestId = "ut";
                uploadType = "doloribus";
                uploadProtocol = "suscipit";
                userIp = "dicta";
            }};            

            ComputeNetworkFirewallPoliciesRemoveRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveRule(req, new ComputeNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1("porro", "cumque") {{
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

## computeNetworkFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesSetIamPolicyRequest("quas", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "harum";
                            condition = new Expr() {{
                                description = "doloremque";
                                expression = "sed";
                                location = "cum";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("deserunt"),
                            }};
                            role = "beatae";
                        }}),
                        add(new Binding() {{
                            bindingId = "deleniti";
                            condition = new Expr() {{
                                description = "corporis";
                                expression = "tempore";
                                location = "placeat";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("doloribus"),
                                add("a"),
                                add("maiores"),
                            }};
                            role = "aliquam";
                        }}),
                        add(new Binding() {{
                            bindingId = "tempora";
                            condition = new Expr() {{
                                description = "necessitatibus";
                                expression = "minus";
                                location = "rem";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("temporibus"),
                                add("sapiente"),
                            }};
                            role = "autem";
                        }}),
                    }};
                    etag = "et";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aut"),
                                            add("expedita"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tempore"),
                                            add("nemo"),
                                            add("accusamus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fuga"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("adipisci"),
                                    add("aliquid"),
                                    add("eaque"),
                                    add("quasi"),
                                }};
                                service = "deserunt";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("dicta"),
                                            add("ea"),
                                            add("sequi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("quisquam"),
                                            add("vitae"),
                                            add("repudiandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("magni"),
                                }};
                                service = "est";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("alias"),
                                            add("fuga"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("molestias"),
                                }};
                                service = "sequi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("dolorem"),
                                            add("laborum"),
                                            add("hic"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloremque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corporis"),
                                            add("nulla"),
                                            add("vero"),
                                            add("facere"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("accusantium"),
                                    add("voluptatem"),
                                    add("temporibus"),
                                    add("impedit"),
                                }};
                                service = "consequuntur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "voluptas";
                                condition = new Expr() {{
                                    description = "vitae";
                                    expression = "veritatis";
                                    location = "repellat";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("consequatur"),
                                    add("facere"),
                                    add("vero"),
                                }};
                                role = "magni";
                            }}),
                            add(new Binding() {{
                                bindingId = "magni";
                                condition = new Expr() {{
                                    description = "non";
                                    expression = "nesciunt";
                                    location = "ea";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("odit"),
                                    add("reprehenderit"),
                                    add("fugit"),
                                }};
                                role = "eius";
                            }}),
                        }};
                        etag = "at";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "velit";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("cupiditate"),
                                            add("quia"),
                                            add("nostrum"),
                                        }};
                                    }}),
                                }};
                                description = "aliquid";
                                ins = new String[]{{
                                    add("voluptates"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Kate Murray";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Georgia Moen";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Loretta Marvin";
                                                    value = "natus";
                                                }}),
                                            }};
                                            field = "quidem";
                                            metric = "non";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emma Walter";
                                                    value = "voluptatem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shaun Lemke";
                                                    value = "ex";
                                                }}),
                                            }};
                                            field = "necessitatibus";
                                            metric = "magni";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Ida Kling";
                                                    value = "earum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Ian Johnson";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Noel Bailey";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Woodrow Homenick";
                                                    value = "nemo";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "iusto";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
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
                                                    name = "Vera Gerlach";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dominic Sauer";
                                                    value = "vel";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rosie O'Connell";
                                                    value = "consequuntur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Glenda Schuster";
                                                    value = "deserunt";
                                                }}),
                                            }};
                                            field = "itaque";
                                            metric = "iste";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("similique"),
                                    add("exercitationem"),
                                }};
                                permissions = new String[]{{
                                    add("suscipit"),
                                    add("cumque"),
                                }};
                            }}),
                        }};
                        version = 204535;
                    }};;
                }};;
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

            ComputeNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesSetIamPolicy(req, new ComputeNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1("debitis", "aperiam") {{
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

## computeNetworkFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeNetworkFirewallPoliciesTestIamPermissionsRequest("molestiae", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dolore"),
                        add("voluptatibus"),
                        add("minus"),
                    }};
                }};;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "a";
                key = "similique";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "sequi";
                uploadProtocol = "itaque";
                userIp = "pariatur";
            }};            

            ComputeNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesTestIamPermissions(req, new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("eligendi", "facere") {{
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
