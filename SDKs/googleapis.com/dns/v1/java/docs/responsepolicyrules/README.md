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

            DnsResponsePolicyRulesCreateRequest req = new DnsResponsePolicyRulesCreateRequest("quos", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                responsePolicyRule = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BYPASS_RESPONSE_POLICY;
                    dnsName = "necessitatibus";
                    kind = "perspiciatis";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "ullam";
                                name = "Darrel Powlowski PhD";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nihil";
                                                            port = "nostrum";
                                                            project = "rerum";
                                                            region = "perferendis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nam";
                                                location = "ullam";
                                                rrdatas = new String[]{{
                                                    add("eos"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("modi"),
                                                    add("illum"),
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "culpa";
                                                            port = "a";
                                                            project = "magnam";
                                                            region = "eius";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ad";
                                                location = "quia";
                                                rrdatas = new String[]{{
                                                    add("quaerat"),
                                                    add("voluptatum"),
                                                    add("numquam"),
                                                    add("explicabo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cupiditate"),
                                                    add("tempore"),
                                                    add("odit"),
                                                    add("est"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nulla";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sapiente";
                                                            port = "necessitatibus";
                                                            project = "voluptatum";
                                                            region = "quasi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "blanditiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ut";
                                                            port = "incidunt";
                                                            project = "labore";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "enim";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ratione";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "saepe";
                                                            port = "quod";
                                                            project = "nulla";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nemo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "earum";
                                                            port = "eum";
                                                            project = "dolor";
                                                            region = "placeat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quos";
                                                location = "sed";
                                                rrdatas = new String[]{{
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "accusamus";
                                                                port = "ipsam";
                                                                project = "fugiat";
                                                                region = "odio";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ullam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "eligendi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repellendus";
                                                            port = "voluptates";
                                                            project = "illo";
                                                            region = "facere";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptate";
                                                            port = "tempore";
                                                            project = "ullam";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ullam";
                                                            port = "in";
                                                            project = "doloribus";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "unde";
                                                            port = "laborum";
                                                            project = "provident";
                                                            region = "hic";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                        }};
                    }};;
                    ruleName = "in";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                clientOperationId = "perspiciatis";
                fields = "error";
                key = "deleniti";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "saepe";
                uploadProtocol = "unde";
            }};            

            DnsResponsePolicyRulesCreateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesCreate(req, new DnsResponsePolicyRulesCreateSecurity() {{
                option1 = new DnsResponsePolicyRulesCreateSecurityOption1("reiciendis", "quis") {{
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

            DnsResponsePolicyRulesDeleteRequest req = new DnsResponsePolicyRulesDeleteRequest("modi", "adipisci", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "numquam";
                clientOperationId = "dolor";
                fields = "perspiciatis";
                key = "accusamus";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "aspernatur";
                uploadProtocol = "ut";
            }};            

            DnsResponsePolicyRulesDeleteResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesDelete(req, new DnsResponsePolicyRulesDeleteSecurity() {{
                option1 = new DnsResponsePolicyRulesDeleteSecurityOption1("non", "laboriosam") {{
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

            DnsResponsePolicyRulesGetRequest req = new DnsResponsePolicyRulesGetRequest("accusantium", "tempora", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "architecto";
                clientOperationId = "minima";
                fields = "magnam";
                key = "vitae";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "quisquam";
                uploadProtocol = "sunt";
            }};            

            DnsResponsePolicyRulesGetResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesGet(req, new DnsResponsePolicyRulesGetSecurity() {{
                option1 = new DnsResponsePolicyRulesGetSecurityOption1("asperiores", "corporis") {{
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

            DnsResponsePolicyRulesListRequest req = new DnsResponsePolicyRulesListRequest("vel", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "culpa";
                fields = "nihil";
                key = "laudantium";
                maxResults = 213860L;
                oauthToken = "odit";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "libero";
                uploadProtocol = "fugiat";
            }};            

            DnsResponsePolicyRulesListResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesList(req, new DnsResponsePolicyRulesListSecurity() {{
                option1 = new DnsResponsePolicyRulesListSecurityOption1("voluptas", "et") {{
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

            DnsResponsePolicyRulesPatchRequest req = new DnsResponsePolicyRulesPatchRequest("odio", "eligendi", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "pariatur";
                    kind = "ad";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "culpa";
                                name = "April Powlowski Sr.";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptate";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "iure";
                                                            port = "temporibus";
                                                            project = "incidunt";
                                                            region = "ea";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "qui";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "maiores";
                                                            port = "nam";
                                                            project = "pariatur";
                                                            region = "quod";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "modi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "delectus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nemo";
                                                            port = "at";
                                                            project = "magnam";
                                                            region = "officiis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sed";
                                                location = "mollitia";
                                                rrdatas = new String[]{{
                                                    add("labore"),
                                                    add("doloribus"),
                                                    add("facilis"),
                                                    add("minima"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("facilis"),
                                                    add("amet"),
                                                    add("quis"),
                                                    add("fugiat"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dignissimos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "consectetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "delectus";
                                                            port = "sunt";
                                                            project = "repudiandae";
                                                            region = "facere";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "distinctio";
                                                location = "ducimus";
                                                rrdatas = new String[]{{
                                                    add("consectetur"),
                                                    add("nemo"),
                                                    add("provident"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("minus"),
                                                    add("impedit"),
                                                    add("minima"),
                                                    add("cumque"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "doloremque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quas";
                                                            port = "impedit";
                                                            project = "illum";
                                                            region = "ullam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "molestiae";
                                                            port = "nesciunt";
                                                            project = "quas";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aperiam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quaerat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "necessitatibus";
                                                            port = "tempora";
                                                            project = "quaerat";
                                                            region = "magnam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptate";
                                                location = "magni";
                                                rrdatas = new String[]{{
                                                    add("esse"),
                                                    add("cumque"),
                                                    add("pariatur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "illo";
                                    }};
                                    kind = "illum";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "expedita";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "impedit";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "dolores";
                                                                port = "ut";
                                                                project = "nihil";
                                                                region = "harum";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "voluptate";
                                                    location = "aliquid";
                                                    rrdatas = new String[]{{
                                                        add("labore"),
                                                        add("repudiandae"),
                                                        add("reiciendis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("exercitationem"),
                                                        add("voluptatem"),
                                                        add("beatae"),
                                                        add("qui"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "temporibus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "veritatis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "voluptatibus";
                                                                port = "tenetur";
                                                                project = "facilis";
                                                                region = "facere";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "aut";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "rerum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quaerat";
                                                                port = "distinctio";
                                                                project = "blanditiis";
                                                                region = "quaerat";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "odit";
                                                    location = "ab";
                                                    rrdatas = new String[]{{
                                                        add("nemo"),
                                                        add("dolorem"),
                                                        add("rerum"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("tempora"),
                                                        add("quidem"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nesciunt";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "labore";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "veritatis";
                                                                port = "veniam";
                                                                project = "unde";
                                                                region = "assumenda";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "adipisci";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "accusamus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "provident";
                                                                port = "nostrum";
                                                                project = "dolor";
                                                                region = "quod";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "consequatur";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "dicta";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "amet";
                                                                port = "occaecati";
                                                                project = "quos";
                                                                region = "aliquid";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "sequi";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "fuga";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "et";
                                                                port = "eveniet";
                                                                project = "aliquid";
                                                                region = "optio";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "adipisci";
                                                    location = "ab";
                                                    rrdatas = new String[]{{
                                                        add("porro"),
                                                        add("explicabo"),
                                                        add("reiciendis"),
                                                        add("dicta"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("porro"),
                                                        add("tempore"),
                                                        add("ullam"),
                                                        add("sunt"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "sint";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "ut";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "reiciendis";
                                                                port = "reiciendis";
                                                                project = "distinctio";
                                                                region = "itaque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "iste";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "quidem";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "iure";
                                                                port = "natus";
                                                                project = "ipsam";
                                                                region = "repudiandae";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "earum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "veniam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "doloremque";
                                                                port = "esse";
                                                                project = "aliquid";
                                                                region = "porro";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quisquam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "mollitia";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "delectus";
                                                                port = "eum";
                                                                project = "beatae";
                                                                region = "suscipit";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "eveniet";
                                                    location = "mollitia";
                                                    rrdatas = new String[]{{
                                                        add("porro"),
                                                        add("molestiae"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("vel"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "modi";
                                        }};
                                        kind = "dicta";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "non";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "soluta";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "cumque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "delectus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "earum";
                                                    port = "fugit";
                                                    project = "repudiandae";
                                                    region = "vitae";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 78.1;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "numquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tempore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "amet";
                                                            port = "enim";
                                                            project = "illum";
                                                            region = "sed";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "adipisci";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolores";
                                                            port = "asperiores";
                                                            project = "occaecati";
                                                            region = "doloremque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "laboriosam";
                                                            port = "id";
                                                            project = "itaque";
                                                            region = "assumenda";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quaerat";
                                                rrdatas = new String[]{{
                                                    add("eveniet"),
                                                    add("optio"),
                                                    add("soluta"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nemo"),
                                                    add("neque"),
                                                }};
                                                weight = 4585.97;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "at";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "eos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quia";
                                                            port = "maxime";
                                                            project = "excepturi";
                                                            region = "sapiente";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ducimus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "iste";
                                                            port = "inventore";
                                                            project = "error";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "harum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "vero";
                                                            port = "odio";
                                                            project = "eum";
                                                            region = "quasi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tenetur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "tempora";
                                                            port = "pariatur";
                                                            project = "labore";
                                                            region = "quis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aliquid";
                                                rrdatas = new String[]{{
                                                    add("reiciendis"),
                                                    add("dicta"),
                                                    add("sit"),
                                                    add("adipisci"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("saepe"),
                                                }};
                                                weight = 4349.36;
                                            }}),
                                        }};
                                        kind = "praesentium";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("omnis"),
                                    add("hic"),
                                    add("accusantium"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("explicabo"),
                                    add("accusantium"),
                                    add("ipsa"),
                                    add("quasi"),
                                }};
                                ttl = 905001;
                                type = "quia";
                            }}),
                        }};
                    }};;
                    ruleName = "aspernatur";
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "veniam";
                clientOperationId = "exercitationem";
                fields = "quod";
                key = "quod";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "molestias";
                uploadProtocol = "modi";
            }};            

            DnsResponsePolicyRulesPatchResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesPatch(req, new DnsResponsePolicyRulesPatchSecurity() {{
                option1 = new DnsResponsePolicyRulesPatchSecurityOption1("similique", "quasi") {{
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

            DnsResponsePolicyRulesUpdateRequest req = new DnsResponsePolicyRulesUpdateRequest("laudantium", "ut", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "facere";
                    kind = "omnis";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "vitae";
                                name = "Mr. Spencer Littel";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "harum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "consectetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "rerum";
                                                            port = "distinctio";
                                                            project = "blanditiis";
                                                            region = "saepe";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quas";
                                                            port = "ullam";
                                                            project = "veritatis";
                                                            region = "quas";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "molestiae";
                                                location = "officiis";
                                                rrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ut"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "hic";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corrupti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ad";
                                                            port = "quibusdam";
                                                            project = "facere";
                                                            region = "pariatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quidem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "similique";
                                                            port = "quasi";
                                                            project = "quo";
                                                            region = "voluptatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "illum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "facere";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "magni";
                                                            port = "blanditiis";
                                                            project = "assumenda";
                                                            region = "culpa";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsa";
                                                location = "inventore";
                                                rrdatas = new String[]{{
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("inventore"),
                                                    add("vitae"),
                                                    add("qui"),
                                                }};
                                            }}),
                                        }};
                                        kind = "unde";
                                    }};
                                    kind = "ex";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "eum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "enim";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "ab";
                                                                port = "quibusdam";
                                                                project = "blanditiis";
                                                                region = "et";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "delectus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "iste";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "magnam";
                                                                port = "aspernatur";
                                                                project = "sapiente";
                                                                region = "nemo";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "laboriosam";
                                                    location = "iste";
                                                    rrdatas = new String[]{{
                                                        add("iusto"),
                                                        add("culpa"),
                                                        add("reiciendis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("consequatur"),
                                                        add("voluptates"),
                                                        add("dolorum"),
                                                        add("fugit"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "veritatis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "placeat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "saepe";
                                                                port = "ipsa";
                                                                project = "dignissimos";
                                                                region = "veritatis";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "harum";
                                                    location = "cumque";
                                                    rrdatas = new String[]{{
                                                        add("ex"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("officiis"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "sed";
                                        }};
                                        kind = "quam";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
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
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "incidunt";
                                                    port = "iusto";
                                                    project = "laborum";
                                                    region = "in";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 2558.95;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "eius";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nisi";
                                                            port = "placeat";
                                                            project = "tempore";
                                                            region = "facere";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "earum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ex";
                                                            port = "tempore";
                                                            project = "provident";
                                                            region = "provident";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "soluta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "corporis";
                                                            port = "nisi";
                                                            project = "aspernatur";
                                                            region = "eveniet";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "temporibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "enim";
                                                            port = "ipsam";
                                                            project = "porro";
                                                            region = "dolores";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "iste";
                                                rrdatas = new String[]{{
                                                    add("porro"),
                                                    add("eaque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequatur"),
                                                    add("nobis"),
                                                }};
                                                weight = 355.52;
                                            }}),
                                        }};
                                        kind = "ea";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("et"),
                                    add("fugit"),
                                    add("quos"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                ttl = 252880;
                                type = "voluptates";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "debitis";
                                name = "Miss Sam Shanahan";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "in";
                                                            port = "nesciunt";
                                                            project = "temporibus";
                                                            region = "temporibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "ut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dignissimos";
                                                            port = "illo";
                                                            project = "corporis";
                                                            region = "ipsa";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "occaecati";
                                                location = "dolorum";
                                                rrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("deleniti"),
                                                    add("dignissimos"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quibusdam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maiores";
                                                            port = "perspiciatis";
                                                            project = "quod";
                                                            region = "magni";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "incidunt";
                                                location = "fugit";
                                                rrdatas = new String[]{{
                                                    add("odio"),
                                                    add("quidem"),
                                                    add("iure"),
                                                    add("aliquid"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("illo"),
                                                    add("reiciendis"),
                                                    add("ipsum"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quod";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "non";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "corporis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "odio";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quis";
                                                                port = "nobis";
                                                                project = "beatae";
                                                                region = "repellendus";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "ex";
                                                    location = "consequuntur";
                                                    rrdatas = new String[]{{
                                                        add("nobis"),
                                                        add("possimus"),
                                                        add("laborum"),
                                                        add("optio"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("architecto"),
                                                        add("reiciendis"),
                                                        add("consequatur"),
                                                        add("sunt"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "inventore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "quod";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "consequuntur";
                                                                port = "aspernatur";
                                                                project = "sequi";
                                                                region = "sint";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "accusamus";
                                                    location = "deleniti";
                                                    rrdatas = new String[]{{
                                                        add("consequuntur"),
                                                        add("enim"),
                                                        add("minus"),
                                                        add("quibusdam"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("nulla"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "omnis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "excepturi";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "sint";
                                                                port = "doloribus";
                                                                project = "magnam";
                                                                region = "adipisci";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "natus";
                                                    location = "necessitatibus";
                                                    rrdatas = new String[]{{
                                                        add("sint"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("nisi"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "impedit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "temporibus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "quaerat";
                                                                port = "delectus";
                                                                project = "molestiae";
                                                                region = "deserunt";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "laborum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "rerum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "magnam";
                                                                port = "et";
                                                                project = "et";
                                                                region = "ratione";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "nisi";
                                                    location = "perspiciatis";
                                                    rrdatas = new String[]{{
                                                        add("temporibus"),
                                                        add("et"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("nisi"),
                                                        add("aliquid"),
                                                        add("excepturi"),
                                                        add("quas"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "repellat";
                                        }};
                                        kind = "placeat";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "quaerat";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "perspiciatis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "dolores";
                                                    port = "dicta";
                                                    project = "molestiae";
                                                    region = "maxime";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "dolores";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "quam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "aliquid";
                                                    port = "voluptate";
                                                    project = "eum";
                                                    region = "consectetur";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "velit";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "aspernatur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "incidunt";
                                                    port = "alias";
                                                    project = "adipisci";
                                                    region = "atque";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "tempore";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "distinctio";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "cupiditate";
                                                    port = "molestiae";
                                                    project = "et";
                                                    region = "accusamus";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 5662.62;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corporis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "molestiae";
                                                            port = "adipisci";
                                                            project = "totam";
                                                            region = "perspiciatis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "optio";
                                                rrdatas = new String[]{{
                                                    add("at"),
                                                    add("nam"),
                                                    add("id"),
                                                    add("cumque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("a"),
                                                    add("quibusdam"),
                                                }};
                                                weight = 6340.91;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "unde";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "pariatur";
                                                            port = "vel";
                                                            project = "laboriosam";
                                                            region = "soluta";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "minus";
                                                rrdatas = new String[]{{
                                                    add("mollitia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aliquam"),
                                                    add("quas"),
                                                    add("aut"),
                                                    add("autem"),
                                                }};
                                                weight = 2099.2;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "occaecati";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tempora";
                                                            port = "libero";
                                                            project = "iure";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "id";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("eum"),
                                                }};
                                                weight = 2026.42;
                                            }}),
                                        }};
                                        kind = "commodi";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("atque"),
                                    add("explicabo"),
                                    add("totam"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("nemo"),
                                    add("sequi"),
                                }};
                                ttl = 762734;
                                type = "libero";
                            }}),
                        }};
                    }};;
                    ruleName = "ab";
                }};;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "doloremque";
                clientOperationId = "autem";
                fields = "tempore";
                key = "necessitatibus";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "provident";
                uploadProtocol = "dolores";
            }};            

            DnsResponsePolicyRulesUpdateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesUpdate(req, new DnsResponsePolicyRulesUpdateSecurity() {{
                option1 = new DnsResponsePolicyRulesUpdateSecurityOption1("illo", "recusandae") {{
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
