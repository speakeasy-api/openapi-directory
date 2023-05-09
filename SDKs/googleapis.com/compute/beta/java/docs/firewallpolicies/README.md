# firewallPolicies

### Available Operations

* [computeFirewallPoliciesAddAssociation](#computefirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeFirewallPoliciesAddRule](#computefirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeFirewallPoliciesCloneRules](#computefirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeFirewallPoliciesDelete](#computefirewallpoliciesdelete) - Deletes the specified policy.
* [computeFirewallPoliciesGet](#computefirewallpoliciesget) - Returns the specified firewall policy.
* [computeFirewallPoliciesGetAssociation](#computefirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeFirewallPoliciesGetIamPolicy](#computefirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeFirewallPoliciesGetRule](#computefirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeFirewallPoliciesInsert](#computefirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeFirewallPoliciesList](#computefirewallpolicieslist) - Lists all the policies that have been configured for the specified folder or organization.
* [computeFirewallPoliciesListAssociations](#computefirewallpolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeFirewallPoliciesMove](#computefirewallpoliciesmove) - Moves the specified firewall policy.
* [computeFirewallPoliciesPatch](#computefirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeFirewallPoliciesPatchRule](#computefirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeFirewallPoliciesRemoveAssociation](#computefirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeFirewallPoliciesRemoveRule](#computefirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeFirewallPoliciesSetIamPolicy](#computefirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeFirewallPoliciesTestIamPermissions](#computefirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesAddAssociationRequest req = new ComputeFirewallPoliciesAddAssociationRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "ut";
                    displayName = "facere";
                    firewallPolicyId = "voluptas";
                    name = "Clay Schaefer";
                    shortName = "iste";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "aperiam";
                key = "eaque";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "laboriosam";
                replaceExistingAssociation = false;
                requestId = "laborum";
                uploadType = "autem";
                uploadProtocol = "assumenda";
                userIp = "explicabo";
            }};            

            ComputeFirewallPoliciesAddAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddAssociation(req, new ComputeFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesAddAssociationSecurityOption1("fugiat", "doloremque") {{
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

## computeFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurityOption2;
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

            ComputeFirewallPoliciesAddRuleRequest req = new ComputeFirewallPoliciesAddRuleRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "velit";
                    description = "ullam";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "velit";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("quas"),
                        }};
                        destFqdns = new String[]{{
                            add("recusandae"),
                            add("cumque"),
                            add("doloremque"),
                            add("totam"),
                        }};
                        destIpRanges = new String[]{{
                            add("maiores"),
                            add("est"),
                        }};
                        destRegionCodes = new String[]{{
                            add("veritatis"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("iste"),
                            add("dicta"),
                            add("ipsam"),
                            add("consequuntur"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quidem";
                                ports = new String[]{{
                                    add("beatae"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "sunt";
                                ports = new String[]{{
                                    add("beatae"),
                                    add("autem"),
                                    add("ducimus"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "libero";
                                ports = new String[]{{
                                    add("necessitatibus"),
                                    add("ipsum"),
                                    add("impedit"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quos";
                                ports = new String[]{{
                                    add("distinctio"),
                                    add("voluptatem"),
                                    add("non"),
                                    add("quaerat"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("laudantium"),
                        }};
                        srcFqdns = new String[]{{
                            add("commodi"),
                            add("quibusdam"),
                            add("consectetur"),
                            add("voluptas"),
                        }};
                        srcIpRanges = new String[]{{
                            add("earum"),
                            add("tenetur"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("dolore"),
                            add("enim"),
                            add("ullam"),
                            add("perspiciatis"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Rosemarie Carroll";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("numquam"),
                            add("rem"),
                            add("officiis"),
                            add("omnis"),
                        }};
                    }};;
                    priority = 206451;
                    ruleName = "corporis";
                    ruleTupleCount = 797527;
                    targetResources = new String[]{{
                        add("placeat"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Julian Buckridge";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Santiago Dietrich";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Sarah D'Amore";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("aliquid"),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "minima";
                key = "sit";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "quaerat";
                uploadType = "quasi";
                uploadProtocol = "rem";
                userIp = "dignissimos";
            }};            

            ComputeFirewallPoliciesAddRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddRule(req, new ComputeFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesAddRuleSecurityOption1("doloremque", "assumenda") {{
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

## computeFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesCloneRulesRequest req = new ComputeFirewallPoliciesCloneRulesRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "unde";
                key = "deserunt";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "adipisci";
                sourceFirewallPolicy = "doloremque";
                uploadType = "optio";
                uploadProtocol = "tempora";
                userIp = "debitis";
            }};            

            ComputeFirewallPoliciesCloneRulesResponse res = sdk.firewallPolicies.computeFirewallPoliciesCloneRules(req, new ComputeFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeFirewallPoliciesCloneRulesSecurityOption1("cumque", "maxime") {{
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

## computeFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesDeleteRequest req = new ComputeFirewallPoliciesDeleteRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "ratione";
                key = "iure";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "eos";
                requestId = "natus";
                uploadType = "voluptatem";
                uploadProtocol = "suscipit";
                userIp = "laudantium";
            }};            

            ComputeFirewallPoliciesDeleteResponse res = sdk.firewallPolicies.computeFirewallPoliciesDelete(req, new ComputeFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeFirewallPoliciesDeleteSecurityOption1("facilis", "laudantium") {{
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

## computeFirewallPoliciesGet

Returns the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetRequest req = new ComputeFirewallPoliciesGetRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "corporis";
                key = "accusamus";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "esse";
                uploadProtocol = "neque";
                userIp = "quidem";
            }};            

            ComputeFirewallPoliciesGetResponse res = sdk.firewallPolicies.computeFirewallPoliciesGet(req, new ComputeFirewallPoliciesGetSecurity() {{
                option1 = new ComputeFirewallPoliciesGetSecurityOption1("quisquam", "praesentium") {{
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

## computeFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetAssociationRequest req = new ComputeFirewallPoliciesGetAssociationRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "voluptatem";
                key = "est";
                name = "Christine Mueller";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "quibusdam";
                uploadProtocol = "earum";
                userIp = "excepturi";
            }};            

            ComputeFirewallPoliciesGetAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetAssociation(req, new ComputeFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesGetAssociationSecurityOption1("numquam", "molestiae") {{
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

## computeFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetIamPolicyRequest req = new ComputeFirewallPoliciesGetIamPolicyRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "nihil";
                key = "facilis";
                oauthToken = "optio";
                optionsRequestedPolicyVersion = 279673L;
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "magnam";
                uploadProtocol = "dolores";
                userIp = "aliquid";
            }};            

            ComputeFirewallPoliciesGetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetIamPolicy(req, new ComputeFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesGetIamPolicySecurityOption1("eum", "vel") {{
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

## computeFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetRuleRequest req = new ComputeFirewallPoliciesGetRuleRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "fugiat";
                key = "impedit";
                oauthToken = "culpa";
                prettyPrint = false;
                priority = 543922L;
                quotaUser = "voluptates";
                uploadType = "maiores";
                uploadProtocol = "nemo";
                userIp = "illo";
            }};            

            ComputeFirewallPoliciesGetRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetRule(req, new ComputeFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesGetRuleSecurityOption1("doloribus", "cumque") {{
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

## computeFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurityOption2;
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

            ComputeFirewallPoliciesInsertRequest req = new ComputeFirewallPoliciesInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "cumque";
                            displayName = "ipsam";
                            firewallPolicyId = "occaecati";
                            name = "Mr. Meghan Schamberger";
                            shortName = "temporibus";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "mollitia";
                            displayName = "id";
                            firewallPolicyId = "quibusdam";
                            name = "Meghan Schroeder";
                            shortName = "delectus";
                        }}),
                    }};
                    creationTimestamp = "saepe";
                    description = "facere";
                    displayName = "nobis";
                    fingerprint = "at";
                    id = "molestias";
                    kind = "aut";
                    name = "Saul Gottlieb";
                    parent = "similique";
                    region = "dolore";
                    ruleTupleCount = 456599;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "iste";
                            description = "amet";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "aut";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("minima"),
                                    add("quos"),
                                    add("blanditiis"),
                                    add("quas"),
                                }};
                                destFqdns = new String[]{{
                                    add("provident"),
                                }};
                                destIpRanges = new String[]{{
                                    add("ipsum"),
                                    add("vero"),
                                    add("fuga"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("maiores"),
                                    add("error"),
                                    add("recusandae"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("consectetur"),
                                    add("sapiente"),
                                    add("voluptatibus"),
                                    add("assumenda"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "omnis";
                                        ports = new String[]{{
                                            add("odio"),
                                            add("voluptatibus"),
                                            add("aut"),
                                            add("quam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "omnis";
                                        ports = new String[]{{
                                            add("asperiores"),
                                            add("modi"),
                                            add("facere"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "neque";
                                        ports = new String[]{{
                                            add("in"),
                                            add("sed"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "non";
                                        ports = new String[]{{
                                            add("fugiat"),
                                            add("soluta"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("vero"),
                                    add("eos"),
                                }};
                                srcFqdns = new String[]{{
                                    add("quasi"),
                                    add("architecto"),
                                    add("praesentium"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("fugiat"),
                                    add("enim"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("laudantium"),
                                    add("modi"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Drew Waelchi";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Wade Berge";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ratione"),
                                    add("blanditiis"),
                                }};
                            }};
                            priority = 697729;
                            ruleName = "illum";
                            ruleTupleCount = 970376;
                            targetResources = new String[]{{
                                add("dolores"),
                                add("consequatur"),
                                add("nesciunt"),
                                add("quia"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Angelica Langworth";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Florence Predovic";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Geraldine Lindgren";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("itaque"),
                                add("et"),
                                add("eos"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "impedit";
                            description = "ex";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "natus";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("tenetur"),
                                }};
                                destFqdns = new String[]{{
                                    add("aspernatur"),
                                    add("eligendi"),
                                    add("repudiandae"),
                                }};
                                destIpRanges = new String[]{{
                                    add("inventore"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("iusto"),
                                    add("inventore"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("sed"),
                                    add("dolorem"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "exercitationem";
                                        ports = new String[]{{
                                            add("voluptate"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("pariatur"),
                                    add("minus"),
                                }};
                                srcFqdns = new String[]{{
                                    add("fuga"),
                                    add("totam"),
                                    add("cupiditate"),
                                    add("at"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("omnis"),
                                    add("quam"),
                                    add("exercitationem"),
                                    add("voluptates"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quis"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Patsy Hyatt";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Spencer Fahey";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("a"),
                                    add("beatae"),
                                }};
                            }};
                            priority = 114212;
                            ruleName = "veritatis";
                            ruleTupleCount = 814398;
                            targetResources = new String[]{{
                                add("laborum"),
                                add("dicta"),
                                add("voluptatem"),
                                add("odit"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Miss Lloyd Funk";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Guadalupe Abernathy";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("vitae"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "odio";
                            description = "quas";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "distinctio";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quod"),
                                    add("eligendi"),
                                    add("sit"),
                                    add("possimus"),
                                }};
                                destFqdns = new String[]{{
                                    add("distinctio"),
                                    add("assumenda"),
                                    add("illum"),
                                }};
                                destIpRanges = new String[]{{
                                    add("magnam"),
                                    add("laudantium"),
                                    add("tempora"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("doloremque"),
                                    add("corrupti"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("facilis"),
                                    add("aliquam"),
                                    add("repudiandae"),
                                    add("amet"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ab";
                                        ports = new String[]{{
                                            add("eum"),
                                            add("rerum"),
                                            add("placeat"),
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ad";
                                        ports = new String[]{{
                                            add("porro"),
                                            add("labore"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ut";
                                        ports = new String[]{{
                                            add("ullam"),
                                            add("numquam"),
                                            add("enim"),
                                            add("cupiditate"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("itaque"),
                                    add("fuga"),
                                    add("consectetur"),
                                }};
                                srcFqdns = new String[]{{
                                    add("aspernatur"),
                                    add("explicabo"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ipsa"),
                                    add("eveniet"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nobis"),
                                    add("qui"),
                                    add("accusantium"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Clay Klein";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("quibusdam"),
                                    add("quos"),
                                    add("maiores"),
                                }};
                            }};
                            priority = 696678;
                            ruleName = "in";
                            ruleTupleCount = 635314;
                            targetResources = new String[]{{
                                add("fuga"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jeanette Rosenbaum";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("possimus"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "quaerat";
                            description = "aut";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "esse";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("deserunt"),
                                    add("ratione"),
                                    add("ipsa"),
                                    add("debitis"),
                                }};
                                destFqdns = new String[]{{
                                    add("deserunt"),
                                    add("hic"),
                                    add("ducimus"),
                                }};
                                destIpRanges = new String[]{{
                                    add("ipsam"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("quia"),
                                    add("omnis"),
                                    add("dicta"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("explicabo"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "amet";
                                        ports = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("velit"),
                                    add("hic"),
                                    add("ullam"),
                                }};
                                srcFqdns = new String[]{{
                                    add("itaque"),
                                    add("distinctio"),
                                    add("iusto"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("provident"),
                                    add("occaecati"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("sunt"),
                                    add("odit"),
                                    add("vero"),
                                    add("deleniti"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kristie Littel";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Lawrence Hickle";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Sara Runolfsdottir";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Jeremy Schiller";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("aliquam"),
                                    add("eligendi"),
                                    add("hic"),
                                }};
                            }};
                            priority = 779748;
                            ruleName = "illo";
                            ruleTupleCount = 751347;
                            targetResources = new String[]{{
                                add("nisi"),
                                add("explicabo"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Johanna Lueilwitz DVM";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("rerum"),
                            }};
                        }}),
                    }};
                    selfLink = "assumenda";
                    selfLinkWithId = "eos";
                    shortName = "dolorem";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "ab";
                key = "magnam";
                oauthToken = "pariatur";
                parentId = "expedita";
                prettyPrint = false;
                quotaUser = "autem";
                requestId = "tempore";
                uploadType = "recusandae";
                uploadProtocol = "nostrum";
                userIp = "officia";
            }};            

            ComputeFirewallPoliciesInsertResponse res = sdk.firewallPolicies.computeFirewallPoliciesInsert(req, new ComputeFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeFirewallPoliciesInsertSecurityOption1("voluptas", "laudantium") {{
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

## computeFirewallPoliciesList

Lists all the policies that have been configured for the specified folder or organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesListRequest req = new ComputeFirewallPoliciesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "necessitatibus";
                filter = "aspernatur";
                key = "dolores";
                maxResults = 671568L;
                oauthToken = "vero";
                orderBy = "eos";
                pageToken = "voluptatem";
                parentId = "temporibus";
                prettyPrint = false;
                quotaUser = "id";
                returnPartialSuccess = false;
                uploadType = "quae";
                uploadProtocol = "commodi";
                userIp = "a";
            }};            

            ComputeFirewallPoliciesListResponse res = sdk.firewallPolicies.computeFirewallPoliciesList(req, new ComputeFirewallPoliciesListSecurity() {{
                option1 = new ComputeFirewallPoliciesListSecurityOption1("minus", "sed") {{
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

## computeFirewallPoliciesListAssociations

Lists associations of a specified target, i.e., organization or folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesListAssociationsRequest req = new ComputeFirewallPoliciesListAssociationsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "deserunt";
                key = "sed";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "sint";
                targetResource = "placeat";
                uploadType = "ullam";
                uploadProtocol = "molestiae";
                userIp = "itaque";
            }};            

            ComputeFirewallPoliciesListAssociationsResponse res = sdk.firewallPolicies.computeFirewallPoliciesListAssociations(req, new ComputeFirewallPoliciesListAssociationsSecurity() {{
                option1 = new ComputeFirewallPoliciesListAssociationsSecurityOption1("rem", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPoliciesListAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFirewallPoliciesMove

Moves the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesMoveRequest req = new ComputeFirewallPoliciesMoveRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "dolor";
                key = "occaecati";
                oauthToken = "quibusdam";
                parentId = "magni";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "consequuntur";
                uploadType = "eius";
                uploadProtocol = "commodi";
                userIp = "ipsam";
            }};            

            ComputeFirewallPoliciesMoveResponse res = sdk.firewallPolicies.computeFirewallPoliciesMove(req, new ComputeFirewallPoliciesMoveSecurity() {{
                option1 = new ComputeFirewallPoliciesMoveSecurityOption1("vel", "cupiditate") {{
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

## computeFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurityOption2;
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

            ComputeFirewallPoliciesPatchRequest req = new ComputeFirewallPoliciesPatchRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "modi";
                            displayName = "doloremque";
                            firewallPolicyId = "odio";
                            name = "Nora Goldner";
                            shortName = "dolorum";
                        }}),
                    }};
                    creationTimestamp = "libero";
                    description = "ratione";
                    displayName = "molestiae";
                    fingerprint = "optio";
                    id = "saepe";
                    kind = "maiores";
                    name = "Irene Davis";
                    parent = "vitae";
                    region = "occaecati";
                    ruleTupleCount = 290761;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "quidem";
                            description = "exercitationem";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "modi";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quae"),
                                }};
                                destFqdns = new String[]{{
                                    add("possimus"),
                                    add("quo"),
                                    add("suscipit"),
                                }};
                                destIpRanges = new String[]{{
                                    add("sint"),
                                    add("est"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("provident"),
                                    add("alias"),
                                    add("deserunt"),
                                    add("fugit"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("quo"),
                                    add("molestiae"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "facere";
                                        ports = new String[]{{
                                            add("cupiditate"),
                                            add("deleniti"),
                                            add("quasi"),
                                            add("maiores"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "voluptatem";
                                        ports = new String[]{{
                                            add("laudantium"),
                                            add("unde"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "corrupti";
                                        ports = new String[]{{
                                            add("facere"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ea";
                                        ports = new String[]{{
                                            add("nam"),
                                            add("amet"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("hic"),
                                    add("similique"),
                                    add("fuga"),
                                    add("consectetur"),
                                }};
                                srcFqdns = new String[]{{
                                    add("laudantium"),
                                    add("cumque"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("veritatis"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptatibus"),
                                    add("magnam"),
                                    add("aperiam"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Santiago Fritsch";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Leticia Funk";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("reiciendis"),
                                    add("vitae"),
                                    add("ullam"),
                                }};
                            }};
                            priority = 393630;
                            ruleName = "consequuntur";
                            ruleTupleCount = 375549;
                            targetResources = new String[]{{
                                add("excepturi"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Christopher Spencer";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Rosa Considine";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Edward Jast";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("inventore"),
                                add("consequuntur"),
                                add("repellendus"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "sit";
                            description = "dolores";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "aspernatur";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("magni"),
                                    add("odio"),
                                    add("alias"),
                                }};
                                destFqdns = new String[]{{
                                    add("deleniti"),
                                    add("possimus"),
                                    add("ipsam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("fugit"),
                                    add("aspernatur"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("illum"),
                                    add("praesentium"),
                                    add("sint"),
                                    add("exercitationem"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("voluptatum"),
                                    add("facilis"),
                                    add("placeat"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "dolores";
                                        ports = new String[]{{
                                            add("pariatur"),
                                            add("facilis"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "cupiditate";
                                        ports = new String[]{{
                                            add("natus"),
                                            add("nisi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "provident";
                                        ports = new String[]{{
                                            add("dolor"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nostrum";
                                        ports = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("dolore"),
                                    add("ullam"),
                                }};
                                srcFqdns = new String[]{{
                                    add("adipisci"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("occaecati"),
                                    add("numquam"),
                                    add("fugiat"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quas"),
                                    add("repellendus"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Verna Kautzer";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Terrance Wolf";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Harvey Wisoky";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Marion Baumbach";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("totam"),
                                }};
                            }};
                            priority = 183504;
                            ruleName = "deserunt";
                            ruleTupleCount = 754784;
                            targetResources = new String[]{{
                                add("deleniti"),
                                add("dolor"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Rufus Conn II";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Kenny Huel Jr.";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Laverne Berge";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("asperiores"),
                                add("eum"),
                                add("deserunt"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "repudiandae";
                            description = "nemo";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "architecto";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quisquam"),
                                    add("praesentium"),
                                    add("facilis"),
                                }};
                                destFqdns = new String[]{{
                                    add("repudiandae"),
                                    add("maiores"),
                                    add("ipsum"),
                                    add("commodi"),
                                }};
                                destIpRanges = new String[]{{
                                    add("fugit"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("ex"),
                                    add("neque"),
                                    add("quod"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("alias"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "a";
                                        ports = new String[]{{
                                            add("id"),
                                            add("atque"),
                                            add("quaerat"),
                                            add("aperiam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "dignissimos";
                                        ports = new String[]{{
                                            add("modi"),
                                            add("fuga"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("deleniti"),
                                    add("officia"),
                                }};
                                srcFqdns = new String[]{{
                                    add("laborum"),
                                    add("dolor"),
                                    add("ad"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sit"),
                                    add("molestias"),
                                    add("voluptas"),
                                    add("expedita"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("maiores"),
                                    add("ea"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Tomas Wisozk DVM";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Alex Gerhold";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("enim"),
                                }};
                            }};
                            priority = 471966;
                            ruleName = "libero";
                            ruleTupleCount = 607205;
                            targetResources = new String[]{{
                                add("eos"),
                                add("quisquam"),
                                add("corrupti"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Taylor Orn";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Kate Will";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Ivan Christiansen";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Richard Murray";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("labore"),
                                add("voluptate"),
                                add("voluptatibus"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "quam";
                            description = "nulla";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "voluptates";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("perferendis"),
                                    add("quaerat"),
                                    add("excepturi"),
                                    add("aliquid"),
                                }};
                                destFqdns = new String[]{{
                                    add("voluptatem"),
                                    add("illum"),
                                }};
                                destIpRanges = new String[]{{
                                    add("culpa"),
                                    add("dicta"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("ratione"),
                                    add("vitae"),
                                    add("quisquam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("nihil"),
                                    add("culpa"),
                                    add("temporibus"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "ad";
                                        ports = new String[]{{
                                            add("suscipit"),
                                            add("reiciendis"),
                                            add("repellendus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "delectus";
                                        ports = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "possimus";
                                        ports = new String[]{{
                                            add("neque"),
                                            add("quam"),
                                            add("animi"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "debitis";
                                        ports = new String[]{{
                                            add("voluptatem"),
                                            add("quisquam"),
                                            add("vitae"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("architecto"),
                                    add("sint"),
                                    add("eligendi"),
                                    add("occaecati"),
                                }};
                                srcFqdns = new String[]{{
                                    add("tempore"),
                                    add("officia"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("unde"),
                                    add("quas"),
                                    add("laboriosam"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptatum"),
                                    add("sapiente"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Darla Kertzmann";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Stephen Paucek";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Forrest Waelchi";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("incidunt"),
                                    add("modi"),
                                }};
                            }};
                            priority = 552741;
                            ruleName = "minus";
                            ruleTupleCount = 452481;
                            targetResources = new String[]{{
                                add("reprehenderit"),
                                add("reprehenderit"),
                                add("animi"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Toby Denesik";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("doloremque"),
                                add("sed"),
                            }};
                        }}),
                    }};
                    selfLink = "voluptatum";
                    selfLinkWithId = "debitis";
                    shortName = "a";
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "repellat";
                fields = "cupiditate";
                key = "adipisci";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "veniam";
                uploadType = "sed";
                uploadProtocol = "necessitatibus";
                userIp = "possimus";
            }};            

            ComputeFirewallPoliciesPatchResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatch(req, new ComputeFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchSecurityOption1("dignissimos", "itaque") {{
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

## computeFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurityOption2;
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

            ComputeFirewallPoliciesPatchRuleRequest req = new ComputeFirewallPoliciesPatchRuleRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "non";
                    description = "delectus";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "quod";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("ullam"),
                        }};
                        destFqdns = new String[]{{
                            add("illum"),
                            add("voluptates"),
                        }};
                        destIpRanges = new String[]{{
                            add("est"),
                            add("in"),
                            add("illo"),
                        }};
                        destRegionCodes = new String[]{{
                            add("consequatur"),
                            add("delectus"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("dolore"),
                            add("nemo"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quo";
                                ports = new String[]{{
                                    add("delectus"),
                                    add("laboriosam"),
                                    add("laboriosam"),
                                    add("quam"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "fuga";
                                ports = new String[]{{
                                    add("repellat"),
                                    add("cupiditate"),
                                    add("soluta"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "tempore";
                                ports = new String[]{{
                                    add("fugiat"),
                                    add("inventore"),
                                    add("atque"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("sapiente"),
                            add("voluptates"),
                        }};
                        srcFqdns = new String[]{{
                            add("nesciunt"),
                            add("ab"),
                        }};
                        srcIpRanges = new String[]{{
                            add("suscipit"),
                            add("quidem"),
                            add("delectus"),
                            add("nemo"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("voluptatum"),
                            add("sequi"),
                            add("atque"),
                            add("maiores"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Felix Schmidt DDS";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Glenda Windler";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Julia Hartmann";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("laboriosam"),
                            add("eos"),
                            add("amet"),
                            add("incidunt"),
                        }};
                    }};;
                    priority = 783539;
                    ruleName = "occaecati";
                    ruleTupleCount = 970703;
                    targetResources = new String[]{{
                        add("tempore"),
                        add("in"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Darnell Walker";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Tommy Schmidt";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Candice Nienow";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("enim"),
                        add("eaque"),
                        add("ex"),
                        add("eveniet"),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "aut";
                key = "dolorum";
                oauthToken = "nostrum";
                prettyPrint = false;
                priority = 270862L;
                quotaUser = "nam";
                requestId = "numquam";
                uploadType = "odio";
                uploadProtocol = "nostrum";
                userIp = "maiores";
            }};            

            ComputeFirewallPoliciesPatchRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatchRule(req, new ComputeFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchRuleSecurityOption1("veritatis", "autem") {{
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

## computeFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesRemoveAssociationRequest req = new ComputeFirewallPoliciesRemoveAssociationRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "corrupti";
                key = "nostrum";
                name = "Earl Schoen";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "autem";
                requestId = "adipisci";
                uploadType = "sunt";
                uploadProtocol = "rerum";
                userIp = "occaecati";
            }};            

            ComputeFirewallPoliciesRemoveAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveAssociation(req, new ComputeFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveAssociationSecurityOption1("provident", "necessitatibus") {{
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

## computeFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesRemoveRuleRequest req = new ComputeFirewallPoliciesRemoveRuleRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "blanditiis";
                key = "a";
                oauthToken = "natus";
                prettyPrint = false;
                priority = 959000L;
                quotaUser = "repellendus";
                requestId = "facilis";
                uploadType = "molestias";
                uploadProtocol = "dolore";
                userIp = "et";
            }};            

            ComputeFirewallPoliciesRemoveRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveRule(req, new ComputeFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveRuleSecurityOption1("accusantium", "maiores") {{
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

## computeFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.GlobalOrganizationSetPolicyRequest;
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

            ComputeFirewallPoliciesSetIamPolicyRequest req = new ComputeFirewallPoliciesSetIamPolicyRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                globalOrganizationSetPolicyRequest = new GlobalOrganizationSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "expedita";
                            condition = new Expr() {{
                                description = "hic";
                                expression = "blanditiis";
                                location = "vitae";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("velit"),
                                add("molestiae"),
                                add("nam"),
                            }};
                            role = "aperiam";
                        }}),
                        add(new Binding() {{
                            bindingId = "vitae";
                            condition = new Expr() {{
                                description = "mollitia";
                                expression = "asperiores";
                                location = "at";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("deleniti"),
                                add("rem"),
                            }};
                            role = "vel";
                        }}),
                        add(new Binding() {{
                            bindingId = "eos";
                            condition = new Expr() {{
                                description = "labore";
                                expression = "sunt";
                                location = "blanditiis";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("distinctio"),
                                add("incidunt"),
                                add("labore"),
                                add("blanditiis"),
                            }};
                            role = "ducimus";
                        }}),
                    }};
                    etag = "consectetur";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ratione"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("architecto"),
                                            add("sint"),
                                            add("possimus"),
                                            add("tempore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("consequuntur"),
                                }};
                                service = "nemo";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                            add("veritatis"),
                                            add("minima"),
                                            add("magni"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("expedita"),
                                            add("error"),
                                            add("placeat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("earum"),
                                            add("minima"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eius"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dolorum"),
                                    add("alias"),
                                }};
                                service = "itaque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("corrupti"),
                                    add("non"),
                                }};
                                service = "esse";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                            add("omnis"),
                                            add("recusandae"),
                                            add("architecto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("repellat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolore"),
                                            add("optio"),
                                            add("quo"),
                                            add("repudiandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("illum"),
                                            add("iusto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("aliquid"),
                                    add("repellat"),
                                    add("sapiente"),
                                }};
                                service = "consectetur";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "ullam";
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "eius";
                                    location = "dignissimos";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("architecto"),
                                }};
                                role = "amet";
                            }}),
                            add(new Binding() {{
                                bindingId = "corporis";
                                condition = new Expr() {{
                                    description = "nihil";
                                    expression = "officiis";
                                    location = "dolore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("dicta"),
                                    add("hic"),
                                    add("praesentium"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                bindingId = "consequatur";
                                condition = new Expr() {{
                                    description = "totam";
                                    expression = "tempora";
                                    location = "quo";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("omnis"),
                                }};
                                role = "quam";
                            }}),
                            add(new Binding() {{
                                bindingId = "officiis";
                                condition = new Expr() {{
                                    description = "dicta";
                                    expression = "excepturi";
                                    location = "consectetur";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("incidunt"),
                                }};
                                role = "corporis";
                            }}),
                        }};
                        etag = "quaerat";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "corrupti";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("placeat"),
                                            add("fugit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.IN;
                                        svc = "nobis";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("ducimus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "consectetur";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("iure"),
                                            add("aliquid"),
                                            add("cum"),
                                            add("fugiat"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "officiis";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("aut"),
                                            add("voluptatem"),
                                            add("libero"),
                                            add("excepturi"),
                                        }};
                                    }}),
                                }};
                                description = "odio";
                                ins = new String[]{{
                                    add("officiis"),
                                    add("delectus"),
                                    add("magni"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Nicole Becker";
                                                    value = "aut";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Forrest Ryan";
                                                    value = "ea";
                                                }}),
                                            }};
                                            field = "eius";
                                            metric = "aperiam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("beatae"),
                                }};
                                permissions = new String[]{{
                                    add("rerum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "incidunt";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("aliquid"),
                                            add("ullam"),
                                            add("maiores"),
                                            add("debitis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "assumenda";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quae"),
                                            add("nihil"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "consequatur";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("adipisci"),
                                            add("tenetur"),
                                            add("non"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "earum";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }}),
                                }};
                                description = "impedit";
                                ins = new String[]{{
                                    add("cum"),
                                    add("dolore"),
                                    add("illum"),
                                    add("ea"),
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
                                                    name = "Donald Wuckert";
                                                    value = "fuga";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rufus White";
                                                    value = "eligendi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Preston Herzog";
                                                    value = "cupiditate";
                                                }}),
                                            }};
                                            field = "unde";
                                            metric = "et";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dewey Reilly";
                                                    value = "sint";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kristin Boyle";
                                                    value = "numquam";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "inventore";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Mr. Rene Harris";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Orlando Muller MD";
                                                    value = "voluptas";
                                                }}),
                                            }};
                                            field = "sint";
                                            metric = "maiores";
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
                                                    name = "Erik Champlin";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                            field = "enim";
                                            metric = "sit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptatem"),
                                    add("tempora"),
                                    add("occaecati"),
                                }};
                                permissions = new String[]{{
                                    add("veritatis"),
                                }};
                            }}),
                        }};
                        version = 402908;
                    }};;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "dolores";
                fields = "perferendis";
                key = "esse";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "laudantium";
                uploadProtocol = "voluptates";
                userIp = "minus";
            }};            

            ComputeFirewallPoliciesSetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesSetIamPolicy(req, new ComputeFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesSetIamPolicySecurityOption1("autem", "vel") {{
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

## computeFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesTestIamPermissionsRequest req = new ComputeFirewallPoliciesTestIamPermissionsRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("soluta"),
                    }};
                }};;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "suscipit";
                key = "ullam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "quidem";
                uploadProtocol = "magnam";
                userIp = "doloremque";
            }};            

            ComputeFirewallPoliciesTestIamPermissionsResponse res = sdk.firewallPolicies.computeFirewallPoliciesTestIamPermissions(req, new ComputeFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeFirewallPoliciesTestIamPermissionsSecurityOption1("accusamus", "quod") {{
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
