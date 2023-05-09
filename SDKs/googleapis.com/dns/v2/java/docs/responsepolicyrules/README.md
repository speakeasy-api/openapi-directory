# responsePolicyRules

### Available Operations

* [dnsResponsePolicyRulesCreate](#dnsresponsepolicyrulescreate) - Creates a new Response Policy Rule.
* [dnsResponsePolicyRulesDelete](#dnsresponsepolicyrulesdelete) - Deletes a previously created Response Policy Rule.
* [dnsResponsePolicyRulesGet](#dnsresponsepolicyrulesget) - Fetches the representation of an existing Response Policy Rule.
* [dnsResponsePolicyRulesList](#dnsresponsepolicyruleslist) - Enumerates all Response Policy Rules associated with a project.
* [dnsResponsePolicyRulesPatch](#dnsresponsepolicyrulespatch) - Applies a partial update to an existing Response Policy Rule.
* [dnsResponsePolicyRulesUpdate](#dnsresponsepolicyrulesupdate) - Updates an existing Response Policy Rule.

## dnsResponsePolicyRulesCreate

Creates a new Response Policy Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesCreateRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesCreateResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesCreateSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.ResponsePolicyRule;
import org.openapis.openapi.models.shared.ResponsePolicyRuleBehaviorEnum;
import org.openapis.openapi.models.shared.ResponsePolicyRuleLocalData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesCreateRequest req = new DnsResponsePolicyRulesCreateRequest("velit", "molestiae", "nam") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "mollitia";
                    kind = "asperiores";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "quibusdam";
                                name = "Nina Ledner";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "accusamus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "incidunt";
                                                            port = "labore";
                                                            project = "blanditiis";
                                                            region = "ducimus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consectetur";
                                                location = "sapiente";
                                                rrdatas = new String[]{{
                                                    add("accusantium"),
                                                    add("ratione"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("asperiores"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "tempore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quasi";
                                                            port = "consequuntur";
                                                            project = "nemo";
                                                            region = "nobis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "debitis";
                                                location = "labore";
                                                rrdatas = new String[]{{
                                                    add("minima"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("itaque"),
                                                }};
                                            }}),
                                        }};
                                        kind = "error";
                                    }};
                                    kind = "expedita";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "temporibus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "earum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "odit";
                                                                port = "odit";
                                                                project = "eius";
                                                                region = "error";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "vel";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "alias";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "ab";
                                                                port = "sunt";
                                                                project = "amet";
                                                                region = "cum";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "iusto";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "non";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "vero";
                                                                port = "eligendi";
                                                                project = "minima";
                                                                region = "omnis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "recusandae";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "voluptatibus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "in";
                                                                port = "repellat";
                                                                project = "amet";
                                                                region = "cumque";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "dolore";
                                                    location = "optio";
                                                    rrdatas = new String[]{{
                                                        add("repudiandae"),
                                                        add("tempora"),
                                                        add("libero"),
                                                        add("suscipit"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("iusto"),
                                                        add("aliquid"),
                                                        add("sint"),
                                                        add("aliquid"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "sapiente";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "eligendi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nihil";
                                                                port = "eius";
                                                                project = "dignissimos";
                                                                region = "corporis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "perferendis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "amet";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nihil";
                                                                port = "officiis";
                                                                project = "dolore";
                                                                region = "magnam";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "maiores";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "dicta";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "praesentium";
                                                                port = "libero";
                                                                project = "consequatur";
                                                                region = "totam";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "tempora";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "dolor";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "omnis";
                                                                port = "quam";
                                                                project = "officiis";
                                                                region = "dicta";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                    location = "consectetur";
                                                    rrdatas = new String[]{{
                                                        add("odit"),
                                                        add("incidunt"),
                                                        add("corporis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("suscipit"),
                                                        add("ducimus"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "excepturi";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "corrupti";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "eius";
                                                                port = "placeat";
                                                                project = "fugit";
                                                                region = "facere";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ipsam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "porro";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "perspiciatis";
                                                                port = "ducimus";
                                                                project = "qui";
                                                                region = "qui";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "consectetur";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "saepe";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "aliquid";
                                                                port = "cum";
                                                                project = "fugiat";
                                                                region = "rem";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "voluptatibus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "corporis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "aut";
                                                                port = "voluptatem";
                                                                project = "libero";
                                                                region = "excepturi";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "odio";
                                                    location = "omnis";
                                                    rrdatas = new String[]{{
                                                        add("delectus"),
                                                        add("magni"),
                                                        add("sit"),
                                                        add("velit"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("nihil"),
                                                        add("neque"),
                                                        add("aspernatur"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "eaque";
                                        }};
                                        kind = "corporis";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "aut";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "quod";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "architecto";
                                                    port = "voluptatem";
                                                    project = "perspiciatis";
                                                    region = "ea";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "eius";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "voluptatem";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "beatae";
                                                    port = "sequi";
                                                    project = "rerum";
                                                    region = "ipsum";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "debitis";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "eaque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "ut";
                                                    port = "delectus";
                                                    project = "aliquid";
                                                    region = "ullam";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 9786.83;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cumque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quae";
                                                            port = "nihil";
                                                            project = "quam";
                                                            region = "assumenda";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "placeat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tenetur";
                                                            port = "non";
                                                            project = "accusantium";
                                                            region = "corrupti";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "itaque";
                                                rrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("dicta"),
                                                    add("corporis"),
                                                    add("impedit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cum"),
                                                    add("dolore"),
                                                    add("illum"),
                                                    add("ea"),
                                                }};
                                                weight = 8892.01;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "necessitatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maiores";
                                                            port = "odio";
                                                            project = "veniam";
                                                            region = "fuga";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "itaque";
                                                rrdatas = new String[]{{
                                                    add("tenetur"),
                                                    add("sed"),
                                                    add("deserunt"),
                                                    add("eligendi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("distinctio"),
                                                    add("corporis"),
                                                    add("quas"),
                                                }};
                                                weight = 7453.04;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "unde";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quisquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "sed";
                                                            port = "suscipit";
                                                            project = "facere";
                                                            region = "pariatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corrupti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "eius";
                                                            port = "vel";
                                                            project = "quasi";
                                                            region = "vero";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "fugit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "optio";
                                                            port = "nobis";
                                                            project = "recusandae";
                                                            region = "commodi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "possimus";
                                                rrdatas = new String[]{{
                                                    add("veniam"),
                                                    add("sit"),
                                                    add("fugit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequatur"),
                                                    add("vero"),
                                                    add("id"),
                                                    add("error"),
                                                }};
                                                weight = 1876.12;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nihil";
                                                            port = "fuga";
                                                            project = "cumque";
                                                            region = "consequuntur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "maiores";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("delectus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("deleniti"),
                                                    add("enim"),
                                                    add("sit"),
                                                }};
                                                weight = 279.55;
                                            }}),
                                        }};
                                        kind = "natus";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("tempora"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("quasi"),
                                    add("veritatis"),
                                    add("ex"),
                                }};
                                ttl = 43928;
                                type = "quas";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "dolores";
                                name = "Joy Macejkovic";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "autem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "beatae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "consectetur";
                                                            port = "soluta";
                                                            project = "tenetur";
                                                            region = "necessitatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ullam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "debitis";
                                                            port = "quidem";
                                                            project = "magnam";
                                                            region = "doloremque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "earum";
                                                            port = "est";
                                                            project = "earum";
                                                            region = "nihil";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nostrum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "perferendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ullam";
                                                            port = "ratione";
                                                            project = "eos";
                                                            region = "id";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "modi";
                                                location = "illum";
                                                rrdatas = new String[]{{
                                                    add("consectetur"),
                                                    add("reprehenderit"),
                                                    add("eligendi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("culpa"),
                                                    add("culpa"),
                                                    add("a"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eius";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quaerat";
                                                            port = "voluptatum";
                                                            project = "numquam";
                                                            region = "explicabo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "tempore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "est";
                                                            port = "at";
                                                            project = "ipsum";
                                                            region = "explicabo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nulla";
                                                location = "est";
                                                rrdatas = new String[]{{
                                                    add("necessitatibus"),
                                                    add("voluptatum"),
                                                    add("quasi"),
                                                    add("mollitia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("sapiente"),
                                                    add("ut"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "labore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ratione";
                                                            port = "tenetur";
                                                            project = "saepe";
                                                            region = "quod";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nemo";
                                                            port = "nesciunt";
                                                            project = "earum";
                                                            region = "eum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolor";
                                                location = "placeat";
                                                rrdatas = new String[]{{
                                                    add("sed"),
                                                    add("eaque"),
                                                    add("natus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nihil"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "deserunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ex";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "optio";
                                                            port = "at";
                                                            project = "ad";
                                                            region = "asperiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "occaecati";
                                                            port = "repellendus";
                                                            project = "culpa";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "magni";
                                                            port = "eos";
                                                            project = "harum";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "omnis";
                                                location = "quis";
                                                rrdatas = new String[]{{
                                                    add("natus"),
                                                    add("aliquam"),
                                                    add("vero"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("praesentium"),
                                                    add("eum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "vitae";
                                    }};
                                    kind = "animi";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ullam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "maiores";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "accusamus";
                                                                port = "ipsam";
                                                                project = "fugiat";
                                                                region = "odio";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ullam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "eligendi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "doloribus";
                                                                port = "necessitatibus";
                                                                project = "rem";
                                                                region = "a";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nihil";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "aut";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "rerum";
                                                                port = "voluptatibus";
                                                                project = "nulla";
                                                                region = "quod";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "non";
                                                    location = "dolore";
                                                    rrdatas = new String[]{{
                                                        add("alias"),
                                                        add("blanditiis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("illo"),
                                                        add("a"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "molestiae";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "dolore";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nostrum";
                                                                port = "ex";
                                                                project = "amet";
                                                                region = "voluptate";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "molestias";
                                                    location = "voluptatibus";
                                                    rrdatas = new String[]{{
                                                        add("hic"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("odit"),
                                                        add("molestiae"),
                                                        add("accusamus"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "inventore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "praesentium";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "consequuntur";
                                                                port = "laboriosam";
                                                                project = "nemo";
                                                                region = "reprehenderit";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "soluta";
                                                    location = "ipsum";
                                                    rrdatas = new String[]{{
                                                        add("delectus"),
                                                        add("maxime"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("distinctio"),
                                                        add("cupiditate"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "iusto";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "saepe";
                                                                port = "ad";
                                                                project = "magni";
                                                                region = "nostrum";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "minus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "quam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "numquam";
                                                                port = "architecto";
                                                                project = "fuga";
                                                                region = "totam";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "velit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "sed";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "veniam";
                                                                port = "quae";
                                                                project = "dolore";
                                                                region = "in";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "libero";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "cumque";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "beatae";
                                                                port = "porro";
                                                                project = "cumque";
                                                                region = "distinctio";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "numquam";
                                                    location = "fugit";
                                                    rrdatas = new String[]{{
                                                        add("culpa"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("minus"),
                                                        add("vero"),
                                                        add("impedit"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "omnis";
                                        }};
                                        kind = "et";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "fuga";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "distinctio";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "nulla";
                                                    port = "totam";
                                                    project = "praesentium";
                                                    region = "officiis";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "esse";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "delectus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "minus";
                                                    port = "labore";
                                                    project = "quas";
                                                    region = "sed";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "veniam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "quibusdam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "voluptate";
                                                    port = "reprehenderit";
                                                    project = "et";
                                                    region = "eveniet";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "voluptate";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "at";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "in";
                                                    port = "eius";
                                                    project = "aut";
                                                    region = "consequatur";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 6114.85;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "repellendus";
                                                            port = "voluptates";
                                                            project = "illo";
                                                            region = "facere";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "voluptate";
                                                            port = "tempore";
                                                            project = "ullam";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ullam";
                                                            port = "in";
                                                            project = "doloribus";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "similique";
                                                            port = "quia";
                                                            project = "architecto";
                                                            region = "ea";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "accusamus";
                                                rrdatas = new String[]{{
                                                    add("excepturi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laborum"),
                                                    add("a"),
                                                    add("repudiandae"),
                                                }};
                                                weight = 7952.53;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laboriosam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "cupiditate";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aliquam";
                                                            port = "excepturi";
                                                            project = "atque";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "magnam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eius";
                                                            port = "maiores";
                                                            project = "delectus";
                                                            region = "quos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ab";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consequatur";
                                                            port = "itaque";
                                                            project = "repellat";
                                                            region = "voluptatem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolor";
                                                rrdatas = new String[]{{
                                                    add("quaerat"),
                                                    add("a"),
                                                    add("neque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("numquam"),
                                                }};
                                                weight = 6520.13;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quas";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "enim";
                                                            port = "corporis";
                                                            project = "iste";
                                                            region = "ea";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "autem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nesciunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "animi";
                                                            port = "dolorum";
                                                            project = "voluptas";
                                                            region = "temporibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "porro";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "praesentium";
                                                            port = "magni";
                                                            project = "quisquam";
                                                            region = "expedita";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "in";
                                                rrdatas = new String[]{{
                                                    add("delectus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("minus"),
                                                    add("tenetur"),
                                                    add("assumenda"),
                                                }};
                                                weight = 3514.95;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "dicta";
                                                            port = "quidem";
                                                            project = "omnis";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dignissimos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laudantium";
                                                            port = "dolore";
                                                            project = "aliquid";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aspernatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolorem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsa";
                                                            port = "excepturi";
                                                            project = "repellendus";
                                                            region = "soluta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "amet";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quibusdam";
                                                            port = "sint";
                                                            project = "voluptates";
                                                            region = "nihil";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ad";
                                                rrdatas = new String[]{{
                                                    add("fuga"),
                                                    add("consequatur"),
                                                    add("sit"),
                                                    add("iure"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quis"),
                                                    add("dolorem"),
                                                    add("omnis"),
                                                    add("sed"),
                                                }};
                                                weight = 7759.59;
                                            }}),
                                        }};
                                        kind = "et";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("est"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("veniam"),
                                }};
                                ttl = 665082;
                                type = "rem";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "cum";
                                name = "Rene Cassin";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aspernatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "unde";
                                                            port = "laborum";
                                                            project = "provident";
                                                            region = "hic";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "explicabo";
                                                            port = "odit";
                                                            project = "illo";
                                                            region = "architecto";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quia";
                                                location = "ad";
                                                rrdatas = new String[]{{
                                                    add("ullam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("possimus"),
                                                    add("iste"),
                                                    add("blanditiis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "totam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "repellat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "culpa";
                                                            port = "voluptate";
                                                            project = "cupiditate";
                                                            region = "maxime";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "assumenda";
                                                location = "nihil";
                                                rrdatas = new String[]{{
                                                    add("optio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("magni"),
                                                    add("modi"),
                                                    add("voluptatum"),
                                                    add("dolore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "possimus";
                                    }};
                                    kind = "dolorum";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "omnis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "qui";
                                                                port = "similique";
                                                                project = "eligendi";
                                                                region = "numquam";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "inventore";
                                                    location = "necessitatibus";
                                                    rrdatas = new String[]{{
                                                        add("exercitationem"),
                                                        add("nihil"),
                                                        add("quia"),
                                                        add("quis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("dicta"),
                                                        add("dicta"),
                                                        add("eum"),
                                                        add("sint"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "id";
                                        }};
                                        kind = "nobis";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "itaque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "vitae";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "voluptatum";
                                                    port = "deserunt";
                                                    project = "aspernatur";
                                                    region = "neque";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 7720.48;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "labore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "eos";
                                                            port = "quibusdam";
                                                            project = "repellat";
                                                            region = "mollitia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quaerat";
                                                rrdatas = new String[]{{
                                                    add("sunt"),
                                                    add("perspiciatis"),
                                                    add("quam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("iure"),
                                                    add("nulla"),
                                                    add("recusandae"),
                                                    add("iste"),
                                                }};
                                                weight = 1342.05;
                                            }}),
                                        }};
                                        kind = "aspernatur";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("ipsam"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("delectus"),
                                }};
                                ttl = 904288;
                                type = "sunt";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "in";
                                name = "Irene Bartell";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nesciunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "unde";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quis";
                                                            port = "modi";
                                                            project = "adipisci";
                                                            region = "pariatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dolore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolor";
                                                            port = "perspiciatis";
                                                            project = "accusamus";
                                                            region = "voluptates";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quia";
                                                location = "aspernatur";
                                                rrdatas = new String[]{{
                                                    add("non"),
                                                    add("laboriosam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("tempora"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "minima";
                                                            port = "magnam";
                                                            project = "vitae";
                                                            region = "quos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "atque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "corporis";
                                                            port = "vel";
                                                            project = "accusamus";
                                                            region = "totam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsam";
                                                location = "at";
                                                rrdatas = new String[]{{
                                                    add("nihil"),
                                                    add("laudantium"),
                                                    add("dolorem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("officiis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "libero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptas";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "odio";
                                                            port = "eligendi";
                                                            project = "nesciunt";
                                                            region = "harum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aperiam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ad";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "culpa";
                                                            port = "aliquam";
                                                            project = "ut";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloribus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "architecto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "deserunt";
                                                            port = "nulla";
                                                            project = "corrupti";
                                                            region = "voluptate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "alias";
                                                location = "iure";
                                                rrdatas = new String[]{{
                                                    add("incidunt"),
                                                    add("ea"),
                                                    add("alias"),
                                                    add("laudantium"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("libero"),
                                                }};
                                            }}),
                                        }};
                                        kind = "maiores";
                                    }};
                                    kind = "nam";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "modi";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "delectus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "nemo";
                                                                port = "at";
                                                                project = "magnam";
                                                                region = "officiis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "sed";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "saepe";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "doloribus";
                                                                port = "facilis";
                                                                project = "minima";
                                                                region = "impedit";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "facilis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "quis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "beatae";
                                                                port = "dignissimos";
                                                                project = "nisi";
                                                                region = "consectetur";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quos";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "sunt";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "facere";
                                                                port = "distinctio";
                                                                project = "ducimus";
                                                                region = "atque";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "consectetur";
                                                    location = "nemo";
                                                    rrdatas = new String[]{{
                                                        add("accusamus"),
                                                        add("minus"),
                                                        add("impedit"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("cumque"),
                                                        add("rerum"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "vel";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "delectus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "impedit";
                                                                port = "illum";
                                                                project = "ullam";
                                                                region = "praesentium";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "perferendis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "animi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nesciunt";
                                                                port = "quas";
                                                                project = "sunt";
                                                                region = "aperiam";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "itaque";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "repellat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "tempora";
                                                                port = "quaerat";
                                                                project = "magnam";
                                                                region = "voluptate";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "magni";
                                                    location = "excepturi";
                                                    rrdatas = new String[]{{
                                                        add("cumque"),
                                                        add("pariatur"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("rerum"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "illum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "amet";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "libero";
                                                                port = "impedit";
                                                                project = "repudiandae";
                                                                region = "dolores";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "ut";
                                                    location = "nihil";
                                                    rrdatas = new String[]{{
                                                        add("voluptate"),
                                                        add("aliquid"),
                                                        add("blanditiis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("repudiandae"),
                                                        add("reiciendis"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "exercitationem";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "beatae";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "laboriosam";
                                                                port = "temporibus";
                                                                project = "in";
                                                                region = "veritatis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nobis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "tenetur";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "facere";
                                                                port = "aut";
                                                                project = "itaque";
                                                                region = "rerum";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "molestiae";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "distinctio";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "quaerat";
                                                                port = "odit";
                                                                project = "ab";
                                                                region = "unde";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nemo";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "rerum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "tempora";
                                                                port = "quidem";
                                                                project = "nulla";
                                                                region = "nesciunt";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "quisquam";
                                                    location = "labore";
                                                    rrdatas = new String[]{{
                                                        add("veritatis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("unde"),
                                                        add("assumenda"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "adipisci";
                                        }};
                                        kind = "velit";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "veniam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "nostrum";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "quod";
                                                    port = "consequatur";
                                                    project = "accusantium";
                                                    region = "dicta";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "illo";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "occaecati";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "aliquid";
                                                    port = "sequi";
                                                    project = "culpa";
                                                    region = "fuga";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "modi";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "eveniet";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "optio";
                                                    port = "adipisci";
                                                    project = "ab";
                                                    region = "maxime";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "porro";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "reiciendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "hic";
                                                    port = "porro";
                                                    project = "tempore";
                                                    region = "ullam";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 1235.93;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "et";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "reiciendis";
                                                            port = "distinctio";
                                                            project = "itaque";
                                                            region = "iste";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quod";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "temporibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "natus";
                                                            port = "ipsam";
                                                            project = "repudiandae";
                                                            region = "earum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "commodi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "debitis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "esse";
                                                            port = "aliquid";
                                                            project = "porro";
                                                            region = "quisquam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "molestiae";
                                                rrdatas = new String[]{{
                                                    add("quidem"),
                                                    add("delectus"),
                                                    add("eum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("suscipit"),
                                                }};
                                                weight = 9115.47;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "vel";
                                                            port = "modi";
                                                            project = "dicta";
                                                            region = "provident";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "non";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "sit";
                                                            port = "asperiores";
                                                            project = "aspernatur";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nulla";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "natus";
                                                            port = "possimus";
                                                            project = "magni";
                                                            region = "a";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "cumque";
                                                rrdatas = new String[]{{
                                                    add("delectus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("earum"),
                                                    add("fugit"),
                                                    add("repudiandae"),
                                                }};
                                                weight = 1113.2;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "numquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tempore";
                                                            port = "molestias";
                                                            project = "amet";
                                                            region = "enim";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "illum";
                                                rrdatas = new String[]{{
                                                    add("adipisci"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("id"),
                                                    add("ducimus"),
                                                }};
                                                weight = 1747.57;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "blanditiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "excepturi";
                                                            port = "fugiat";
                                                            project = "laboriosam";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quaerat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "eveniet";
                                                            port = "optio";
                                                            project = "soluta";
                                                            region = "dignissimos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "esse";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "at";
                                                            port = "excepturi";
                                                            project = "eos";
                                                            region = "odit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "maiores";
                                                            port = "exercitationem";
                                                            project = "ducimus";
                                                            region = "dolore";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "iste";
                                                rrdatas = new String[]{{
                                                    add("error"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("harum"),
                                                    add("sapiente"),
                                                    add("laborum"),
                                                }};
                                                weight = 1359.92;
                                            }}),
                                        }};
                                        kind = "vero";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("eum"),
                                    add("quasi"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("accusantium"),
                                    add("quo"),
                                    add("id"),
                                    add("tempora"),
                                }};
                                ttl = 867688;
                                type = "labore";
                            }}),
                        }};
                    }};;
                    ruleName = "quis";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                clientOperationId = "dicta";
                fields = "sit";
                key = "adipisci";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "iure";
                uploadProtocol = "praesentium";
            }};            

            DnsResponsePolicyRulesCreateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesCreate(req, new DnsResponsePolicyRulesCreateSecurity() {{
                option1 = new DnsResponsePolicyRulesCreateSecurityOption1("perspiciatis", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePolicyRulesDelete

Deletes a previously created Response Policy Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesDeleteRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesDeleteResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesDeleteSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesDeleteRequest req = new DnsResponsePolicyRulesDeleteRequest("hic", "accusantium", "minus", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "saepe";
                clientOperationId = "quia";
                fields = "aspernatur";
                key = "minus";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "exercitationem";
                uploadProtocol = "quod";
            }};            

            DnsResponsePolicyRulesDeleteResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesDelete(req, new DnsResponsePolicyRulesDeleteSecurity() {{
                option1 = new DnsResponsePolicyRulesDeleteSecurityOption1("quod", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePolicyRulesGet

Fetches the representation of an existing Response Policy Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesGetRequest req = new DnsResponsePolicyRulesGetRequest("nemo", "molestias", "modi", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "possimus";
                clientOperationId = "nihil";
                fields = "voluptas";
                key = "facere";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "vitae";
                uploadProtocol = "reiciendis";
            }};            

            DnsResponsePolicyRulesGetResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesGet(req, new DnsResponsePolicyRulesGetSecurity() {{
                option1 = new DnsResponsePolicyRulesGetSecurityOption1("cumque", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePolicyRulesList

Enumerates all Response Policy Rules associated with a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListSecurityOption2;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListSecurityOption3;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesListRequest req = new DnsResponsePolicyRulesListRequest("explicabo", "sit", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "consectetur";
                key = "in";
                maxResults = 698630L;
                oauthToken = "distinctio";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "sit";
                uploadProtocol = "optio";
            }};            

            DnsResponsePolicyRulesListResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesList(req, new DnsResponsePolicyRulesListSecurity() {{
                option1 = new DnsResponsePolicyRulesListSecurityOption1("impedit", "corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicyRulesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePolicyRulesPatch

Applies a partial update to an existing Response Policy Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesPatchRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesPatchResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesPatchSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.ResponsePolicyRule;
import org.openapis.openapi.models.shared.ResponsePolicyRuleBehaviorEnum;
import org.openapis.openapi.models.shared.ResponsePolicyRuleLocalData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesPatchRequest req = new DnsResponsePolicyRulesPatchRequest("quas", "ullam", "veritatis", "quas") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BYPASS_RESPONSE_POLICY;
                    dnsName = "labore";
                    kind = "nulla";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "consequatur";
                                name = "Maggie Weissnat";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quibusdam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "pariatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "labore";
                                                            port = "commodi";
                                                            project = "mollitia";
                                                            region = "similique";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quasi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ea";
                                                            port = "facere";
                                                            project = "corrupti";
                                                            region = "magni";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "blanditiis";
                                                location = "assumenda";
                                                rrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("inventore"),
                                                    add("nesciunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "unde";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quaerat";
                                                            port = "aliquid";
                                                            project = "eum";
                                                            region = "quaerat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "enim";
                                                location = "cumque";
                                                rrdatas = new String[]{{
                                                    add("quibusdam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("et"),
                                                    add("delectus"),
                                                    add("explicabo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "aspernatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nemo";
                                                            port = "laboriosam";
                                                            project = "iste";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "reiciendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "consequatur";
                                                            port = "voluptates";
                                                            project = "dolorum";
                                                            region = "fugit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "vel";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "libero";
                                                            port = "saepe";
                                                            project = "ipsa";
                                                            region = "dignissimos";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "veritatis";
                                                location = "harum";
                                                rrdatas = new String[]{{
                                                    add("ab"),
                                                    add("ex"),
                                                    add("dolor"),
                                                    add("officiis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "harum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "libero";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "blanditiis";
                                                            port = "aliquam";
                                                            project = "vero";
                                                            region = "dolorum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quam";
                                                            port = "repellendus";
                                                            project = "eaque";
                                                            region = "incidunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "ipsa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "incidunt";
                                                            port = "iusto";
                                                            project = "laborum";
                                                            region = "in";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "numquam";
                                                location = "quia";
                                                rrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("ut"),
                                                    add("eius"),
                                                    add("cupiditate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("placeat"),
                                                    add("tempore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "facere";
                                    }};
                                    kind = "earum";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "reiciendis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "tempore";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "provident";
                                                                port = "soluta";
                                                                project = "maxime";
                                                                region = "commodi";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "consectetur";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "nisi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "eveniet";
                                                                port = "tempore";
                                                                project = "asperiores";
                                                                region = "temporibus";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "delectus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "ipsam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "dolores";
                                                                port = "iste";
                                                                project = "labore";
                                                                region = "porro";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eaque";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "consequatur";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "accusantium";
                                                                port = "ea";
                                                                project = "laborum";
                                                                region = "et";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "fugit";
                                                    location = "quos";
                                                    rrdatas = new String[]{{
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("voluptates"),
                                                        add("debitis"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "suscipit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "doloremque";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "suscipit";
                                                                port = "temporibus";
                                                                project = "vel";
                                                                region = "itaque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nulla";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "quod";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nesciunt";
                                                                port = "temporibus";
                                                                project = "temporibus";
                                                                region = "eum";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "non";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "nostrum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "illo";
                                                                port = "corporis";
                                                                project = "ipsa";
                                                                region = "occaecati";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dolorum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "recusandae";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "dignissimos";
                                                                port = "doloremque";
                                                                project = "quibusdam";
                                                                region = "adipisci";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "minus";
                                                    location = "veniam";
                                                    rrdatas = new String[]{{
                                                        add("architecto"),
                                                        add("maiores"),
                                                        add("perspiciatis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("magni"),
                                                        add("incidunt"),
                                                        add("fugit"),
                                                        add("quisquam"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quidem";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "aliquid";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "illo";
                                                                port = "reiciendis";
                                                                project = "ipsum";
                                                                region = "doloremque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quod";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "non";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "repellat";
                                                                port = "exercitationem";
                                                                project = "quidem";
                                                                region = "ea";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "molestiae";
                                                    location = "vitae";
                                                    rrdatas = new String[]{{
                                                        add("voluptatum"),
                                                        add("iste"),
                                                        add("eaque"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("magnam"),
                                                        add("consequuntur"),
                                                        add("est"),
                                                        add("tempora"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "expedita";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "adipisci";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "at";
                                                                port = "rem";
                                                                project = "exercitationem";
                                                                region = "tempore";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eos";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "aperiam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "perspiciatis";
                                                                port = "dicta";
                                                                project = "assumenda";
                                                                region = "reprehenderit";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "tempora";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "voluptates";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "eligendi";
                                                                port = "consequuntur";
                                                                project = "quae";
                                                                region = "veniam";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "sint";
                                                    location = "minus";
                                                    rrdatas = new String[]{{
                                                        add("porro"),
                                                        add("nesciunt"),
                                                        add("maiores"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("autem"),
                                                        add("esse"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "officiis";
                                        }};
                                        kind = "aperiam";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "sed";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "consequuntur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "suscipit";
                                                    port = "quis";
                                                    project = "nobis";
                                                    region = "beatae";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "repellendus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "consequuntur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "nobis";
                                                    port = "possimus";
                                                    project = "laborum";
                                                    region = "optio";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "debitis";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "reiciendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "sunt";
                                                    port = "odit";
                                                    project = "inventore";
                                                    region = "laboriosam";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "quod";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "consequuntur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "sequi";
                                                    port = "sint";
                                                    project = "accusamus";
                                                    region = "deleniti";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 9389.65;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "accusantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "inventore";
                                                            port = "omnis";
                                                            project = "quibusdam";
                                                            region = "excepturi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nostrum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "doloribus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "adipisci";
                                                            port = "natus";
                                                            project = "necessitatibus";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sint";
                                                rrdatas = new String[]{{
                                                    add("nisi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("facilis"),
                                                }};
                                                weight = 8398.5;
                                            }}),
                                        }};
                                        kind = "error";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("delectus"),
                                    add("molestiae"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("laborum"),
                                    add("odit"),
                                    add("rerum"),
                                }};
                                ttl = 161218;
                                type = "magnam";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "et";
                                name = "Diana Hudson";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quas";
                                                            port = "repellat";
                                                            project = "placeat";
                                                            region = "eligendi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quaerat";
                                                location = "veniam";
                                                rrdatas = new String[]{{
                                                    add("commodi"),
                                                    add("dolores"),
                                                    add("dicta"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("maxime"),
                                                    add("dolores"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eum";
                                                            port = "consectetur";
                                                            project = "velit";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aspernatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "incidunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "adipisci";
                                                            port = "atque";
                                                            project = "tempore";
                                                            region = "asperiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "cupiditate";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "et";
                                                            port = "accusamus";
                                                            project = "excepturi";
                                                            region = "deleniti";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "inventore";
                                                location = "perspiciatis";
                                                rrdatas = new String[]{{
                                                    add("corporis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("molestiae"),
                                                    add("adipisci"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "itaque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nam";
                                                            port = "id";
                                                            project = "cumque";
                                                            region = "in";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "a";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "culpa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "occaecati";
                                                            port = "exercitationem";
                                                            project = "unde";
                                                            region = "labore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laboriosam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "minus";
                                                            port = "magni";
                                                            project = "mollitia";
                                                            region = "officiis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aliquam";
                                                location = "quas";
                                                rrdatas = new String[]{{
                                                    add("autem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("explicabo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iste";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "libero";
                                                            port = "iure";
                                                            project = "voluptatibus";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "accusantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nesciunt";
                                                            port = "commodi";
                                                            project = "molestias";
                                                            region = "atque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "explicabo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ipsam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "sequi";
                                                            port = "optio";
                                                            project = "libero";
                                                            region = "ab";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "alias";
                                                location = "accusantium";
                                                rrdatas = new String[]{{
                                                    add("autem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("necessitatibus"),
                                                    add("reiciendis"),
                                                    add("incidunt"),
                                                }};
                                            }}),
                                        }};
                                        kind = "provident";
                                    }};
                                    kind = "dolores";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quod";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "sit";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "nesciunt";
                                                                port = "libero";
                                                                project = "molestiae";
                                                                region = "eius";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "perspiciatis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "ex";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "officia";
                                                                port = "quisquam";
                                                                project = "rem";
                                                                region = "eveniet";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eveniet";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "repellat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "libero";
                                                                port = "sapiente";
                                                                project = "veritatis";
                                                                region = "provident";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "veniam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "totam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "eius";
                                                                port = "doloremque";
                                                                project = "vero";
                                                                region = "aut";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "sequi";
                                                    location = "reiciendis";
                                                    rrdatas = new String[]{{
                                                        add("assumenda"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("nobis"),
                                                        add("est"),
                                                        add("quia"),
                                                        add("natus"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "molestiae";
                                        }};
                                        kind = "facilis";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ipsum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "cupiditate";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "harum";
                                                    port = "nobis";
                                                    project = "numquam";
                                                    region = "consequatur";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "temporibus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "quos";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "blanditiis";
                                                    port = "voluptatibus";
                                                    project = "nulla";
                                                    region = "nemo";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ratione";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "perferendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "impedit";
                                                    port = "libero";
                                                    project = "dolor";
                                                    region = "nesciunt";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "vitae";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "numquam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "quia";
                                                    port = "reiciendis";
                                                    project = "modi";
                                                    region = "doloribus";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 890.1;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "a";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aperiam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "voluptatem";
                                                            port = "soluta";
                                                            project = "hic";
                                                            region = "beatae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "delectus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "fugit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "reprehenderit";
                                                            port = "sint";
                                                            project = "dignissimos";
                                                            region = "voluptatum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nulla";
                                                rrdatas = new String[]{{
                                                    add("similique"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("officia"),
                                                    add("odio"),
                                                    add("voluptate"),
                                                }};
                                                weight = 6484.14;
                                            }}),
                                        }};
                                        kind = "repudiandae";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("esse"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("consequuntur"),
                                }};
                                ttl = 99908;
                                type = "est";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "nemo";
                                name = "Brenda Hagenes";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repudiandae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "facilis";
                                                            port = "doloremque";
                                                            project = "officiis";
                                                            region = "nisi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "alias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ut";
                                                            port = "hic";
                                                            project = "facere";
                                                            region = "tenetur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "saepe";
                                                location = "assumenda";
                                                rrdatas = new String[]{{
                                                    add("exercitationem"),
                                                    add("dolore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("recusandae"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "exercitationem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "mollitia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ut";
                                                            port = "est";
                                                            project = "quasi";
                                                            region = "rerum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "recusandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "natus";
                                                            port = "reprehenderit";
                                                            project = "dolorem";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cumque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ad";
                                                            port = "fugiat";
                                                            project = "quas";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "delectus";
                                                            port = "rerum";
                                                            project = "voluptate";
                                                            region = "perferendis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "maiores";
                                                location = "harum";
                                                rrdatas = new String[]{{
                                                    add("molestias"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("non"),
                                                    add("magni"),
                                                }};
                                            }}),
                                        }};
                                        kind = "sint";
                                    }};
                                    kind = "consequatur";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dolorem";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "quis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "et";
                                                                port = "officiis";
                                                                project = "quo";
                                                                region = "culpa";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "architecto";
                                                    location = "iure";
                                                    rrdatas = new String[]{{
                                                        add("doloribus"),
                                                        add("praesentium"),
                                                        add("iste"),
                                                        add("tempora"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("ab"),
                                                        add("harum"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ducimus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "accusamus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "necessitatibus";
                                                                port = "nam";
                                                                project = "nemo";
                                                                region = "veritatis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "molestias";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "modi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "similique";
                                                                port = "architecto";
                                                                project = "asperiores";
                                                                region = "est";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "repellendus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "nemo";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quasi";
                                                                port = "odit";
                                                                project = "delectus";
                                                                region = "doloremque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "laboriosam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "dolore";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "enim";
                                                                port = "nam";
                                                                project = "dignissimos";
                                                                region = "consequuntur";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "sapiente";
                                                    location = "alias";
                                                    rrdatas = new String[]{{
                                                        add("nemo"),
                                                        add("dolore"),
                                                        add("corrupti"),
                                                        add("exercitationem"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("laudantium"),
                                                        add("est"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "incidunt";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "labore";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "consequatur";
                                                                port = "voluptatem";
                                                                project = "officia";
                                                                region = "architecto";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "quibusdam";
                                                    location = "autem";
                                                    rrdatas = new String[]{{
                                                        add("tempore"),
                                                        add("cupiditate"),
                                                        add("modi"),
                                                        add("ratione"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("ea"),
                                                        add("aliquam"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "at";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "amet";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "molestias";
                                                                port = "quaerat";
                                                                project = "repellat";
                                                                region = "expedita";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "libero";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "quis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "cumque";
                                                                port = "vero";
                                                                project = "a";
                                                                region = "tenetur";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "ipsam";
                                                    location = "quod";
                                                    rrdatas = new String[]{{
                                                        add("doloremque"),
                                                        add("illo"),
                                                        add("reiciendis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("enim"),
                                                        add("quasi"),
                                                        add("accusamus"),
                                                        add("ipsam"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "aspernatur";
                                        }};
                                        kind = "atque";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "eius";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "mollitia";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "quos";
                                                    port = "explicabo";
                                                    project = "distinctio";
                                                    region = "praesentium";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ullam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "corrupti";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "placeat";
                                                    port = "explicabo";
                                                    project = "placeat";
                                                    region = "animi";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "expedita";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "atque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "laborum";
                                                    port = "magnam";
                                                    project = "veritatis";
                                                    region = "fugit";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 4713.17;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "iure";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "sapiente";
                                                            port = "eius";
                                                            project = "esse";
                                                            region = "quasi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "inventore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "distinctio";
                                                            port = "porro";
                                                            project = "nihil";
                                                            region = "numquam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "necessitatibus";
                                                            port = "quisquam";
                                                            project = "impedit";
                                                            region = "ducimus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "incidunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nihil";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nam";
                                                            port = "incidunt";
                                                            project = "deleniti";
                                                            region = "aliquam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "totam";
                                                rrdatas = new String[]{{
                                                    add("quibusdam"),
                                                    add("iure"),
                                                    add("mollitia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("hic"),
                                                    add("perferendis"),
                                                }};
                                                weight = 2715.86;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "architecto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "qui";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ratione";
                                                            port = "soluta";
                                                            project = "quos";
                                                            region = "sit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laudantium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "perspiciatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nesciunt";
                                                            port = "molestiae";
                                                            project = "adipisci";
                                                            region = "eveniet";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsa";
                                                rrdatas = new String[]{{
                                                    add("sit"),
                                                    add("labore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("excepturi"),
                                                    add("soluta"),
                                                }};
                                                weight = 9146.95;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "fugiat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "qui";
                                                            port = "tenetur";
                                                            project = "sunt";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quidem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "a";
                                                            port = "et";
                                                            project = "ipsam";
                                                            region = "eos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "exercitationem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "laudantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "fuga";
                                                            port = "fuga";
                                                            project = "excepturi";
                                                            region = "corporis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nam";
                                                rrdatas = new String[]{{
                                                    add("suscipit"),
                                                    add("porro"),
                                                    add("nulla"),
                                                    add("consequatur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("in"),
                                                }};
                                                weight = 3159.04;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "est";
                                                            port = "fuga";
                                                            project = "labore";
                                                            region = "adipisci";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ratione";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "magnam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "officiis";
                                                            port = "inventore";
                                                            project = "esse";
                                                            region = "ex";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "amet";
                                                rrdatas = new String[]{{
                                                    add("ad"),
                                                    add("explicabo"),
                                                    add("alias"),
                                                    add("blanditiis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("qui"),
                                                    add("amet"),
                                                    add("recusandae"),
                                                    add("perspiciatis"),
                                                }};
                                                weight = 5485.03;
                                            }}),
                                        }};
                                        kind = "sit";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("repellendus"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("ratione"),
                                    add("sapiente"),
                                    add("alias"),
                                }};
                                ttl = 829766;
                                type = "magnam";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "quis";
                                name = "Gerardo Gislason";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "repudiandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "ipsam";
                                                            port = "quisquam";
                                                            project = "delectus";
                                                            region = "optio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "itaque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "optio";
                                                            port = "esse";
                                                            project = "a";
                                                            region = "quam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quos";
                                                location = "dignissimos";
                                                rrdatas = new String[]{{
                                                    add("adipisci"),
                                                    add("magni"),
                                                    add("recusandae"),
                                                    add("voluptatem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("nesciunt"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "velit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "facere";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "cumque";
                                                            port = "ullam";
                                                            project = "vel";
                                                            region = "reprehenderit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aspernatur";
                                                            port = "harum";
                                                            project = "illum";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "porro";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "eligendi";
                                                            project = "veniam";
                                                            region = "aperiam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consectetur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptas";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nesciunt";
                                                            port = "iste";
                                                            project = "distinctio";
                                                            region = "cumque";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "assumenda";
                                                location = "alias";
                                                rrdatas = new String[]{{
                                                    add("vel"),
                                                    add("qui"),
                                                    add("perspiciatis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptatibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "reiciendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laudantium";
                                                            port = "nemo";
                                                            project = "ab";
                                                            region = "atque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "natus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "possimus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "officiis";
                                                            port = "reiciendis";
                                                            project = "voluptatum";
                                                            region = "aperiam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "officia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quae";
                                                            port = "adipisci";
                                                            project = "hic";
                                                            region = "dolorem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "adipisci";
                                                location = "optio";
                                                rrdatas = new String[]{{
                                                    add("odio"),
                                                    add("unde"),
                                                    add("asperiores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("provident"),
                                                    add("fugiat"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "non";
                                    }};
                                    kind = "aut";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "soluta";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "qui";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "a";
                                                                port = "temporibus";
                                                                project = "sequi";
                                                                region = "eum";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "rem";
                                                    location = "expedita";
                                                    rrdatas = new String[]{{
                                                        add("excepturi"),
                                                        add("dolores"),
                                                        add("dicta"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("distinctio"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "facilis";
                                        }};
                                        kind = "magnam";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "nostrum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "neque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "optio";
                                                    port = "esse";
                                                    project = "adipisci";
                                                    region = "autem";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 2708.4;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "veritatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "sequi";
                                                            port = "recusandae";
                                                            project = "fugiat";
                                                            region = "quod";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "eum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "quod";
                                                            port = "nemo";
                                                            project = "architecto";
                                                            region = "vel";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "amet";
                                                rrdatas = new String[]{{
                                                    add("libero"),
                                                    add("maxime"),
                                                    add("deserunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("molestias"),
                                                    add("dolores"),
                                                }};
                                                weight = 1716.4;
                                            }}),
                                        }};
                                        kind = "reprehenderit";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("non"),
                                    add("odit"),
                                    add("maxime"),
                                    add("aspernatur"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("minus"),
                                }};
                                ttl = 326775;
                                type = "ipsam";
                            }}),
                        }};
                    }};;
                    ruleName = "sequi";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "incidunt";
                clientOperationId = "cupiditate";
                fields = "minima";
                key = "quo";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "quidem";
                uploadProtocol = "harum";
            }};            

            DnsResponsePolicyRulesPatchResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesPatch(req, new DnsResponsePolicyRulesPatchSecurity() {{
                option1 = new DnsResponsePolicyRulesPatchSecurityOption1("adipisci", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicyRulesPatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResponsePolicyRulesUpdate

Updates an existing Response Policy Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesUpdateRequest;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesUpdateResponse;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesUpdateSecurity;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResponsePolicyRulesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.ResponsePolicyRule;
import org.openapis.openapi.models.shared.ResponsePolicyRuleBehaviorEnum;
import org.openapis.openapi.models.shared.ResponsePolicyRuleLocalData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResponsePolicyRulesUpdateRequest req = new DnsResponsePolicyRulesUpdateRequest("minima", "reprehenderit", "quo", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "iste";
                    kind = "molestias";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "itaque";
                                name = "Omar Murazik";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "temporibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quasi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "inventore";
                                                            port = "fugit";
                                                            project = "earum";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "at";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "eum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nam";
                                                            port = "sapiente";
                                                            project = "porro";
                                                            region = "impedit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veniam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "iure";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nulla";
                                                            port = "quaerat";
                                                            project = "aut";
                                                            region = "architecto";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "reiciendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "esse";
                                                            port = "iste";
                                                            project = "ex";
                                                            region = "odit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatem";
                                                location = "voluptas";
                                                rrdatas = new String[]{{
                                                    add("vero"),
                                                    add("hic"),
                                                    add("consequuntur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aperiam"),
                                                    add("animi"),
                                                    add("ratione"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "non";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "porro";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "deserunt";
                                                            port = "fuga";
                                                            project = "perferendis";
                                                            region = "illo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "culpa";
                                                            port = "quo";
                                                            project = "sunt";
                                                            region = "necessitatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iste";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "adipisci";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quis";
                                                            port = "quos";
                                                            project = "ea";
                                                            region = "fugiat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "delectus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "voluptatibus";
                                                            port = "sint";
                                                            project = "reprehenderit";
                                                            region = "est";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "numquam";
                                                location = "nam";
                                                rrdatas = new String[]{{
                                                    add("fuga"),
                                                    add("facere"),
                                                    add("odit"),
                                                    add("nam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quam"),
                                                    add("fugiat"),
                                                    add("ea"),
                                                    add("molestiae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quo";
                                    }};
                                    kind = "deserunt";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "id";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "excepturi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "expedita";
                                                                port = "eius";
                                                                project = "quasi";
                                                                region = "quibusdam";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "voluptas";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "magni";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "velit";
                                                                port = "quis";
                                                                project = "nesciunt";
                                                                region = "sunt";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                    location = "quam";
                                                    rrdatas = new String[]{{
                                                        add("cumque"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("ea"),
                                                        add("totam"),
                                                        add("quidem"),
                                                        add("eaque"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "fuga";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "modi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "beatae";
                                                                port = "rerum";
                                                                project = "repellendus";
                                                                region = "ut";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "nesciunt";
                                                    location = "facere";
                                                    rrdatas = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("quo"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eaque";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "doloremque";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "perferendis";
                                                                port = "dolor";
                                                                project = "earum";
                                                                region = "facilis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eos";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "fugiat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                                networkUrl = "tempore";
                                                                port = "dolorem";
                                                                project = "dolorum";
                                                                region = "in";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "aperiam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "excepturi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "voluptatibus";
                                                                port = "fuga";
                                                                project = "deserunt";
                                                                region = "iure";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "labore";
                                                    location = "quasi";
                                                    rrdatas = new String[]{{
                                                        add("corporis"),
                                                        add("odio"),
                                                        add("quibusdam"),
                                                        add("dicta"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("vero"),
                                                        add("quibusdam"),
                                                        add("maxime"),
                                                        add("consequuntur"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "sit";
                                        }};
                                        kind = "nostrum";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "repellendus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "quos";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "quo";
                                                    port = "sequi";
                                                    project = "quo";
                                                    region = "repudiandae";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 710.87;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "labore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "occaecati";
                                                            port = "necessitatibus";
                                                            project = "necessitatibus";
                                                            region = "autem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "natus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "iure";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "error";
                                                            port = "deleniti";
                                                            project = "tempore";
                                                            region = "saepe";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "adipisci";
                                                rrdatas = new String[]{{
                                                    add("tempora"),
                                                    add("quaerat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("similique"),
                                                    add("porro"),
                                                    add("blanditiis"),
                                                    add("libero"),
                                                }};
                                                weight = 1958.69;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dignissimos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quo";
                                                            port = "nisi";
                                                            project = "quo";
                                                            region = "inventore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "suscipit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nisi";
                                                            port = "quibusdam";
                                                            project = "alias";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellendus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "deserunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "impedit";
                                                            port = "laudantium";
                                                            project = "nihil";
                                                            region = "officia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "repudiandae";
                                                rrdatas = new String[]{{
                                                    add("voluptatem"),
                                                    add("quod"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("vel"),
                                                }};
                                                weight = 3760.17;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "veritatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "excepturi";
                                                            port = "veritatis";
                                                            project = "ipsum";
                                                            region = "iure";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "similique";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "itaque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "possimus";
                                                            port = "minima";
                                                            project = "non";
                                                            region = "qui";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "et";
                                                rrdatas = new String[]{{
                                                    add("tenetur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("asperiores"),
                                                }};
                                                weight = 4141.72;
                                            }}),
                                        }};
                                        kind = "voluptas";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("esse"),
                                    add("veniam"),
                                    add("fugit"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("expedita"),
                                    add("molestiae"),
                                    add("autem"),
                                    add("aliquam"),
                                }};
                                ttl = 803015;
                                type = "nostrum";
                            }}),
                        }};
                    }};;
                    ruleName = "occaecati";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "id";
                clientOperationId = "veniam";
                fields = "ea";
                key = "placeat";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "cumque";
                uploadProtocol = "culpa";
            }};            

            DnsResponsePolicyRulesUpdateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesUpdate(req, new DnsResponsePolicyRulesUpdateSecurity() {{
                option1 = new DnsResponsePolicyRulesUpdateSecurityOption1("pariatur", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.responsePolicyRulesUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
