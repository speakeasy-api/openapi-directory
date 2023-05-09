# organizationSecurityPolicies

### Available Operations

* [computeOrganizationSecurityPoliciesAddAssociation](#computeorganizationsecuritypoliciesaddassociation) - Inserts an association for the specified security policy.
* [computeOrganizationSecurityPoliciesAddRule](#computeorganizationsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeOrganizationSecurityPoliciesCopyRules](#computeorganizationsecuritypoliciescopyrules) - Copies rules to the specified security policy.
* [computeOrganizationSecurityPoliciesDelete](#computeorganizationsecuritypoliciesdelete) - Deletes the specified policy.
* [computeOrganizationSecurityPoliciesGet](#computeorganizationsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeOrganizationSecurityPoliciesGetAssociation](#computeorganizationsecuritypoliciesgetassociation) - Gets an association with the specified name.
* [computeOrganizationSecurityPoliciesGetRule](#computeorganizationsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeOrganizationSecurityPoliciesInsert](#computeorganizationsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeOrganizationSecurityPoliciesList](#computeorganizationsecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeOrganizationSecurityPoliciesListAssociations](#computeorganizationsecuritypolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeOrganizationSecurityPoliciesMove](#computeorganizationsecuritypoliciesmove) - Moves the specified security policy.
* [computeOrganizationSecurityPoliciesPatch](#computeorganizationsecuritypoliciespatch) - Patches the specified policy with the data included in the request.
* [computeOrganizationSecurityPoliciesPatchRule](#computeorganizationsecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeOrganizationSecurityPoliciesRemoveAssociation](#computeorganizationsecuritypoliciesremoveassociation) - Removes an association for the specified security policy.
* [computeOrganizationSecurityPoliciesRemoveRule](#computeorganizationsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

## computeOrganizationSecurityPoliciesAddAssociation

Inserts an association for the specified security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesAddAssociationRequest req = new ComputeOrganizationSecurityPoliciesAddAssociationRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyAssociation = new SecurityPolicyAssociation() {{
                    attachmentId = "vero";
                    displayName = "quia";
                    name = "Penny Donnelly";
                    securityPolicyId = "esse";
                }};;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "fugiat";
                key = "nobis";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "illo";
                replaceExistingAssociation = false;
                requestId = "nemo";
                uploadType = "laboriosam";
                uploadProtocol = "consequuntur";
                userIp = "fuga";
            }};            

            ComputeOrganizationSecurityPoliciesAddAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesAddAssociation(req, new ComputeOrganizationSecurityPoliciesAddAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption1("reiciendis", "cum") {{
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

## computeOrganizationSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesAddRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesAddRuleRequest req = new ComputeOrganizationSecurityPoliciesAddRuleRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "officiis";
                    description = "voluptatem";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "et";
                                headerValue = "alias";
                            }}),
                        }};
                    }};;
                    kind = "vero";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("commodi"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "reprehenderit";
                                    ports = new String[]{{
                                        add("doloribus"),
                                        add("error"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "ea";
                                    ports = new String[]{{
                                        add("sint"),
                                        add("animi"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "cum";
                                    ports = new String[]{{
                                        add("dolor"),
                                        add("blanditiis"),
                                        add("tempora"),
                                        add("eos"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("possimus"),
                                add("maxime"),
                                add("dolor"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "nesciunt";
                            expression = "aut";
                            location = "quaerat";
                            title = "Mrs.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "saepe";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ex";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "illo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quaerat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "quaerat";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "doloribus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "occaecati";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "aut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "temporibus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "hic";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "tempora";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "dolore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "culpa";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("laboriosam"),
                                }};
                                targetRuleSet = "deleniti";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "mollitia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "adipisci";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quas";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quos";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "qui";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "et";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "voluptatum";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "sequi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "pariatur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "enim";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "aut";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("deleniti"),
                                    add("aliquid"),
                                    add("quasi"),
                                }};
                                targetRuleSet = "ex";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "cum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "quibusdam";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "sequi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "eos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "cum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "ad";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "corrupti";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "ratione";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "amet";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "nostrum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "eius";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("assumenda"),
                                    add("iusto"),
                                    add("ipsam"),
                                    add("id"),
                                }};
                                targetRuleSet = "pariatur";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 458192;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 949201;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 249124;
                            intervalSec = 437549;
                        }};;
                        conformAction = "consequatur";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "a";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "aliquam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "similique";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "pariatur";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                            }}),
                        }};
                        enforceOnKeyName = "laboriosam";
                        exceedAction = "fugit";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "molestias";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 171154;
                            intervalSec = 764721;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "doloribus";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    ruleNumber = "dignissimos";
                    ruleTupleCount = 687198;
                    targetResources = new String[]{{
                        add("nesciunt"),
                        add("voluptatum"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("atque"),
                        add("beatae"),
                        add("quo"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "officiis";
                key = "reprehenderit";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "doloremque";
                uploadType = "minus";
                uploadProtocol = "consectetur";
                userIp = "accusantium";
            }};            

            ComputeOrganizationSecurityPoliciesAddRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesAddRule(req, new ComputeOrganizationSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1("fuga", "odio") {{
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

## computeOrganizationSecurityPoliciesCopyRules

Copies rules to the specified security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesCopyRulesRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesCopyRulesResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesCopyRulesSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesCopyRulesRequest req = new ComputeOrganizationSecurityPoliciesCopyRulesRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "perspiciatis";
                key = "totam";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "autem";
                sourceSecurityPolicy = "magnam";
                uploadType = "id";
                uploadProtocol = "eaque";
                userIp = "doloribus";
            }};            

            ComputeOrganizationSecurityPoliciesCopyRulesResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesCopyRules(req, new ComputeOrganizationSecurityPoliciesCopyRulesSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption1("consequuntur", "suscipit") {{
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

## computeOrganizationSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesDeleteRequest req = new ComputeOrganizationSecurityPoliciesDeleteRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "quam";
                key = "fugit";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "occaecati";
                uploadType = "aspernatur";
                uploadProtocol = "vel";
                userIp = "quidem";
            }};            

            ComputeOrganizationSecurityPoliciesDeleteResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesDelete(req, new ComputeOrganizationSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesDeleteSecurityOption1("suscipit", "voluptates") {{
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

## computeOrganizationSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesGetRequest req = new ComputeOrganizationSecurityPoliciesGetRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "neque";
                key = "praesentium";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "incidunt";
                uploadProtocol = "tenetur";
                userIp = "blanditiis";
            }};            

            ComputeOrganizationSecurityPoliciesGetResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGet(req, new ComputeOrganizationSecurityPoliciesGetSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetSecurityOption1("accusamus", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeOrganizationSecurityPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesGetAssociationRequest req = new ComputeOrganizationSecurityPoliciesGetAssociationRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "perspiciatis";
                key = "excepturi";
                name = "Lorena Mohr";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "modi";
                uploadProtocol = "molestiae";
                userIp = "dolorum";
            }};            

            ComputeOrganizationSecurityPoliciesGetAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGetAssociation(req, new ComputeOrganizationSecurityPoliciesGetAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption1("reiciendis", "soluta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicyAssociation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeOrganizationSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesGetRuleRequest req = new ComputeOrganizationSecurityPoliciesGetRuleRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "qui";
                key = "minus";
                oauthToken = "animi";
                prettyPrint = false;
                priority = 409284L;
                quotaUser = "amet";
                uploadType = "illum";
                uploadProtocol = "consequuntur";
                userIp = "deleniti";
            }};            

            ComputeOrganizationSecurityPoliciesGetRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGetRule(req, new ComputeOrganizationSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1("explicabo", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeOrganizationSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicy;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAssociation;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesInsertRequest req = new ComputeOrganizationSecurityPoliciesInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 3199.8;
                            expirationSec = 711912;
                            impactedBaselineThreshold = 2480.51;
                            loadThreshold = 9274.75;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("repellendus"),
                                add("provident"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("dolor"),
                            add("iusto"),
                            add("voluptate"),
                            add("nemo"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "corporis";
                            displayName = "a";
                            name = "Dwayne Ortiz";
                            securityPolicyId = "hic";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "dolorum";
                            displayName = "unde";
                            name = "Sheila Hermiston";
                            securityPolicyId = "sint";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "numquam";
                            displayName = "quos";
                            name = "Tara Cummings";
                            securityPolicyId = "pariatur";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "iure";
                            displayName = "vitae";
                            name = "Harry Gleason Jr.";
                            securityPolicyId = "blanditiis";
                        }}),
                    }};
                    creationTimestamp = "nulla";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED;
                    }};;
                    description = "debitis";
                    displayName = "incidunt";
                    fingerprint = "sunt";
                    id = "excepturi";
                    kind = "quam";
                    labelFingerprint = "adipisci";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "sunt");
                        put("itaque", "pariatur");
                    }};
                    name = "Mercedes Kertzmann";
                    parent = "magni";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "cupiditate";
                    }};;
                    region = "eius";
                    ruleTupleCount = 660418;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "aperiam";
                            description = "repellendus";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "accusantium";
                                        headerValue = "sed";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "animi";
                                        headerValue = "consequatur";
                                    }}),
                                }};
                            }};
                            kind = "autem";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("cupiditate"),
                                        add("voluptatibus"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptatem";
                                            ports = new String[]{{
                                                add("eveniet"),
                                                add("aspernatur"),
                                                add("ipsa"),
                                                add("atque"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "laborum";
                                            ports = new String[]{{
                                                add("exercitationem"),
                                                add("eum"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("veritatis"),
                                        add("dolor"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "corrupti";
                                    expression = "quis";
                                    location = "eligendi";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ipsum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "facere";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aut";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "tempora";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "suscipit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quasi";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quidem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("iusto"),
                                            add("quibusdam"),
                                        }};
                                        targetRuleSet = "illum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nobis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nam";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "a";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "cumque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "rem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "alias";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eius";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("tempore"),
                                            add("expedita"),
                                        }};
                                        targetRuleSet = "quos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "id";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nihil";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "nobis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusantium";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "excepturi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "occaecati";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "maxime";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("facilis"),
                                        }};
                                        targetRuleSet = "corrupti";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 1556;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 350433;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 771227;
                                    intervalSec = 828460;
                                }};
                                conformAction = "vitae";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.REGION_CODE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "doloremque";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "dolorem";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "perspiciatis";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quibusdam";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                }};
                                enforceOnKeyName = "error";
                                exceedAction = "quaerat";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "recusandae";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 472160;
                                    intervalSec = 926601;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "soluta";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "quis";
                            ruleTupleCount = 867330;
                            targetResources = new String[]{{
                                add("blanditiis"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("recusandae"),
                                add("enim"),
                                add("possimus"),
                                add("in"),
                            }};
                        }}),
                    }};
                    selfLink = "reprehenderit";
                    selfLinkWithId = "modi";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "vero";
                key = "doloremque";
                oauthToken = "molestiae";
                parentId = "aperiam";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "similique";
                uploadType = "accusamus";
                uploadProtocol = "eaque";
                userIp = "aliquam";
            }};            

            ComputeOrganizationSecurityPoliciesInsertResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesInsert(req, new ComputeOrganizationSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesInsertSecurityOption1("mollitia", "necessitatibus") {{
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

## computeOrganizationSecurityPoliciesList

List all the policies that have been configured for the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesListRequest req = new ComputeOrganizationSecurityPoliciesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "omnis";
                filter = "placeat";
                key = "ipsum";
                maxResults = 853221L;
                oauthToken = "omnis";
                orderBy = "hic";
                pageToken = "quasi";
                parentId = "aliquam";
                prettyPrint = false;
                quotaUser = "corrupti";
                returnPartialSuccess = false;
                uploadType = "porro";
                uploadProtocol = "omnis";
                userIp = "doloribus";
            }};            

            ComputeOrganizationSecurityPoliciesListResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesList(req, new ComputeOrganizationSecurityPoliciesListSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesListSecurityOption1("alias", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeOrganizationSecurityPoliciesListAssociations

Lists associations of a specified target, i.e., organization or folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesListAssociationsRequest req = new ComputeOrganizationSecurityPoliciesListAssociationsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "in";
                key = "optio";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "odit";
                targetResource = "doloremque";
                uploadType = "laboriosam";
                uploadProtocol = "blanditiis";
                userIp = "quaerat";
            }};            

            ComputeOrganizationSecurityPoliciesListAssociationsResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesListAssociations(req, new ComputeOrganizationSecurityPoliciesListAssociationsSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption1("perspiciatis", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.organizationSecurityPoliciesListAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeOrganizationSecurityPoliciesMove

Moves the specified security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesMoveRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesMoveResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesMoveSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesMoveRequest req = new ComputeOrganizationSecurityPoliciesMoveRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "voluptates";
                key = "officiis";
                oauthToken = "maxime";
                parentId = "totam";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "deleniti";
                uploadType = "enim";
                uploadProtocol = "iure";
                userIp = "ipsam";
            }};            

            ComputeOrganizationSecurityPoliciesMoveResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesMove(req, new ComputeOrganizationSecurityPoliciesMoveSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesMoveSecurityOption1("atque", "omnis") {{
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

## computeOrganizationSecurityPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicy;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAssociation;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesPatchRequest req = new ComputeOrganizationSecurityPoliciesPatchRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 5806.68;
                            expirationSec = 972230;
                            impactedBaselineThreshold = 6423;
                            loadThreshold = 9265.16;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("incidunt"),
                                add("aperiam"),
                                add("itaque"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("eum"),
                            add("corrupti"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "doloremque";
                            displayName = "deleniti";
                            name = "Mrs. Jonathan Bednar";
                            securityPolicyId = "illo";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "magnam";
                            displayName = "corrupti";
                            name = "June Kemmer";
                            securityPolicyId = "quisquam";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "id";
                            displayName = "saepe";
                            name = "Bobby Monahan IV";
                            securityPolicyId = "nemo";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "vitae";
                            displayName = "magnam";
                            name = "Marilyn Gutkowski";
                            securityPolicyId = "amet";
                        }}),
                    }};
                    creationTimestamp = "nesciunt";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "nam";
                    displayName = "numquam";
                    fingerprint = "ipsum";
                    id = "reiciendis";
                    kind = "error";
                    labelFingerprint = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "esse");
                        put("nostrum", "facere");
                        put("veritatis", "dolor");
                    }};
                    name = "Clinton Green";
                    parent = "qui";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "doloribus";
                    }};;
                    region = "corrupti";
                    ruleTupleCount = 866138;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "magnam";
                            description = "sunt";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "illo";
                                        headerValue = "occaecati";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "similique";
                                        headerValue = "occaecati";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "deserunt";
                                        headerValue = "corrupti";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "iure";
                                        headerValue = "qui";
                                    }}),
                                }};
                            }};
                            kind = "qui";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("quos"),
                                        add("et"),
                                        add("accusamus"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "officiis";
                                            ports = new String[]{{
                                                add("qui"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "ratione";
                                            ports = new String[]{{
                                                add("dolore"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "eius";
                                            ports = new String[]{{
                                                add("aliquam"),
                                                add("placeat"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("labore"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "nobis";
                                    expression = "illo";
                                    location = "provident";
                                    title = "Mr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "incidunt";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "consectetur";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "odio";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "blanditiis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reiciendis";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("minus"),
                                        }};
                                        targetRuleSet = "facilis";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 172520;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 851384;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 802851;
                                    intervalSec = 590173;
                                }};
                                conformAction = "expedita";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL_IPS;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "unde";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "dicta";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "sunt";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "culpa";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "architecto";
                                exceedAction = "laboriosam";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "inventore";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 280872;
                                    intervalSec = 807713;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "illo";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "at";
                            ruleTupleCount = 836274;
                            targetResources = new String[]{{
                                add("tenetur"),
                                add("iure"),
                                add("vero"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("suscipit"),
                                add("minus"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "atque";
                            description = "fuga";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "distinctio";
                                        headerValue = "nam";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "expedita";
                                        headerValue = "voluptatibus";
                                    }}),
                                }};
                            }};
                            kind = "ut";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("iste"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "eaque";
                                            ports = new String[]{{
                                                add("magnam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "illum";
                                            ports = new String[]{{
                                                add("accusamus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "laboriosam";
                                            ports = new String[]{{
                                                add("cum"),
                                                add("placeat"),
                                                add("eius"),
                                                add("dolor"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "eos";
                                            ports = new String[]{{
                                                add("quibusdam"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("voluptates"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "natus";
                                    expression = "in";
                                    location = "eligendi";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reiciendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "itaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laudantium";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "inventore";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "inventore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "molestiae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quos";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "delectus";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aliquam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("ducimus"),
                                            add("dolorem"),
                                            add("doloribus"),
                                            add("in"),
                                        }};
                                        targetRuleSet = "voluptatem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "mollitia";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "harum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "modi";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "similique";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("sit"),
                                            add("vero"),
                                            add("distinctio"),
                                        }};
                                        targetRuleSet = "fugiat";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 12140;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 182665;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 596670;
                                    intervalSec = 926032;
                                }};
                                conformAction = "at";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ad";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "non";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "maxime";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "reprehenderit";
                                exceedAction = "ipsam";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "praesentium";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 29923;
                                    intervalSec = 529884;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "illum";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "repellendus";
                            ruleTupleCount = 881882;
                            targetResources = new String[]{{
                                add("error"),
                                add("excepturi"),
                                add("voluptas"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("maiores"),
                                add("inventore"),
                                add("at"),
                                add("cupiditate"),
                            }};
                        }}),
                    }};
                    selfLink = "omnis";
                    selfLinkWithId = "tempora";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_EDGE;
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "ab";
                key = "numquam";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "velit";
                uploadType = "tenetur";
                uploadProtocol = "omnis";
                userIp = "alias";
            }};            

            ComputeOrganizationSecurityPoliciesPatchResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesPatch(req, new ComputeOrganizationSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesPatchSecurityOption1("nam", "possimus") {{
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

## computeOrganizationSecurityPoliciesPatchRule

Patches a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesPatchRuleRequest req = new ComputeOrganizationSecurityPoliciesPatchRuleRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "corrupti";
                    description = "rem";
                    direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "officia";
                                headerValue = "consequatur";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "soluta";
                                headerValue = "cumque";
                            }}),
                        }};
                    }};;
                    kind = "ipsum";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("culpa"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "tempora";
                                    ports = new String[]{{
                                        add("amet"),
                                        add("quidem"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "tempora";
                                    ports = new String[]{{
                                        add("nemo"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "ea";
                                    ports = new String[]{{
                                        add("tempore"),
                                        add("amet"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "hic";
                                    ports = new String[]{{
                                        add("dolor"),
                                        add("necessitatibus"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("aspernatur"),
                                add("animi"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "ipsum";
                            expression = "neque";
                            location = "quae";
                            title = "Mrs.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "molestiae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "accusantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "sapiente";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "odit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "saepe";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "odit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "reiciendis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "itaque";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "ex";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("quas"),
                                    add("alias"),
                                }};
                                targetRuleSet = "reprehenderit";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "perspiciatis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "asperiores";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "labore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "fuga";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "sed";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "maiores";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "id";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "officiis";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "suscipit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "aliquam";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("recusandae"),
                                    add("accusantium"),
                                }};
                                targetRuleSet = "eligendi";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "impedit";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "natus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "illo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "qui";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "tempora";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ipsa";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "repudiandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "vitae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "necessitatibus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "nemo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "labore";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("quidem"),
                                    add("tempore"),
                                }};
                                targetRuleSet = "vel";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 852391;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 556904;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 525439;
                            intervalSec = 485367;
                        }};;
                        conformAction = "ex";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "ullam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "temporibus";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                            }}),
                        }};
                        enforceOnKeyName = "officiis";
                        exceedAction = "soluta";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "voluptatem";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 874638;
                            intervalSec = 151092;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "quasi";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    ruleNumber = "natus";
                    ruleTupleCount = 637772;
                    targetResources = new String[]{{
                        add("molestiae"),
                        add("doloribus"),
                        add("ullam"),
                        add("nam"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("id"),
                        add("ipsam"),
                    }};
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "voluptas";
                key = "minus";
                oauthToken = "perferendis";
                prettyPrint = false;
                priority = 488309L;
                quotaUser = "fugit";
                requestId = "maxime";
                uploadType = "exercitationem";
                uploadProtocol = "quibusdam";
                userIp = "magni";
            }};            

            ComputeOrganizationSecurityPoliciesPatchRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesPatchRule(req, new ComputeOrganizationSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1("eum", "possimus") {{
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

## computeOrganizationSecurityPoliciesRemoveAssociation

Removes an association for the specified security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesRemoveAssociationRequest req = new ComputeOrganizationSecurityPoliciesRemoveAssociationRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "odio";
                key = "aliquam";
                name = "Connie Dickinson";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "voluptas";
                uploadType = "assumenda";
                uploadProtocol = "cum";
                userIp = "aliquid";
            }};            

            ComputeOrganizationSecurityPoliciesRemoveAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesRemoveAssociation(req, new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption1("facilis", "cum") {{
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

## computeOrganizationSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesRemoveRuleRequest req = new ComputeOrganizationSecurityPoliciesRemoveRuleRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "sequi";
                key = "inventore";
                oauthToken = "doloremque";
                prettyPrint = false;
                priority = 751638L;
                quotaUser = "velit";
                requestId = "at";
                uploadType = "architecto";
                uploadProtocol = "eius";
                userIp = "rerum";
            }};            

            ComputeOrganizationSecurityPoliciesRemoveRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesRemoveRule(req, new ComputeOrganizationSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption1("laborum", "excepturi") {{
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
