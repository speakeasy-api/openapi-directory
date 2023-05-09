# regionSecurityPolicies

### Available Operations

* [computeRegionSecurityPoliciesAddRule](#computeregionsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeRegionSecurityPoliciesDelete](#computeregionsecuritypoliciesdelete) - Deletes the specified policy.
* [computeRegionSecurityPoliciesGet](#computeregionsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeRegionSecurityPoliciesGetRule](#computeregionsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeRegionSecurityPoliciesInsert](#computeregionsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeRegionSecurityPoliciesList](#computeregionsecuritypolicieslist) - List all the policies that have been configured for the specified project and region.
* [computeRegionSecurityPoliciesPatch](#computeregionsecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeRegionSecurityPoliciesPatchRule](#computeregionsecuritypoliciespatchrule) - Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.
* [computeRegionSecurityPoliciesRemoveRule](#computeregionsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

## computeRegionSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurityOption2;
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

            ComputeRegionSecurityPoliciesAddRuleRequest req = new ComputeRegionSecurityPoliciesAddRuleRequest("deserunt", "odio", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "nostrum";
                    description = "exercitationem";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "fugit";
                                headerValue = "nihil";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "quae";
                                headerValue = "nemo";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "quis";
                                headerValue = "qui";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "illum";
                                headerValue = "facilis";
                            }}),
                        }};
                    }};;
                    kind = "repudiandae";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("laboriosam"),
                                add("praesentium"),
                                add("facere"),
                                add("et"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "omnis";
                                    ports = new String[]{{
                                        add("laborum"),
                                        add("doloribus"),
                                        add("autem"),
                                        add("sit"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "mollitia";
                                    ports = new String[]{{
                                        add("repudiandae"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "dolorum";
                                    ports = new String[]{{
                                        add("voluptate"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "voluptas";
                                    ports = new String[]{{
                                        add("inventore"),
                                        add("blanditiis"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "doloribus";
                                    ports = new String[]{{
                                        add("blanditiis"),
                                        add("quas"),
                                        add("a"),
                                        add("quibusdam"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "ipsa";
                                    ports = new String[]{{
                                        add("officiis"),
                                        add("quasi"),
                                        add("nemo"),
                                        add("molestiae"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "impedit";
                                    ports = new String[]{{
                                        add("nostrum"),
                                        add("cupiditate"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "perspiciatis";
                                    ports = new String[]{{
                                        add("quasi"),
                                        add("ex"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("provident"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "fugit";
                            expression = "porro";
                            location = "id";
                            title = "Dr.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("dicta"),
                            add("minima"),
                            add("provident"),
                            add("magnam"),
                        }};
                        destPorts = new String[]{{
                            add("numquam"),
                            add("omnis"),
                        }};
                        ipProtocols = new String[]{{
                            add("cum"),
                            add("possimus"),
                            add("temporibus"),
                        }};
                        srcAsns = new Long[]{{
                            add(304623L),
                            add(693350L),
                            add(483351L),
                        }};
                        srcIpRanges = new String[]{{
                            add("ex"),
                            add("quia"),
                            add("doloribus"),
                            add("voluptatibus"),
                        }};
                        srcPorts = new String[]{{
                            add("repellendus"),
                            add("et"),
                            add("non"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("architecto"),
                            add("quidem"),
                            add("repellat"),
                            add("eius"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Tina Rohan";
                                values = new String[]{{
                                    add("est"),
                                    add("et"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Theodore Osinski";
                                values = new String[]{{
                                    add("dolores"),
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
                                        val = "dolor";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "asperiores";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "repudiandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "veritatis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "beatae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "perspiciatis";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "delectus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "impedit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "laboriosam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "tempora";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "maiores";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "quae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "et";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("nisi"),
                                    add("natus"),
                                }};
                                targetRuleSet = "inventore";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "distinctio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "consectetur";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "laboriosam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "id";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "placeat";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "necessitatibus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laborum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "unde";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ab";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "repellat";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("ipsam"),
                                }};
                                targetRuleSet = "repudiandae";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "sunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "perferendis";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "laboriosam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ea";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laborum";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "totam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "accusamus";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("nam"),
                                }};
                                targetRuleSet = "atque";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "aliquid";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "aspernatur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "corporis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "explicabo";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "ipsa";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "voluptatem";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "corporis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "dolorem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "cum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "sit";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "saepe";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("voluptatem"),
                                    add("quae"),
                                    add("enim"),
                                }};
                                targetRuleSet = "voluptatum";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 984033;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 966490;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 851601;
                            intervalSec = 386844;
                        }};;
                        conformAction = "officia";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.REGION_CODE;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "ad";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                            }}),
                        }};
                        enforceOnKeyName = "illum";
                        exceedAction = "occaecati";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 986606;
                            message = "sapiente";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "quod";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 609431;
                            intervalSec = 710737;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "doloribus";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    redirectTarget = "officiis";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                    ruleNumber = "facere";
                    ruleTupleCount = 745737;
                    targetResources = new String[]{{
                        add("minus"),
                        add("quae"),
                        add("cupiditate"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("ut"),
                        add("aperiam"),
                        add("sequi"),
                        add("repudiandae"),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "delectus";
                key = "dignissimos";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "in";
                uploadProtocol = "a";
                userIp = "vero";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesAddRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesAddRule(req, new ComputeRegionSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesAddRuleSecurityOption1("animi", "corporis") {{
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

## computeRegionSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesDeleteRequest req = new ComputeRegionSecurityPoliciesDeleteRequest("aliquam", "hic", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "voluptatem";
                key = "hic";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "error";
                requestId = "aliquid";
                uploadType = "ullam";
                uploadProtocol = "veritatis";
                userIp = "expedita";
            }};            

            ComputeRegionSecurityPoliciesDeleteResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesDelete(req, new ComputeRegionSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesDeleteSecurityOption1("esse", "iste") {{
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

## computeRegionSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesGetRequest req = new ComputeRegionSecurityPoliciesGetRequest("provident", "a", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "possimus";
                fields = "id";
                key = "quod";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "corrupti";
                uploadProtocol = "animi";
                userIp = "aperiam";
            }};            

            ComputeRegionSecurityPoliciesGetResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesGet(req, new ComputeRegionSecurityPoliciesGetSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesGetSecurityOption1("modi", "debitis") {{
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

## computeRegionSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesGetRuleRequest req = new ComputeRegionSecurityPoliciesGetRuleRequest("doloribus", "ab", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "ut";
                key = "ab";
                oauthToken = "nobis";
                prettyPrint = false;
                priority = 697901L;
                quotaUser = "dignissimos";
                uploadType = "est";
                uploadProtocol = "occaecati";
                userIp = "perferendis";
            }};            

            ComputeRegionSecurityPoliciesGetRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesGetRule(req, new ComputeRegionSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesGetRuleSecurityOption1("odio", "temporibus") {{
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

## computeRegionSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurityOption2;
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

            ComputeRegionSecurityPoliciesInsertRequest req = new ComputeRegionSecurityPoliciesInsertRequest("corrupti", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 580.16;
                            expirationSec = 318807;
                            impactedBaselineThreshold = 2397.73;
                            loadThreshold = 2772.4;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("quaerat"),
                                add("sed"),
                                add("eveniet"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.DISABLED;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                        userIpRequestHeaders = new String[]{{
                            add("iste"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "tempore";
                            displayName = "rerum";
                            name = "Cary Smith";
                            securityPolicyId = "voluptate";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "ratione";
                            displayName = "sequi";
                            name = "Daisy Jerde";
                            securityPolicyId = "sint";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "magnam";
                            displayName = "corrupti";
                            name = "Rick Marvin";
                            securityPolicyId = "possimus";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "unde";
                            displayName = "sapiente";
                            name = "Elvira Graham";
                            securityPolicyId = "voluptatum";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "velit";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "aperiam";
                    displayName = "sequi";
                    fingerprint = "nesciunt";
                    id = "incidunt";
                    kind = "nam";
                    labelFingerprint = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quod", "at");
                        put("pariatur", "minima");
                        put("cumque", "saepe");
                        put("accusamus", "distinctio");
                    }};
                    name = "Hilda Cronin";
                    parent = "ipsa";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "placeat";
                    }};;
                    region = "minus";
                    ruleTupleCount = 294999;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "qui";
                            description = "molestias";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "minima";
                                        headerValue = "vitae";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nostrum";
                                        headerValue = "commodi";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "veritatis";
                                        headerValue = "molestiae";
                                    }}),
                                }};
                            }};
                            kind = "porro";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("beatae"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "doloremque";
                                            ports = new String[]{{
                                                add("quisquam"),
                                                add("praesentium"),
                                                add("iusto"),
                                                add("pariatur"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "quas";
                                            ports = new String[]{{
                                                add("eligendi"),
                                                add("in"),
                                                add("rerum"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "ducimus";
                                            ports = new String[]{{
                                                add("libero"),
                                                add("placeat"),
                                                add("accusantium"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quis";
                                            ports = new String[]{{
                                                add("laborum"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("harum"),
                                        add("quisquam"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "ipsum";
                                    expression = "officiis";
                                    location = "sequi";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("perspiciatis"),
                                    add("optio"),
                                }};
                                destPorts = new String[]{{
                                    add("consequatur"),
                                    add("vitae"),
                                }};
                                ipProtocols = new String[]{{
                                    add("odio"),
                                    add("impedit"),
                                    add("libero"),
                                    add("aspernatur"),
                                }};
                                srcAsns = new Long[]{{
                                    add(476558L),
                                    add(844484L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("quia"),
                                    add("facere"),
                                    add("consequuntur"),
                                }};
                                srcPorts = new String[]{{
                                    add("illo"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("facere"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Casey Reilly";
                                        values = new String[]{{
                                            add("optio"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Dr. Nina Kemmer";
                                        values = new String[]{{
                                            add("iure"),
                                            add("inventore"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Faye Larkin II";
                                        values = new String[]{{
                                            add("iusto"),
                                            add("earum"),
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
                                                val = "quam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "vel";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nihil";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "praesentium";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "qui";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "aliquam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "magni";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "deleniti";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "alias";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("accusantium"),
                                            add("debitis"),
                                        }};
                                        targetRuleSet = "exercitationem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "animi";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "amet";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "deleniti";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "facilis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nesciunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "maxime";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("saepe"),
                                            add("error"),
                                        }};
                                        targetRuleSet = "iste";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "doloremque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "recusandae";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ad";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "voluptatibus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "possimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "deserunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ab";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "temporibus";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "praesentium";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("totam"),
                                            add("odit"),
                                            add("atque"),
                                            add("veritatis"),
                                        }};
                                        targetRuleSet = "assumenda";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "corporis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "facilis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quisquam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reprehenderit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aut";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("animi"),
                                        }};
                                        targetRuleSet = "suscipit";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 442627;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 424038;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 654547;
                                    intervalSec = 267530;
                                }};
                                conformAction = "quam";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL_IPS;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "odit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "harum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                }};
                                enforceOnKeyName = "a";
                                exceedAction = "amet";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 344854;
                                    message = "doloremque";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "odit";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 260058;
                                    intervalSec = 402973;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "sed";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "sequi";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "id";
                            ruleTupleCount = 455526;
                            targetResources = new String[]{{
                                add("illo"),
                                add("non"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("occaecati"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "deleniti";
                            description = "necessitatibus";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "soluta";
                                        headerValue = "perspiciatis";
                                    }}),
                                }};
                            }};
                            kind = "et";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("magnam"),
                                        add("eum"),
                                        add("a"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "voluptatum";
                                            ports = new String[]{{
                                                add("ex"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "aut";
                                            ports = new String[]{{
                                                add("temporibus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "atque";
                                            ports = new String[]{{
                                                add("sit"),
                                                add("repellendus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "nesciunt";
                                            ports = new String[]{{
                                                add("aperiam"),
                                                add("vitae"),
                                                add("deserunt"),
                                                add("repellendus"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "optio";
                                            ports = new String[]{{
                                                add("quo"),
                                                add("ut"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "iure";
                                            ports = new String[]{{
                                                add("omnis"),
                                                add("molestias"),
                                                add("non"),
                                                add("iure"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptatem";
                                            ports = new String[]{{
                                                add("libero"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("odit"),
                                        add("dolores"),
                                        add("magnam"),
                                        add("voluptatem"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "eaque";
                                    expression = "in";
                                    location = "molestias";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("illo"),
                                    add("suscipit"),
                                    add("nisi"),
                                }};
                                destPorts = new String[]{{
                                    add("repellendus"),
                                    add("provident"),
                                    add("impedit"),
                                }};
                                ipProtocols = new String[]{{
                                    add("dolorem"),
                                    add("id"),
                                    add("non"),
                                }};
                                srcAsns = new Long[]{{
                                    add(631498L),
                                    add(954778L),
                                    add(239133L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("nostrum"),
                                    add("necessitatibus"),
                                    add("porro"),
                                }};
                                srcPorts = new String[]{{
                                    add("natus"),
                                    add("a"),
                                    add("beatae"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("laboriosam"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Cora Lockman";
                                        values = new String[]{{
                                            add("ducimus"),
                                            add("sit"),
                                            add("repellendus"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptates";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptatibus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "labore";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "cum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "voluptates";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "at";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "excepturi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptatibus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("quo"),
                                            add("doloremque"),
                                        }};
                                        targetRuleSet = "eveniet";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "modi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reprehenderit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ratione";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eveniet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "adipisci";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aspernatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "est";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "harum";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ratione";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iure";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "iure";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("repellendus"),
                                            add("at"),
                                            add("totam"),
                                            add("at"),
                                        }};
                                        targetRuleSet = "soluta";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "velit";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laborum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "accusantium";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ipsum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "illum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "rem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "molestias";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ducimus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dolore"),
                                            add("saepe"),
                                        }};
                                        targetRuleSet = "unde";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 483011;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 180581;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 928489;
                                    intervalSec = 765311;
                                }};
                                conformAction = "voluptatum";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "delectus";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "iste";
                                exceedAction = "maiores";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 930267;
                                    message = "dolorem";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "blanditiis";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 135694;
                                    intervalSec = 288433;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "libero";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "cumque";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "quod";
                            ruleTupleCount = 831747;
                            targetResources = new String[]{{
                                add("sapiente"),
                                add("at"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("vel"),
                                add("dignissimos"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "hic";
                            description = "quisquam";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "atque";
                                        headerValue = "ab";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "vitae";
                                        headerValue = "atque";
                                    }}),
                                }};
                            }};
                            kind = "cupiditate";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("at"),
                                        add("autem"),
                                        add("dolorem"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "iure";
                                            ports = new String[]{{
                                                add("veniam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "deleniti";
                                            ports = new String[]{{
                                                add("quia"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "explicabo";
                                            ports = new String[]{{
                                                add("dignissimos"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "magnam";
                                            ports = new String[]{{
                                                add("voluptatum"),
                                                add("porro"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "accusamus";
                                            ports = new String[]{{
                                                add("harum"),
                                                add("eveniet"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "temporibus";
                                            ports = new String[]{{
                                                add("sunt"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("provident"),
                                        add("dolores"),
                                        add("officiis"),
                                        add("consectetur"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "voluptatem";
                                    expression = "ipsum";
                                    location = "voluptates";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("qui"),
                                    add("fugiat"),
                                }};
                                destPorts = new String[]{{
                                    add("animi"),
                                }};
                                ipProtocols = new String[]{{
                                    add("beatae"),
                                    add("et"),
                                }};
                                srcAsns = new Long[]{{
                                    add(203084L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ea"),
                                    add("debitis"),
                                    add("earum"),
                                }};
                                srcPorts = new String[]{{
                                    add("consequatur"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptate"),
                                    add("aperiam"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Brittany Schmidt";
                                        values = new String[]{{
                                            add("eum"),
                                            add("quam"),
                                            add("velit"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Phillip Spencer";
                                        values = new String[]{{
                                            add("dolore"),
                                            add("ab"),
                                            add("quisquam"),
                                            add("veritatis"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Bethany Barton";
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("aut"),
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
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quibusdam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "enim";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nobis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ipsa";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "facere";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aliquid";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "et";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ex";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "soluta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "corrupti";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("unde"),
                                            add("inventore"),
                                            add("ratione"),
                                        }};
                                        targetRuleSet = "animi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "pariatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "reprehenderit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "laudantium";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolor";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "recusandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repellat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dignissimos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quisquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "modi";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "rerum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("suscipit"),
                                        }};
                                        targetRuleSet = "quo";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 146213;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 19146;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 221922;
                                    intervalSec = 649730;
                                }};
                                conformAction = "explicabo";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "molestias";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "doloremque";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                }};
                                enforceOnKeyName = "ullam";
                                exceedAction = "est";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 57464;
                                    message = "a";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "earum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 622016;
                                    intervalSec = 242824;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "ipsa";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            redirectTarget = "necessitatibus";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "cumque";
                            ruleTupleCount = 279247;
                            targetResources = new String[]{{
                                add("similique"),
                                add("pariatur"),
                                add("repudiandae"),
                                add("magnam"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("nihil"),
                                add("laudantium"),
                                add("debitis"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "suscipit";
                            description = "reprehenderit";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "dolorum";
                                        headerValue = "in";
                                    }}),
                                }};
                            }};
                            kind = "natus";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("at"),
                                        add("praesentium"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "adipisci";
                                            ports = new String[]{{
                                                add("sapiente"),
                                                add("maiores"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "sequi";
                                            ports = new String[]{{
                                                add("maxime"),
                                                add("cum"),
                                                add("hic"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "nisi";
                                            ports = new String[]{{
                                                add("expedita"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "sequi";
                                            ports = new String[]{{
                                                add("odit"),
                                                add("unde"),
                                                add("perspiciatis"),
                                                add("dicta"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "cupiditate";
                                            ports = new String[]{{
                                                add("amet"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("commodi"),
                                        add("sapiente"),
                                        add("in"),
                                        add("iure"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "facilis";
                                    expression = "accusamus";
                                    location = "autem";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("dicta"),
                                    add("consequuntur"),
                                    add("fuga"),
                                    add("vero"),
                                }};
                                destPorts = new String[]{{
                                    add("laudantium"),
                                }};
                                ipProtocols = new String[]{{
                                    add("excepturi"),
                                    add("est"),
                                }};
                                srcAsns = new Long[]{{
                                    add(301245L),
                                    add(86991L),
                                    add(7690L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("reprehenderit"),
                                    add("ipsa"),
                                }};
                                srcPorts = new String[]{{
                                    add("in"),
                                    add("illum"),
                                    add("esse"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("nobis"),
                                    add("velit"),
                                    add("culpa"),
                                    add("a"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Mrs. Mabel Baumbach";
                                        values = new String[]{{
                                            add("harum"),
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
                                                val = "minus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "sed";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "natus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "distinctio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "magnam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "architecto";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("magnam"),
                                            add("dolorem"),
                                            add("earum"),
                                            add("cupiditate"),
                                        }};
                                        targetRuleSet = "quidem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nisi";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "rem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "delectus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "corrupti";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ducimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "optio";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "reiciendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "a";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quod";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("numquam"),
                                            add("voluptas"),
                                            add("provident"),
                                        }};
                                        targetRuleSet = "beatae";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 938493;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 646195;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 1608;
                                    intervalSec = 458703;
                                }};
                                conformAction = "beatae";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "vero";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "commodi";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                }};
                                enforceOnKeyName = "vitae";
                                exceedAction = "veniam";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 814973;
                                    message = "aut";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "voluptatibus";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 817599;
                                    intervalSec = 201803;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "vel";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "minima";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "quos";
                            ruleTupleCount = 637330;
                            targetResources = new String[]{{
                                add("eos"),
                                add("maiores"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("officia"),
                            }};
                        }}),
                    }};
                    selfLink = "nostrum";
                    selfLinkWithId = "reiciendis";
                    type = SecurityPolicyTypeEnum.FIREWALL;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV4;
                            mask = "dolor";
                            name = "Jim Franey";
                            offset = 748715;
                            size = 310211;
                        }}),
                    }};
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "laudantium";
                key = "architecto";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "maxime";
                uploadType = "in";
                uploadProtocol = "vel";
                userIp = "debitis";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesInsertResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesInsert(req, new ComputeRegionSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesInsertSecurityOption1("nulla", "perferendis") {{
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

## computeRegionSecurityPoliciesList

List all the policies that have been configured for the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesListRequest req = new ComputeRegionSecurityPoliciesListRequest("maiores", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "rerum";
                filter = "unde";
                key = "nostrum";
                maxResults = 446007L;
                oauthToken = "maiores";
                orderBy = "iusto";
                pageToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "laborum";
                returnPartialSuccess = false;
                uploadType = "ullam";
                uploadProtocol = "quidem";
                userIp = "itaque";
            }};            

            ComputeRegionSecurityPoliciesListResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesList(req, new ComputeRegionSecurityPoliciesListSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesListSecurityOption1("accusantium", "nam") {{
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

## computeRegionSecurityPoliciesPatch

Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurityOption2;
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

            ComputeRegionSecurityPoliciesPatchRequest req = new ComputeRegionSecurityPoliciesPatchRequest("similique", "molestias", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 7055.52;
                            expirationSec = 298290;
                            impactedBaselineThreshold = 628.1;
                            loadThreshold = 3529.67;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.PREMIUM;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("iure"),
                                add("molestias"),
                                add("quis"),
                                add("temporibus"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.DISABLED;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                        userIpRequestHeaders = new String[]{{
                            add("maxime"),
                            add("recusandae"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "aperiam";
                            displayName = "corrupti";
                            name = "Leigh Brown";
                            securityPolicyId = "quam";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "incidunt";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.STANDARD;
                    }};;
                    description = "corrupti";
                    displayName = "voluptatem";
                    fingerprint = "neque";
                    id = "dicta";
                    kind = "eum";
                    labelFingerprint = "natus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ducimus", "unde");
                        put("possimus", "tempore");
                    }};
                    name = "Lester Bednar";
                    parent = "eligendi";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "aut";
                    }};;
                    region = "aut";
                    ruleTupleCount = 469166;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "esse";
                            description = "voluptates";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nam";
                                        headerValue = "voluptate";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "odit";
                                        headerValue = "inventore";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nihil";
                                        headerValue = "autem";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "vitae";
                                        headerValue = "assumenda";
                                    }}),
                                }};
                            }};
                            kind = "a";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("dignissimos"),
                                        add("soluta"),
                                        add("excepturi"),
                                        add("autem"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "ex";
                                            ports = new String[]{{
                                                add("iusto"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "maiores";
                                            ports = new String[]{{
                                                add("cum"),
                                                add("natus"),
                                                add("qui"),
                                                add("quis"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "laudantium";
                                            ports = new String[]{{
                                                add("incidunt"),
                                                add("nobis"),
                                                add("in"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("repellendus"),
                                        add("sapiente"),
                                        add("ab"),
                                        add("facilis"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "ab";
                                    expression = "quibusdam";
                                    location = "ullam";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("ipsum"),
                                    add("error"),
                                    add("incidunt"),
                                    add("laudantium"),
                                }};
                                destPorts = new String[]{{
                                    add("voluptatem"),
                                }};
                                ipProtocols = new String[]{{
                                    add("sint"),
                                }};
                                srcAsns = new Long[]{{
                                    add(915871L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("quisquam"),
                                    add("vel"),
                                    add("illum"),
                                }};
                                srcPorts = new String[]{{
                                    add("praesentium"),
                                    add("adipisci"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("accusamus"),
                                    add("repudiandae"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Hector Goldner";
                                        values = new String[]{{
                                            add("qui"),
                                            add("non"),
                                            add("cumque"),
                                            add("alias"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Anita Schowalter";
                                        values = new String[]{{
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Mrs. Tyrone Donnelly";
                                        values = new String[]{{
                                            add("modi"),
                                            add("illum"),
                                            add("repellat"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Ira Treutel";
                                        values = new String[]{{
                                            add("soluta"),
                                            add("molestias"),
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "et";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "aperiam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "neque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "distinctio";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "consequuntur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "consectetur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusantium";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "facere";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sint";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "omnis";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("aut"),
                                            add("veniam"),
                                        }};
                                        targetRuleSet = "corrupti";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "dolore";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "minima";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "commodi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "alias";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "earum";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "doloremque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "possimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "tempora";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("corrupti"),
                                            add("odit"),
                                            add("delectus"),
                                        }};
                                        targetRuleSet = "ipsam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "tempora";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "molestias";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "similique";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "cum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "unde";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "distinctio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "beatae";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "deleniti";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("provident"),
                                        }};
                                        targetRuleSet = "ad";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 653981;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 555396;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 203353;
                                    intervalSec = 582358;
                                }};
                                conformAction = "itaque";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_HEADER;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "itaque";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "aspernatur";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "fugit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "iure";
                                exceedAction = "delectus";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 352371;
                                    message = "ut";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "in";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 657066;
                                    intervalSec = 419925;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "facere";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            redirectTarget = "veritatis";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "tenetur";
                            ruleTupleCount = 347075;
                            targetResources = new String[]{{
                                add("beatae"),
                                add("labore"),
                                add("pariatur"),
                                add("optio"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("consequuntur"),
                                add("delectus"),
                                add("debitis"),
                                add("architecto"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "deserunt";
                            description = "quo";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "vel";
                                        headerValue = "iusto";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "temporibus";
                                        headerValue = "voluptate";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "ducimus";
                                        headerValue = "quia";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nobis";
                                        headerValue = "quia";
                                    }}),
                                }};
                            }};
                            kind = "alias";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("dolor"),
                                        add("quidem"),
                                        add("provident"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "culpa";
                                            ports = new String[]{{
                                                add("beatae"),
                                                add("doloremque"),
                                                add("adipisci"),
                                                add("consectetur"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "vero";
                                            ports = new String[]{{
                                                add("id"),
                                                add("fuga"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "necessitatibus";
                                            ports = new String[]{{
                                                add("doloremque"),
                                                add("illum"),
                                                add("voluptas"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "natus";
                                            ports = new String[]{{
                                                add("quas"),
                                                add("provident"),
                                                add("dolore"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("nesciunt"),
                                        add("nesciunt"),
                                        add("et"),
                                        add("blanditiis"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "quod";
                                    expression = "delectus";
                                    location = "ipsam";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("itaque"),
                                    add("iste"),
                                    add("neque"),
                                }};
                                destPorts = new String[]{{
                                    add("culpa"),
                                    add("qui"),
                                    add("ipsam"),
                                }};
                                ipProtocols = new String[]{{
                                    add("alias"),
                                    add("perspiciatis"),
                                }};
                                srcAsns = new Long[]{{
                                    add(281238L),
                                    add(60944L),
                                    add(859625L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("magnam"),
                                    add("esse"),
                                    add("ipsum"),
                                }};
                                srcPorts = new String[]{{
                                    add("modi"),
                                    add("culpa"),
                                    add("voluptas"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("sed"),
                                    add("praesentium"),
                                    add("ipsam"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Stewart Rowe";
                                        values = new String[]{{
                                            add("id"),
                                            add("fuga"),
                                            add("nulla"),
                                            add("porro"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Dr. Clara Rath";
                                        values = new String[]{{
                                            add("consequatur"),
                                            add("sit"),
                                            add("optio"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Terri Hessel";
                                        values = new String[]{{
                                            add("repellendus"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Miss Rudy Labadie";
                                        values = new String[]{{
                                            add("numquam"),
                                            add("fugiat"),
                                            add("optio"),
                                            add("ea"),
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
                                                val = "odit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "veritatis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "odio";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "molestiae";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "harum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "expedita";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "hic";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dolores"),
                                        }};
                                        targetRuleSet = "labore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "error";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "iste";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aut";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "animi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ab";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "dolorem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "hic";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repudiandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "est";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "consequatur";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("impedit"),
                                        }};
                                        targetRuleSet = "quaerat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "fugiat";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "inventore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "recusandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "vel";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "error";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "inventore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "vel";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("veritatis"),
                                            add("repellendus"),
                                        }};
                                        targetRuleSet = "maxime";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "rerum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "illo";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "non";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "sed";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ratione";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "perferendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "maiores";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "vel";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("ex"),
                                        }};
                                        targetRuleSet = "natus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 812991;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 844198;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 325540;
                                    intervalSec = 802952;
                                }};
                                conformAction = "earum";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "deleniti";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "unde";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "consequuntur";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                }};
                                enforceOnKeyName = "aspernatur";
                                exceedAction = "fugiat";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 144343;
                                    message = "repellat";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "repellat";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 711681;
                                    intervalSec = 126207;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "nobis";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "consequuntur";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "alias";
                            ruleTupleCount = 767892;
                            targetResources = new String[]{{
                                add("nam"),
                                add("sit"),
                                add("iusto"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("consectetur"),
                                add("excepturi"),
                                add("eveniet"),
                                add("veritatis"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "illum";
                            description = "dolore";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "labore";
                                        headerValue = "nam";
                                    }}),
                                }};
                            }};
                            kind = "dignissimos";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("recusandae"),
                                        add("molestias"),
                                        add("expedita"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "reprehenderit";
                                            ports = new String[]{{
                                                add("explicabo"),
                                                add("aut"),
                                                add("error"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "eligendi";
                                            ports = new String[]{{
                                                add("amet"),
                                                add("neque"),
                                                add("tenetur"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "voluptate";
                                            ports = new String[]{{
                                                add("perspiciatis"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quaerat";
                                            ports = new String[]{{
                                                add("quae"),
                                                add("eaque"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "laboriosam";
                                            ports = new String[]{{
                                                add("amet"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("dignissimos"),
                                        add("maiores"),
                                        add("nihil"),
                                        add("doloribus"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "saepe";
                                    expression = "modi";
                                    location = "ipsum";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("pariatur"),
                                    add("libero"),
                                }};
                                destPorts = new String[]{{
                                    add("magni"),
                                    add("possimus"),
                                    add("debitis"),
                                    add("quod"),
                                }};
                                ipProtocols = new String[]{{
                                    add("cum"),
                                    add("optio"),
                                }};
                                srcAsns = new Long[]{{
                                    add(37210L),
                                    add(614951L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sapiente"),
                                    add("quos"),
                                    add("illo"),
                                    add("at"),
                                }};
                                srcPorts = new String[]{{
                                    add("similique"),
                                    add("architecto"),
                                    add("officiis"),
                                    add("tenetur"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptas"),
                                    add("fuga"),
                                    add("neque"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Lorraine O'Hara";
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "James Willms";
                                        values = new String[]{{
                                            add("ad"),
                                            add("minus"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nostrum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "enim";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "consequatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "non";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "harum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "vero";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "saepe";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aliquam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("laboriosam"),
                                            add("a"),
                                            add("laudantium"),
                                        }};
                                        targetRuleSet = "incidunt";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 149216;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 448273;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 15228;
                                    intervalSec = 680502;
                                }};
                                conformAction = "explicabo";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quos";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "fugiat";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "a";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "alias";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                }};
                                enforceOnKeyName = "magni";
                                exceedAction = "fugit";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 422680;
                                    message = "dignissimos";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "optio";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 118700;
                                    intervalSec = 571310;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "delectus";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "aspernatur";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "incidunt";
                            ruleTupleCount = 523064;
                            targetResources = new String[]{{
                                add("deleniti"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("iusto"),
                                add("molestias"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "totam";
                            description = "veritatis";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "assumenda";
                                        headerValue = "laboriosam";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "inventore";
                                        headerValue = "illum";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "et";
                                        headerValue = "veniam";
                                    }}),
                                }};
                            }};
                            kind = "laborum";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("commodi"),
                                        add("dolorem"),
                                        add("dolore"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "quis";
                                            ports = new String[]{{
                                                add("unde"),
                                                add("ratione"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "rerum";
                                            ports = new String[]{{
                                                add("eligendi"),
                                                add("ab"),
                                                add("vitae"),
                                                add("laboriosam"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "sunt";
                                            ports = new String[]{{
                                                add("odio"),
                                                add("quis"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "iste";
                                            ports = new String[]{{
                                                add("quas"),
                                                add("labore"),
                                                add("quia"),
                                                add("aperiam"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("iure"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "ad";
                                    expression = "minus";
                                    location = "maxime";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("velit"),
                                    add("enim"),
                                    add("suscipit"),
                                }};
                                destPorts = new String[]{{
                                    add("quod"),
                                    add("excepturi"),
                                    add("itaque"),
                                }};
                                ipProtocols = new String[]{{
                                    add("ullam"),
                                    add("soluta"),
                                    add("excepturi"),
                                }};
                                srcAsns = new Long[]{{
                                    add(750982L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("et"),
                                }};
                                srcPorts = new String[]{{
                                    add("eum"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("adipisci"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Jana Goodwin";
                                        values = new String[]{{
                                            add("quod"),
                                            add("aliquam"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Malcolm Kshlerin";
                                        values = new String[]{{
                                            add("nam"),
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
                                                val = "neque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptates";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusamus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "vel";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eligendi";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "labore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("placeat"),
                                            add("odit"),
                                        }};
                                        targetRuleSet = "aut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "doloremque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "velit";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "occaecati";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quidem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "cupiditate";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "illo";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dolore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "aperiam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("cumque"),
                                            add("provident"),
                                            add("deleniti"),
                                            add("molestiae"),
                                        }};
                                        targetRuleSet = "eius";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "atque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "provident";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nesciunt";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "maiores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "iste";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "perspiciatis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "doloribus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("libero"),
                                        }};
                                        targetRuleSet = "deleniti";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "qui";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "dolores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "mollitia";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "animi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "tempora";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repellendus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "dolores";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "provident";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ut";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quod";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "excepturi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "qui";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "alias";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("illo"),
                                        }};
                                        targetRuleSet = "asperiores";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 77104;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 820249;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 600986;
                                    intervalSec = 988538;
                                }};
                                conformAction = "voluptates";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_PATH;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "maxime";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "ad";
                                exceedAction = "suscipit";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 323022;
                                    message = "voluptatem";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "iusto";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 330519;
                                    intervalSec = 31052;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "unde";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "beatae";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "numquam";
                            ruleTupleCount = 941407;
                            targetResources = new String[]{{
                                add("nostrum"),
                                add("quas"),
                                add("provident"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("tenetur"),
                            }};
                        }}),
                    }};
                    selfLink = "ut";
                    selfLinkWithId = "doloribus";
                    type = SecurityPolicyTypeEnum.FIREWALL;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "aliquid";
                            name = "Darlene Lemke";
                            offset = 269263;
                            size = 906587;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV6;
                            mask = "debitis";
                            name = "Clint Kihn";
                            offset = 24118;
                            size = 741912;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV6;
                            mask = "commodi";
                            name = "Ms. Kelly Harber";
                            offset = 241942;
                            size = 240485;
                        }}),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "vel";
                key = "repellat";
                oauthToken = "maiores";
                paths = new String[]{{
                    add("illo"),
                    add("repellendus"),
                    add("vel"),
                }};
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "accusantium";
                updateMask = "deleniti";
                uploadType = "ratione";
                uploadProtocol = "sapiente";
                userIp = "omnis";
            }};            

            ComputeRegionSecurityPoliciesPatchResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesPatch(req, new ComputeRegionSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesPatchSecurityOption1("similique", "facere") {{
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

## computeRegionSecurityPoliciesPatchRule

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurityOption2;
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

            ComputeRegionSecurityPoliciesPatchRuleRequest req = new ComputeRegionSecurityPoliciesPatchRuleRequest("quibusdam", "hic", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "dolorem";
                    description = "officiis";
                    direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "officiis";
                                headerValue = "fugiat";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "velit";
                                headerValue = "unde";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "illum";
                                headerValue = "impedit";
                            }}),
                        }};
                    }};;
                    kind = "quam";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("delectus"),
                                add("sequi"),
                                add("eum"),
                                add("at"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "alias";
                                    ports = new String[]{{
                                        add("laboriosam"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "rerum";
                                    ports = new String[]{{
                                        add("quaerat"),
                                        add("tenetur"),
                                        add("aliquam"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("ea"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "vero";
                            expression = "saepe";
                            location = "neque";
                            title = "Mrs.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("aperiam"),
                            add("accusantium"),
                            add("doloremque"),
                        }};
                        destPorts = new String[]{{
                            add("facilis"),
                        }};
                        ipProtocols = new String[]{{
                            add("qui"),
                            add("exercitationem"),
                            add("dolorum"),
                        }};
                        srcAsns = new Long[]{{
                            add(829196L),
                            add(138036L),
                            add(719472L),
                            add(539460L),
                        }};
                        srcIpRanges = new String[]{{
                            add("voluptas"),
                            add("dicta"),
                            add("amet"),
                        }};
                        srcPorts = new String[]{{
                            add("ipsa"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("facere"),
                            add("laborum"),
                            add("iure"),
                            add("optio"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Adrian Crooks";
                                values = new String[]{{
                                    add("sit"),
                                    add("voluptates"),
                                    add("assumenda"),
                                    add("in"),
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
                                        val = "alias";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "asperiores";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "dolore";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ducimus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "id";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "quam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "magni";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "eaque";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("consequuntur"),
                                    add("unde"),
                                    add("enim"),
                                }};
                                targetRuleSet = "accusamus";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quisquam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "iste";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "consequuntur";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "iure";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "provident";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "totam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "maxime";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "doloribus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "optio";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "odio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "a";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "praesentium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "sint";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("mollitia"),
                                    add("atque"),
                                }};
                                targetRuleSet = "provident";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "similique";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "commodi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "reprehenderit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "atque";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "odio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "magni";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "deserunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "natus";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "aliquid";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "natus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "delectus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "consequatur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "temporibus";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("occaecati"),
                                    add("cum"),
                                    add("repellat"),
                                    add("sunt"),
                                }};
                                targetRuleSet = "sint";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "corrupti";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "quo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "accusamus";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "similique";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "possimus";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "voluptatibus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "debitis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "repudiandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "esse";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ipsam";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("aliquid"),
                                    add("aspernatur"),
                                    add("porro"),
                                    add("corporis"),
                                }};
                                targetRuleSet = "quidem";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 406552;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 382589;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 19993;
                            intervalSec = 220598;
                        }};;
                        conformAction = "vitae";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "iure";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "nostrum";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "omnis";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "quibusdam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                        }};
                        enforceOnKeyName = "voluptas";
                        exceedAction = "modi";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 169950;
                            message = "deserunt";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "tempore";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 449224;
                            intervalSec = 935248;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "voluptate";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    redirectTarget = "ullam";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                    ruleNumber = "est";
                    ruleTupleCount = 789478;
                    targetResources = new String[]{{
                        add("iusto"),
                        add("ducimus"),
                        add("vero"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("eum"),
                    }};
                }};;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "deleniti";
                key = "quos";
                oauthToken = "expedita";
                prettyPrint = false;
                priority = 988182L;
                quotaUser = "voluptas";
                updateMask = "id";
                uploadType = "molestias";
                uploadProtocol = "at";
                userIp = "hic";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesPatchRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesPatchRule(req, new ComputeRegionSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesPatchRuleSecurityOption1("fugit", "quia") {{
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

## computeRegionSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesRemoveRuleRequest req = new ComputeRegionSecurityPoliciesRemoveRuleRequest("nisi", "voluptatibus", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "excepturi";
                key = "quidem";
                oauthToken = "corrupti";
                prettyPrint = false;
                priority = 471075L;
                quotaUser = "repudiandae";
                uploadType = "voluptatem";
                uploadProtocol = "nemo";
                userIp = "modi";
            }};            

            ComputeRegionSecurityPoliciesRemoveRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesRemoveRule(req, new ComputeRegionSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1("voluptas", "reprehenderit") {{
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
