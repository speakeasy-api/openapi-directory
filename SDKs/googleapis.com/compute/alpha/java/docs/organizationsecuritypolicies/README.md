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

            ComputeOrganizationSecurityPoliciesAddAssociationRequest req = new ComputeOrganizationSecurityPoliciesAddAssociationRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyAssociation = new SecurityPolicyAssociation() {{
                    attachmentId = "corrupti";
                    displayName = "placeat";
                    name = "Ms. Muriel Bayer";
                    securityPolicyId = "cumque";
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "tempore";
                key = "ex";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "officia";
                replaceExistingAssociation = false;
                requestId = "illo";
                uploadType = "illo";
                uploadProtocol = "magni";
                userIp = "quas";
            }};            

            ComputeOrganizationSecurityPoliciesAddAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesAddAssociation(req, new ComputeOrganizationSecurityPoliciesAddAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesAddAssociationSecurityOption1("consequatur", "reprehenderit") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesAddRuleRequest req = new ComputeOrganizationSecurityPoliciesAddRuleRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "neque";
                    description = "tempora";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "et";
                                headerValue = "deserunt";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "deleniti";
                                headerValue = "cupiditate";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "ea";
                                headerValue = "optio";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "tempora";
                                headerValue = "quae";
                            }}),
                        }};
                    }};;
                    kind = "tenetur";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("quaerat"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "est";
                                    ports = new String[]{{
                                        add("delectus"),
                                        add("quos"),
                                        add("rerum"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "laudantium";
                                    ports = new String[]{{
                                        add("voluptas"),
                                        add("porro"),
                                        add("doloremque"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "pariatur";
                                    ports = new String[]{{
                                        add("exercitationem"),
                                        add("consectetur"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "iste";
                                    ports = new String[]{{
                                        add("similique"),
                                        add("deserunt"),
                                        add("facilis"),
                                        add("consequatur"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "cupiditate";
                                    ports = new String[]{{
                                        add("rerum"),
                                        add("doloremque"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("nulla"),
                                add("maiores"),
                                add("dolor"),
                                add("eligendi"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "atque";
                            expression = "nobis";
                            location = "nesciunt";
                            title = "Dr.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("mollitia"),
                            add("repellendus"),
                            add("cumque"),
                        }};
                        destPorts = new String[]{{
                            add("rem"),
                            add("officia"),
                            add("repellendus"),
                        }};
                        ipProtocols = new String[]{{
                            add("optio"),
                            add("alias"),
                            add("totam"),
                            add("laudantium"),
                        }};
                        srcAsns = new Long[]{{
                            add(557301L),
                            add(122710L),
                            add(202772L),
                            add(140246L),
                        }};
                        srcIpRanges = new String[]{{
                            add("asperiores"),
                            add("amet"),
                            add("explicabo"),
                        }};
                        srcPorts = new String[]{{
                            add("similique"),
                            add("reiciendis"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("blanditiis"),
                            add("laboriosam"),
                            add("sunt"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Felix Boehm";
                                values = new String[]{{
                                    add("magnam"),
                                    add("quae"),
                                    add("quibusdam"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Doris Mante";
                                values = new String[]{{
                                    add("adipisci"),
                                }};
                            }}),
                        }};
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "dolorem";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "pariatur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "esse";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "eaque";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "provident";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "repudiandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "fuga";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("recusandae"),
                                }};
                                targetRuleSet = "voluptatem";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "inventore";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ipsum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ea";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "dicta";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ad";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "dolore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quia";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "unde";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "velit";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("aut"),
                                    add("provident"),
                                    add("aliquam"),
                                    add("commodi"),
                                }};
                                targetRuleSet = "vero";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "sed";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "sequi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "est";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "dignissimos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "eius";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "quidem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "expedita";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "debitis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "cumque";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "quaerat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "architecto";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "nemo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "illum";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("quam"),
                                    add("delectus"),
                                    add("cumque"),
                                }};
                                targetRuleSet = "tempore";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "voluptatibus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quas";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "porro";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "a";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "labore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "nemo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "corrupti";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "laborum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "accusantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "doloremque";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "optio";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("quia"),
                                    add("cupiditate"),
                                    add("dignissimos"),
                                }};
                                targetRuleSet = "corrupti";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 844099;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 484006;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 450270;
                            intervalSec = 560512;
                        }};;
                        conformAction = "sit";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "voluptates";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                        }};
                        enforceOnKeyName = "illum";
                        exceedAction = "autem";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 500778;
                            message = "sit";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "iste";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 609764;
                            intervalSec = 877295;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "adipisci";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    redirectTarget = "consequuntur";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                    ruleNumber = "officiis";
                    ruleTupleCount = 974132;
                    targetResources = new String[]{{
                        add("dolorem"),
                        add("eveniet"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("quidem"),
                        add("aliquam"),
                        add("tempore"),
                    }};
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "officiis";
                key = "odit";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "ipsa";
                uploadType = "assumenda";
                uploadProtocol = "necessitatibus";
                userIp = "accusantium";
            }};            

            ComputeOrganizationSecurityPoliciesAddRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesAddRule(req, new ComputeOrganizationSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesAddRuleSecurityOption1("corrupti", "porro") {{
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

            ComputeOrganizationSecurityPoliciesCopyRulesRequest req = new ComputeOrganizationSecurityPoliciesCopyRulesRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "esse";
                key = "nostrum";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "maxime";
                requestId = "omnis";
                sourceSecurityPolicy = "ipsam";
                uploadType = "atque";
                uploadProtocol = "animi";
                userIp = "molestiae";
            }};            

            ComputeOrganizationSecurityPoliciesCopyRulesResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesCopyRules(req, new ComputeOrganizationSecurityPoliciesCopyRulesSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesCopyRulesSecurityOption1("possimus", "porro") {{
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

            ComputeOrganizationSecurityPoliciesDeleteRequest req = new ComputeOrganizationSecurityPoliciesDeleteRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "error";
                key = "magnam";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "eum";
                requestId = "magnam";
                uploadType = "impedit";
                uploadProtocol = "aspernatur";
                userIp = "optio";
            }};            

            ComputeOrganizationSecurityPoliciesDeleteResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesDelete(req, new ComputeOrganizationSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesDeleteSecurityOption1("eos", "id") {{
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

            ComputeOrganizationSecurityPoliciesGetRequest req = new ComputeOrganizationSecurityPoliciesGetRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "delectus";
                key = "beatae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "ab";
                uploadProtocol = "perspiciatis";
                userIp = "aut";
            }};            

            ComputeOrganizationSecurityPoliciesGetResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGet(req, new ComputeOrganizationSecurityPoliciesGetSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetSecurityOption1("cupiditate", "unde") {{
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

            ComputeOrganizationSecurityPoliciesGetAssociationRequest req = new ComputeOrganizationSecurityPoliciesGetAssociationRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "accusamus";
                key = "ab";
                name = "Brett O'Connell III";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "inventore";
                uploadProtocol = "voluptate";
                userIp = "inventore";
            }};            

            ComputeOrganizationSecurityPoliciesGetAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGetAssociation(req, new ComputeOrganizationSecurityPoliciesGetAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetAssociationSecurityOption1("vero", "ipsa") {{
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

            ComputeOrganizationSecurityPoliciesGetRuleRequest req = new ComputeOrganizationSecurityPoliciesGetRuleRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "quo";
                prettyPrint = false;
                priority = 301959L;
                quotaUser = "porro";
                uploadType = "blanditiis";
                uploadProtocol = "magnam";
                userIp = "rerum";
            }};            

            ComputeOrganizationSecurityPoliciesGetRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesGetRule(req, new ComputeOrganizationSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1("reprehenderit", "in") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyCloudArmorConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedFieldBaseEnum;
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
                            confidenceThreshold = 8661.56;
                            expirationSec = 5266;
                            impactedBaselineThreshold = 3611.39;
                            loadThreshold = 8772.91;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.PREMIUM;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("accusantium"),
                                add("occaecati"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                        userIpRequestHeaders = new String[]{{
                            add("quo"),
                            add("harum"),
                            add("corporis"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "fuga";
                            displayName = "amet";
                            name = "Malcolm Sporer";
                            securityPolicyId = "dignissimos";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "quibusdam";
                            displayName = "possimus";
                            name = "Teri Heller";
                            securityPolicyId = "aliquam";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "harum";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED;
                    }};;
                    description = "vitae";
                    displayName = "debitis";
                    fingerprint = "quaerat";
                    id = "cumque";
                    kind = "explicabo";
                    labelFingerprint = "aliquid";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eum", "ipsam");
                    }};
                    name = "Elisa Schulist";
                    parent = "in";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "occaecati";
                    }};;
                    region = "illo";
                    ruleTupleCount = 715620;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "fugiat";
                            description = "aliquam";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "architecto";
                                        headerValue = "dicta";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "excepturi";
                                        headerValue = "animi";
                                    }}),
                                }};
                            }};
                            kind = "laboriosam";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("eos"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "at";
                                            ports = new String[]{{
                                                add("a"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "quidem";
                                            ports = new String[]{{
                                                add("in"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "fugiat";
                                            ports = new String[]{{
                                                add("adipisci"),
                                                add("laboriosam"),
                                                add("delectus"),
                                                add("facere"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "earum";
                                            ports = new String[]{{
                                                add("accusantium"),
                                                add("facilis"),
                                                add("unde"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quidem";
                                            ports = new String[]{{
                                                add("id"),
                                                add("consectetur"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "deserunt";
                                            ports = new String[]{{
                                                add("numquam"),
                                                add("hic"),
                                                add("excepturi"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quae";
                                            ports = new String[]{{
                                                add("sapiente"),
                                                add("a"),
                                                add("maxime"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("necessitatibus"),
                                        add("eligendi"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "eaque";
                                    expression = "nesciunt";
                                    location = "magnam";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("ex"),
                                    add("cum"),
                                }};
                                destPorts = new String[]{{
                                    add("dolor"),
                                }};
                                ipProtocols = new String[]{{
                                    add("excepturi"),
                                }};
                                srcAsns = new Long[]{{
                                    add(750533L),
                                    add(533996L),
                                    add(751399L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("rerum"),
                                    add("quia"),
                                    add("enim"),
                                    add("exercitationem"),
                                }};
                                srcPorts = new String[]{{
                                    add("cupiditate"),
                                    add("explicabo"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quos"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Marta Barrows";
                                        values = new String[]{{
                                            add("sunt"),
                                            add("dignissimos"),
                                            add("veritatis"),
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Vicki Lindgren";
                                        values = new String[]{{
                                            add("maxime"),
                                            add("aspernatur"),
                                            add("doloremque"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Miss Norma Predovic";
                                        values = new String[]{{
                                            add("labore"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Tina Beahan";
                                        values = new String[]{{
                                            add("dolorem"),
                                            add("eaque"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "facere";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "incidunt";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ducimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aspernatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "accusamus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quas";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "soluta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "possimus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dignissimos"),
                                        }};
                                        targetRuleSet = "officiis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eligendi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "corporis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "laudantium";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "tempore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quisquam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dolorum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "aspernatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "exercitationem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "deleniti";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nihil";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("tempore"),
                                            add("inventore"),
                                            add("incidunt"),
                                        }};
                                        targetRuleSet = "voluptas";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 89204;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 338056;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 937445;
                                    intervalSec = 880185;
                                }};
                                conformAction = "sed";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL_IPS;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "eius";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                }};
                                enforceOnKeyName = "aperiam";
                                exceedAction = "laboriosam";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 465898;
                                    message = "vero";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "consequuntur";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 976525;
                                    intervalSec = 267849;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "eum";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "saepe";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "nesciunt";
                            ruleTupleCount = 878895;
                            targetResources = new String[]{{
                                add("at"),
                                add("cum"),
                                add("debitis"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("placeat"),
                                add("est"),
                                add("harum"),
                                add("repellat"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "quasi";
                            description = "distinctio";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "dolores";
                                        headerValue = "vero";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "mollitia";
                                        headerValue = "distinctio";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "incidunt";
                                        headerValue = "explicabo";
                                    }}),
                                }};
                            }};
                            kind = "sapiente";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("voluptates"),
                                        add("sed"),
                                        add("tempora"),
                                        add("sed"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "labore";
                                            ports = new String[]{{
                                                add("soluta"),
                                                add("ducimus"),
                                                add("cupiditate"),
                                                add("voluptates"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptatibus";
                                            ports = new String[]{{
                                                add("similique"),
                                                add("quasi"),
                                                add("hic"),
                                                add("magnam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "reiciendis";
                                            ports = new String[]{{
                                                add("reiciendis"),
                                                add("corporis"),
                                                add("aut"),
                                                add("minima"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("deleniti"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "aut";
                                    expression = "eveniet";
                                    location = "veniam";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("molestias"),
                                }};
                                destPorts = new String[]{{
                                    add("delectus"),
                                    add("sapiente"),
                                    add("harum"),
                                    add("exercitationem"),
                                }};
                                ipProtocols = new String[]{{
                                    add("perferendis"),
                                    add("blanditiis"),
                                }};
                                srcAsns = new Long[]{{
                                    add(108991L),
                                    add(770461L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sunt"),
                                    add("culpa"),
                                    add("velit"),
                                    add("ipsam"),
                                }};
                                srcPorts = new String[]{{
                                    add("iste"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("repudiandae"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Katrina Wilkinson";
                                        values = new String[]{{
                                            add("natus"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Kent Marvin";
                                        values = new String[]{{
                                            add("iusto"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Georgia Lang";
                                        values = new String[]{{
                                            add("fuga"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Irvin Hyatt";
                                        values = new String[]{{
                                            add("nulla"),
                                            add("ullam"),
                                            add("dolore"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "soluta";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "itaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "cumque";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "incidunt";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "atque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "neque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "asperiores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ut";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("ut"),
                                            add("sed"),
                                            add("voluptatum"),
                                        }};
                                        targetRuleSet = "soluta";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "veritatis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "esse";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nulla";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "autem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "expedita";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "provident";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "consectetur";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "consequuntur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "a";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("iste"),
                                            add("quibusdam"),
                                        }};
                                        targetRuleSet = "magnam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aperiam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sit";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "perferendis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "repellat";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("id"),
                                            add("non"),
                                        }};
                                        targetRuleSet = "iste";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 807596;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 405130;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 730270;
                                    intervalSec = 938718;
                                }};
                                conformAction = "hic";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "rem";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                }};
                                enforceOnKeyName = "impedit";
                                exceedAction = "perspiciatis";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 99075;
                                    message = "quos";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "quam";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 662924;
                                    intervalSec = 270976;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "necessitatibus";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            redirectTarget = "doloremque";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "sed";
                            ruleTupleCount = 658321;
                            targetResources = new String[]{{
                                add("pariatur"),
                                add("asperiores"),
                                add("labore"),
                                add("laboriosam"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("repellendus"),
                            }};
                        }}),
                    }};
                    selfLink = "aspernatur";
                    selfLinkWithId = "earum";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_EDGE;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV6;
                            mask = "praesentium";
                            name = "Gretchen Pagac";
                            offset = 641670;
                            size = 713075;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV4;
                            mask = "libero";
                            name = "Salvador Lebsack";
                            offset = 884779;
                            size = 995665;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.TCP;
                            mask = "eveniet";
                            name = "Neil Macejkovic";
                            offset = 637234;
                            size = 475914;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "quos";
                            name = "Lynne Paucek";
                            offset = 47602;
                            size = 146405;
                        }}),
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "labore";
                key = "itaque";
                oauthToken = "perferendis";
                parentId = "quia";
                prettyPrint = false;
                quotaUser = "deleniti";
                requestId = "possimus";
                uploadType = "sequi";
                uploadProtocol = "explicabo";
                userIp = "asperiores";
            }};            

            ComputeOrganizationSecurityPoliciesInsertResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesInsert(req, new ComputeOrganizationSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesInsertSecurityOption1("impedit", "debitis") {{
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "tenetur";
                filter = "non";
                key = "unde";
                maxResults = 223815L;
                oauthToken = "ut";
                orderBy = "minima";
                pageToken = "pariatur";
                parentId = "eos";
                prettyPrint = false;
                quotaUser = "nobis";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "temporibus";
                userIp = "inventore";
            }};            

            ComputeOrganizationSecurityPoliciesListResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesList(req, new ComputeOrganizationSecurityPoliciesListSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesListSecurityOption1("voluptatum", "mollitia") {{
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
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "repudiandae";
                key = "odio";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "cumque";
                targetResource = "porro";
                uploadType = "itaque";
                uploadProtocol = "alias";
                userIp = "neque";
            }};            

            ComputeOrganizationSecurityPoliciesListAssociationsResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesListAssociations(req, new ComputeOrganizationSecurityPoliciesListAssociationsSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesListAssociationsSecurityOption1("itaque", "reprehenderit") {{
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

            ComputeOrganizationSecurityPoliciesMoveRequest req = new ComputeOrganizationSecurityPoliciesMoveRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "repudiandae";
                key = "eos";
                oauthToken = "suscipit";
                parentId = "illo";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "error";
                uploadType = "mollitia";
                uploadProtocol = "deleniti";
                userIp = "cupiditate";
            }};            

            ComputeOrganizationSecurityPoliciesMoveResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesMove(req, new ComputeOrganizationSecurityPoliciesMoveSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesMoveSecurityOption1("nihil", "iusto") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyCloudArmorConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedFieldBaseEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesPatchRequest req = new ComputeOrganizationSecurityPoliciesPatchRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 8745.87;
                            expirationSec = 541982;
                            impactedBaselineThreshold = 7278.29;
                            loadThreshold = 7866.92;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("nisi"),
                                add("officia"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("quia"),
                            add("maiores"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "laboriosam";
                            displayName = "optio";
                            name = "Wesley McKenzie";
                            securityPolicyId = "quia";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "ea";
                            displayName = "fuga";
                            name = "Tabitha Runolfsdottir";
                            securityPolicyId = "exercitationem";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "dicta";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "impedit";
                    displayName = "eos";
                    fingerprint = "esse";
                    id = "deserunt";
                    kind = "minima";
                    labelFingerprint = "aliquid";
                    labels = new java.util.HashMap<String, String>() {{
                        put("amet", "explicabo");
                        put("animi", "quaerat");
                    }};
                    name = "Wanda Blanda";
                    parent = "voluptatum";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "exercitationem";
                    }};;
                    region = "asperiores";
                    ruleTupleCount = 567184;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "asperiores";
                            description = "voluptatum";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "iste";
                                        headerValue = "quia";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "consequatur";
                                        headerValue = "suscipit";
                                    }}),
                                }};
                            }};
                            kind = "tempore";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("non"),
                                        add("eos"),
                                        add("vero"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "velit";
                                            ports = new String[]{{
                                                add("modi"),
                                                add("ex"),
                                                add("inventore"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "minus";
                                            ports = new String[]{{
                                                add("aspernatur"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "incidunt";
                                            ports = new String[]{{
                                                add("cum"),
                                                add("perferendis"),
                                                add("cum"),
                                                add("nisi"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "in";
                                            ports = new String[]{{
                                                add("voluptates"),
                                                add("magni"),
                                                add("perspiciatis"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "esse";
                                            ports = new String[]{{
                                                add("a"),
                                                add("inventore"),
                                                add("architecto"),
                                                add("consequatur"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quasi";
                                            ports = new String[]{{
                                                add("aspernatur"),
                                                add("minus"),
                                                add("ducimus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "commodi";
                                            ports = new String[]{{
                                                add("nostrum"),
                                                add("deserunt"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("rerum"),
                                        add("temporibus"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "porro";
                                    expression = "ipsa";
                                    location = "ab";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("error"),
                                }};
                                destPorts = new String[]{{
                                    add("ut"),
                                    add("atque"),
                                    add("atque"),
                                    add("temporibus"),
                                }};
                                ipProtocols = new String[]{{
                                    add("fugit"),
                                    add("nostrum"),
                                }};
                                srcAsns = new Long[]{{
                                    add(913910L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("eos"),
                                }};
                                srcPorts = new String[]{{
                                    add("ratione"),
                                    add("reprehenderit"),
                                    add("aut"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("vitae"),
                                    add("incidunt"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Cedric Blick";
                                        values = new String[]{{
                                            add("nisi"),
                                            add("fuga"),
                                            add("eligendi"),
                                            add("architecto"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "minus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sint";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "provident";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "laborum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "perspiciatis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "consectetur";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "minima";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("iure"),
                                            add("quo"),
                                        }};
                                        targetRuleSet = "magni";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 9838;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 423;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 611121;
                                    intervalSec = 785188;
                                }};
                                conformAction = "quasi";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_HEADER;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ut";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "voluptatum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "dignissimos";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "natus";
                                exceedAction = "sint";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 4212;
                                    message = "voluptas";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "nemo";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 974583;
                                    intervalSec = 159430;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "neque";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            redirectTarget = "minima";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "vitae";
                            ruleTupleCount = 197300;
                            targetResources = new String[]{{
                                add("aspernatur"),
                                add("aliquid"),
                                add("quidem"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("pariatur"),
                                add("autem"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "impedit";
                            description = "rerum";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "sint";
                                        headerValue = "eius";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "magnam";
                                        headerValue = "dignissimos";
                                    }}),
                                }};
                            }};
                            kind = "et";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("tempora"),
                                        add("nihil"),
                                        add("reprehenderit"),
                                        add("odit"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "possimus";
                                            ports = new String[]{{
                                                add("voluptates"),
                                                add("quo"),
                                                add("quis"),
                                                add("velit"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "eligendi";
                                            ports = new String[]{{
                                                add("quis"),
                                                add("minima"),
                                                add("officia"),
                                                add("corrupti"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("porro"),
                                        add("quos"),
                                        add("molestiae"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "sequi";
                                    expression = "dolore";
                                    location = "consequuntur";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("debitis"),
                                    add("distinctio"),
                                    add("aperiam"),
                                    add("aut"),
                                }};
                                destPorts = new String[]{{
                                    add("doloremque"),
                                    add("accusantium"),
                                    add("occaecati"),
                                }};
                                ipProtocols = new String[]{{
                                    add("quo"),
                                }};
                                srcAsns = new Long[]{{
                                    add(141435L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("saepe"),
                                    add("sapiente"),
                                    add("voluptates"),
                                }};
                                srcPorts = new String[]{{
                                    add("minus"),
                                    add("tenetur"),
                                    add("mollitia"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nemo"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Agnes Weimann";
                                        values = new String[]{{
                                            add("qui"),
                                            add("minus"),
                                            add("tenetur"),
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptatem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eaque";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "est";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "omnis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "molestias";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eos";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("corrupti"),
                                            add("quod"),
                                            add("doloremque"),
                                            add("corporis"),
                                        }};
                                        targetRuleSet = "placeat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "amet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aspernatur";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "magni";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "porro";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repudiandae";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iusto";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("autem"),
                                            add("ipsum"),
                                            add("delectus"),
                                            add("deleniti"),
                                        }};
                                        targetRuleSet = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "aspernatur";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "qui";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "harum";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "temporibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aliquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "molestias";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "praesentium";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ab";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("harum"),
                                            add("quidem"),
                                            add("reprehenderit"),
                                        }};
                                        targetRuleSet = "possimus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 599164;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 551847;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 886956;
                                    intervalSec = 473256;
                                }};
                                conformAction = "eius";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "eum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "provident";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ut";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                }};
                                enforceOnKeyName = "praesentium";
                                exceedAction = "corporis";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 730077;
                                    message = "ab";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "iure";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 224237;
                                    intervalSec = 6135;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "reprehenderit";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "fugiat";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "excepturi";
                            ruleTupleCount = 812791;
                            targetResources = new String[]{{
                                add("minus"),
                                add("nesciunt"),
                                add("deserunt"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("sint"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "dolorem";
                            description = "excepturi";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "vero";
                                        headerValue = "dolores";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "doloribus";
                                        headerValue = "mollitia";
                                    }}),
                                }};
                            }};
                            kind = "vero";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("pariatur"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "cumque";
                                            ports = new String[]{{
                                                add("doloribus"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quae";
                                            ports = new String[]{{
                                                add("rerum"),
                                                add("vel"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "soluta";
                                            ports = new String[]{{
                                                add("iusto"),
                                                add("illo"),
                                                add("delectus"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("fuga"),
                                        add("amet"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "odio";
                                    expression = "officiis";
                                    location = "deleniti";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("blanditiis"),
                                }};
                                destPorts = new String[]{{
                                    add("unde"),
                                    add("dignissimos"),
                                    add("pariatur"),
                                    add("placeat"),
                                }};
                                ipProtocols = new String[]{{
                                    add("tempore"),
                                    add("repudiandae"),
                                    add("corporis"),
                                }};
                                srcAsns = new Long[]{{
                                    add(601758L),
                                    add(390938L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sunt"),
                                    add("repudiandae"),
                                    add("dolore"),
                                }};
                                srcPorts = new String[]{{
                                    add("provident"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("soluta"),
                                    add("nisi"),
                                    add("dolores"),
                                    add("odit"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Dora Daniel IV";
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("reprehenderit"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "a";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ratione";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "et";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "itaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "velit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "officiis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "et";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ipsam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "magni";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "impedit";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("laudantium"),
                                        }};
                                        targetRuleSet = "cum";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 690984;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 201493;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 629647;
                                    intervalSec = 651192;
                                }};
                                conformAction = "error";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ea";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                }};
                                enforceOnKeyName = "voluptatem";
                                exceedAction = "magnam";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 932291;
                                    message = "veritatis";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "dolore";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 728529;
                                    intervalSec = 213938;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "nostrum";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "quibusdam";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "mollitia";
                            ruleTupleCount = 151774;
                            targetResources = new String[]{{
                                add("veniam"),
                                add("aspernatur"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("consequuntur"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "nihil";
                            description = "quo";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "delectus";
                                        headerValue = "fugit";
                                    }}),
                                }};
                            }};
                            kind = "omnis";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("ad"),
                                        add("explicabo"),
                                        add("voluptas"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "nobis";
                                            ports = new String[]{{
                                                add("id"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "ad";
                                            ports = new String[]{{
                                                add("officiis"),
                                                add("quidem"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "temporibus";
                                            ports = new String[]{{
                                                add("inventore"),
                                                add("similique"),
                                                add("aperiam"),
                                                add("totam"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("quae"),
                                        add("nemo"),
                                        add("voluptate"),
                                        add("aut"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "beatae";
                                    expression = "quasi";
                                    location = "repellendus";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("ex"),
                                    add("tempore"),
                                    add("ipsa"),
                                    add("nemo"),
                                }};
                                destPorts = new String[]{{
                                    add("numquam"),
                                    add("deserunt"),
                                }};
                                ipProtocols = new String[]{{
                                    add("ducimus"),
                                    add("magni"),
                                    add("possimus"),
                                    add("vel"),
                                }};
                                srcAsns = new Long[]{{
                                    add(876489L),
                                    add(949289L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("assumenda"),
                                    add("ullam"),
                                }};
                                srcPorts = new String[]{{
                                    add("laudantium"),
                                    add("sed"),
                                    add("possimus"),
                                    add("adipisci"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("exercitationem"),
                                    add("sint"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Dr. Martha Leuschke";
                                        values = new String[]{{
                                            add("accusantium"),
                                            add("ducimus"),
                                            add("dolores"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ducimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "architecto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "officiis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "qui";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "natus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "doloribus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "explicabo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "rerum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "inventore";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "perferendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "atque";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("veniam"),
                                            add("omnis"),
                                        }};
                                        targetRuleSet = "maiores";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "veniam";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "occaecati";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "architecto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "tempora";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "occaecati";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "natus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dolorum";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "beatae";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("maxime"),
                                        }};
                                        targetRuleSet = "fugit";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 619524;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 591309;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 709994;
                                    intervalSec = 18596;
                                }};
                                conformAction = "eos";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "explicabo";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "maxime";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quibusdam";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "id";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                }};
                                enforceOnKeyName = "nisi";
                                exceedAction = "blanditiis";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 741968;
                                    message = "tempora";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "illum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 372034;
                                    intervalSec = 336881;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "laborum";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "quidem";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "suscipit";
                            ruleTupleCount = 888596;
                            targetResources = new String[]{{
                                add("excepturi"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("beatae"),
                                add("suscipit"),
                            }};
                        }}),
                    }};
                    selfLink = "fuga";
                    selfLinkWithId = "eveniet";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "doloribus";
                            name = "Maryann Pfeffer";
                            offset = 213703;
                            size = 297312;
                        }}),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "tempora";
                key = "optio";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "commodi";
                uploadType = "autem";
                uploadProtocol = "aliquam";
                userIp = "magnam";
            }};            

            ComputeOrganizationSecurityPoliciesPatchResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesPatch(req, new ComputeOrganizationSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesPatchSecurityOption1("eveniet", "impedit") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeOrganizationSecurityPoliciesPatchRuleRequest req = new ComputeOrganizationSecurityPoliciesPatchRuleRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "odit";
                    description = "sit";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "optio";
                                headerValue = "quia";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "inventore";
                                headerValue = "id";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "at";
                                headerValue = "animi";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "doloremque";
                                headerValue = "laborum";
                            }}),
                        }};
                    }};;
                    kind = "quasi";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("molestiae"),
                                add("repudiandae"),
                                add("voluptate"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "labore";
                                    ports = new String[]{{
                                        add("earum"),
                                        add("iste"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "occaecati";
                                    ports = new String[]{{
                                        add("accusantium"),
                                        add("iure"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "debitis";
                                    ports = new String[]{{
                                        add("maxime"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "nobis";
                                    ports = new String[]{{
                                        add("quas"),
                                        add("enim"),
                                        add("consequatur"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "tempore";
                                    ports = new String[]{{
                                        add("illum"),
                                        add("praesentium"),
                                        add("quaerat"),
                                        add("quisquam"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("in"),
                                add("vel"),
                                add("illum"),
                                add("ad"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "fugiat";
                            expression = "iste";
                            location = "deleniti";
                            title = "Mr.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("corporis"),
                            add("minus"),
                            add("assumenda"),
                            add("sunt"),
                        }};
                        destPorts = new String[]{{
                            add("voluptates"),
                        }};
                        ipProtocols = new String[]{{
                            add("vero"),
                            add("veniam"),
                            add("similique"),
                            add("rerum"),
                        }};
                        srcAsns = new Long[]{{
                            add(201069L),
                            add(773515L),
                            add(84299L),
                            add(689559L),
                        }};
                        srcIpRanges = new String[]{{
                            add("accusamus"),
                        }};
                        srcPorts = new String[]{{
                            add("dolore"),
                            add("voluptatibus"),
                            add("dolore"),
                            add("voluptatem"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("iusto"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Erick Cartwright";
                                values = new String[]{{
                                    add("tempora"),
                                    add("at"),
                                    add("totam"),
                                    add("voluptate"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Beulah Kerluke";
                                values = new String[]{{
                                    add("aut"),
                                    add("delectus"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Ben Stokes";
                                values = new String[]{{
                                    add("tempore"),
                                    add("exercitationem"),
                                    add("placeat"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Amy Spencer";
                                values = new String[]{{
                                    add("esse"),
                                    add("aperiam"),
                                }};
                            }}),
                        }};
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "eaque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ratione";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "reiciendis";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "voluptas";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "esse";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "molestiae";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "autem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "porro";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "tenetur";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("labore"),
                                    add("aperiam"),
                                }};
                                targetRuleSet = "optio";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 356909;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 533912;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 154849;
                            intervalSec = 684465;
                        }};;
                        conformAction = "debitis";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "dolorum";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "quibusdam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "optio";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "corrupti";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                            }}),
                        }};
                        enforceOnKeyName = "accusantium";
                        exceedAction = "rerum";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 493415;
                            message = "deleniti";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "tempora";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 561790;
                            intervalSec = 221253;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "occaecati";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    redirectTarget = "aliquid";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                    ruleNumber = "eligendi";
                    ruleTupleCount = 36925;
                    targetResources = new String[]{{
                        add("nihil"),
                        add("amet"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("similique"),
                        add("voluptate"),
                        add("quasi"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "aliquid";
                key = "ipsa";
                oauthToken = "illo";
                prettyPrint = false;
                priority = 794575L;
                quotaUser = "et";
                requestId = "voluptas";
                uploadType = "corrupti";
                uploadProtocol = "minima";
                userIp = "expedita";
            }};            

            ComputeOrganizationSecurityPoliciesPatchRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesPatchRule(req, new ComputeOrganizationSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesPatchRuleSecurityOption1("accusamus", "necessitatibus") {{
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

            ComputeOrganizationSecurityPoliciesRemoveAssociationRequest req = new ComputeOrganizationSecurityPoliciesRemoveAssociationRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "natus";
                key = "sed";
                name = "Paulette Borer";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "adipisci";
                uploadType = "dicta";
                uploadProtocol = "magnam";
                userIp = "minima";
            }};            

            ComputeOrganizationSecurityPoliciesRemoveAssociationResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesRemoveAssociation(req, new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesRemoveAssociationSecurityOption1("iusto", "repellat") {{
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

            ComputeOrganizationSecurityPoliciesRemoveRuleRequest req = new ComputeOrganizationSecurityPoliciesRemoveRuleRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "ipsa";
                key = "tempore";
                oauthToken = "expedita";
                prettyPrint = false;
                priority = 407118L;
                quotaUser = "autem";
                requestId = "quia";
                uploadType = "animi";
                uploadProtocol = "nesciunt";
                userIp = "perferendis";
            }};            

            ComputeOrganizationSecurityPoliciesRemoveRuleResponse res = sdk.organizationSecurityPolicies.computeOrganizationSecurityPoliciesRemoveRule(req, new ComputeOrganizationSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeOrganizationSecurityPoliciesRemoveRuleSecurityOption1("labore", "cumque") {{
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
