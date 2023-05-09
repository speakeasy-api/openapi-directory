# regionSecurityPolicies

### Available Operations

* [computeRegionSecurityPoliciesDelete](#computeregionsecuritypoliciesdelete) - Deletes the specified policy.
* [computeRegionSecurityPoliciesGet](#computeregionsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeRegionSecurityPoliciesInsert](#computeregionsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeRegionSecurityPoliciesList](#computeregionsecuritypolicieslist) - List all the policies that have been configured for the specified project and region.
* [computeRegionSecurityPoliciesPatch](#computeregionsecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

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

            ComputeRegionSecurityPoliciesDeleteRequest req = new ComputeRegionSecurityPoliciesDeleteRequest("ratione", "dolor", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "et";
                key = "veritatis";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "velit";
                requestId = "officiis";
                uploadType = "minus";
                uploadProtocol = "inventore";
                userIp = "odio";
            }};            

            ComputeRegionSecurityPoliciesDeleteResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesDelete(req, new ComputeRegionSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesDeleteSecurityOption1("magni", "numquam") {{
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

            ComputeRegionSecurityPoliciesGetRequest req = new ComputeRegionSecurityPoliciesGetRequest("architecto", "veritatis", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "ea";
                key = "dolor";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "voluptate";
                uploadProtocol = "sint";
                userIp = "labore";
            }};            

            ComputeRegionSecurityPoliciesGetResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesGet(req, new ComputeRegionSecurityPoliciesGetSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesGetSecurityOption1("rerum", "praesentium") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeRegionSecurityPoliciesInsertRequest req = new ComputeRegionSecurityPoliciesInsertRequest("corporis", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("deserunt"),
                                add("consequuntur"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.DISABLED;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                    }};;
                    creationTimestamp = "iure";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.STANDARD;
                    }};;
                    description = "atque";
                    fingerprint = "esse";
                    id = "quia";
                    kind = "ut";
                    labelFingerprint = "reprehenderit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minima", "quasi");
                        put("eligendi", "laboriosam");
                    }};
                    name = "Faye Donnelly";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "ducimus";
                    }};;
                    region = "nisi";
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "rem";
                            description = "reprehenderit";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "ipsum";
                                        headerValue = "reprehenderit";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "eveniet";
                                        headerValue = "facilis";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "itaque";
                                        headerValue = "ea";
                                    }}),
                                }};
                            }};
                            kind = "eaque";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("nobis"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "fugit";
                                    expression = "iure";
                                    location = "laborum";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusamus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quaerat";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quas";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "laboriosam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("quasi"),
                                        }};
                                        targetRuleSet = "debitis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sint";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ut";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nihil";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quos";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eveniet";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("maxime"),
                                            add("maiores"),
                                            add("veniam"),
                                            add("blanditiis"),
                                        }};
                                        targetRuleSet = "labore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ullam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "porro";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "blanditiis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "in";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "natus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ad";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolores";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "magni";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "impedit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "numquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "labore";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("doloribus"),
                                            add("adipisci"),
                                        }};
                                        targetRuleSet = "vitae";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 19117;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 744608;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 466303;
                                    intervalSec = 745018;
                                }};
                                conformAction = "amet";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "accusamus";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "et";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "distinctio";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                }};
                                enforceOnKeyName = "alias";
                                exceedAction = "quisquam";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "expedita";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 618551;
                                    intervalSec = 414639;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "voluptas";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                        }}),
                    }};
                    selfLink = "mollitia";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_NETWORK;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "facilis";
                key = "nesciunt";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "possimus";
                uploadType = "vero";
                uploadProtocol = "ullam";
                userIp = "temporibus";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesInsertResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesInsert(req, new ComputeRegionSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesInsertSecurityOption1("doloremque", "quis") {{
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

            ComputeRegionSecurityPoliciesListRequest req = new ComputeRegionSecurityPoliciesListRequest("veniam", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "debitis";
                filter = "neque";
                key = "corrupti";
                maxResults = 231418L;
                oauthToken = "magni";
                orderBy = "molestiae";
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "illo";
                returnPartialSuccess = false;
                uploadType = "cumque";
                uploadProtocol = "necessitatibus";
                userIp = "corrupti";
            }};            

            ComputeRegionSecurityPoliciesListResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesList(req, new ComputeRegionSecurityPoliciesListSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesListSecurityOption1("ea", "rem") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeRegionSecurityPoliciesPatchRequest req = new ComputeRegionSecurityPoliciesPatchRequest("ullam", "dolorum", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("eveniet"),
                                add("vitae"),
                                add("numquam"),
                                add("nesciunt"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                    }};;
                    creationTimestamp = "eum";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.STANDARD;
                    }};;
                    description = "aperiam";
                    fingerprint = "doloremque";
                    id = "rem";
                    kind = "unde";
                    labelFingerprint = "cumque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("impedit", "eos");
                        put("tempore", "ex");
                        put("neque", "officia");
                    }};
                    name = "Pamela Cummings III";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "eligendi";
                    }};;
                    region = "voluptas";
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "tempora";
                            description = "iure";
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
                            }};
                            kind = "tenetur";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("quaerat"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "voluptate";
                                    expression = "est";
                                    location = "rem";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "harum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "porro";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "mollitia";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "exercitationem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "iste";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "similique";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "facilis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptas";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "vero";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "maiores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eligendi";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("nobis"),
                                            add("nesciunt"),
                                            add("debitis"),
                                        }};
                                        targetRuleSet = "officia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "repellendus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "nam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "officia";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "totam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "fugiat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sunt";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "unde";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "explicabo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "similique";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "officia";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laboriosam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("iure"),
                                        }};
                                        targetRuleSet = "placeat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "molestiae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "similique";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quae";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "beatae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ducimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nulla";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
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
                                        targetRuleIds = new String[]{{
                                            add("occaecati"),
                                        }};
                                        targetRuleSet = "eaque";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 963693;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 812673;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 590716;
                                    intervalSec = 549795;
                                }};
                                conformAction = "in";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "velit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "odit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "voluptatem";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "perspiciatis";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                }};
                                enforceOnKeyName = "perspiciatis";
                                exceedAction = "quibusdam";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "ipsum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 408604;
                                    intervalSec = 131362;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "dicta";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                        }}),
                    }};
                    selfLink = "fugit";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR;
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "quia";
                key = "aliquam";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "temporibus";
                uploadType = "velit";
                uploadProtocol = "vero";
                userIp = "aut";
            }};            

            ComputeRegionSecurityPoliciesPatchResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesPatch(req, new ComputeRegionSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesPatchSecurityOption1("provident", "aliquam") {{
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
