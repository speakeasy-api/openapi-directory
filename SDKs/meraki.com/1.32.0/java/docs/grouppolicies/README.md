# groupPolicies

### Available Operations

* [createNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [deleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [getNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [updateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy

## createNetworkGroupPolicy

Create a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidth;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFiltering;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyScheduling;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingFriday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingMonday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingSunday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingThursday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyVlanTagging;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkGroupPolicyRequest req = new CreateNetworkGroupPolicyRequest(                new CreateNetworkGroupPolicyRequestBody("dignissimos") {{
                                bandwidth = new CreateNetworkGroupPolicyRequestBodyBandwidth() {{
                                    bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {{
                                        limitDown = 156181L;
                                        limitUp = 656500L;
                                    }};;
                                    settings = CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum.NETWORK_DEFAULT;
                                }};;
                                bonjourForwarding = new CreateNetworkGroupPolicyRequestBodyBonjourForwarding() {{
                                    rules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                        }}, "quasi") {{
                                            description = "labore";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                            }};
                                            vlanId = "aspernatur";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                        }}, "adipisci") {{
                                            description = "repellendus";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                            }};
                                            vlanId = "officiis";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                        }}, "inventore") {{
                                            description = "sint";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AIR_PLAY),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                            }};
                                            vlanId = "debitis";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.BIT_TORRENT),
                                                        }}, "similique") {{
                                            description = "sit";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                            }};
                                            vlanId = "voluptates";
                                        }}),
                                    }};
                                    settings = CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum.NETWORK_DEFAULT;
                                }};;
                                contentFiltering = new CreateNetworkGroupPolicyRequestBodyContentFiltering() {{
                                    allowedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {{
                                        patterns = new String[]{{
                                            add("quo"),
                                            add("placeat"),
                                            add("possimus"),
                                            add("atque"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum.APPEND;
                                    }};;
                                    blockedUrlCategories = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {{
                                        categories = new String[]{{
                                            add("fuga"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum.APPEND;
                                    }};;
                                    blockedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {{
                                        patterns = new String[]{{
                                            add("facere"),
                                            add("deserunt"),
                                            add("ipsam"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum.NETWORK_DEFAULT;
                                    }};;
                                }};;
                                firewallAndTrafficShaping = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {{
                                    l3FirewallRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("voluptates", "harum", "a") {{
                                            comment = "eum";
                                            destCidr = "dolore";
                                            destPort = "accusamus";
                                            policy = "debitis";
                                            protocol = "veniam";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("unde", "esse", "delectus") {{
                                            comment = "quam";
                                            destCidr = "itaque";
                                            destPort = "nisi";
                                            policy = "molestias";
                                            protocol = "deleniti";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("reprehenderit", "impedit", "nostrum") {{
                                            comment = "eaque";
                                            destCidr = "ipsam";
                                            destPort = "vitae";
                                            policy = "similique";
                                            protocol = "fuga";
                                        }}),
                                    }};
                                    l7FirewallRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.PORT;
                                            value = "vel";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.HOST;
                                            value = "distinctio";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.HOST;
                                            value = "nobis";
                                        }}),
                                    }};
                                    settings = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum.CUSTOM;
                                    trafficShapingRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "laboriosam") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                                value = "illo";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "cum") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                                value = "fuga";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "voluptatem") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                                value = "voluptas";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "repellat") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                                    value = "atque";
                                                }}),
                                            }};
                                            dscpTagValue = 220187L;
                                            pcpTagValue = 459436L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 654417L;
                                                    limitUp = 625192L;
                                                }};
                                                settings = "voluptatum";
                                            }};
                                            priority = "fugiat";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "blanditiis") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                                value = "repudiandae";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "possimus") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                                value = "eos";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "aut") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                                value = "dolor";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "vero") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                    value = "et";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "reprehenderit") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                    value = "commodi";
                                                }}),
                                            }};
                                            dscpTagValue = 407350L;
                                            pcpTagValue = 983539L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 621680L;
                                                    limitUp = 408843L;
                                                }};
                                                settings = "voluptas";
                                            }};
                                            priority = "sint";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "veritatis") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                                value = "corrupti";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "commodi") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                                value = "tenetur";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "laboriosam") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                                    value = "consequatur";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "ex") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "saepe";
                                                }}),
                                            }};
                                            dscpTagValue = 505568L;
                                            pcpTagValue = 759015L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 72529L;
                                                    limitUp = 57387L;
                                                }};
                                                settings = "quaerat";
                                            }};
                                            priority = "cupiditate";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "et") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                                value = "qui";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "omnis") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                                value = "voluptatum";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "cumque") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                                value = "eius";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "sit") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "tempore";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "distinctio") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "eligendi";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "deleniti") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                    value = "quasi";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "debitis") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "corrupti";
                                                }}),
                                            }};
                                            dscpTagValue = 239447L;
                                            pcpTagValue = 443122L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 203179L;
                                                    limitUp = 559158L;
                                                }};
                                                settings = "magnam";
                                            }};
                                            priority = "quos";
                                        }}),
                                    }};
                                }};;
                                scheduling = new CreateNetworkGroupPolicyRequestBodyScheduling() {{
                                    enabled = false;
                                    friday = new CreateNetworkGroupPolicyRequestBodySchedulingFriday() {{
                                        active = false;
                                        from = "enim";
                                        to = "ab";
                                    }};;
                                    monday = new CreateNetworkGroupPolicyRequestBodySchedulingMonday() {{
                                        active = false;
                                        from = "aut";
                                        to = "expedita";
                                    }};;
                                    saturday = new CreateNetworkGroupPolicyRequestBodySchedulingSaturday() {{
                                        active = false;
                                        from = "deleniti";
                                        to = "aliquid";
                                    }};;
                                    sunday = new CreateNetworkGroupPolicyRequestBodySchedulingSunday() {{
                                        active = false;
                                        from = "quasi";
                                        to = "ex";
                                    }};;
                                    thursday = new CreateNetworkGroupPolicyRequestBodySchedulingThursday() {{
                                        active = false;
                                        from = "ducimus";
                                        to = "molestiae";
                                    }};;
                                    tuesday = new CreateNetworkGroupPolicyRequestBodySchedulingTuesday() {{
                                        active = false;
                                        from = "cum";
                                        to = "maiores";
                                    }};;
                                    wednesday = new CreateNetworkGroupPolicyRequestBodySchedulingWednesday() {{
                                        active = false;
                                        from = "quibusdam";
                                        to = "minus";
                                    }};;
                                }};;
                                splashAuthSettings = CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum.BYPASS;
                                vlanTagging = new CreateNetworkGroupPolicyRequestBodyVlanTagging() {{
                                    settings = CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum.CUSTOM;
                                    vlanId = "temporibus";
                                }};;
                            }};, "eos");            

            CreateNetworkGroupPolicyResponse res = sdk.groupPolicies.createNetworkGroupPolicy(req);

            if (res.createNetworkGroupPolicy201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.DeleteNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkGroupPolicyRequest req = new DeleteNetworkGroupPolicyRequest("cum", "natus");            

            DeleteNetworkGroupPolicyResponse res = sdk.groupPolicies.deleteNetworkGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkGroupPolicies

List the group policies in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkGroupPoliciesRequest req = new GetNetworkGroupPoliciesRequest("exercitationem");            

            GetNetworkGroupPoliciesResponse res = sdk.groupPolicies.getNetworkGroupPolicies(req);

            if (res.getNetworkGroupPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkGroupPolicy

Display a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkGroupPolicyRequest req = new GetNetworkGroupPolicyRequest("corrupti", "voluptatum");            

            GetNetworkGroupPolicyResponse res = sdk.groupPolicies.getNetworkGroupPolicy(req);

            if (res.getNetworkGroupPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkGroupPolicy

Update a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidth;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFiltering;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyScheduling;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyVlanTagging;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkGroupPolicyRequest req = new UpdateNetworkGroupPolicyRequest("cupiditate", "consectetur") {{
                requestBody = new UpdateNetworkGroupPolicyRequestBody() {{
                    bandwidth = new UpdateNetworkGroupPolicyRequestBodyBandwidth() {{
                        bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {{
                            limitDown = 230577L;
                            limitUp = 836386L;
                        }};;
                        settings = UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum.IGNORE;
                    }};;
                    bonjourForwarding = new UpdateNetworkGroupPolicyRequestBodyBonjourForwarding() {{
                        rules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.ALL_SERVICES),
                                            }}, "iure") {{
                                description = "eius";
                                services = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                }};
                                vlanId = "pariatur";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                            }}, "laboriosam") {{
                                description = "consequatur";
                                services = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.BIT_TORRENT),
                                }};
                                vlanId = "porro";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                            }}, "nesciunt") {{
                                description = "fugit";
                                services = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AIR_PLAY),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                }};
                                vlanId = "doloribus";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.ALL_SERVICES),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                            }}, "cumque") {{
                                description = "voluptatum";
                                services = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AIR_PLAY),
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                }};
                                vlanId = "nulla";
                            }}),
                        }};
                        settings = UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum.NETWORK_DEFAULT;
                    }};;
                    contentFiltering = new UpdateNetworkGroupPolicyRequestBodyContentFiltering() {{
                        allowedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {{
                            patterns = new String[]{{
                                add("minus"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum.APPEND;
                        }};;
                        blockedUrlCategories = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {{
                            categories = new String[]{{
                                add("fuga"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum.NETWORK_DEFAULT;
                        }};;
                        blockedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {{
                            patterns = new String[]{{
                                add("rem"),
                                add("odio"),
                                add("temporibus"),
                                add("nam"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum.NETWORK_DEFAULT;
                        }};;
                    }};;
                    firewallAndTrafficShaping = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {{
                        l3FirewallRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("eaque", "doloribus", "consequuntur") {{
                                comment = "quae";
                                destCidr = "nisi";
                                destPort = "autem";
                                policy = "magnam";
                                protocol = "id";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("iste", "quam", "fugit") {{
                                comment = "suscipit";
                                destCidr = "aliquam";
                                destPort = "doloribus";
                                policy = "iure";
                                protocol = "corrupti";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("quidem", "suscipit", "voluptates") {{
                                comment = "commodi";
                                destCidr = "id";
                                destPort = "occaecati";
                                policy = "aspernatur";
                                protocol = "vel";
                            }}),
                        }};
                        l7FirewallRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                value = "ducimus";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                value = "quo";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                value = "praesentium";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION;
                                value = "consectetur";
                            }}),
                        }};
                        settings = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum.CUSTOM;
                        trafficShapingRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "provident") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "soluta";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "qui") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                    value = "ut";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "amet") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                    value = "animi";
                                                }}),
                                            }}) {{
                                definitions = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "assumenda") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                        value = "eius";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "perspiciatis") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                        value = "alias";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "omnis") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                        value = "neque";
                                    }}),
                                }};
                                dscpTagValue = 564493L;
                                pcpTagValue = 852504L;
                                perClientBandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                    bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                        limitDown = 211628L;
                                        limitUp = 395476L;
                                    }};
                                    settings = "modi";
                                }};
                                priority = "molestiae";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "in") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "laudantium";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "unde") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                                    value = "hic";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "totam") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "velit";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "quos") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                    value = "sint";
                                                }}),
                                            }}) {{
                                definitions = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "veritatis") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                        value = "deleniti";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "non") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                        value = "ad";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "repellendus") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                        value = "deserunt";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "necessitatibus") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                        value = "delectus";
                                    }}),
                                }};
                                dscpTagValue = 223505L;
                                pcpTagValue = 480070L;
                                perClientBandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                    bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                        limitDown = 453969L;
                                        limitUp = 366381L;
                                    }};
                                    settings = "delectus";
                                }};
                                priority = "corporis";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "nulla") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                    value = "doloremque";
                                                }}),
                                            }}) {{
                                definitions = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "ex") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                        value = "magni";
                                    }}),
                                }};
                                dscpTagValue = 868057L;
                                pcpTagValue = 436973L;
                                perClientBandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                    bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                        limitDown = 112328L;
                                        limitUp = 957847L;
                                    }};
                                    settings = "odit";
                                }};
                                priority = "modi";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "cum") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                    value = "pariatur";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "eius") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                    value = "magni";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "repellendus") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                                    value = "ratione";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "sed") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "nihil";
                                                }}),
                                            }}) {{
                                definitions = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "excepturi") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                        value = "incidunt";
                                    }}),
                                }};
                                dscpTagValue = 461569L;
                                pcpTagValue = 236873L;
                                perClientBandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                    bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                        limitDown = 393185L;
                                        limitUp = 398832L;
                                    }};
                                    settings = "sunt";
                                }};
                                priority = "itaque";
                            }}),
                        }};
                    }};;
                    name = "David Jones";
                    scheduling = new UpdateNetworkGroupPolicyRequestBodyScheduling() {{
                        enabled = false;
                        friday = new UpdateNetworkGroupPolicyRequestBodySchedulingFriday() {{
                            active = false;
                            from = "voluptatibus";
                            to = "nihil";
                        }};;
                        monday = new UpdateNetworkGroupPolicyRequestBodySchedulingMonday() {{
                            active = false;
                            from = "voluptatem";
                            to = "delectus";
                        }};;
                        saturday = new UpdateNetworkGroupPolicyRequestBodySchedulingSaturday() {{
                            active = false;
                            from = "eveniet";
                            to = "aspernatur";
                        }};;
                        sunday = new UpdateNetworkGroupPolicyRequestBodySchedulingSunday() {{
                            active = false;
                            from = "ipsa";
                            to = "atque";
                        }};;
                        thursday = new UpdateNetworkGroupPolicyRequestBodySchedulingThursday() {{
                            active = false;
                            from = "laborum";
                            to = "iure";
                        }};;
                        tuesday = new UpdateNetworkGroupPolicyRequestBodySchedulingTuesday() {{
                            active = false;
                            from = "exercitationem";
                            to = "eum";
                        }};;
                        wednesday = new UpdateNetworkGroupPolicyRequestBodySchedulingWednesday() {{
                            active = false;
                            from = "voluptate";
                            to = "veritatis";
                        }};;
                    }};;
                    splashAuthSettings = UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum.BYPASS;
                    vlanTagging = new UpdateNetworkGroupPolicyRequestBodyVlanTagging() {{
                        settings = UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum.IGNORE;
                        vlanId = "quis";
                    }};;
                }};;
            }};            

            UpdateNetworkGroupPolicyResponse res = sdk.groupPolicies.updateNetworkGroupPolicy(req);

            if (res.updateNetworkGroupPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
